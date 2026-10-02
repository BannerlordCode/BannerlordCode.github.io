---
title: "ClothSimulatorComponent"
description: "ClothSimulatorComponent：TaleWorlds.Engine 的 public 类，继承 GameEntityComponent；公开成员 13 个（方法 13、属性 0、字段 0）。canonical 桶 engine。源文件 TaleWorlds.Engine/ClothSimulatorComponent.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ClothSimulatorComponent

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public sealed class ClothSimulatorComponent : GameEntityComponent`
**File:** `TaleWorlds.Engine/ClothSimulatorComponent.cs`
**Bucket:** `engine` (rule:TaleWorlds.Engine)

## 概述

ClothSimulatorComponent 位于 TaleWorlds.Engine 模块，源文件 TaleWorlds.Engine/ClothSimulatorComponent.cs。它是一个 public 类（sealed），实现/继承 GameEntityComponent，继承链为 ClothSimulatorComponent → GameEntityComponent → NativeObject。public/protected 成员共 13 个：13 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ClothSimulatorComponent 落在 canonical 桶 `engine`（命中规则 `rule:TaleWorlds.Engine`），命名空间 `TaleWorlds.Engine`，继承链 ClothSimulatorComponent → GameEntityComponent → NativeObject。成员构成以方法为主（方法 13/13，属性 0/13），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Engine/ClothSimulatorComponent.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SetMaxDistanceMultiplier` | `public void SetMaxDistanceMultiplier(float multiplier)` | 方法 |
| `SetForcedWind` | `public void SetForcedWind(Vec3 windVector, bool isLocal)` | 方法 |
| `DisableForcedWind` | `public void DisableForcedWind()` | 方法 |
| `SetForcedGustStrength` | `public void SetForcedGustStrength(float gustStrength)` | 方法 |
| `SetResetRequired` | `public void SetResetRequired()` | 方法 |
| `DisableMorphAnimation` | `public void DisableMorphAnimation()` | 方法 |
| `SetMorphBuffer` | `public void SetMorphBuffer(float morphKey)` | 方法 |
| `GetNumberOfMorphKeys` | `public int GetNumberOfMorphKeys()` | 方法 |
| `SetVectorArgument` | `public void SetVectorArgument(float x, float y, float z, float w)` | 方法 |
| `GetMorphAnimLeftPoints` | `public void GetMorphAnimLeftPoints(Vec3[]leftPoints)` | 方法 |
| `GetMorphAnimRightPoints` | `public void GetMorphAnimRightPoints(Vec3[]rightPoints)` | 方法 |
| `GetMorphAnimCenterPoints` | `public void GetMorphAnimCenterPoints(Vec3[]centerPoints)` | 方法 |
| `SetForcedVelocity` | `public void SetForcedVelocity(in Vec3 forcedVelocity)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 GameEntityComponent](../GameEntityComponent/)
- [同命名空间 AnimResult](../AnimResult/)
- [同命名空间 ApplicationHealthChecker](../ApplicationHealthChecker/)
- [同命名空间 AsyncTask](../AsyncTask/)
- [同命名空间 BillboardType](../BillboardType/)
