<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerMissionAgentVisualSpawnComponent`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerMissionAgentVisualSpawnComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerMissionAgentVisualSpawnComponent : MissionNetwork`
**Base:** `MissionNetwork`
**File:** `TaleWorlds.MountAndBlade/MultiplayerMissionAgentVisualSpawnComponent.cs`

## 概述

`MultiplayerMissionAgentVisualSpawnComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `MultiplayerMissionAgentVisualSpawnComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### SpawnAgentVisualsForPeer
`public void SpawnAgentVisualsForPeer(MissionPeer missionPeer, AgentBuildData buildData, int selectedEquipmentSetIndex = -1, bool isBot = false, int totalTroopCount = 0)`

**用途 / Purpose:** 处理 `spawn agent visuals for peer` 相关逻辑。

### RemoveAgentVisuals
`public void RemoveAgentVisuals(MissionPeer missionPeer, bool sync = false)`

**用途 / Purpose:** 从当前集合/状态中移除 `agent visuals`。

### OnMyAgentSpawned
`public void OnMyAgentSpawned()`

**用途 / Purpose:** 当 `my agent spawned` 事件触发时调用此方法。

### OnPreMissionTick
`public override void OnPreMissionTick(float dt)`

**用途 / Purpose:** 当 `pre mission tick` 事件触发时调用此方法。

### GetSpawnPointFrameForPlayer
`public MatrixFrame GetSpawnPointFrameForPlayer(VirtualPlayer player, BattleSideEnum side, int agentVisualIndex, int totalTroopCount, bool isMounted = false)`

**用途 / Purpose:** 获取 `spawn point frame for player` 的当前值。

### FreeSpawnPointFromPlayer
`public void FreeSpawnPointFromPlayer(VirtualPlayer player)`

**用途 / Purpose:** 处理 `free spawn point from player` 相关逻辑。

## 使用示例

```csharp
var component = agent.GetComponent<MultiplayerMissionAgentVisualSpawnComponent>();
```

## 参见

- [完整类目录](../catalog)