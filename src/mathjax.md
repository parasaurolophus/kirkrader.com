# mathjax

<!-- toc -->

## &lambda;-Calculus

A deliberately silly example of the &lambda;-calculus:

\\[
\begin{align*}
      \text{Let } \Omega & = \omega \\ \omega \\\\
    \text{where } \omega & = \lambda x.x \\ x
\end{align*}
\\]

## Set Theory

The cardinality of any set's power set (set of all subsets) is \\(2^c\\) where
\\(c\\) is the cardinality of the given set. Every set's cardinality is strictly
less than that of its power set.

\\[
\begin{align*}
      \forall s & \left( |\mathcal{P}(s)| = 2^{|s|} \right) \\\\
      \forall s & \left( |s| < |\mathcal{P}(s)| \right) \\\\
  \text{where } & \mathcal{P}(s) = \text{ the power set of } s
\end{align*}
\\]

The set of natural numbers, \\(\mathbb{N}\\) a.k.a. \\(\omega\\):

\\[
\begin{align*}
  \mathbb{N} & = \omega = \\{ x | ( x = 0 ) \lor \exists y ( ( y \in \mathbb{N})
    \land ( x = y + 1 ) ) \\} \\\\
|\mathbb{N}| & = |\omega| = \aleph_0
\end{align*}
\\]

A _countably infinite_ set is one for which there is a bijective (i.e.
one-to-one) mapping between its members and \\(\mathbb{N}\\). By definition, the
cardinality of all countably infinite sets is \\(\aleph_0\\), i.e. equal to \\(
| \mathbb{N} | \\), since any two sets have the same cardinality if there is a
bijection between them.

Cantor's approach hinged on identifying sets that were infinite and naturally
ordered but not countable. To show that the set of real numbers,
\\(\mathbb{R}\\), is such a set, start by assuming that you can define a
countable set of real numbers between any two real numbers in the continuum
(points on the number line). It does not matter what rule you use to construct
this list, since the crux of Cantor's argument is to show that any such rule
cannot represent all the points of the real number line between the chosen end
points. As for any countable set, we can look at it as a mapping from natural
numbers to elements of our set. Real numbers are represented as potentially
infinite sequences of digits, as in:

\\[
\begin{align*}
<0, \\ &0.427 \dots> \\\\
<1, \\ &0.613 \dots> \\\\
<2, \\ &0.590 \dots> \\\\
\vdots &
\end{align*}
\\]

Cantor's argument for showing that any such list cannot include all the real
numbers within the selected range proceeds by constructing a new sequence of
digits representing a real number that cannot already be in our list. He does so
by applying a simple for adding each successive digit to the new real number
based on the sequences of digits representing the real numbers that are already
included. Specifically, the rule is that the \\(n \text{th}\\) digit in the new
sequence must differ from the \\(n \text{th}\\) digit in the \\(n \text{th}\\)
entry in the original list.

\\[
\begin{align*}
<0, \\ &0.\mathbf{4}27 \dots> \\\\
<1, \\ &0.6\mathbf{1}3 \dots> \\\\
<2, \\ &0.59\mathbf{0} \dots> \\\\
\vdots & \\\\
\hline
<r, \\ &0.\mathbf{502 \dots}>
\end{align*}
\\]

In the preceding example, the first digit in our new sequence, \\(r\\), is 5.
The only signfigance to 5 here is that it is different from 4, the first digit
in the first entry in the original list. The second digit is 0, which differs
from the second digit, 1, in the second entry. The third digit is 2, which
differs from the third digit, 0, in the third row. And so on. The new sequence
of digits is guaranteed to differ in at least one decimal place from every
sequence in the original list, so it cannot already be included. If we add
\\(r\\) to our list, we can repeat the procedure to construct yet another new
sequence, _ad infinitum_. This means that there are infinitely more real numbers
between any two given ones than can be bijectively mapped to the natural
numbers. \\(|\mathbb{R}|\\) is infinitely larger than \\(|\mathbb{N}|\\).

Cantor's demonstration that the set of real numbers, \\(\mathbb{R}\\) is not
countable means that \\( |\mathbb{R}| > |\mathbb{N}| \\). In particular, \\(
|\mathbb{R}| = 2^{\aleph_0} \\), which also happens to be the cardinality of
\\(\mathcal{P}(\mathbb{N})\\). The _Continuum Hypothesis_ is that \\( \aleph_1 =
2^{\aleph_0} \\). If true, that makes the the cardinalties of the sets of
natural and real numbers the two smallest infinite quantities. But since all
such hypotheses involving "completed infinities" (as mathematicians used to say)
involve definition and reasoning by analogy from finite sets, the Continuum
Hypothesis will remain a widely held conjecture but cannot actually be proven
formally for the same reason that one must accept the _axiom of choice_ for
infinite sets &mdash; or not. (Once upon a time, the axiom of choice was
considered controversial exactly because it extends a common-sense feature of
finite sets to ones with infinite cardinalities. One accepts the axiom if one
accepts the legitimacy of saying that what is true of finite sets must be true
of infinite ones, but there was a time when the mainstream view of infinite sets
among mathematicians was similar to the proverbial reaction of the farmer seeing
a rhinoceros for the first time: "there ain't no such animal!" Modern
mathematicians almost universally accept the axiom of choice because it is both
intuitive and they have become accustomed to reasoning about infinite sets in
this way without any qualms about the reality of "completed infinities.")

## Generic Math

Rationale for division rules in [IEEE
754](https://en.wikipedia.org/wiki/IEEE_754):

1. Given that

   \\[
        \begin{align*}
                          & { \lim_{x \to \infty}\frac{1}{x} } = 0 \\\\
            \therefore \\ & { \lim_{x \to 0}\frac{1}{x} } = \infty
        \end{align*}
   \\]

2. and

   \\[
   \begin{align*}
                      & { \frac x x } = 1 \\\\
        \text{where } & x \neq 0
   \end{align*}
   \\]

3. but since \\(\infty \neq 0\\):

   \\[
        \frac x {\pm 0} =
            \begin{cases}
                         \mathtt{NaN} & \text{where } x = \pm 0 \\\\
                \pm \mathtt{INFINITY} & \text{otherwise}
            \end{cases}
   \\]

   where

   - `NaN` is the IEEE 754 constant meaning "Not a Number"

   - `INFINITY` is the IEEE 754 constant meaning \\(\infty\\)

   - Both 0 and `INFINITY` are signed in IEEE 754

   - Both 0 and `INFINITY` follow the usual rules of sign-agreement
     for division in IEEE 754
