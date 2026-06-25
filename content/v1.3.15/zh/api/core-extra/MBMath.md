---
title: MBMath
description: MBMath - 霸主通用数学工具?
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBMath`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBMath

**命名空间:** TaleWorlds.Library
**模块:** TaleWorlds.Library
**类型:** static class
**领域:** 核心数据 Core

## 概述

`MBMath

` 是霸?SDK 的通用数学工具库，提供标量/向量/矩阵的插值（Lerp）、角度运算（弧度/度转换、角度差、角度包裹）、范围映射（Map/Clamp/SmoothStep）、几何计算（点到线段距离、射线与平面交点、线段与三角形相交检测）、颜色转换（HSB↔RGB）、按权重分配（DistributeShares）、以及最大元素选取（MaxElements2~5）等实用函数?
几乎所有霸主模块都依赖本类——从 UI 动画的缓动到战斗系统的瞄准角度计算，?AI 寻路的几何检测到地图渲染的坐标插值。模组开发者在需要任何数学运算时应首先检查本类是否已提供?
## 心智模型

- **插值家?*: 

`Lerp

` 是基础线性插值（带最小差异阈值，避免浮点抖动）；

`LinearExtrapolation

` 是无阈值的纯线性外推；

`SmoothStep

` 是平滑阶梯；

`SplitLerp

` 是分段插值（先从 v1→v2，再?v2→v3）；

`BilinearLerp

` 是双线性插值（四角插值）?- **角度家族**: 

`ToRadians

`/

`ToDegrees

` 是单位转换；

`GetSmallestDifferenceBetweenTwoAngles

` 计算两角最短有向差（处?±π 跨越）；

`WrapAngle

`/

`WrapAngleSafe

` 把角度归一?(-π, π]；`ClampAngle

` 把角度限制在以某中心为中心的范围内；

`LerpRadians

` 是角度插值（支持最?最大变化量限制）?- **几何家族**: 

`GetClosestPointOnLineSegmentToPoint

` 计算点到线段最近点；`GetDistanceSquareOfPointToLineSegment

` 计算平方距离；`CheckLineToLineSegmentIntersection

` 检测射线与线段交点；`IntersectLineSegmentWithTriangle

` 检测线段与三角形相交（Möller-Trumbore 算法）；

`CheckPointInsidePolygon

` 用射线法判断点在四边形内?- **MaxElements 家族**: 

`MaxElement

` 返回集合中函数值最大的元素；`MaxElements2

`~

`MaxElements5

` 返回?2~5 大的元素元组。使用单次遍历的插入排序，避免多次遍历或全排序的开销?
## 主要常量

\| 常量 \| ?\| 说明 \|
\|------\|-----\|------\|
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

` \| 2.7182817f \| 自然常数 e \|
\| 

`DegreesToRadians

` \| 0.017453292f \| 度→弧度 \|
\| 

`RadiansToDegrees

` \| 57.295776f \| 弧度→度 \|
\| 

`Epsilon

` \| 1E-05f \| 默认浮点比较容差 \|

## 主要方法

### Lerp
`

`

`csharp
public static float Lerp(float valueFrom, float valueTo, float amount, float minimumDifference = 1E-05f)
public static Vec3 Lerp(Vec3 vecFrom, Vec3 vecTo, float amount, float minimumDifference)
public static Vec2 Lerp(Vec2 vecFrom, Vec2 vecTo, float amount, float minimumDifference)
public static Mat3 Lerp(ref Mat3 matFrom, ref Mat3 matTo, float amount, float minimumDifference)
`

`

`
线性插值。当两端值差异小?

`minimumDifference

` 时直接返回目标值，避免浮点精度抖动。`amount

` ?0 返回起点，为 1 返回终点?
### LerpRadians
`

`

`csharp
public static float LerpRadians(float valueFrom, float valueTo, float amount, float minChange, float maxChange)
`

`

`
角度插值。先计算最短有向角差，若差异小?

`minChange

` 则直接返回目标；否则?

`amount

` 比例插值，但每帧变化量限制?

`[minChange, maxChange]

` 范围内。用于武器瞄准的平滑跟随?
### Map
`

`

`csharp
public static float Map(float input, float inputMinimum, float inputMaximum, float outputMinimum, float outputMaximum)
`

`

`
将输入值从一个范围线性映射到另一个范围。输入先?clamp ?

`[inputMinimum, inputMaximum]

`，再按比例映射到 

`[outputMinimum, outputMaximum]

`?
### ClampInt / ClampFloat / ClampUnit
`

`

`csharp
public static int ClampInt(int value, int minValue, int maxValue)
public static float ClampFloat(float value, float minValue, float maxValue)
public static void ClampUnit(ref float value)
`

`

`
数值钳制。`ClampUnit

` 把值限制在 [0, 1] 范围?
### GetSmallestDifferenceBetweenTwoAngles / WrapAngle
`

`

`csharp
public static float GetSmallestDifferenceBetweenTwoAngles(float fromAngle, float toAngle)
public static float WrapAngle(float angle)
public static float WrapAngleSafe(float angle)
`

`

`
角度运算。`GetSmallestDifferenceBetweenTwoAngles

` 返回?

`fromAngle

` ?

`toAngle

` 的最短有向差（范?(-π, π]）；

`WrapAngle

` ?

`IEEERemainder

` 快速归一；`WrapAngleSafe

` 用循环加减归一（更慢但无精度问题）?
### DistributeShares
`

`

`csharp
public static IEnumerable&lt;ValueTuple&lt;T, int&gt;&gt; DistributeShares&lt;T&gt;(int totalAward, IEnumerable&lt;T&gt; stakeHolders, Func&lt;T, int&gt; shareFunction)
`

`

`
按权重分配整数额度。每个持有者的份额?

`round(剩余额度 * 该持有者权?/ 剩余总权?

`，确保总额精确分配无余数。用于战利品分配、税收分摊等场景?
### MaxElement / MaxElements2~5
`

`

`csharp
public static T MaxElement&lt;T&gt;(IEnumerable&lt;T&gt; collection, Func&lt;T, float&gt; func)
public static ValueTuple&lt;T, T&gt; MaxElements2&lt;T&gt;(IEnumerable&lt;T&gt; collection, Func&lt;T, float&gt; func)
// ... MaxElements3, MaxElements4, MaxElements5 类似
`

`

`
单次遍历返回集合中函数值最大的元素（或?N 大的元素元组）。比 

`OrderBy(func).Take(n)

` 更高效（无需全排序）?
### GetClosestPointOnLineSegmentToPoint
`

`

`csharp
public static Vec2 GetClosestPointOnLineSegmentToPoint(in Vec2 lineSegmentBegin, in Vec2 lineSegmentEnd, in Vec2 point)
public static Vec3 GetClosestPointOnLineSegmentToPoint(in Vec3 lineSegmentBegin, in Vec3 lineSegmentEnd, in Vec3 point)
`

`

`
计算点到线段的最近点。把点投影到线段所在直线上，若投影参数?[0,1] 内则返回投影点，否则返回最近的端点?
### IntersectLineSegmentWithTriangle
`

`

`csharp
public static bool IntersectLineSegmentWithTriangle(in Vec3 segStart, in Vec3 segEnd, in Vec3 triA, in Vec3 triB, in Vec3 triC)
`

`

`
检测线段与三角形是否相交。使?Möller-Trumbore 算法，返回线段是否在三角形面片内有交点?
### HSBtoRGB / RGBtoHSB
`

`

`csharp
public static Color HSBtoRGB(float hue, float saturation, float brightness, float outputAlpha)
public static Vec3 RGBtoHSB(Color rgb)
`

`

`
HSB ?RGB 颜色空间互转。`hue

` 范围 [0, 360]，`saturation

`/

`brightness

` 范围 [0, 1]?
## 使用示例

### 示例: 平滑跟随目标角度
**场景**: 模组的攻城武器需要平滑旋转到目标朝向?

`

`

`csharp
float currentAngle = weapon.CurrentDirection;
float targetAngle = weapon.GetTargetDirection();
// 每帧最多转 0.1 弧度，最?0.01 弧度
weapon.CurrentDirection = MBMath.LerpRadians(currentAngle, targetAngle, 0.5f, 0.01f, 0.1f);
`

`

`
**要点**: 

`LerpRadians

` 处理了角度跨?±π 的情况，不会出现"绕远?旋转?
### 示例: 按权重分配战利品
**场景**: 战斗后按各方贡献分配 1000 金币?

`

`

`csharp
var contributors = new[] { hero1, hero2, hero3 };
var shares = MBMath.DistributeShares(1000, contributors, h =&gt; h.ContributionScore);
foreach ((Hero hero, int gold) in shares)
{
    GiveGold(hero, gold);
}
`

`

`
**要点**: 总分配额保证精确等于 1000（无余数），先分配的持有者可能有微小优先优势?
## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)
- [API 目录](../)
- [SDK 总览](../../architecture/sdk-overview)
