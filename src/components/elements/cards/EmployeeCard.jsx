import React, { useContext } from 'react';

const EmployeeCard = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <div
          className={theme === "dark" ? styles.darkCard : styles.card}
          id="card"
        >
          <span className={styles.glass}></span>
          <div
            className={theme === "dark" ? styles.darkContent : styles.content}
          >
            <img
              src={point.icon}
              alt={point.title}
              className="w-[50px] h-[50px] border  border-gray-400 py-3 px-2 rounded-xl dark:bg-[#0ea4e918]"
            />
            <h3 className="lg:text-2xl font-semibold text-black dark:text-white">
              {point.title}
            </h3>
            <p className="lg:text-base text-sm text-center text-gray-500">{point.description}</p>
          </div>
        </div>
    );
};

export default EmployeeCard;