<h2>Библиотека для вставки видео на страницу с видео хостингов.</h2>
<p>Полезна для сайтов где видео хранится в видео кода видео (ZxcFDefDF)</p>

<h2>Поддерживаемые сервисы (на данный момент):</h2>

<p>youtube.com<br />
vimeo.com<br />
coub.com</p>

<h2>Подключение</h2>

<pre>
&lt;<strong>script </strong><strong>type=</strong><strong>&quot;text/javascript&quot; </strong><strong>src=</strong><strong>&quot;//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js&quot;</strong>&gt;&lt;/<strong>script</strong>&gt;
&lt;<strong>script </strong><stыrong>type=</strong><strong>&quot;text/javascript&quot; </strong><strong>src=</strong><strong>&quot;jquery.emvi.js&quot;</strong>&gt;&lt;/<strong>script</strong>&gt;</pre>

<h2>Использование</h2>
<pre>
&lt;<strong>script</strong>&gt;
    $( <strong>document </strong>).ready(<strong>function</strong>() {
        $( <strong>&quot;.emvi&quot; </strong>).emvi();
    });
&lt;/<strong>script</strong>&gt;</pre>

<h2>Примеры</h2>

<p>Youtube<br />
&lt;div class=&quot;emvi&quot; data-service=&quot;youtube.com&quot; data-code=&quot;P5_GlAOCHyE&quot;&gt;&lt;/div&gt;</p>

<p>Vimeo<br />
&lt;div class=&quot;emvi&quot; data-service=&quot;vimeo.com&quot; data-code=&quot;35396305&quot;&gt;&lt;/div&gt;</p>

<p>Coub<br />
&lt;div class=&quot;emvi&quot; data-service=&quot;coub.com&quot; data-code=&quot;4211j&quot;&gt;&lt;/div&gt;</p>

<p>mp4<br />
&lt;div class=&quot;emvi&quot; data-service=&quot;mp4&quot; data-url=&quot;/path/file.mp4&quot;&gt;&lt;/div&gt;</p>

<h2>Параметры</h2>
<p>data-service=&quot;youtube.com&quot; - сервис видео, только домен и зона</p>
<p>data-code=&quot;P5_GlAOCHyE&quot; - код видео</p>
<p>data-url=&quot;/path/file.mp4E&quot; - прямой юрл на файл</p>
<p>data-width=&quot;100&quot; - ширина видео, если не задано видео занимает 100% ширины (responsive)</p>

