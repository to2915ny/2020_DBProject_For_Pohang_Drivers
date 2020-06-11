var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');



var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');
var postRouter = require('./routes/post');
var speedBumpRouter = require('./routes/speedbump');
var createRouter = require('./routes/create');
var searchRouter = require('./routes/search');
var speedCameraRouter = require('./routes/speedcamera');
var carServiceRouter = require('./routes/carservice');
var rentalCarRouter = require('./routes/rentalcar');
var schoolZoneRouter = require('./routes/schoolzone');
var driveThruRestaurant = require('./routes/drivethrurestaurant');
var electronicVehicleChargingStation = require('./routes/electronicvehiclechargingstation');
var transportationSupportCenter = require('./routes/transportationsupportcenter');
var bicycleRental = require('./routes/bicyclerental');


var carWashRouter = require('./routes/carwash');
var overpassRouter =require('./routes/overpass');
var parkingLotRouter = require('./routes/parkinglot');
var publicParkingLotRouter = require('./routes/publicparkinglot');
var trafficLightRouter = require('./routes/trafficlight');

var pharmacyRouter = require('./routes/pharmacy');
var publicToiletRouter = require('./routes/publictoilet');
var towedCarStorageRouter = require('./routes/towedcarstorage');
var wheelchairChargerRouter = require('./routes/wheelchaircharger');
var bicycleRentalRouter = require('./routes/bicyclerental');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
	        secret : '@#@$MYSIGN#@#&',
	        resave : false,
	        saveUninitialized: true
}));
app.use('/', indexRouter);
//app.use('/users', usersRouter);
app.use('/post',postRouter);
app.use('/speedbump',speedBumpRouter);
app.use('/create',createRouter);
app.use('/search',searchRouter);
app.use('/speedcamera',speedCameraRouter);
app.use('/rentalcar', rentalCarRouter);
app.use('/carservice', carServiceRouter);
app.use('/schoolzone', schoolZoneRouter);
app.use('/carwash',carWashRouter);
app.use('/overpass',overpassRouter);
app.use('/parkinglot',parkingLotRouter);
app.use('/publicparkinglot',publicParkingLotRouter);
app.use('/trafficlight',trafficLightRouter);
app.use('/drivethrurestaurant',driveThruRestaurant);
app.use('/electronicvehiclechargingstation',electronicVehicleChargingStation);
app.use('/transportationsupportcenter',transportationSupportCenter);
app.use('/pharmacy', pharmacyRouter);
app.use('/publictoilet',publicToiletRouter);
app.use('/towedcarstorage',towedCarStorageRouter);
app.use('/wheelchaircharger',wheelchairChargerRouter);
app.use('/bicyclerental',bicycleRentalRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
