<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MobilePartyVisualManager`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 当 `tick` 事件触发时调用此方法。

### OnVisualTick
`public override void OnVisualTick(MapScreen screen, float realDt, float dt)`

**用途 / Purpose:** 当 `visual tick` 事件触发时调用此方法。

### OnVisualIntersected
`public override void OnVisualIntersected(Ray mouseRay, UIntPtr intersectedEntityIDs, Intersection intersectionInfos, int entityCount, Vec3 worldMouseNear, Vec3 worldMouseFar, Vec3 terrainIntersectionPoint, float closestDistanceSquared, ref MapEntityVisual hoveredVisual, ref MapEntityVisual selectedVisual)`

**用途 / Purpose:** 当 `visual intersected` 事件触发时调用此方法。

### GetVisualOfEntity
`public override MapEntityVisual<PartyBase> GetVisualOfEntity(PartyBase partyBase)`

**用途 / Purpose:** 获取 `visual of entity` 的当前值。

### GetPartyVisual
`public MobilePartyVisual GetPartyVisual(PartyBase partyBase)`

**用途 / Purpose:** 获取 `party visual` 的当前值。

## 使用示例

```csharp
var manager = MobilePartyVisualManager.Current;
```

## 参见

- [完整类目录](../catalog)