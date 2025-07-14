// Environment configuration utilities
export const ENV_CONFIG = {
  WS_URL: import.meta.env.VITE_WS_URL || "http://localhost:3000",
  NODE_ENV: import.meta.env.VITE_NODE_ENV || "development",
  IS_DEVELOPMENT: import.meta.env.VITE_NODE_ENV === "development",
  IS_PRODUCTION: import.meta.env.VITE_NODE_ENV === "production",
} as const;

export const debugEnvConfig = () => {
  if (ENV_CONFIG.IS_DEVELOPMENT) {
    console.group("🔧 Environment Configuration");
    console.log("WebSocket URL:", ENV_CONFIG.WS_URL);
    console.log("Node Environment:", ENV_CONFIG.NODE_ENV);
    console.log("Is Development:", ENV_CONFIG.IS_DEVELOPMENT);
    console.log("Is Production:", ENV_CONFIG.IS_PRODUCTION);
    console.groupEnd();
  }
};

export const validateWsUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export const getWsUrl = (): string => {
  const envUrl = import.meta.env.VITE_WS_URL;
  const defaultUrl = "http://localhost:3000";

  if (!envUrl) {
    console.warn("⚠️ VITE_WS_URL not defined, using default:", defaultUrl);
    return defaultUrl;
  }

  if (!validateWsUrl(envUrl)) {
    console.error("❌ Invalid VITE_WS_URL format, using default:", defaultUrl);
    return defaultUrl;
  }

  console.log("✅ Using WebSocket URL:", envUrl);
  return envUrl;
};
