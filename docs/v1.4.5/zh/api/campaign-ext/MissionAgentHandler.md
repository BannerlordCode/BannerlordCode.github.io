<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionAgentHandler`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionAgentHandler

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class MissionAgentHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Missions.MissionLogics/MissionAgentHandler.cs`

## 概述

`MissionAgentHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `MissionAgentHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `TownPassageProps` | `public List<UsableMachine> TownPassageProps { get; }` |
| `UsablePoints` | `public List<UsableMachine> UsablePoints { get; }` |

## 主要方法

### HasPassages
`public bool HasPassages()`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `passages`。

### EarlyStart
`public override void EarlyStart()`

**用途 / Purpose:** 处理 `early start` 相关逻辑。

### OnRenderingStarted
`public override void OnRenderingStarted()`

**用途 / Purpose:** 当 `rendering started` 事件触发时调用此方法。

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 当 `mission tick` 事件触发时调用此方法。

### OnMissionModeChange
`public override void OnMissionModeChange(MissionMode oldMissionMode, bool atStart)`

**用途 / Purpose:** 当 `mission mode change` 事件触发时调用此方法。

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**用途 / Purpose:** 当 `agent removed` 事件触发时调用此方法。

### DetectMissingEntities
`public void DetectMissingEntities()`

**用途 / Purpose:** 处理 `detect missing entities` 相关逻辑。

### FindUnusedUsablePointCount
`public Dictionary<string, int> FindUnusedUsablePointCount()`

**用途 / Purpose:** 处理 `find unused usable point count` 相关逻辑。

### SpawnLocationCharacters
`public void SpawnLocationCharacters(string overridenTagValue = null)`

**用途 / Purpose:** 处理 `spawn location characters` 相关逻辑。

### SpawnDefaultLocationCharacter
`public Agent SpawnDefaultLocationCharacter(LocationCharacter locationCharacter, bool simulateAgentAfterSpawn = false)`

**用途 / Purpose:** 处理 `spawn default location character` 相关逻辑。

### SimulateAgent
`public void SimulateAgent(Agent agent)`

**用途 / Purpose:** 处理 `simulate agent` 相关逻辑。

### FadeoutExitingLocationCharacter
`public void FadeoutExitingLocationCharacter(LocationCharacter locationCharacter)`

**用途 / Purpose:** 处理 `fadeout exiting location character` 相关逻辑。

### SpawnEnteringLocationCharacter
`public void SpawnEnteringLocationCharacter(LocationCharacter locationCharacter, Location fromLocation)`

**用途 / Purpose:** 处理 `spawn entering location character` 相关逻辑。

### HasUsablePointWithTag
`public bool HasUsablePointWithTag(string tag)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `usable point with tag`。

### GetAllSpawnTags
`public IEnumerable<string> GetAllSpawnTags()`

**用途 / Purpose:** 获取 `all spawn tags` 的当前值。

### GetAllUsablePointsWithTag
`public List<UsableMachine> GetAllUsablePointsWithTag(string tag)`

**用途 / Purpose:** 获取 `all usable points with tag` 的当前值。

### SpawnWanderingAgent
`public Agent SpawnWanderingAgent(LocationCharacter locationCharacter)`

**用途 / Purpose:** 处理 `spawn wandering agent` 相关逻辑。

### SpawnWanderingAgentWithDelay
`public void SpawnWanderingAgentWithDelay(LocationCharacter locationCharacter, MatrixFrame matrixFrame, GameEntity spawnEntity, bool noHorses = true, bool hasTorch = false, float delay = 3f)`

**用途 / Purpose:** 处理 `spawn wandering agent with delay` 相关逻辑。

### SpawnWanderingAgentWithInitialFrame
`public Agent SpawnWanderingAgentWithInitialFrame(LocationCharacter locationCharacter, MatrixFrame spawnPointFrame, WeakGameEntity spawnEntity, bool noHorses = true, bool hasTorch = false)`

**用途 / Purpose:** 处理 `spawn wandering agent with initial frame` 相关逻辑。

### GetRandomTournamentTeamColor
`public static uint GetRandomTournamentTeamColor(int teamIndex)`

**用途 / Purpose:** 获取 `random tournament team color` 的当前值。

### FindUnusedPointWithTagForAgent
`public UsableMachine FindUnusedPointWithTagForAgent(Agent agent, string tag)`

**用途 / Purpose:** 处理 `find unused point with tag for agent` 相关逻辑。

### FindUnusedPoints
`public List<UsableMachine> FindUnusedPoints(string tag)`

**用途 / Purpose:** 处理 `find unused points` 相关逻辑。

### FindAllUnusedPoints
`public List<UsableMachine> FindAllUnusedPoints(Agent agent, string primaryTag)`

**用途 / Purpose:** 处理 `find all unused points` 相关逻辑。

### TeleportTargetAgentNearReferenceAgent
`public void TeleportTargetAgentNearReferenceAgent(Agent referenceAgent, Agent teleportAgent, bool teleportFollowers, bool teleportOpposite)`

**用途 / Purpose:** 处理 `teleport target agent near reference agent` 相关逻辑。

### GetPointCountOfUsableMachine
`public static int GetPointCountOfUsableMachine(UsableMachine usableMachine, bool checkForUnusedOnes)`

**用途 / Purpose:** 获取 `point count of usable machine` 的当前值。

## 使用示例

```csharp
Mission.Current.AddMissionBehavior(new MissionAgentHandler());
```

## 参见

- [完整类目录](../catalog)