<template>
  <main class="w-full h-screen flex flex-col text-white 
  px-[7vw] tablet:px-[6vw] desktop:px-[4vw]">
    <div 
    class="
    pt-[7vw] mb-[5vw] tablet:pt-[6vw] tablet:mb-[4vw] desktop:pt-[4vw] desktop:mb-[2vw] 
    relative flex items-center text-gray-400 focus-within:text-white">
      <i class="fa-solid fa-magnifying-glass absolute pointer-events-none
      ml-[5vw] text-[3.7vw] leading-[3.7vw] mobile:ml-[4vw] mobile:text-[3.7vw] mobile:leading-[3.7vw] tablet:ml-[2.5vw] tablet:text-[2.4vw] tablet:leading-[2.4vw] desktop:ml-[1.6vw] desktop:text-[1.4vw] desktop:leading-[1.4vw]
      transition ease-in-out duration-300"></i>
      <input
        type="text"
        v-model="searchQuery"
        @input="getSearchResults"
        autocomplete="off"
        placeholder="Search for a city or state"
        class="
        w-full 
        py-[3.5vw] px-[12.5vw] mobile:py-[2.7vw] mobile:px-[11vw] tablet:py-[1.8vw] tablet:px-[7vw] desktop:py-[1.1vw] desktop:px-[4.5vw]
        bg-[#212121]
        rounded-full 
        text-[3.2vw] leading-[3.2vw] mobile:text-[2.8vw] mobile:leading-[2.8vw] tablet:text-[2.3vw] tablet:leading-[2.3vw] desktop:text-[1.1vw] desktop:leading-[1.1vw]
        focus:outline-none"
        />
        <ul
          class="absolute text-white w-full
          py-[3.5vw] px-[12.5vw] top-[20vw] mobile:py-[2.7vw] mobile:px-[11vw] mobile:top-[17vw] tablet:py-[1.8vw] tablet:px-[7vw] tablet:top-[14vw] desktop:py-[1vw] desktop:px-[4.5vw] desktop:top-[8.5vw]
          bg-[#212121]
          text-[3.2vw] leading-[6.2vw] mobile:text-[2.5vw] mobile:leading-[5.5vw] tablet:text-[2.3vw] tablet:leading-[5.3vw] desktop:text-[1.1vw] desktop:leading-[2vw]
          rounded-lg"
          v-if="mapboxSearchResults"
        >
          <p class="py-[1vw]" v-if="searchError">
            Sorry, something went wrong, please try again.
          </p>
          <p
            class="py-[1vw]"
            v-if="!searchError && mapboxSearchResults.length === 0"
          >
            No results match your query, try a different term.
          </p>
          <template v-else>
            <li
              v-for="searchResult in mapboxSearchResults"
              :key="searchResult.id"
              class="py-[0.5vw] cursor-pointer"
              @click="previewCity(searchResult)"
            >
              {{ searchResult.place_name }}
            </li>
          </template>
        </ul>
    </div>
    <a class="w-full flex items-center justify-center text-center select-none
    text-[3.0vw] leading-[3.2vw] mobile:text-[2.6vw] mobile:leading-[2.8vw] tablet:text-[2.1vw] tablet:leading-[2.3vw] desktop:text-[0.9vw] desktop:leading-[1.1vw]">
      ☝️ just enter the name of city, select it and u will see weather forecast
    </a>
    <div class="flex flex-1 flex-col items-start justify-center">
      <a class="text-left
      text-[9vw] leading-[10vw] mobile:text-[9vw] mobile:leading-[10vw] tablet:text-[8vw] tablet:leading-[9vw] desktop:text-[6vw] desktop:leading-[7vw]">
      Web <br>Weather App
      </a>
      <div class="flex flex-row 
      mt-[6vw] mobile:mt-[6vw] tablet:mt-[3vw] desktop:mt-[2vw]">
        <a href="https://primper.github.io/" class="text-left
        text-[4vw] leading-[4vw] mobile:text-[4vw] mobile:leading-[4vw] tablet:text-[3.5vw] tablet:leading-[3.5vw] desktop:text-[2.5vw] desktop:leading-[2.5vw]
        hover:text-[#4831D4]
        transition ease-in-out duration-300">
        by Ivan Dremov
        </a>
        <a class="text-left flex flex-col justify-center select-none
        ml-[3vw] mobile:ml-[3vw] tablet:ml-[2vw] desktop:ml-[2vw]
        text-[3.0vw] leading-[3.2vw] mobile:text-[2.6vw] mobile:leading-[2.8vw] tablet:text-[2.1vw] tablet:leading-[2.3vw] desktop:text-[0.9vw] desktop:leading-[1.1vw]">
        👈️ link to my portfolio
        </a>
      </div>
    </div>
    <a class="w-full flex items-center justify-center text-center select-none
    pb-[7vw] tablet:pb-[6vw] desktop:pb-[4vw] 
    text-[3.0vw] leading-[3.2vw] mobile:text-[2.6vw] mobile:leading-[2.8vw] tablet:text-[2.1vw] tablet:leading-[2.3vw] desktop:text-[0.9vw] desktop:leading-[1.1vw]">
    © 2023 Ivan Dremov. All rights reserved or whatever usually write there 
    </a>
  </main>
</template>

<script setup>
import {ref} from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();
const previewCity = (searchResult) => {
  const [city, state] = searchResult.place_name.split(",");
  router.push({
    name: "cityView",
    params: { state: state.replaceAll(" ", ""), city: city },
    query: {
      lat: searchResult.geometry.coordinates[1],
      lng: searchResult.geometry.coordinates[0],
      preview: true,
    },
  });
};

const mapboxAPIKey =
  "pk.eyJ1Ijoiam9obmtvbWFybmlja2kiLCJhIjoiY2t5NjFzODZvMHJkaDJ1bWx6OGVieGxreSJ9.IpojdT3U3NENknF6_WhR2Q";
const searchQuery = ref("");
const queryTimeout = ref(null);
const mapboxSearchResults = ref(null);
const searchError = ref(null);

const getSearchResults = () => {
  clearTimeout(queryTimeout.value);
  queryTimeout.value = setTimeout(async () => {
    if (searchQuery.value !== "") {
      try {
        const result = await axios.get(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchQuery.value}.json?access_token=${mapboxAPIKey}&types=place`
        );
        mapboxSearchResults.value = result.data.features;
      } catch {
        searchError.value = true;
      }

      return;
    }
    mapboxSearchResults.value = null;
  }, 300);
};
</script>