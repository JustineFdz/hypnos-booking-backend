module.exports= (sequelize,DataTypes) => {

  const Rooms = sequelize.define("Rooms",{
    title:{
      type: DataTypes.STRING,
      allowNull : false,
    },
    description:{
      type: DataTypes.STRING,
      allowNull : false,
    },
    coverPicture:{
      type: DataTypes.STRING,
      allowNull : false,
    },
    price:{
      type: DataTypes.STRING,
      allowNull : false,
    },
    bookingLink:{
      type: DataTypes.STRING,
      allowNull : false,
    },
    
  });

  Rooms.associate = (models) => {
    Rooms.hasMany(models.Bookings, {
      onDelete:"cascade",
    })
  }
  return Rooms;
}