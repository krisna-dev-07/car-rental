import React, { Component } from "react";

export default class Driver extends Component {
  render() {
    const { uid, name, image, age, rate, selected, selectDriver } = this.props;

    return (
      <div className="flex flex-col justify-around items-center uk-card uk-card-default p-4 text-sm text-primary hover:text-primary hover:no-underline hover:shadow-lg shadow rounded cursor-pointer">
        <div className="image p-2">
          <img src={image} alt={name} className="h-40 rounded-full" />
        </div>
        <div className="flex flex-col text-center">
          <h3 className="text-lg font-bold mt-1 text-capitalize">{name}</h3>
          <p className="mb-2 text-gray-600">Age: {age} years</p>
          <button
            onClick={e => {
              e.preventDefault();
              !selected ? selectDriver(uid, rate) : selectDriver(null, null);
            }}
            className={`uk-button rounded ${
              selected
                ? "bg-primary text-gray-100"
                : "uk-button-default text-primary"
            }`}
          >
            {selected ? (
              <div className="flex items-center">
                <span className="mr-2" uk-icon="check"></span>
                Selected
              </div>
            ) : (
              "Select"
            )}
          </button>
        </div>
      </div>
    );
  }
}
