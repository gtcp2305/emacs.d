ression.</p>
</blockquote>

<p>If the above check fails, no change will be performed on the source code. So your code should be
pretty safe. One more cool thing that I want to add to other operations is that it checks if the
buffer will be changed after the transformation. If there will be no change, it will just issue a
<code>&quot;No change&quot;</code> message, and no change will be performed. This is really cool if you obsess about the
buffer changed marker in the mode line like I do.</p>

<h2 id="outro">Outro</h2>

<p>The functions bound to <kbd>O</kbd>, <kbd>M</kbd>, and <kbd>T</kbd> apply to the current expression.
To be really sure which one, turn on <code>show-paren-mode</code>.  You can also call these functions not from
special, although it&#39;s not very convenient. The typical strategy in that case would be to bind all
of them on a prefix map, e.g. <kbd>C-c</kbd>.
How is it different from <a href="https://github.com/abo-abo/lispy#how-to-get-into-list-editing-mode-special">special</a> then?</p>

<blockquote>
<p>Instead of typing <kbd>[T</kbd> you would type <kbd>C-c T</kbd>.</p>
</blockquote>

<p>But the advantage of the special approach is that <kbd>[</kbd>
actually does something (moves point to the start of the current list),
instead of just being a useless part of a key combination like <kbd>C-c</kbd>.
And if you&#39;re in special already, there&#39;s no need for <kbd>[</kbd>.</p>

<p>I hope that you enjoy the new update. If it&#39;s needed, variables like <code>lispy--multiline-take-3</code> can
be made buffer-local so that <kbd>T</kbd> works appropriately for Clojure, CL and Scheme, instead of
just Elisp. If you&#39;d like to add support for your favorite dialect in this way, I&#39;d be happy to
explain some details if needed and to merge the PR. Happy hacking!</p>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          <p>This is the 15th post on this blog. Thankfully, no heart attacks after
the 13th one or anything.  So I&#39;ll commemorate it with a post on
dealing with dates in <code>calc</code>.</p>

<h2 id="how-much-time-has-passed-since-i-started-this-blog">How much time has passed since I started this blog?</h2>

<ol>
<li><p>Open <code>calc</code> with <kbd>C-x **</kbd>:</p>
<div class="highlight"><pre><code class="language-text" data-lang="text"><span></span>--- Emacs Calculator Mode ---
    .
</code></pre></div></li>
<li><p>Enter <code>20 Dec 2014</code> with <kbd>&#39;&lt;12 20 14</kbd><kbd>RET</kbd>:</p>
<div class="highlight"><pre><code class="language-text" data-lang="text"><span></span>--- Emacs Calculator Mode ---
1:  &lt;Sat Dec 20, 2014&gt;
    .
</code></pre></div></li>
<li><p>Enter current time with <kbd>tN</kbd>:</p>
<div class="highlight"><pre><code class="language-text" data-lang="text"><span></span>--- Emacs Calculator Mode ---
2:  &lt;Sat Dec 20, 2014&gt;
1:  &lt;11:56:27am Sat Jan 3, 2015&gt;
    .
</code></pre></div></li>
<li><p>Subtract with <kbd>-</kbd>:</p>
<div class="highlight"><pre><code class="language-text" data-lang="text"><span></span>--- Emacs Calculator Mode ---
1:  -14.498044
    .
</code></pre></div></li>
</ol>

<p>This means that, if I want to maintain my one-post-per-day streak, I
still have half of a day to post this. Unfortunately, I have only an
old version of the blog repository on this machine, and the current
one is on a laptop at home. So I&#39;ll post this in the evening.</p>

<h2 id="did-you-know-what-2015-looks-like-in-binary">Did you know what 2015 looks like in binary?</h2>

<p>In your current <code>calc</code> session,</p>

<ol>
<li><p>Enter <kbd>2015</kbd> <kbd>SPC</kbd>:</p>
<div class="highlight"><pre><code class="language-text" data-lang="text"><span></span>--- Emacs Calculator Mode ---
2:  -14.498044
1:  2015
    .
</code></pre></div></li>
<li><p>Switch to binary with <kbd>d2</kbd>:</p>
<div class="highlight"><pre><code class="language-text" data-lang="text"><span></span>--- Emacs Calculator Mode ---
2:  -2#1110.011111110111111111001111110001
1:  2#11111011111
.
</code></pre></div></li>
<li><p>Wow, a palindrome. It&#39;s too spooky, switch back to decimal with <kbd>d0</kbd>:</p>
<div class="highlight"><pre><code class="language-text" data-lang="text"><span></span>--- Emacs Calculator Mode ---
2:  -14.498044
1:  2015
    .
</code></pre></div></li>
</ol>

<p>If you&#39;re new to <code>calc</code>, you&#39;ll probably wonder why you can&#39;t enter
negative numbers with <kbd>-</kbd>. It can be done with <kbd>_</kbd>,
just like in
<a href="http://www.jsoftware.com/help/primer/negative_number.htm">J</a>. Find
out more in the
<a href="http://www.gnu.org/software/emacs/manual/html_mono/calc.html">info</a>;
the
<a href="http://www.gnu.org/software/emacs/manual/html_mono/calc.html#Tutorial">interactive tutorial</a>
is absolutely excellent.</p>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            /**
 * Sky theme for reveal.js.
 *
 * Copyright (C) 2011-2012 Hakim El Hattab, http://hakim.se
 */


// Default mixins and settings -----------------
@import "../template/mixins";
@import "../template/settings";
// ---------------------------------------------



// Include theme-specific fonts
@import url(https://fonts.googleapis.com/css?family=Quicksand:400,700,400italic,700italic);
@import url(https://fonts.googleapis.com/css?family=Open+Sans:400italic,700italic,400,700);


// Override theme settings (see ../template/settings.scss)
$mainFont: 'Open Sans', sans-serif;
$mainColor: #333;
$headingFont: 'Quicksand', sans-serif;
$headingColor: #333;
$headingLetterSpacing: -0.08em;
$headingTextShadow: none;
$backgroundColor: #f7fbfc;
$linkColor: #3b759e;
$linkColorHover: lighten( $linkColor, 20% );
$selectionBackgroundColor: #134674;

// Fix links so they are not cut off
.reveal a {
	line-height: 1.3em;
}

// Background generator
@mixin bodyBackground() {
	@include radial-gradient( #add9e4, #f7fbfc );
}



// Theme template ------------------------------
@import "../template/theme";
// ---------------------------------------------
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       /*

Railscasts-like style (c) Visoft, Inc. (Damien White)

*/

.hljs {
  display: block;
  overflow-x: auto;
  padding: 0.5em;
  background: #232323;
  color: #e6e1dc;
}

.hljs-comment,
.hljs-quote {
  color: #bc9458;
  font-style: italic;
}

.hljs-keyword,
.hljs-selector-tag {
  color: #c26230;
}

.hljs-string,
.hljs-number,
.hljs-regexp,
.hljs-variable,
.hljs-template-variable {
  color: #a5c261;
}

.hljs-subst {
  color: #519f50;
}

.hljs-tag,
.hljs-name {
  color: #e8bf6a;
}

.hljs-type {
  color: #da4939;
}


.hljs-symbol,
.hljs-bullet,
.hljs-built_in,
.hljs-builtin-name,
.hljs-attr,
.hljs-link {
  color: #6d9cbe;
}

.hljs-params {
  color: #d0d0ff;
}

.hljs-attribute {
  color: #cda869;
}

.hljs-meta {
  color: #9b859d;
}

.hljs-title,
.hljs-section {
  color: #ffc66d;
}

.hljs-addition {
  background-color: #144212;
  color: #e6e1dc;
  display: inline-block;
  width: 100%;
}

.hljs-deletion {
  background-color: #600;
  color: #e6e1dc;
  display: inline-block;
  width: 100%;
}

.hljs-selector-class {
  color: #9b703f;
}

.hljs-selector-id {
  color: #8b98ab;
}

.hljs-emphasis {
  font-style: italic;
}

.hljs-strong {
  font-weight: bold;
}

.hljs-link {
  text-decoration: underline;
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     ;;; emacs-load-time.el --- Leave a trace of loaded packages (with timing)

;; Copyright (C) 2013-2014 Fabrice Niessen

;; Author: Fabrice Niessen <(concat "fniessen" at-sign "pirilampo.org")>
;; URL: https://github.com/fniessen/emacs-load-time
;; Version: 20140923.1104
;; Keywords: emacs, load time, packages, tree, performance

;; This file is NOT part of GNU Emacs.

;; This file is free software: you can redistribute it and/or modify
;; it under the terms of the GNU General Public License as published by
;; the Free Software Foundation, either version 3 of the License, or
;; (at your option) any later version.

;; This file is distributed in the hope that it will be useful,
;; but WITHOUT ANY WARRANTY; without even the implied warranty of
;; MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
;; GNU General Public License for more details.

;; You should have received a copy of the GNU General Public License
;; along with this file.  If not, see <http://www.gnu.org/licenses/>.

;;; Commentary:

;; This package leaves traces in your *Messages* buffer of any package required
;; or loaded, with how much time it took to load it.
;;
;; To get more debug info about the packages being loaded, put the following
;; quite at the beginning your Emacs configuration file:
;;
;;     (require 'emacs-load-time)

;;; Code:

;;---------------------------------------------------------------------------
;; user-configurable variables

(defvar elt-verbose t
  "If non-nil, means show messages describing loaded packages.")

;;---------------------------------------------------------------------------
;; internal variables

(defvar elt-missing-packages nil
  "List of packages that `try-require' or `locate-library' can't find.")

(defconst elt-require-depth 0
  "Starting depth for emacs-load-time tree.")

;;---------------------------------------------------------------------------
;; commands

;; require a feature/library if available; if not, fail silently
(defun try-require (feature)
  "Attempt to load a feature or library.

Return true if the library given as argument is successfully loaded. If not,
instead of an error, just add the package to a list of missing packages."
  (let ((prefix (concat (make-string (* 4 elt-require-depth) ? ) "    ")))
    (condition-case err
        (progn                          ; protected form
          (if (stringp feature)
              (load-library feature)
            (require feature))
          t)                            ; necessary for correct behavior in
                                        ; conditional expressions
      (file-error
       (progn
         (when elt-verbose
           (message "%sRequiring %s <from %s>... missing"
                    prefix feature
                    (ignore-errors (file-name-base load-file-name))))
         (add-to-list 'elt-missing-packages feature 'append))
       nil))))

(when elt-verbose

  (defadvice locate-library (around leuven-locate-library activate)
    "Locate Emacs library named LIBRARY and report time spent."
    (let ((filename (ad-get-arg 0))
          (time-start (float-time))
          (prefix (concat (make-string (* 4 elt-require-depth) ? ) "    ")))
      (if ad-do-it
          (message "%sLocating library %s... located (in %.3f s)"
                   prefix filename
                   (- (float-time) time-start))
        (add-to-list 'elt-missing-packages filename 'append)
        (message "%sLocating library %s... missing (in %.3f s)"
                 prefix filename
                 (- (float-time) time-start)))))

  (defadvice require (around leuven-require activate)
    "Leave a trace of packages being loaded."
    (let* ((feature (ad-get-arg 0))
           (prefix-already (concat (make-string (* 4 elt-require-depth) ? ) "└── "))
           (prefix-open    (concat (make-string (* 4 elt-require-depth) ? ) "└─► "))
           (prefix-close   (concat (make-string (* 4 elt-require-depth) ? ) "  ► ")))
      (cond ((featurep feature)
             (message "%s%s <from %s>... already loaded"
                      prefix-already feature
                      (ignore-errors (file-name-base load-file-name))
                      )
             (setq ad-return-value feature)) ; set the return value in the case
                                             ; `ad-do-it' is not called
            (t
             (let ((time-start))
               (ad-disable-advice 'locate-library 'around 'leuven-locate-library)
               (message "%s%s <from %s>... %s"
                        prefix-open feature
                        (ignore-errors (file-name-base load-file-name))
                        (locate-library (symbol-name feature)))
               (ad-activate 'locate-library)
               (setq time-start (float-time))
               (let ((elt-require-depth (1+ elt-require-depth)))
                 ad-do-it)
               (message "%s%s <from %s>... loaded in %.3f s"
                        prefix-close feature
                        (ignore-errors (file-name-base load-file-name))
                        (- (float-time) time-start)))))))

  (defadvice load (around leuven-load activate)
     "Execute a file of Lisp code named FILE and report time spent."
     (let ((filename (ad-get-arg 0))
           (time-start (float-time))
           (prefix-open  (concat (make-string (* 4 elt-require-depth) ? ) "└─● "))
           (prefix-close (concat (make-string (* 4 elt-require-depth) ? ) "  ● ")))
       (ad-disable-advice 'locate-library 'around 'leuven-locate-library)
       (message "%s%s <from %s>...%s"
                prefix-open filename
                (ignore-errors (file-name-base load-file-name))
                (ignore-errors
                  (if (not (string-match-p
                            (concat "^" (expand-file-name filename)
                                    "\\.?e?l?c?")
                            (locate-library filename)))
                      (concat " " (locate-library filename))
                    "")))               ; don't print full file name once again!
       (ad-activate 'locate-library)
       ad-do-it
       (message "%s%s <from %s>... loaded in %.3f s"
                prefix-close filename
                (ignore-errors (file-name-base load-file-name))
                (- (float-time) time-start))))

  ;; wrapper around `eval-after-load' (added in GNU Emacs 24.4)
  (defmacro with-eval-after-load (file &rest body)
    "Execute BODY after FILE is loaded."
    (declare (indent 1) (debug t))
    `(eval-after-load ,file
       '(progn
          (let ((time-start))
            (message "{{{ Running code block specific to %s..."
                     ,file)
            (setq time-start (float-time))
            ,@body
            (message "}}} Running code block specific to %s... done in %.3f s"
                     ,file
                     (- (float-time) time-start)))))))

(add-hook 'after-init-hook
          `(lambda ()
             ;; warn that some packages were missing
             (when elt-verbose
               (dolist (pkg elt-missing-packages)
                 (message "(warning) Package %s not found" pkg))))
             t)

;;---------------------------------------------------------------------------
;; that's it

(provide 'emacs-load-time)

;; Local Variables:
;; time-stamp-format: "%:y%02m%02d.%02H%02M"
;; time-stamp-start: "Version: "
;; time-stamp-end: "$"
;; no-byte-compile: t
;; End:

;;; emacs-load-time.el ends here
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     ;;; ob-R.el --- Babel Functions for R                -*- lexical-binding: t; -*-

;; Copyright (C) 2009-2018 Free Software Foundation, Inc.

;; Author: Eric Schulte
;;	Dan Davison
;; Keywords: literate programming, reproducible research, R, statistics
;; Homepage: https://orgmode.org

;; This file is part of GNU Emacs.

;; GNU Emacs is free software: you can redistribute it and/or modify
;; it under the terms of the GNU General Public License as published by
;; the Free Software Foundation, either version 3 of the License, or
;; (at your option) any later version.

;; GNU Emacs is distributed in the hope that it will be useful,
;; but WITHOUT ANY WARRANTY; without even the implied warranty of
;; MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
;; GNU General Public License for more details.

;; You should have received a copy of the GNU General Public License
;; along with GNU Emacs.  If not, see <https://www.gnu.org/licenses/>.

;;; Commentary:

;; Org-Babel support for evaluating R code

;;; Code:

(require 'cl-lib)
(require 'ob)

(declare-function orgtbl-to-tsv "org-table" (table params))
(declare-function R "ext:essd-r" (&optional start-args))
(declare-function inferior-ess-send-input "ext:ess-inf" ())
(declare-function ess-make-buffer-current "ext:ess-inf" ())
(declare-function ess-eval-buffer "ext:ess-inf" (vis))
(declare-function ess-wait-for-process "ext:ess-inf"
		  (&optional proc sec-prompt wait force-redisplay))

(defconst org-babel-header-args:R
  '((width		 . :any)
    (height		 . :any)
    (bg			 . :any)
    (units		 . :any)
    (pointsize		 . :any)
    (antialias		 . :any)
    (quality		 . :any)
    (compression	 . :any)
    (res		 . :any)
    (type		 . :any)
    (family		 . :any)
    (title		 . :any)
    (fonts		 . :any)
    (version		 . :any)
    (paper		 . :any)
    (encoding		 . :any)
    (pagecentre		 . :any)
    (colormodel		 . :any)
    (useDingbats	 . :any)
    (horizontal		 . :any)
    (results             . ((file list vector table scalar verbatim)
			    (raw html latex org code pp drawer)
			    (replace silent none append prepend)
			    (output value graphics))))
  "R-specific header arguments.")

(defconst ob-R-safe-header-args
  (append org-babel-safe-header-args
	  '(:width :height :bg :units :pointsize :antialias :quality
		   :compression :res :type :family :title :fonts
		   :version :paper :encoding :pagecentre :colormodel
		   :useDingbats :horizontal))
  "Header args which are safe for R babel blocks.

See `org-babel-safe-header-args' for documentation of the format of
this variable.")

(defvar org-babel-default-header-args:R '())
(put 'org-babel-default-header-args:R 'safe-local-variable
     (org-babel-header-args-safe-fn ob-R-safe-header-args))

(defcustom org-babel-R-command "R --slave --no-save"
  "Name of command to use for executing R code."
  :group 'org-babel
  :version "24.1"
  :type 'string)

(defvar ess-current-process-name) ; dynamically scoped
(defvar ess-local-process-name)   ; dynamically scoped
(defun org-babel-edit-prep:R (info)
  (let ((session (cdr (assq :session (nth 2 info)))))
    (when (and session
	       (string-prefix-p "*"  session)
	       (string-suffix-p "*" session))
      (org-babel-R-initiate-session session nil))))

;; The usage of utils::read.table() ensures that the command
;; read.table() can be found even in circumstances when the utils
;; package is not in the search path from R.
(defconst ob-R-transfer-variable-table-with-header
  "%s <- local({
     con <- textConnection(
       %S
     )
     res <- utils::read.table(
       con,
       header    = %s,
       row.names = %s,
       sep       = \"\\t\",
       as.is     = TRUE
     )
     close(con)
     res
   })"
  "R code used to transfer a table defined as a variable from org to R.

This function is used when the table contains a header.")

(defconst ob-R-transfer-variable-table-without-header
  "%s <- local({
     con <- textConnection(
       %S
     )
     res <- utils::read.table(
       con,
       header    = %s,
       row.names = %s,
       sep       = \"\\t\",
       as.is     = TRUE,
       fill      = TRUE,
       col.names = paste(\"V\", seq_len(%d), sep =\"\")
     )
     close(con)
     res
   })"
  "R code used to transfer a table defined as a variable from org to R.

This function is used when the table does not contain a header.")

(defun org-babel-expand-body:R (body params &optional _graphics-file)
  "Expand BODY according to PARAMS, return the expanded body."
  (mapconcat 'identity
	     (append
	      (when (cdr (assq :prologue params))
		(list (cdr (assq :prologue params))))
	      (org-babel-variable-assignments:R params)
	      (list body)
	      (when (cdr (assq :epilogue params))
		(list (cdr (assq :epilogue params)))))
	     "\n"))

(defun org-babel-execute:R (body params)
  "Execute a block of R code.
This function is called by `org-babel-execute-src-block'."
  (save-excursion
    (let* ((result-params (cdr (assq :result-params params)))
	   (result-type (cdr (assq :result-type params)))
           (session (org-babel-R-initiate-session
		     (cdr (assq :session params)) params))
	   (graphics-file (and (member "graphics" (assq :result-params params))
			       (org-babel-graphical-output-file params)))
	   (colnames-p (unless graphics-file (cdr (assq :colnames params))))
	   (rownames-p (unless graphics-file (cdr (assq :rownames params))))
	   (full-body
	    (let ((inside
		   (list (org-babel-expand-body:R body params graphics-file))))
	      (mapconcat 'identity
			 (if graphics-file
			     (append
			      (list (org-babel-R-construct-graphics-device-call
				     graphics-file params))
			      inside
			      (list "},error=function(e){plot(x=-1:1, y=-1:1, type='n', xlab='', ylab='', axes=FALSE); text(x=0, y=0, labels=e$message, col='red'); paste('ERROR', e$message, sep=' : ')}); dev.off()"))
			   inside)
			 "\n")))
	   (result
	    (org-babel-R-evaluate
	     session full-body result-type result-params
	     (or (equal "yes" colnames-p)
		 (org-babel-pick-name
		  (cdr (assq :colname-names params)) colnames-p))
	     (or (equal "yes" rownames-p)
		 (org-babel-pick-name
		  (cdr (assq :rowname-names params)) rownames-p)))))
      (if graphics-file nil result))))

(defun org-babel-prep-session:R (session params)
  "Prepare SESSION according to the header arguments specified in PARAMS."
  (let* ((session (org-babel-R-initiate-session session params))
	 (var-lines (org-babel-variable-assignments:R params)))
    (org-babel-comint-in-buffer session
      (mapc (lambda (var)
              (end-of-line 1) (insert var) (comint-send-input nil t)
              (org-babel-comint-wait-for-output session)) var-lines))
    session))

(defun org-babel-load-session:R (session body params)
  "Load BODY into SESSION."
  (save-window-excursion
    (let ((buffer (org-babel-prep-session:R session params)))
      (with-current-buffer buffer
        (goto-char (process-mark (get-buffer-process (current-buffer))))
        (insert (org-babel-chomp body)))
      buffer)))

;; helper functions

(defun org-babel-variable-assignments:R (params)
  "Return list of R statements assigning the block's variables."
  (let ((vars (org-babel--get-vars params)))
    (mapcar
     (lambda (pair)
       (org-babel-R-assign-elisp
	(car pair) (cdr pair)
	(equal "yes" (cdr (assq :colnames params)))
	(equal "yes" (cdr (assq :rownames params)))))
     (mapcar
      (lambda (i)
	(cons (car (nth i vars))
	      (org-babel-reassemble-table
	       (cdr (nth i vars))
	       (cdr (nth i (cdr (assq :colname-names params))))
	       (cdr (nth i (cdr (assq :rowname-names params)))))))
      (number-sequence 0 (1- (length vars)))))))

(defun org-babel-R-quote-tsv-field (s)
  "Quote field S for export to R."
  (if (stringp s)
      (concat "\"" (mapconcat 'identity (split-string s "\"") "\"\"") "\"")
    (format "%S" s)))

(defun org-babel-R-assign-elisp (name value colnames-p rownames-p)
  "Construct R code assigning the elisp VALUE to a variable named NAME."
  (if (listp value)
      (let* ((lengths (mapcar 'length (cl-remove-if-not 'sequencep value)))
	     (max (if lengths (apply 'max lengths) 0))
	     (min (if lengths (apply 'min lengths) 0)))
        ;; Ensure VALUE has an orgtbl structure (depth of at least 2).
        (unless (listp (car value)) (setq value (list value)))
	(let ((file (orgtbl-to-tsv value '(:fmt org-babel-R-quote-tsv-field)))
	      (header (if (or (eq (nth 1 value) 'hline) colnames-p)
			  "TRUE" "FALSE"))
	      (row-names (if rownames-p "1" "NULL")))
	  (if (= max min)
	      (format ob-R-transfer-variable-table-with-header
		      name file header row-names)
	    (format ob-R-transfer-variable-table-without-header
		    name file header row-names max))))
    (cond ((integerp value) (format "%s <- %s" name (concat (number-to-string value) "L")))
	  ((floatp   value) (format "%s <- %s" name value))
	  ((stringp  value) (format "%s <- %S" name (org-no-properties value)))
	  (t                (format "%s <- %S" name (prin1-to-string value))))))


(defvar ess-ask-for-ess-directory) ; dynamically scoped
(defun org-babel-R-initiate-session (session params)
  "If there is not a current R process then create one."
  (unless (string= session "none")
    (let ((session (or session "*R*"))
	  (ess-ask-for-ess-directory
	   (and (boundp 'ess-ask-for-ess-directory)
		ess-ask-for-ess-directory
		(not (cdr (assq :dir params))))))
      (if (org-babel-comint-buffer-livep session)
	  session
	(save-window-excursion
	  (when (get-buffer session)
	    ;; Session buffer exists, but with dead process
	    (set-buffer session))
	  (require 'ess) (R)
	  (let ((R-proc (get-process (or ess-local-process-name
					 ess-current-process-name))))
	    (while (process-get R-proc 'callbacks)
	      (ess-wait-for-process R-proc)))
	  (rename-buffer
	   (if (bufferp session)
	       (buffer-name session)
	     (if (stringp session)
		 session
	       (buffer-name))))
	  (current-buffer))))))

(defun org-babel-R-associate-session (session)
  "Associate R code buffer with an R session.
Make SESSION be the inferior ESS process associated with the
current code buffer."
  (setq ess-local-process-name
	(process-name (get-buffer-process session)))
  (ess-make-buffer-current))

(defvar org-babel-R-graphics-devices
  '((:bmp "bmp" "filename")
    (:jpg "jpeg" "filename")
    (:jpeg "jpeg" "filename")
    (:tikz "tikz" "file")
    (:tiff "tiff" "filename")
    (:png "png" "filename")
    (:svg "svg" "file")
    (:pdf "pdf" "file")
    (:ps "postscript" "file")
    (:postscript "postscript" "file"))
  "An alist mapping graphics file types to R functions.

Each member of this list is a list with three members:
1. the file extension of the graphics file, as an elisp :keyword
2. the R graphics device function to call to generate such a file
3. the name of the argument to this function which specifies the
   file to write to (typically \"file\" or \"filename\")")

(defun org-babel-R-construct-graphics-device-call (out-file params)
  "Construct the call to the graphics device."
  (let* ((allowed-args '(:width :height :bg :units :pointsize
				:antialias :quality :compression :res
				:type :family :title :fonts :version
				:paper :encoding :pagecentre :colormodel
				:useDingbats :horizontal))
	 (device (file-name-extension out-file))
	 (device-info (or (assq (intern (concat ":" device))
				org-babel-R-graphics-devices)
                          (assq :png org-babel-R-graphics-devices)))
        (extra-args (cdr (assq :R-dev-args params))) filearg args)
    (setq device (nth 1 device-info))
    (setq filearg (nth 2 device-info))
    (setq args (mapconcat
		(lambda (pair)
		  (if (member (car pair) allowed-args)
		      (format ",%s=%S"
			      (substring (symbol-name (car pair)) 1)
			      (cdr pair)) ""))
		params ""))
    (format "%s(%s=\"%s\"%s%s%s); tryCatch({"
	    device filearg out-file args
	    (if extra-args "," "") (or extra-args ""))))

(defconst org-babel-R-eoe-indicator "'org_babel_R_eoe'")
(defconst org-babel-R-eoe-output "[1] \"org_babel_R_eoe\"")

(defconst org-babel-R-write-object-command "{
    function(object,transfer.file) {
        object
        invisible(
            if (
                inherits(
                    try(
                        {
                            tfile<-tempfile()
                            write.table(object, file=tfile, sep=\"\\t\",
                                        na=\"nil\",row.names=%s,col.names=%s,
                                        quote=FALSE)
                            file.rename(tfile,transfer.file)
                        },
                        silent=TRUE),
                    \"try-error\"))
                {
                    if(!file.exists(transfer.file))
                        file.create(transfer.file)
                }
            )
    }
}(object=%s,transfer.file=\"%s\")"
  "A template for an R command to evaluate a block of code and write the result to a file.

Has four %s escapes to be filled in:
1. Row names, \"TRUE\" or \"FALSE\"
2. Column names, \"TRUE\" or \"FALSE\"
3. The code to be run (must be an expression, not a statement)
4. The name of the file to write to")

(defun org-babel-R-evaluate
  (session body result-type result-params column-names-p row-names-p)
  "Evaluate R code in BODY."
  (if session
      (org-babel-R-evaluate-session
       session body result-type result-params column-names-p row-names-p)
    (org-babel-R-evaluate-external-process
     body result-type result-params column-names-p row-names-p)))

(defun org-babel-R-evaluate-external-process
    (body result-type result-params column-names-p row-names-p)
  "Evaluate BODY in external R process.
If RESULT-TYPE equals `output' then return standard output as a
string.  If RESULT-TYPE equals `value' then return the value of the
last statement in BODY, as elisp."
  (cl-case result-type
    (value
     (let ((tmp-file (org-babel-temp-file "R-")))
       (org-babel-eval org-babel-R-command
		       (format org-babel-R-write-object-command
			       (if row-names-p "TRUE" "FALSE")
			       (if column-names-p
				   (if row-names-p "NA" "TRUE")
				 "FALSE")
			       (format "{function ()\n{\n%s\n}}()" body)
			       (org-babel-process-file-name tmp-file 'noquote)))
       (org-babel-R-process-value-result
	(org-babel-result-cond result-params
	  (with-temp-buffer
	    (insert-file-contents tmp-file)
	    (org-babel-chomp (buffer-string) "\n"))
	  (org-babel-import-elisp-from-file tmp-file '(16)))
	column-names-p)))
    (output (org-babel-eval org-babel-R-command body))))

(defvar ess-eval-visibly-p)

(defun org-babel-R-evaluate-session
    (session body result-type result-params column-names-p row-names-p)
  "Evaluate BODY in SESSION.
If RESULT-TYPE equals `output' then return standard output as a
string.  If RESULT-TYPE equals `value' then return the value of the
last statement in BODY, as elisp."
  (cl-case result-type
    (value
     (with-temp-buffer
       (insert (org-babel-chomp body))
       (let ((ess-local-process-name
	      (process-name (get-buffer-process session)))
	     (ess-eval-visibly-p nil))
	 (ess-eval-buffer nil)))
     (let ((tmp-file (org-babel-temp-file "R-")))
       (org-babel-comint-eval-invisibly-and-wait-for-file
	session tmp-file
	(format org-babel-R-write-object-command
		(if row-names-p "TRUE" "FALSE")
		(if column-names-p
		    (if row-names-p "NA" "TRUE")
		  "FALSE")
		".Last.value" (org-babel-process-file-name tmp-file 'noquote)))
       (org-babel-R-process-value-result
	(org-babel-result-cond result-params
	  (with-temp-buffer
	    (insert-file-contents tmp-file)
	    (org-babel-chomp (buffer-string) "\n"))
	  (org-babel-import-elisp-from-file tmp-file '(16)))
	column-names-p)))
    (output
     (mapconcat
      'org-babel-chomp
      (butlast
       (delq nil
	     (mapcar
	      (lambda (line) (when (> (length line) 0) line))
	      (mapcar
	       (lambda (line) ;; cleanup extra prompts left in output
		 (if (string-match
		      "^\\([>+.]\\([ ][>.+]\\)*[ ]\\)"
		      (car (split-string line "\n")))
		     (substring line (match-end 1))
		   line))
	       (org-babel-comint-with-output (session org-babel-R-eoe-output)
		 (insert (mapconcat 'org-babel-chomp
				    (list body org-babel-R-eoe-indicator)
				    "\n"))
		 (inferior-ess-send-input)))))) "\n"))))

(defun org-babel-R-process-value-result (result column-names-p)
  "R-specific processing of return value.
Insert hline if column names in output have been requested."
  (if column-names-p
      (cons (car result) (cons 'hline (cdr result)))
    result))

(provide 'ob-R)



;;; ob-R.el ends here
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         ;;; ob-asymptote.el --- Babel Functions for Asymptote -*- lexical-binding: t; -*-

;; Copyright (C) 2009-2018 Free Software Foundation, Inc.

;; Author: Eric Schulte
;; Keywords: literate programming, reproducible research
;; Homepage: https://orgmode.org

;; This file is part of GNU Emacs.

;; GNU Emacs is free software: you can redistribute it and/or modify
;; it under the terms of the GNU General Public License as published by
;; the Free Software Foundation, either version 3 of the License, or
;; (at your option) any later version.

;; GNU Emacs is distributed in the hope that it will be useful,
;; but WITHOUT ANY WARRANTY; without even the implied warranty of
;; MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
;; GNU General Public License for more details.

;; You should have received a copy of the GNU General Public License
;; along with GNU Emacs.  If not, see <https://www.gnu.org/licenses/>.

;;; Commentary:

;; Org-Babel support for evaluating asymptote source code.
;;
;; This differs from most standard languages in that
;;
;; 1) there is no such thing as a "session" in asymptote
;;
;; 2) we are generally only going to return results of type "file"
;;
;; 3) we are adding the "file" and "cmdline" header arguments, if file
;;    is omitted then the -V option is passed to the asy command for
;;    interactive viewing

;;; Requirements:

;; - The asymptote program :: http://asymptote.sourceforge.net/
;;
;; - asy-mode :: Major mode for editing asymptote files

;;; Code:
(require 'ob)

(defvar org-babel-tangle-lang-exts)
(add-to-list 'org-babel-tangle-lang-exts '("asymptote" . "asy"))

(defvar org-babel-default-header-args:asymptote
  '((:results . "file") (:exports . "results"))
  "Default arguments when evaluating an Asymptote source block.")

(defun org-babel-execute:asymptote (body params)
  "Execute a block of Asymptote code.
This function is called by `org-babel-execute-src-block'."
  (let* ((out-file (cdr (assq :file params)))
         (format (or (file-name-extension out-file)
                     "pdf"))
         (cmdline (cdr (assq :cmdline params)))
         (in-file (org-babel-temp-file "asymptote-"))
         (cmd
	  (concat "asy "
		  (if out-file
		      (concat
		       "-globalwrite -f " format
		       " -o " (org-babel-process-file-name out-file))
		    "-V")
		  " " cmdline
		  " " (org-babel-process-file-name in-file))))
    (with-temp-file in-file
      (insert (org-babel-expand-body:generic
	       body params
	       (org-babel-variable-assignments:asymptote params))))
    (message cmd) (shell-command cmd)
    nil)) ;; signal that output has already been written to file

(defun org-babel-prep-session:asymptote (_session _params)
  "Return an error if the :session header argument is set.
Asymptote does not support sessions"
  (error "Asymptote does not support sessions"))

(defun org-babel-variable-assignments:asymptote (params)
  "Return list of asymptote statements assigning the block's variables."
  (mapcar #'org-babel-asymptote-var-to-asymptote
	  (org-babel--get-vars params)))

(defun org-babel-asymptote-var-to-asymptote (pair)
  "Convert an elisp value into an Asymptote variable.
The elisp value PAIR is converted into Asymptote code specifying
a variable of the same value."
  (let ((var (car pair))
        (val (let ((v (cdr pair)))
	       (if (symbolp v) (symbol-name v) v))))
    (cond
     ((integerp val)
      (format "int %S=%S;" var val))
     ((floatp val)
      (format "real %S=%S;" var val))
     ((stringp val)
      (format "string %S=\"%s\";" var val))
     ((and (listp val) (not (listp (car val))))
      (let* ((type (org-babel-asymptote-define-type val))
	     (fmt (if (eq 'string type) "\"%s\"" "%s"))
	     (vect (mapconcat (lambda (e) (format fmt e)) val ", ")))
	(format "%s[] %S={%s};" type var vect)))
     ((listp val)
      (let* ((type (org-babel-asymptote-define-type val))
	     (fmt (if (eq 'string type) "\"%s\"" "%s"))
             (array (mapconcat (lambda (row)
				 (concat "{"
					 (mapconcat (lambda (e) (format fmt e))
						    row ", ")
					 "}"))
			       val ",")))
        (format "%S[][] %S={%s};" type var array))))))

(defun org-babel-asymptote-define-type (data)
  "Determine type of DATA.

DATA is a list.  Return type as a symbol.

The type is `string' if any element in DATA is a string.
Otherwise, it is either `real', if some elements are floats, or
`int'."
  (letrec ((type 'int)
	   (find-type
	    (lambda (row)
	      (dolist (e row type)
		(cond ((listp e) (setq type (funcall find-type e)))
		      ((stringp e) (throw 'exit 'string))
		      ((floatp e) (setq type 'real)))))))
    (catch 'exit (funcall find-type data)) type))

(provide 'ob-asymptote)



;;; ob-asymptote.el ends here
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            ;ELC   
;;; Compiled
;;; in Emacs version 27.0.50
;;; with all optimizations.

;;; This file uses dynamic docstrings, first added in Emacs 19.29.

;;; This file does not contain utf-8 non-ASCII characters,
;;; and so can be loaded in Emacs versions earlier than 23.

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;


(byte-code "\300\301!\210\302\303\304\"\207" [require ob add-to-list org-babel-tangle-lang-exts ("perl" . "pl")] 3)
(defvar org-babel-default-header-args:perl nil)
#@49 Name of command to use for executing perl code.
(defvar org-babel-perl-command "perl" (#$ . 575))
#@118 Execute a block of Perl code with Babel.
This function is called by `org-babel-execute-src-block'.

(fn BODY PARAMS)
(defalias 'org-babel-execute:perl #[514 "\300\236A\301\236A\302\236A\303\304!#\305!\306\307$\310\311	\236A\312\n\236A\"\310\313\n\236A\314\236A\"#\207" [:session :result-params :result-type org-babel-expand-body:generic org-babel-variable-assignments:perl org-babel-perl-initiate-session org-babel-reassemble-table org-babel-perl-evaluate org-babel-pick-name :colname-names :colnames :rowname-names :rownames] 14 (#$ . 680)])
#@83 Prepare SESSION according to the header arguments in PARAMS.

(fn SESSION PARAMS)
(defalias 'org-babel-prep-session:perl #[514 "\300\301!\207" [error "Sessions are not supported for Perl"] 4 (#$ . 1248)])
#@78 Return list of perl statements assigning the block's variables.

(fn PARAMS)
(defalias 'org-babel-variable-assignments:perl #[257 "\300\301\302!\"\207" [mapcar #[257 "\300A@\"\207" [org-babel-perl--var-to-perl] 4 "\n\n(fn PAIR)"] org-babel--get-vars] 5 (#$ . 1459)])
#@48 Wrapper for variables inserted into Perl code.
(defvar org-babel-perl-var-wrap "q(%s)" (#$ . 1735))
#@172 Convert an elisp value to a perl variable.
The elisp value, VAR, is converted to a string of perl source code
specifying a var of the same value.

(fn VAR &optional VARN)
(defalias 'org-babel-perl--var-to-perl #[513 "\211\203 \301<\302\303!\304\205 \305\306!\307\260)\207\310\311_\312\"\211<\2039 T\313\314\306\315#\316R)\202= \317\320\"\301U?\205E \321Q\207" [org-babel-perl--lvl 0 "my $" symbol-name "=" "\n" org-babel-perl--var-to-perl ";\n" make-string 2 32 "[\n" mapconcat "" "]" format "q(%s)" ",\n"] 10 (#$ . 1842)])
(defvar org-babel-perl-buffers '(:default))
#@87 Return nil because sessions are not supported by perl.

(fn &optional SESSION PARAMS)
(defalias 'org-babel-perl-initiate-session #[512 "\300\207" [nil] 3 (#$ . 2435)])
(defvar org-babel-perl-wrapper-method "{\n    my $babel_sub = sub {\n        %s\n    };\n    open my $BOH, qq(>%s) or die qq(Perl: Could not open output file.$/);\n    my $rv = &$babel_sub();\n    my $rt = ref $rv;\n    select $BOH;\n    if (qq(ARRAY) eq $rt) {\n        local $\\=$/;\n        local $,=qq(	);\n	foreach my $rv ( @$rv ) {\n	    my $rt = ref $rv;\n	    if (qq(ARRAY) eq $rt) {\n		print @$rv;\n	    } else {\n		print $rv;\n	    }\n	}\n    } else {\n	print $rv;\n    }\n}")
(defvar org-babel-perl-preface nil)
(defvar org-babel-perl-pp-wrapper-method nil)
#@284 Pass BODY to the Perl process in SESSION.
If RESULT-TYPE equals `output' then return a list of the outputs
of the statements in BODY, if RESULT-TYPE equals `value' then
return the value of the last statement in BODY, as elisp.

(fn SESSION IBODY &optional RESULT-TYPE RESULT-PARAMS)
(defalias 'org-babel-perl-evaluate #[1026 "\203 \303\304!\210P\305\306!\307\310\"\311\267\202V \312\313\314!!\315\316\317\320\321!\322\"\323$\216r\211q\210\324	\"c\210\325 )rq\210\326\327\211\327\316%\210*\266\202\202W \324	\330\n#\"\202W \327\211\205\261 \331\235?\205\257 \332\235\204\245 \333\235\204\245 \334\235\204\245 \335\235\204\245 \336\235\204\245 \337\235\204\245 \340\235\204\237 \341\235\204\237 \342\235\204\237 \343\235\203\253 \344\235\204\253 \345!\202\257 \346\347\"\262\262\207" [org-babel-perl-preface org-babel-perl-command org-babel-perl-wrapper-method error "Sessions are not supported for Perl" org-babel-temp-file "perl-" org-babel-process-file-name noquote #s(hash-table size 2 test eq rehash-size 1.5 rehash-threshold 0.8125 purecopy t data (output 24 value 74)) get-buffer-create generate-new-buffer-name " *temp file*" make-byte-code 0 "\301\300!\205	 \302\300!\207" vconcat vector [buffer-name kill-buffer] 2 org-babel-eval buffer-string write-region nil format "none" "scalar" "verbatim" "html" "code" "pp" "file" "output" "raw" "org" "drawer" "table" org-babel-eval-read-file org-babel-import-elisp-from-file (16)] 16 (#$ . 3179)])
(provide 'ob-perl)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         ;ELC   
;;; Compiled
;;; in Emacs version 27.0.50
;;; with all optimizations.

;;; This file uses dynamic docstrings, first added in Emacs 19.29.

;;; This file does not contain utf-8 non-ASCII characters,
;;; and so can be loaded in Emacs versions earlier than 23.

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;


(byte-code "\301\302!\210\301\303!\210\304\305\"\204 \306\300\307\"\210\310\311\312\313\314\315\316\317\320\321&	\210\322\323\324\325\326DD\327\316\311\330\331&\210\322\332\324\325\333DD\334\316\311\330\335&\210\322\336\324\325\337DD\340\316\311\320\341\342\343\330\344&\210\322\345\324\325\346DD\347\316\311\320\341\342\350\330\351&\210\322\352\324\325\353DD\354\316\311\320\341\342\355\330\356&\210\322\357\324\325\360DD\361\316\311\330\362&\210\322\363\324\325\364DD\365\316\311\330\366&\210\322\367\324\325\370DD\371\316\311\320\372\342\373\330\374&\207" [org-latex-classes require cl-lib ox-latex assoc "beamer" add-to-list ("beamer" "\\documentclass[presentation]{beamer}" ("\\section{%s}" . "\\section*{%s}") ("\\subsection{%s}" . "\\subsection*{%s}") ("\\subsubsection{%s}" . "\\subsubsection*{%s}")) custom-declare-group org-export-beamer nil "Options specific for using the beamer class in LaTeX export." :tag "Org Beamer" :group org-export :version "24.2" custom-declare-variable org-beamer-frame-level funcall function #[0 "\300\207" [1] 1] "The level at which headlines become frames.\n\nHeadlines at a lower level will be translated into a sectioning\nstructure.  At a higher level, they will be translated into\nblocks.\n\nIf a headline with a \"BEAMER_env\" property set to \"frame\" is\nfound within a tree, its level locally overrides this number.\n\nThis variable has no effect on headlines with the \"BEAMER_env\"\nproperty set to either \"ignoreheading\", \"appendix\", or\n\"note\", which will respectively, be invisible, become an\nappendix or a note.\n\nThis integer is relative to the minimal level of a headline\nwithin the parse tree, defined as 1." :type integer org-beamer-frame-default-options #[0 "\300\207" [#1=""] 1 #1#] "Default options string to use for frames.\nFor example, it could be set to \"allowframebreaks\"." (string :tag "[options]") org-beamer-column-view-format #[0 "\300\207" [#2="%45ITEM %10BEAMER_env(Env) %10BEAMER_act(Act) %4BEAMER_col(Col) %8BEAMER_opt(Opt)"] 1 #2#] "Column view format that should be used to fill the template." "24.4" :package-version (Org . "8.0") (choice (const :tag "Do not insert Beamer column view format" nil) (string :tag "Beamer column view format")) org-beamer-theme #[0 "\300\207" [#3="default"] 1 #3#] "Default theme used in Beamer presentations." (Org . "8.0") (choice (const :tag "Do not insert a Beamer theme" nil) (string :tag "Beamer theme")) org-beamer-environments-extra #[0 "\300\207" [nil] 1] "Environments triggered by tags in Beamer export.\nEach entry has 4 elements:\n\nname    Name of the environment\nkey     Selection key for `org-beamer-select-environment'\nopen    The opening template for the environment, with the following escapes\n        %a   the action/overlay specification\n        %A   the default action/overlay specification\n        %R   the raw BEAMER_act value\n        %o   the options argument, with square brackets\n        %O   the raw BEAMER_opt value\n        %h   the headline text\n        %r   the raw headline text (i.e. without any processing)\n        %H   if there is headline text, that raw text in {} braces\n        %U   if there is headline text, that raw text in [] brackets\nclose   The closing string of the environment." (Org . "8.1") (repeat (list (string :tag "Environment") (string :tag "Selection key") (string :tag "Begin") (string :tag "End"))) org-beamer-outline-frame-title #[0 "\300\207" [#4="Outline"] 1 #4#] "Default title of a frame containing an outline." (string :tag "Outline frame title") org-beamer-outline-frame-options #[0 "\300\207" [#1#] 1 #1#] "Outline frame options appended after \\begin{frame}.\nYou might want to put e.g. \"allowframebreaks=0.9\" here." (string :tag "Outline frame options") org-beamer-subtitle-format #[0 "\300\207" [#5="\\subtitle{%s}"] 1 #5#] "Format string used for transcoded subtitle.\nThe format string should have at most one \"%s\"-expression,\nwhich is replaced with the subtitle." "26.1" (Org . "8.3") (string :tag "Format string")] 12)
#@72 The column widths that should be installed as allowed property values.
(defconst org-beamer-column-widths "0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9 0.0 :ETC" (#$ . 4448))
#@307 Alist of environments treated in a special way by the back-end.
Keys are environment names, as strings, values are bindings used
in `org-beamer-select-environment'.  Environments listed here,
along with their binding, are hard coded and cannot be modified
through `org-beamer-environments-extra' variable.
(defconst org-beamer-environments-special '(("againframe" "A") ("appendix" "x") ("column" "c") ("columns" "C") ("frame" "f") ("fullframe" "F") ("ignoreheading" "i") ("note" "n") ("noteNH" "N")) (#$ . 4621))
#@140 Environments triggered by properties in Beamer export.
These are the defaults - for user definitions, see
`org-beamer-environments-extra'.
(defconst org-beamer-environments-default '(("block" "b" "\\begin{block}%a{%h}" "\\end{block}") ("alertblock" "a" "\\begin{alertblock}%a{%h}" "\\end{alertblock}") ("verse" "v" "\\begin{verse}%a %% %h" "\\end{verse}") ("quotation" "q" "\\begin{quotation}%a %% %h" "\\end{quotation}") ("quote" "Q" "\\begin{quote}%a %% %h" "\\end{quote}") ("structureenv" "s" "\\begin{structureenv}%a %% %h" "\\end{structureenv}") ("theorem" "t" "\\begin{theorem}%a[%h]" "\\end{theorem}") ("definition" "d" "\\begin{definition}%a[%h]" "\\end{definition}") ("example" "e" "\\begin{example}%a[%h]" "\\end{example}") ("exampleblock" "E" "\\begin{exampleblock}%a{%h}" "\\end{exampleblock}") ("proof" "p" "\\begin{proof}%a[%h]" "\\end{proof}") ("beamercolorbox" "o" "\\begin{beamercolorbox}%o{%h}" "\\end{beamercolorbox}")) (#$ . 5141))
#@142 List of element or object types producing verbatim text.
This is used internally to determine when a frame should have the
"fragile" option.
(defconst org-beamer-verbatim-elements '(code example-block fixed-width inline-src-block src-block verbatim) (#$ . 6100))
#@281 Return ARGUMENT string with proper boundaries.

TYPE is a symbol among the following:
`action'    Return ARGUMENT within angular brackets.
`defaction' Return ARGUMENT within both square and angular brackets.
`option'    Return ARGUMENT within square brackets.

(fn ARGUMENT TYPE)
(defalias 'org-beamer--normalize-argument #[514 "\300\301\"\204	 \302\207\211\303\267\2021 \304\305\306\307\310#\"\207\304\311\306\307\310\306\312\313	##\"\207\304\314\306\312\313#\"\207\315\316\"\207" [string-match "\\S-" "" #s(hash-table size 3 test eql rehash-size 1.5 rehash-threshold 0.8125 purecopy t data (action 15 defaction 25 option 39)) format "<%s>" org-unbracket-string "<" ">" "[<%s>]" "[" "]" "[%s]" error "Invalid `type' argument to `org-beamer--normalize-argument': %s"] 11 (#$ . 6370)])
#@241 Non-nil when ELEMENT has an overlay specified.
An element has an overlay specification when it starts with an
`beamer' export-snippet whose value is between angular brackets.
Return overlay specification, as a string, or nil.

(fn ELEMENT)
(defalias 'org-beamer--element-has-overlay-p #[257 "\211\211:\204\f \300\262\202 \211@9\203 \211AA\262@\211\211:\204) \211;\2051 \301\262\2023 \211@9\2051 \211@\262\302=\205b \303\211;\203I \304\305#\266\202\202Q \306A@\"\266\202\307\310\"\205` \311\312\"\205` \211\262\207" [nil plain-text export-snippet :value get-text-property 0 plist-get string-prefix-p "<" string-suffix-p ">"] 8 (#$ . 7169)])
(org-export-define-derived-backend 'beamer 'latex :menu-entry '(108 1 ((66 "As LaTeX buffer (Beamer)" org-beamer-export-as-latex) (98 "As LaTeX file (Beamer)" org-beamer-export-to-latex) (80 "As PDF file (Beamer)" org-beamer-export-to-pdf) (79 "As PDF file and open (Beamer)" (lambda (a s v b) (if a (org-beamer-export-to-pdf t s v b) (org-open-file (org-beamer-export-to-pdf nil s v b))))))) :options-alist '((:headline-levels nil "H" org-beamer-frame-level) (:latex-class "LATEX_CLASS" nil "beamer" t) (:beamer-subtitle-format nil nil org-beamer-subtitle-format) (:beamer-column-view-format "COLUMNS" nil org-beamer-column-view-format) (:beamer-theme "BEAMER_THEME" nil org-beamer-theme) (:beamer-color-theme "BEAMER_COLOR_THEME" nil nil t) (:beamer-font-theme "BEAMER_FONT_THEME" nil nil t) (:beamer-inner-theme "BEAMER_INNER_THEME" nil nil t) (:beamer-outer-theme "BEAMER_OUTER_THEME" nil nil t) (:beamer-header "BEAMER_HEADER" nil nil newline) (:beamer-environments-extra nil nil org-beamer-environments-extra) (:beamer-frame-default-options nil nil org-beamer-frame-default-options) (:beamer-outline-frame-options nil nil org-beamer-outline-frame-options) (:beamer-outline-frame-title nil nil org-beamer-outline-frame-title)) :translate-alist '((bold . org-beamer-bold) (export-block . org-beamer-export-block) (export-snippet . org-beamer-export-snippet) (headline . org-beamer-headline) (item . org-beamer-item) (keyword . org-beamer-keyword) (link . org-beamer-link) (plain-list . org-beamer-plain-list) (radio-target . org-beamer-radio-target) (template . org-beamer-template)))
#@150 Transcode BLOCK object into Beamer code.
CONTENTS is the text being bold.  INFO is a plist used as
a communication channel.

(fn BOLD CONTENTS INFO)
(defalias 'org-beamer-bold #[771 "\300\301\302!\206	 \303#\207" [format "\\alert%s{%s}" org-beamer--element-has-overlay-p ""] 7 (#$ . 9419)])
#@153 Transcode an EXPORT-BLOCK element into Beamer code.
CONTENTS is nil.  INFO is a plist used as a communication
channel.

(fn EXPORT-BLOCK CONTENTS INFO)
(defalias 'org-beamer-export-block #[771 "\300\211;\203 \301\302#\266\202\202 \303A@\"\266\202\304\235\2059 \305\306\211;\2030 \301\302#\266\202\2028 \303A@\"\266\202!\207" [:type get-text-property 0 plist-get ("BEAMER" "LATEX") org-remove-indentation :value] 10 (#$ . 9719)])
#@156 Transcode an EXPORT-SNIPPET object into Beamer code.
CONTENTS is nil.  INFO is a plist used as a communication
channel.

(fn EXPORT-SNIPPET CONTENTS INFO)
(defalias 'org-beamer-export-snippet #[771 "\300!\301\211;\203 \302\303#\266\202\202 \304A@\"\266\202\305=\203& \211\202< \306=\205< \307\"\204; \310\311\"?\205< \211\207" [org-export-snippet-backend :value get-text-property 0 plist-get latex beamer org-export-get-previous-element string-match "\\`<.*>\\'"] 10 (#$ . 10167)])
#@359 Return label for HEADLINE, as a string.

INFO is a plist used as a communication channel.

The value is either the label specified in "BEAMER_opt"
property, the custom ID, if there is one and
`:latex-prefer-user-labels' property has a non nil value, or
a unique internal label.  This function assumes HEADLINE will be
treated as a frame.

(fn HEADLINE INFO)
(defalias 'org-beamer--get-label #[514 "\301\211;\203 \302\303#\266\202\202 \304A@\"\266\202\211;\205C \305\306\"\205C \307\310\"\311\312\313\305#)\266\203\203@ \211\310\314O\202A \211\262\262\206r \304\315\"\203k \316\211;\203` \302\303#\266\202\202h \304A@\"\266\202\206r \317\320\321\"\"\207" [inhibit-changing-match-data :BEAMER_OPT get-text-property 0 plist-get string-match "\\(?:^\\|,\\)label=\\(.*?\\)\\(?:$\\|,\\)" match-string 1 "\\`{.*}\\'" nil t -1 :latex-prefer-user-labels :CUSTOM_ID format "sec:%s" org-export-get-reference] 11 (#$ . 10669)])
#@121 Return frame level in subtree containing HEADLINE.
INFO is a plist used as a communication channel.

(fn HEADLINE INFO)
(defalias 'org-beamer--frame-level #[514 "\3002F \301!\237\211\205C \211@\302\211;\203 \303\304#\266\202\202' \305A@\"\266\202\211\203; \306\307\"\203; \310\300\311\"\"\210\210A\266\202\202 \2620\206\220 \302\211;\203Z \303\304#\266\202\202b \305A@\"\266\202\211\205q \306\312\"\205q \311\"\262\206\220 \313\314\315\316\317\320\321!\322\"\323\324%\325%\206\220 \305\326\"\207" [exit org-element-lineage :BEAMER_ENV get-text-property 0 plist-get member-ignore-case ("frame" "fullframe") throw org-export-get-relative-level ("frame" "fullframe") org-element-map headline make-byte-code 257 "\301\211;\203 \302\303#\266\202\202 \304A@\"\266\202\211\205( \305\306\"\205( \307\300\"\207" vconcat vector [:BEAMER_ENV get-text-property 0 plist-get member-ignore-case ("frame" "fullframe") org-export-get-relative-level] 7 "\n\n(fn HL)" first-match :headline-levels] 11 (#$ . 11616)])
#@163 Format HEADLINE as a sectioning part.
CONTENTS holds the contents of the headline.  INFO is a plist
used as a communication channel.

(fn HEADLINE CONTENTS INFO)
(defalias 'org-beamer--format-section #[771 "\300\301\302\303\304\305\306\307\310\311\312\313!\314\"\315\316%\317\"\262$$\320\211;\203. \321\322#\266\202\2026 \323A@\"\266\202\211\203S \324\325\"\203S \326\327\330\"\331\332\"P\333\211\330%\202T \207" [org-export-with-backend org-export-create-backend :parent latex :transcoders #[771 "\300\301$\302!\203 \303P\202 \211\207" [org-export-with-backend beamer org-string-nw-p "\\protect"] 8 "\n\n(fn OBJECT CONTENTS INFO)"] mapcar make-byte-code 257 "\211\300B\207" vconcat vector [] 3 "\n\n(fn TYPE)" (bold footnote-reference italic strike-through timestamp underline) :BEAMER_ACT get-text-property 0 plist-get string-match "\\`\\\\\\(.*?\\)\\(?:\\*\\|\\[.*\\]\\)?{" replace-match match-string 1 format "<%s>" nil] 16 (#$ . 12657)])
#@153 Format HEADLINE as a frame.
CONTENTS holds the contents of the headline.  INFO is a plist
used as a communication channel.

(fn HEADLINE CONTENTS INFO)
(defalias 'org-beamer--format-frame #[771 "\302\303\304%\305\306\211;\203 \307\310#\266\202\202! \311A@\"\266\202\211\204) \312\202; \313\314\"\2037 \315\316\"\202; \315\317\"\262\320\211;\203O \307\310#\266\202\202W \311A@\"\266\202\321\322\323\324\311	\325\"\326\"\205v \324\313\327\"\205t \330\331\"\326\"\205\207 \313\332\"\206\207 \313\333\"?\205\254 \334\f\"\335\336\337\340\313#)\266\203\203\246 \341\202\247 \342\"\262C#\"\315\343\303\203\274 \344\235\203\300 \202\303 \344B\326#\345\"\266\202\346\211;\203\333 \307\310#\266\202\202\343 \311A@\"\266\202\335\347\203\364 \227\350\232\203\364 \312\202\351\352\211;\203\307\310#\266\202\202\311A@\"\266\202	\"\"\262\353\204\202)\354\355\356\n\206(\312#\357\260\207" [org-beamer-verbatim-elements inhibit-changing-match-data org-element-map identity first-match "\\begin{frame}" :BEAMER_ACT get-text-property 0 plist-get "" string-match "\\`\\[.*\\]\\'" org-beamer--normalize-argument defaction action :BEAMER_OPT cl-remove-if-not org-string-nw-p append org-split-string :beamer-frame-default-options "," "^\\[?\\(.*\\)\\]?$" match-string 1 "\\(^\\|,\\)label=" "allowframebreaks" org-beamer--get-label format ":" nil t "label={%s}" "label=%s" mapconcat "fragile" option :BEAMER_ENV "{%s}" "fullframe" org-export-data :title "\n" replace-regexp-in-string "\\`\n*" "\\& " "\\end{frame}"] 21 (#$ . 13630)])
#@153 Format HEADLINE as a block.
CONTENTS holds the contents of the headline.  INFO is a plist
used as a communication channel.

(fn HEADLINE CONTENTS INFO)
(defalias 'org-beamer--format-block #[771 "\301\211;\203 \302\303#\266\202\202 \304A@\"\266\202\305\211;\203* \302\303#\266\202\2022 \304A@\"\266\202\211\204> \204> \306\202G \211\204F \307\202G \211\262\310\211;\203Z \302\303#\266\202\202b \304A@\"\266\202\311\235\203l \312\202~ \313\314\304\315\"\"\"\206~ \316\317\"\320\321\211;\203\221 \302\303#\266\202\202\231 \304A@\"\266\202\"\322\211;\203\256 \302\303#\266\202\202\266 \304A@\"\266\202\211\203\301 \323\324\"\202\302 \325\305\326!\211;\203\326 \302\303#\266\202\202\336 \304A@\"\266\202\327\232\206\205\211\205\362 \211\227\327\232?\205\330\n\"\206\301\331\f\"\211;\203\302\303#\266\202\202\304A@\"\266\202?\327\232\206^\205^\2052\227\327\232?\205^\332\f\"\206^\301\333\f\"\211;\203U\302\303#\266\202\202]\304A@\"\266\202?\205q\327\232\204m\334\202q\335\336\"\n\205\213\335\337\307\232\203\204\202\205\325\335\340\"#\341	8\205-\342\341\n8\343\211;\203\251\302\303#\266\202\202\261\304A@\"\266\202\211\204\302\344\325B\345\325B\346\325BE\202\355\347\350\"\203\340\351\352\"\203\340\345\323\353\"B\344\325B\346BE\202\355\344\323\354\"B\345\325B\346BE\262\355	B\356\206\372\325B\357B\360B\361\325\232\203\325\202\335\362\"B\363\325\232\203!\325\202&\335\364\"B\257\244\"\365P\3668\205<\3668\365P\205B\367\205H\370\260\207" [org-beamer-environments-default :BEAMER_COL get-text-property 0 plist-get :BEAMER_ENV "block" "column" :raw-value ("column" "columns") nil assoc append :beamer-environments-extra user-error "Wrong block type at a headline named \"%s\"" org-export-data :title :BEAMER_OPT org-beamer--normalize-argument option "" org-export-get-parent-headline "columns" org-export-first-sibling-p org-export-get-previous-element org-export-last-sibling-p org-export-get-next-element "\\begin{columns}\n" format "\\begin{columns}%s\n" "\\begin{column}%s{%s}\n" "%s\\columnwidth" 2 org-fill-template :BEAMER_ACT "a" "A" "R" string-prefix-p "[" string-suffix-p "]" defaction action "o" "O" "h" "r" "H" "{%s}" "U" "[%s]" "\n" 3 "\\end{column}\n" "\\end{columns}"] 27 (#$ . 15223)])
#@167 Transcode HEADLINE element into Beamer code.
CONTENTS is the contents of the headline.  INFO is a plist used
as a communication channel.

(fn HEADLINE CONTENTS INFO)
(defalias 'org-beamer-headline #[771 "\300\211;\203 \301\302#\266\202\202 \303A@\"\266\202?\205\347\304\"\305\"\306\211;\2036 \301\302#\266\202\202> \303A@\"\266\202\307!\206E \310\262\211\311\232\203\312\211;\203_ \301\302#\266\202\202g \303A@\"\266\202\307!\205\376 \313\314\211;\203\200 \301\302#\266\202\202\210 \303A@\"\266\202\211\205\233 \315\316\317\"\203\231 \320\202\232 \321\"\262\322	\211;\203\257 \301\302#\266\202\202\267 \303A@\"\266\202\211\205\277 \315\323\"\262\316\324\"\203\331 \325\326\327\302\225\330ODD	\"\202\363 \331\326\327\332!\333=\203\352 \202\356 \334PDD	\"\335\336\337\f\"\"\262R\262\202\345\211\340\232\203I\341\314\211;\203\301\302#\266\202\202$\303A@\"\266\202\342\343\344\n\211;\2038\301\302#\266\202\202@\303A@\"\266\202\345\"\260\202\345\211\346\232\203q\343\344\211;\203b\301\302#\266\202\202j\303A@\"\266\202\345\"P\202\345\211\347\235\203\273\335\350\351\232\205\237\352\353	\211;\203\222\301\302#\266\202\202\232\303A@\"\266\202\"\342P\330\354\203\253\355\202\254\356\357\354\360\357##\266\202P\"\202\345U\203\314\361#\202\345W\203\335\362#\202\345\363#\266\203\207" [:footnote-section-p get-text-property 0 plist-get org-export-get-relative-level org-beamer--frame-level :BEAMER_ENV org-string-nw-p "block" "againframe" :BEAMER_REF "\\againframe" :BEAMER_ACT org-beamer--normalize-argument string-match "\\`\\[.*\\]\\'" defaction action :BEAMER_OPT option "\\`\\(id:\\|#\\)" org-export-resolve-id-link link :path nil org-export-resolve-fuzzy-link string-to-char 42 "*" format "{%s}" org-beamer--get-label "appendix" "\\appendix" "\n" make-string :pre-blank 10 "ignoreheading" ("note" "noteNH") "\\note{%s}" "note" org-export-data :title replace-regexp-in-string "\\`\\([ 	]*\n\\)+" "\\`[ 	\n]+" "" "[ 	\n]+\\'" org-beamer--format-frame org-beamer--format-section org-beamer--format-block] 18 (#$ . 17596)])
#@160 Transcode an ITEM element into Beamer code.
CONTENTS holds the contents of the item.  INFO is a plist holding
contextual information.

(fn ITEM CONTENTS INFO)
(defalias 'org-beamer-item #[771 "\300\301\302\303\304\305\306\307\310\311\312\f\f\"\313\"\314\315%BC\303\211\211\211&$\207" [org-export-with-backend record org-export-backend nil beamer item make-byte-code 771 "\211:\204\f \302\262\202 \211@9\203 \211AA\262@\211\211:\204) \211;\2051 \303\262\2023 \211@9\2051 \211@\262\304=\205; \305!\262\306\300\301#\203M \307\310\"\204Q \211\202Y \311\310P\302\211$\207" vconcat vector [nil plain-text paragraph org-beamer--element-has-overlay-p org-latex-item string-match "\\\\item" replace-match] 10 "\n\n(fn ITEM C I)"] 16 (#$ . 19758)])
#@142 Transcode a KEYWORD element into Beamer code.
CONTENTS is nil.  INFO is a plist used as a communication
channel.

(fn KEYWORD CONTENTS INFO)
(defalias 'org-beamer-keyword #[771 "\300\211;\203 \301\302#\266\202\202 \303A@\"\266\202\304\211;\203* \301\302#\266\202\2022 \303A@\"\266\202\305\232\203< \211\202\203 \306\232\203z \307\310\"\203z \307\311\"\203Y \312\313\302\"!\206] \303\314\"\307\315\"\205h \313\302\"\316!\205r \317\320\"\321Q\266\202\202\203 \322\323$\207" [:key get-text-property 0 plist-get :value "BEAMER" "TOC" string-match "\\<headlines\\>" "[0-9]+" string-to-number match-string :with-toc "\\[.*?\\]" wholenump format "\\setcounter{tocdepth}{%s}\n" "\\tableofcontents" org-export-with-backend latex] 10 (#$ . 20524)])
#@164 Transcode a LINK object into Beamer code.
CONTENTS is the description part of the link.  INFO is a plist
used as a communication channel.

(fn LINK CONTENTS INFO)
(defalias 'org-beamer-link #[771 "\300\301#\206+ \302\303$\304\305\"\203( \306\307\310\311!\206  \312\"\313\211$\202) \211\262\207" [org-export-custom-protocol-maybe beamer org-export-with-backend latex string-match "\\`\\\\hyperref\\[\\(.*?\\)\\]" replace-match format "\\\\hyperlink%s{\\1}" org-beamer--element-has-overlay-p "" nil] 9 (#$ . 21299)])
#@168 Transcode a PLAIN-LIST element into Beamer code.
CONTENTS is the contents of the list.  INFO is a plist holding
contextual information.

(fn PLAIN-LIST CONTENTS INFO)
(defalias 'org-beamer-plain-list #[771 "\300\211;\203 \301\302#\266\202\202 \303A@\"\266\202\304\305\306\"\305\307\"\"\303\310\"\211\206< \311\267\202; \312\202< \313\202< \314\262\315\316\317\320\303\321\"\206N \322\323\"\320\303	\324\"\206Z \322\325\"&#\207" [:type get-text-property 0 plist-get org-combine-plists org-export-read-attribute :attr_latex :attr_beamer :environment #s(hash-table size 2 test eq rehash-size 1.5 rehash-threshold 0.8125 purecopy t data (ordered 51 descriptive 55)) "enumerate" "description" "itemize" org-latex--wrap-label format "\\begin{%s}%s%s\n%s\\end{%s}" org-beamer--normalize-argument :overlay "" defaction :options option] 16 (#$ . 21831)])
#@161 Transcode a RADIO-TARGET object into Beamer code.
TEXT is the text of the target.  INFO is a plist holding
contextual information.

(fn RADIO-TARGET TEXT INFO)
(defalias 'org-beamer-radio-target #[771 "\300\301\302!\206	 \303\304\"$\207" [format "\\hypertarget%s{%s}{%s}" org-beamer--element-has-overlay-p "" org-export-get-reference] 9 (#$ . 22711)])
#@163 Return complete document string after Beamer conversion.
CONTENTS is the transcoded contents string.  INFO is a plist
holding export options.

(fn CONTENTS INFO)
(defalias 'org-beamer-template #[514 "\301\302\303\"\"\301\302\304\"\"\302\305\"\205 \306\307!\310!\311!\312\313\314\315\316\n!\317\"\320\321%\322\312\323\324\315\316!\325\"\326\327%\330\331#\262\302\332\"\211\250\205L \333\334\"\262\302\335\"\205f \302\336\"\211\205d \301\n\"\262\302	\337\"\205w \301\302\n\340\"\n\"\203\215 \211\203\215 \211\331\230\204\215 \333\341#\202\235 \204\225 \211\205\235 \333\342\206\234 \"\266\202\302	\343\"\205\253 \344	!\333\345\301\"\"\262\333\346\n\"\347	!\205\314 \333\302\f\350\"\n\"\351P\302\f\352\"\211\205\335 \333\353\302\352\"\"\262\302\354\"\211;\205\360 \355\356!\"\262\357\360\302\361\"\204 \362\202$\331\230\203\362\202$;\204\362\202$\363\364\"\203#\333\"\202$!\302\365\"\211\205K\333\366\367\302\370\"\371\"\302\372\"#\373!\205H\333\374\"\375\376R\262\302\377\"\203c\302\201@ \"\351P\202d\331\201A \260\207" [org-latex-title-command org-export-data plist-get :title :subtitle :time-stamp-file format-time-string "%% Created %Y-%m-%d %a %H:%M\n" org-latex--insert-compiler org-latex-make-preamble make-byte-code 514 "\301\300\"\211\205; \302\303\"\204 \304\305\"\202: \304\306\307\310\"\311\312\313\211$\313\314\203. \315\202/ \316\312\314\317\312##\266\202#P\207" vconcat vector [plist-get string-match "\\[.*\\]" format "{%s}\n" "%s{%s}\n" match-string 0 replace-match #1="" nil replace-regexp-in-string "\\`\\([ 	]*\n\\)+" "\\`[ 	\n]+" "[ 	\n]+\\'"] 16 "\n\n(fn PROP COMMAND)" mapconcat 257 "\301\300\"\207" [apply] 4 "\n\n(fn ARGS)" ((:beamer-theme "\\usetheme") (:beamer-color-theme "\\usecolortheme") (:beamer-font-theme "\\usefonttheme") (:beamer-inner-theme "\\useinnertheme") (:beamer-outer-theme "\\useoutertheme")) #1# :section-numbers format "\\setcounter{secnumdepth}{%d}\n" :with-author :author :with-email :email "\\author{%s\\thanks{%s}}\n" "\\author{%s}\n" :with-date org-export-get-date "\\date{%s}\n" "\\title{%s}\n" org-string-nw-p :beamer-subtitle-format "\n" :beamer-header "%s\n" :latex-hyperref-template format-spec org-latex--format-spec "\\begin{document}\n\n" org-element-normalize-string :with-title nil string-match "\\(?:[^%]\\|^\\)%s" :with-toc "\\begin{frame}%s{%s}\n" org-beamer--normalize-argument :beamer-outline-frame-options option :beamer-outline-frame-title wholenump "\\setcounter{tocdepth}{%d}\n" "\\tableofcontents\n" "\\end{frame}\n\n" :with-creator :creator "\\end{document}"] 24 (#$ . 23075)])
#@35 The keymap for `org-beamer-mode'.
(defvar org-beamer-mode-map (make-sparse-keymap) (#$ . 25735))
(define-key org-beamer-mode-map "" 'org-beamer-select-environment)
#@99 Non-nil if Org-Beamer mode is enabled.
Use the command `org-beamer-mode' to change this variable.
(defvar org-beamer-mode nil (#$ . 25907))
(make-variable-buffer-local 'org-beamer-mode)
#@316 Support for editing Beamer oriented Org mode files.

If called interactively, enable Org-Beamer mode if ARG is positive, and
disable it if ARG is zero or negative.  If called from Lisp,
also enable the mode if ARG is omitted or nil, and toggle it
if ARG is `toggle'; disable the mode otherwise.

(fn &optional ARG)
(defalias 'org-beamer-mode #[256 "\301 \302=\203 ?\202 \303!\304V\305\306\203 \307\202 \310\"\210\311\312!\203B \301 \2032 \211\301 \232\203B \313\314\315\203= \316\202> \317#\266\210\320 \210\207" [org-beamer-mode current-message toggle prefix-numeric-value 0 run-hooks org-beamer-mode-hook org-beamer-mode-on-hook org-beamer-mode-off-hook called-interactively-p any " in current buffer" message "Org-Beamer mode %sabled%s" "en" "dis" force-mode-line-update] 7 (#$ . 26100) (byte-code "\206 \301C\207" [current-prefix-arg toggle] 1)])
(defvar org-beamer-mode-hook nil)
(byte-code "\300\301N\204\f \302\300\301\303#\210\300\207" [org-beamer-mode-hook variable-documentation put "Hook run after entering or leaving `org-beamer-mode'.\nNo problems result if this variable is not bound.\n`add-hook' automatically binds it.  (This is true for all hook variables.)"] 4)
#@31 Keymap for `org-beamer-mode'.
(defvar org-beamer-mode-map (byte-code "\300\301!\203 \211\202 \211<\203 \302!\202 \303\304\"\207" [org-beamer-mode-map keymapp easy-mmode-define-keymap error "Invalid keymap %S"] 4) (#$ . 27301))
(byte-code "\301\302\303\304\211%\210\305\306!\203 \306\307\310\311#\210\312\313\314\315\316\317%\207" [org-beamer-mode-map add-minor-mode org-beamer-mode " Bm" nil fboundp font-lock-add-keywords org-mode ((":\\(B_[a-z]+\\|BMCOL\\):" 1 'org-beamer-tag prepend)) prepend custom-declare-face org-beamer-tag ((t (:box (:line-width 1 :color grey40)))) "The special face for beamer tags." :group org-export-beamer] 6)
#@135 Track the BEAMER_env property with tags.
PROPERTY is the name of the modified property.  VALUE is its new
value.

(fn PROPERTY VALUE)
(defalias 'org-beamer-property-changed #[514 "\300\267\202B \212\301\302!\210\303\304\305 \"\306!\205 \307P\310\203$ B\202% !\210\211\205/ \311\312\"\266\202)\207\311\313\306!\203? \312\202@ \314\"\207\315\207" [#s(hash-table size 2 test equal rehash-size 1.5 rehash-threshold 0.8125 purecopy t data ("BEAMER_env" 6 "BEAMER_col" 51)) org-back-to-heading t cl-remove-if #[257 "\300\301\"\207" [string-match "^B_"] 4 "\n\n(fn X)"] org-get-tags org-string-nw-p "B_" org-set-tags-to org-toggle-tag on "BMCOL" off nil] 7 (#$ . 27957)])
(add-hook 'org-property-changed-functions 'org-beamer-property-changed)
#@52 Supply allowed values for PROPERTY.

(fn PROPERTY)
(defalias 'org-beamer-allowed-property-values #[257 "\211\304\232\203 \305\306\307P\310#\204 \311\312\313	\n#\"\207\211\314\232\205. \305\306\307P\310#?\205. \315\316\"\207" [org-beamer-environments-special org-beamer-environments-extra org-beamer-environments-default org-beamer-column-widths "BEAMER_env" org-entry-get nil "_ALL" inherit mapcar car append "BEAMER_col" split-string " "] 7 (#$ . 28711)])
(add-hook 'org-property-allowed-value-functions 'org-beamer-allowed-property-values)
#@1020 Export current buffer as a Beamer buffer.

If narrowing is active in the current buffer, only export its
narrowed part.

If a region is active, export that region.

A non-nil optional argument ASYNC means the process should happen
asynchronously.  The resulting buffer should be accessible
through the `org-export-stack' interface.

When optional argument SUBTREEP is non-nil, export the sub-tree
at point, extracting information from the headline properties
first.

When optional argument VISIBLE-ONLY is non-nil, don't export
contents of hidden elements.

When optional argument BODY-ONLY is non-nil, only write code
between "\begin{document}" and "\end{document}".

EXT-PLIST, when provided, is a property list with external
parameters overriding Org default settings, but still inferior to
file-local settings.

Export is done in a buffer named "*Org BEAMER Export*", which
will be displayed when `org-export-show-temporary-export-buffer'
is non-nil.

(fn &optional ASYNC SUBTREEP VISIBLE-ONLY BODY-ONLY EXT-PLIST)
(defalias 'org-beamer-export-as-latex #[1280 "\300\301\302\303&\207" [org-export-to-buffer beamer "*Org BEAMER Export*" #[0 "\300 \207" [LaTeX-mode] 1]] 14 (#$ . 29267) nil])
#@918 Export current buffer as a Beamer presentation (tex).

If narrowing is active in the current buffer, only export its
narrowed part.

If a region is active, export that region.

A non-nil optional argument ASYNC means the process should happen
asynchronously.  The resulting file should be accessible through
the `org-export-stack' interface.

When optional argument SUBTREEP is non-nil, export the sub-tree
at point, extracting information from the headline properties
first.

When optional argument VISIBLE-ONLY is non-nil, don't export
contents of hidden elements.

When optional argument BODY-ONLY is non-nil, only write code
between "\begin{document}" and "\end{document}".

EXT-PLIST, when provided, is a property list with external
parameters overriding Org default settings, but still inferior to
file-local settings.

Return output file's name.

(fn &optional ASYNC SUBTREEP VISIBLE-ONLY BODY-ONLY EXT-PLIST)
(defalias 'org-beamer-export-to-latex #[1280 "\300\301\"\302\303&\207" [org-export-output-file-name ".tex" org-export-to-file beamer] 14 (#$ . 30479) nil])
#@915 Export current buffer as a Beamer presentation (PDF).

If narrowing is active in the current buffer, only export its
narrowed part.

If a region is active, export that region.

A non-nil optional argument ASYNC means the process should happen
asynchronously.  The resulting file should be accessible through
the `org-export-stack' interface.

When optional argument SUBTREEP is non-nil, export the sub-tree
at point, extracting information from the headline properties
first.

When optional argument VISIBLE-ONLY is non-nil, don't export
contents of hidden elements.

When optional argument BODY-ONLY is non-nil, only write code
between "\begin{document}" and "\end{document}".

EXT-PLIST, when provided, is a property list with external
parameters overriding Org default settings, but still inferior to
file-local settings.

Return PDF file's name.

(fn &optional ASYNC SUBTREEP VISIBLE-ONLY BODY-ONLY EXT-PLIST)
(defalias 'org-beamer-export-to-pdf #[1280 "\300\301\"\302\303\304&\207" [org-export-output-file-name ".tex" org-export-to-file beamer #[257 "\300!\207" [org-latex-compile] 3 "\n\n(fn FILE)"]] 15 (#$ . 31572) nil])
#@328 Select the environment to be used by beamer for this entry.
While this uses (for convenience) a tag selection interface, the
result of this command will be that the BEAMER_env *property* of
the entry is set.

In addition to this, the command will also set a tag as a visual
aid, but the tag does not have any semantic meaning.
(defalias 'org-beamer-select-environment #[0 "\306	\n#\306\307\310\311\"\312\313$\314\315\211+\316 \210\3171# \320 0\202' \210\202* \206+ \321,\322=\203H \323\324\"\203B \325\326\327\330!\"\202\234 \331\326!\202\234 ,\332=\203 \333\314\334\"\335\232\203i \336\314\334\"\210\336\314\337\"\210\336\314\340\"\202\234 \341\314\334\335#\210\325\337\327\342!\"\210\325\340\327\343!\"\202\234 \323\344\345\346\347#\350Q\"\203\230 \341\314\334\351\352\"#\202\234 \336\314\334\"\262,\207" [org-beamer-environments-special org-beamer-environments-extra org-beamer-environments-default org-current-tag-alist org-tag-persistent-alist org-use-fast-tag-selection append ((:startgroup)) mapcar #[257 "\300@P\301A@!B\207" ["B_" string-to-char] 4 "\n\n(fn E)"] ((:endgroup)) (("BMCOL" . 124)) nil t org-set-tags (error) org-get-tags-string "" 124 string-match ":BMCOL:" org-set-property "BEAMER_col" read-string "Column width: " org-delete-property 65 org-entry-get "BEAMER_env" "againframe" org-entry-delete "BEAMER_ref" "BEAMER_act" org-entry-put "Frame reference (*Title, #custom-id, id:...): " "Overlay specification: " ":B_\\(" mapconcat car "\\|" "\\):" match-string 1 org-fast-tag-selection-single-key org-last-tag-selection-key] 9 (#$ . 32722) nil])
#@258 Publish an Org file to a Beamer presentation (LaTeX).

FILENAME is the filename of the Org file to be published.  PLIST
is the property list for the given project.  PUB-DIR is the
publishing directory.

Return output file name.

(fn PLIST FILENAME PUB-DIR)
(defalias 'org-beamer-publish-to-latex #[771 "\300\301\302%\207" [org-publish-org-to beamer ".tex"] 9 (#$ . 34313)])
#@267 Publish an Org file to a Beamer presentation (PDF, via LaTeX).

FILENAME is the filename of the Org file to be published.  PLIST
is the property list for the given project.  PUB-DIR is the
publishing directory.

Return output file name.

(fn PLIST FILENAME PUB-DIR)
(defalias 'org-beamer-publish-to-pdf #[771 "\301\302!\303\304\305\306	\302\n!%!)#\207" [default-directory org-publish-attachment file-name-directory org-latex-compile org-publish-org-to beamer ".tex"] 13 (#$ . 34698)])
(provide 'ox-beamer)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   OTTO  �  0CFF P6�@  
  ^FFTM_�FU  i�   GDEF �   h    OS/2FZ]      `cmap�lt    �head��   �   6hhea�3   �   $hmtxl�  h,  �maxp dP      namep-
�  �  �post�� 2  	�          ���\_<� �    ���l    ���l���(��            ��(  v���0�                d  P  d   ��   ��   ���  � 1            �  � ��        PfEd !  ����(  � �   �^  ��                , Z        �        �       '"       z       �       �       ��              Q       
t  	   X    	   �  	   �  	  N �  	  .J  	  �  	  .�  	 ��  	  4�  	  7  	  ^ C o p y r i g h t   ( c )   2 0 0 9 - 2 0 1 0   D e s i g n   S c i e n c e ,   I n c .  Copyright (c) 2009-2010 Design Science, Inc.  M a t h J a x _ M a t h  MathJax_Math  B o l d   I t a l i c  Bold Italic  F o n t F o r g e   2 . 0   :   M a t h J a x _ M a t h - B o l d I t a l i c  FontForge 2.0 : MathJax_Math-BoldItalic  M a t h J a x _ M a t h - B o l d I t a l i c  MathJax_Math-BoldItalic  V e r s i o n   1 . 1  Version 1.1  M a t h J a x _ M a t h - B o l d I t a l i c  MathJax_Math-BoldItalic  C o p y r i g h t   ( c )   2 0 0 9 - 2 0 1 0 ,   D e s i g n   S c i e n c e ,   I n c .   ( < w w w . m a t h j a x . o r g > ) , 
 w i t h   R e s e r v e d   F o n t   N a m e   M a t h J a x _ M a t h . 
 
 T h i s   F o n t   S o f t w a r e   i s   l i c e n s e d   u n d e r   t h e   S I L   O p e n   F o n t   L i c e n s e ,   V e r s i o n   1 . 1 . 
 T h i s   l i c e n s e   a v a i l a b l e   w i t h   a   F A Q   a t : 
 h t t p : / / s c r i p t s . s i l . o r g / O F L  Copyright (c) 2009-2010, Design Science, Inc. (<www.mathjax.org>),
with Reserved Font Name MathJax_Math.

This Font Software is licensed under the SIL Open Font License, Version 1.1.
This license available with a FAQ at:
http://scripts.sil.org/OFL  h t t p : / / s c r i p t s . s i l . o r g / O F L  http://scripts.sil.org/OFL  M a t h J a x _ M a t h  MathJax_Math  B o l d I t a l i c  BoldItalic                   �       �   (       / Z z ������������������     / A a ���������������������������������������������������n�kd                                                                                                           	
       !"#$%&'()*+,-./0123456                                                              R   B            7                                                              �� 2                      MathJax_Math-BoldItalic   ,�G �H�I�J�Kt�l��i�  � +\� 1        ! & - 0 3 8 = A F K R V Y ^ b g m o q x z } � � � � � � � � � � � � � � � � �%+uni00A0GammaDeltaThetaLambdaXiPiSigmaUpsilonPhiPsiOmegaalphabetagammadeltaepsilonzetaetathetaiotakappalambdanuxiomicronpirhosigma1sigmatauupsilonphichipsiomegatheta1phi1omega1uni03F1uni03F5uniEFFDuniEFFEuniEFFF3.0Copyright (c) 2009-2010 Design Science, Inc.MathJax_Math-BoldItalicMathJax_MathNormal      " # $ % & ' ( ) * + , - . / 0 1 2 3 4 5 6 7 8 9 : ; B C D E F G H I J K L M N O P Q R S T U V W X Y Z [����������������������� ���������������������� d    ! c]eL#[��	/	�
��,O���|���t�ut2��-�� �!�"�#�$p%�&L'`(#(?)N*"*�+�,l-|.H/�0�1�2�2�3�4"5<6 7�8�9�:�<J=�??�A&A�B�C�D�E�FqF�G�H~I@I�KbK~LML�M�N%N�O�P�Q�R�S�U9VJW\XQYY&Y=YL���E�������*���*��w�E��E���[w�Q�f�����������┝��������~�{������������臅�������{�|���������gw�������������������������������������z�y�n�������������������%������ox��������������q������������΋ϋ����������������������`�`�]��m�i|􊍃���{��r���������������{�z�t�v�x��������q�������l����\�R$�������������P�D�����������S�*�6�Z^����������x������������z�#�苔����µ㗤�������+����������۟Ƶ�Õ�������O�B�i�������q����������x�����������������������������}���|�z�s�ytR_eO�����;�F�|����������������w�`W��������~@]WEz�&�+������ǝ���������~�p�Z�bz������/���S��������v|ry]il�Y�U���r�x�w�`�)!B�*oQ{P�N�W�Y�d�6�\������������� ����������������x�o����wv?FJCnl~t�j��N�Z�f��{���w������������ ᢿ�������������������y�k�c�O������������������������������������ۋ�������&�6�Z^����������x������������q���y����V��)�,��j������������z�2�����6����d����������x�����������������������������}���1�t�q�l�w}Q�txDs^ig|}��{�gtb|W���J�[�mu��������.���ۋϊ�����~�e�+�[������~���Ő���Y�T���7���Z�^����������x������������������������������������x�k���tlDufmmjjaxS�t�t�B�F�������������������w���}�y�������}���������������������t�r����v~X{tm|��b�p���������k���Ҋ�����ҁ�r�?��}�|�z�x���������������������q�������������������p���������������������������ً��������7�/�BĎ���S����7���Z�^����������x���������������؋ċƋ��������������������������Z�Q������Û����������������x��}�x�|���������������������������������|�q����t�a{jh�}���f�h����͙���݋㊑������p�Wz��t���}��x����������������������q�������������������p�����������������������������{�rv�j�� ���.�����e�f�D�U�R�k�Y����������p������������ȋ����t�p}U���~rmbzQ���4����������̡פ������)��������s�Q�>���~����������������������������������������v|ry^j��i�^�W���r�v�u��z�Q�.j�����|�|�|�|����,�:�J��ϟ��������x���r������������_������������������������|����������6�Z^����������x���������������ҋ������������������������������b�a�������������(��!����J�����Z�^����������x���������������ҋ������������������������������b�h�����������.���������������������������|�_�`�E�B�_�Z�v����t���������������������Q��(�9I����������������������������|�\�[�T�T�Q�X�z����������x�����������������������������}'������.�WY��������r�~����������������������������������������]�f�����������.����������������������������Y�W�Q�R�P�X�x��������m��������������������������}�z�������9�B`�a�P�R�L�U�w��������m�����������������x���q~vzzvyxg�}�\�����������s�a�������_�jj�S�~�����e�p�~������������םϺ�Ѝ�����������������������������������H�O���n�B�q�t�Z�f�d�q��d������u�{�����������������#�����˟���#������������������������|��\�[�T��T�Q�X��z����������x������������������������������}Z^����������x���������������ҋ������������������������������b�a��������������������p�|�|����������z�z������������������̋��������������������~��u�n������A��������O���������������������������������%������6�Z^����������x������������������������������������v�q����og&N<"z��]�j�v�|���������.���ʋƋ��������������������{�U�R�P�P�O�X�z����������x�����������������������������}������������������������������������������x�zX��������w��������3�����{����������������:�c��������xZ^����������x���������������ϋЋ��������������������������b�h�����������.�������������������������������e�7����������9�*�!*�";���Z��^������������������������x�������������������������l�e�+F��z�t�m�b����p���������������������������������������������������������|�z�X���������m����9����1�����������������������+������������������������������t�y�d�d�T�h�f�z����u�y���������������������������.�������W������g�3�
����������x�������������������������l�e�+F��y�u�m�b����p������������vz������/�\�+��z��˳�����������������q�&��2��:��<="VEg.�5��������B�3�G������w�u�s�_zI|`n6_KTean\}`�*�V̋����͠��ۧ�����Ϩʋ��O�(����u�����H�/�6�Zb����������v�������~��������ҋ������������������������������\�a��������������񌋋��ޚӱ�Ũ�������G�5�n����~��V�r��������v������������������������������}�[�������~�����x�q���a~Y�vzw}zm{n�s���8�>����؋ˊ�������V�6��ս�z���(�e�)�T��������tjV�|����}������������������������q�&��2��:��<="VEg.�5��������C�4�E����������i�f�~�y�T�m�������Ɠ�����������������e�d�~�}���Kt/tSpGeYZi����w�v�j�������������^�am�^����h�{��ǋ����Ĩ�
������ƨҋ��M�#������|�m������������t�z�t�v�|���������������z�h����������8��,k�0s�t�6�Z^�����������x�����t����������ы������������������������������b�a��������������͋Պ�������t�j�u���c�\�{�~�5�t���������������������������w�{������������nupt�������h����t����
����~�y�s�~���������������r��������|�u�l�Z�M�h����h��W����������x�����������������������������}�����{�w�p~Y}rrzt|q�h���{�S�G��������Ĝ���ɋ���͇J�{�����Đ��Z����^��������������j������~���������KY��������q�e�^���s�y�yE�Qp]^jita]�z�{�{�x�y�z�]�f�|�|�|�w�|�w�l�������]nedwt�y�k�,�5��苖��������������u�u�������~W{Np���������������������������x��ǋ�������
��ݧ���������Z�L�������l�s�����������ųҋ��_�1���}��{�������������0����ċ����Éɋ����������������������������*��������������x�]�x�o�k����������������������������e������������̋����������=�m�}�������������������ǚ�����������������F��f�+k�����{�T�D���������q��������Q{������&�q���{���������۴�
����*������������������������������t�y�d�d�T�h�f�z����u�y�����������������������������x'���h#9M��AV��������������i��e������������������������|�\�[�T�T�Q�X�z����������x�������������������������(��u�������P�)�����O�@��B����������z�z���������������������R���=�N�����������������������������j��e�a�a�@X�X�^�v��������p���������������������?��"������������������������,���������@�����������������������������v�}�h�h�Z�k�h��v���'�4���4��Bp�u�[�h�e�u�h������u�������������������P,B�	B�O,�����|�	x�0�������������������������������|_�a�K�[�]�u�g����������q�������������������v�s�_�g�����|�	x�3�������������������������������z�]�Z�Z�Y�Z�a�u��������p�����������������������������������������������������*�������M��������������������������������g�$�y�َ������������������������������������������������������������������������{�l������\�a������f����}�y�b����r�������~��������ϋЋ��������������������������b�_�?�;a�i֋����d�g�������������������������������������q�z�b�a�a�`�s�e����������p��������������������<9_^fg����z�w�eޏ�����������������������}�[�U�X�W�X�[�}����������|�����������������������B�J���~��ed�b�e��~�]�X�x��������o��������ˋ�������Bn�r�Z�Y�h�g�y����v�������������������ICTP����������������������������|�Z�T�V�U�W�^�u��������p�����������������'��V�iZ�]����������x���������������ыҋ��������������������������`�`��������������-�:���׍��������������������������6��������@��k����pf�ZA�}u�q�L�L������'�2������������������E��T��z�l�����������H�q���������������������ղ�������������Ōы�!�@A<NH�����n����������y�����������������������v����������E��r��������p�v�������������Џ���������������x��s����p�gTh�~���������������p����u�m�y�z������������s�?�h�m�n�0jD>t(�r�t�v���S���J�� 
1������>���	�s��p��ӱ�����Ėˎ������C��Ras����푤������~���u�T�4��������p����������������������Z�XX�`��{���{�}�$�O���9���s�j}U�_�t�wl�|{{wwv~g�^�x��������������ڡ∂�����������w�`)��������T������ן����������r�������~~abFv9�P�h����������Ġͣ�������������������y~~r�rm�v���������������f�U���u�{�{��=ZU@m\y`�N���W���������>����E��r��������p�v�������������Џ���������������x��s����p�g}Th���������������%�܋�����~���u�T�4��������p����������������������r(~U�^��������v�i�k��%�� %o��r�t�v���S���J�� 
R���<���������?����������������ʖ����������������L�?��������������!�/I_� �~�o�|���{�}�������$�X��� �ן����������r�������~~`cHu8�Q�h������s�dmwjn�h�L�i�������������������������yi`�]�Y�<�3���<Y�������f�\7�t�k]hd^�S�o��������������������������؋����������������������-������������������������������������������{{�v�w5j�x�������k�U����z���9�UPy6��z9����M�P��������������p������������Ë����U��~G{/�u���u|������������I�^��*�����.��-���w��������������u2���|��|}wwo{d�O����������u�j\if^�z�~���pƂЋ܋Ǚ������������U����u�m�y�y���������������s�p�`��������������"'%u��~�~�~ �P�S����җ����������������{�q��M�����{�}�t�{�u�f�p���ă�����?����Q�_���������������|�����������������z�j�dxIb �}i���z�k�p�z����������������������������������x��u����v�l|qww~}�|��������������������۝����������f�M�x���p�N�j}en���������ȝ�����������~���u�T�4��������p����������������������C��O���a�}n�y��b��������̅�~�$�f�����������t�j������l�lo�cn�s�R��Ջ�Ȥ�鐗��������������x��u����v�l{pwy��sz}��������������������􌐌�����Q�L�?�WMsO��y�����������������������������������������������*����銆�����N�lɋ� �^��������A�(������j�v������t�j`gdd�}��������ޘẠ׍���� ���Y��������}�X�A�x�x�}�b{cjpb~w~s��������������������������������������w�������t+���~hsnp}������������������r�l[k`dX�q��������>�����
���������������3������������y�k�~�x�~I�h������������������������������x�o����v~Zwiu��������}���싟��������~�}�r�l�|�p�z�������������������������������������c�fq�[j�x�������ʋ�t�[�s�m�q}o{vzX]fiuyw~�������������0��������~���u�T�4��������p����������������������C��O���a�}o�x���������������J��u�T�4��������p��������������������������|�~�����_�kϋ����������������������������x��s����p�s�v�}�}yz�~��������������%�܋�����~��9������̌��W��P�_���#�����������|�����������������|�f�������|K���w�n�y������������z����������������{i�{�x�s�a|]qH�!
�������������z�S�:�q�z�s�m�ivpq��������t�Z�D�n���u�l�kyos��������p�w�m�r�m�{�w{ptsa|V�������������������������˜��������y�������A��zn�y������̌��P�_���#����������Ɯ��������������������{�i�{�x�s�a|]qH�!
�������������{�W�@�s�~�y�e�jyhm����p�w�m�r�m�{�w{ptsa|V�������������������������˜��������y�������A��zn�y�q�������������"
7�#
��V�������9��E���V����������������������������������r�z�������)���z����ЋĠ��·�Ϙ؍�������B���U�^wfov�]�Z�������`�f_tG�~�z������������������������®������w��������zs�z����������q���������h���k�v|M|R�o�s{iruj�������d�o�����Ιċ����������������t�dF�V���������p�ĵ��g�'c�g����q���������������������������������������������r�z�����������/��S�㋑������l�{�s�v���o�o�]�4�Jg]_^_mPH�|�}�}!�N��E��������O����vr^qa�b�u����������Ŕ������������}�t9�%��͊���n�y����������Р���)�������������������������~���{|�t�vj�x������`�KZ�m|kq��x�V�\�������c�igtQ��y�m������������������������������������}�y�j?���o;�������U���D���-��������u�jZjd\�|�}��f�vڋ�ͧ�ğ�������w�i�s�|�R�]����Ԅ������������������������������������}�uo�y�����������~�j�Z���t�z�A�Vqn]xn�k�o�X�e�|������躃���g�mutt�s~r�g�k�j�y��X����������T�����������������������������x��w����x~q�|xwstr~q�x�����������������������������������������������^�n�z�����������t�m�i�uwt����{JyBX�U��������o������������������F���|I�l�ф������Z�������Ph�rt�r��D����������ploye�d}���������ؕ�������P�M�������T�X\pK��y����������������������®����������������}���sm<~f�n�s���y��s���z�P�q܋�����������������q�w�������������Џ���������������x��s����p�d�q~������}�����������������q�p_������̦�Z��.�����������������올������Z�E�D�PNsP�~�x����������������������������������������}���sd&~c�j􊃋����(�e󋬋����۹�����������p�[_bb^���������������������������u8[�9�]u���p���/v�ͦ�X���L��&�������������������������������}S}a{l�w�}}~{{{�q�^�t���������㐰��K����q�p�h�rt�r��W�b�{��}�������|rupg�Y�p���������������閩��������{�t�l�^�������Z�_foS�{�p����������������������������������������}���sd%~c�j��������g�l�v�j�{ҋ�������j�yҋ������޶��
����������w�h�������`c\d�������������� �����}�xX�\���qsik���r����������������s�li�ru~t�}�y�{�b�p�z��������������p�{ǋ��éȑ���������������x�x����������|�ovoqyw}u�l�k�x�������������\����������������������������~���{|�t�vj�x�����������z�g�U�d�pzrr��x�d�a���v�{�n�s�s�Uqa^{W����������������������������������ʋ�����pv�^��#������r�7�[�����Ƨ�����v��vP_OO}�������y����������t�k\je^�~����j�x̋������ޤ�Ʃڎ��� ����q�p�h�rt�r��A������xw��w|s�v��c}��������������򗫎�����S�K�������[�`imU�zj����������������������������������������}���sf)~f�g䉁�|�}.�g�S��I��s��i�p���X|�����~�{~z��������y�y�k�k��y������������f�l{pq{z}t�w��������������������������č������qsmrLZ8Jptfglkwtxn������������������������������������������������x�y�����������������ˠ�ÝɎ���������t�z������������z��z�z�}�^�f���\�pk�t�y��������̽�̦������������������w�������I�U���7���Z�^����������x���������������؋ڋ������������������������U�T��������������ǋ������܅�p�D��|�z�t�y����������������Џ���q�������������������p��������������������������������w��2��3����������W�������������o�~���������������5���������������������-���{��z����5��z���������$���d�w���$���z������ڛҭȾ������$������l�7����n�u�t��'c=F5?Q�|����|�|�A�4�K����g�a~Wk�c@:S[kS{W���Jʋ���������ʱ����������������H����:�j~��������������7��������������s����v��#�#���������}�y�z�������`�;�����������������������d��������W���w���9������������������������t�y�r�����������������#�ˋ����1�����sa����������z�z������������������͋��������������������������k�w{����D�������r�o�����������������x�u�i����q������������������������������z���;�������s�������u����������������������>�������������������������W�A�������������������������������������a��X����������f�|�mj�u��������c�1�����������������������������5��������z��������������������������q�z����������}���5��3C������������s��R�z����w&�X�_���������������������������K������������|�{����������~�f}k��������s�\��_��j�v�������������������������w�|������������7���Z�^����������x���������������ҋ������������������������������b�a���������������(��!������������Z�^����������x���������������ҋ������������������������������b�a���������������������������������������������������p����������������������������������������Uz�������������q������������������l�����\�Ӓ|�E�*D:O����������������������������������������������}�s����vy]sgnojkl|T�c�j������<����č�����������C�8��ŋ����퇰|�^�y�r�n���|�ǌ�����m�M���f�R?�APsC�����������������������������������r�Z�z�}�s�k�m�m�F���~MU����������v����������������ɋȋȋɋ��������������������������M�U�������������������Һ��������������~���������������������Б�����������x�d�T�H�FiSNliqfs]�~��������y�b�Q�~�}�~��������0�����������,���Y�.���MQ����������x���������������܋ǋƋ��������������������������U�Q���������������ߥ����������������������p�]�7�C�����ʋȋ��������������������|�U�T�L�L�K�T�x����������x���������������Ë��������r&���������������~.dYSqm~l�l�|���~�R�b���������������yB�p��(�N���������{���g�o��������������������������������9����}�k�����������{8a_5��������������������������?����� ��&��
���Z�m~e�h�d�k�o�i�p�~��������������w=�qMU����������v����������������ƋǋǋƋ��������������������������M�^���������������)��۱�����������������������������������Q�S�����q�yzzi�z�{�u�d�x�usXgf^w��z�����!������������������������}�V�U�M�L�J�S�z����������v����������������ċ����(�#Y�q��ɋ�����쑡������~�o���m�m�m�n������x��������|w��������ȗ�.U���1��6�������������t�s������:�_�a���~��������� ����������������􋼂����H���D��i8�������(V3U,U-sV|W����������������� ��������������F������������v�{�������o=}��w�c�z�}����������������Ĝ�����������������s�`�S�@�$�8�F~Mq{�p~~�ctghrfrd{d�S|�z���w�k�w�N�`�y�y쏀�s����y�w�h�z�v��*�����������ƥͶ�����f�t��������Ë�������������y�������}�{���������������Ý�����������������x�o����v�~�p�{�zye���������l�C����!�-IV0vd}Z�b���T���5��w�i�[�����x������WfLi;�R�j��Ƌ����������������������������}��Av�N�������c����'�	>���a�Q�x�r�y�5k>7j)�u�1�������������������������������~���x����������'����0����w���������������������B�$���exI~m���|��������s�v�j�c�j�x�v�xw�q_���������������������~��w�r�y\zIoqqope|V�C�Z��Ӌ���������������������������y�b �^�j�w�y�������������������v������ܾ����������������������͋�y�i�����}�e�T�Y�}�wyX|W}T�b�v�|�u�y���������������ҕ������������듙�������z�y�������C� mF������������y�w�k�d�Y�����|�q1�1Fq8���������2��� ���
�S�������������š͗��ˋ���m�X�V�c�x������������������������s���}������������z����*���������v�{�}�qwvo�`�f�[�O�tb�byfoN_\7�9��	�P�/����Ö��������������������������`�\�K�IrCtm}z��w�N�f���9z�� �������v��%���5�������rfO�E�G�S�|���������������������������������������������b�^�a�i�k~���������������������Θԋ�����x����������������w�f�j�W�1�Do[^vu|s�p�����}�w���{�����ppvh�W�������;�k��Ԭ��������������s�yt�����������$�^��&����w���7�\�l�����+q�t�x�w������z��|�������}�x��΋�Ę����������������������y�y���� ���[�n��΋���������;���u������������������a�Y�|�|����������������������������~�|������y�o�jqdsjree>>L,y����{�|�"�P�m�}�
t�t�������u��s��_������z�}���}�����������������������%����$�����"�����������|�����������������|�f��������p� k��`�C|T���m�w��������������d����Ѝ�������f�M�x���p�n���u�l�kyos��������p�w�l�r�������`�f_tG�~�z������������������������®������y�������aH���un�y�Z���������������i�������Ǖȯ����������������s�a�m�m�\�������P�MiYWa]eLqDsFxA�6���3���p���NyG}T�U���Ñ����������Ľ����c�Z���:���������ڜ������|k�
rSbdwwv�u�b�|����[���-w��z�	����5�������Ȝ��������������������x�x����������~yTJ]B��������������֣٦�؏�������r�n�m�w{~x�����ht/vGtM�|c���L�m�Ą���ӓw����	�������)�q�oi�qt�r�2��wn�y�����������7��������������~�oԋ��s�~�H�g������������������������������x�o����v�byhy�������|���̋�������!�/�����������������������������m�u������v�iq�n�o}o}oxYc>Qt������鋥����~�����������������I�S�����������������������������������������ㄕx�E�R�|���������~���������������{�t������������y��~�}�w�j�v��샾�-w����A����n�w�������������Џ���������������x��s����p�gTh�}��������������q�p�i�sur��G������zx��rur|g�\�t�������������\���q�oi�qt�r�w����{�l�u������������"��������������Ƌ����i���t����Xs�q|t�����{u?cHMO[\UgMr|���I���Ë��������t�U�T�r��������{�y����������������^�Im�}Q���������������������8������ñ˝���������t�n�$�]������6����w��r��Є�(��@���+k�k�t�{�����}�|�{�������~�}����������������������w�o����oׇ�z��������������������������������yǋ� �Ŗ��]�Xg�v�s��������éȪ����v������������������`�Z�u�u��������������������������~�������s��w�j���~��zArLZnQ�u�p�l�g�k�r��}�WbgU}R�@�}��������e�i�u�|�KO�����������}� ��^��������������n�v�|�����?���������������������m��y�����q�������������"
7�#
�����	������]�����������k�z؋�������ыɌ��������������}���������(���T�SbTA�~����������������������������ԋ�����p�vUoTZ0�}�}��������n�w����������������Ȧ�Ř�������������R�{�c�o�[I�:��������n��ǃ����ڸ�����L�3���t�z�zY�`}htSibTsJ�v+���n�w������������:����l��;����q�w|Q|K�n}rwegnV�o�p�z�����������-����������������uh�O"��Y����2���V|����������{��|������������Ӌ�ы���|�p����Bᇏ��|�����������������޵ۋ�����������������������������q�k�X�yM�Pv[jQhWD�?�O�[�r���$K��������������փ������
����v�ދר�����ˋ㋖����������������ǋ��������������}������C�2�>����!/&m��u�y�z� �X��>���hp,ru^bhO�Y�l������ė��ʬ�ҋ���X1����I�p���[�OT�SbTA�~������������������������ŋ������~1������������o�w��������������������������������}�x���r��4�&�6����������̧�W��n���܃������è�ŮӜ��������������s��}�~�ZgZf�����������������������������|MgMddssoue��Qf��������������엫������y�i�x�q�t�������X�Z^rY�|�m����������������������������������������������}���se(~c�m􊃊~���������1�o����������������L�/�������n�x�����������������������������������������^�/�������<�KQP�yhzbwSk~�C�\�x�����������������������������v������������d^qRw=�p���t�z�����;�W�w��������U�2���Y�3�x�~�{lN7h2��m�z���������������������±��Ë�m�X��]�uv����p��V�������������ڐx�C�W�d��^�~܋����������������������t�w������������z}vu�������q�p�v�n�s�|����復��������������������UWLNLMWY��������}���|�s�{�m�R�>�S�ixrf�}�|��������������������������~�{�u�f�f�W�L�z�k����UVHJ��������y���'�������w��U�t��4������&�8�e�w��������������a�?���������������������������蓋������ڷ�Ӧٖ��ɋ���~�r���~�}�{�}�w}vq�l������������������������qwd~ylY]a[sm|t�p����������2�	������������u�|��������f�$`�B;��������|���^�v���������������떩����狠��{�v�j�`�B�PKsN��{����������������������ð���둎���bD��G�����w���R��W�� ��p�nx}l�v�t�g�o��p{m�p�R�b��ċ�����������������~�w������������~gZnP{N�h�|�p|�j���s�M�[֋���������������i�uċ������ˠ�ʰᙬ����r�[[e``�w�{���y�y�x�������~�|�y�y�|{{|��z�u�|�v�q�x�x��������������������t�o�܃���ª��[���D����7��� �������w�h�l�n�T�x�x�|�[xbd{b�x�v�s�S�k�o�s�y�{����yH�to+t\gfyyy~k�t�|���~�������������������鋚������~�[�H�m�v�ttsrwd~\����������������������������®������y��������^�G�������w�`�w�v�o�΋ϋ��������쎘�����������������������w�{&�X�q�i�`�u�b����n�x�[�p������������������������f�[��������w��	�+�
�b�H���[yDm����8��9i��{���~}�w�����)�`����t2Z�a���������������������������菋��ɿ���ǒȌ�������o�c�c�X�J������ʘ�������������x�x�����~�����������~�x�z�z�j�}�{���SwZqlkdSnM���������J���3�����c�a�x�z������ˡţ�����Ɨ������������� ���z��'�������������������v���]��΋�Z��8���T�SbTA�~������������������������ŋ����iZiB�D�X�d�s�y����������řó�Œ������h�y�v�k�v������������ ��������������������������������y�o����{xGVMLot�w�o�ak������������������������}�~�a�l|pwtqx~lvjn�L�q�����V�%�þ�������ғ�~�,��������l�xȋ܋ש�¿��Ջڋ�M�2���t�z�zY�`}htSibTsJ�yw<Sz>�Y�c�s���Ŵً��������������������������������������������}�o�~q�w�6�e�g���q�|��}����������������ĕ����������������s�^�������Sn�	ogskfxh�]�n�������6������B� �����������؋������������������n�J�Ya��������������������������������������Y�r�r���)�6aYJkaya�K}�}���{�.�^������������������������������{�euq�t�������F�Z����������P����'��'��'��������'�$'��'���������'����z��W��}��^�
�?	�
�
�
� +   > � �
m�zH}R����wx~�x|k~l�d�t��������ʚĔ������������������v�n�p���t�u�x�|�w�}��ԋ�ˣȏ���������������x��u����tySfdg��������������љ������������ۨ���������
,����������u���H~Up_`WYgD�B���R���������ʖ������������������y�p����~�������kyAksKbZ7�R�j���                  c        � 2 �  ~ �e -b +1 7� +* +� +w 8� +� w *� +� +v +� +E 5� +e 5h +� ?}   ?� >E =� &� ( Dy &	 - (b &* *8 @!  � -� ���\ -\  � I 'Y�� &  9� � 7 ? � +N + " �  � +� ;c 6& ,I >� +u E�  � � o ]� '� N 
 ' $� 0X 2 (� &� -� (� !A &� I '� d "� !� #	 w � 5�  � � � � 3� d K� ,�  �   d         ��.�    ��2O    ���l                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        /*
 *  /MathJax/extensions/TeX/verb.js
 *
 *  Copyright (c) 2009-2016 The MathJax Consortium
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

MathJax.Extension["TeX/verb"]={version:"2.7.0"};MathJax.Hub.Register.StartupHook("TeX Jax Ready",function(){var a=MathJax.ElementJax.mml;var c=MathJax.InputJax.TeX;var b=c.Definitions;b.Add({macros:{verb:"Verb"}},null,true);c.Parse.Augment({Verb:function(d){var g=this.GetNext();var f=++this.i;if(g==""){c.Error(["MissingArgFor","Missing argument for %1",d])}while(this.i<this.string.length&&this.string.charAt(this.i)!=g){this.i++}if(this.i==this.string.length){c.Error(["NoClosingDelim","Can't find closing delimiter for %1",d])}var e=this.string.slice(f,this.i).replace(/ /g,"\u00A0");this.i++;this.Push(a.mtext(e).With({mathvariant:a.VARIANT.MONOSPACE}))}});MathJax.Hub.Startup.signal.Post("TeX verb Ready")});MathJax.Ajax.loadComplete("[MathJax]/extensions/TeX/verb.js");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              /*
 *  /MathJax/jax/input/MathML/entities/d.js
 *
 *  Copyright (c) 2009-2016 The MathJax Consortium
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

(function(a){MathJax.Hub.Insert(a.Parse.Entity,{DD:"\u2145",DDotrahd:"\u2911",DJcy:"\u0402",DScy:"\u0405",DZcy:"\u040F",Darr:"\u21A1",Dashv:"\u2AE4",Dcaron:"\u010E",Dcy:"\u0414",DiacriticalAcute:"\u00B4",DiacriticalDot:"\u02D9",DiacriticalDoubleAcute:"\u02DD",DiacriticalGrave:"\u0060",DiacriticalTilde:"\u02DC",Dot:"\u00A8",DotDot:"\u20DC",DoubleContourIntegral:"\u222F",DoubleDownArrow:"\u21D3",DoubleLeftArrow:"\u21D0",DoubleLeftRightArrow:"\u21D4",DoubleLeftTee:"\u2AE4",DoubleLongLeftArrow:"\u27F8",DoubleLongLeftRightArrow:"\u27FA",DoubleLongRightArrow:"\u27F9",DoubleRightArrow:"\u21D2",DoubleUpArrow:"\u21D1",DoubleUpDownArrow:"\u21D5",DownArrowBar:"\u2913",DownArrowUpArrow:"\u21F5",DownBreve:"\u0311",DownLeftRightVector:"\u2950",DownLeftTeeVector:"\u295E",DownLeftVectorBar:"\u2956",DownRightTeeVector:"\u295F",DownRightVectorBar:"\u2957",DownTeeArrow:"\u21A7",Dstrok:"\u0110",dArr:"\u21D3",dHar:"\u2965",darr:"\u2193",dash:"\u2010",dashv:"\u22A3",dbkarow:"\u290F",dblac:"\u02DD",dcaron:"\u010F",dcy:"\u0434",dd:"\u2146",ddagger:"\u2021",ddotseq:"\u2A77",demptyv:"\u29B1",dfisht:"\u297F",dharl:"\u21C3",dharr:"\u21C2",diam:"\u22C4",diamond:"\u22C4",diamondsuit:"\u2666",diams:"\u2666",die:"\u00A8",disin:"\u22F2",divide:"\u00F7",divonx:"\u22C7",djcy:"\u0452",dlcorn:"\u231E",dlcrop:"\u230D",dollar:"\u0024",doteq:"\u2250",dotminus:"\u2238",doublebarwedge:"\u2306",downarrow:"\u2193",downdownarrows:"\u21CA",downharpoonleft:"\u21C3",downharpoonright:"\u21C2",drbkarow:"\u2910",drcorn:"\u231F",drcrop:"\u230C",dscy:"\u0455",dsol:"\u29F6",dstrok:"\u0111",dtri:"\u25BF",dtrif:"\u25BE",duarr:"\u21F5",duhar:"\u296F",dwangle:"\u29A6",dzcy:"\u045F",dzigrarr:"\u27FF"});MathJax.Ajax.loadComplete(a.entityDir+"/d.js")})(MathJax.InputJax.MathML);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           /*
 *  /MathJax/jax/output/HTML-CSS/fonts/TeX/AMS/Regular/SpacingModLetters.js
 *
 *  Copyright (c) 2009-2016 The MathJax Consortium
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

MathJax.Hub.Insert(MathJax.OutputJax["HTML-CSS"].FONTDATA.FONTS.MathJax_AMS,{710:[845,-561,2333,-14,2346],732:[899,-628,2333,1,2330]});MathJax.Ajax.loadComplete(MathJax.OutputJax["HTML-CSS"].fontDir+"/AMS/Regular/SpacingModLetters.js");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  /*
 *  /MathJax/jax/output/SVG/fonts/TeX/Main/Italic/LatinExtendedA.js
 *
 *  Copyright (c) 2009-2014 The MathJax Consortium
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

MathJax.Hub.Insert(MathJax.OutputJax.SVG.FONTDATA.FONTS["MathJax_Main-italic"],{305:[441,10,307,75,341,"75 287Q75 292 82 313T103 362T142 413T196 441H214Q248 441 270 419T293 357Q292 338 289 330T245 208Q193 72 193 46Q193 26 209 26Q228 26 247 43Q273 71 292 136Q295 148 297 150T311 153H317Q327 153 330 153T337 150T340 143Q340 133 330 105T292 41T228 -8Q220 -10 204 -10Q160 -10 141 15T122 71Q122 98 171 227T221 384Q221 396 218 400T203 405Q175 403 156 374T128 312T116 279Q115 278 97 278H81Q75 284 75 287"]});MathJax.Ajax.loadComplete(MathJax.OutputJax.SVG.fontDir+"/Main/Italic/LatinExtendedA.js");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       /*
 *  /MathJax/jax/output/SVG/fonts/TeX/Script/Regular/BasicLatin.js
 *
 *  Copyright (c) 2009-2014 The MathJax Consortium
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

MathJax.Hub.Insert(MathJax.OutputJax.SVG.FONTDATA.FONTS.MathJax_Script,{32:[0,0,250,0,0,""],65:[718,8,803,35,1016,"76 60Q83 29 135 29Q190 29 264 81Q280 93 280 95T277 99T265 106T248 118Q189 166 189 237Q189 307 245 388Q267 421 299 436Q336 455 386 455Q488 455 550 403L559 395L571 405Q727 544 944 679L957 687L966 701Q968 704 970 707T973 712T975 714T978 716T982 717T989 717H995Q1004 717 1007 717T1013 714T1016 708Q1016 705 829 403L636 92L630 83Q659 93 685 110T728 143L745 158Q758 158 752 138L748 127L740 119Q676 58 605 42L593 22Q590 17 587 12T583 6T579 2T573 0T564 0H530H484Q480 3 480 8Q480 15 489 26T498 39T497 40Q477 40 423 49T327 74L316 78L302 68Q200 -8 121 -8Q85 -8 60 7T35 53T60 113T123 144Q144 144 153 132T162 106Q162 89 143 75T99 61Q90 61 76 65V60ZM904 614L905 615Q901 615 840 573T700 469T581 369L587 359Q600 340 608 315T618 273T622 238T624 216L764 414Q904 612 904 614ZM525 363Q493 405 379 418H375Q342 418 309 378Q251 300 251 234Q251 174 306 137Q318 128 322 131Q323 132 329 139Q351 161 362 180Q430 273 509 348L525 363ZM579 205Q579 245 571 278T556 323T546 337L521 311Q461 248 422 196T362 121L353 111Q427 85 499 79Q517 77 520 77L525 76L549 111Q551 114 556 121T563 131T568 138T573 147T575 157T577 169T578 185T579 205"],66:[708,28,908,31,928,"256 262Q161 262 161 351Q161 408 203 471T289 570Q380 645 475 676T617 707L627 708Q637 708 644 708Q759 708 831 675L844 669L857 677Q892 700 896 700Q902 700 907 685Q907 683 907 681T908 678T909 676T909 673Q909 671 909 670T906 667T903 664T897 660T889 655L878 647L889 636Q928 598 928 548Q928 529 923 510T907 474T886 442T861 412T837 388T815 368T800 355Q847 323 847 270V263Q847 205 806 145Q766 82 695 37T564 -8Q527 -8 506 10T484 58Q484 85 501 117T543 172Q607 226 685 228Q695 228 698 226Q703 220 692 206Q684 194 682 193T665 191Q625 189 595 172T550 133T529 93T522 66Q522 29 576 29Q642 29 705 109Q785 211 785 270Q785 287 779 300T769 316T755 327L740 319Q682 290 634 290Q611 290 592 294H588L565 261Q559 252 544 231T522 201T504 178T481 151T455 123Q394 63 314 18T159 -28Q103 -28 67 -6T31 54Q31 88 57 123T123 158Q144 158 154 146T164 119Q164 102 142 89T100 75Q94 75 87 77T76 80L72 81Q69 78 69 65Q69 35 102 22T175 9Q184 9 198 11Q248 23 300 70T403 187T508 331T636 489T789 629L801 639Q796 642 786 647T732 661T633 670Q592 670 558 665Q481 651 409 613T286 520Q274 507 258 485T222 424T202 354Q202 299 269 299Q282 299 295 301T318 307T339 317T358 329T376 345T391 362T406 380T420 398T433 417T445 435Q496 512 496 547Q496 559 497 560T516 569Q526 574 530 574Q538 574 538 540Q538 414 427 325Q342 262 256 262ZM689 382Q708 382 753 375L765 387Q860 482 860 555Q860 594 839 610L822 592Q794 563 752 511T680 420T651 380Q655 381 660 381Q664 382 689 382ZM697 344Q692 345 681 345H675Q671 345 665 345T655 344T650 344L648 342Q646 339 645 338Q643 333 639 327H653Q670 329 676 330Q706 342 706 343Q702 344 697 344"],67:[728,26,666,26,819,"367 89Q367 84 353 77T334 70Q325 70 312 83T298 120Q298 169 364 233T496 298Q538 298 563 275T588 220V213Q588 132 501 53T306 -26Q251 -26 211 6T170 114Q171 148 181 184T205 248T232 298T255 334T265 349T246 350Q127 350 77 390T26 480Q26 533 71 581T178 656T295 683Q312 683 312 676Q312 674 311 672L302 660Q294 648 292 647L286 646Q280 646 276 646Q197 641 145 583T93 476Q93 387 265 387Q271 387 277 387T287 388T292 388T313 414T373 483T451 562Q618 712 732 727Q733 727 740 727T753 728Q790 727 804 708T819 665Q819 643 810 617T773 553T699 481T572 414T385 361Q381 361 367 341Q247 172 247 86Q247 11 325 11Q404 11 465 95Q518 165 528 208Q529 212 529 220Q529 237 518 249T480 261Q431 261 387 209T343 126Q343 111 355 101T367 89ZM777 658Q777 691 738 691Q704 691 658 662T570 590T491 504T432 432T410 400H411Q416 400 440 405T505 423T589 455T675 506T743 576Q777 627 777 658"],68:[708,31,774,68,855,"251 272Q199 272 168 298T136 374Q136 432 175 496T267 603Q321 645 395 676T552 708Q610 708 655 694T724 659T763 618T784 584L790 569Q792 569 800 572T819 576T840 578Q855 578 855 571Q855 566 846 554T829 541Q824 541 817 539T804 533T799 529Q802 517 802 483Q802 376 742 256T585 53T392 -31Q353 -31 300 -7L289 -2L277 -6Q242 -17 192 -17Q141 -17 113 -13T77 -3T68 14Q68 20 73 28T93 45T131 58Q152 62 197 62Q241 62 272 48L282 44Q308 65 334 93Q380 145 467 266T622 454Q644 476 664 493T694 517T720 534T740 547Q699 671 540 671Q461 671 385 625T276 534Q265 520 251 499T219 438T202 368Q202 309 267 309Q325 309 396 383T491 545Q492 548 493 552Q494 558 496 559T511 564Q513 565 514 565Q523 568 527 568Q534 568 534 560Q534 554 529 537Q507 442 420 357T251 272ZM332 20Q332 19 341 15T368 6T400 2Q425 2 457 13T531 49T614 125T690 248Q750 376 750 476V490L738 479Q698 436 646 366T554 239T455 121T332 20ZM226 20Q226 25 186 25Q181 25 174 24H166Q161 24 158 23H152Q170 21 197 21Q205 21 213 21T223 20H226"],69:[707,8,562,46,718,"280 398L279 400Q278 402 277 405T275 413T272 426T271 443Q271 494 302 544T379 629T472 685T553 707H565H573Q630 707 664 689Q718 661 718 604Q718 548 662 492T553 436Q525 436 508 451T490 492Q490 534 531 579T619 630Q632 630 632 623Q632 619 624 606Q614 593 602 592T578 580Q566 568 549 541T532 497Q532 474 565 474Q577 474 587 476Q600 481 611 489Q630 503 651 535T672 596Q672 660 553 660H548Q494 660 450 616Q421 587 384 531T343 439Q341 420 344 415H345Q346 415 352 415T369 417T391 418Q421 418 440 412T466 398T473 382Q473 367 452 353T398 339Q370 339 348 345T315 359L304 366Q297 365 284 360T234 321T163 234Q120 160 120 117Q120 83 149 57T252 30Q311 30 357 60Q386 79 414 114T452 179Q454 186 454 200Q454 230 415 242Q401 246 373 246Q353 246 347 244Q328 236 313 219T288 184T274 149T265 121T261 109Q260 107 247 102T230 97Q223 97 223 105Q223 148 271 216T386 284Q446 284 483 260T520 195Q520 121 427 57T239 -8Q192 -8 152 2T79 46T46 133Q46 212 107 285T269 394L280 398ZM427 376Q427 377 402 380Q386 380 386 379L425 375L427 376"],70:[735,37,895,39,990,"258 428Q258 489 322 562T482 685T661 735Q726 735 824 693T977 651Q990 651 990 644Q990 639 971 612T948 581Q947 580 938 580Q878 580 784 621T617 663Q544 663 480 635T379 568T320 492T299 431Q299 387 362 387Q404 387 438 402T493 438T527 486T546 531T551 563Q551 569 550 575T549 584T549 590Q551 593 563 602T579 611Q584 611 592 605T608 584T616 548Q616 513 595 477T554 423Q518 392 464 372T349 351Q258 351 258 428ZM324 187T305 187T286 196Q286 202 301 217Q327 242 383 262T484 290L527 297L567 356Q624 441 643 467T688 521Q715 550 752 581T795 613T804 603T808 587T778 547T702 444T626 300H637Q663 302 685 306L697 308L703 317Q745 376 792 400Q806 406 818 406Q849 406 849 375Q847 355 831 338T797 312T763 296L747 290Q744 289 735 266T724 241Q722 240 702 232T664 217T645 210Q638 210 638 218Q638 224 653 246T669 270Q669 271 668 271Q663 270 624 264L607 263Q570 199 529 152Q513 133 484 106T409 45T305 -13T193 -36Q109 -36 74 -10T39 50Q39 86 64 121T128 158Q171 158 171 121Q171 97 141 83Q125 75 107 75Q93 75 80 83Q76 71 76 62Q76 29 117 15T207 0Q324 0 494 248L501 258H495Q368 239 330 195Q324 187 305 187ZM775 335Q806 358 806 368Q805 369 804 369Q800 369 791 360Q774 336 775 335"],71:[717,37,610,12,739,"206 318L249 320Q249 327 259 352T282 399Q312 447 366 510T465 610Q588 717 661 717Q695 717 716 701T738 653T704 577Q663 522 610 474T512 397T424 346T359 315T333 306Q331 304 327 290T323 267Q323 229 368 229Q402 229 439 254T505 312T571 382T638 435Q642 437 644 437Q658 437 658 409Q655 403 647 399T624 379T595 326Q583 296 564 267T523 179Q504 126 483 91T423 27Q335 -37 231 -37Q191 -37 157 -30T95 -2T67 53Q67 89 94 123T159 158Q180 158 190 146T200 119Q200 102 178 89T136 75Q128 75 120 78T110 81Q105 81 105 62Q105 38 129 24T180 5T238 1H244Q282 1 319 32Q349 55 371 85T436 190L465 239Q413 192 354 192Q300 192 274 217T245 276Q245 284 242 284Q220 280 187 280Q106 280 59 315T12 409Q12 457 43 508T118 597T210 659T295 683Q308 683 308 675Q308 670 299 658T282 646Q266 646 240 633Q182 606 118 511Q76 448 76 400Q76 368 105 343T206 318ZM677 660Q677 680 646 680Q616 680 565 629Q537 601 514 571Q493 544 455 492T389 398T360 355Q366 357 386 367Q463 406 534 473T641 591T677 660"],72:[718,36,969,29,1241,"331 505Q331 519 382 574T472 629H480Q512 629 529 614T547 576Q547 555 534 532T520 504Q520 493 549 493Q590 493 623 506T668 533L681 546Q731 600 772 641T832 700T852 717Q857 717 860 711T865 697L866 690Q866 688 813 617T708 475T656 403Q682 403 714 404H771L780 416Q1004 707 1167 707Q1209 707 1225 689T1241 646Q1241 604 1209 547T1118 447Q1081 422 1034 405T952 382T888 374T857 370H852L826 334Q733 204 708 144Q691 104 691 76Q691 29 748 29Q768 31 791 48T831 83T862 122T881 146Q883 148 900 148H917Q921 143 921 140T914 127Q810 -8 723 -8Q611 -4 611 100Q611 142 631 191T676 275T721 337T742 367Q716 367 685 366H628L620 355Q618 352 558 268Q486 168 461 141Q405 79 339 34T215 -28Q188 -36 153 -36Q86 -36 58 -11T29 46Q29 82 55 120T123 158Q144 158 154 146T164 119Q164 102 143 89T100 75Q92 75 86 76T77 80T72 82Q67 82 67 60Q67 28 99 14T170 0Q214 0 272 47T419 224L505 340L518 357Q513 357 504 356T467 347T415 330T360 300T308 253Q296 238 295 237H278H274Q256 237 256 243Q256 248 263 256Q291 294 330 321T407 362T476 382T530 393T552 398Q556 402 573 423T600 454Q602 457 604 460T608 465L610 467Q565 455 532 455Q465 455 449 483Q447 487 447 498Q447 513 463 538T479 579Q479 593 463 593Q436 593 385 519Q374 504 371 502T360 499H353H349Q331 499 331 505ZM1195 634Q1195 643 1195 648T1185 662T1157 671Q1130 671 1092 644T1019 579T952 502T901 436L882 409L891 410Q900 411 913 412T934 415Q1081 439 1144 520Q1195 590 1195 634"],73:[717,17,809,59,946,"487 225Q398 255 398 342Q398 410 455 492Q491 545 552 582T669 636T800 673T918 712Q930 717 933 717Q939 717 942 706T946 689Q946 686 915 664T830 591T729 480Q691 429 657 351T615 260Q628 260 663 279T733 339T769 426Q769 442 767 459T764 479Q764 484 766 486Q769 488 781 493T797 498Q802 498 803 494T808 472Q813 442 813 425Q813 369 761 315Q692 246 605 224L592 220L584 209Q547 155 487 106T358 25Q270 -17 191 -17Q143 -17 101 1T59 59Q59 96 85 127T148 158Q169 158 179 146T189 119Q189 102 167 89T125 75Q116 75 109 77T101 81T97 80Q96 77 96 72Q96 50 123 36T204 21H216Q249 21 302 49T411 134Q439 161 459 187Q487 220 487 225ZM460 334Q460 308 472 290T498 268L510 263Q515 263 545 313T626 438T723 561Q751 589 775 609T808 636T817 644H816Q813 644 732 618Q681 601 645 584T585 548T549 514T518 476Q460 390 460 334"],74:[717,314,1052,92,1133,"829 148Q845 148 845 143T841 130T823 109T788 83T730 54T644 22Q637 20 634 19T627 16T622 13T618 10T612 3T604 -6Q510 -112 396 -203T201 -312Q190 -314 171 -314H166Q156 -314 147 -312T123 -304T101 -283T92 -245Q92 -203 117 -160T175 -93Q214 -65 280 -41T390 -6T509 22L532 27L547 47Q673 219 673 225L665 228Q657 231 648 235T627 249T606 270T591 300T584 341Q584 389 614 447T686 544Q735 588 799 615T959 667T1108 713Q1118 717 1119 717Q1125 717 1129 705T1133 689Q1133 686 1115 673Q1051 627 1001 579T918 481T867 403T828 328T805 277Q802 271 801 267T798 261T798 259Q849 270 900 317Q956 371 956 421Q956 438 953 457T950 480Q950 481 950 482L951 484Q953 487 966 492T985 498Q989 498 994 473Q1000 441 1000 423Q1000 362 934 302T790 223L775 220L767 207Q757 191 731 158T685 98T662 63Q662 61 690 70T755 99T811 142L816 148H829ZM646 332Q646 308 659 291T685 268L698 263L735 320Q828 465 865 511Q923 582 1003 643L1005 645Q1004 645 924 620Q775 572 716 492Q646 401 646 332ZM184 -278Q233 -278 311 -212T444 -80L498 -15H496Q468 -20 424 -30T293 -70T174 -133Q167 -140 158 -153T138 -190T127 -232Q127 -278 184 -278"],75:[717,37,914,29,1204,"521 506Q521 493 549 493Q608 493 660 527Q667 531 690 555L736 604Q750 619 777 646T825 694T848 716T852 717Q857 717 860 711T865 697L866 690Q866 687 812 615Q654 404 654 401Q655 401 656 401T659 402T665 403T680 404Q718 404 734 374Q735 370 743 376Q745 377 752 382Q806 416 852 466T933 563T982 623Q1028 666 1075 686T1155 706Q1165 706 1173 705T1186 703T1194 699T1199 695T1201 692T1202 688V687L1204 677Q1204 667 1191 670Q1189 670 1183 670T1174 671Q1137 671 1086 643T1001 564Q970 517 899 449T749 339L739 333L736 322Q730 295 703 253T652 165T628 77Q628 21 681 21Q692 21 698 23Q751 46 817 134L827 148H844Q861 148 864 146Q869 140 859 127Q818 75 761 29T665 -17Q649 -17 633 -12T598 4T569 40T558 100Q558 128 563 152T585 205T609 245T643 294Q647 300 645 300Q633 297 615 297Q607 297 600 298T589 300T584 301Q581 301 569 284T536 236T488 171T418 97T331 28Q233 -37 155 -37Q104 -37 68 -17T29 44Q29 82 55 120T123 158Q144 158 154 146T164 119Q164 102 143 89T100 75Q92 75 86 76T77 80T72 82Q68 82 68 59Q68 37 85 23T123 5T167 0Q203 0 238 21T311 85T382 174T468 288T563 410Q576 426 588 440T607 462T615 472L605 468Q568 456 533 45