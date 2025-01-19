<script setup>
import OnboardingFeatureCard from './OnboardingFeatureCard.vue';
import { computed } from 'vue';
import { useI18n } from 'dashboard/composables/useI18n';
import { useStoreGetters } from 'dashboard/composables/store';

const getters = useStoreGetters();
const { t } = useI18n();
const globalConfig = computed(() => getters['globalConfig/get'].value);
const currentUser = computed(() => getters.getCurrentUser.value);

const greetingMessage = computed(() => {
  const hours = new Date().getHours();
  let translationKey;
  if (hours < 12) {
    translationKey = 'ONBOARDING.GREETING_MORNING';
  } else if (hours < 18) {
    translationKey = 'ONBOARDING.GREETING_AFTERNOON';
  } else {
    translationKey = 'ONBOARDING.GREETING_EVENING';
  }
  return t(translationKey, {
    name: currentUser.value.name,
    installationName: globalConfig.value.installationName,
  });
});
</script>

<template>
  <div
    class="min-h-screen max-w-4xl mx-auto grid grid-cols-1 xl:grid-cols-2 grid-rows-[auto_1fr_1fr] gap-4 p-8 w-full font-inter overflow-auto"
  >
    <div class="col-span-full self-start">
      <p
        class="text-xl font-semibold text-slate-900 dark:text-white font-interDisplay tracking-[0.3px]"
      >
        {{ greetingMessage }}
      </p>
    </div>
  </div>
</template>
