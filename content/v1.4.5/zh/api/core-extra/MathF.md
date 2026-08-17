---
title: "MathF"
description: "TaleWorlds.Library 的静态浮点数学工具集：Clamp/Lerp/三角函数/取整/极值，全部以 float 为主、无状态、可直接用类名调用。"
---

# MathF

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public static class MathF`
**Base:** `System.Object`
**Source:** `TaleWorlds.Library/MathF.cs`

## 概述

`MathF` 是一组无状态的静态浮点运算助手：覆盖开方、三角函数、夹紧、线性插值、角度归一、取整与极值比较。引擎和 mod 都直接用 `MathF.Clamp(...)` 这样的类名调用，不需要也不存在实例。

## 心智模型

`MathF` 不是 `System.Math` 的替代品，而是 Bannerlord 全项目共用的「float 优先」数学约定：几乎所有方法返回 `float` 而非 `double`，并把游戏里最常用的夹紧、插值、角度归一化、2π 周期处理封装成一行调用。它没有任何字段或状态，纯粹是函数集合——所以你可以在任意线程、任意时刻直接调用，不用担心副作用；但要清楚它不替你处理 `NaN`/`Infinity`，也不替你保证 `Clamp` 的 `min <= max` 顺序。把它理解为「游戏数值的标准工具箱」，和向量类型 [Vec2](../Vec2/)/[Vec3](../Vec3/) 配合做完整数值运算。

## 何时用 / 何时不要用

- **用**：需要对游戏数值做夹紧、插值、角度运算，或与引擎其它 API 返回/接受的 `float` 对齐时（如相机、动画进度、伤害曲线）。
- **不要用**：需要 `double` 精度的大规模科学计算，优先 `System.Math`；需要向量/矩阵运算请用 [Vec2](../Vec2/)/[Vec3](../Vec3/) 而非逐分量调 `MathF`；它不是随机源（随机见 `MBRandom`，那是另一个类型）。

## 关键成员

按用途分组；括号内为常见调用时机。

### 常量（换算与容差）
- `PI` / `TwoPI` / `HalfPI`：π、2π、π/2。
- `DegToRad` / `RadToDeg`：角度与弧度互转系数。
- `E`：自然常数。
- `Epsilon`：固定为 `1E-05f`，是 `Lerp` 默认的比较容差。

### 根与幂
- `Sqrt(float x)`：开方。负数会返回 `NaN`，传入前用 `IsValidValue` 兜底。
- `Pow(double, double)` 与 `Pow(float, float)`：幂运算；**混合 float/double 的重载已 `[Obsolete("Types must match!", true)]`**，编译即报错。
- `PowTwo32(int)` / `PowTwo64(int)`：返回 `1 << x`，做位掩码/容量对齐时用。
- `Log(float)` / `Log(float, float newBase)` / `Log10(float)`：对数。

### 三角函数
- `Sin` / `Cos` / `Tan` / `Asin` / `Acos` / `Atan` / `Atan2`：标准三角函数。`Atan2(y, x)` 用来从分量反求角度（注意参数顺序是 y 在前）。
- `SinCos(float a, out float sa, out float ca)`：一次同时算出 `sin` 和 `cos`，避免两次查表，做旋转时常用。
- `Tanh`：双曲正切，做平滑归一化时有用。

### 夹紧与插值（最常用）
- `Clamp(float value, float minValue, float maxValue)`：把值限制在 `[min, max]`。**不交换 min/max**，调用方必须保证 `min <= max`。
- `AngleClamp(float angle)`：把任意角度折回 `[0, 2π)` 区间，适合需要连续角度的场合。
- `Lerp(float valueFrom, float valueTo, float amount, float minimumDifference = 1E-05f)`：线性插值；当 `|from - to| <= minimumDifference` 时直接返回 `to`。`amount` 通常取 `0..1`。
- `AngleLerp(float angleFrom, float angleTo, float amount, ...)`：沿最短弧做角度插值，避免 0↔2π 跨边界的「绕远路」。

### 取整
- `Round(double)` / `Round(float)` → `int`；`Round(float, int digits)` → `float`（保留小数位）。**`Round(int)` 已 `[Obsolete("Type is already int!", true)]`**。
- `Floor(...)` / `Ceiling(...)`：下取整/上取整为 `int`。同样有已废弃的 `int` 重载，不要对 `int` 调它们。

### 极值、符号与杂项
- `Abs(double/float/int)`：绝对值。
- `Max` / `Min`：覆盖 `double/float/int/long/uint/short` 多重载，并有三元版本 `Max(float,float,float)` / `Min(float,float,float)`；混合类型重载已过时。
- `MinMax(float a, float b)`：返回 `(float, float)` 元组（小值, 大值），一次拿到区间两端。
- `Sign(float/int)`：符号（-1/0/1）。
- `GreatestCommonDivisor(int a, int b)`：辗转相除法求最大公约数。
- `PingPong(float min, float max, float time)`：三角波，让数值在 `[min, max]` 间来回往返，做循环动画/呼吸效果时用。
- `IsValidValue(float f)`：**非 `NaN` 且非 `Infinity` 才返回 true**。把任何不确定来源的计算结果送入 `Clamp`/`Lerp` 前先校验它。

## 最小真实示例

```csharp
// 1) 把进度限制在 [0,1]，再做线性插值得到 0..100 的插值结果
float rawProgress = playerSkill / requiredSkill;   // 局部变量，示例用
float t = MathF.Clamp(rawProgress, 0f, 1f);
float interpolated = MathF.Lerp(0f, 100f, t);

// 2) 角度归一与最短弧插值：让朝向平滑转向目标
float normalized = MathF.AngleClamp(currentFacing);
float smoothed = MathF.AngleLerp(currentFacing, targetFacing, 0.1f);

// 3) 对不确定来源的结果先用 IsValidValue 兜底，避免 NaN 污染后续运算
float result = MathF.Sqrt(radiusSquared);
if (MathF.IsValidValue(result))
{
    float distance = result;   // result 已确认非 NaN/Infinity，可安全使用
}

// 4) 从分量求角度，并一次性取 sin/cos 做旋转
float angle = MathF.Atan2(directionY, directionX);
MathF.SinCos(angle, out float sa, out float ca);
```

## 风险与陷阱

- **`Clamp` 不交换 `min`/`max`。** 若传入 `min > max`，两个比较（`value < min`、`value > max`）都可能不成立，于是直接返回原值——结果可能落在 `[max, min]` 之外。调用方必须自己保证 `min <= max`。
- **类型必须匹配。** `Max`/`Min`/`Pow` 的混合 `float`/`int` 重载被标 `[Obsolete("Types must match!", true)]`，编译即报错；`Round`/`Floor`/`Ceiling` 的 `int` 重载也已过时。字面量传入时注意 `double` 与 `float` 的推断（加 `f` 后缀）。
- **`Lerp` 的 `minimumDifference` 默认 `1E-05f`。** 当 `|from - to|` 小于等于该容差时直接返回 `to`，可能掩盖「几乎相等」的细微动画停顿；需要更精细收敛时显式传入更小容差。
- **`NaN`/`Infinity` 会原样传播。** `Sqrt(负数)`、`Atan2(0, 0)` 等会产生非有限值，而 `Clamp`/`Lerp` 不会修正它们——`NaN` 一旦进入后续运算会被一路带下去。对外部输入或不稳定计算用 `IsValidValue` 兜底。
- **`float` 精度有限。** `MathF` 全程 `float`，大量累加运算会累积误差，不适合需要 `double` 精度的累计积分或金融式精确计算。

## 依赖关系

- 向量数学：[Vec2](../Vec2/) 与 [Vec3](../Vec3/)——逐分量变换常与 `MathF` 配合。
- 集合：引擎集合里常对元素做 `MathF` 变换，见 [MBList](../MBList/) / [MBReadOnlyList](../MBReadOnlyList/)。
- 战役数据：[TroopRoster](../../campaign/TroopRoster/) 中对成员数量、比例做 `Clamp`/`Lerp` 是典型场景。

- 父级：[core-extra API](../)
- 同级：[MBList](../MBList/) · [MBReadOnlyList](../MBReadOnlyList/)
- 相关：[Vec2](../Vec2/) · [Vec3](../Vec3/) · [TroopRoster](../../campaign/TroopRoster/)
