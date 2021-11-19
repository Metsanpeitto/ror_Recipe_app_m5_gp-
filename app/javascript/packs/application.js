// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//= require bootstrap-sprockets

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()


document.addEventListener("turbolinks:load", () => {
    (document.querySelectorAll(".notification .delete") || []).forEach(
        ($delete) => {
            const $notification = $delete.parentNode;

            $delete.addEventListener("click", () => {
                $notification.parentNode.removeChild($notification);
            });
        }
    );

    document.getElementById("open-modal").addEventListener("click", () => {
        document.getElementById("modal-picker").classList.add("is-active");
    });

    document.getElementById("close-modal").addEventListener("click", () => {
        document.getElementById("modal-picker").classList.remove("is-active");
    });
});

