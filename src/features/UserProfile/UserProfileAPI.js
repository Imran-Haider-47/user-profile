const mockApiDelay = 1000; // Simulated API delay in milliseconds

// Simulate saving changes to the user profile
const saveUserProfileChanges = (newData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // In a real API call,  would make a network request here
      // For the sake of example, we'll resolve with the updated data
      resolve(newData);
    }, mockApiDelay);
  });
};

export default {
  saveUserProfileChanges,
};
