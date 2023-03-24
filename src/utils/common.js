import { toast } from 'react-toastify';



export const convertToTextForSearch = str => {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLowerCase()
    .trim();
};

export const convertToSingleText = str => {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'd')
    .replace(/[^a-zA-Z0-9 ]/g, '')
    .replace(/\s+/g, ' ')
    .replace(/[\s]/g, '-')
    .toLowerCase();
};

export const validateEmail = email => {
  const patternEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  if (email.match(patternEmail)) return true;
  return false;
};

export const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
export const Toast = string => {
  toast.dismiss()
  toast(string);
};

export const formatter = new Intl.NumberFormat('vi-VN');
