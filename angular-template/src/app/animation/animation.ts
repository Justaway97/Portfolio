import { animate, keyframes, state, style, transition, trigger } from "@angular/animations";

export const tableExpandAnimation = trigger('tableExpandAnimation',
    [
        state(
            'collapsed',
            style({
                height: '0px',
                minHeight: '0'
            })
        ),
        state(
            'expanded',
            style({
                height: '{{ expandedHeight }}'
            }),
            {
                params: {
                    expandedHeight: '*'
                }
            }
        ),
        transition(
            'expanded <=> collapsed',
            animate('{{ time }}'),
            {
                params: {
                    time: '255ms'
                }
            }
        )
    ]
);

export const spinnerFlipAnimation = trigger('spinner', [
    transition(':enter',
        [
            animate('3000ms',
                // animate('500ms',
                keyframes([
                    style({
                        transform: 'rotateY(2160deg)',
                        offset: 1,
                    }),
                ])
            ),
        ]
    ),
    transition('zoom-in <=> zoom-out',
        [
            animate('2000ms',
                // animate('500ms',
                keyframes([
                    style({
                        transform: 'scale(15)',
                        transition: 'transform 1s',
                        offset: 0.5,
                    }),
                    style({
                        transform: 'scale(0)',
                        transition: 'transform 1s',
                        offset: 1.0,
                    }),
                ])
            ),
        ]
    ),
    transition('bright-in <=> bright-out',
        [
            animate('3500ms',
                // animate('500ms',
                keyframes([
                    // style({
                    //     filter: 'brightness(none)',
                    //     transition: 'transform 1s',
                    //     offset: 0.5,
                    // }),
                    style({
                        transform: 'scale(3.5)',
                        filter: 'brightness(50)',
                        offset: 1.0,
                    }),
                ])
            ),
        ]
    ),
])

export const fadeInAnimation = trigger('fadeIn',
    [
        state(
            'fade',
            style({
                opacity: 0
            })
        ),
        state(
            'fade-in',
            style({
                opacity: 1
            }),
        ),
        transition('fade <=> fade-in',
            animate('1000ms')
        ),
    ]
);

export const fadeOutAnimation = trigger('fadeOut',
    [
        state(
            'fade',
            style({
                opacity: 1
            })
        ),
        state(
            'fade-out',
            style({
                opacity: 0
            }),
        ),
        transition('fade <=> fade-out',
            animate('1000ms')
        ),
    ]
);
export const glowAnimation = trigger('glow',
    [
        transition('glow <=> glow-in',
            [
                animate('1500ms ease-in-out',
                    keyframes([
                        style({
                            'box-shadow': '0 0 15px black, 0 0 25px #462523, 0 0 35px #cb9b51, 0 0 45px #f6e27a, 0 0 55px #f6f2c0, 0 0 65px white',
                            offset: 0,
                        }),
                        style({
                            'box-shadow': '0 0 25px white, 0 0 35px #f6f2c0, 0 0 45px #f6e27a, 0 0 55px #f6f2c0, 0 0 65px white',
                            offset: 0.9,
                        }),
                    ])
                ),
            ]
        ),
    ]
);
