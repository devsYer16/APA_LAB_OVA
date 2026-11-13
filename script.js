const lessons = [
 {title:"Conoce las normas APA",intro:"APA es un estilo de publicación que orienta la presentación de trabajos académicos y la forma de reconocer las ideas de otras personas.",content:`<div class="info-card"><b>¿Para qué sirven?</b><br>Ayudan a organizar la información, dar crédito a las fuentes y facilitar que el lector localice los materiales consultados.</div><ul><li>Promueven claridad y coherencia.</li><li>Establecen pautas para citas y referencias.</li><li>Orientan el formato de trabajos académicos.</li></ul><div class="example"><b>Dato clave:</b> esta cartilla resume la séptima edición. La guía oficial es el manual publicado por la American Psychological Association.</div>`},
 {title:"Formato del documento",intro:"El formato permite que el trabajo sea claro, legible y consistente. Estas son pautas generales para trabajos estudiantiles.",content:`<div class="info-card"><b>Configuración básica</b><br>• Márgenes: 2,54 cm en cada lado.<br>• Interlineado: doble en el documento.<br>• Alineación: a la izquierda, sin justificar.<br>• Sangría: primera línea de cada párrafo, 1,27 cm.<br>• Número de página: esquina superior derecha.</div><p><b>Fuentes aceptadas:</b> por ejemplo, Arial 11, Calibri 11, Times New Roman 12 o Georgia 11. Mantén una fuente legible y consistente.</p><div class="example"><b>Importante:</b> los trabajos estudiantiles normalmente no llevan encabezado abreviado (running head), salvo que el docente o la institución lo solicite.</div>`},
 {title:"Cómo citar dentro del texto",intro:"APA utiliza el sistema autor-fecha. Cada cita debe permitir identificar la fuente correspondiente en la lista de referencias.",content:`<div class="info-card"><b>Cita parentética</b><br>La información se presenta y al final se incluye (Apellido, año).<br><b>Ejemplo:</b> (Pérez, 2022).</div><div class="info-card"><b>Cita narrativa</b><br>El apellido forma parte de la oración.<br><b>Ejemplo:</b> Pérez (2022) explica que...</div><p><b>Cita textual:</b> reproduce las palabras exactas. Incluye autor, año y localizador (página si existe). Para menos de 40 palabras se usan comillas; las citas de 40 palabras o más se presentan en bloque.</p><p><b>Paráfrasis:</b> expresa la idea con tus propias palabras e incluye autor y año. El número de página es opcional, aunque puede ayudar a ubicar el pasaje.</p>`},
 {title:"Lista de referencias",intro:"La lista de referencias reúne las fuentes que fueron citadas en el trabajo y permite que el lector las identifique.",content:`<div class="info-card"><b>Regla de correspondencia</b><br>Todo trabajo citado en el texto debe aparecer en las referencias y, por regla general, cada entrada de referencias debe estar citada en el texto.</div><p><b>Elementos básicos:</b> autor, fecha, título y fuente.</p><div class="example"><b>Libro (modelo):</b><br>Apellido, A. A. (Año). <i>Título del libro</i>. Editorial.</div><div class="example"><b>Página web (modelo):</b><br>Autor u organización. (Año, día de mes). <i>Título de la página</i>. Nombre del sitio. URL</div><ul><li>Orden alfabético por apellido del primer autor.</li><li>Interlineado doble.</li><li>Sangría francesa de 1,27 cm.</li></ul>`},
 {title:"Tablas y figuras",intro:"Las tablas y figuras ayudan a comunicar datos o ideas visualmente. Deben ser claras, necesarias y estar mencionadas en el texto.",content:`<div class="info-card"><b>Tablas</b><br>Organizan información en filas y columnas. Identifica cada tabla con un número en negrita y un título breve en cursiva.</div><div class="info-card"><b>Figuras</b><br>Incluyen gráficos, fotografías, diagramas, mapas e ilustraciones. También llevan número en negrita y título en cursiva.</div><p>Si el contenido visual se reproduce o adapta de otra fuente, incluye la atribución y los datos de derechos correspondientes según el caso.</p><div class="example"><b>Ejemplo de rótulo:</b><br><b>Figura 1</b><br><i>Proceso de elaboración del producto</i><br>[Inserta aquí la figura]</div>`},
 {title:"Revisión final",intro:"Antes de entregar tu trabajo, utiliza esta lista para revisar los aspectos esenciales de APA 7.",content:`<div class="info-card"><b>Lista de comprobación</b><br>✓ Márgenes y fuente consistentes.<br>✓ Interlineado doble y sangrías correctas.<br>✓ Páginas numeradas.<br>✓ Citas con autor y fecha.<br>✓ Citas textuales con localizador.<br>✓ Referencias en orden alfabético y con sangría francesa.<br>✓ Tablas y figuras identificadas y mencionadas en el texto.</div><p>Recuerda: esta lista es una ayuda rápida, no reemplaza la consulta del manual cuando tengas un caso especial.</p>`}
];
const cards=[...document.querySelectorAll(".module-card")];
const lessonTag=document.getElementById("lessonTag"), lessonTitle=document.getElementById("lessonTitle"), lessonIntro=document.getElementById("lessonIntro"), lessonContent=document.getElementById("lessonContent"), moduleCounter=document.getElementById("moduleCounter"), nextModule=document.getElementById("nextModule");
let currentModule=0;
function showModule(index){
 currentModule=(index+lessons.length)%lessons.length;
 const item=lessons[currentModule];
 cards.forEach((card,i)=>card.classList.toggle("selected",i===currentModule));
 lessonTag.textContent=`MÓDULO ${String(currentModule+1).padStart(2,"0")}`;
 lessonTitle.textContent=item.title;lessonIntro.textContent=item.intro;lessonContent.innerHTML=item.content;
 moduleCounter.textContent=`${String(currentModule+1).padStart(2,"0")} / 06`;
 nextModule.textContent=currentModule===5?"Volver al inicio de módulos ↗":"Siguiente módulo →";
}
cards.forEach(card=>card.addEventListener("click",()=>showModule(Number(card.dataset.module))));
nextModule.addEventListener("click",()=>showModule(currentModule+1));

const questions=[
 {q:"¿Cuál es el sistema de citación utilizado por APA?",a:["Autor-fecha","Numeración consecutiva","Notas al pie únicamente"],correct:0,why:"APA utiliza el sistema autor-fecha. La referencia completa se incluye al final del trabajo."},
 {q:"¿Cuánto mide la sangría de primera línea de un párrafo?",a:["0,5 cm","1,27 cm","2,54 cm"],correct:1,why:"La sangría de primera línea es de 0,5 pulgadas, equivalentes a 1,27 cm."},
 {q:"¿Qué datos requiere una cita textual?",a:["Solo el título","Autor, año y localizador","Solo el enlace web"],correct:1,why:"La cita textual incluye autor, año y un localizador, como la página cuando está disponible."},
 {q:"¿Cómo se organizan normalmente las referencias?",a:["Por fecha de consulta","En el orden en que aparecen","Alfabéticamente por el apellido del primer autor"],correct:2,why:"La lista de referencias se ordena alfabéticamente por el apellido del primer autor."},
 {q:"¿Qué interlineado se utiliza como regla general?",a:["Sencillo","Doble","1,5"],correct:1,why:"La regla general es doble espacio en el documento, incluida la lista de referencias."}
];
let qIndex=0,selected=null,score=0,answered=false;
const qText=document.getElementById("questionText"),answers=document.getElementById("answers"),feedback=document.getElementById("feedback"),check=document.getElementById("checkAnswer"),nextQ=document.getElementById("nextQuestion");
function renderQuestion(){
 const q=questions[qIndex];selected=null;answered=false;
 document.getElementById("questionCount").textContent=`PREGUNTA ${qIndex+1} DE ${questions.length}`;
 document.getElementById("quizProgress").style.width=`${(qIndex+1)/questions.length*100}%`;
 document.getElementById("quizScore").textContent=`${score} aciertos`;
 qText.textContent=q.q;feedback.textContent="";check.hidden=false;nextQ.hidden=true;check.disabled=false;
 answers.innerHTML="";
 q.a.forEach((answer,i)=>{const b=document.createElement("button");b.className="answer-option";b.innerHTML=`<span class="letter">${String.fromCharCode(65+i)}</span><span>${answer}</span>`;b.addEventListener("click",()=>{if(answered)return;selected=i;document.querySelectorAll(".answer-option").forEach(x=>x.classList.remove("chosen"));b.classList.add("chosen")});answers.appendChild(b)});
}
check.addEventListener("click",()=>{
 if(selected===null){feedback.textContent="Selecciona una opción antes de comprobar.";return}
 const q=questions[qIndex];answered=true;const opts=[...document.querySelectorAll(".answer-option")];
 opts[q.correct].classList.add("correct");if(selected!==q.correct)opts[selected].classList.add("wrong");else score++;
 feedback.textContent=(selected===q.correct?"¡Correcto! ":"No es correcto. ")+q.why;
 document.getElementById("quizScore").textContent=`${score} aciertos`;check.hidden=true;nextQ.hidden=false;
});
nextQ.addEventListener("click",()=>{
 if(qIndex<questions.length-1){qIndex++;renderQuestion()}
 else{finalPassed=score>=4; qText.textContent=`¡Evaluación finalizada! Tu calificación es ${score}/${questions.length} (${Math.round(score/questions.length*100)}%).`;answers.innerHTML="";feedback.textContent=score===5?"¡Excelente! Dominas los conceptos básicos.":"Repasa los módulos y vuelve a intentarlo para fortalecer lo aprendido.";check.hidden=true;nextQ.hidden=false;nextQ.textContent="Repetir evaluación";nextQ.onclick=()=>{qIndex=0;score=0;finalPassed=false;updateLearningPath();nextQ.textContent="Siguiente pregunta →";nextQ.onclick=null;renderQuestion()}}
});
renderQuestion();

const menuToggle=document.getElementById("menuToggle"),nav=document.getElementById("mainNav");
menuToggle.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll(".nav-link").forEach(link=>link.addEventListener("click",()=>{nav.classList.remove("open");document.querySelectorAll(".nav-link").forEach(x=>x.classList.remove("active"));link.classList.add("active")}));
const scene=document.getElementById("bookScene");
if(window.matchMedia("(hover:hover)").matches){
 document.querySelector(".hero-art").addEventListener("mousemove",e=>{const r=e.currentTarget.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;scene.style.transform=`rotateY(${-23+x*16}deg) rotateX(${7-y*12}deg)`});
 document.querySelector(".hero-art").addEventListener("mouseleave",()=>scene.style.transform="rotateY(-23deg) rotateX(7deg)");
}


// Ruta de aprendizaje e insignias
const visitedModules = new Set();
const originalShowModule = showModule;
showModule = function(index){
  originalShowModule(index);
  visitedModules.add(currentModule);
  updateLearningPath();
};
function updateLearningPath(){
  const count=visitedModules.size;
  const label=document.getElementById("pathProgressLabel");
  const bar=document.getElementById("pathProgressBar");
  if(label) label.textContent=`${count} de 6 módulos explorados`;
  if(bar) bar.style.width=`${count/6*100}%`;
  document.getElementById("badgeStart")?.classList.toggle("unlocked",count>=1);
  document.getElementById("badgeCiter")?.classList.toggle("unlocked",visitedModules.has(2));
  document.getElementById("badgeFinish")?.classList.toggle("unlocked",finalPassed);
}
let finalPassed=false;

// Biblioteca de ejemplos APA 7
const exampleModels={
 book:{title:"Referencia de un libro",body:"Apellido, A. A. (Año). <i>Título del libro</i>. Editorial.",note:"Modelo general para un libro de un solo autor. Sustituye los datos por los de la fuente real."},
 web:{title:"Referencia de una página web",body:"Autor u organización. (Año, día de mes). <i>Título de la página</i>. Nombre del sitio. URL",note:"Si el autor y el nombre del sitio son el mismo, no repitas el nombre del sitio. No agregues fecha de recuperación salvo que el contenido esté diseñado para cambiar con el tiempo."},
 article:{title:"Referencia de un artículo de revista",body:"Apellido, A. A., & Apellido, B. B. (Año). Título del artículo. <i>Nombre de la Revista, volumen</i>(número), páginas. https://doi.org/xxxxx",note:"Cuando exista DOI, preséntalo como enlace https://doi.org/. Los datos de volumen, número y páginas dependen del artículo."},
 quote:{title:"Cita dentro del texto",body:"Narrativa: Pérez (2022) sostiene que...<br>Parentética: ... (Pérez, 2022).<br>Textual: “fragmento exacto” (Pérez, 2022, p. 15).",note:"Los ejemplos son ficticios y muestran la estructura. En una cita textual utiliza la página u otro localizador disponible."}
};
const exampleDisplay=document.getElementById("exampleDisplay");
function showExample(key){
 const item=exampleModels[key];
 if(exampleDisplay) exampleDisplay.innerHTML=`<span class="example-label">MODELO APA 7</span><h3>${item.title}</h3><div class="example-model">${item.body}</div><p>${item.note}</p>`;
 document.querySelectorAll(".example-tab").forEach(t=>t.classList.toggle("active",t.dataset.example===key));
}
document.querySelectorAll(".example-tab").forEach(t=>t.addEventListener("click",()=>showExample(t.dataset.example)));
showExample("book");

// Resultado final: aprobación con 4/5 o más.
const originalRenderQuestion=renderQuestion;
const originalNextQuestionHandler=nextQ.onclick;
nextQ.addEventListener("click",()=>{
  if(qIndex===questions.length-1 && !answers.children.length){
    finalPassed=score>=4;
    updateLearningPath();
    feedback.textContent += finalPassed ? " Insignia APA listo desbloqueada." : " Intenta nuevamente para obtener la insignia (necesitas 4 de 5).";
  }
});
