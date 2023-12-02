<template>
    <div class="w-full flex flex-col flex-1 justify-between
    px-[5.5vw] tablet:px-[4.5vw] desktop:px-[2.5vw]
    py-[5.5vw] tablet:py-[4.5vw] desktop:py-[2.5vw]">
      <!-- Header -->
      <div class="flex flex-row justify-center items-center relative">
        <RouterLink :to="{ name: 'home' }">
          <div class="flex text-gray-400
          bg-[#212121]
          px-[3vw] py-[3vw] mobile:px-[3vw] mobile:py-[3vw] tablet:px-[2vw] tablet:py-[2vw] desktop:px-[1vw] desktop:py-[1vw]
          rounded-full
          focus-within:text-white">
            <i class="fa-solid fa-magnifying-glass relative pointer-events-none
        text-[3.3vw] leading-[3.3vw] mobile:text-[3.3vw] mobile:leading-[3.3vw] tablet:text-[2vw] tablet:leading-[2vw] desktop:text-[1vw] desktop:leading-[1vw]
        transition ease-in-out duration-300"></i>
          </div>
        </RouterLink>
        <a class="text-white text-left w-full select-none
        ml-[3vw] mobile:ml-[3vw] tablet:ml-[2vw] desktop:ml-[2vw]
        text-[2.4vw] leading-[2.4vw] mobile:text-[2.4vw] mobile:leading-[2.4vw] tablet:text-[2.2vw] tablet:leading-[2.2vw] desktop:text-[0.8vw] desktop:leading-[0.8vw]">
        👈 by this little button you can come back to main screen -_-
        </a>
      </div>
      <!-- Main Block -->
      <div class="flex flex-1 flex-col w-full justify-between
      desktop:flex-row 
      text-white
      text-[3.1vw] leading-[3.1vw] mobile:text-[2.7vw] mobile:leading-[2.7vw] tablet:text-[2.2vw] tablet:leading-[2.2vw] desktop:text-[0.8vw] desktop:leading-[0.8vw]
      mt-[6vw] mobile:mt-[6vw] tablet:mt-[5vw] desktop:mt-[2vw]">
        <!-- Left Block -->
        <div class="flex flex-[0_1_100%] flex-col
        desktop:flex-[0_1_28vw] 
        px-[8vw] mobile:px-[7vw] tablet:px-[6vw] desktop:px-[2.5vw]
        py-[8vw] mobile:py-[7vw] tablet:py-[6vw] desktop:py-[2.5vw]
        bg-[#212121] rounded-[2vw]">
          <div class="flex flex-1 flex-col
          after:w-full after:h-[2px] after:bg-gray-400 after:opacity-30
          after:mt-[8vw] mobile:after:mt-[7vw] tablet:after:mt-[6vw] desktop:after:mt-[1vw]">
            <div class="flex flex-1 flex-row justify-between">
              <a>
              {{
              new Date(weatherData.currentTime).toLocaleDateString(
              "en-us",
              {
                weekday: "long",
               }
              )
              }},
              <span class="text-gray-400">
                {{
                new Date(weatherData.currentTime).toLocaleDateString(
                "en-us",
                {
                  day: "2-digit",
                  month: "long",
                }
                )
                }}
              </span>
              </a>
              <a class="text-gray-400">
                {{
                new Date(weatherData.currentTime).toLocaleTimeString(
                "en-us",
                {
                  timeStyle: "short",
                }
                )
                }}
              </a>
            </div>
            <a class="w-full flex flex-row items-center justify-center
            mt-[8vw] mobile:mt-[7vw] tablet:mt-[6vw] desktop:mt-[2vw]
            text-[18vw] leading-[18vw] mobile:text-[17vw] mobile:leading-[17vw] tablet:text-[16vw] tablet:leading-[16vw] desktop:text-[6vw] desktop:leading-[5vw]
            ">
            {{ Math.round(weatherData.current.temp) }}&deg;
            </a>
            <div class="w-full flex flex-row items-center justify-center text-gray-400">
              <i class="fa-solid fa-temperature-three-quarters relative pointer-events-none
              text-[3.7vw] leading-[3.7vw] mobile:ml-[4vw] mobile:text-[3.7vw] mobile:leading-[3.7vw] tablet:ml-[2.5vw] tablet:text-[2.6vw] tablet:leading-[2.6vw] desktop:ml-[1.6vw] desktop:text-[1.2vw] desktop:leading-[1.2vw]
              transition ease-in-out duration-300"></i>
              <a class="px-[2vw] mobile:px-[2vw] tablet:px-[1.5vw] desktop:px-[1vw]
              py-[2vw] mobile:py-[2vw] tablet:py-[2vw] desktop:py-[1vw]
              select-none">
                Feels like
                {{ Math.round(weatherData.current.feels_like) }} &deg;
              </a>
            </div>
          </div>
          <div class="flex flex-1 flex-col">
            <a class="font-semibold
            py-[2.5vw] mobile:py-[2.5vw] tablet:py-[2.5vw] desktop:py-[1.5vw]
            text-[3.5vw] leading-[3.5vw] mobile:text-[3.5vw] mobile:leading-[3.5vw] tablet:text-[2.4vw] tablet:leading-[2.4vw] desktop:text-[1vw] desktop:leading-[1vw]">
              8 Days Forecast
            </a>
            <div
              v-for="day in weatherData.daily"
              :key="day.dt"
              class="flex items-center
              "
            >
            <img
                class="w-[12vw] mobile:w-[13vw] tablet:w-[12vw] desktop:w-[4vw] h-auto
                ml-[-4vw] desktop:ml-[-1vw]
                object-cover select-none pointer-events-none"
                :src="
                  `http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`
                "
                alt=""
              />
              <div class="flex flex-col">
                <a class="flex-1
                text-[3.1vw] leading-[4.1vw] mobile:text-[2.7vw] mobile:leading-[3.7vw] tablet:text-[2.2vw] tablet:leading-[3.2vw] desktop:text-[0.8vw] desktop:leading-[1.2vw]">
                {{
                  new Date(day.dt * 1000).toLocaleDateString(
                    "en-us",
                    {
                      weekday: "long",
                      day: "2-digit",
                      month: "long",
                    }
                  )
                }}
                </a>
                <a class="flex-1
                text-gray-400 capitalize
                text-[3.1vw] leading-[3.1vw] mobile:text-[2.7vw] mobile:leading-[2.7vw] tablet:text-[2.2vw] tablet:leading-[2.2vw] desktop:text-[0.8vw] desktop:leading-[0.8vw]">
                  {{ day.weather[0].description }}
                  </a>
              </div>
              
              <div class="flex gap-2 flex-1 justify-end">
                <a class="text-[4.1vw] leading-[4.1vw] mobile:text-[3.7vw] mobile:leading-[3.7vw] tablet:text-[3.2vw] tablet:leading-[3.2vw] desktop:text-[2vw] desktop:leading-[2vw]
                ">{{ Math.round(day.temp.max) }}&deg;/<span class="text-[3.1vw] leading-[4.1vw] mobile:text-[2.7vw] mobile:leading-[3.7vw] tablet:text-[2.2vw] tablet:leading-[3.2vw] desktop:text-[1vw] desktop:leading-[2vw]
                text-gray-400">{{ Math.round(day.temp.min) }}&deg;</span></a>
              </div>
            </div>
          </div>
        </div>
        <!-- Right Blocks -->
        <div class="flex flex-[0_1_68%] flex-col">
          <!-- Right Top Block -->
          <div class="flex flex-col flex-[0_1_70%] items-center justify-between
          bg-[#212121] rounded-[2vw] 
          mt-[5vw] desktop:mt-[0vw]
          px-[8vw] mobile:px-[7vw] tablet:px-[6vw] desktop:px-[2.5vw]
          py-[8vw] mobile:py-[7vw] tablet:py-[6vw] desktop:py-[2.5vw]">
            <div class="w-full flex flex-row items-center justify-start">
              <i class="fa-solid fa-location-dot relative pointer-events-none
              text-[3.7vw] leading-[3.7vw] mobile:text-[3.7vw] mobile:leading-[3.7vw] tablet:text-[2.6vw] tablet:leading-[2.6vw] desktop:text-[1.4vw] desktop:leading-[1.4vw]"></i>
              <a class="px-[2vw] mobile:px-[2vw] tablet:px-[1.5vw] desktop:px-[1vw]">
              {{ route.params.city }}
              </a>
            </div>
            <div class="w-full flex flex-row items-center justify-center
            my-[10vw] mobile:my-[11vw] tablet:my-[12vw] desktop:my-[2.5vw]">
              <img class="pointer-events-none select-none h-auto 
              w-[15vw] mobile:w-[16vw] tablet:w-[15vw] desktop:w-[9vw]
              mr-[2.5vw] mobile:mr-[2vw] tablet:mr-[2vw] desktop:mr-[1.5vw]"
                :src="
                `http://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@2x.png`
                "
                alt=""
              />
              <a class="capitalize font-medium
              text-[5vw] leading-[5vw] mobile:text-[6vw] mobile:leading-[6vw] tablet:text-[6vw] tablet:leading-[6vw] desktop:text-[3.8vw] desktop:leading-[3.8vw]">
                {{ weatherData.current.weather[0].description }}
              </a>
            </div>
            <div class="w-full flex flex-row items-center justify-start">
              <div class="flex flex-col
              mr-[3vw] mobile:mr-[3vw] tablet:mr-[5vw] desktop:mr-[4.5vw]">
                <a class="capitalize text-gray-400
                mb-[3vw] mobile:mb-[2.5vw] tablet:mb-[2vw] desktop:mb-[1vw]">
                  Wind Speed
                </a>
                <div class="flex flex-row items-center">
                  <i class="fa-solid fa-wind relative pointer-events-none
                    text-[2.5vw] leading-[5vw] mobile:text-[3vw] mobile:leading-[5vw] tablet:text-[4vw] tablet:leading-[5vw] desktop:text-[2vw] desktop:leading-[2.5vw]"></i>
                  <a class="px-[2vw] mobile:px-[2vw] tablet:px-[1.5vw] desktop:px-[1vw]
                  text-[2.3vw] leading-[2.3vw] mobile:text-[2.5vw] mobile:leading-[2.5vw] tablet:text-[2.6vw] tablet:leading-[2.6vw] desktop:text-[1.4vw] desktop:leading-[1.4vw]">
                    {{ Math.round(weatherData.current.wind_speed) }} m/s
                  </a>
                </div>
              </div>
              <div class="flex flex-col
              mr-[3vw] mobile:mr-[3vw] tablet:mr-[5vw] desktop:mr-[4.5vw]">
                <a class="capitalize text-gray-400
                mb-[3vw] mobile:mb-[2.5vw] tablet:mb-[2vw] desktop:mb-[1vw]">
                  Humidity
                </a>
                <div class="flex flex-row items-center">
                  <i class="fa-solid fa-droplet relative pointer-events-none
                    text-[2.5vw] leading-[6vw] mobile:text-[3vw] mobile:leading-[5vw] tablet:text-[4vw] tablet:leading-[5vw] desktop:text-[2vw] desktop:leading-[2.5vw]"></i>
                  <a class="px-[2vw] mobile:px-[2vw] tablet:px-[1.5vw] desktop:px-[1vw]
                  text-[2.3vw] leading-[2.3vw] mobile:text-[2.5vw] mobile:leading-[2.5vw] tablet:text-[2.6vw] tablet:leading-[2.6vw] desktop:text-[1.4vw] desktop:leading-[1.4vw]">
                  {{ Math.round(weatherData.current.humidity) }} %
                  </a>
                </div>
              </div>
              <div class="flex flex-col
              mr-[3vw] mobile:mr-[3vw] tablet:mr-[5vw] desktop:mr-[4.5vw]">
                <a class="capitalize text-gray-400
                mb-[3vw] mobile:mb-[2.5vw] tablet:mb-[2vw] desktop:mb-[1vw]">
                  Pressure
                </a>
                <div class="flex flex-row items-center">
                  <i class="fa-solid fa-compass relative pointer-events-none
                    text-[2.5vw] leading-[6vw] mobile:text-[3vw] mobile:leading-[5vw] tablet:text-[4vw] tablet:leading-[5vw] desktop:text-[2vw] desktop:leading-[2.5vw]"></i>
                  <a class="px-[2vw] mobile:px-[2vw] tablet:px-[1.5vw] desktop:px-[1vw]
                  text-[2.3vw] leading-[2.3vw] mobile:text-[2.5vw] mobile:leading-[2.5vw] tablet:text-[2.6vw] tablet:leading-[2.6vw] desktop:text-[1.4vw] desktop:leading-[1.4vw]">
                  {{ Math.round(weatherData.current.pressure) }} hPa
                  </a>
                </div>
              </div>
              <div class="flex flex-col">
                <a class="capitalize text-gray-400
                mb-[3vw] mobile:mb-[2.5vw] tablet:mb-[2vw] desktop:mb-[1vw]">
                  Visibility
                </a>
                <div class="flex flex-row items-center">
                  <i class="fa-solid fa-eye relative pointer-events-none
                    text-[2.5vw] leading-[6vw] mobile:text-[3vw] mobile:leading-[5vw] tablet:text-[4vw] tablet:leading-[5vw] desktop:text-[2vw] desktop:leading-[2.5vw]"></i>
                  <a class="px-[2vw] mobile:px-[2vw] tablet:px-[1.5vw] desktop:px-[1vw]
                  text-[2.3vw] leading-[2.3vw] mobile:text-[2.5vw] mobile:leading-[2.5vw] tablet:text-[2.6vw] tablet:leading-[2.6vw] desktop:text-[1.4vw] desktop:leading-[1.4vw]">
                    {{ Math.round(weatherData.current.wind_speed) }} km
                  </a>
                </div>
              </div>
            </div>
          </div>
          <!-- Right Bottom Block -->
          <div class="flex flex-col
          max-w-[100vw] desktop:max-w-[64.5vw]
          bg-[#212121] rounded-[2vw]
          mt-[5vw] desktop:mt-[2.5vw]
          px-[8vw] mobile:px-[7vw] tablet:px-[6vw] desktop:px-[2.5vw]
          py-[8vw] mobile:py-[7vw] tablet:py-[6vw] desktop:py-[2.5vw]">
            <a class="font-semibold
            text-[3.5vw] leading-[3.5vw] mobile:text-[3.5vw] mobile:leading-[3.5vw] tablet:text-[2.4vw] tablet:leading-[2.4vw] desktop:text-[1.2vw] desktop:leading-[1.2vw]">
              Hourly Forecast
            </a>
            <div class="flex overflow-x-scroll 
            gap-[5vw] mobile:gap-[5vw] tablet:gap-[5vw] desktop:gap-[5vw]
            py-[8vw] mobile:py-[7vw] tablet:py-[6vw] desktop:py-[2.5vw]">
              <div v-for="hourData in weatherData.hourly"
              :key="hourData.dt"
              class="flex flex-col items-center">
              <div class="flex flex-col items-center justify-center">
                <div class="flex flex-row items-center justify-center
              w-[26vw] mobile:w-[26vw] tablet:w-[18vw] desktop:w-[7vw]">
                  <img 
                  class="object-cover select-none pointer-events-none"
                  :src="
                    `http://openweathermap.org/img/wn/${hourData.weather[0].icon}@2x.png`
                  "
                  alt=""
                  />
                  <a class="text-[4.3vw] leading-[4.3vw] mobile:text-[4.3vw] mobile:leading-[4.3vw] tablet:text-[3.2vw] tablet:leading-[3.2vw] desktop:text-[2vw] desktop:leading-[2vw]">
                    {{ Math.round(hourData.temp) }}&deg;
                  </a>
                </div>
                <a class="capitalize text-gray-400
                text-[3.1vw] leading-[0.1vw] mobile:text-[3.1vw] mobile:leading-[0.1vw] tablet:text-[2vw] tablet:leading-[0.1vw] desktop:text-[0.8vw] desktop:leading-[0.1vw]
                pb-[4vw] mobile:pb-[4vw] tablet:pb-[3vw] desktop:pb-[2vw]">
                  {{ hourData.weather[0].description }}
                </a>
              </div>
                <a class="whitespace-nowrap 
                text-[3.1vw] leading-[3.1vw] mobile:text-[2.7vw] mobile:leading-[2.7vw] tablet:text-[2.2vw] tablet:leading-[2.2vw] desktop:text-[1vw] desktop:leading-[1vw]
                capitalize text-gray-400">
                {{
                  new Date(
                    hourData.currentTime
                    ).toLocaleTimeString("en-us", {
                    hour:"numeric",
                    })
                }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
import axios from "axios";
import { useRoute } from "vue-router";

//
const route = useRoute();
const getWeatherData = async () => {
  try {
    const weatherData = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${route.query.lat}&lon=${route.query.lng}&exclude={part}&appid=f320dbbf8d967e3217fd850f58e070d4&units=metric`
    );

    const localOffset = new Date().getTimezoneOffset() * 60000;
    const utc = weatherData.data.current.dt * 1000 + localOffset;
    weatherData.data.currentTime =
      utc + 1000 * weatherData.data.timezone_offset;

    weatherData.data.hourly.forEach((hour) => {
      const utc = hour.dt * 1000 + localOffset;
      hour.currentTime =
        utc + 1000 * weatherData.data.timezone_offset;
    });

    return weatherData.data;
  } catch (err) {
    console.log(err);
  }
};
const weatherData = await getWeatherData();
console.log(weatherData);

</script>