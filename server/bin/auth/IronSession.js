const sessionOptions = {
    password: "CNwvRT_NZvYvN9->P7_m!5ix#U~dM!5e",
    cookieName: "shopster/auth_cookie",
    cookieOptions: {
	secure: process.env.NODE_ENV === "production",
    },
};

exports.sessionOptions = sessionOptions;
