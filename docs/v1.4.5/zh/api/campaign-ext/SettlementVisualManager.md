<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SettlementVisualManager`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SettlementVisualManager

**Namespace:** SandBox.View.Map.Managers
**Module:** SandBox.View
**Type:** `public class SettlementVisualManager : EntityVisualManagerBase<PartyBase>`
**Base:** `EntityVisualManagerBase<PartyBase>`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.View/SandBox.View.Map.Managers/SettlementVisualManager.cs`

## 概述

`SettlementVisualManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `SettlementVisualManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnTick
`public override void OnTick(float realDt, float dt)`

**用途 / Purpose:** 当 `tick` 事件触发时调用此方法。

### OnVisualIntersected
`public override bool OnVisualIntersected(Ray mouseRay, UIntPtr intersectedEntityIDs, Intersection intersectionInfos, int entityCount, Vec3 worldMouseNear, Vec3 worldMouseFar, Vec3 terrainIntersectionPoint, ref MapEntityVisual hoveredVisual, ref MapEntityVisual selectedVisual)`

**用途 / Purpose:** 当 `visual intersected` 事件触发时调用此方法。

### OnFrameTick
`public override void OnFrameTick(float dt)`

**用途 / Purpose:** 当 `frame tick` 事件触发时调用此方法。

### OnMouseClick
`public override bool OnMouseClick(MapEntityVisual visualOfSelectedEntity, Vec3 intersectionPoint, PathFaceRecord mouseOverFaceIndex, bool isDoubleClick)`

**用途 / Purpose:** 当 `mouse click` 事件触发时调用此方法。

### GetVisualOfEntity
`public override MapEntityVisual<PartyBase> GetVisualOfEntity(PartyBase partyBase)`

**用途 / Purpose:** 获取 `visual of entity` 的当前值。

### GetSettlementVisual
`public SettlementVisual GetSettlementVisual(Settlement settlement)`

**用途 / Purpose:** 获取 `settlement visual` 的当前值。

## 使用示例

```csharp
var manager = SettlementVisualManager.Current;
```

## 参见

- [完整类目录](../catalog)