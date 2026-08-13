// Shared State Management for School Ecosystem

const DEFAULT_STATE = {
    students: [
        { id: "2023058491", name: "Alex Chen", grade: "Kelas 11 IPA A", points: 1450, streak: 12, tumblerScanned: true, lunchboxScanned: false, avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSb5kZjywGh-7Jf29MUuU48a1jitRYrrLFdJbU-bdxEECy8cySIhiA4xpAldBdQTLjCLOsADaznSVvWaxHe1LRKMvVLZ7FF1B8tIzHuyaVt2tvPgUhIiN4XEgQ_taY73zuEh4UUqPInmC2hLhR4lVg3Kfgxoowqkb6N7BUFofcONE5t9Xq55O68B350eEXmX0k85_sJJ-saP6z8Gq5CvMWM4N0eIJDUQUYM-N50uzdquPiVUAyqimV" },
        { id: "JW-8921", name: "Sarah Jenkins", grade: "Kelas 11 IPA B", points: 1450, streak: 15, tumblerScanned: true, lunchboxScanned: true, avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAM5JCeU2gTO-pTmt6dfXg30S4TmEQfO0pbtf1UD_5laYlV5vuvxou37oikofJnfouTDEoRQ657OPue2iTK9V0uJDe6vl-KFp0v9CK8ASgXH6yN01A8hOWaU1ttiaZM9DCQlMEM7hcZz7EjkcUZtauVGEd6EUMhQrXH39GSyL7zBe_-tl-qXYiVYYOqpX_u41yExzfNwu7_LEjq14KRUxSEmcvdJ4bzEIP1IqzDbKUYQpYTxGR3YKmf" },
        { id: "JW-9014", name: "Marcus Thorne", grade: "Kelas 11 IPA C", points: 1320, streak: 8, tumblerScanned: true, lunchboxScanned: false, avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCobx6eLD7MOSERTpR7UzSbtitkmY4Y5soYBVFgmItpfbMBOU1Z19-IFqP6zohEal_INju0wTdpwPjQCsBPhYLLkm1E6Xrq14kR2IEqkEI4h4m_UvPEvKbmfKfpyk3l57konFbHAXF439LFF4e9r14iM723Zyf2WQvldrh-bK8-X1IUc-jlYb-tjxchEVHdS-Daguh9SiJMPlRDVPFlT_1oZ9lQ44Osh8k_whpQz-kGsit4XTrTReU" },
        { id: "JW-9102", name: "Elena Rodriguez", grade: "Kelas 11 IPA A", points: 1280, streak: 10, tumblerScanned: true, lunchboxScanned: true, avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_GqyC6SESd5rmiXTUPtfC6syYlZSwLe4Upn7693dnpE8_3xSmItVOUzwwmqozJzMv2BQnP4S61O-K0ZILqM1oh5p09X_Pkm4cDTIwLmTv08DwFdf_QgosTJo1OiuanDDjYH7isb3a7y1syO6Zbdgqr34s9OQ8QxxhfyZL0qpTRWUOkKQA7tidj5_Wf7WT8NRZ386BCm2O284VuQ5OVxPR2EjEV40D7XOaWGHQbntVNDGYjmXY_JUe" },
        { id: "JW-3800", name: "Cici K.", grade: "Kelas 11-B", points: 3800, streak: 20, tumblerScanned: true, lunchboxScanned: true, avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-eCobXjSFyWfCXX7KmbjLrZ0PUOmWU8MPxq_l0bsnFpEnOLXIzXLhpuWnA6cF-lBlM6nLR4OFmkqcunruP7Gzp-qazzOXffOXGA0HqbANYFa5IZt3ThI7q1qnmudU89PVFjdVfNMzf_uVVm2zHeYH9ZN14RwFIkjzDWZOK6dS1DfSgjPCXYAncZReMw2Yf9OunpcyVjP-zYWlVVyif_m2cZzHkKNr782HEIqCcnB8r0iuOv-yFi2H" },
        { id: "JW-4200", name: "Budi S.", grade: "Kelas 12-A", points: 4200, streak: 5, tumblerScanned: true, lunchboxScanned: false, avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRYnizidFujTbDyVy2SjIGq54Oq9X3rc39dGpCTdqJrFLT8LwV-2XfMAyRrSYabGbSx3-CYuCpQEz2mjp9_B--CbY8E2erKmzEp-Vdy3WXP8Fbh6G3C7IpA8iDYOcIP_5QqEKE-LJCo0zfihrH25yvfMv1HpGl9VR7P0YXXSNmEewp-aFqu66a7QbKOzF2sFxIk9gl5sVJLEmhsNDO14AwMBDUZoR-ryyga8MD3SBVYwNB8k3xt5oQ" },
        { id: "JW-5500", name: "Ani M.", grade: "Kelas 12-C", points: 5500, streak: 30, tumblerScanned: true, lunchboxScanned: true, avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAtC9w0iFVHLM6sgwj5mGaqs04vp1OX0CqFlnRL-KlWeUU8BUZ7iLM_LSdfjojxXCHju_kCWLQnTQrcnLi-mYOeyd0GaA0rnrFf0eF0g81taV6o_Gjzv9APZIGmm0M8LDMvAzevsQZtKCnrhd3MMX8sINykNI12b56vbBou-Ec6hVC0y4nfQiPjEzzf1-DBptvtOiT5SPL6v9xKJlCEIzZB1EuhHSvDwB0EbCS28u10wTlV_r1YAGD2" },
        { id: "JW-3100", name: "Deni R.", grade: "Kelas 10-A", points: 3100, streak: 4, tumblerScanned: false, lunchboxScanned: false, avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnYHzfaHPYJb8eu6e8xFnfEjwdwCvc52tXzYbTMbVp-bLWLV7FeHJmhCYXJIuZ7NJJN5-EywdTnPcjpRBWbD6QEI8UpjkY7j5zJIm1Bw7IgN5caRQoaJe9JV81thM7uXnUNDCwGZ6jHKPrKpK2MRbgYTaSRiHHIt8_RMUNGseQkp5yf6MRquNKwJxRf7cx3nEh-MzgQsA2LjdhQ3hxB6a78078AKqDl0RJlz7tfL2-5Z-dQeKL0sEJ" },
        { id: "JW-2950", name: "Eka F.", grade: "Kelas 11-B", points: 2950, streak: 6, tumblerScanned: true, lunchboxScanned: false, avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9rJ7kbKsZ1pmmVAPcc-ytzs64IEVJokGPysGP87YQS5zDCSw0qsco-LRgXzj6Zw4kWQyVqf02ot55oBHQk5l2TilWA8kOyWGFLUXpPprXiqOlc59EkvPkeLkJmT-WZ_l8rdj3WvP0FPPF0J6cYrctMp20nsjASFhRIpQB32tNwKkfhreq_zznXV2WR5nxwl-bJuNlCxt4YW1ynvGraCtbLL-ZG0vjatT0z0bb50_qx2dEqGOIkOgf" }
    ],
    validations: [
        { id: "val-1", studentId: "JW-8921", studentName: "Sarah Jenkins", pointsEarned: 150, items: ["Tumbler", "Lunchbox"], status: "pending", time: "2 jam lalu" },
        { id: "val-2", studentId: "JW-9014", studentName: "Marcus Thorne", pointsEarned: 100, items: ["Tumbler"], status: "pending", time: "5 jam lalu" },
        { id: "val-3", studentId: "JW-9102", studentName: "Elena Rodriguez", pointsEarned: 150, items: ["Tumbler", "Lunchbox"], status: "pending", time: "6 jam lalu" }
    ],
    loggedInUser: null
};

// Global Supabase Integration Configuration
const SUPABASE_URL = window.SUPABASE_URL || "";
const SUPABASE_ANON_KEY = window.SUPABASE_ANON_KEY || "";

let supabase = null;
if (SUPABASE_URL && SUPABASE_ANON_KEY && typeof window.supabase !== 'undefined') {
    supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

// Background sync from Supabase
async function syncFromSupabase() {
    if (!supabase) return;
    try {
        const { data, error } = await supabase
            .from('ecosystem_state')
            .select('state_json')
            .eq('id', 'global_state')
            .single();
            
        if (data && data.state_json) {
            const serverState = data.state_json;
            const localState = JSON.parse(localStorage.getItem("school_eco_state"));
            serverState.loggedInUser = localState ? localState.loggedInUser : null;
            localStorage.setItem("school_eco_state", JSON.stringify(serverState));
            
            // Dispatch event to notify UI to re-render
            window.dispatchEvent(new Event('stateUpdated'));
        }
    } catch (e) {
        console.warn("Supabase sync failed, using localStorage fallback:", e);
    }
}

// Background sync to Supabase
async function syncToSupabase(state) {
    if (!supabase) return;
    try {
        const stateToSave = { ...state, loggedInUser: null }; // Don't persist session to DB
        await supabase
            .from('ecosystem_state')
            .upsert({ id: 'global_state', state_json: stateToSave });
    } catch (e) {
        console.warn("Failed to push update to Supabase:", e);
    }
}

// Initialize State
function getAppState() {
    let state = localStorage.getItem("school_eco_state");
    if (!state || !state.includes("Kelas")) {
        state = JSON.stringify(DEFAULT_STATE);
        localStorage.setItem("school_eco_state", state);
    }
    
    // Trigger async sync in the background
    if (supabase) {
        syncFromSupabase();
    }
    
    return JSON.parse(state);
}

function saveAppState(state) {
    localStorage.setItem("school_eco_state", JSON.stringify(state));
    if (supabase) {
        syncToSupabase(state);
    }
}

// Session Helpers
function getLoggedInUser() {
    const state = getAppState();
    return state.loggedInUser;
}

function login(email, role) {
    const state = getAppState();
    let name = "Alex Chen";
    let avatar = "https://lh3.googleusercontent.com/aida-public/AB6AXuCSb5kZjywGh-7Jf29MUuU48a1jitRYrrLFdJbU-bdxEECy8cySIhiA4xpAldBdQTLjCLOsADaznSVvWaxHe1LRKMvVLZ7FF1B8tIzHuyaVt2tvPgUhIiN4XEgQ_taY73zuEh4UUqPInmC2hLhR4lVg3Kfgxoowqkb6N7BUFofcONE5t9Xq55O68B350eEXmX0k85_sJJ-saP6z8Gq5CvMWM4N0eIJDUQUYM-N50uzdquPiVUAyqimV";

    if (role === "officer") {
        name = "Officer Smith";
        avatar = "https://lh3.googleusercontent.com/aida-public/AB6AXuAeYFI6Z8p3RGBBsw9yKkCkx9qUHxKnXKY5xZ7AmYHen0fCOqC6xTXEpdaIs2N-qoNdrJQ3ZbuyFX6UMb0akhIk6QJwRxaETYROUxUAVMYsHXzkli7VO7E51g-FtIK2sMPrTK-ncV-xLA_FHDJY4ZdccyFQdAvSSFzCH_KdY0zWIceoIQMza-nopzrz6Z2ICcKhBSTaZm8G8SdwktNIrUAxl-qoJjNm56Jx0iRAUe92yPzCM_l6rRD_";
    } else if (role === "admin") {
        name = "Admin Principal";
        avatar = "https://lh3.googleusercontent.com/aida-public/AB6AXuDdmATtD99xlSOAYq5OnBTqRHjT6U7S_mG8HxmMkkWjFHq3HZVbCAxb-OCdVxnV6cWV2Ugq8mbYQRE9KhThgqCukiR-KKIFxU4M6FWD8UaIrgMyaW6D5HGOGK-cX9NZuAh4kFB_lc2ykeG9HqLYIKIUaDZvy3Iu8pwdliCS2fvu6YUdldXKj60eE6K_nOVbV9c0tpaawLdSLsFDz8es7jGHIWOUXaUF9X1w6tUw8PW5cXo3NkZruHCt";
    } else {
        // Find matching student by email/ID prefix if applicable, default to Alex Chen
        const found = state.students.find(s => email.toLowerCase().includes(s.name.split(' ')[0].toLowerCase()));
        if (found) {
            name = found.name;
            avatar = found.avatar;
        }
    }

    state.loggedInUser = { email, role, name, avatar };
    saveAppState(state);
}

function logout() {
    const state = getAppState();
    state.loggedInUser = null;
    saveAppState(state);
    window.location.href = "login.html";
}


// Guard Route
function checkAuth(allowedRoles) {
    const user = getLoggedInUser();
    if (!user) {
        window.location.href = "login.html";
        return;
    }
    if (allowedRoles && !allowedRoles.includes(user.role)) {
        // Redirect to appropriate dashboard
        if (user.role === "student") window.location.href = "student-dashboard.html";
        else if (user.role === "officer") window.location.href = "officer-scanner.html";
        else if (user.role === "admin") window.location.href = "admin-dashboard.html";
    }
}
