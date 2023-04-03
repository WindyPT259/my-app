import { useState } from "react";
import { useForm } from "react-hook-form";
import FileSaver from "file-saver";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import homeServices from "../../apiServices/homeServices";
import Button from '../../components/Button'
import { SelectField, InputField, CheckBoxField } from '../../components/FormField';
import { Toast } from "../../utils";
import '../../styles/home.scss'
const Home = () => {
    const [projectName, setProjectName] = useState('')
    const [loading, setLoading] = useState(true)
    const [disableSelect, setDisableSelect] = useState(false)

    const programLanguagesOptions = [
        { label: '.Net Core', value: '.Net Core' },
        { label: 'ReactJs', value: 'ReactJs' },
        { label: 'Angular', value: 'Angular' },
    ];
    const programDBOptions = [
        { label: 'SQL Server', value: 'SQL Server' },
        { label: 'MySQL', value: 'MySQL' },
        { label: 'MongoDB', value: 'MongoDB' },
    ];

    const defaultValues = { projectName: '', programmingLanguage: '.Net Core', programmingDatabase: 'SQL Server', unitTest: false };

    const validationForm = yup.object().shape({
        projectName: yup
            .string()
            .required('Please enter project name'),
        programmingLanguage: yup
            .string()
            .required('Please select a programming language'),
        programmingDatabase: yup
            .string()
            .required('Please select a programming database'),
    });

    const { control, formState, handleSubmit, setError, setValue, errors } = useForm({ defaultValues, resolver: yupResolver(validationForm) });

    const handleCreateSampleProject = async formValues => {
        try {
            setLoading(true)
            const response = await homeServices.createProject(formValues);
            if (response.data.succeeded) {
                Toast('Create project successful!')
                setProjectName(formValues.ProjectName);
                setLoading(false)
            }
            else {
                Toast('Create project failed!')
                setProjectName('');
                setLoading(true)
            }

        } catch (error) {
            setProjectName('');
            Toast('Create project failed!')
            if (error.response.data.message === 'Error: Duplicated project name.') {
                setError('ProjectName', { message: "Duplicated project name." });
            }
            else {
                setCommonError(error.response.data.message)
            }
            setLoading(true)
        }
        finally {
            setLoading(false);
        }
    };

    const handleDownloadSampleProject = async () => {
        try {
            setLoading(true)
            const response = await homeServices.downloadProject(
                { projectName }, { responseType: 'blob' }
            );
            const blob = new Blob([response.data], { type: 'application/octet-stream' });
            FileSaver.saveAs(blob, `${projectName}.zip`)
            Toast('Download successful!')
        } catch (error) {
            setLoading(true)
            Toast('Download failed!')
        }
        finally {
            setLoading(false);
        }
    }

    const sendData = (option) => {
        if (option.languageTypeId === 1 || option.languageTypeId === 3) {
            setDisableSelect(true);
            setValue('DBMS_TypeId', '4')
        }
        else
            setDisableSelect(false);
    }

    const homeJSX = (
        <div className="wrapper-home" >
            <div className="home-title">Create A Sample Project</div>
            <div className='form-create-project'>
                <form onSubmit={handleSubmit(handleCreateSampleProject)}>
                    <div className="form-create-project-content">
                        <InputField
                            label='Project Name'
                            name="projectName"
                            control={control}
                            placeholder="Enter project name"
                        />
                        <SelectField
                            control={control}
                            label="Programming Languages"
                            name="programmingLanguage"
                            placeholder="Choose a language...."
                            options={programLanguagesOptions}
                            error={errors}
                            sendData={sendData}
                        />
                        <SelectField
                            control={control}
                            label="Programming Database"
                            name="programmingDatabase"
                            placeholder="Choose a database..."
                            options={programDBOptions}
                            disable={disableSelect}
                            error={errors}
                        />
                        <CheckBoxField
                            control={control}
                            label="Unit Test"
                            name="unitTest"
                            disable={disableSelect}
                        />
                    </div>
                    <div className="form-create-project-group-btn">
                        <Button primary type="submit" disable={formState.isSubmitting}>Create project</Button>
                        <Button primary type="button" onClick={handleDownloadSampleProject} disable={!Boolean(projectName)}>Dowload Project</Button>
                    </div>
                </form>
            </div>
            {loading && (
                <div className="wrap-management-body">
                    <div className="loading">
                        <div className="loader"></div>
                    </div>
                    <div className="loading-shadow"></div>
                </div>
            )}
        </div>
    );

    return homeJSX;
}
export default Home;
