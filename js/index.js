$('.inp label').click(function () {
  var index = $(this).index();
  $(this).addClass('is-checked').siblings().removeClass('is-checked');
})

$('.cal-btn').click(function () {

  // 判断ADRENAL有没有选择
  if (!$('.ADRENAL .inp>label').hasClass('is-checked')) {
    layer.open({
      content: '请选择ADRENAL'
      , skin: 'msg'
      , time: 2 //2秒后自动关闭
    });
    return false;
  }
  // 判断BRAIN有没有选择
  if (!$('.BRAIN .inp>label').hasClass('is-checked')) {
    layer.open({
      content: '请选择BRAIN'
      , skin: 'msg'
      , time: 2 //2秒后自动关闭
    });
    return false;
  }
  // 判断LIVER有没有选择
  if (!$('.LIVER .inp>label').hasClass('is-checked')) {
    layer.open({
      content: '请选择LIVER'
      , skin: 'msg'
      , time: 2 //2秒后自动关闭
    });
    return false;
  }
  // 判断BONE有没有选择
  if (!$('.BONE .inp>label').hasClass('is-checked')) {
    layer.open({
      content: '请选择BONE'
      , skin: 'msg'
      , time: 2 //2秒后自动关闭
    });
    return false;
  }
  // 判断PEFF有没有选择
  if (!$('.PEFF .inp>label').hasClass('is-checked')) {
    layer.open({
      content: '请选择PEFF'
      , skin: 'msg'
      , time: 2 //2秒后自动关闭
    });
    return false;
  }
  // 判断PLEURA有没有选择
  if (!$('.PLEURA .inp>label').hasClass('is-checked')) {
    layer.open({
      content: '请选择PLEURA'
      , skin: 'msg'
      , time: 2 //2秒后自动关闭
    });
    return false;
  }
  // 判断MEDIA有没有选择
  if (!$('.MEDIA .inp>label').hasClass('is-checked')) {
    layer.open({
      content: '请选择MEDIA'
      , skin: 'msg'
      , time: 2 //2秒后自动关闭
    });
    return false;
  }

  var ADRENAL = $('.ADRENAL .is-checked .val').val()
  var BRAIN = $('.BRAIN .is-checked .val').val()
  var LIVER = $('.LIVER .is-checked .val').val()
  var BONE = $('.BONE .is-checked .val').val()
  var PEFF = $('.PEFF .is-checked .val').val()
  var PLEURA = $('.PLEURA .is-checked .val').val()
  var MEDIA = $('.MEDIA .is-checked .val').val()

  var Prog_risk = 3 * ADRENAL + 2 * BRAIN + 5 * LIVER + 1 * BONE + 1 * PEFF + 0 * PLEURA + 0 * MEDIA
  var Pred_risk = -5 * ADRENAL + -5 * BRAIN + -3 * LIVER + 1 * BONE + 2 * PEFF + 0 * PLEURA + 1 * MEDIA
  var METscore = Prog_risk + Pred_risk

  $('.Prog_risk_data>div').html(Prog_risk)
  $('.Pred_risk_data>div').html(Pred_risk)

  $('.cal-box .result-data>div').html(METscore)
  if (METscore >= 3) {
    $('.risk-box .result-data>div').html('METscore-High')
  } else (
    $('.risk-box .result-data>div').html('METscore-Low')
  )
  
})