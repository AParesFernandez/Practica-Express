import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';

//define la interfaz para los atributos del usuario
interface UserAtributtes {
    id: number;
    nombre: string;
    apellido: string;
}

//define la interfaz para crear atributos de usuario (id opcional)
interface UserCreationAtributtes extends Optional<UserAtributtes, "id"> {}

//define la clase 
class User
    extends Model<UserAtributtes, UserCreationAtributtes>
    implements UserAtributtes
{
    public id!: number;
    public nombre!: string;
    public apellido!: string;
}


// inicia modelo de usuario
User.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        nombre: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        apellido: {
            type: DataTypes.STRING(45),
            allowNull: true
        }
    },
    {
        tableName: 'usuario',
        sequelize // pasa la 'sequelize' instancia que es requerida
    }
);

export default User;

