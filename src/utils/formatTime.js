// Helper function to format time into hh:mm:ss:ms
const formatTime = (time) => {
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)); // Get minutes
    const seconds = Math.floor((time % (1000 * 60)) / 1000); // Get seconds
    const hundredths = Math.floor((time % 1000) / 10); // Get hundredths of a second

    // Format time with leading zeros where needed
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');
    const formattedHundredths = String(hundredths).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}.${formattedHundredths}`;
};

export default formatTime;