---
title: "MobilePartyVisualManager"
description: "MobilePartyVisualManager 的自动生成类参考。"
---
# MobilePartyVisualManager

**Namespace:** SandBox.View.Map.Managers
**Module:** SandBox.View
**Type:** `public class MobilePartyVisualManager : EntityVisualManagerBase<PartyBase>`
**Base:** `EntityVisualManagerBase<PartyBase>`
**File:** `SandBox.View/Map/Managers/MobilePartyVisualManager.cs`

## 概述

`MobilePartyVisualManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `MobilePartyVisualManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Current` | `public static MobilePartyVisualManager Current { get; }` |

## 主要方法

### OnTick
`public override void OnTick(float realDt, float dt)`

**用途 / Purpose:** **用途 / Purpose:** 在 tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MobilePartyVisualManager 实例
MobilePartyVisualManager mobilePartyVisualManager = ...;
mobilePartyVisualManager.OnTick(0, 0);
```

### OnVisualTick
`public override void OnVisualTick(MapScreen screen, float realDt, float dt)`

**用途 / Purpose:** **用途 / Purpose:** 在 visual tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MobilePartyVisualManager 实例
MobilePartyVisualManager mobilePartyVisualManager = ...;
mobilePartyVisualManager.OnVisualTick(screen, 0, 0);
```

### OnVisualIntersected
`public override void OnVisualIntersected(Ray mouseRay, UIntPtr intersectedEntityIDs, Intersection intersectionInfos, int entityCount, Vec3 worldMouseNear, Vec3 worldMouseFar, Vec3 terrainIntersectionPoint, float closestDistanceSquared, ref MapEntityVisual hoveredVisual, ref MapEntityVisual selectedVisual)`

**用途 / Purpose:** **用途 / Purpose:** 在 visual intersected 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MobilePartyVisualManager 实例
MobilePartyVisualManager mobilePartyVisualManager = ...;
mobilePartyVisualManager.OnVisualIntersected(mouseRay, intersectedEntityIDs, intersectionInfos, 0, worldMouseNear, worldMouseFar, terrainIntersectionPoint, 0, hoveredVisual, selectedVisual);
```

### GetVisualOfEntity
`public override MapEntityVisual<PartyBase> GetVisualOfEntity(PartyBase partyBase)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 visual of entity 的结果。

```csharp
// 先通过子系统 API 拿到 MobilePartyVisualManager 实例
MobilePartyVisualManager mobilePartyVisualManager = ...;
var result = mobilePartyVisualManager.GetVisualOfEntity(partyBase);
```

### GetPartyVisual
`public MobilePartyVisual GetPartyVisual(PartyBase partyBase)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 party visual 的结果。

```csharp
// 先通过子系统 API 拿到 MobilePartyVisualManager 实例
MobilePartyVisualManager mobilePartyVisualManager = ...;
var result = mobilePartyVisualManager.GetPartyVisual(partyBase);
```

## 使用示例

```csharp
var manager = MobilePartyVisualManager.Current;
```

## 参见

- [本区域目录](../)