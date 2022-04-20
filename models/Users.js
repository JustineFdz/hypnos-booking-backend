module.exports= (sequelize,DataTypes) => {

  const Users = sequelize.define("Users",{
    name:{
      type: DataTypes.STRING,
      allowNull : false,
    },
    surname:{
      type: DataTypes.STRING,
      allowNull : false,
    },
    mail:{
      type: DataTypes.STRING,
      allowNull : false,
    },
    password:{
      type: DataTypes.STRING,
      allowNull : false,
    },
    role:{
      type: DataTypes.STRING,
      allowNull : true,
    }
  });

  Users.associate = (models) => {
    Users.hasMany(models.Bookings, {
      onDelete:"cascade",
    })
  }
  return Users;
}