const calculateTimeLeft = () => {

    const currentYear = new Date().getFullYear();

    let halloweenDate = new Date(
        `October 31, ${currentYear} 00:00:00`
    );

    // IF HALLOWEEN ALREADY PASSED
    if (new Date() > halloweenDate) {
        halloweenDate = new Date(
            `October 31, ${currentYear + 1} 00:00:00`
        );
    }

    const difference =
        halloweenDate.getTime() - new Date().getTime();

    return {
        days: Math.floor(
            difference / (1000 * 60 * 60 * 24)
        ),

        hours: Math.floor(
            (difference / (1000 * 60 * 60)) % 24
        ),

        minutes: Math.floor(
            (difference / 1000 / 60) % 60
        ),

        seconds: Math.floor(
            (difference / 1000) % 60
        ),
    };
};

export default calculateTimeLeft;