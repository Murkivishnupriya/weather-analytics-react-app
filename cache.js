const CACHE_TTL = 60000; // 60 s

export function getCachedData(city) {
  const cached = localStorage.getItem(`weather_${city}`);
  if (!cached) return null;
  const { data, timestamp } = JSON.parse(cached);
  if (Date.now() - timestamp < CACHE_TTL) {
    return { data, timestamp };
  }
  return null;
}

export function setCachedData(city, data) {
  const payload = { data, timestamp: Date.now() };
  localStorage.setItem(`weather_${city}`, JSON.stringify(payload));
}
