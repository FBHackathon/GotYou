            
        var _SlideshowTransitions = [
        //Fly
            {$Duration: 2100, $During: { $Left: [0.6, 0.4] }, $FlyDirection: 1, $Easing: { $Left: $JssorEasing$.$EaseInQuad, $Opacity: $JssorEasing$.$EaseLinear }, $ScaleHorizontal: 0.3, $Opacity: 2, $Outside: true, $Brother: { $Duration: 1400, $FlyDirection: 2, $Easing: { $Left: $JssorEasing$.$EaseInQuad, $Opacity: $JssorEasing$.$EaseLinear }, $ScaleHorizontal: 0.3, $Opacity: 2} }

        //Rotate Overlap
            , { $Duration: 2000, $Zoom: 6, $Rotate: -1, $Easing: { $Zoom: $JssorEasing$.$EaseInQuad, $Opacity: $JssorEasing$.$EaseLinear, $Rotate: $JssorEasing$.$EaseInQuad }, $Opacity: 2, $Round: { $Rotate: 0.5 }, $Brother: { $Duration: 2000, $Zoom: 1, $Rotate: 1, $Easing: $JssorEasing$.$EaseLinear, $Opacity: 2, $Round: { $Rotate: 0.5 }, $Shift: 150} }

        //Rotate Relay
            , { $Duration: 1600, $Zoom: 6, $Rotate: 1, $Easing: { $Opacity: $JssorEasing$.$EaseLinear, $Rotate: $JssorEasing$.$EaseInQuad }, $Opacity: 2, $Round: { $Rotate: 1 }, $ZIndex: -10, $Brother: { $Duration: 1600, $Zoom: 6, $Rotate: -1, $Easing: { $Opacity: $JssorEasing$.$EaseLinear, $Rotate: $JssorEasing$.$EaseInQuad }, $Opacity: 2, $Round: { $Rotate: 1 }, $ZIndex: -10, $Shift: 800} }

        //Rotate in+ out-
            , { $Duration: 2100, $Zoom: 1, $Rotate: 0.1, $During: { $Left: [0.6, 0.4], $Top: [0.6, 0.4], $Rotate: [0.6, 0.4], $Zoom: [0.6, 0.4] }, $FlyDirection: 6, $Easing: { $Left: $JssorEasing$.$EaseInQuad, $Top: $JssorEasing$.$EaseInQuad, $Opacity: $JssorEasing$.$EaseLinear, $Rotate: $JssorEasing$.$EaseInQuad }, $ScaleHorizontal: 0.3, $ScaleVertical: 0.5, $Opacity: 2, $Brother: { $Duration: 1400, $Zoom: 6, $Rotate: -0.5, $Easing: { $Opacity: $JssorEasing$.$EaseLinear, $Rotate: $JssorEasing$.$EaseInQuad }, $Opacity: 2, $Shift: 300} }

        //Rotate in- out+
            , { $Duration: 2100, $Zoom: 6, $Rotate: 0.5, $During: { $Left: [0.4, 0.6], $Top: [0.4, 0.6], $Rotate: [0.4, 0.6], $Zoom: [0.4, 0.6] }, $Easing: { $Opacity: $JssorEasing$.$EaseLinear, $Rotate: $JssorEasing$.$EaseInQuad }, $ScaleHorizontal: 0.3, $ScaleVertical: 0.5, $Opacity: 2, $Brother: { $Duration: 1400, $Zoom: 1, $Rotate: -0.5, $Easing: { $Opacity: $JssorEasing$.$EaseLinear, $Rotate: $JssorEasing$.$EaseInQuad }, $Opacity: 2, $Shift: 300} }

        //Rotate Axis up overlap
            , { $Duration: 1400, $Rotate: -0.1, $FlyDirection: 5, $Easing: { $Left: $JssorEasing$.$EaseInQuad, $Top: $JssorEasing$.$EaseInQuad, $Opacity: $JssorEasing$.$EaseLinear, $Rotate: $JssorEasing$.$EaseInQuad }, $ScaleHorizontal: 0.3, $ScaleVertical: 0.5, $Opacity: 2, $Brother: { $Duration: 1400, $Rotate: 0.1, $FlyDirection: 10, $Easing: { $Left: $JssorEasing$.$EaseInQuad, $Top: $JssorEasing$.$EaseInQuad, $Opacity: $JssorEasing$.$EaseLinear, $Rotate: $JssorEasing$.$EaseInQuad }, $ScaleHorizontal: 0.05, $ScaleVertical: 0.7, $Opacity: 2} }

        //Rotate Axis down
            , { $Duration: 2100, $Rotate: 0.1, $During: { $Left: [0.6, 0.4], $Top: [0.6, 0.4], $Rotate: [0.6, 0.4] }, $FlyDirection: 10, $Easing: { $Left: $JssorEasing$.$EaseInQuad, $Top: $JssorEasing$.$EaseInQuad, $Opacity: $JssorEasing$.$EaseLinear, $Rotate: $JssorEasing$.$EaseInQuad }, $ScaleHorizontal: 0.1, $ScaleVertical: 0.7, $Opacity: 2, $Brother: { $Duration: 1400, $Rotate: -0.1, $FlyDirection: 5, $Easing: { $Left: $JssorEasing$.$EaseInQuad, $Top: $JssorEasing$.$EaseInQuad, $Opacity: $JssorEasing$.$EaseLinear, $Rotate: $JssorEasing$.$EaseInQuad }, $ScaleHorizontal: 0.2, $ScaleVertical: 0.5, $Opacity: 2} }

        //Chess Replace TB
            , { $Duration: 2000, $Rows: 2, $FlyDirection: 1, $ChessMode: { $Row: 3 }, $Easing: { $Left: $JssorEasing$.$EaseInOutExpo, $Opacity: $JssorEasing$.$EaseLinear }, $Opacity: 2, $Brother: { $Duration: 2000, $Rows: 2, $FlyDirection: 2, $ChessMode: { $Row: 3 }, $Easing: { $Left: $JssorEasing$.$EaseInOutExpo, $Opacity: $JssorEasing$.$EaseLinear }, $Opacity: 2} }
        ];

        var _CaptionTransitions = [
        //CLIP|LR
            {$Duration: 900, $Clip: 3, $Easing: $JssorEasing$.$EaseInOutCubic },
        //CLIP|TB
            {$Duration: 900, $Clip: 12, $Easing: $JssorEasing$.$EaseInOutCubic },

        //LISTVC|B
            {$Duration: 1500, $Clip: 12, $FlyDirection: 8, $Easing: $JssorEasing$.$EaseInOutCubic, $ScaleVertical: 0.8, $ScaleClip: 0.8, $Opacity: 2, $During: { $Top: [0.4, 0.6], $Clip: [0, 0.4], $Opacity: [0.4, 0.6]} },
        //LISTVC|T
            {$Duration: 1500, $Clip: 12, $FlyDirection: 4, $Easing: $JssorEasing$.$EaseInOutCubic, $ScaleVertical: 0.8, $ScaleClip: 0.8, $Opacity: 2, $During: { $Top: [0.4, 0.6], $Clip: [0, 0.4], $Opacity: [0.4, 0.6]} },
        //LISTHC|L
            {$Duration: 1500, $Clip: 3, $FlyDirection: 1, $Easing: $JssorEasing$.$EaseInOutCubic, $ScaleHorizontal: 0.8, $ScaleClip: 0.8, $Opacity: 2, $During: { $Left: [0.4, 0.6], $Clip: [0, 0.4], $Opacity: [0.4, 0.6]} },
        //LISTHC|R
            {$Duration: 1500, $Clip: 3, $FlyDirection: 2, $Easing: $JssorEasing$.$EaseInOutCubic, $ScaleHorizontal: 0.8, $ScaleClip: 0.8, $Opacity: 2, $During: { $Left: [0.4, 0.6], $Clip: [0, 0.4], $Opacity: [0.4, 0.6]} },

        //DODGE|TL
            {$Duration: 1200, $Clip: 15, $FlyDirection: 5, $Easing: { $Left: $JssorEasing$.$EaseInJump, $Top: $JssorEasing$.$EaseInJump, $Clip: $JssorEasing$.$EaseSwing }, $ScaleHorizontal: 0.3, $ScaleVertical: 0.3, $During: { $Left: [0, 0.8], $Top: [0, 0.8] }, $Round: { $Left: 0.8, $Top: 0.8} },
        //DODGE|TR
            {$Duration: 1200, $Clip: 15, $FlyDirection: 6, $Easing: { $Left: $JssorEasing$.$EaseInJump, $Top: $JssorEasing$.$EaseInJump, $Clip: $JssorEasing$.$EaseSwing }, $ScaleHorizontal: 0.3, $ScaleVertical: 0.3, $During: { $Left: [0, 0.8], $Top: [0, 0.8] }, $Round: { $Left: 0.8, $Top: 0.8} },
        //DODGEZOOM|L
            {$Duration: 1800, $Zoom: 1, $FlyDirection: 9, $Easing: { $Left: $JssorEasing$.$EaseInWave, $Top: $JssorEasing$.$EaseInJump, $Zoom: $JssorEasing$.$EaseOutCubic }, $ScaleHorizontal: 0.1, $ScaleVertical: 0.2, $During: { $Left: [0, 0.7], $Top: [0, 0.7] }, $Round: { $Left: 1.5, $Top: 2} },
        //DODGEZOOM|R
            {$Duration: 1800, $Zoom: 1, $FlyDirection: 10, $Easing: { $Left: $JssorEasing$.$EaseInWave, $Top: $JssorEasing$.$EaseInJump, $Zoom: $JssorEasing$.$EaseOutCubic }, $ScaleHorizontal: 0.1, $ScaleVertical: 0.2, $During: { $Left: [0, 0.7], $Top: [0, 0.7] }, $Round: { $Left: 1.5, $Top: 2} },

        //TORTUOUS|H
            {$Duration: 1800, $Clip: 15, $FlyDirection: 1, $Easing: { $Left: $JssorEasing$.$EaseOutWave, $Clip: $JssorEasing$.$EaseOutCubic }, $ScaleHorizontal: 0.2, $During: { $Left: [0, 0.7] }, $Round: { $Left: 1.3} },
        //TORTUOUS|V
            {$Duration: 1800, $Clip: 15, $FlyDirection: 8, $Easing: { $Top: $JssorEasing$.$EaseOutWave, $Clip: $JssorEasing$.$EaseOutCubic }, $ScaleVertical: 0.2, $During: { $Top: [0, 0.7] }, $Round: { $Top: 1.3} },

        //ATTACK|L
            {$Duration: 1500, $Clip: 15, $FlyDirection: 5, $Easing: { $Left: $JssorEasing$.$EaseInExpo, $Top: $JssorEasing$.$EaseOutWave }, $ScaleHorizontal: 0.5, $ScaleVertical: 0.1, $During: { $Left: [0, 0.7], $Top: [0.3, 0.7] }, $Round: { $Top: 1.3} },
        //ATTACK|R
            {$Duration: 1500, $Clip: 15, $FlyDirection: 6, $Easing: { $Left: $JssorEasing$.$EaseInExpo, $Top: $JssorEasing$.$EaseOutWave }, $ScaleHorizontal: 0.5, $ScaleVertical: 0.1, $During: { $Left: [0, 0.7], $Top: [0.3, 0.7] }, $Round: { $Top: 1.3} },

        //FADE*JUMPDN|L
            {$Duration: 1200, $FlyDirection: 5, $Easing: { $Left: $JssorEasing$.$EaseLinear, $Top: $JssorEasing$.$EaseOutCubic }, $ScaleHorizontal: 0.6, $ScaleVertical: 0.6, $Opacity: 2 },
        //FADE*JUMPDN|R
            {$Duration: 1200, $FlyDirection: 6, $Easing: { $Left: $JssorEasing$.$EaseLinear, $Top: $JssorEasing$.$EaseOutCubic }, $ScaleHorizontal: 0.6, $ScaleVertical: 0.6, $Opacity: 2 },
        //FADE*JUMPUP|L
            {$Duration: 900, $FlyDirection: 9, $Easing: { $Left: $JssorEasing$.$EaseLinear, $Top: $JssorEasing$.$EaseInCubic }, $ScaleHorizontal: 0.6, $ScaleVertical: 0.6, $Opacity: 2 },
        //FADE*JUMPUP|R
            {$Duration: 900, $FlyDirection: 10, $Easing: { $Left: $JssorEasing$.$EaseLinear, $Top: $JssorEasing$.$EaseInCubic }, $ScaleHorizontal: 0.6, $ScaleVertical: 0.6, $Opacity: 2 },

        //FADE*WAVEC|T
            {$Duration: 1200, $FlyDirection: 5, $Easing: { $Left: $JssorEasing$.$EaseOutWave, $Top: $JssorEasing$.$EaseLinear }, $ScaleHorizontal: 0.3, $ScaleVertical: 0.5, $Opacity: 2 },
        //FADE*WAVEC|B
            {$Duration: 1200, $FlyDirection: 9, $Easing: { $Left: $JssorEasing$.$EaseOutWave, $Top: $JssorEasing$.$EaseLinear }, $ScaleHorizontal: 0.3, $ScaleVertical: 0.5, $Opacity: 2 },
        //FADE*WAVER|T
            {$Duration: 1200, $FlyDirection: 5, $Easing: { $Left: $JssorEasing$.$EaseInWave, $Top: $JssorEasing$.$EaseLinear }, $ScaleHorizontal: 0.3, $ScaleVertical: 0.5, $Opacity: 2 },
        //FADE*WAVER|B
            {$Duration: 1200, $FlyDirection: 9, $Easing: { $Left: $JssorEasing$.$EaseInWave, $Top: $JssorEasing$.$EaseLinear }, $ScaleHorizontal: 0.3, $ScaleVertical: 0.5, $Opacity: 2 },

        //ZOOMF|10
            //{$Duration: 900, $Zoom: 11, $Easing: { $Zoom: $JssorEasing$.$EaseInExpo, $Opacity: $JssorEasing$.$EaseLinear }, $Opacity: 2 },

        //ZOOML|L
            {$Duration: 900, $Zoom: 11, $FlyDirection: 1, $Easing: { $Left: $JssorEasing$.$EaseInCubic, $Zoom: $JssorEasing$.$EaseInCubic }, $ScaleHorizontal: 0.6, $Opacity: 2 },
        //ZOOML|R
            {$Duration: 900, $Zoom: 11, $FlyDirection: 2, $Easing: { $Left: $JssorEasing$.$EaseInCubic, $Zoom: $JssorEasing$.$EaseInCubic }, $ScaleHorizontal: 0.6, $Opacity: 2 },
        //ZOOML|T
            {$Duration: 900, $Zoom: 11, $FlyDirection: 4, $Easing: { $Top: $JssorEasing$.$EaseInCubic, $Zoom: $JssorEasing$.$EaseInCubic }, $ScaleVertical: 0.6, $Opacity: 2 },
        //ZOOML|B
            {$Duration: 900, $Zoom: 11, $FlyDirection: 8, $Easing: { $Top: $JssorEasing$.$EaseInCubic, $Zoom: $JssorEasing$.$EaseInCubic }, $ScaleVertical: 0.6, $Opacity: 2 },
        //ZOOML|TL
            {$Duration: 900, $Zoom: 11, $FlyDirection: 5, $Easing: { $Left: $JssorEasing$.$EaseInCubic, $Top: $JssorEasing$.$EaseInCubic, $Zoom: $JssorEasing$.$EaseInCubic }, $ScaleHorizontal: 0.6, $ScaleVertical: 0.6, $Opacity: 2 },
        //ZOOML|TR
            {$Duration: 900, $Zoom: 11, $FlyDirection: 6, $Easing: { $Left: $JssorEasing$.$EaseInCubic, $Top: $JssorEasing$.$EaseInCubic, $Zoom: $JssorEasing$.$EaseInCubic }, $ScaleHorizontal: 0.6, $ScaleVertical: 0.6, $Opacity: 2 },
        //ZOOML|BL
            {$Duration: 900, $Zoom: 11, $FlyDirection: 9, $Easing: { $Left: $JssorEasing$.$EaseInCubic, $Top: $JssorEasing$.$EaseInCubic, $Zoom: $JssorEasing$.$EaseInCubic }, $ScaleHorizontal: 0.6, $ScaleVertical: 0.6, $Opacity: 2 },
        //ZOOML|BR
            {$Duration: 900, $Zoom: 11, $FlyDirection: 10, $Easing: { $Left: $JssorEasing$.$EaseInCubic, $Top: $JssorEasing$.$EaseInCubic, $Zoom: $JssorEasing$.$EaseInCubic }, $ScaleHorizontal: 0.6, $ScaleVertical: 0.6, $Opacity: 2 },

        //ZOOMS|L
            {$Duration: 900, $Zoom: 1, $FlyDirection: 1, $Easing: { $Left: $JssorEasing$.$EaseInCubic, $Zoom: $JssorEasing$.$EaseInCubic }, $ScaleHorizontal: 0.6, $Opacity: 2 },
        //ZOOMS|R
            {$Duration: 900, $Zoom: 1, $FlyDirection: 2, $Easing: { $Left: $JssorEasing$.$EaseInCubic, $Zoom: $JssorEasing$.$EaseInCubic }, $ScaleHorizontal: 0.6, $Opacity: 2 },
        //ZOOMS|T
            {$Duration: 900, $Zoom: 1, $FlyDirection: 4, $Easing: { $Top: $JssorEasing$.$EaseInCubic, $Zoom: $JssorEasing$.$EaseInCubic }, $ScaleVertical: 0.6, $Opacity: 2 },
        //ZOOMS|B
            {$Duration: 900, $Zoom: 1, $FlyDirection: 8, $Easing: { $Top: $JssorEasing$.$EaseInCubic, $Zoom: $JssorEasing$.$EaseInCubic }, $ScaleVertical: 0.6, $Opacity: 2 },
        //ZOOMS|TL
            {$Duration: 900, $Zoom: 1, $FlyDirection: 5, $Easing: { $Left: $JssorEasing$.$EaseInCubic, $Top: $JssorEasing$.$EaseInCubic, $Zoom: $JssorEasing$.$EaseInCubic }, $ScaleHorizontal: 0.6, $ScaleVertical: 0.6, $Opacity: 2 },
        //ZOOMS|TR
            {$Duration: 900, $Zoom: 1, $FlyDirection: 6, $Easing: { $Left: $JssorEasing$.$EaseInCubic, $Top: $JssorEasing$.$EaseInCubic, $Zoom: $JssorEasing$.$EaseInCubic }, $ScaleHorizontal: 0.6, $ScaleVertical: 0.6, $Opacity: 2 },
        //ZOOMS|BL
            {$Duration: 900, $Zoom: 1, $FlyDirection: 9, $Easing: { $Left: $JssorEasing$.$EaseInCubic, $Top: $JssorEasing$.$EaseInCubic, $Zoom: $JssorEasing$.$EaseInCubic }, $ScaleHorizontal: 0.6, $ScaleVertical: 0.6, $Opacity: 2 },
        //ZOOMS|BR
            {$Duration: 900, $Zoom: 1, $FlyDirection: 10, $Easing: { $Left: $JssorEasing$.$EaseInCubic, $Top: $JssorEasing$.$EaseInCubic, $Zoom: $JssorEasing$.$EaseInCubic }, $ScaleHorizontal: 0.6, $ScaleVertical: 0.6, $Opacity: 2 },


        //ZOOM*JUMPDN|L
            {$Duration: 1200, $Zoom: 11, $FlyDirection: 5, $Easing: { $Left: $JssorEasing$.$EaseLinear, $Top: $JssorEasing$.$EaseOutCubic, $Zoom: $JssorEasing$.$EaseInCubic }, $ScaleHorizontal: 0.8, $ScaleVertical: 0.5, $Opacity: 2, $During: { $Top: [0, 0.5]} },
        //ZOOM*JUMPDN|R
            {$Duration: 1200, $Zoom: 11, $FlyDirection: 6, $Easing: { $Left: $JssorEasing$.$EaseLinear, $Top: $JssorEasing$.$EaseOutCubic, $Zoom: $JssorEasing$.$EaseInCubic }, $ScaleHorizontal: 0.8, $ScaleVertical: 0.5, $Opacity: 2, $During: { $Top: [0, 0.5]} },
        //ZOOM*JUMPDN|T
            {$Duration: 1200, $Zoom: 11, $FlyDirection: 5, $Easing: { $Left: $JssorEasing$.$EaseOutCubic, $Top: $JssorEasing$.$EaseLinear, $Zoom: $JssorEasing$.$EaseInCubic }, $ScaleHorizontal: 0.5, $ScaleVertical: 0.8, $Opacity: 2, $During: { $Left: [0, 0.5]} },
        //ZOOM*JUMPDN|B
            {$Duration: 1200, $Zoom: 11, $FlyDirection: 9, $Easing: { $Left: $JssorEasing$.$EaseOutCubic, $Top: $JssorEasing$.$EaseLinear, $Zoom: $JssorEasing$.$EaseInCubic }, $ScaleHorizontal: 0.5, $ScaleVertical: 0.8, $Opacity: 2, $During: { $Left: [0, 0.5]} },
        //ZOOM*JUMPUP|L
            {$Duration: 1200, $Zoom: 11, $FlyDirection: 9, $Easing: { $Left: $JssorEasing$.$EaseLinear, $Top: $JssorEasing$.$EaseInCubic, $Zoom: $JssorEasing$.$EaseInCubic }, $ScaleHorizontal: 0.8, $ScaleVertical: 0.5, $Opacity: 2, $During: { $Top: [0, 0.5]} },
        //ZOOM*JUMPUP|R
            {$Duration: 1200, $Zoom: 11, $FlyDirection: 10, $Easing: { $Left: $JssorEasing$.$EaseLinear, $Top: $JssorEasing$.$EaseInCubic, $Zoom: $JssorEasing$.$EaseInCubic }, $ScaleHorizontal: 0.8, $ScaleVertical: 0.5, $Opacity: 2, $During: { $Top: [0, 0.5]} },
        //ZOOM*JUMPUP|T
            {$Duration: 1200, $Zoom: 11, $FlyDirection: 6, $Easing: { $Left: $JssorEasing$.$EaseInCubic, $Top: $JssorEasing$.$EaseLinear, $Zoom: $JssorEasing$.$EaseInCubic }, $ScaleHorizontal: 0.5, $ScaleVertical: 0.8, $Opacity: 2, $During: { $Left: [0, 0.5]} },
        //ZOOM*JUMPUP|B
            {$Duration: 1200, $Zoom: 11, $FlyDirection: 10, $Easing: { $Left: $JssorEasing$.$EaseInCubic, $Top: $JssorEasing$.$EaseLinear, $Zoom: $JssorEasing$.$EaseInCubic }, $ScaleHorizontal: 0.5, $ScaleVertical: 0.8, $Opacity: 2, $During: { $Left: [0, 0.5]} },

        //ZOOM*WAVEC|L
            {$Duration: 1200, $Zoom: 11, $FlyDirection: 5, $Easing: { $Left: $JssorEasing$.$EaseLinear, $Top: $JssorEasing$.$EaseOutWave }, $ScaleHorizontal: 0.5, $ScaleVertical: 0.3, $Opacity: 2, $Round: { $Rotate: 0.8} },
        //ZOOM*WAVEC|R
            {$Duration: 1200, $Zoom: 11, $FlyDirection: 6, $Easing: { $Left: $JssorEasing$.$EaseLinear, $Top: $JssorEasing$.$EaseOutWave }, $ScaleHorizontal: 0.5, $ScaleVertical: 0.3, $Opacity: 2, $Round: { $Rotate: 0.8} },
        //ZOOM*WAVEC|T
            {$Duration: 1200, $Zoom: 11, $FlyDirection: 5, $Easing: { $Left: $JssorEasing$.$EaseOutWave, $Top: $JssorEasing$.$EaseLinear }, $ScaleHorizontal: 0.3, $ScaleVertical: 0.5, $Opacity: 2, $Round: { $Rotate: 0.8} },
        //ZOOM*WAVEC|B
            {$Duration: 1200, $Zoom: 11, $FlyDirection: 9, $Easing: { $Left: $JssorEasing$.$EaseOutWave, $Top: $JssorEasing$.$EaseLinear }, $ScaleHorizontal: 0.3, $ScaleVertical: 0.5, $Opacity: 2, $Round: { $Rotate: 0.8} },
        //ZOOM*WAVER|L
            {$Duration: 1200, $Zoom: 11, $FlyDirection: 5, $Easing: { $Left: $JssorEasing$.$EaseLinear, $Top: $JssorEasing$.$EaseInWave }, $ScaleHorizontal: 0.5, $ScaleVertical: 0.3, $Opacity: 2, $Round: { $Rotate: 0.8} },
        //ZOOM*WAVER|R
            {$Duration: 1200, $Zoom: 11, $FlyDirection: 6, $Easing: { $Left: $JssorEasing$.$EaseLinear, $Top: $JssorEasing$.$EaseInWave }, $ScaleHorizontal: 0.5, $ScaleVertical: 0.3, $Opacity: 2, $Round: { $Rotate: 0.8} },
        //ZOOM*WAVER|T
            {$Duration: 1200, $Zoom: 11, $FlyDirection: 5, $Easing: { $Left: $JssorEasing$.$EaseInWave, $Top: $JssorEasing$.$EaseLinear }, $ScaleHorizontal: 0.3, $ScaleVertical: 0.5, $Opacity: 2, $Round: { $Rotate: 0.8} },
        //ZOOM*WAVER|B
            {$Duration: 1200, $Zoom: 11, $FlyDirection: 9, $Easing: { $Left: $JssorEasing$.$EaseInWave, $Top: $JssorEasing$.$EaseLinear }, $ScaleHorizontal: 0.3, $ScaleVertical: 0.5, $Opacity: 2, $Round: { $Rotate: 0.8} },


        //ROTATE|10
            {$Duration: 900, $Zoom: 11, $Rotate: true, $Easing: { $Zoom: $JssorEasing$.$EaseInExpo, $Opacity: $JssorEasing$.$EaseLinear, $Rotate: $JssorEasing$.$EaseInExpo }, $Opacity: 2, $Round: { $Rotate: 0.8} },

        //ROTATEL|L
            {$Duration: 900, $Zoom: 11, $Rotate: true, $FlyDirection: 1, $Easing: { $Left: $JssorEasing$.$EaseInExpo, $Zoom: $JssorEasing$.$EaseInExpo, $Opacity: $JssorEasing$.$EaseLinear, $Rotate: $JssorEasing$.$EaseInExpo }, $ScaleHorizontal: 0.6, $Opacity: 2, $Round: { $Rotate: 0.8} },
        //ROTATEL|R
            {$Duration: 900, $Zoom: 11, $Rotate: true, $FlyDirection: 2, $Easing: { $Left: $JssorEasing$.$EaseInExpo, $Zoom: $JssorEasing$.$EaseInExpo, $Opacity: $JssorEasing$.$EaseLinear, $Rotate: $JssorEasing$.$EaseInExpo }, $ScaleHorizontal: 0.6, $Opacity: 2, $Round: { $Rotate: 0.8} },
        //ROTATEL|T
            {$Duration: 900, $Zoom: 11, $Rotate: true, $FlyDirection: 4, $Easing: { $Top: $JssorEasing$.$EaseInExpo, $Zoom: $JssorEasing$.$EaseInExpo, $Opacity: $JssorEasing$.$EaseLinear, $Rotate: $JssorEasing$.$EaseInExpo }, $ScaleVertical: 0.6, $Opacity: 2, $Round: { $Rotate: 0.8} },
        //ROTATEL|B
            {$Duration: 900, $Zoom: 11, $Rotate: true, $FlyDirection: 8, $Easing: { $Top: $JssorEasing$.$EaseInExpo, $Zoom: $JssorEasing$.$EaseInExpo, $Opacity: $JssorEasing$.$EaseLinear, $Rotate: $JssorEasing$.$EaseInExpo }, $ScaleVertical: 0.6, $Opacity: 2, $Round: { $Rotate: 0.8} },
        //ROTATEL|TL
            {$Duration: 900, $Zoom: 11, $Rotate: true, $FlyDirection: 5, $Easing: { $Left: $JssorEasing$.$EaseInExpo, $Top: $JssorEasing$.$EaseInExpo, $Zoom: $JssorEasing$.$EaseInExpo, $Opacity: $JssorEasing$.$EaseLinear, $Rotate: $JssorEasing$.$EaseInExpo }, $ScaleHorizontal: 0.6, $ScaleVertical: 0.6, $Opacity: 2, $Round: { $Rotate: 0.8} },
        //ROTATEL|TR
            {$Duration: 900, $Zoom: 11, $Rotate: true, $FlyDirection: 6, $Easing: { $Left: $JssorEasing$.$EaseInExpo, $Top: $JssorEasing$.$EaseInExpo, $Zoom: $JssorEasing$.$EaseInExpo, $Opacity: $JssorEasing$.$EaseLinear, $Rotate: $JssorEasing$.$EaseInExpo }, $ScaleHorizontal: 0.6, $ScaleVertical: 0.6, $Opacity: 2, $Round: { $Rotate: 0.8} },
        //ROTATEL|BL
            {$Duration: 900, $Zoom: 11, $Rotate: true, $FlyDirection: 9, $Easing: { $Left: $JssorEasing$.$EaseInExpo, $Top: $JssorEasing$.$EaseInExpo, $Zoom: $JssorEasing$.$EaseInExpo, $Opacity: $JssorEasing$.$EaseLinear, $Rotate: $JssorEasing$.$EaseInExpo }, $ScaleHorizontal: 0.6, $ScaleVertical: 0.6, $Opacity: 2, $Round: { $Rotate: 0.8} },
        //ROTATEL|BR
            {$Duration: 900, $Zoom: 11, $Rotate: true, $FlyDirection: 10, $Easing: { $Left: $JssorEasing$.$EaseInExpo, $Top: $JssorEasing$.$EaseInExpo, $Zoom: $JssorEasing$.$EaseInExpo, $Opacity: $JssorEasing$.$EaseLinear, $Rotate: $JssorEasing$.$EaseInExpo }, $ScaleHorizontal: 0.6, $ScaleVertical: 0.6, $Opacity: 2, $Round: { $Rotate: 0.8} },

        //ROTATES|L
            {$Duration: 900, $Zoom: 1, $Rotate: true, $FlyDirection: 1, $Easing: { $Left: $JssorEasing$.$EaseInQuad, $Zoom: $JssorEasing$.$EaseInQuad, $Rotate: $JssorEasing$.$EaseInQuad, $Opacity: $JssorEasing$.$EaseOutQuad }, $ScaleHorizontal: 0.6, $Opacity: 2, $Round: { $Rotate: 1.2} },
        //ROTATES|R
            {$Duration: 900, $Zoom: 1, $Rotate: true, $FlyDirection: 2, $Easing: { $Left: $JssorEasing$.$EaseInQuad, $Zoom: $JssorEasing$.$EaseInQuad, $Rotate: $JssorEasing$.$EaseInQuad, $Opacity: $JssorEasing$.$EaseOutQuad }, $ScaleHorizontal: 0.6, $Opacity: 2, $Round: { $Rotate: 1.2} },
        //ROTATES|T
            {$Duration: 900, $Zoom: 1, $Rotate: true, $FlyDirection: 4, $Easing: { $Top: $JssorEasing$.$EaseInQuad, $Zoom: $JssorEasing$.$EaseInQuad, $Rotate: $JssorEasing$.$EaseInQuad, $Opacity: $JssorEasing$.$EaseOutQuad }, $ScaleVertical: 0.6, $Opacity: 2, $Round: { $Rotate: 1.2} },
        //ROTATES|B
            {$Duration: 900, $Zoom: 1, $Rotate: true, $FlyDirection: 8, $Easing: { $Top: $JssorEasing$.$EaseInQuad, $Zoom: $JssorEasing$.$EaseInQuad, $Rotate: $JssorEasing$.$EaseInQuad, $Opacity: $JssorEasing$.$EaseOutQuad }, $ScaleVertical: 0.6, $Opacity: 2, $Round: { $Rotate: 1.2} },
        //ROTATES|TL
            {$Duration: 900, $Zoom: 1, $Rotate: true, $FlyDirection: 5, $Easing: { $Left: $JssorEasing$.$EaseInQuad, $Top: $JssorEasing$.$EaseInQuad, $Zoom: $JssorEasing$.$EaseInQuad, $Rotate: $JssorEasing$.$EaseInQuad, $Opacity: $JssorEasing$.$EaseOutQuad }, $ScaleHorizontal: 0.6, $ScaleVertical: 0.6, $Opacity: 2, $Round: { $Rotate: 1.2} },
        //ROTATES|TR
            {$Duration: 900, $Zoom: 1, $Rotate: true, $FlyDirection: 6, $Easing: { $Left: $JssorEasing$.$EaseInQuad, $Top: $JssorEasing$.$EaseInQuad, $Zoom: $JssorEasing$.$EaseInQuad, $Rotate: $JssorEasing$.$EaseInQuad, $Opacity: $JssorEasing$.$EaseOutQuad }, $ScaleHorizontal: 0.6, $ScaleVertical: 0.6, $Opacity: 2, $Round: { $Rotate: 1.2} },
        //ROTATES|BL
            {$Duration: 900, $Zoom: 1, $Rotate: true, $FlyDirection: 9, $Easing: { $Left: $JssorEasing$.$EaseInQuad, $Top: $JssorEasing$.$EaseInQuad, $Zoom: $JssorEasing$.$EaseInQuad, $Rotate: $JssorEasing$.$EaseInQuad, $Opacity: $JssorEasing$.$EaseOutQuad }, $ScaleHorizontal: 0.6, $ScaleVertical: 0.6, $Opacity: 2, $Round: { $Rotate: 1.2} },
        //ROTATES|BR
            {$Duration: 900, $Zoom: 1, $Rotate: true, $FlyDirection: 10, $Easing: { $Left: $JssorEasing$.$EaseInQuad, $Top: $JssorEasing$.$EaseInQuad, $Zoom: $JssorEasing$.$EaseInQuad, $Rotate: $JssorEasing$.$EaseInQuad, $Opacity: $JssorEasing$.$EaseOutQuad }, $ScaleHorizontal: 0.6, $ScaleVertical: 0.6, $Opacity: 2, $Round: { $Rotate: 1.2} },

        //ROTATE*JUMPDN|L
            {$Duration: 1200, $Zoom: 11, $Rotate: true, $FlyDirection: 5, $Easing: { $Left: $JssorEasing$.$EaseLinear, $Top: $JssorEasing$.$EaseOutCubic, $Zoom: $JssorEasing$.$EaseInCubic }, $ScaleHorizontal: 0.8, $ScaleVertical: 0.5, $Opacity: 2, $During: { $Top: [0, 0.5] }, $Round: { $Rotate: 0.5} },
        //ROTATE*JUMPDN|R
            {$Duration: 1200, $Zoom: 11, $Rotate: true, $FlyDirection: 6, $Easing: { $Left: $JssorEasing$.$EaseLinear, $Top: $JssorEasing$.$EaseOutCubic, $Zoom: $JssorEasing$.$EaseInCubic }, $ScaleHorizontal: 0.8, $ScaleVertical: 0.5, $Opacity: 2, $During: { $Top: [0, 0.5] }, $Round: { $Rotate: 0.5} },
        //ROTATE*JUMPDN|T
            {$Duration: 1200, $Zoom: 11, $Rotate: true, $FlyDirection: 5, $Easing: { $Left: $JssorEasing$.$EaseOutCubic, $Top: $JssorEasing$.$EaseLinear, $Zoom: $JssorEasing$.$EaseInCubic }, $ScaleHorizontal: 0.5, $ScaleVertical: 0.8, $Opacity: 2, $During: { $Left: [0, 0.5] }, $Round: { $Rotate: 0.5} },
        //ROTATE*JUMPDN|B
            {$Duration: 1200, $Zoom: 11, $Rotate: true, $FlyDirection: 9, $Easing: { $Left: $JssorEasing$.$EaseOutCubic, $Top: $JssorEasing$.$EaseLinear, $Zoom: $JssorEasing$.$EaseInCubic }, $ScaleHorizontal: 0.5, $ScaleVertical: 0.8, $Opacity: 2, $During: { $Left: [0, 0.5] }, $Round: { $Rotate: 0.5} },
        //ROTATE*JUMPUP|L
            {$Duration: 1200, $Zoom: 11, $Rotate: true, $FlyDirection: 9, $Easing: { $Left: $JssorEasing$.$EaseLinear, $Top: $JssorEasing$.$EaseInCubic, $Zoom: $JssorEasing$.$EaseInCubic }, $ScaleHorizontal: 0.8, $ScaleVertical: 0.5, $Opacity: 2, $During: { $Top: [0, 0.5] }, $Round: { $Rotate: 0.5} },
        //ROTATE*JUMPUP|R
            {$Duration: 1200, $Zoom: 11, $Rotate: true, $FlyDirection: 10, $Easing: { $Left: $JssorEasing$.$EaseLinear, $Top: $JssorEasing$.$EaseInCubic, $Zoom: $JssorEasing$.$EaseInCubic }, $ScaleHorizontal: 0.8, $ScaleVertical: 0.5, $Opacity: 2, $During: { $Top: [0, 0.5] }, $Round: { $Rotate: 0.5} },
        //ROTATE*JUMPUP|T
            {$Duration: 1200, $Zoom: 11, $Rotate: true, $FlyDirection: 6, $Easing: { $Left: $JssorEasing$.$EaseInCubic, $Top: $JssorEasing$.$EaseLinear, $Zoom: $JssorEasing$.$EaseInCubic }, $ScaleHorizontal: 0.5, $ScaleVertical: 0.8, $Opacity: 2, $During: { $Left: [0, 0.5] }, $Round: { $Rotate: 0.5} },
        //ROTATE*JUMPUP|B
            {$Duration: 1200, $Zoom: 11, $Rotate: true, $FlyDirection: 10, $Easing: { $Left: $JssorEasing$.$EaseInCubic, $Top: $JssorEasing$.$EaseLinear, $Zoom: $JssorEasing$.$EaseInCubic }, $ScaleHorizontal: 0.5, $ScaleVertical: 0.8, $Opacity: 2, $During: { $Left: [0, 0.5] }, $Round: { $Rotate: 0.5} },

        //ROTATE*WAVEC|L
            {$Duration: 1500, $Zoom: 11, $Rotate: true, $FlyDirection: 5, $Easing: { $Left: $JssorEasing$.$EaseLinear, $Top: $JssorEasing$.$EaseOutWave }, $ScaleHorizontal: 0.5, $ScaleVertical: 0.3, $Opacity: 2, $Round: { $Rotate: 0.8} },
        //ROTATE*WAVEC|R
            {$Duration: 1500, $Zoom: 11, $Rotate: true, $FlyDirection: 6, $Easing: { $Left: $JssorEasing$.$EaseLinear, $Top: $JssorEasing$.$EaseOutWave }, $ScaleHorizontal: 0.5, $ScaleVertical: 0.3, $Opacity: 2, $Round: { $Rotate: 0.8} },
        //ROTATE*WAVEC|T
            {$Duration: 1500, $Zoom: 11, $Rotate: true, $FlyDirection: 5, $Easing: { $Left: $JssorEasing$.$EaseOutWave, $Top: $JssorEasing$.$EaseLinear }, $ScaleHorizontal: 0.3, $ScaleVertical: 0.5, $Opacity: 2, $Round: { $Rotate: 0.8} },
        //ROTATE*WAVEC|B
            {$Duration: 1500, $Zoom: 11, $Rotate: true, $FlyDirection: 9, $Easing: { $Left: $JssorEasing$.$EaseOutWave, $Top: $JssorEasing$.$EaseLinear }, $ScaleHorizontal: 0.3, $ScaleVertical: 0.5, $Opacity: 2, $Round: { $Rotate: 0.8} },
        //ROTATE*WAVER|L
            {$Duration: 1500, $Zoom: 11, $Rotate: true, $FlyDirection: 5, $Easing: { $Left: $JssorEasing$.$EaseLinear, $Top: $JssorEasing$.$EaseInWave }, $ScaleHorizontal: 0.5, $ScaleVertical: 0.3, $Opacity: 2, $Round: { $Rotate: 0.8} },
        //ROTATE*WAVER|R
            {$Duration: 1500, $Zoom: 11, $Rotate: true, $FlyDirection: 6, $Easing: { $Left: $JssorEasing$.$EaseLinear, $Top: $JssorEasing$.$EaseInWave }, $ScaleHorizontal: 0.5, $ScaleVertical: 0.3, $Opacity: 2, $Round: { $Rotate: 0.8} },
        //ROTATE*WAVER|T
            {$Duration: 1500, $Zoom: 11, $Rotate: true, $FlyDirection: 5, $Easing: { $Left: $JssorEasing$.$EaseInWave, $Top: $JssorEasing$.$EaseLinear }, $ScaleHorizontal: 0.3, $ScaleVertical: 0.5, $Opacity: 2, $Round: { $Rotate: 0.8} },
        //ROTATE*WAVER|B
            {$Duration: 1500, $Zoom: 11, $Rotate: true, $FlyDirection: 9, $Easing: { $Left: $JssorEasing$.$EaseInWave, $Top: $JssorEasing$.$EaseLinear }, $ScaleHorizontal: 0.3, $ScaleVertical: 0.5, $Opacity: 2, $Round: { $Rotate: 0.8} },


        //L|IB
            {$Duration: 1200, $FlyDirection: 1, $Easing: { $Left: $JssorEasing$.$EaseInOutBack, $Opacity: $JssorEasing$.$EaseSwing }, $ScaleHorizontal: 0.6, $Opacity: 2 },
        //R|IB
            {$Duration: 1200, $FlyDirection: 2, $Easing: { $Left: $JssorEasing$.$EaseInOutBack, $Opacity: $JssorEasing$.$EaseSwing }, $ScaleHorizontal: 0.6, $Opacity: 2 },
        //T|IB
            {$Duration: 1200, $FlyDirection: 4, $Easing: { $Top: $JssorEasing$.$EaseInOutBack, $Opacity: $JssorEasing$.$EaseSwing }, $ScaleVertical: 0.6, $Opacity: 2 },
        //B|IB

        //L+FADE*JUMPDN
            {$Duration: 1200, $Opacity: 2, $FlyDirection: 5, $Easing: { $Left: $JssorEasing$.$EaseLinear, $Top: $JssorEasing$.$EaseOutCubic }, $ScaleHorizontal: 0.8, $ScaleVertical: 0.5, $During: { $Top: [0, 0.5]} },
        //R+FADE*JUMPDN
            {$Duration: 1200, $Opacity: 2, $FlyDirection: 6, $Easing: { $Left: $JssorEasing$.$EaseLinear, $Top: $JssorEasing$.$EaseOutCubic }, $ScaleHorizontal: 0.8, $ScaleVertical: 0.5, $During: { $Top: [0, 0.5]} },
            { $Duration: 1200, $Opacity: 2, $FlyDirection: 9, $Easing: { $Left: $JssorEasing$.$EaseOutCubic, $Top: $JssorEasing$.$EaseLinear }, $ScaleHorizontal: 0.5, $ScaleVertical: 0.8, $During: { $Left: [0, 0.5]} },
        //L+FADE*JUMPUP
            {$Duration: 1200, $Opacity: 2, $FlyDirection: 9, $Easing: { $Left: $JssorEasing$.$EaseLinear, $Top: $JssorEasing$.$EaseInCubic }, $ScaleHorizontal: 0.8, $ScaleVertical: 0.5, $During: { $Top: [0, 0.5]} },
        //R+FADE*JUMPUP
            {$Duration: 1200, $Opacity: 2, $FlyDirection: 10, $Easing: { $Left: $JssorEasing$.$EaseLinear, $Top: $JssorEasing$.$EaseInCubic }, $ScaleHorizontal: 0.8, $ScaleVertical: 0.5, $During: { $Top: [0, 0.5]} },

        //CLIP|LR+FADE
            {$Duration: 1200, $Clip: 3, $Opacity: 1.7, $During: { $Clip: [0.5, 0.5], $Opacity: [0, 0.5]} },
        //CLIP|TB+FADE
            {$Duration: 1200, $Clip: 12, $Opacity: 1.7, $During: { $Clip: [0.5, 0.5], $Opacity: [0, 0.5]} },
        //CLIP|L+FADE
            {$Duration: 1200, $Clip: 1, $Opacity: 1.7, $During: { $Clip: [0.5, 0.5], $Opacity: [0, 0.5]} },
        //CLIP|R+FADE
            {$Duration: 1200, $Clip: 2, $Opacity: 1.7, $During: { $Clip: [0.5, 0.5], $Opacity: [0, 0.5]} },
        //CLIP|T+FADE
            {$Duration: 1200, $Clip: 4, $Opacity: 1.7, $During: { $Clip: [0.5, 0.5], $Opacity: [0, 0.5]} },
        //CLIP|B+FADE
            {$Duration: 1200, $Clip: 8, $Opacity: 1.7, $During: { $Clip: [0.5, 0.5], $Opacity: [0, 0.5]} },


        //L*CLIP
            {$Duration: 1200, $Clip: 12, $FlyDirection: 1, $Easing: $JssorEasing$.$EaseInCubic, $ScaleHorizontal: 0.6, $Opacity: 2 },
        //R*CLIP
            {$Duration: 1200, $Clip: 12, $FlyDirection: 2, $Easing: $JssorEasing$.$EaseInCubic, $ScaleHorizontal: 0.6, $Opacity: 2 },
        //T*CLIP
            {$Duration: 1200, $Clip: 3, $FlyDirection: 4, $Easing: $JssorEasing$.$EaseInCubic, $ScaleVertical: 0.6, $Opacity: 2 },
        //B*CLIP
            {$Duration: 1200, $Clip: 3, $FlyDirection: 8, $Easing: $JssorEasing$.$EaseInCubic, $ScaleVertical: 0.6, $Opacity: 2 },
            , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,
           ];

