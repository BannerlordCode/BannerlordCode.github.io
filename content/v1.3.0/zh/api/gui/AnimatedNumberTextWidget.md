---
title: "AnimatedNumberTextWidget"
description: "数字滚动文本控件：继承 TextWidget，用 AnimationDelay/AnimationDuration/ReferenceNumber/Number/AutoStart 五个属性驱动一段 0 起的整数爬升；斜坡分子是 ReferenceNumber 而不是 Number，配错会让动画永远不结束。"
---

# AnimatedNumberTextWidget

**Namespace:** TaleWorlds.GauntletUI.ExtraWidgets
**Module:** TaleWorlds.GauntletUI
**Type:** `public class AnimatedNumberTextWidget : TextWidget`
**Base:** `TextWidget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/AnimatedNumberTextWidget.cs`（全文 197 行）

## 概述

`AnimatedNumberTextWidget` 就是一个「数字从 0 滚到你给的目标值」的文本控件，属于 mod/模块作者自定义控件时最常抄的那一类小工具。它继承 [TextWidget](../TextWidget)，因此能直接用 `Text`、`IntText`、`FontSize`、`Color` 之类的全部文本属性；自己额外加的是五个带 `[Editor(false)]` 的属性和两个公开方法：

- `AnimationDelay`（`:52`）——启动后先静默等待多少秒才开始滚，纯 `float`。
- `AnimationDuration`（`:74`）——爬升过程本身持续多少秒。
- `ReferenceNumber`（`:96`）——**斜坡的分子**，见下文，这是最容易配错的一个。
- `Number`（`:118`）——目标值，也就是最终停在屏幕上的数字。
- `AutoStart`（`:140`）——`Number` 变化时是否自动重播。

方法只有两个公开的：`StartAnimation()`（`:31`）与 `Reset()`（`:40`）。全部逻辑在 `OnUpdate(float dt)`（`:16`）里，只有十九行——**没有协程、没有定时器、没有动画播放器**，纯粹靠 `dt` 累加。这是它跟 GauntletUI 主体那套 [BrushRenderer](../BrushRenderer) 关键帧动画完全不同的两种风格。

`Number` 的 setter 是整个类的触发点：

```csharp
public int Number
{
    get { return this._number; }
    set
    {
        if (this._number != value)
        {
            this._number = value;
            base.OnPropertyChanged(value, "Number");
            this.NumberChanged();
        }
    }
}
```

而私有的 `NumberChanged()`（`:45`）只有两行：`if (this.AutoStart) { this.StartAnimation(); }`。所以「赋值 `Number` 就自动播一遍」这件事完全由 `AutoStart` 一个 bool 控制，`StartAnimation` 本身不知道是谁调它的。

## 心智模型

把整段逻辑当成**一根从 0 出发、匀速爬升、撞到目标就停的直线**，斜率由 `ReferenceNumber / AnimationDuration` 决定。`OnUpdate` 的核心三行是：

```csharp
this._timePassed += dt;
if (this._timePassed >= this.AnimationDelay)
{
    float num = this._timePassed - this.AnimationDelay;
    this._currentNumber = (int)(num / this.AnimationDuration * (float)this.ReferenceNumber);
    this._currentNumber = MathF.Min(this._currentNumber, this.Number);
    if (this._currentNumber == this.Number) { this._isAnimationActive = false; }
    base.IntText = this._currentNumber;
}
```

三个推论，每一个都是写代码时必须知道的：

**第一，爬升的终点是 `MathF.Min(斜坡值, Number)`。** 也就是说斜坡本身会越过 `Number` 然后被夹住。所以：

- `ReferenceNumber == Number` → 标准用法：斜坡正好落在目标上，`(int)` 截断让最后一帧精确命中，`_isAnimationActive` 熄灭，干净收尾。
- `ReferenceNumber > Number` → 斜坡更陡，但会被 `MathF.Min` 提前夹住。动画表现为「比预期快一点到，然后停住」，逻辑上仍然会正常结束。
- `ReferenceNumber < Number` → **斜坡永远到不了 `Number`**，`_currentNumber` 卡在 `ReferenceNumber`（更准确地说卡在不超过它的最大整数），`_currentNumber == this.Number` 永不成立，`_isAnimationActive` 永远为真。表现是：文字停在一个错的值上、每帧还在写 `IntText`、永不停机。这是这个控件最严重的一个坑。

**第二，`StartAnimation` 从头开始，不是从当前值接着数。**

```csharp
public void StartAnimation()
{
    if (this.AnimationDuration <= 0f || this.ReferenceNumber <= 0) { return; }
    this._isAnimationActive = true;
    this._currentNumber = 0;
    base.IntText = 0;
    this._timePassed = 0f;
}
```

无条件把显示值打到 0。所以它**没有「从 5000 递减到 3000」这个能力**——每次 `StartAnimation()` 都是 0 起的重新爬升。想做递减显示只能自己写派生类覆盖 `OnUpdate`，或干脆不用它。

**第三，两个守卫条件会让 `StartAnimation` 静默失效。** `AnimationDuration <= 0f` 或 `ReferenceNumber <= 0` 时方法直接 `return`，**不做任何事、也不报错**。`AnimationDuration` 为 0 本来会导致下面的除零，所以这个守卫同时也是除零保护。prefab 里忘了填 `AnimationDuration`（`[Editor(false)]` 意味着属性面板不暴露它，只能靠 prefab 属性序列化赋值）就是「数字永远显示 0」。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| 构造函数 | `public AnimatedNumberTextWidget(UIContext context) : base(context)`（`:13`） | 空实现，只转基类。控件的私有字段全部是默认零值，所以**刚构造完时 `AnimationDuration = 0f`、`ReferenceNumber = 0`、`AutoStart = false`，直接 `StartAnimation()` 不会有任何反应**。 |
| `AnimationDelay` | `[Editor(false)] public float AnimationDelay { get; set; }`（`:52`） | 静默等待秒数。在 `OnUpdate` 里以 `_timePassed >= AnimationDelay` 为门限，通过后用 `_timePassed - AnimationDelay` 作为已滚时长。值变化时 `OnPropertyChanged(value, "AnimationDelay")`。运行期改它会让 `_timePassed` 相对位置突变。 |
| `AnimationDuration` | `[Editor(false)] public float AnimationDuration { get; set; }`（`:74`） | 爬升总时长，同时是斜坡的分母。`<= 0f` 时 `StartAnimation` 直接放弃。 |
| `ReferenceNumber` | `[Editor(false)] public int ReferenceNumber { get; set; }`（`:96`） | **斜坡分子，不是目标值**。`<= 0` 时 `StartAnimation` 放弃。必须 `>= Number` 才能保证动画会终止。 |
| `Number` | `[Editor(false)] public int Number { get; set; }`（`:118`） | 目标值兼上限（经 `MathF.Min`）。**setter 会在值变化时 `OnPropertyChanged` 并调 `NumberChanged()`**，后者在 `AutoStart` 为真时启动动画。运行期反复赋同一个值不会触发任何东西。 |
| `AutoStart` | `[Editor(false)] public bool AutoStart { get; set; }`（`:140`） | 默认 `false`（字段 `_autoStart` 无初始化）。设真后 `Number` 一变就自动 `StartAnimation()`，用完记得改回 `false`，否则下一次赋值会把正在播的动画打断并归零。 |
| `StartAnimation` | `public void StartAnimation()`（`:31`） | 从 0 开始重播。先做两个守卫（时长 > 0、分子 > 0），任何一条不满足就**静默返回**；通过后置 `_isAnimationActive = true`、`_currentNumber = 0`、`IntText = 0`、`_timePassed = 0f`。无返回值。 |
| `Reset` | `public void Reset()`（`:40`） | 立刻停机并把显示值打回 0：`_isAnimationActive = false; _currentNumber = 0; base.IntText = 0;`。**注意它不重置 `_timePassed`**——紧接着再 `StartAnimation()` 时 `_timePassed` 会被清零，所以成对使用没问题；单独 `Reset()` 之后若重新 `AutoStart` 触发，也是干净的。 |
| `OnUpdate` | `protected override void OnUpdate(float dt)`（`:16`） | 全部动画逻辑所在。首句 `if (!this._isAnimationActive) return;`，所以静止时每帧开销只有一次 bool 判断。 |
| `NumberChanged` | `private void NumberChanged()`（`:45`） | `AutoStart` 的唯一落点。私有，外部调不到。 |

## 真实示例

把它挂进控件树并让 `Number` 的赋值自动驱动动画——注意斜坡分子必须不小于目标值：

```csharp
private static AnimatedNumberTextWidget BuildXpCounter(UIContext context, Widget host)
{
    AnimatedNumberTextWidget counter = new AnimatedNumberTextWidget(context);
    host.AddChild(counter);

    counter.AnimationDelay = 0.2f;
    counter.AnimationDuration = 0.75f;
    counter.ReferenceNumber = 100;   // 斜坡分子
    counter.AutoStart = true;        // Number 一变就自动重播
    return counter;
}

private static void SetXp(AnimatedNumberTextWidget counter, int xp)
{
    counter.ReferenceNumber = MathF.Max(xp, 1);  // 分子永远 >= 目标值，动画才会终止
    counter.Number = xp;
}
```

需要「先归零、停住、再手动开始」的场景：

```csharp
private static void ResetThenReplay(AnimatedNumberTextWidget counter)
{
    counter.Reset();          // 立刻停机，显示 0
    counter.StartAnimation(); // 再从 0 爬一次
}
```

## 风险与边界

- **`ReferenceNumber` 配小了动画永不结束。** 这是本类唯一的「静默失败」：`_isAnimationActive` 永远为真，每帧 `base.IntText = this._currentNumber` 一直写，值停在斜坡顶。判断方法很简单——显示的数字永远不等于你设的 `Number`。**永远让 `ReferenceNumber >= Number`。**
- **`StartAnimation` 的两个守卫是静默的。** `AnimationDuration <= 0f` 或 `ReferenceNumber <= 0` 时直接返回，既不抛异常也不写日志。对比一下 [BrushLayer](../BrushLayer) 里那些同类分支都会走 `Debug.FailedAssert`——这里没有。别指望从崩溃/断言上发现配置错误。
- **不会倒数。** `StartAnimation()` 无条件把 `_currentNumber` 与 `IntText` 归 0，从旧值往新值「减小」的场景一律表现为「跳到 0 再往上爬」。
- **`Number` 变化即重播（当 `AutoStart` 为真）。** 倒计时或高频数值更新场景下每帧赋一次 `Number` 会把动画反复打回 0。要么关掉 `AutoStart` 自己掌握节奏，要么在赋值前判一次 `if (counter.Number != xp)`。
- **`AutoStart` 没有自动关。** 它是普通 bool，`StartAnimation` 跑完之后不会复位。所以一个「播一次就不该再播」的控件，必须在第一次触发后把 `AutoStart` 设回 false。
- **`Reset` 不清 `_timePassed`。** 单独调 `Reset()` 会留下一个未清的时间戳；它不影响后续行为（因为 `_isAnimationActive` 为假时 `OnUpdate` 直接返回，`_timePassed` 也不会被累加），但如果你派生类覆盖了 `OnUpdate` 并依赖 `_timePassed`，就要自己小心。
- **`base.IntText` 而不是 `base.Text`。** 动画只写 `TextWidget.IntText`。如果你在 prefab 或代码里另外设了 `Text`，两个属性会互相打架，显示哪个取决于 `TextWidget` 内部的处理——本控件不会替你协调。
- **`[Editor(false)]` 让它在属性面板里不可见。** 五个属性全部带这个标注，`BrushFactory`/prefab 系统不会把它们当作可从 prefab 生成的绑定项暴露出来。纯代码构建控件是它的正道。
- **每帧一次 `MathF.Min` 与一次整数转换。** 目标值很大（比如百万级）且动画期长时，每帧的 `(int)` 截断会产生「同一数字连续显示若干帧」的阶梯感，这是设计使然而非 bug。
- **`_timePassed` 会无限增长吗？** 不会：动画终止的唯一路径是 `_currentNumber == this.Number`，那条分支置 `_isAnimationActive = false` 后 `OnUpdate` 首句就 return。但如果 `ReferenceNumber < Number`，`_timePassed` 会持续累加到 float 精度耗尽为止——那大概是几个小时连续运行之后的事。

## 跨版本提示

对 `bannerlord-1.3.0` / `1.3.15` / `1.4.6` / `1.4.7` / `1.5.3` 五棵树的 public/protected 签名集合做比对：10 条签名在 1.3.15 / 1.4.6 / 1.4.7 上**与 1.3.0 完全一致（增减 0）**，1.5.3 也一致。字节哈希显示 1.3.0 是 `e43f39c3`、1.3.15 起统一变成 `06150050` 并一直保持到 1.4.7，1.5.3 又是 `4c64ec60`。

也就是说：**公开形状从 1.3.15 起就冻结了**，1.3.0 → 1.3.15 之间有过一次实现层改动但没有动 API。升级时不需要为这个类改代码。

注意它的程序集名是 `TaleWorlds.GauntletUI.ExtraWidgets`（模块字段写的是 `TaleWorlds.GauntletUI`），与同桶里绝大多数类型的程序集不同；引用时需要单独引入这个模块。

## 依赖关系

- 基类：[TextWidget](../TextWidget)（→ [ImageWidget](../ImageWidget) → [Widget](../Widget)），动画写的是基类的 `IntText`
- 依赖的上下文对象：[UIContext](../UIContext) 决定控件资源（默认 Brush / Font / Sprite）
- 若要自己派生做递减动画，唯一要覆盖的是 `protected override void OnUpdate(float dt)`；`_isAnimationActive` / `_currentNumber` / `_timePassed` 三个私有字段派生类**访问不到**，所以覆盖时只能依赖公开属性重新算一遍
- 同属自定义控件集合的兄弟页：[AnimatedDropdownWidget](../AnimatedDropdownWidget)（组合控件路线）与 [BrushRenderer](../BrushRenderer)（关键帧动画路线），两者代表了这个控件层完全不同的两种实现风格
- 桶首页：[gui API 分区](../)