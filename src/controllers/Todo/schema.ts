import * as yup from 'yup'

const create = yup.object().shape({
  UserId: yup.string().required('user is required'),
  title: yup.string().required('title is required'),
  description: yup.string().required('description is required'),
  isCompleted: yup.boolean().nullable(),
})

const todoSchema = { create }

export default todoSchema
