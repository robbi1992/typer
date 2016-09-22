(function($) {
    var Custom = {
        nav: {
            init: function () {
                var typerNav = $('div[name="typerNav"]'),
                    typerPlay = typerNav.find('button[name="typerPlay"]'),
                    typerStop = typerNav.find('button[name="typerStop"]'),
                    typerScoring = $('input[name="typerScoring"]'),
                    typer = new Typer(),
                    reset = false;

                $('input[name="typerWords"]').attr('disabled', 'disabled');

                //method for play, pause and resume
                typerPlay.on('click', function() {
                    var isPlay = $(this).find('span').hasClass('glyphicon-play');
                    if (isPlay) {
                        if (reset) {
                            typerScoring.val(0);
                        }
                        $('input[name="typerWords"]').removeAttr('disabled').focus();
                        typer.start(true);
                        $(this).find('span').removeClass('glyphicon-play').addClass('glyphicon-pause');
                    }
                    else {
                        reset = false;
                        typer.start(false);
                        $('input[name="typerWords"]').attr('disabled', 'disabled');
                        $(this).find('span').removeClass('glyphicon-pause').addClass('glyphicon-play');
                    }
                });
                //method for stop
                typerStop.on('click', function() {
                    typer.stop();
                    reset = true;
                    $('input[name="typerWords"]').attr('disabled', 'disabled');
                    typerPlay.find('span').removeClass('glyphicon-pause').addClass('glyphicon-play');
                });
            }
        }
    };

    Custom.nav.init();
})(jQuery);