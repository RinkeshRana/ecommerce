import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateDetails } from "../../features/shippingSlice";
function Address() {
  const [shippingDetails, setShippingDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    street: "",
    state: "",
    pinCode: "",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateDetails({ shippingDetails }));
  }, [dispatch, shippingDetails]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShippingDetails({ ...shippingDetails, [name]: value });
    dispatch(updateDetails({ shippingDetails }));
  };

  return (
    <div className="p-2 text-sm md:text-lg md:w-1/2">
      <div className="text-xl font-semibold my-2 md:text-2xl">
        Shipping Address
      </div>
      <div className="border-b-2 border-yellow-400" />

      <div className="flex mt-2">
        <div className="">
          <div className="flex space-x-2 ">
            <div className=" w-1/2">
              <span className="font-semibold">First Name</span>
              <input
                className="checkoutInput"
                placeholder="First Name"
                name="firstName"
                value={shippingDetails.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="w-1/2">
              <span className="font-semibold">Last Name</span>
              <input
                className="checkoutInput"
                placeholder="Last Name"
                name="lastName"
                value={shippingDetails.lastName}
                onChange={handleChange}
              />
            </div>
          </div>
          <span className="font-semibold">Email Address</span>
          <input
            className="checkoutInput"
            placeholder="Email Address"
            name="email"
            value={shippingDetails.email}
            onChange={handleChange}
          />
          <span className="font-semibold">City</span>
          <input
            className="checkoutInput"
            placeholder="City"
            name="city"
            value={shippingDetails.city}
            onChange={handleChange}
          />
          <span className="font-semibold">State</span>

          <input
            className="checkoutInput"
            placeholder="State"
            name="state"
            value={shippingDetails.state}
            onChange={handleChange}
          />
          <span className="font-semibold">Street Address</span>

          <input
            type="textarea"
            className="checkoutInput"
            placeholder="Street Address"
            name="street"
            value={shippingDetails.street}
            onChange={handleChange}
          />
          <span className="font-semibold">Pincode</span>

          <input
            className="checkoutInput"
            placeholder="Pincode"
            name="pinCode"
            value={shippingDetails.pinCode}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}

export default Address;
