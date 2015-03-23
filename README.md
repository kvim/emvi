<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script type="text/javascript" src="https://rawgit.com/vdkar/jquery.emvi/master/jquery.emvi.js"></script>



<h2>Библиотека для вставки видео на страницу с видео хостингов.</h2>

<p>Полезна для сайтов где видео хранится в видео кода видео (ZxcFDefDF)</p>

<h2>Поддерживаемые сервисы (на данный момент):</h2>

<p>youtube.com<br />
vimeo.com<br />
coub.com</p>

<h2>Использование</h2>

<pre>
&lt;<strong>script </strong><strong>type=</strong><strong>&quot;text/javascript&quot; </strong><strong>src=</strong><strong>&quot;//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js&quot;</strong>&gt;&lt;/<strong>script</strong>&gt;
&lt;<strong>script </strong><strong>type=</strong><strong>&quot;text/javascript&quot; </strong><strong>src=</strong><strong>&quot;jquery.emvi.js&quot;</strong>&gt;&lt;/<strong>script</strong>&gt;</pre>

<pre>
&lt;<strong>script</strong>&gt;
    $( <strong>document </strong>).ready(<strong>function</strong>() {
        $( <strong>&quot;.emvi&quot; </strong>).emvi();
    });
&lt;/<strong>script</strong>&gt;</pre>

<h2>Примеры</h2>

<p>Youtube<br />
&lt;div class=&quot;emvi&quot; data-service=&quot;youtube.com&quot; data-code=&quot;P5_GlAOCHyE&quot;&gt;&lt;/div&gt;</p>
<div class="emvi" data-service="youtube.com" data-code="P5_GlAOCHyE"></div>
<p>&nbsp;</p>

<p>Vimeo<br />
&lt;div class=&quot;emvi&quot; data-service=&quot;vimeo.com&quot; data-code=&quot;35396305&quot;&gt;&lt;/div&gt;</p>
<div class="emvi" data-service="vimeo.com" data-code="35396305"></div>
<p>&nbsp;</p>

<p>Coub<br />
&lt;div class=&quot;emvi&quot; data-service=&quot;coub.com&quot; data-code=&quot;4211j&quot;&gt;&lt;/div&gt;</p>
<div class="emvi" data-service="coub.com" data-code="4211j"></div>
<p>&nbsp;</p>

<h2>Параметры</h2>

<p>data-width=&quot;100&quot; - ширина видео, если не задано видео responsive</p>
