import { AUTH_USER_SUCCESS, FILTER_DATA, DATA_CHANGE } from "./types";

// import db from "./format.json";
let db = {
  gender: {
    male: {
      count: 234,
      sites: [
        {
          url: "helsinginuutiset.fi",
          visits: "118594"
        },
        {
          url: "ess.fi",
          visits: "86950"
        },
        {
          url: "ksml.fi",
          visits: "72965"
        },
        {
          url: "kaleva.fi",
          visits: "66997"
        },
        {
          url: "savonsanomat.fi",
          visits: "66262"
        },
        {
          url: "t13.cl",
          visits: "44420"
        },
        {
          url: "13.cl",
          visits: "36534"
        },
        {
          url: "ts.fi",
          visits: "31513"
        },
        {
          url: "search.izlesene.com",
          visits: "29807"
        },
        {
          url: "m.eluniversal.com.co",
          visits: "27331"
        }
      ],
      devices: {
        desktop: 7000,
        tablet: 8900,
        mobile: 15000
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
      sites: [
        {
          url: "helsinginuutiset.fi",
          visits: "115594"
        },
        {
          url: "ess.fi",
          visits: "98950"
        },
        {
          url: "ksml.fi",
          visits: "89965"
        },
        {
          url: "kaleva.fi",
          visits: "88997"
        },
        {
          url: "savonsanomat.fi",
          visits: "88262"
        },
        {
          url: "t13.cl",
          visits: "55420"
        },
        {
          url: "13.cl",
          visits: "73534"
        },
        {
          url: "ts.fi",
          visits: "78513"
        },
        {
          url: "search.izlesene.com",
          visits: "45807"
        },
        {
          url: "m.eluniversal.com.co",
          visits: "78331"
        }
      ],
      devices: {
        desktop: 17000,
        tablet: 6700,
        mobile: 17000
      },
      brands: {
        brand1: 123,
        brand3: 123,
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
    "helsinginuutiset.fi": {
      count: 118594,
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
    "ess.fi": {
      count: 86950,
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
    "ksml.fi": {
      count: 72965,
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
    "kaleva.fi": {
      count: 66997,
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
    "savonsanomat.fi": {
      count: 66262,
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
    "t13.cl": {
      count: 44420,
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
    "13.cl": {
      count: 36534,
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
    "ts.fi": {
      count: 31513,
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
    "search.izlesene.com": {
      count: 29807,
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
    "m.eluniversal.com.co": {
      count: 27331,
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
      count: 76000,
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
      count: 54000,
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
      count: 125000,
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
