---
title: "MultiplayerMissionAgentVisualSpawnComponent"
description: "MultiplayerMissionAgentVisualSpawnComponent 的自动生成类参考。"
---
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

**用途 / Purpose:** **用途 / Purpose:** 调用 SpawnAgentVisualsForPeer 对应的操作。

```csharp
// 先通过子系统 API 拿到 MultiplayerMissionAgentVisualSpawnComponent 实例
MultiplayerMissionAgentVisualSpawnComponent multiplayerMissionAgentVisualSpawnComponent = ...;
multiplayerMissionAgentVisualSpawnComponent.SpawnAgentVisualsForPeer(missionPeer, buildData, 0, false, 0);
```

### RemoveAgentVisuals
`public void RemoveAgentVisuals(MissionPeer missionPeer, bool sync = false)`

**用途 / Purpose:** **用途 / Purpose:** 从当前容器或状态中移除 agent visuals。

```csharp
// 先通过子系统 API 拿到 MultiplayerMissionAgentVisualSpawnComponent 实例
MultiplayerMissionAgentVisualSpawnComponent multiplayerMissionAgentVisualSpawnComponent = ...;
multiplayerMissionAgentVisualSpawnComponent.RemoveAgentVisuals(missionPeer, false);
```

### OnMyAgentSpawned
`public void OnMyAgentSpawned()`

**用途 / Purpose:** **用途 / Purpose:** 在 my agent spawned 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MultiplayerMissionAgentVisualSpawnComponent 实例
MultiplayerMissionAgentVisualSpawnComponent multiplayerMissionAgentVisualSpawnComponent = ...;
multiplayerMissionAgentVisualSpawnComponent.OnMyAgentSpawned();
```

### OnPreMissionTick
`public override void OnPreMissionTick(float dt)`

**用途 / Purpose:** **用途 / Purpose:** 在 pre mission tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MultiplayerMissionAgentVisualSpawnComponent 实例
MultiplayerMissionAgentVisualSpawnComponent multiplayerMissionAgentVisualSpawnComponent = ...;
multiplayerMissionAgentVisualSpawnComponent.OnPreMissionTick(0);
```

### GetSpawnPointFrameForPlayer
`public MatrixFrame GetSpawnPointFrameForPlayer(VirtualPlayer player, BattleSideEnum side, int agentVisualIndex, int totalTroopCount, bool isMounted = false)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 spawn point frame for player 的结果。

```csharp
// 先通过子系统 API 拿到 MultiplayerMissionAgentVisualSpawnComponent 实例
MultiplayerMissionAgentVisualSpawnComponent multiplayerMissionAgentVisualSpawnComponent = ...;
var result = multiplayerMissionAgentVisualSpawnComponent.GetSpawnPointFrameForPlayer(player, side, 0, 0, false);
```

### FreeSpawnPointFromPlayer
`public void FreeSpawnPointFromPlayer(VirtualPlayer player)`

**用途 / Purpose:** **用途 / Purpose:** 调用 FreeSpawnPointFromPlayer 对应的操作。

```csharp
// 先通过子系统 API 拿到 MultiplayerMissionAgentVisualSpawnComponent 实例
MultiplayerMissionAgentVisualSpawnComponent multiplayerMissionAgentVisualSpawnComponent = ...;
multiplayerMissionAgentVisualSpawnComponent.FreeSpawnPointFromPlayer(player);
```

## 使用示例

```csharp
var component = agent.GetComponent<MultiplayerMissionAgentVisualSpawnComponent>();
```

## 参见

- [本区域目录](../)