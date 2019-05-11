import { AUTH_USER_SUCCESS, FILTER_DATA, DATA_CHANGE } from "./types";

// import db from "./format.json";
let db = {
  gender: {
    male: {
      count: 234,
      sites: {
        site1: 123,
        site2: 123,
        site3: 123,
        site4: 123,
        site5: 123,
        site6: 123,
        site7: 123,
        site8: 123,
        site9: 123,
        site10: 123
      },
      devices: {
        desktop: 123,
        tablet: 123,
        mobile: 123
      },
      brands: {
        brand1: 123,
        brand2: 123,
        brand3: 123,
        brand4: 123,
        brand5: 123,
        brand6: 123,
        brand7: 123,
        brand8: 123,
        brand9: 123,
        brand10: 123
      },
      age: {
        "1 - 17": 123,
        "18 - 25": 123,
        "26 - 35": 123,
        "36 - 50": 123,
        "above 50": 123
      }
    },
    female: {
      count: 123,
      sites: {
        site1: 123,
        site2: 123,
        site3: 123,
        site4: 123,
        site5: 123,
        site6: 123,
        site7: 123,
        site8: 123,
        site9: 123,
        site10: 123
      },
      devices: {
        desktop: 123,
        tablet: 123,
        mobile: 123
      },
      brands: {
        brand1: 123,
        brand2: 123,
        brand3: 123,
        brand4: 123,
        brand5: 123,
        brand6: 123,
        brand7: 123,
        brand8: 123,
        brand9: 123,
        brand10: 123
      },
      age: {
        "1 - 17": 123,
        "18 - 25": 123,
        "26 - 35": 123,
        "36 - 50": 123,
        "above 50": 123
      }
    }
  },
  sites: {
    site1: {
      count: 123,
      gender: {
        male: 123,
        female: 123
      },
      devices: {
        desktop: 123,
        tablet: 123,
        mobile: 123
      },
      brands: {
        brand1: 123,
        brand2: 123,
        brand3: 123,
        brand4: 123,
        brand5: 123,
        brand6: 123,
        brand7: 123,
        brand8: 123,
        brand9: 123
      },
      age: {
        "1 - 17": 123,
        "18 - 25": 123,
        "26 - 35": 123,
        "36 - 50": 123,
        "above 50": 123
      }
    },
    site2: {
      count: 123,
      gender: {
        male: 123,
        female: 123
      },
      devices: {
        desktop: 123,
        tablet: 123,
        mobile: 123
      },
      brands: {
        brand1: 123,
        brand2: 123,
        brand3: 123,
        brand4: 123,
        brand5: 123,
        brand6: 123,
        brand7: 123,
        brand8: 123,
        brand9: 123,
        brand10: 123
      },
      age: {
        "1 - 17": 123,
        "18 - 25": 123,
        "26 - 35": 123,
        "36 - 50": 123,
        "above 50": 123
      }
    },
    site3: {
      count: 123,
      gender: {
        male: 123,
        female: 123
      },
      devices: {
        desktop: 123,
        tablet: 123,
        mobile: 123
      },
      brands: {
        brand1: 123,
        brand2: 123,
        brand3: 123,
        brand4: 123,
        brand5: 123,
        brand6: 123,
        brand7: 123,
        brand8: 123,
        brand9: 123,
        brand10: 123
      },
      age: {
        "1 - 17": 123,
        "18 - 25": 123,
        "26 - 35": 123,
        "36 - 50": 123,
        "above 50": 123
      }
    },
    site4: {
      count: 123,
      gender: {
        male: 123,
        female: 123
      },
      devices: {
        desktop: 123,
        tablet: 123,
        mobile: 123
      },
      brands: {
        brand1: 123,
        brand2: 123,
        brand3: 123,
        brand4: 123,
        brand5: 123,
        brand6: 123,
        brand7: 123,
        brand8: 123,
        brand9: 123,
        brand10: 123
      },
      age: {
        "1 - 17": 123,
        "18 - 25": 123,
        "26 - 35": 123,
        "36 - 50": 123,
        "above 50": 123
      }
    },
    site5: {
      count: 123,
      gender: {
        male: 123,
        female: 123
      },
      devices: {
        desktop: 123,
        tablet: 123,
        mobile: 123
      },
      brands: {
        brand1: 123,
        brand2: 123,
        brand3: 123,
        brand4: 123,
        brand5: 123,
        brand6: 123,
        brand7: 123,
        brand8: 123,
        brand9: 123,
        brand10: 123
      },
      age: {
        "1 - 17": 123,
        "18 - 25": 123,
        "26 - 35": 123,
        "36 - 50": 123,
        "above 50": 123
      }
    },
    site6: {
      count: 123,
      gender: {
        male: 123,
        female: 123
      },
      devices: {
        desktop: 123,
        tablet: 123,
        mobile: 123
      },
      brands: {
        brand1: 123,
        brand2: 123,
        brand3: 123,
        brand4: 123,
        brand5: 123,
        brand6: 123,
        brand7: 123,
        brand8: 123,
        brand9: 123,
        brand10: 123
      },
      age: {
        "1 - 17": 123,
        "18 - 25": 123,
        "26 - 35": 123,
        "36 - 50": 123,
        "above 50": 123
      }
    },
    site7: {
      count: 123,
      gender: {
        male: 123,
        female: 123
      },
      devices: {
        desktop: 123,
        tablet: 123,
        mobile: 123
      },
      brands: {
        brand1: 123,
        brand2: 123,
        brand3: 123,
        brand4: 123,
        brand5: 123,
        brand6: 123,
        brand7: 123,
        brand8: 123,
        brand9: 123,
        brand10: 123
      },
      age: {
        "1 - 17": 123,
        "18 - 25": 123,
        "26 - 35": 123,
        "36 - 50": 123,
        "above 50": 123
      }
    },
    site8: {
      count: 123,
      gender: {
        male: 123,
        female: 123
      },
      devices: {
        desktop: 123,
        tablet: 123,
        mobile: 123
      },
      brands: {
        brand1: 123,
        brand2: 123,
        brand3: 123,
        brand4: 123,
        brand5: 123,
        brand6: 123,
        brand7: 123,
        brand8: 123,
        brand9: 123,
        brand10: 123
      },
      age: {
        "1 - 17": 123,
        "18 - 25": 123,
        "26 - 35": 123,
        "36 - 50": 123,
        "above 50": 123
      }
    },
    site9: {
      count: 123,
      gender: {
        male: 123,
        female: 123
      },
      devices: {
        desktop: 123,
        tablet: 123,
        mobile: 123
      },
      brands: {
        brand1: 123,
        brand2: 123,
        brand3: 123,
        brand4: 123,
        brand5: 123,
        brand6: 123,
        brand7: 123,
        brand8: 123,
        brand9: 123,
        brand10: 123
      },
      age: {
        "1 - 17": 123,
        "18 - 25": 123,
        "26 - 35": 123,
        "36 - 50": 123,
        "above 50": 123
      }
    },
    site10: {
      count: 123,
      gender: {
        male: 123,
        female: 123
      },
      devices: {
        desktop: 123,
        tablet: 123,
        mobile: 123
      },
      brands: {
        brand1: 123,
        brand2: 123,
        brand3: 123,
        brand4: 123,
        brand5: 123,
        brand6: 123,
        brand7: 123,
        brand8: 123,
        brand9: 123,
        brand10: 123
      },
      age: {
        "1 - 17": 123,
        "18 - 25": 123,
        "26 - 35": 123,
        "36 - 50": 123,
        "above 50": 123
      }
    }
  },
  devices: {
    desktop: {
      count: 123,
      gender: {
        male: 123,
        female: 123
      },
      brands: {
        brand1: 123,
        brand2: 123,
        brand3: 123,
        brand4: 123,
        brand5: 123,
        brand6: 123,
        brand7: 123,
        brand8: 123,
        brand9: 123,
        brand10: 123
      },
      age: {
        "1 - 17": 123,
        "18 - 25": 123,
        "26 - 35": 123,
        "36 - 50": 123,
        "above 50": 123
      }
    },
    tablet: {
      count: 123,
      gender: {
        male: 123,
        female: 123
      },
      brands: {
        brand1: 123,
        brand2: 123,
        brand3: 123,
        brand4: 123,
        brand5: 123,
        brand6: 123,
        brand7: 123,
        brand8: 123,
        brand9: 123,
        brand10: 123
      },
      age: {
        "1 - 17": 123,
        "18 - 25": 123,
        "26 - 35": 123,
        "36 - 50": 123,
        "above 50": 123
      }
    },
    mobile: {
      count: 123,
      gender: {
        male: 123,
        female: 123
      },
      brands: {
        brand1: 123,
        brand2: 123,
        brand3: 123,
        brand4: 123,
        brand5: 123,
        brand6: 123,
        brand7: 123,
        brand8: 123,
        brand9: 123,
        brand10: 123
      },
      age: {
        "1 - 17": 123,
        "18 - 25": 123,
        "26 - 35": 123,
        "36 - 50": 123,
        "above 50": 123
      }
    }
  },
  brands: {
    brand1: {
      count: 123,
      gender: {
        male: 123,
        female: 123
      },
      devices: {
        desktop: 123,
        tablet: 123,
        mobile: 123
      },
      age: {
        "1 - 17": 123,
        "18 - 25": 123,
        "26 - 35": 123,
        "36 - 50": 123,
        "above 50": 123
      }
    },
    brand2: {
      count: 123,
      gender: {
        male: 123,
        female: 123
      },
      devices: {
        desktop: 123,
        tablet: 123,
        mobile: 123
      },
      age: {
        "1 - 17": 123,
        "18 - 25": 123,
        "26 - 35": 123,
        "36 - 50": 123,
        "above 50": 123
      }
    },
    brand3: {
      count: 123,
      gender: {
        male: 123,
        female: 123
      },
      devices: {
        desktop: 123,
        tablet: 123,
        mobile: 123
      },
      age: {
        "1 - 17": 123,
        "18 - 25": 123,
        "26 - 35": 123,
        "36 - 50": 123,
        "above 50": 123
      }
    },
    brand4: {
      count: 123,
      gender: {
        male: 123,
        female: 123
      },
      devices: {
        desktop: 123,
        tablet: 123,
        mobile: 123
      },
      age: {
        "1 - 17": 123,
        "18 - 25": 123,
        "26 - 35": 123,
        "36 - 50": 123,
        "above 50": 123
      }
    },
    brand5: {
      count: 123,
      gender: {
        male: 123,
        female: 123
      },
      devices: {
        desktop: 123,
        tablet: 123,
        mobile: 123
      },
      age: {
        "1 - 17": 123,
        "18 - 25": 123,
        "26 - 35": 123,
        "36 - 50": 123,
        "above 50": 123
      }
    },
    brand6: {
      count: 123,
      gender: {
        male: 123,
        female: 123
      },
      devices: {
        desktop: 123,
        tablet: 123,
        mobile: 123
      },
      age: {
        "1 - 17": 123,
        "18 - 25": 123,
        "26 - 35": 123,
        "36 - 50": 123,
        "above 50": 123
      }
    },
    brand7: {
      count: 123,
      gender: {
        male: 123,
        female: 123
      },
      devices: {
        desktop: 123,
        tablet: 123,
        mobile: 123
      },
      age: {
        "1 - 17": 123,
        "18 - 25": 123,
        "26 - 35": 123,
        "36 - 50": 123,
        "above 50": 123
      }
    },
    brand8: {
      count: 123,
      gender: {
        male: 123,
        female: 123
      },
      devices: {
        desktop: 123,
        tablet: 123,
        mobile: 123
      },
      age: {
        "1 - 17": 123,
        "18 - 25": 123,
        "26 - 35": 123,
        "36 - 50": 123,
        "above 50": 123
      }
    },
    brand9: {
      count: 123,
      gender: {
        male: 123,
        female: 123
      },
      devices: {
        desktop: 123,
        tablet: 123,
        mobile: 123
      },
      age: {
        "1 - 17": 123,
        "18 - 25": 123,
        "26 - 35": 123,
        "36 - 50": 123,
        "above 50": 123
      }
    },
    brand10: {
      count: 123,
      gender: {
        male: 123,
        female: 123
      },
      devices: {
        desktop: 123,
        tablet: 123,
        mobile: 123
      },
      age: {
        "1 - 17": 123,
        "18 - 25": 123,
        "26 - 35": 123,
        "36 - 50": 123,
        "above 50": 123
      }
    }
  },
  age: {
    "1 - 17": {
      count: 123,
      gender: {
        male: 123,
        female: 123
      },
      devices: {
        desktop: 123,
        tablet: 123,
        mobile: 123
      },
      brands: {
        brand1: 123,
        brand2: 123,
        brand3: 123,
        brand4: 123,
        brand5: 123,
        brand6: 123,
        brand7: 123,
        brand8: 123,
        brand9: 123,
        brand10: 123
      }
    },
    "18 - 25": {
      count: 123,
      gender: {
        male: 123,
        female: 123
      },
      devices: {
        desktop: 123,
        tablet: 123,
        mobile: 123
      },
      brands: {
        brand1: 123,
        brand2: 123,
        brand3: 123,
        brand4: 123,
        brand5: 123,
        brand6: 123,
        brand7: 123,
        brand8: 123,
        brand9: 123,
        brand10: 123
      }
    },
    "26 - 35": {
      count: 123,
      gender: {
        male: 123,
        female: 123
      },
      devices: {
        desktop: 123,
        tablet: 123,
        mobile: 123
      },
      brands: {
        brand1: 123,
        brand2: 123,
        brand3: 123,
        brand4: 123,
        brand5: 123,
        brand6: 123,
        brand7: 123,
        brand8: 123,
        brand9: 123,
        brand10: 123
      }
    },
    "36 - 50": {
      count: 123,
      gender: {
        male: 123,
        female: 123
      },
      devices: {
        desktop: 123,
        tablet: 123,
        mobile: 123
      },
      brands: {
        brand1: 123,
        brand2: 123,
        brand3: 123,
        brand4: 123,
        brand5: 123,
        brand6: 123,
        brand7: 123,
        brand8: 123,
        brand9: 123,
        brand10: 123
      }
    },
    "above 50": {
      count: 123,
      gender: {
        male: 123,
        female: 123
      },
      devices: {
        desktop: 123,
        tablet: 123,
        mobile: 123
      },
      brands: {
        brand1: 123,
        brand2: 123,
        brand3: 123,
        brand4: 123,
        brand5: 123,
        brand6: 123,
        brand7: 123,
        brand8: 123,
        brand9: 123,
        brand10: 123
      }
    }
  }
};

export const Signin = () => async dispatch => {
  dispatch({
    type: AUTH_USER_SUCCESS,
    token: "ddksnaijdijsidisudisduisdsidusids",
    user: {
      firstname: "Everistus"
    }
  });
};

export const filterData = ({ key, value }) => async dispatch => {
  let data;
  switch (key) {
    case "gender":
      if (value === "all") {
        data = await getDefaultCount();
        return dispatch({
          type: FILTER_DATA,
          data
        });
      }

      data = await getGenderData(value);
      console.log(data);
      break;
    default:
      data = await getDefaultCount();
      return dispatch({
        type: FILTER_DATA,
        data
      });
  }

  console.log(data);
  dispatch({
    type: DATA_CHANGE,
    data
  });
};

const getGenderData = key => {
  return new Promise((resolve, reponse) => {
    if (key === "all") {
      const gender = db.gender;
      gender.fill = {}.colors = ["#FFC850", "#FF7151"];
      resolve({ gender });
    } else {
      const gender = db.gender[key];
      gender.fill = {}.colors = ["#FFC850", "#FF7151"];
      resolve({ gender });
    }
  });
};

const getDefaultCount = key => {
  return new Promise((resolve, reponse) => {
    const data = db;
    data.gender = db.gender;
    data.gender.fill = { colors: ["#FFC850", "#FF7151"] };

    resolve(data);
  });
};
