$(document).ready(function() {
  $('.info-block').hide();
}); // <--- jQuery --->

// Задание 1. Добавьте на страницу элемент input[type=«text»]. Справа от input расположите кнопку «+». При нажатии кнопки «+» добавьте еще один элемент input ниже. Возле появившегося элемента создайте кнопку «-» при нажатии на которую данный input будет удаляться. Внизу формы расположите кнопку «собрать», по нажатию которой текст из элементов input будет выведен в расположенный на странице textarea.
// Внимание: Количество input на странице не больше 7. Удалять можно все элементы input кроме последнего.

var counter1 = 0;

$('#plus-btn').on('click', function() {
  if (counter1 < 7) {
    var newLi = $('<li></li>');
    var newInput = $('<input></input>').addClass('inputList');
    var newButton = $('<button></button>').text('-');
    newButton.addClass('minus-btn');
    newLi.append(newInput);
    newLi.append(newButton);
    $('#mainUl').append(newLi);
    counter1++;
  }
});

$('#mainUl').on('click', '.minus-btn', function(event) {
  event.preventDefault();
  $(this).parent().remove();
  counter1--;
});

$('.collect').on('click', function(event) {
  $('#text-area').empty();
  $('.inputList').each(function(index, el) {
    $('#text-area').append($(el).val() + ' ');
  });

  // Задание 3. Модифицируйте задание 1 добавив проверку на пустые input. Пустой input подсвечивается красным цветом, а рядом выводится надпись «Заполните поле!».

  if (!$('.inputList').val()) {
    console.log('warning');
    $('.inputList').each(function(index, el) {
      $(el).attr('placeholder', 'Enter value here !!!').css('background', 'pink');
    });
  }
});

// Задание 2. Модифицируйте задание 1, добавив три input[type=»radio»]. В опциях первого укажите «Четные», у второго — «Нечетные», у третьего — «Все». В зависимости от выбранной опции, информация считывается соответственно из четных, нечетных или всех input на странице. По умолчанию выбран последний radiobutton.

$('.collect2').on('click', function(event) {

  $('#text-area2').empty();

  if ($('#even').prop('checked')) {
    $('.inputList:even').each(function(index, el) {
      $('#text-area2').append($(el).val() + ' ');
    });
  } else if ($('#odd').prop('checked')) {
    $('.inputList:odd').each(function(index, el) {
      $('#text-area2').append($(el).val() + ' ');
    });
  } else {
    $('.inputList').each(function(index, el) {
      $('#text-area2').append($(el).val() + ' ');
    });
  }

  // Задание 3. Модифицируйте задание 1 добавив проверку на пустые input. Пустой input подсвечивается красным цветом, а рядом выводится надпись «Заполните поле!».

  if (!$('.inputList').val()) {
    console.log('warning');
    $('.inputList').each(function(index, el) {
      $(el).attr('placeholder', 'Enter value here !!!').css('background', 'pink');
    });
  }
});

// Задание 4. Реализуйте по нажатию на кнопке всплывающее окно с двумя кнопками. Первая кнопка «Опция №1, вторая кнопка «Опция №2. По нажатию на кнопку окно закрывается, а на странице выводится надпись «Вы выбрали опцию №"x"» и номер выбранной опции.

$('#toggle-btn').on('click', function(event) {
  $('.modal').css('visibility', 'visible');
  $('#pos-btn').text('What btn is Lucky ?');
});
$('#left').on('click', function(event) {
  $('.modal').css('visibility', 'hidden');
  $('#pos-btn').text($(this).text() + ' btn is Lucky btn :)');
});
$('#right').on('click', function(event) {
  $('.modal').css('visibility', 'hidden');
  $('#pos-btn').text($(this).text() + ' btn is Lucky btn :)');
});

// Задание 5. Дан список из элементов. Реализуйте скрипт, который отслеживает клик на элементе списка и подсвечивает его красным цветом. При повторном клике, цвет убирается. Добавьте Input, который позволяет добавлять элементы в список. На них также, распостраняется событие click.

$('#addHero').on('click', function(event) {
  if ($('#inputHero').val() == '') {
    $('#inputHero').attr('placeholder', 'Enter Hero name !!!').css('background', 'pink');
  } else {
    $('#heroList').append($('<li></li>').text($('#inputHero').val()));
    $('#inputHero').val('');
    $('#inputHero').attr('placeholder', '').css('background', 'none');
  }
});

$('.task5').on('click', '#heroList li', function(event) {
  $(this).toggleClass('heroList');
});

// Задание 6. Дан блок с изображением. При наведении мыши, на блок, открывается текстовый блок с черным фоном, прозрачность фона .. Направление раскрытия — с правой части родителя. Если мышь убрана — то блок закрывается с задержкой по времени.

$('.bottom').hover(function() {
  /* Stuff to do when the mouse enters the element */
  $('.top').animate({
    left: '0'
  }, 1000);
}, function() {
  /* Stuff to do when the mouse leaves the element */
  $('.top').animate({
    left: '-512px'
  }, 1000);
});

// Задание 7. Реализуйте скрипт, который при наведении мыши на элементы (изображение или гиперссылка), будет внизу страницы показывать блок, в котором указан адрес изображения, и атрибут alt, если это изображение и адрес ссылки и атрибут title и target, если это гиперссылка. При отсуствии атрибутов — выводится красным предупреждение.

// Задание 8. Модифицируйте скрипт из задачи 7 таким образом, чтобы те изображения, которые не имеют атрибут alt, подсвечивались красным цветом.

// Проверка картинок на наличие атрибутов
$('.task7 img').each(function(index, el) {
  $(el).hover(function() {
    $('.info-block').show();
    if ($(el).attr('alt') == undefined) {
      $('.info-block span').text('Warning, some "attr" is absent').css('color', 'yellow');
      $(el).addClass('attr-absent');
    } else {
      $('.info-block span').html('attr src: ' + $(el).attr('src') + '<br>' + 'attr alt: ' + $(el).attr('alt')).css('color', 'black');
    }
  }, function() {
    $('.info-block').hide();
    $(el).removeClass('attr-absent');
  });
});

// Проверка ссылок на наличие атрибутов
$('.task7 a').each(function(index, el) {
  $(el).hover(function() {
    $('.info-block').show();
    if ($(el).attr('title') == undefined || $(el).attr('target') == undefined) {
      $('.info-block span').text('Warning, some "attr" is absent').css('color', 'yellow');
      $(el).addClass('attr-absent'); // Task-8

    } else {
      $('.info-block span').html('attr href: ' + $(el).attr('href') + '<br>' + 'attr title: ' + $(el).attr('title') + '<br>' + 'attr target: ' + $(el).attr('target')).css('color', 'black');
    }
  }, function() {
    $('.info-block').hide();
    $(el).removeClass('attr-absent'); // Task-8
  });
});

// Задание 9. Создайте скрипт для проверки наличия на странице элементов h1-h6 выводя при этом их количество. Если какого-либо заголовка нет — вывести предупреждение.

// Задание 10.. Модифицируйте скрипт 9 таким образом, чтобы он определял наличие meta title, meta description, meta keywords, рассчитывая длину первых двух. Если они отсутсвуют — выводится предупреждение.
