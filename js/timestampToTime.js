function timestampToTime(timestamp) {
    const now = Date.now();
    const sec = Math.floor((now - timestamp) / 1000);

    if(sec < 16) {
        return "Just now";
    }
    if(sec < 60) {
        return s+"s ago";
    }
    const min = (sec - sec % 60) / 60;
    if(min < 60) {
        return min+"min ago";
    }
    const h = (min - min % 60) / 60;
    if(h < 24) {
        return h+"h ago";
    }
    const d = (h - h % 24) / 24;
    if(d < 7) {
        return d+"d ago";
    }
    const w = (d - d % 7) / 7;
    if(d < 36) {
        return w+"w ago";
    }
    const m = (d - d % 34) / 34;
    if(d < 366) {
        return m+"m ago";
    }
    
    return (d-d%365) / 365 +"y ago";
}
export default timestampToTime;