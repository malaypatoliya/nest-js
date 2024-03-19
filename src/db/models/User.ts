import { DataTypes, Sequelize } from "sequelize";
import { AllowNull, AutoIncrement, BeforeCreate, Column, Default, Length, Model, PrimaryKey, Table, Unique } from "sequelize-typescript";
import bcrypt from 'bcrypt';


@Table({
    tableName: 'users',
    modelName: 'User',
    timestamps: true,
    paranoid: true,
    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at'
})

export class User extends Model<User> {
    @PrimaryKey
    @AutoIncrement
    @AllowNull(false)
    @Column({ type: DataTypes.INTEGER })
    id: number;

    @AllowNull(false)
    @Default(DataTypes.UUIDV4)
    @Unique(true)
    @Length({ max: 36 })
    @Column({ type: DataTypes.UUID })
    uuid: string;

    @AllowNull(true)
    @Length({ max: 64 })
    @Column({ type: DataTypes.STRING })
    name: string;

    @AllowNull(false)
    @Length({ max: 128 })
    @Column({ type: DataTypes.STRING })
    email: string;

    @AllowNull(false)
    @Length({ max: 128 })
    @Column({ type: DataTypes.STRING })
    password: string;

    @AllowNull(false)
    @Column({ type: DataTypes.BOOLEAN })
    is_active: boolean;

    @AllowNull(false)
    @Default(Sequelize.literal('CURRENT_TIMESTAMP'))
    @Column({ type: DataTypes.DATE })
    created_at: Date;

    @AllowNull(false)
    @Default(Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'))
    @Column({ type: DataTypes.DATE })
    updated_at: Date;

    @AllowNull(true)
    @Column({ type: DataTypes.DATE })
    deleted_at: Date;

    @BeforeCreate
    static hashPassword(user: User) {
        user.password = bcrypt.hashSync(user.password, 10);
    }
}