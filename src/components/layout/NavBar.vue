<template>
  <header class="header__wrapper-container">
    <div class="header__wrapper">
      <div class="header">
        <div class="header__logo">
          <router-link rolw="link" to="/">
            <svg
              id="flutterwave"
              aria-labelledby="logo"
              role="img"
              width="173"
              height="34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title id="logo">Flutterwave, Africa payments</title>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M56.952 7.933h.067c.335 0 .537.266.537.6v15.466a.528.528 0 01-.537.534.528.528 0 01-.537-.534V8.466c0-.267.201-.533.47-.533zm-14.703.8h10.137c.336 0 .537.333.537.6a.528.528 0 01-.537.533h-9.6v6.467h8.66c.269 0 .537.2.537.533a.528.528 0 01-.537.533h-8.593v6.667c-.067.333-.336.6-.672.6a.6.6 0 01-.604-.6V9.333h.067a.6.6 0 01.605-.6zm29.405 4.8a.528.528 0 00-.537-.534.528.528 0 00-.537.534v6.466c0 2.2-1.813 3.934-4.028 3.867-2.35 0-3.693-1.533-3.693-3.933v-6.4a.528.528 0 00-.537-.534c-.268 0-.537.267-.537.534v6.6c0 2.733 1.746 4.733 4.633 4.733 1.745.067 3.424-.867 4.23-2.4v1.667c0 .333.268.533.536.533a.528.528 0 00.538-.533h-.068v-10.6zm10.205.066c0 .267-.268.467-.537.467h-3.693v7.4c0 1.667.94 2.267 2.35 2.267.47 0 .94-.067 1.343-.2.269 0 .47.2.47.466 0 .2-.134.4-.336.467-.537.2-1.141.267-1.678.267-1.746 0-3.223-1-3.223-3.134v-7.533H75.28c-.269 0-.537-.267-.537-.533 0-.267.268-.467.537-.467h1.275v-3.2c0-.267.202-.533.47-.533h.067c.269 0 .537.266.537.533v3.2h3.693c.269 0 .537.267.537.533zm8.594.467c.268 0 .537-.2.537-.467 0-.266-.269-.533-.537-.533H86.76v-3.2c0-.267-.269-.533-.537-.533h-.067c-.269 0-.47.266-.47.533v3.2H84.41c-.268 0-.537.2-.537.467 0 .266.269.533.537.533h1.276v7.533c0 2.134 1.477 3.134 3.222 3.134.537 0 1.142-.067 1.679-.267a.502.502 0 00.336-.467.457.457 0 00-.47-.466c-.403.133-.873.2-1.343.2-1.41 0-2.35-.6-2.35-2.267v-7.4h3.693zm2.55 4.733c0-3.4 2.35-6.066 5.506-6.066 3.29 0 5.371 2.666 5.371 6.066 0 .267-.269.534-.537.534h-9.13c.2 2.866 2.282 4.533 4.565 4.533 1.409 0 2.819-.6 3.759-1.6a.516.516 0 01.336-.133c.268 0 .537.266.537.533 0 .133-.067.267-.201.4-1.142 1.267-2.82 1.933-4.499 1.867-3.088 0-5.706-2.4-5.706-6.067v-.067zm1.142-.533c.202-2.533 2.014-4.467 4.297-4.467 2.618 0 4.028 2.134 4.162 4.467h-8.459zm14.099-1.867c.738-1.933 2.551-3.333 4.632-3.466.336 0 .604.266.604.666 0 .267-.201.6-.537.6h-.067c-2.484.267-4.632 2.067-4.632 5.8v4.267c-.067.333-.269.533-.604.533-.269 0-.538-.266-.538-.533V13.599c.068-.333.269-.533.605-.533.268 0 .537.267.537.533v2.8zm22.96-4.066c-.805 0-1.477.533-1.678 1.333l-1.947 6.2-1.947-6.2a1.87 1.87 0 00-1.813-1.4h-.201c-.873 0-1.611.533-1.813 1.4l-1.947 6.133-1.879-6.2c-.202-.733-.873-1.333-1.679-1.333h-.067c-.873 0-1.544.733-1.544 1.6 0 .267.067.533.134.8l3.021 8.6c.202.867.94 1.467 1.88 1.533h.134c.873 0 1.612-.6 1.88-1.466l1.947-6.134 1.947 6.134c.201.866 1.007 1.466 1.88 1.466h.134c.94 0 1.746-.6 1.947-1.533l3.021-8.667c.067-.2.135-.466.135-.666v-.067c0-.867-.672-1.533-1.545-1.533zm4.7.6c1.276-.4 2.551-.667 3.894-.6 1.88 0 3.222.533 4.229 1.4a5.465 5.465 0 011.343 3.866v5.467c0 .933-.738 1.667-1.678 1.667-.873 0-1.611-.6-1.679-1.467-.94 1-2.282 1.6-3.692 1.533-2.216 0-4.163-1.333-4.163-3.733 0-2.667 2.015-3.933 4.901-3.933 1.007 0 2.014.133 2.954.466v-.2c0-1.466-.872-2.2-2.618-2.2-.806 0-1.611.067-2.417.334-.134.066-.336.066-.47.066-.805.067-1.477-.533-1.477-1.333 0-.6.336-1.133.873-1.333zm6.177 7.333c0 1.333-1.142 2.133-2.753 2.067-1.074 0-1.88-.534-1.88-1.467v-.067c0-1 .94-1.666 2.417-1.666.739 0 1.544.2 2.216.466v.667zm13.628-6.8c.202-.733.873-1.2 1.611-1.2.94 0 1.679.733 1.679 1.6v.067c0 .266-.067.533-.202.8l-3.625 8.6c-.336.866-1.141 1.4-2.014 1.466h-.201a2.156 2.156 0 01-1.947-1.533l-3.76-8.6a1.768 1.768 0 01-.201-.8c.067-.933.805-1.6 1.678-1.6a1.73 1.73 0 011.678 1.267l2.619 7 2.685-7.067zm4.633 5.6c.134 3.333 3.021 5.933 6.378 5.733 1.544 0 3.021-.466 4.229-1.466.336-.267.47-.6.47-1v-.067c0-.733-.604-1.333-1.343-1.333-.268 0-.604.066-.805.266-.739.534-1.611.867-2.484.8-1.477.067-2.753-.933-2.954-2.4h6.915c.873-.066 1.544-.8 1.477-1.666v-.267c0-3-2.619-5.533-5.841-5.467-3.558 0-6.042 2.867-6.042 6.334v.533zm6.042-4.067c-1.41 0-2.35 1-2.618 2.6h5.169c-.201-1.533-1.141-2.6-2.551-2.6z"
                fill="#12122C"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M24.256.266c15.106-2.267 5.438 10.6.739 14.2 3.222 2.467 6.512 5.933 7.922 9.867 2.618 7.2-3.827 8.266-8.66 6.466-5.305-1.866-10.004-5.866-13.093-10.533a9.364 9.364 0 01-2.685-.4c1.746 4.933 2.484 10 2.014 14.133 0-8.333-3.961-16.6-9.668-23.466-2.014-2.4.068-4.2 1.88-1.867a53.89 53.89 0 013.357 5.267C8.01 7.133 17.677 1.199 24.256.266zm-2.148 12.267c2.954-1.8 11.95-11.467 3.558-10.6-4.834.533-10.675 5-13.092 7.866 3.357-.4 6.781 1.067 9.534 2.734zm-9.6-.6c2.282-.2 4.766 1 6.646 2.2a16.12 16.12 0 01-5.908 1.533c-3.089 0-3.693-3.467-.739-3.733zm1.275 8.066c2.685 3 6.378 5.934 10.339 7 2.282.6 4.834.334 3.894-2.933-.94-3-3.357-5.667-5.707-7.667-.671.467-1.41.934-2.148 1.267-2.014 1.133-4.163 1.933-6.378 2.333z"
                fill="#F5A623"
              />
            </svg>
          </router-link>
        </div>
        <nav class="header__menu" role="navigation">
          <div class="header__menu-icons">
            <span
              @click="hamburger = true"
              :class="[hamburger ? 'hidden' : '']"
              class="header__menu-icon"
            >
              <svg
                width="25"
                height="8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="#333333" d="M0 0h25v2H0zM0 6h25v2H0z" />
              </svg>
            </span>
            <span
              @click="hamburger = false"
              :class="[hamburger ? '' : 'hidden']"
              class="header__menu-icon"
            >
              <svg
                width="16"
                height="16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#333333"
                  d="M2.065.454l13.89 13.89-1.112 1.11L.954 1.565z"
                />
                <path
                  fill="#333333"
                  d="M.954 14.343L14.844.454l1.11 1.11-13.889 13.89z"
                />
              </svg>
            </span>
          </div>
        </nav>
      </div>
      <ul
        class="header__menu-options"
        id="menu"
        role="navigation"
        :class="[hamburger ? '' : 'hidden']"
      >
        <li class="header__menu-option">
          <span>I didn’t get my tickets</span>
        </li>
        <li class="header__menu-option">
          <router-link to="/" class="header__menu-button">
            <span> CREATE YOUR OWN EVENT </span>
          </router-link>
        </li>
      </ul>
    </div>
    <!--
      TODO:
      fix  mobile navbar color and look, looks weird
     -->
  </header>
</template>
<script>
export default {
  data () {
    return {
      hamburger: false
    }
  }
}
</script>
<style lang="scss">
.header__wrapper-container {
  width: 100%;
  display: flex;
  justify-content: center;
}
.header__wrapper {
  max-width: 1440px;
  width: 100%;
  @include screen(medder) {
    display: flex;
    align-items: center;
    justify-content: space-between;
     padding: 2.4rem 13.3rem 0;
  }
}
#menu {
  @include screen(medder) {
    display: flex;
    align-items: center;
    /* padding-top: 1.5rem; */
  }
}
.header {
  display: flex;
  justify-content: space-between;
  padding-top: 1.5rem;
  align-items: center;

  @include screen(mid) {
    padding-right: 1.5rem;
    padding-left: 1.5rem;
  }
  @include screen(midder) {
    padding-right: 3rem;
    padding-left: 3rem;
  }
  @include screen(large) {
    padding: 0;
  }
  &__menu {
    @include screen(medder) {
      display: none;
    }
    &-options {
      color: $text-color;
      @include screen(mid) {
        background: $background-color;
        z-index: 1;
        height: 90vh;
        width: 100%;
        display: flex;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        padding-top: 2rem;
      }
      @include screen(medder) {
        align-items: center;
        padding-right: 3rem;
      }
    }
    &-option {
      &:first-child {
        @include screen(mid) {
          margin-bottom: 2rem;
          font-size: 1.6rem;
        }
        @include screen(medder) {
          letter-spacing: 0.0508366rem;
          line-height: 1.7rem;
          font-weight: bold;
          margin-right: 3.8rem;
          font-size: 1.4rem;
        }
      }
    }
    &-button {
      @include button;
      cursor: pointer;
      box-shadow: 0px 1.01673px 1.01673px rgba(0, 0, 0, 0.5);
      line-height: 1.5rem;
      padding: 1.2rem 1.4rem;
      letter-spacing: 0.0508366rem;
      font-weight: bold;
      font-size: 1.22008rem;
      &:visited {
        color: $white;
      }
      @include screen(medder) {
        padding: 1.2rem 1.9rem;
      }
    }
  }
}
</style>
