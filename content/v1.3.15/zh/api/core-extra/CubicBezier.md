---
title: CubicBezier
description: CubicBezier - 三次贝塞尔曲线插值计算工具
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CubicBezier`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CubicBezier
**命名空间:** TaleWorlds.Library
**模块:** TaleWorlds.Library
**类型:** class
## 概述
`CubicBezier` 实现三次贝塞尔曲线的采样与求解。给定控制点 P1(x1,y1)、P2(x2,y2) 及起止 y 值，`Sample(x)` 返回曲线在进度 x 处的 y 值。内部使用 11 点采样表 (`_sampleValues`) 加速查找，Newton-Raphson 迭代法求 `t`，当斜率过小时回退到二分查找 (`BinarySubdivide`)。

当控制点构成线性插值时（即 `_x1*num == y1-y0` 且 `(1-x2)*num == y3-y2`），直接返回线性值避免迭代计算。
## 心智模型
- 输入进度 x (0~1) → `GetTForX` 在采样表中定位 → Newton-Raphson 求精确 `t` → `CalcBezierY(t)` 算出 y
- 构造时验证 x1、x2 在 [0,1] 范围内
- 线性捷径：当曲线退化线性时直接返回，跳过迭代
## 主要属性
本类无私有属性。内部字段均为 private readonly：
| 字段 | 类型 | 说明 |
|------|------|------|
| `_x1` | `double` | 控制点 1 的 x 坐标 |
| `_y1` | `double` | 控制点 1 的 y 坐标 |
| `_x2` | `double` | 控制点 2 的 x 坐标 |
| `_y2` | `double` | 控制点 2 的 y 坐标 |
| `_y0` | `double` | 起点 y 值 |
| `_y3` | `double` | 终点 y 值 |
| `_sampleValues` | `double[11]` | 预采样表 |
## 主要方法
### createEase
```csharp
public static CubicBezier CreateEase(double cp1X, double cp1Y, double cp2X, double cp2Y)
```
创建标准 ease 缓动曲线：yBegin=0, yEnd=1。
### createYBeginToYEnd
```csharp
public static CubicBezier CreateYBeginToYEnd(double yBegin, double yEnd, double cp1X, double cp1Y, double cp2X, double cp2Y)
```
指定起止 y 值和控制点坐标创建曲线。
### createYBeginToYEndWithRelativeControlDirs
```csharp
public static CubicBezier CreateYBeginToYEndWithRelativeControlDirs(double yBegin, double yEnd, double dir1X, double dir1Y, double dir2X, double dir2Y)
```
以相对偏移量指定控制点：P1=(dir1X, yBegin+dir1Y), P2=(1+dir2X, yEnd+dir2Y)。
### Sample
```csharp
public double Sample(double x)
```
返回曲线在进度 x (0~1) 处的 y 值。
## 使用示例
### 示例: 创建 ease-in-out 缓动动画
**场景**: UI 动画使用 CSS ease 曲线
```csharp
var bezier = CubicBezier.CreateEase(0.42, 0, 0.58, 1);
double valueAt50Percent = bezier.Sample(0.5);
```
**要点**: 控制点 x 必须在 [0,1] 范围内；线性情况会自动走捷径。
## 参见
- [完整类目录](../catalog-core)
- [API 目录](../)
- [SDK 总览](../../architecture/sdk-overview)
