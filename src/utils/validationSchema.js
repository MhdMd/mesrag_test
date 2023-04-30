import * as yup from 'yup';

const validationSchema = yup.object().shape({
  title: yup.string().required('Title is required'),
  id: yup.number().required('id is required'),
});

export default validationSchema;
