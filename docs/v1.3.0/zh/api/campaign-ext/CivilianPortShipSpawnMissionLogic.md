<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CivilianPortShipSpawnMissionLogic`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CivilianPortShipSpawnMissionLogic

**Namespace:** SandBox.Missions
**Module:** SandBox.Missions
**Type:** `public class CivilianPortShipSpawnMissionLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `SandBox/Missions/CivilianPortShipSpawnMissionLogic.cs`

## 概述

`CivilianPortShipSpawnMissionLogic` 更偏向行为逻辑层：它响应事件、驱动流程，并在每帧或关键节点更新系统状态。

## 心智模型

把 `CivilianPortShipSpawnMissionLogic` 当作一个 Logic 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 当 `behavior initialize` 事件触发时调用此方法。

### EarlyStart
`public override void EarlyStart()`

**用途 / Purpose:** 处理 `early start` 相关逻辑。

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 当 `mission tick` 事件触发时调用此方法。

## 使用示例

```csharp
Mission.Current.AddMissionBehavior(new CivilianPortShipSpawnMissionLogic());
```

## 参见

- [完整类目录](../catalog)