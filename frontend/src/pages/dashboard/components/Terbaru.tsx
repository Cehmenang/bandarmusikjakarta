export default function Terbaru(){
    return (
        <div className="terbaru mt-[70px]">
        <div className="terbaru-text mb-8">
          <h1 className="text-[36px] uppercase font-light italic tracking-tight">Apa Yang</h1>
          <h1 className="text-[72px] uppercase font-black tracking-tight -mt-[30px]">Terbaru?</h1>
          <a href={`produk/terbaru`} className="text-[24px] border-2 border-third px-10 py-2 hover:bg-third hover:text-primary transition-all">Lihat Terbaru</a>
        </div>
        <div className="terbaru-list h-[400px] grid grid-cols-2 gap-x-4">
          <div className="kotak bg-black"></div>
          <div className="subkotak grid grid-rows-2 gap-y-4">
            <div className="kotak-kecil bg-black"></div>
            <div className="kotak-kecil bg-black"></div>
          </div>
        </div>
     </div>
    )
}