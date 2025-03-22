import copertinaVideo1 from "../assets/images/copertina-video-1.avif"

function VideoCard() {
  return (
    <div className="rounded-xl max-w-[499px] mx-auto hover:bg-gray-200 transition-all duration-300 cursor-pointer hover:shadow-[0px_0px_20px_1px] shadow-blue-400">
      <img className="rounded-xl w-full" src={copertinaVideo1} alt="" />
      <div className="px-3 py-2">
        <img src="" alt="" />
        <span className="text-[16px] font-semibold cuttoff-text mb-1">
          TOP 5 DECKS TORNEO GLOBALE CON I BAN DELLA COMMUNITY! - CLASH ROYALE
          ITA
        </span>
        <span className="text-[14px] cuttoff-text-small">DavideRooney</span>
        <span className="text-[14px] block cuttoff-text-small">760 visualizzazioni 52 minuti fa</span>
      </div>
    </div>
  );
}

export default VideoCard