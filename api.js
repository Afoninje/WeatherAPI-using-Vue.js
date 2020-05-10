var url =
        "https://api.openweathermap.org/data/2.5/weather?q=&appid=ad59e4fb24b7f88d5eaf006cc977159e";
      var urlcopy =
        "https://api.openweathermap.org/data/2.5/weather?q=&appid=ad59e4fb24b7f88d5eaf006cc977159e";

      var vm = new Vue({
        el: "#app",
        vuetify: new Vuetify(),
        data: {
          city: "",
          citycopy: "",
          submitted: false,
          usersubmitted: false,
          observation_time: "",
          findtemp: "",
          finddesc: "",
          findhumidity: "",
          findpressure: "",
          error: "",
          lat: "",
          lon: "",
          userdesc: "",
          usertemp: "",
          userpressure: "",
          userhumidity: "",
          findIconCode: "",
          userIconCode: "",
          displayImageURL: "",
          usermaindesc: "",
          findmaindesc: "",
        },

        methods: {
          process: function () {
            this.submitted = true;
            this.usersubmitted = false;

            vm.city = vm.citycopy;

            var url =
              "https://api.openweathermap.org/data/2.5/weather?q=" +
              vm.city +
              "&appid=ad59e4fb24b7f88d5eaf006cc977159e";

            axios.get(url).then(function (res) {
              console.clear();
              console.log(res);

              vm.finddesc = res.data.weather[0].description;
              vm.findhumidity = res.data.main.humidity;
              vm.findpressure = res.data.main.pressure;
              vm.findtemp = res.data.main.temp;
              vm.findtemp = vm.findtemp - 273.15;
              vm.findtemp = vm.findtemp.toFixed(2);
              vm.findIconCode = res.data.weather[0].icon;
              vm.findmaindesc = res.data.weather[0].main;

              if (vm.findIconCode == "01d") {
                vm.findmaindesc = "WeatherPhotos/sunny.gif";
              } else if (vm.findIconCode == "01n") {
                vm.findmaindesc = "WeatherPhotos/night.gif";
              } else if (vm.findmaindesc == "Clouds") {
                vm.findmaindesc = "WeatherPhotos/partlycloud.gif";
              } else if (vm.findmaindesc == "Snow") {
                vm.findmaindesc = "WeatherPhotos/snow.gif";
              } else if (vm.findmaindesc == "Rain") {
                vm.findmaindesc = "WeatherPhotos/rain.gif";
              } else if (vm.findmaindesc == "Drizzle") {
                vm.findmaindesc = "WeatherPhotos/rain.gif";
              } else if (vm.findmaindesc == "Thunderstorm") {
                vm.findmaindesc = "WeatherPhotos/thunder.gif";
              } else if (vm.findmaindesc == "Dust") {
                vm.findmaindesc = "WeatherPhotos/Wind.gif";
              } else if (vm.findmaindesc == "Tornado") {
                vm.findmaindesc = "WeatherPhotos/Wind.gif";
              } else {
                vm.findmaindesc = "WeatherPhotos/Mist.gif";
              }

              url = urlcopy;
            });
          },

          myFunction: function () {
            if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(this.showPosition);
            } else {
              this.error = "Geolocation is not supported.";
            }
          },
          showPosition: function (position) {
            this.lat = position.coords.latitude;
            this.lon = position.coords.longitude;

            axios
              .get(
                "https://api.openweathermap.org/data/2.5/weather?lat=" +
                  this.lat +
                  "&lon=" +
                  this.lon +
                  "&appid=ad59e4fb24b7f88d5eaf006cc977159e"
              )
              .then(function (res2) {
                console.clear();
                console.log(res2);

                vm.userdesc = res2.data.weather[0].description;
                vm.userhumidity = res2.data.main.humidity;
                vm.userpressure = res2.data.main.pressure;
                vm.usertemp = res2.data.main.temp;
                vm.usertemp = vm.usertemp - 273.15;
                vm.usertemp = vm.usertemp.toFixed(2);
                vm.userIconCode = res2.data.weather[0].icon;
                vm.usermaindesc = res2.data.weather[0].main;

                if (vm.userIconCode == "01d") {
                  vm.usermaindesc = "WeatherPhotos/sunny.gif";
                } else if (vm.userIconCode == "01n") {
                  vm.usermaindesc = "WeatherPhotos/night.gif";
                } else if (vm.usermaindesc == "Clouds") {
                  vm.usermaindesc = "WeatherPhotos/partlycloud.gif";
                } else if (vm.usermaindesc == "Snow") {
                  vm.usermaindesc = "WeatherPhotos/snow.gif";
                } else if (vm.usermaindesc == "Rain") {
                  vm.usermaindesc = "WeatherPhotos/rain.gif";
                } else if (vm.usermaindesc == "Drizzle") {
                  vm.usermaindesc = "WeatherPhotos/rain.gif";
                } else if (vm.usermaindesc == "Thunderstorm") {
                  vm.usermaindesc = "WeatherPhotos/thunder.gif";
                } else if (vm.usermaindesc == "Dust") {
                  vm.usermaindesc = "WeatherPhotos/Wind.gif";
                } else if (vm.usermaindesc == "Tornado") {
                  vm.usermaindesc = "WeatherPhotos/Wind.gif";
                } else {
                  vm.usermaindesc = "WeatherPhotos/Mist.gif";
                }
              });
            this.usersubmitted = true;
            this.submitted = false;
          },
        },
      });