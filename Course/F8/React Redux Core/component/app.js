import html from "../core.js";
import { connect } from "../store.js";

// Trả ra hàm mới với đối số là component
const connector = connect();

function app({ cars }) {
  return html`<ul>
      ${cars.map((car) => `<li>${car}</li>`)}
    </ul>
    <button onclick="dispatch('ADD', 'oke con de')">Add Car</button>`;
}

// export app nhưng sau khi gọi connect [ app = connector(app)]
export default connector(app);
