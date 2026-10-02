---
title: "CapsuleData"
description: "CapsuleData：TaleWorlds.Engine 的 public 结构体；公开成员 5 个（方法 1、属性 3、字段 0）。源文件 TaleWorlds.Engine/CapsuleData.cs。"
---
# CapsuleData

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public struct CapsuleData`
**File:** `TaleWorlds.Engine/CapsuleData.cs`

## 概述

CapsuleData 位于 TaleWorlds.Engine 模块，源文件 TaleWorlds.Engine/CapsuleData.cs。它是一个 public 结构体，继承链为 CapsuleData。public/protected 成员共 5 个：1 方法、3 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CapsuleData 是 TaleWorlds.Engine 的顶层类型，命名空间与模块目录一致，继承链 CapsuleData。成员构成以属性为主（属性 3/5，方法 1/5），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Engine/CapsuleData.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `P1` | `public Vec3 P1` | 属性 |
| `P2` | `public Vec3 P2` | 属性 |
| `Radius` | `public float Radius` | 属性 |
| `CapsuleData` | `public CapsuleData(float radius, Vec3 p1, Vec3 p2)` | 构造函数 |
| `Vec3>GetBoxMinMax` | `public ValueTuple<Vec3, Vec3>GetBoxMinMax()` | 方法 |

## 参见

- [↑ engine 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AnimResult](../AnimResult)
- [同命名空间 ApplicationHealthChecker](../ApplicationHealthChecker)
- [同命名空间 AsyncTask](../AsyncTask)
- [同命名空间 BillboardType](../BillboardType)
