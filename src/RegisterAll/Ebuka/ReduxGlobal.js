import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hotel: [],
  bookings: [],
  userData: [],
};

const hotelState = createSlice({
  name: "Hotel",
  initialState,
  reducers: {
    addData: (state, { payload }) => {
      state.userData.push({ ...payload });
    },

    addHotel: (state, { payload }) => {
      state.hotel = payload;
    },
    addBooking: (state, { payload }) => {
      const check = state.bookings.findIndex((el) => el.id === payload.id);
      if (check >= 0) {
        state.bookings[check].days += 1;
      } else {
        const addValue = {
          ...payload,
          days: 1,
        };
        state.bookings.push(addValue);
      }
    },
    changeDays: (state, { payload }) => {
      const check = state.bookings.findIndex((el) => el.id === payload.id);
      let checkValue = state.bookings[check].days;

      if (state.bookings[check].days > 1) {
        state.bookings[check].days -= 1;
      } else if (checkValue === 1) {
        state.bookings = state.bookings.filter((fl) => fl.id !== payload.id);
      }
    },
    removeBooking: (state, { payload }) => {
      state.bookings = state.bookings.filter((fl) => fl.id !== payload.id);
    },

    totalState: (state, { payload }) => {
      const { totalCost, totalDays } = state.bookings.reduce(
        (mainCost, allCost) => {
          const { price, days } = allCost;
          const totalPrice = price * days;
          mainCost.totalCost += totalPrice;
          mainCost.totalDays += days;

          return mainCost;
        },
        { totalCost: 0, totalDays: 0 }
      );
      state.totalRoomCost = totalCost;
      state.totalRoomDays = totalDays;
    },
  },
});

export const {
  addBooking,
  addHotel,
  removeBooking,
  changeDays,
  totalState,
  addData,
} = hotelState.actions;
export default hotelState.reducer;
