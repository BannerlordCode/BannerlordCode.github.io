---
title: "MissionAgentHandler"
description: "MissionAgentHandler 的自动生成类参考。"
---
# MissionAgentHandler

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class MissionAgentHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `SandBox/Missions/MissionLogics/MissionAgentHandler.cs`

## 概述

`MissionAgentHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `MissionAgentHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `TownPassageProps` | `public List<UsableMachine> TownPassageProps { get; }` |
| `DisabledPassages` | `public List<UsableMachine> DisabledPassages { get; }` |
| `UsablePoints` | `public List<UsableMachine> UsablePoints { get; }` |

## 主要方法

### HasPassages
`public bool HasPassages()`

**用途 / Purpose:** 判断当前对象是否已经持有 passages。

```csharp
// 先通过子系统 API 拿到 MissionAgentHandler 实例
MissionAgentHandler missionAgentHandler = ...;
var result = missionAgentHandler.HasPassages();
```

### EarlyStart
`public override void EarlyStart()`

**用途 / Purpose:** 调用 EarlyStart 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionAgentHandler 实例
MissionAgentHandler missionAgentHandler = ...;
missionAgentHandler.EarlyStart();
```

### OnRenderingStarted
`public override void OnRenderingStarted()`

**用途 / Purpose:** 在 rendering started 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionAgentHandler 实例
MissionAgentHandler missionAgentHandler = ...;
missionAgentHandler.OnRenderingStarted();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 在 mission tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionAgentHandler 实例
MissionAgentHandler missionAgentHandler = ...;
missionAgentHandler.OnMissionTick(0);
```

### OnMissionModeChange
`public override void OnMissionModeChange(MissionMode oldMissionMode, bool atStart)`

**用途 / Purpose:** 在 mission mode change 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionAgentHandler 实例
MissionAgentHandler missionAgentHandler = ...;
missionAgentHandler.OnMissionModeChange(oldMissionMode, false);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**用途 / Purpose:** 在 agent removed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionAgentHandler 实例
MissionAgentHandler missionAgentHandler = ...;
missionAgentHandler.OnAgentRemoved(affectedAgent, affectorAgent, agentState, killingBlow);
```

### DetectMissingEntities
`public void DetectMissingEntities()`

**用途 / Purpose:** 调用 DetectMissingEntities 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionAgentHandler 实例
MissionAgentHandler missionAgentHandler = ...;
missionAgentHandler.DetectMissingEntities();
```

### FindUnusedUsablePointCount
`public Dictionary<string, int> FindUnusedUsablePointCount()`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的unused usable point count。

```csharp
// 先通过子系统 API 拿到 MissionAgentHandler 实例
MissionAgentHandler missionAgentHandler = ...;
var result = missionAgentHandler.FindUnusedUsablePointCount();
```

### SpawnLocationCharacters
`public void SpawnLocationCharacters(string overridenTagValue = null)`

**用途 / Purpose:** 调用 SpawnLocationCharacters 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionAgentHandler 实例
MissionAgentHandler missionAgentHandler = ...;
missionAgentHandler.SpawnLocationCharacters("example");
```

### SpawnDefaultLocationCharacter
`public Agent SpawnDefaultLocationCharacter(LocationCharacter locationCharacter, bool simulateAgentAfterSpawn = false)`

**用途 / Purpose:** 调用 SpawnDefaultLocationCharacter 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionAgentHandler 实例
MissionAgentHandler missionAgentHandler = ...;
var result = missionAgentHandler.SpawnDefaultLocationCharacter(locationCharacter, false);
```

### SimulateAgent
`public void SimulateAgent(Agent agent)`

**用途 / Purpose:** 调用 SimulateAgent 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionAgentHandler 实例
MissionAgentHandler missionAgentHandler = ...;
missionAgentHandler.SimulateAgent(agent);
```

### FadeoutExitingLocationCharacter
`public void FadeoutExitingLocationCharacter(LocationCharacter locationCharacter)`

**用途 / Purpose:** 调用 FadeoutExitingLocationCharacter 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionAgentHandler 实例
MissionAgentHandler missionAgentHandler = ...;
missionAgentHandler.FadeoutExitingLocationCharacter(locationCharacter);
```

### SpawnEnteringLocationCharacter
`public void SpawnEnteringLocationCharacter(LocationCharacter locationCharacter, Location fromLocation)`

**用途 / Purpose:** 调用 SpawnEnteringLocationCharacter 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionAgentHandler 实例
MissionAgentHandler missionAgentHandler = ...;
missionAgentHandler.SpawnEnteringLocationCharacter(locationCharacter, fromLocation);
```

### HasUsablePointWithTag
`public bool HasUsablePointWithTag(string tag)`

**用途 / Purpose:** 判断当前对象是否已经持有 usable point with tag。

```csharp
// 先通过子系统 API 拿到 MissionAgentHandler 实例
MissionAgentHandler missionAgentHandler = ...;
var result = missionAgentHandler.HasUsablePointWithTag("example");
```

### GetAllSpawnTags
`public IEnumerable<string> GetAllSpawnTags()`

**用途 / Purpose:** 读取并返回当前对象中 all spawn tags 的结果。

```csharp
// 先通过子系统 API 拿到 MissionAgentHandler 实例
MissionAgentHandler missionAgentHandler = ...;
var result = missionAgentHandler.GetAllSpawnTags();
```

### GetAllUsablePointsWithTag
`public List<UsableMachine> GetAllUsablePointsWithTag(string tag)`

**用途 / Purpose:** 读取并返回当前对象中 all usable points with tag 的结果。

```csharp
// 先通过子系统 API 拿到 MissionAgentHandler 实例
MissionAgentHandler missionAgentHandler = ...;
var result = missionAgentHandler.GetAllUsablePointsWithTag("example");
```

### SpawnWanderingAgent
`public Agent SpawnWanderingAgent(LocationCharacter locationCharacter)`

**用途 / Purpose:** 调用 SpawnWanderingAgent 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionAgentHandler 实例
MissionAgentHandler missionAgentHandler = ...;
var result = missionAgentHandler.SpawnWanderingAgent(locationCharacter);
```

### SpawnWanderingAgentWithDelay
`public void SpawnWanderingAgentWithDelay(LocationCharacter locationCharacter, MatrixFrame matrixFrame, GameEntity spawnEntity, bool noHorses = true, bool hasTorch = false, float delay = 3f)`

**用途 / Purpose:** 调用 SpawnWanderingAgentWithDelay 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionAgentHandler 实例
MissionAgentHandler missionAgentHandler = ...;
missionAgentHandler.SpawnWanderingAgentWithDelay(locationCharacter, matrixFrame, spawnEntity, false, false, 0);
```

### SpawnWanderingAgentWithInitialFrame
`public Agent SpawnWanderingAgentWithInitialFrame(LocationCharacter locationCharacter, MatrixFrame spawnPointFrame, WeakGameEntity spawnEntity, bool noHorses = true, bool hasTorch = false)`

**用途 / Purpose:** 调用 SpawnWanderingAgentWithInitialFrame 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionAgentHandler 实例
MissionAgentHandler missionAgentHandler = ...;
var result = missionAgentHandler.SpawnWanderingAgentWithInitialFrame(locationCharacter, spawnPointFrame, spawnEntity, false, false);
```

### GetRandomTournamentTeamColor
`public static uint GetRandomTournamentTeamColor(int teamIndex)`

**用途 / Purpose:** 读取并返回当前对象中 random tournament team color 的结果。

```csharp
// 静态调用，不需要实例
MissionAgentHandler.GetRandomTournamentTeamColor(0);
```

### GetAgentSettlementColors
`public static ValueTuple<uint, uint> GetAgentSettlementColors(LocationCharacter locationCharacter)`

**用途 / Purpose:** 读取并返回当前对象中 agent settlement colors 的结果。

```csharp
// 静态调用，不需要实例
MissionAgentHandler.GetAgentSettlementColors(locationCharacter);
```

### FindUnusedPointWithTagForAgent
`public UsableMachine FindUnusedPointWithTagForAgent(Agent agent, string tag)`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的unused point with tag for agent。

```csharp
// 先通过子系统 API 拿到 MissionAgentHandler 实例
MissionAgentHandler missionAgentHandler = ...;
var result = missionAgentHandler.FindUnusedPointWithTagForAgent(agent, "example");
```

### FindUnusedPoints
`public List<UsableMachine> FindUnusedPoints(string tag)`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的unused points。

```csharp
// 先通过子系统 API 拿到 MissionAgentHandler 实例
MissionAgentHandler missionAgentHandler = ...;
var result = missionAgentHandler.FindUnusedPoints("example");
```

### FindAllUnusedPoints
`public List<UsableMachine> FindAllUnusedPoints(Agent agent, string primaryTag)`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的all unused points。

```csharp
// 先通过子系统 API 拿到 MissionAgentHandler 实例
MissionAgentHandler missionAgentHandler = ...;
var result = missionAgentHandler.FindAllUnusedPoints(agent, "example");
```

### TeleportTargetAgentNearReferenceAgent
`public void TeleportTargetAgentNearReferenceAgent(Agent referenceAgent, Agent teleportAgent, bool teleportFollowers, bool teleportOpposite)`

**用途 / Purpose:** 调用 TeleportTargetAgentNearReferenceAgent 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionAgentHandler 实例
MissionAgentHandler missionAgentHandler = ...;
missionAgentHandler.TeleportTargetAgentNearReferenceAgent(referenceAgent, teleportAgent, false, false);
```

### GetPointCountOfUsableMachine
`public static int GetPointCountOfUsableMachine(UsableMachine usableMachine, bool checkForUnusedOnes)`

**用途 / Purpose:** 读取并返回当前对象中 point count of usable machine 的结果。

```csharp
// 静态调用，不需要实例
MissionAgentHandler.GetPointCountOfUsableMachine(usableMachine, false);
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<MissionAgentHandler>();
```

## 参见

- [本区域目录](../)