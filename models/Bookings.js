module.exports= (sequelize,DataTypes) => {

  const Bookings = sequelize.define("Bookings",{
   checkIn:{
      type: DataTypes.DATE,
      allowNull : false,
    },
    checkOut:{
      type: DataTypes.DATE,
      allowNull : false,
    },
  });

  return Bookings;
}