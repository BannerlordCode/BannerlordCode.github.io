---
title: "SettlementVisualManager"
description: "SettlementVisualManager 的自动生成类参考。"
---
# SettlementVisualManager

**Namespace:** SandBox.View.Map.Managers
**Module:** SandBox.View
**Type:** `public class SettlementVisualManager : EntityVisualManagerBase<PartyBase>`
**Base:** `EntityVisualManagerBase<PartyBase>`
**File:** `SandBox.View/Map/Managers/SettlementVisualManager.cs`

## 概述

`SettlementVisualManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `SettlementVisualManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Current` | `public static SettlementVisualManager Current { get; }` |

## 主要方法

### OnTick
`public override void OnTick(float realDt, float dt)`

**用途 / Purpose:** 在 tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SettlementVisualManager 实例
SettlementVisualManager settlementVisualManager = ...;
settlementVisualManager.OnTick(0, 0);
```

### OnVisualIntersected
`public override void OnVisualIntersected(Ray mouseRay, UIntPtr intersectedEntityIDs, Intersection intersectionInfos, int entityCount, Vec3 worldMouseNear, Vec3 worldMouseFar, Vec3 terrainIntersectionPoint, float closestDistanceSquared, ref MapEntityVisual hoveredVisual, ref MapEntityVisual selectedVisual)`

**用途 / Purpose:** 在 visual intersected 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SettlementVisualManager 实例
SettlementVisualManager settlementVisualManager = ...;
settlementVisualManager.OnVisualIntersected(mouseRay, intersectedEntityIDs, intersectionInfos, 0, worldMouseNear, worldMouseFar, terrainIntersectionPoint, 0, hoveredVisual, selectedVisual);
```

### OnFrameTick
`public override void OnFrameTick(float dt)`

**用途 / Purpose:** 在 frame tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SettlementVisualManager 实例
SettlementVisualManager settlementVisualManager = ...;
settlementVisualManager.OnFrameTick(0);
```

### OnMouseClick
`public override bool OnMouseClick(MapEntityVisual visualOfSelectedEntity, Vec3 intersectionPoint, PathFaceRecord mouseOverFaceIndex, bool isDoubleClick)`

**用途 / Purpose:** 在 mouse click 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SettlementVisualManager 实例
SettlementVisualManager settlementVisualManager = ...;
var result = settlementVisualManager.OnMouseClick(visualOfSelectedEntity, intersectionPoint, mouseOverFaceIndex, false);
```

### GetVisualOfEntity
`public override MapEntityVisual<PartyBase> GetVisualOfEntity(PartyBase partyBase)`

**用途 / Purpose:** 读取并返回当前对象中 visual of entity 的结果。

```csharp
// 先通过子系统 API 拿到 SettlementVisualManager 实例
SettlementVisualManager settlementVisualManager = ...;
var result = settlementVisualManager.GetVisualOfEntity(partyBase);
```

### GetSettlementVisual
`public SettlementVisual GetSettlementVisual(Settlement settlement)`

**用途 / Purpose:** 读取并返回当前对象中 settlement visual 的结果。

```csharp
// 先通过子系统 API 拿到 SettlementVisualManager 实例
SettlementVisualManager settlementVisualManager = ...;
var result = settlementVisualManager.GetSettlementVisual(settlement);
```

## 使用示例

```csharp
var manager = SettlementVisualManager.Current;
```

## 参见

- [本区域目录](../)