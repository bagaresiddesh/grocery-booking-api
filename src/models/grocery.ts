import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';

interface GroceryAttributes {
  id: number;
  name: string;
  price: number;
  inventory: number;
}

type GroceryCreationAttributes = Optional<GroceryAttributes, 'id'>;

export class Grocery extends Model<GroceryAttributes, GroceryCreationAttributes> implements GroceryAttributes {
  public id!: number;
  public name!: string;
  public price!: number;
  public inventory!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Grocery.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    inventory: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },
  {
    sequelize,
    modelName: 'Grocery',
    tableName: 'groceries',
    timestamps: true,
  }
);
