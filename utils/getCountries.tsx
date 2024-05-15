const getCountries = async (): Promise<Array<Country>> => {
  try {
    const res = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,flags"
    );
    if (!res.ok) {
      const error = await res.json();
      return Promise.reject(error);
    }
    const data = await res.json();
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
};

export default getCountries;
