---
title: "CompositeComponent"
description: "CompositeComponent：TaleWorlds.Engine 的 public 类，继承 GameEntityComponent；公开成员 20 个（方法 17、属性 3、字段 0）。源文件 TaleWorlds.Engine/CompositeComponent.cs。"
---
# CompositeComponent

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public sealed class CompositeComponent : GameEntityComponent`
**File:** `TaleWorlds.Engine/CompositeComponent.cs`

## 概述

CompositeComponent 位于 TaleWorlds.Engine 模块，源文件 TaleWorlds.Engine/CompositeComponent.cs。它是一个 public 类（sealed），实现/继承 GameEntityComponent，继承链为 CompositeComponent → GameEntityComponent → NativeObject。public/protected 成员共 20 个：17 方法、3 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CompositeComponent 是 TaleWorlds.Engine 的顶层类型，命名空间与模块目录一致，继承链 CompositeComponent → GameEntityComponent → NativeObject。成员构成以方法为主（方法 17/20，属性 3/20），对外主要以操作入口暴露。继承链上的 NativeObject 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Engine/CompositeComponent.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsValid` | `public bool IsValid` | 属性 |
| `IsNull` | `public static bool IsNull(CompositeComponent component)` | 方法 |
| `CreateCompositeComponent` | `public static CompositeComponent CreateCompositeComponent()` | 方法 |
| `CreateCopy` | `public CompositeComponent CreateCopy()` | 方法 |
| `AddComponent` | `public void AddComponent(GameEntityComponent component)` | 方法 |
| `AddPrefabEntity` | `public void AddPrefabEntity(string prefabName, Scene scene)` | 方法 |
| `Dispose` | `public void Dispose()` | 方法 |
| `GetFactor1` | `public uint GetFactor1()` | 方法 |
| `GetFactor2` | `public uint GetFactor2()` | 方法 |
| `SetFactor1` | `public void SetFactor1(uint factorColor1)` | 方法 |
| `SetFactor2` | `public void SetFactor2(uint factorColor2)` | 方法 |
| `SetVectorArgument` | `public void SetVectorArgument(float vectorArgument0, float vectorArgument1, float vectorArgument2, float vectorArgument3)` | 方法 |
| `SetMaterial` | `public void SetMaterial(Material material)` | 方法 |
| `Frame` | `public MatrixFrame Frame` | 属性 |
| `VectorUserData` | `public Vec3 VectorUserData` | 属性 |
| `SetVisibilityMask` | `public void SetVisibilityMask(VisibilityMaskFlags visibilityMask)` | 方法 |
| `GetFirstMetaMesh` | `public override MetaMesh GetFirstMetaMesh()` | 方法 |
| `AddMultiMesh` | `public void AddMultiMesh(string MultiMeshName)` | 方法 |
| `SetVisible` | `public void SetVisible(bool visible)` | 方法 |
| `GetVisible` | `public bool GetVisible()` | 方法 |

## 参见

- [↑ engine 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 GameEntityComponent](../GameEntityComponent)
- [同命名空间 AnimResult](../AnimResult)
- [同命名空间 ApplicationHealthChecker](../ApplicationHealthChecker)
- [同命名空间 AsyncTask](../AsyncTask)
- [同命名空间 BillboardType](../BillboardType)
