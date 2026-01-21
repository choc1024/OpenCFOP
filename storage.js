if (localStorage.getItem("first-time") == null) {
    const times_preset = {
        sessions: {
            session_1: [
                
            ]
        }
    };

    const settings_preset = {
        timer: {
            wca_inspection: false,
            focus_mode: false,
            hide_time: false
        }
    }

    localStorage.setItem("timer_data", JSON.stringify(times_preset))
    localStorage.setItem("settings", JSON.stringify(settings_preset))
    localStorage.setItem("first-time", "no")
}


function get_data(key) {
    const raw_data = localStorage.getItem(key);
    const json_data = raw_data ? JSON.parse(raw_data) : null;

    return json_data
}

function set_data(key, json_data) {
    localStorage.setItem(key, JSON.stringify(json_data));
}