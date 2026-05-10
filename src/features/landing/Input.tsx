import { HiOutlineMail } from "react-icons/hi";
import { HiArrowRight } from "react-icons/hi";
import { GiPumpkinLantern } from "react-icons/gi";

const Input = () => {
    return (
        <>
        
            <div className="relative w-[480px] group">
                <HiOutlineMail
                    className="
                        absolute
                        left-4
                        top-1/2
                        -translate-y-1/2
                        text-orange-400/50
                        text-xl
                        z-10
            
                        transition-all
                        duration-800
            
                        group-focus-within:text-orange-400
                    "
                />
                <input
                    type="email"
                    placeholder="Enter your Email"
                    className="
                        w-full
                        rounded-md
                        bg-black/60
                        border
                        border-orange-500/20
                       
                        p-4
                        pl-12
                        pr-36
            
                        text-white
                        text-sm
            
                        outline-none
                        h-[44px]    
                        
                        transition-all 
                        duration-800
            
                        focus:border-orange-500/70
                        hover:border-orange-500/40
                    "
                />

                <button
                    className="
                        absolute
                        right-0
                        top-1/2
                        -translate-y-1/2
                        bg-orange-500/90
                        text-black
                        text-sm
                        px-7
                        py-3
                        rounded-md
                        font-semibold
                        cursor-pointer
            
                        flex
                        items-center
                        gap-2
            
                        transition-all 
                        duration-400
            
                        hover:bg-orange-500
                    "
                >
                    Get notified
                    <HiArrowRight className="text-lg" />
                </button>
            </div>
            <p className="text-sm flex flex-row gap-2 text-xs text-zinc-400 tracking-normal items-center justify-center">
                <GiPumpkinLantern size={16} className="text-orange-500 relative -top-[1px]" />
                Join and be the first to know when the deal drops!
            </p>
        </>
    )
};

export default Input;