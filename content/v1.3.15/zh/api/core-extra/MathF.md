---
title: "MathF"
description: 'Bannerlord 里替代 System.Math 的浮点/标量数学工具箱：三角函数、插值、夹取、取整，以及一批编译期数学常量。'
---
# MathF

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class MathF`
**Base:** 无（静态类，直接继承自 `System.Object`）
**File:** `TaleWorlds.Library/MathF.cs`

## 一句话职责

它把 `System.Math` 包装成一套始终返回 `float`（而不是 `double`）的方法集合，外加角度夹取、插值、PingPong 等游戏常用运算和一批数学常量，避免 mod 代码里到处写 `(float)Math.Sin(...)` 这种强制转换。

## 心智模型

`MathF` 是 `TaleWorlds.Library` 里的静态工具类，属于 Foundation（基础数学）层，没有任何实例、不持有状态、不依赖任何游戏系统——纯函数集合。调用方随时可从任意线程、任意层（Campaign / Mission / UI）直接 `MathF.Xxx(...)` 使用，无需获取实例。它和 `MBMath`（`TaleWorlds.Core`，偏玩法/概率/平滑曲线）是两套互补工具：底层标量运算走 `MathF`，玩法相关（如平滑朝向、加权随机）走 `MBMath`。注意 `MathF` 的方法大量是 `float` 重载，和 `System.Math` 的 `double` 默认不同，混用容易因类型不匹配触发那些标了 `[Obsolete("Types must match!", true)]` 的重载而编译失败。

生命周期：不需要创建，全程存在。

## 何时用 / 何时不要用

- **用**：需要 `float` 版本的 `Sin/Cos/Sqrt/Atan2`、把值夹在 `[min,max]`（`Clamp`）、做线性插值（`Lerp`）、角度插值（`AngleLerp`/`AngleClamp`）、取整/地板/天花板、取最值（`Max`/`Min`/`MinMax`）、以及使用 `PI`/`TwoPI`/`DegToRad` 等常量。
- **不要用**：需要 `double` 高精度长周期积分——直接用 `System.Math`；需要玩法曲线/概率/朝向平滑——用 `MBMath`；需要向量/矩阵运算——用 `Vec3`/`MatrixFrame`。另：那几个 `Pow(float,double)`、`Min(int,float)` 等重载已被标 `Obsolete` 且会编译报错，别用，改用自己的类型一致版本。

## 依赖图
- [本区域目录](../)
- [MBMath —— Core 层的玩法数学助手，与 MathF 互补](../MBMath)
- [Vec3 —— 三维向量， MathF 常量常用于其构造](../Vec3)
- [MatrixFrame —— Rotate 内部调用 MathF.SinCos](../MatrixFrame)
- [SDK 总览：各层职责与边界](../../../architecture/sdk-overview)
- [崩溃边界：类型不匹配与浮点陷阱](../../../architecture/crash-boundaries)

## 风险段

- **类型不匹配即编译失败**：`Pow(float, double)`、`Max(float, int)`、`Min(int, float)`、`Round(int)`、`Floor(int)`、`Ceiling(int)` 都标了 `[Obsolete(..., true)]`，`true` 代表编译期就报错。务必保证实参类型一致（都 `float` 或都 `int`）。
- **`float` 精度**：`MathF` 全程 `float`，累加循环（如逐帧 `Lerp`）会累积误差；对精度敏感的逻辑（如大世界坐标距离）考虑 `double` 或自行容差。
- **`PingPong` 的整数截断**：它先把 `min/max/time` 各乘 100 转 `int` 再算，入参超出约 ±2 千万或小数位超过 0.01 会失真，只适合小范围归一化时间。
- **`AngleClamp` 不归一化到 [-π,π]**：它把角度折回 `[0, 2π)`，若你的逻辑期望负角要先自行处理。
- **除零/非法值**：`IsValidValue(f)` 可快速筛掉 `NaN`/`Infinity`，在把外部数据喂给 `Atan2`/`Log`/`Pow` 前先校验，避免传播脏值。

## 成员说明

### 三角函数（均返回 `float`）
- `Sqrt/Sin/Cos/Tan/Asin/Acos/Atan/Atan2/Tanh`：对应 `System.Math` 的 `float` 版本；`Atan2(y, x)` 注意参数顺序是 y 在前。
- `void SinCos(float a, out float sa, out float ca)`：一次调用同时拿到 `sin` 与 `cos`，`MatrixFrame.Rotate` 内部就用它；比分别调两次更快。
- `Log(float)` / `Log(float, float newBase)` / `Log10(float)`：自然对数、指定底对数、以 10 为底。

### 幂与常量
- `Pow`：`Pow(double,double)` 与 `Pow(float,float)` 可用；其余重载已废弃。
- `PowTwo32(int)` / `PowTwo64(int)`：返回 `1 << x`（或 `1UL << x`），算 2 的整数次幂。
- 常量：`PI`(3.1415927)、`TwoPI`(6.2831855)、`HalfPI`(1.5707964)、`E`(2.7182817)、`DegToRad`(0.017453292)、`RadToDeg`(57.29578)、`Epsilon`(1E-05)。用于 `a * MathF.DegToRad` 这类角度换算。

### 夹取、插值、循环
- `float Clamp(float value, float minValue, float maxValue)`：把值限制在 `[min,max]`，越界返回边界，无 side-effect。
- `float AngleClamp(float angle)`：把角度折回 `[0, 2π)`。
- `float Lerp(float valueFrom, float valueTo, float amount, float minimumDifference = 1E-05f)`：线性插值；当两端差小于 `minimumDifference` 直接返回 `valueTo`，可避免抖动。
- `float AngleLerp(float angleFrom, float angleTo, float amount, ...)`：考虑环绕的最短路径角度插值（走 `[-π,π]` 最近方向）。
- `float PingPong(float min, float max, float time)`：时间在 `[min,max]` 间往返。

### 取整与最值
- `Round/Floor/Ceiling`：均有 `float`/`double` 重载（返回 `int`）；`int` 重载已废弃。
- `Abs`：`float`/`double`/`int` 重载。
- `Max`/`Min`：多组 `float`/`int`/`long`/`uint` 重载，并有三参 `Max(a,b,c)`/`Min(a,b,c)`；`MinMax(float a, float b)` 以 `(小, 大)` 元组返回。
- `GreatestCommonDivisor(int a, int b)`：欧几里得算法求最大公约数。
- `Sign(float)` / `Sign(int)`：符号（-1/0/1）。
- `IsValidValue(float f)`：非 `NaN` 且非无穷时返回 `true`。

## 最小真实示例

示例 1：把角度在每帧朝目标插值，并换算成朝向向量。

```csharp
float currentYaw = MathF.AngleLerp(currentYaw, targetYaw, 0.1f);
Vec3 forward = new Vec3(MathF.Sin(currentYaw), MathF.Cos(currentYaw), 0f, -1f);
```

示例 2：把生命值比例夹到 [0,1]，并用 Clamp 防止越界后做插值。

```csharp
float ratio = MathF.Clamp(hp / maxHp, 0f, 1f);
float smoothed = MathF.Lerp(smoothed, ratio, 0.2f);
if (!MathF.IsValidValue(smoothed))
{
    smoothed = 0f;
}
```

## 导航

- ↑ Parent（本区域目录）：[../](../)
- ↔ Sibling：[MBMath](../MBMath)、[Vec3](../Vec3)、[MatrixFrame](../MatrixFrame)
- 相关：[崩溃边界](../../../architecture/crash-boundaries)、[SDK 总览](../../../architecture/sdk-overview)
