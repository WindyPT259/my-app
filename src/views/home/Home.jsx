import { useState } from "react";
import { useForm } from "react-hook-form";
import FileSaver from "file-saver";

import homeServices from "../../apiServices/homeServices";
import Button from '../../components/Button'
import { SelectField, InputField, CheckBoxField } from '../../components/FormField';
import { Toast } from "../../utils";
import '../../styles/home.scss'
const Home = () => {
    const [isCreateProject, setIsCreateProject] = useState(false)

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

    const defaultValues = { projectName: '', programmingLanguage: '.Net Core', programmingDatabase: 'SQL Server', };

    const { control, handleSubmit, errors } = useForm({ defaultValues });

    const handleCreateSampleProject = async formValues => {
        try {
            // const response = await homeServices.createProject(formValues);
            if (true) {
                console.log('data1', formValues);
                Toast('Create project successful!')
                setIsCreateProject(true);
            }
            else {
                Toast('Create project failed!')
                setIsCreateProject(false);
            }

        } catch (error) {
            setIsCreateProject(false);
        }
    };

    const handleDownloadSampleProject = async () => {
        try {
            const response = await homeServices.downloadProject();
            const blob = new Blob([response.data], { type: response.headers['content-type'] });
            const fileName = response.headers['content-disposition'].split('filename=')[1];
            FileSaver.saveAs(blob, fileName);
            Toast('Download successful!')
        } catch (error) {
            console.log(error);
            Toast('Download failed!')
        }
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
                            required
                        />
                        <SelectField
                            control={control}
                            label="Programming Languages"
                            name="programmingLanguage"
                            placeholder="Choose a language...."
                            options={programLanguagesOptions}
                            error={errors}
                        />
                        <SelectField
                            control={control}
                            label="Programming Database"
                            name="programmingDatabase"
                            placeholder="Choose a database..."
                            options={programDBOptions}
                            error={errors}
                        />
                        <CheckBoxField
                            control={control}
                            label="Unit Test"
                            name="unitTest"
                        />
                    </div>
                    <div className="form-create-project-group-btn">
                        <Button primary type="submit">Create project</Button>
                        <Button primary type="button" onClick={handleDownloadSampleProject} disable={!isCreateProject}>Dowload Project</Button>
                    </div>
                </form>
            </div>
        </div>
    );

    return homeJSX;
}
export default Home;
