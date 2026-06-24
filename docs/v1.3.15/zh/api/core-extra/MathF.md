---
title: MathF
description: MathF - 单精度浮点数学运算静态工具类
---

<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MathF`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MathF

**命名空间:** 

`TaleWorlds.Library

`
**模块:** 

`TaleWorlds.Library

`
**类型:** 

`public static class MathF

`
**基类:** 无（静态类?**文件:** 

`TaleWorlds.Library/MathF.cs

`

## 概述

`MathF

` ?Bannerlord 自带的单精度浮点数学运算工具类。由?.NET Framework 早期版本没有 

`System.MathF

`，TaleWorlds 封装?

`System.Math

` 的双精度方法?

`float

` 重载，并添加了角度运算（

`AngleClamp

`、`AngleLerp

`）、`Lerp

` 插值、`PingPong

` 振荡等游戏常用函数。整?Bannerlord 代码库统一使用 

`MathF

` 而非 

`Math

` 进行浮点运算，以避免频繁?

`float

`/

`double

` 类型转换?
## 心智模型

- **全部?static**: 该类不可实例化，所有方法都?

`static

`，直?

`MathF.Sin(x)

` 调用?- **float 优先**: 三角函数、对数、幂运算等均返回 

`float

`，内部委托给 

`System.Math

` ?

`double

` 版本后强转?- **类型安全标记**: 混合类型的重载（?

`Pow(float, double)

`）被标记 

`[Obsolete("Types must match!", true)]

`，编译期即报错，强制开发者使用同类型重载?- **常量**: 提供浮点常量 

`PI

`、`HalfPI

`、`TwoPI

`、`DegToRad

`、`RadToDeg

`、`E

`、`Epsilon

`，供角度/弧度转换和数值比较使用?
## 常量

\| 常量 \| ?\| 说明 \|
\|------\|-----\|------\|
\| 

`DegToRad

` \| 0.017453292f \| 角度转弧度乘?\|
\| 

`RadToDeg

` \| 57.29578f \| 弧度转角度乘?\|
\| 

`TwoPI

` \| 6.2831855f \| 2π \|
\| 

`PI

` \| 3.1415927f \| π \|
\| 

`HalfPI

` \| 1.5707964f \| π/2 \|
\| 

`E

` \| 2.7182817f \| 自然对数?\|
\| 

`Epsilon

` \| 1E-05f \| 微小比较阈?\|

## 主要方法

### 三角函数

`

`

`csharp
public static float Sin(float x)   // 正弦
public static float Asin(float x)  // 反正?public static float Cos(float x)   // 余弦
public static float Acos(float x)  // 反余?public static float Tan(float x)   // 正切
public static float Tanh(float x)  // 双曲正切
public static float Atan(float x)  // 反正?public static float Atan2(float y, float x)  // 双参数反正切，用于求方向?public static void SinCos(float a, out float sa, out float ca)  // 同时?sin ?cos
`

`

`

上述方法均接?

`float

`（弧度）并返?

`float

`，内部委托给 

`System.Math

` 对应方法。`SinCos

` 在一次调用中同时返回 sin ?cos，避免重复计算?
### 幂运算与对数

`

`

`csharp
public static float Pow(float x, float y)   // x ?y 次幂
public static double Pow(double x, double y) // double 版本
public static int PowTwo32(int x)   // 2 ?x 次幂?2 位）
public static ulong PowTwo64(int x) // 2 ?x 次幂?4 位）
public static float Log(float a)              // 自然对数
public static float Log(float a, float newBase) // 指定底对?public static float Log10(float val)          // ?10 为底对数
public static float Sqrt(float x)             // 平方?

`

`

`

### 取整与舍?
`

`

`csharp
public static int Round(double f)     // 四舍五入?int
public static int Round(float f)      // 四舍五入?int
public static float Round(float f, int digits)  // 四舍五入到指定小数位
public static int Floor(double f)     // 向下取整
public static int Floor(float f)
public static int Ceiling(double f)   // 向上取整
public static int Ceiling(float f)
`

`

`

注意：`Round(int)

`、`Floor(int)

`、`Ceiling(int)

` 被标?

`[Obsolete("Type is already int!", true)]

`，编译期报错——int 类型无需取整?
### 绝对值与极?
`

`

`csharp
public static double Abs(double f)
public static float Abs(float f)
public static int Abs(int f)
public static float Max(float a, float b)
public static float Max(float a, float b, float c)  // 三值最?public static int Max(int a, int b)
public static long Max(long a, long b)
public static uint Max(uint a, uint b)
public static double Max(double a, double b)
public static float Min(float a, float b)
public static float Min(float a, float b, float c)  // 三值最?public static int Min(int a, int b)
public static long Min(long a, long b)
public static uint Min(uint a, uint b)
public static short Min(short a, short b)
public static double Min(double a, double b)
public static ValueTuple&lt;float, float&gt; MinMax(float a, float b)  // 返回 (min, max) 元组
`

`

`

### 钳制与插?
`

`

`csharp
public static float Clamp(float value, float minValue, float maxValue)
`

`

`

?

`value

` 限制?

`[minValue, maxValue]

` 范围内。小于下限返回下限，大于上限返回上限?
`

`

`csharp
public static float AngleClamp(float angle)
`

`

`

将角度（弧度）归一化到 

`[0, 2π)

` 范围。负角度?

`2π

`，超?

`2π

` ?

`2π

`，循环直到落入范围?
`

`

`csharp
public static float Lerp(float valueFrom, float valueTo, float amount, float minimumDifference = 1E-05f)
`

`

`

线性插值。返?

`valueFrom + (valueTo - valueFrom) * amount

`。若两端差值绝对?&lt;= 

`minimumDifference

`，直接返?

`valueTo

`（避免微小差值的抖动）?
`

`

`csharp
public static float AngleLerp(float angleFrom, float angleTo, float amount, float minimumDifference = 1E-05f)
`

`

`

角度线性插值（弧度）。自动选择最短旋转方向（正向或反向），结果经 

`AngleClamp

` 归一化到 

`[0, 2π)

`?
### 其他

`

`

`csharp
public static bool IsValidValue(float f)  // 检查是否为有效浮点数（?NaN、非无穷?public static float PingPong(float min, float max, float time)  // ?min ?max 之间往返振?public static int GreatestCommonDivisor(int a, int b)  // 最大公约数（辗转相除法?public static int Sign(float f)  // 符号函数：负数返?-1，零返回 0，正数返?1
public static int Sign(int f)
`

`

`

## 使用示例

`

`

`csharp
using TaleWorlds.Library;

// 场景 1：计算朝向目标的方向?public static float GetAngleToTarget(Vec2 from, Vec2 to)
{
    // Atan2 返回弧度，直接用于游戏逻辑
    return MathF.Atan2(to.Y - from.Y, to.X - from.X);
}

// 场景 2：平滑旋转到目标角度
public static float SmoothRotateTo(float currentAngle, float targetAngle, float dt, float speed)
{
    // AngleLerp 自动选择最短旋转方?    return MathF.AngleLerp(currentAngle, targetAngle, dt * speed);
}

// 场景 3：钳制数值范?public static float NormalizeHealth(float rawHealth)
{
    return MathF.Clamp(rawHealth, 0f, 100f);
}

// 场景 4：角度与弧度互转
public static float DegreesToRadians(float degrees)
{
    return degrees * MathF.DegToRad;
}

public static float RadiansToDegrees(float radians)
{
    return radians * MathF.RadToDeg;
}

// 场景 5：检查计算结果是否有?public static bool TryComputeDistance(Vec2 a, Vec2 b, out float distance)
{
    float dx = a.X - b.X;
    float dy = a.Y - b.Y;
    distance = MathF.Sqrt(dx * dx + dy * dy);
    return MathF.IsValidValue(distance);
}
`

`

`

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)
- [API 目录](../)
- [SDK 总览](../../architecture/sdk-overview)
