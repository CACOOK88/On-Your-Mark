// MODELS FOR TABLE COLUMNS

module.exports = function (sequelize, DataTypes) {
  const Race = sequelize.define('Race', {
    // insert key value for each column
    firstName: {
      type: DataTypes.STRING, 
      allowNull: false,
      validate: {
        len: [3]
      }
    },
    lastName: {
      type: DataTypes.STRING, 
      allowNull: false,
      validate: {
        len: [3]
      }
    },
    raceName: {
      type: DataTypes.STRING, 
      allowNull: false,
      validate: {
        len: [3]
      }
    },
    // category: {
    //   type: DataTypes.STRING, 
    //   allowNull: false
    // },
    street: {
      type: DataTypes.STRING, 
      allowNull: false,
      validate: {
        len: [5]
      }
    },
    city: {
      type: DataTypes.STRING, 
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    state: {
      type: DataTypes.STRING, 
      allowNull: false,
      validate: {
        len: [2,2]
      }
    },
    zip: {
      type: DataTypes.INTEGER, 
      allowNull: false,
      isInt: true,
      validate: {
        len: [5,5]
      }
    },
    phone: {
      type: DataTypes.INTEGER, 
      isInt: true
    },
    email: {
      type: DataTypes.STRING
    },
    url: {
      type: DataTypes.STRING
    },
    raceLength: {
      type: DataTypes.INTEGER,
      isInt: true
    },
    description: {
      type: DataTypes.TEXT
    },
    participantCap: {
      type: DataTypes.INTEGER, 
      isInt: true
    }
  })
  return Race
}