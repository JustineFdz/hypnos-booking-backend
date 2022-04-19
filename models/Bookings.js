module.exports= (sequelize,DataTypes) => {

  const Bookings = sequelize.define("Bookings",{
   checkIn:{
      type: DataTypes.DATEONLY,
      allowNull : false,
    },
    checkOut:{
      type: DataTypes.DATEONLY,
      allowNull : false,
    },
  });

  return Bookings;
}