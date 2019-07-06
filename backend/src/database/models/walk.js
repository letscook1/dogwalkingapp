const moment = require('moment');

module.exports = function(sequelize, DataTypes) {
  const walk = sequelize.define(
    'walk',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      location: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      clientNotes: {
        type: DataTypes.TEXT,
        validate: {

        }
      },
      walkerNotes: {
        type: DataTypes.TEXT,
        validate: {

        }
      },
      status: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: [
          "cancelled",
          "completed"
        ],
      },
      fee: {
        type: DataTypes.DECIMAL(24, 2),
        validate: {

        }
      },
      importHash: {
        type: DataTypes.STRING(255),
        allowNull: true,
        unique: true,
      },
    },
    {
      timestamps: true,
      paranoid: true,
    },
  );

  walk.associate = (models) => {
    models.walk.belongsTo(models.user, {
      as: 'owner',
      constraints: false,
    });

    models.walk.belongsTo(models.pet, {
      as: 'pet',
      constraints: false,
    });

    models.walk.hasMany(models.file, {
      as: 'photos',
      foreignKey: 'belongsToId',
      constraints: false,
      scope: {
        belongsTo: models.walk.getTableName(),
        belongsToColumn: 'photos',
      },
    });

    models.walk.hasMany(models.file, {
      as: 'receipt',
      foreignKey: 'belongsToId',
      constraints: false,
      scope: {
        belongsTo: models.walk.getTableName(),
        belongsToColumn: 'receipt',
      },
    });

    models.walk.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.walk.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return walk;
};
