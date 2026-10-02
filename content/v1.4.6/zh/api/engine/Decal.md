---
title: "Decal"
description: "Decal：TaleWorlds.Engine 的 public 类，继承 GameEntityComponent；公开成员 17 个（方法 15、属性 2、字段 0）。源文件 TaleWorlds.Engine/Decal.cs。"
---
# Decal

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public sealed class Decal : GameEntityComponent`
**File:** `TaleWorlds.Engine/Decal.cs`

## 概述

Decal 位于 TaleWorlds.Engine 模块，源文件 TaleWorlds.Engine/Decal.cs。它是一个 public 类（sealed），实现/继承 GameEntityComponent，继承链为 Decal → GameEntityComponent → NativeObject。public/protected 成员共 17 个：15 方法、2 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：Decal 是 TaleWorlds.Engine 的顶层类型，命名空间与模块目录一致，继承链 Decal → GameEntityComponent → NativeObject。成员构成以方法为主（方法 15/17，属性 2/17），对外主要以操作入口暴露。继承链上的 NativeObject 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Engine/Decal.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CreateDecal` | `public static Decal CreateDecal(string name = null)` | 方法 |
| `CreateCopy` | `public Decal CreateCopy()` | 方法 |
| `CheckAndRegisterToDecalSet` | `public void CheckAndRegisterToDecalSet()` | 方法 |
| `SetIsVisible` | `public void SetIsVisible(bool value)` | 方法 |
| `IsValid` | `public bool IsValid` | 属性 |
| `GetFactor1` | `public uint GetFactor1()` | 方法 |
| `OverrideRoadBoundaryP0` | `public void OverrideRoadBoundaryP0(Vec2 data)` | 方法 |
| `OverrideRoadBoundaryP1` | `public void OverrideRoadBoundaryP1(Vec2 data)` | 方法 |
| `SetFactor1Linear` | `public void SetFactor1Linear(uint linearFactorColor1)` | 方法 |
| `SetFactor1` | `public void SetFactor1(uint factorColor1)` | 方法 |
| `SetAlpha` | `public void SetAlpha(float alpha)` | 方法 |
| `SetVectorArgument` | `public void SetVectorArgument(float vectorArgument0, float vectorArgument1, float vectorArgument2, float vectorArgument3)` | 方法 |
| `SetVectorArgument2` | `public void SetVectorArgument2(float vectorArgument0, float vectorArgument1, float vectorArgument2, float vectorArgument3)` | 方法 |
| `GetMaterial` | `public Material GetMaterial()` | 方法 |
| `SetMaterial` | `public void SetMaterial(Material material)` | 方法 |
| `SetFrame` | `public void SetFrame(MatrixFrame Frame)` | 方法 |
| `Frame` | `public MatrixFrame Frame` | 属性 |

## 参见

- [↑ engine 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 GameEntityComponent](../GameEntityComponent)
- [同命名空间 AnimResult](../AnimResult)
- [同命名空间 ApplicationHealthChecker](../ApplicationHealthChecker)
- [同命名空间 AsyncTask](../AsyncTask)
- [同命名空间 BillboardType](../BillboardType)
