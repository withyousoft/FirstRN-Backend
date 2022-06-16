import SequelizeAttributes from '@expresso/utils/SequelizeAttributes'
import { Model, Optional } from 'sequelize'
import db from './_instance'

// entity
export interface TodoAttributes {
  id?: string
  UserId?: string
  title: string
  description: string
  isCompleted?: boolean | null
  createdAt?: Date
  updatedAt?: Date
  deletedAt?: Date | null
}

// creation attributes
interface TodoCreationAttributes extends Optional<TodoAttributes, 'id'> {}

// instance
export interface TodoInstance
  extends Model<TodoAttributes, TodoCreationAttributes>,
    TodoAttributes {}

// class entity
class Todo
  extends Model<TodoAttributes, TodoCreationAttributes>
  implements TodoAttributes
{
  declare id: string
  declare UserId?: string | undefined
  declare title: string
  declare description: string
  declare isCompleted?: boolean | null | undefined

  declare readonly createdAt: Date
  declare readonly updatedAt: Date
  declare readonly deletedAt: Date
}

// init model
Todo.init(
  {
    ...SequelizeAttributes.Todos,
  },
  // @ts-expect-error
  { sequelize: db.sequelize, tableName: 'Todos', paranoid: true }
)

export default Todo
