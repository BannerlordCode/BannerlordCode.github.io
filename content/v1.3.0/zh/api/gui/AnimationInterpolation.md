---
title: "AnimationInterpolation"
description: "缓动曲线查表：三个 public 枚举（Type 4 值 / Function 5 值）加一个 static Ease(type, function, ratio)；Linear 分支直接返回 ratio 完全忽略 function，三个 private struct 才是真正算曲线的实现，Sine 用的是截断到 7 位的 π 字面量。"
---

# AnimationInterpolation

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public static class AnimationInterpolation`
**Base:** 无（静态类，不能实例化，隐式继承 `System.Object`）
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/AnimationInterpolation.cs`（147 行）

## 概述

这个类回答一个很具体的问题：**给定一个归一化进度 `ratio`（通常 0→1），经过某种缓动整形之后应该是什么值。** 它没有状态、没有生命周期、不继承任何东西，全部内容是一个 public 静态方法 `Ease` 加两个 public 嵌套枚举，外加三个 **private** 结构体作为真正的曲线实现。

公开面小得出奇，逐个列出来：

- `public static float Ease(Type type, Function function, float ratio)`（`AnimationInterpolation.cs:10`）——唯一入口。
- `public enum Type { Linear, EaseIn, EaseOut, EaseInOut }`（`:29`）——四种时间形状，决定「先慢后快」「先快后慢」还是「两头慢」。
- `public enum Function { Sine, Quad, Cubic, Quart, Quint }`（`:42`）——五种幂次/三角形状，决定缓动的「锐度」。

三个真正干活的结构体 `EaseInInterpolator`（`:57`）、`EaseOutInterpolator`（`:82`）、`EaseInOutInterpolator`（`:107`）都是 **private**，外部既拿不到也不能派生。`Ease` 的实现体就是一个 `switch (type)`：

```csharp
switch (type)
{
case AnimationInterpolation.Type.Linear: return ratio;
case AnimationInterpolation.Type.EaseIn:  return default(EaseInInterpolator).Ease(function, ratio);
case AnimationInterpolation.Type.EaseOut: return default(EaseOutInterpolator).Ease(function, ratio);
case AnimationInterpolation.Type.EaseInOut: return default(EaseInOutInterpolator).Ease(function, ratio);
default:
    Debug.FailedAssert(string.Format("Brush interpolation type not implemented: {0}", type), "...AnimationInterpolation.cs", "Ease", 41);
    return ratio;
}
```

`default(Struct).Ease(...)` 是 C# 7.1 起对无状态结构的合法写法（等价于 `new EaseInInterpolator().Ease(...)`），编译器把 `Ease` 调用优化成直接取地址，整个「创建插值器」的代价为零。

## 心智模型

**把它当成一条纯函数曲线表，不要当成状态机。** 它不知道时间、不推进进度、也不保存上一帧——`ratio` 完全由调用方算好传进来。整棵树里只有三处调用它，全是「先算好线性比例，再交给它整形」：

1. `BrushRenderer.cs:354`（`AnimateBrushLayerState`）与 `BrushRenderer.cs:517`（`AnimateBrushState`）——这里 `ratio` 是两个关键帧之间的归一化位置，算完之后立刻 `MathF.Clamp(num3, 0f, 1f)` 再 `Ease`（`BrushRenderer.cs:353` 与 `:516` 分别是这两处的 clamp 行）。缓动类型来自 [BrushAnimation](../BrushAnimation) 的 `InterpolationType` / `InterpolationFunction` 两个属性。
2. `BaseTypes/Widget.cs:1992`——控件自身的 VisualDefinition 过渡动画：`AnimationInterpolation.Ease(this.VisualDefinition.EaseType, this.VisualDefinition.EaseFunction, num2)`。

**理解「Type 与 Function 是正交的两维」是这张表的关键。** `Type` 决定曲线的整体走势（三段结构），`Function` 决定每一段的陡峭程度。把 4×5 二十种组合列出来会是张很大的表，但每个 `EaseInInterpolator.Ease` 的方法体其实只有五行 `switch`：

- `Sine` → `1f - MathF.Cos(t * 3.1415927f / 2f)`（进）或 `MathF.Sin(t * 3.1415927f / 2f)`（出）
- `Quad` → `t * t`（进）／`1f - (1f - t) * (1f - t)`（出）
- `Cubic` → `t * t * t`（进）／`1f - MathF.Pow(1f - t, 3f)`（出）
- `Quart` → 四连乘（进）／`1f - MathF.Pow(1f - t, 4f)`（出）
- `Quint` → 五连乘（进）／`1f - MathF.Pow(1f - t, 5f)`（出）

所以选型的直觉是：**「进/出」决定方向，「阶数」决定硬度。** `Quint` 的 `EaseIn` 在前半段几乎是贴地的，到最后一段突然窜上去；`Sine` 的两端则非常圆润。

`EaseInOut` 是唯一结构不同的一个：它对每种 function 都做 `if (t >= 0.5f)` 分支。进半段是纯多项式（`2t²` / `4t³` / `8t⁴` / `16t⁵`），出半段是镜像的 `1 - pow(-2t+2, n) / 2`。只有 `Sine` 用了闭合式 `-(MathF.Cos(3.1415927f * t) - 1f) / 2f`——**不分支，直接一条曲线过 0.5**。这意味着 `EaseInOut + Sine` 在中点处的曲率与另外四种并不连续一致。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `Ease` | `public static float Ease(Type type, Function function, float ratio)`（`:10`） | 唯一入口。`ratio` 是调用方算好的线性进度，返回整形后的进度。`Linear` 分支**直接返回 `ratio`、完全忽略 `function`**；`default` 分支走 `Debug.FailedAssert("Brush interpolation type not implemented: {0}")` 后仍返回 `ratio`——所以非法输入是「静默退化成线性」而不是抛异常。返回值不保证落在 `[0,1]`（见风险一节）。 |
| `Type` | `public enum Type { Linear, EaseIn, EaseOut, EaseInOut }`（`:29`） | 时间形状。`Linear` 恒等；`EaseIn` 慢起快收；`EaseOut` 快起慢收；`EaseInOut` 两头慢。序号 0→3，`BrushFactory` 解析 XML 属性 `InterpolationType` 时按名字匹配（`BrushFactory.cs:94`）。 |
| `Function` | `public enum Function { Sine, Quad, Cubic, Quart, Quint }`（`:42`） | 曲线硬度。二到五次幂，外加一个正弦。对 `Linear` 无意义。XML 属性名是 `InterpolationFunction`（`BrushFactory.cs:106`）。 |
| `EaseInInterpolator` | `private struct EaseInInterpolator`（`:57`），方法 `public float Ease(Function function, float t)`（`:60`） | 私有实现，外部拿不到。方法体的 `default` 分支 `Debug.FailedAssert("Brush ease function not implemented: {0}")` 后返回 `t`。 |
| `EaseOutInterpolator` | `private struct EaseOutInterpolator`（`:82`），方法 `public float Ease(Function function, float t)`（`:85`） | 私有实现，`1 - (1-t)^n` 与 `sin` 两种写法。 |
| `EaseInOutInterpolator` | `private struct EaseInOutInterpolator`（`:107`），方法 `public float Ease(Function function, float t)`（`:110`） | 私有实现，四种幂次用 `t >= 0.5f` 分支，`Sine` 用闭合式不过分支。 |

## 真实示例

直接调用，验证三条曲线在 0.25 处的差异（`EaseInOut` 在中点前，值为 0.125；`EaseOut` 已过 0.75；`EaseIn` 才刚起步）：

```csharp
private static void PrintEasedSamples()
{
    float quarter = 0.25f;
    float linear = AnimationInterpolation.Ease(AnimationInterpolation.Type.Linear, AnimationInterpolation.Function.Quint, quarter);
    float easeIn = AnimationInterpolation.Ease(AnimationInterpolation.Type.EaseIn, AnimationInterpolation.Function.Quint, quarter);
    float easeOut = AnimationInterpolation.Ease(AnimationInterpolation.Type.EaseOut, AnimationInterpolation.Function.Quint, quarter);
    float easeInOut = AnimationInterpolation.Ease(AnimationInterpolation.Type.EaseInOut, AnimationInterpolation.Function.Cubic, quarter);
}
```

手写一段「进慢出慢」的缓动，去驱动两帧之间的一次插值——这正是 `BrushRenderer` 的用法形态：

```csharp
private static float BlendSlowly(float from, float to, float ratio, AnimationInterpolation.Type type)
{
    float eased = AnimationInterpolation.Ease(type, AnimationInterpolation.Function.Sine, ratio);
    return from + (to - from) * eased;
}
```

## 风险与边界

- **`Linear` 忽略 `function`。** 传 `Linear + Quint` 和传 `Linear + Sine` 得到完全相同的结果。所以「把 InterpolationFunction 改成 Quint 就该更硬」在 `InterpolationType = Linear` 时是无效操作。
- **`ratio` 不做钳制。** 三个 interpolator 都没有 `Mathf.Clamp`。传 1.5 进去，`EaseIn + Quint` 会返回 1.5⁵ ≈ 7.59，`EaseOut + Quint` 会返回 1 - (1-1.5)⁵ = 1.03125。**调用方自己负责把 `ratio` 约束在 `[0,1]`**——`BrushRenderer.cs:353` 与 `:516` 在调用前的那两行 `MathF.Clamp(num3, 0f, 1f)` 就是这个责任的全部实现。
- **π 是手写截断值。** 四处出现的 `3.1415927f` 是 `float` 精度的 π（真实值 3.14159265358979...）。用 `MathF.PI` 结果会有一丝差别。这不是 bug，但它意味着**你无法通过换用 `MathF.PI` 得到与引擎完全一致的 Sine 结果**。
- **`EaseInOut + Sine` 的中点不连续。** 前面提到它不过 0.5 分支，和另外四种的分支写法不是同一族。需要严格的段间平滑时选幂次类而不是 Sine。
- **非法值不抛异常。** 两条 `default` 分支都走 `Debug.FailedAssert` 然后返回输入值本身（`ratio` / `t`）。这意味着**越界的枚举值（cast 出来的 `(Function)99`）会退化成恒等映射**，表现和 `Linear` 一样，绝不会让你看到崩溃。
- **静态类，不能 new，也不能继承。** 三条曲线实现是 private struct，没有注入点。想换一套曲线只能自己写一份。
- **`float` 与 `double` 的边界。** `EaseInOut` 的出半段是 `1f - MathF.Pow(-2f * t + 2f, 3f) / 2f`，除以 2 之后仍是 `float`；但 `Sprite` 分支（在 [BrushRenderer](../BrushRenderer) 里）会把它提升成 `double` 再比 0.9。极端精度要求下不要混用不同文件里的两种数值写法。

## 跨版本提示

五棵源码树（`1.3.0` / `1.3.15` / `1.4.6` / `1.4.7` / `1.5.3`）的 public/protected 签名集合比对结果：5 条签名（1 个 `Ease` + 2 个枚举声明）在 `1.3.15` / `1.4.6` / `1.4.7` 上**与 1.3.0 完全一致**，1.5.3 也是 +0/-0。字节哈希则是 1.3.0 `bcb6a699` → 1.3.15 `ecb899b2` → 1.4.6/1.4.7 `c7b8deba` → 1.5.3 `e47890fd`，四个值互不相同。

公开形状从 1.3 到 1.5 一次都没变，但**实现体改过多次**。这意味着：如果你依赖 `Ease` 的**数值结果**（比如用固定采样值做回归测试），跨版本可能对不上；如果你只依赖它是一个「把 0→1 进度做单调整形」的函数，跨版本完全安全。

## 依赖关系

- 数据来源：[BrushAnimation](../BrushAnimation) 的 `InterpolationType` / `InterpolationFunction` 两个属性直接决定每次 `Ease` 调用的形状，这两个属性又由 [BrushFactory](../BrushFactory) 从 XML 属性 `InterpolationType` / `InterpolationFunction` 解析而来
- 主要消费者：[BrushRenderer](../BrushRenderer) 的 `AnimateBrushLayerState`（`BrushRenderer.cs:354`）与 `AnimateBrushState`（`BrushRenderer.cs:517`）——这两处是 UI 上一切 Brush 动画的速度感来源
- 次要消费者：[Widget](../Widget) 的 VisualDefinition 过渡（`BaseTypes/Widget.cs:1992`），类型是 [VisualDefinition](../VisualDefinition)
- 曲线结果最终落到 [BrushLayerState](../BrushLayerState) / [BrushState](../BrushState) 的字段上（`SetValueAsFloat` / `SetValueAsColor` / `SetValueAsSprite`）
- 断言依赖：`Debug.FailedAssert` 来自 `TaleWorlds.Library.Debug`
- 桶首页：[gui API 分区](../)