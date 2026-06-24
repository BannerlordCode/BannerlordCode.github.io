<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MathF`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MathF

**命名空间:** TaleWorlds.Library
**模块:** TaleWorlds.Library
**类型:** 静态类 (

`static class

`)
**领域:** 核心?Library

## 概述

`MathF

` ?Bannerlord 核心库提供的浮点数学工具类，位于 

`TaleWorlds.Library

` 命名空间。它?

`System.Math

` 中的双精度方法包装为 

`float

` 版本（`Sqrt

`、`Sin

`、`Cos

` 等），避?modder ?float 计算中反复手动转换。此外提?

`Clamp

`、`Lerp

`、`AngleClamp

`、`AngleLerp

`、`IsZero

`、`Sign

`、`PingPong

`、`GreatestCommonDivisor

` 等游戏常用辅助方法，以及 

`IsValidValue

` 用于检?NaN / Infinity?
## 心智模型

?

`MathF

` 当作 Unity ?

`Mathf

` ?Bannerlord 等价物：所有三角函数、幂运算接受 

`float

` 并返?

`float

`，无需 

`(float)Math.Sqrt(...)

` 转换。常?

`PI

`、`TwoPI

`、`HalfPI

`、`DegToRad

`、`RadToDeg

`、`E

`、`Epsilon

` 直接可用于角度转换和容差判断。`IsZero

` 方法同时支持 

`float

` ?

`Vector2

`，用 

`Epsilon

` 判断是否近似为零，适合在物理和动画代码中替?

`== 0

`?
## 主要属?
\| Name \| Signature \| Description \|
\|------\|-----------\|-------------\|
\| 

`PI

` \| 

`public const float PI = 3.1415927f

` \| 圆周?π \|
\| 

`TwoPI

` \| 

`public const float TwoPI = 6.2831855f

` \| 2π，一个完整周?\|
\| 

`HalfPI

` \| 

`public const float HalfPI = 1.5707964f

` \| π/2?0 ?\|
\| 

`DegToRad

` \| 

`public const float DegToRad = 0.017453292f

` \| 度→弧度换算因子 \|
\| 

`RadToDeg

` \| 

`public const float RadToDeg = 57.295784f

` \| 弧度→度换算因子 \|
\| 

`E

` \| 

`public const float E = 2.7182817f

` \| 自然常数 e \|
\| 

`Epsilon

` \| 

`public const float Epsilon = 1e-6f

` \| 微小容差值，用于浮点比较 \|

## 主要方法

### 三角与幂运算

`

`

`csharp
public static float Sqrt(float f)
public static float Sin(float radian)
public static float Cos(float radian)
public static float Tan(float radian)
public static float Tanh(float radian)
public static float Asin(float f)
public static float Acos(float f)
public static float Atan(float f)
public static float Atan2(float y, float x)
public static float Pow(float x, float y)
public static float Log(float f)
public static float Log10(float f)
public static void SinCos(float radian, out float sin, out float cos)
`

`

`

?

`System.Math

` 对应方法?

`float

` 包装。`SinCos

` 一次调用同时返?sin ?cos，比分开调用更高效?
### 取整与绝对?
`

`

`csharp
public static float Abs(float f)
public static int Abs(int f)
public static float Ceil(float f)
public static float Ceiling(float f)
public static float Floor(float f)
public static float Round(float f)
public static float Sign(float f)
`

`

`

`Ceil

` ?

`Ceiling

` 功能相同，均向上取整。`Sign

` 返回 -1 / 0 / 1?
### Clamp / Min / Max

`

`

`csharp
public static float Clamp(float value, float min, float max)
public static int Clamp(int value, int min, int max)
public static float Min(float a, float b)
public static int Min(int a, int b)
public static float Max(float a, float b)
public static int Max(int a, int b)
public static void MinMax(float a, float b, out float min, out float max)
`

`

`

同时提供 

`float

` ?

`int

` 重载。`MinMax

` 一次调用同时获取最小和最大值?
### 角度与插?
`

`

`csharp
public static float AngleClamp(float angle)
public static float Lerp(float start, float end, float amount)
public static float AngleLerp(float start, float end, float amount)
public static float PingPong(float value, float length)
`

`

`

`AngleClamp

` 将角度归一化到 [0, 360)。`AngleLerp

` 处理角度环绕插值（?350° ?10° 走最短路径）。`PingPong

` ?[0, length] 范围内来回弹跳?
### 零值判断与有效?
`

`

`csharp
public static bool IsZero(float f)
public static bool IsZero(Vector2 vector2)
public static bool IsValidValue(float f)
`

`

`

`IsZero

` ?

`Epsilon

` 判断近似零。`IsValidValue

` 检?NaN ?Infinity?
### 辅助方法

`

`

`csharp
public static ulong PowTwo32(int power)
public static ulong PowTwo64(int power)
public static int GreatestCommonDivisor(int a, int b)
public static Vec3 GetClosestPointInLineSegmentToLine(Vec3 linePosition, Vec3 lineDirection, Vec3 lineSegmentBegin, Vec3 lineSegmentEnd)
`

`

`

`PowTwo32/64

` 计算 2 的幂。`GreatestCommonDivisor

` 用于整数约分。`GetClosestPointInLineSegmentToLine

` 计算线段到直线的最近点，用于碰撞和 AI 路径计算?
## 使用示例

`

`

`csharp
using TaleWorlds.Library;

// 角度转换：度 ?弧度
float angleDeg = 45f;
float angleRad = angleDeg * MathF.DegToRad;
float sinValue = MathF.Sin(angleRad);
float cosValue = MathF.Cos(angleRad);

// Clamp 限制范围
float normalizedHealth = MathF.Clamp(currentHealth / maxHealth, 0f, 1f);

// Lerp 平滑过渡
float currentAlpha = MathF.Lerp(currentAlpha, targetAlpha, dt * speed);

// IsZero 检测浮点零
if (MathF.IsZero(velocity))
{
    // 角色已停止移?}

// 角度环绕插值（处理 350° ?10° 的最短路径）
float rotation = MathF.AngleLerp(currentRotation, targetRotation, dt * rotationSpeed);
`

`

`

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
- [API 目录](../)
- [SDK 总览](../../architecture/sdk-overview)
