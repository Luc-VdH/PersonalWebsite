document.addEventListener('scroll', function (e) {
    var top1  = window.pageYOffset + window.innerHeight,
        isVisible1 = top1 > document.querySelector('#head1').offsetTop;
    var top2  = window.pageYOffset + window.innerHeight,
        isVisible2 = top2 > document.querySelector('#head2').offsetTop;
    var top3  = window.pageYOffset + window.innerHeight,
        isVisible3 = top3 > document.querySelector('#head3').offsetTop;
    var top4  = window.pageYOffset + window.innerHeight,
        isVisible4 = top4 > document.querySelector('#head4').offsetTop;
    var top5  = window.pageYOffset + window.innerHeight,
        isVisible5 = top5 > document.querySelector('#head5').offsetTop;
    var top6  = window.pageYOffset + window.innerHeight,
        isVisible6 = top6 > document.querySelector('#head6').offsetTop;
    var top7  = window.pageYOffset + window.innerHeight,
        isVisible7 = top7 > document.querySelector('#head7').offsetTop;
    var top8  = window.pageYOffset + window.innerHeight,
        isVisible8 = top8 > document.querySelector('#head8').offsetTop;
    var top9  = window.pageYOffset + window.innerHeight,
        isVisible9 = top9 > document.querySelector('#head9').offsetTop;
    var top10  = window.pageYOffset + window.innerHeight,
        isVisible10 = top10 > document.querySelector('#head10').offsetTop;
    

        if (isVisible1) {
            document.getElementById('head1').classList.add('pop-in');
        }
        if (isVisible2) {
            document.getElementById('head2').classList.add('pop-in');
        }
        if (isVisible3) {
            document.getElementById('head3').classList.add('pop-in');
        }
        if (isVisible4) {
            document.getElementById('head4').classList.add('pop-in');
        }
        if (isVisible5) {
            document.getElementById('head5').classList.add('pop-in');
        }
        if (isVisible6) {
            document.getElementById('head6').classList.add('pop-in');
        }
        if (isVisible7) {
            document.getElementById('head7').classList.add('pop-in');
        }
        if (isVisible8) {
            document.getElementById('head8').classList.add('pop-in');
        }
        if (isVisible9) {
            document.getElementById('head9').classList.add('pop-in');
        }
        if (isVisible10) {
            document.getElementById('head10').classList.add('pop-in');
        }
        
    });