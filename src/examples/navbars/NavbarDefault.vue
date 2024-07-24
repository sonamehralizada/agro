<script setup>
import { RouterLink } from "vue-router";
import { ref, watch } from "vue";
import { useWindowsWidth } from "../../assets/js/useWindowsWidth";

// images
import ArrDark from "@/assets/img/down-arrow-dark.svg";
import downArrow from "@/assets/img/down-arrow.svg";
import DownArrWhite from "@/assets/img/down-arrow-white.svg";

const props = defineProps({
  action: {
    type: Object,
    route: String,
    color: String,
    label: String,
  },
  transparent: {
    type: Boolean,
    default: false
  },
  light: {
    type: Boolean,
    default: false
  },
  dark: {
    type: Boolean,
    default: false
  },
  sticky: {
    type: Boolean,
    default: false
  },
  darkText: {
    type: Boolean,
    default: false
  }
});

// set arrow  color
function getArrowColor() {
  if (props.transparent && textDark.value) {
    return ArrDark;
  } else if (props.transparent) {
    return DownArrWhite;
  } else {
    return ArrDark;
  }
}

// set text color
const getTextColor = () => {
  let color;
  if (props.transparent && textDark.value) {
    color = "text-dark";
  } else if (props.transparent) {
    color = "text-white";
  } else {
    color = "text-dark";
  }

  return color;
};

// set nav color on mobile && desktop

let textDark = ref(props.darkText);
const { type } = useWindowsWidth();

if (type.value === "mobile") {
  textDark.value = true;
} else if (type.value === "desktop" && textDark.value == false) {
  textDark.value = false;
}

watch(
  () => type.value,
  (newValue) => {
    if (newValue === "mobile") {
      textDark.value = true;
    } else {
      textDark.value = false;
    }
  }
);
</script>
<template>
  <nav
    class="navbar navbar-expand-lg top-0"
    :class="{
      'z-index-3 w-100 shadow-none navbar-transparent position-absolute my-3':
        props.transparent,
      'my-3 blur border-radius-lg z-index-3 py-2 shadow py-2 start-0 end-0 mx-4 position-absolute mt-4':
        props.sticky,
      'navbar-light bg-white py-3': props.light,
      ' navbar-dark bg-gradient-dark z-index-3 py-3': props.dark
    }"
  >
    <div
      :class="
        props.transparent || props.light || props.dark
          ? 'container'
          : 'container-fluid px-2'
      "
    >
      <RouterLink
        class="navbar-brand  d-md-block ml-2"
        :to="{ name: 'presentation' }"
        rel="tooltip"
        title="Designed and Coded by Creative Tim"
        data-placement="bottom"
      >
      <span class=" mb-2 mt-2 ">
        <img class="w-15" src="@/assets/img/logos/logo.png" alt="logo" />
      </span>
      </RouterLink>
      <button
        class="navbar-toggler shadow-none ms-2"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navigation"
        aria-controls="navigation"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon mt-2">
          <span class="navbar-toggler-bar bar1"></span>
          <span class="navbar-toggler-bar bar2"></span>
          <span class="navbar-toggler-bar bar3"></span>
        </span>
      </button>
      <div
        class="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0 mx-2"
        id="navigation"
      >
        <RouterLink
            :to="{ name: 'presentation' }"
            class="dropdown-item border-radius-md"
            >
          <span>Əsas Səhifə</span>
        </RouterLink>
        <RouterLink
            :to="{ name: 'about' }"
            class="dropdown-item border-radius-md"
            >
          <span> Haqqımızda</span>
        </RouterLink>
        <RouterLink
          :to="{ name: 'products' }"
          class="dropdown-item border-radius-md"
          >
          <span>Məhsullar</span>
          </RouterLink>
          <RouterLink
          :to="{ name: 'projects' }"
          class="dropdown-item border-radius-md"
          >
          <span>Layihələr</span>
          </RouterLink>
          <RouterLink
          :to="{ name: 'contactus' }"
          class="dropdown-item border-radius-md"
          >
          <span> 
            Qalereya</span>
          </RouterLink>   
          <RouterLink
          :to="{ name: 'contactus' }"
          >
          <span>Əlaqə</span>
          </RouterLink>   
        </div>
    </div>
  </nav>
  <!-- End Navbar -->
</template>
