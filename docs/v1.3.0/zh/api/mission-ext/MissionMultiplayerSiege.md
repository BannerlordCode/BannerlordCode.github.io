<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionMultiplayerSiege`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionMultiplayerSiege

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionMultiplayerSiege : MissionMultiplayerGameModeBase, IAnalyticsFlagInfo, IMissionBehavior`
**Base:** `MissionMultiplayerGameModeBase`
**File:** `TaleWorlds.MountAndBlade/MissionMultiplayerSiege.cs`

## 概述

`MissionMultiplayerSiege` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsGameModeHidingAllAgentVisuals` | `public override bool IsGameModeHidingAllAgentVisuals { get; }` |
| `IsGameModeUsingOpposingTeams` | `public override bool IsGameModeUsingOpposingTeams { get; }` |
| `AllCapturePoints` | `public MBReadOnlyList<FlagCapturePoint> AllCapturePoints { get; }` |
| `Contribution` | `public float Contribution { get; }` |

## 主要方法

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 当 `behavior initialize` 事件触发时调用此方法。

### GetMissionType
`public override MultiplayerGameType GetMissionType()`

**用途 / Purpose:** 获取 `mission type` 的当前值。

### UseRoundController
`public override bool UseRoundController()`

**用途 / Purpose:** 处理 `use round controller` 相关逻辑。

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 处理 `after start` 相关逻辑。

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 当 `mission tick` 事件触发时调用此方法。

### CheckForMatchEnd
`public override bool CheckForMatchEnd()`

**用途 / Purpose:** 处理 `check for match end` 相关逻辑。

### GetWinnerTeam
`public override Team GetWinnerTeam()`

**用途 / Purpose:** 获取 `winner team` 的当前值。

### GetFlagOwnerTeam
`public Team GetFlagOwnerTeam(FlagCapturePoint flag)`

**用途 / Purpose:** 获取 `flag owner team` 的当前值。

### CheckForWarmupEnd
`public override bool CheckForWarmupEnd()`

**用途 / Purpose:** 处理 `check for warmup end` 相关逻辑。

### OnPeerChangedTeam
`public override void OnPeerChangedTeam(NetworkCommunicator peer, Team oldTeam, Team newTeam)`

**用途 / Purpose:** 当 `peer changed team` 事件触发时调用此方法。

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**用途 / Purpose:** 当 `agent removed` 事件触发时调用此方法。

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**用途 / Purpose:** 当 `remove behavior` 事件触发时调用此方法。

### OnClearScene
`public override void OnClearScene()`

**用途 / Purpose:** 当 `clear scene` 事件触发时调用此方法。

### RegisterObjective
`public bool RegisterObjective(GameEntity entity)`

**用途 / Purpose:** 处理 `register objective` 相关逻辑。

### AddContributionForObjective
`public void AddContributionForObjective(GameEntity objectiveEntity, MissionPeer contributorPeer, float contribution)`

**用途 / Purpose:** 向当前集合/状态中添加 `contribution for objective`。

### GetAllContributorsForSideAndClear
`public List<KeyValuePair<MissionPeer, float>> GetAllContributorsForSideAndClear(GameEntity objectiveEntity, BattleSideEnum side)`

**用途 / Purpose:** 获取 `all contributors for side and clear` 的当前值。

### IncreaseAmount
`public void IncreaseAmount(float deltaContribution)`

**用途 / Purpose:** 处理 `increase amount` 相关逻辑。

### OnDestructableComponentDestroyedDelegate
`public delegate void OnDestructableComponentDestroyedDelegate(DestructableComponent destructableComponent, ScriptComponentBehavior attackerScriptComponentBehaviour, MissionPeer contributors)`

**用途 / Purpose:** 当 `destructable component destroyed delegate` 事件触发时调用此方法。

### OnObjectiveGoldGainedDelegate
`public delegate void OnObjectiveGoldGainedDelegate(MissionPeer peer, int goldGain)`

**用途 / Purpose:** 当 `objective gold gained delegate` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new MissionMultiplayerSiege();
value.OnBehaviorInitialize();
```

## 参见

- [完整类目录](../catalog)