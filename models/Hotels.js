module.exports= (sequelize,DataTypes) => {

  const Hotels = sequelize.define("Hotels",{
    name:{
      type: DataTypes.STRING,
      allowNull : false,
    },
    description:{
      type: DataTypes.STRING,
      allowNull : false,
    },
    picture:{
      type: DataTypes.STRING,
      allowNull : false,
    },
    adress:{
      type: DataTypes.STRING,
      allowNull : false,
    },
    postCode:{
      type: DataTypes.INTEGER,
      allowNull : false,
    },
    city:{
      type: DataTypes.STRING,
      allowNull : false,
    },
  });

  // Hotels.associate = (models) => {
  //   Hotels.hasMany(models.Rooms, {
  //     onDelete:"cascade",
  //   })
  // }
  return Hotels;
}