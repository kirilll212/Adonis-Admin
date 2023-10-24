import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public email: string

  @column()
  public password: string

  @column()
  public status: boolean

  @column.dateTime({columnName:'createdAt', autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({columnName:'updatedAt', autoUpdate: true })
  public updatedAt: DateTime
}
