export const catalogData = async () => {
  try {
    const response = await fetch("https://your-microservice-url/api/policies");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
};
