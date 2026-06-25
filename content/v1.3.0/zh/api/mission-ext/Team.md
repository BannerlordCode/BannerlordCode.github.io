---
title: "Team"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Team`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# Team

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class Team : IMissionTeam`
**Base:** `IMissionTeam`
**File:** `TaleWorlds.MountAndBlade/Team.cs`

## 概述

`Team` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Side` | `public BattleSideEnum Side { get; }` |
| `Mission` | `public Mission Mission { get; }` |
| `FormationsIncludingEmpty` | `public MBList<Formation> FormationsIncludingEmpty { get; }` |
| `FormationsIncludingSpecialAndEmpty` | `public MBList<Formation> FormationsIncludingSpecialAndEmpty { get; }` |
| `TeamAI` | `public TeamAIComponent TeamAI { get; }` |
| `IsPlayerTeam` | `public bool IsPlayerTeam { get; }` |
| `IsPlayerAlly` | `public bool IsPlayerAlly { get; }` |
| `TeamSide` | `public TeamSideEnum TeamSide { get; }` |
| `IsDefender` | `public bool IsDefender { get; }` |
| `IsAttacker` | `public bool IsAttacker { get; }` |
| `Color` | `public uint Color { get; }` |
| `Color2` | `public uint Color2 { get; }` |
| `Banner` | `public Banner Banner { get; }` |
| `MasterOrderController` | `public OrderController MasterOrderController { get; }` |
| `PlayerOrderController` | `public OrderController PlayerOrderController { get; }` |
| `QuerySystem` | `public TeamQuerySystem QuerySystem { get; }` |
| `DetachmentManager` | `public DetachmentManager DetachmentManager { get; }` |
| `IsPlayerGeneral` | `public bool IsPlayerGeneral { get; }` |
| `IsPlayerSergeant` | `public bool IsPlayerSergeant { get; }` |
| `ActiveAgents` | `public MBReadOnlyList<Agent> ActiveAgents { get; }` |
| `TeamAgents` | `public MBReadOnlyList<Agent> TeamAgents { get; }` |
| `CachedEnemyDataForFleeing` | `public MBReadOnlyList<ValueTuple<float, WorldPosition, int, Vec2, Vec2, bool>> CachedEnemyDataForFleeing { get; }` |
| `TeamIndex` | `public int TeamIndex { get; }` |
| `MoraleChangeFactor` | `public float MoraleChangeFactor { get; }` |
| `GeneralsFormation` | `public Formation GeneralsFormation { get; set; }` |
| `BodyGuardFormation` | `public Formation BodyGuardFormation { get; set; }` |
| `GeneralAgent` | `public Agent GeneralAgent { get; set; }` |
| `Heroes` | `public IEnumerable<Agent> Heroes { get; }` |
| `HasBots` | `public bool HasBots { get; }` |
| `Leader` | `public Agent Leader { get; }` |
| `Invalid` | `public static Team Invalid { get; }` |
| `IsValid` | `public bool IsValid { get; }` |
| `HasTeamAi` | `public bool HasTeamAi { get; }` |

## 主要方法

### SetCustomOrderController
`public void SetCustomOrderController(OrderController customMasterOrderController, OrderController customPlayerOrderController)`

**用途 / Purpose:** 设置 `custom order controller` 的值或状态。

### UpdateCachedEnemyDataForFleeing
`public void UpdateCachedEnemyDataForFleeing()`

**用途 / Purpose:** 更新 `cached enemy data for fleeing` 的状态或数据。

### Reset
`public void Reset()`

**用途 / Purpose:** 将 `reset` 重置为初始状态。

### Clear
`public void Clear()`

**用途 / Purpose:** 处理 `clear` 相关逻辑。

### DoesFirstFormationClassContainSecond
`public static bool DoesFirstFormationClassContainSecond(FormationClass f1, FormationClass f2)`

**用途 / Purpose:** 处理 `does first formation class contain second` 相关逻辑。

### GetFormationFormationClass
`public static FormationClass GetFormationFormationClass(Formation f)`

**用途 / Purpose:** 获取 `formation formation class` 的当前值。

### GetPlayerTeamFormationClass
`public static FormationClass GetPlayerTeamFormationClass(Agent mainAgent)`

**用途 / Purpose:** 获取 `player team formation class` 的当前值。

### AssignPlayerAsSergeantOfFormation
`public void AssignPlayerAsSergeantOfFormation(MissionPeer peer, FormationClass formationClass)`

**用途 / Purpose:** 处理 `assign player as sergeant of formation` 相关逻辑。

### AddTacticOption
`public void AddTacticOption(TacticComponent tacticOption)`

**用途 / Purpose:** 向当前集合/状态中添加 `tactic option`。

### RemoveTacticOption
`public void RemoveTacticOption(Type tacticType)`

**用途 / Purpose:** 从当前集合/状态中移除 `tactic option`。

### ClearTacticOptions
`public void ClearTacticOptions()`

**用途 / Purpose:** 处理 `clear tactic options` 相关逻辑。

### ResetTactic
`public void ResetTactic()`

**用途 / Purpose:** 将 `tactic` 重置为初始状态。

### AddTeamAI
`public void AddTeamAI(TeamAIComponent teamAI, bool forceNotAIControlled = false)`

**用途 / Purpose:** 向当前集合/状态中添加 `team a i`。

### DelegateCommandToAI
`public void DelegateCommandToAI()`

**用途 / Purpose:** 处理 `delegate command to a i` 相关逻辑。

### RearrangeFormationsAccordingToFilter
`public void RearrangeFormationsAccordingToFilter( { "formation", "troopCount", "troopFilter", "excludedAgents" })`

**用途 / Purpose:** 处理 `rearrange formations according to filter` 相关逻辑。

### Tick
`public void Tick(float dt)`

**用途 / Purpose:** 处理 `tick` 相关逻辑。

### GetFormation
`public Formation GetFormation(FormationClass formationIndex)`

**用途 / Purpose:** 获取 `formation` 的当前值。

### SetIsEnemyOf
`public void SetIsEnemyOf(Team otherTeam, bool isEnemyOf)`

**用途 / Purpose:** 设置 `is enemy of` 的值或状态。

### IsEnemyOf
`public bool IsEnemyOf(Team otherTeam)`

**用途 / Purpose:** 处理 `is enemy of` 相关逻辑。

### IsFriendOf
`public bool IsFriendOf(Team otherTeam)`

**用途 / Purpose:** 处理 `is friend of` 相关逻辑。

### AddAgentToTeam
`public void AddAgentToTeam(Agent unit)`

**用途 / Purpose:** 向当前集合/状态中添加 `agent to team`。

### RemoveAgentFromTeam
`public void RemoveAgentFromTeam(Agent unit)`

**用途 / Purpose:** 从当前集合/状态中移除 `agent from team`。

### DeactivateAgent
`public void DeactivateAgent(Agent agent)`

**用途 / Purpose:** 处理 `deactivate agent` 相关逻辑。

### OnAgentRemoved
`public void OnAgentRemoved(Agent agent)`

**用途 / Purpose:** 当 `agent removed` 事件触发时调用此方法。

### ToString
`public override string ToString()`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### OnMissionEnded
`public void OnMissionEnded()`

**用途 / Purpose:** 当 `mission ended` 事件触发时调用此方法。

### TriggerOnFormationsChanged
`public void TriggerOnFormationsChanged(Formation formation)`

**用途 / Purpose:** 处理 `trigger on formations changed` 相关逻辑。

### GetOrderControllerOf
`public OrderController GetOrderControllerOf(Agent agent)`

**用途 / Purpose:** 获取 `order controller of` 的当前值。

### SetPlayerRole
`public void SetPlayerRole(bool isPlayerGeneral, bool isPlayerSergeant)`

**用途 / Purpose:** 设置 `player role` 的值或状态。

### HasAnyEnemyTeamsWithAgents
`public bool HasAnyEnemyTeamsWithAgents(bool ignoreMountedAgents)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `any enemy teams with agents`。

### HasAnyFormationsIncludingSpecialThatIsNotEmpty
`public bool HasAnyFormationsIncludingSpecialThatIsNotEmpty()`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `any formations including special that is not empty`。

### GetFormationCount
`public int GetFormationCount()`

**用途 / Purpose:** 获取 `formation count` 的当前值。

### GetAIControlledFormationCount
`public int GetAIControlledFormationCount()`

**用途 / Purpose:** 获取 `a i controlled formation count` 的当前值。

### GetAveragePositionOfEnemies
`public Vec2 GetAveragePositionOfEnemies()`

**用途 / Purpose:** 获取 `average position of enemies` 的当前值。

### GetAveragePosition
`public Vec2 GetAveragePosition()`

**用途 / Purpose:** 获取 `average position` 的当前值。

### GetMedianPosition
`public WorldPosition GetMedianPosition(Vec2 averagePosition)`

**用途 / Purpose:** 获取 `median position` 的当前值。

### GetWeightedAverageOfEnemies
`public Vec2 GetWeightedAverageOfEnemies(Vec2 basePoint)`

**用途 / Purpose:** 获取 `weighted average of enemies` 的当前值。

### DisableDetachmentTicking
`public void DisableDetachmentTicking()`

**用途 / Purpose:** 处理 `disable detachment ticking` 相关逻辑。

## 使用示例

```csharp
var value = new Team();
value.SetCustomOrderController(customMasterOrderController, customPlayerOrderController);
```

## 参见

- [完整类目录](../catalog)