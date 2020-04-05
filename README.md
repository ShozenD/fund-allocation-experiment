# Budget Allocation Experiment
Latest Update: April 5th 2020

## Introduction
This is the web page for the budget allocation experiment conducted by Ph.D. candidate Slande Erole at the University of California, Davis. The code was implemented by Shozen Dan an exchange student from Keio University(Japan) at UC Davis.

### Abstract
As more and more women attain legislative office, the assumption is that descriptive representation will inevitably translate into substantive representation. However, the question remains- how does descriptive representation translate into substantive representation? Moreover, if the effects of gender on legislative behavior are conditioned on certain institutional features of legislatures, then additional studies of the interaction of gender and legislative institutions are sorely needed. To date, little experimental work examines potential differences between men and women in their legislative decision-making. This study seeks to extend experimental work into the legislative arena and explore the mechanisms through which gender exerts an effect on legislative behavior. I draw on previous experimental research of the behavior differences between men and women and the dynamics of legislative decision-making, and offer an allocation exercise as a lens through which to examine gender differences in substantive representation under institutional constraints that mirror those present in most democratic legislatures.

## Implementation
### 1. LIONESS Lab
This experiment was conducted on a platform called LIONESS Lab. LIONESS Lab is a free web-based platform for interactive online experiments. An experiment can be implemented within the LIONESS Lab environment alone but due to restrictions of LIONESS Lab and in order to simplify JavaScript/CSS, this experiment was implemented with a combination of LIONESS Lab, the Bootstrap CSS Library, and an original API. For more information on LIONESS Lab, visit the links below.

* LIONESS Lab Website: https://lioness-lab.org/
* LIONESS Lab Documentation: https://lioness-doc.readthedocs.io/en/latest/

### 2. Encapsulation
There are some notable flaws when using LIONESS Lab to create interactive web experiments:

* While LIONESS Lab provides a decent server and renders basic HTML elements satisfactorily, it doesn't work well with interactive tables and currently does not support graphs. Also the styling of elements can get tricky because custom CSS can clash horribly with the LIONESS CSS settings.

* In the LIONESS Lab environment, everytime the experiment progresses to a new stage, the JavaScript environment is renewed, which means we have to redefine objects and functions if we want to reuse them at different stages. This causes the code to be cluttered and reduces speed.

In order to style tables, create graphs, and reuse objects across various stages of the experiment, I created this repository with the purpose of using it as a sort of library. One can find the code for various objects and elements I defined within the `docs/src` directory. The code is imported into the LIONESS Lab enviroment by including a `script` tag in the first E1 text-box of the stage as such: 
```html
<!--Use Plotly for Graphs-->
<script src="https://cdn.plot.ly/plotly-latest.min.js"></script>

<!--Import Allocation Object-->
<script src="https://shozend.github.io/fund-allocation-experiment/src/Allocation.js"></script>

<!--Import Timer Object-->
<script src="https://shozend.github.io/fund-allocation-experiment/src/Timer.js"></script>

<!--Import Graphing Functions-->
<script src="https://shozend.github.io/fund-allocation-experiment/src/Graph.js"></script>
```
I mentioned above that custom CSS can clash horrible with the LIONESS CSS. In order to render the tables, I used the [Bootstrap CSS library](https://getbootstrap.com), which did not work well with the LIONESS CSS. In order to prevent the CSS from leaking, out I defined tables as a custom HTML element and placed the CSS within the [shadow root](https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot) to protect its CSS from the global CSS.

### 3. Reducing Loading Time
Another notable flaw of LIONESS Lab is that the interactions with the database can be slow and complicated. This is especially trouble some when interactions between user and experiment becomes complicated. In order to reduce loading speed, I utilized the [session storage function](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage) on browsers to temporarily house commonly used variables in JSON format. This speeded up loading time, as accessing session storage is faster than accessing the database.
