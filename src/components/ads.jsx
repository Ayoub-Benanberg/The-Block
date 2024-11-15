export default function Ad() {
    const backgroundImage = "/imgs/ads.png";

    return (
        <div className="ad h-[32vh] mb-10 object-cover" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="h-full flex items-center p-10 justify-between">
                <div className="text-white">
                    <p className="font-extrabold pb-3 text-lg">Free consultation with exceptional quality</p>
                    <p className="font-thin text-sm">Just one call away: +84 1102 2703</p>
                </div>
                <div className="text-white pr-5">
                    <button className="p-2 border hover:bg-slate-700 font-semibold">Get your consultation</button>
                </div>
            </div>
        </div>
    );
}
