import "css-doodle";
import { BrowserView } from "react-device-detect";

import "./animatedBackground.scss"

// code is a modification of https://codepen.io/anon/embed/MWvPbMW?height=450&theme-id=1&slug-hash=MWvPbMW&default-tab=css,result#result-box

function AnimatedBackground() {
    return (
        <div className = "AnimatedBackground">
            <BrowserView>
                <css-doodle>
                    {`
                        @grid: 50x1 / 100vmax;
                        :container {
                            perspective: 23vmin;
                        }
                        background: @m(
                            @r(10,50), 
                            radial-gradient(
                                @p(#FFFFEE, #FFEEFF, #555566, #556655) 15%,
                                transparent 50%
                            ) @r(100vmax) @r(100vmax) / @r(0.5vmin, 1vmin) @lr no-repeat
                        );

                        @size: 100%;
                        @place-cell: center;

                        border-radius: 50%;
                        transform-style: preserve-3d;
                        animation: scale-up 80s linear infinite;
                        animation-delay: calc(@i * -1.6s);

                        @keyframes scale-up {
                            0% {
                                opacity: 0;
                                transform: translate3d(0, 0, 0) rotate(0);
                            }
                            10% { 
                                opacity: 1; 
                            }
                            95% {
                                transform:
                                    translate3d(0, 0, @r(50vmin, 50vmin))
                                    rotate(@r(-120deg, 120deg));
                            }
                            100% {
                                opacity: 0;
                                transform: translate3d(0, 0, 1vmin);
                            }
                        }
                    `}
                </css-doodle>
            </BrowserView>
        </div>
    );
};


export default AnimatedBackground;