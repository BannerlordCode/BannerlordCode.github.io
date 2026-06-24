<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionLocationLogic`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionLocationLogic

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class MissionLocationLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Missions.MissionLogics/MissionLocationLogic.cs`

## 概述

`MissionLocationLogic` 更偏向行为逻辑层：它响应事件、驱动流程，并在每帧或关键节点更新系统状态。

## 心智模型

把 `MissionLocationLogic` 当作一个 Logic 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### EarlyStart
`public override void EarlyStart()`

**用途 / Purpose:** 处理 `early start` 相关逻辑。

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**用途 / Purpose:** 当 `agent removed` 事件触发时调用此方法。

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**用途 / Purpose:** 当 `remove behavior` 事件触发时调用此方法。

### OnCreated
`public override void OnCreated()`

**用途 / Purpose:** 当 `created` 事件触发时调用此方法。

### SpawnCharactersAccompanyingPlayer
`public void SpawnCharactersAccompanyingPlayer(bool noHorse)`

**用途 / Purpose:** 处理 `spawn characters accompanying player` 相关逻辑。

### GetSpawnFrameOfPassage
`public MatrixFrame GetSpawnFrameOfPassage(Location location)`

**用途 / Purpose:** 获取 `spawn frame of passage` 的当前值。

## 使用示例

```csharp
Mission.Current.AddMissionBehavior(new MissionLocationLogic());
```

## 参见

- [完整类目录](../catalog)