---
title: "Team"
description: "Team 的自动生成类参考。"
---
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

**用途 / Purpose:** 为 custom order controller 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Team 实例
Team team = ...;
team.SetCustomOrderController(customMasterOrderController, customPlayerOrderController);
```

### UpdateCachedEnemyDataForFleeing
`public void UpdateCachedEnemyDataForFleeing()`

**用途 / Purpose:** 重新计算并更新 cached enemy data for fleeing 的最新表示。

```csharp
// 先通过子系统 API 拿到 Team 实例
Team team = ...;
team.UpdateCachedEnemyDataForFleeing();
```

### Reset
`public void Reset()`

**用途 / Purpose:** 将当前对象重置为默认或初始状态。

```csharp
// 先通过子系统 API 拿到 Team 实例
Team team = ...;
team.Reset();
```

### Clear
`public void Clear()`

**用途 / Purpose:** 清空当前对象中的内容。

```csharp
// 先通过子系统 API 拿到 Team 实例
Team team = ...;
team.Clear();
```

### DoesFirstFormationClassContainSecond
`public static bool DoesFirstFormationClassContainSecond(FormationClass f1, FormationClass f2)`

**用途 / Purpose:** 判断first formation class contain second这一条件在当前对象上是否成立。

```csharp
// 静态调用，不需要实例
Team.DoesFirstFormationClassContainSecond(f1, f2);
```

### GetFormationFormationClass
`public static FormationClass GetFormationFormationClass(Formation f)`

**用途 / Purpose:** 读取并返回当前对象中 formation formation class 的结果。

```csharp
// 静态调用，不需要实例
Team.GetFormationFormationClass(f);
```

### GetPlayerTeamFormationClass
`public static FormationClass GetPlayerTeamFormationClass(Agent mainAgent)`

**用途 / Purpose:** 读取并返回当前对象中 player team formation class 的结果。

```csharp
// 静态调用，不需要实例
Team.GetPlayerTeamFormationClass(mainAgent);
```

### AssignPlayerAsSergeantOfFormation
`public void AssignPlayerAsSergeantOfFormation(MissionPeer peer, FormationClass formationClass)`

**用途 / Purpose:** 调用 AssignPlayerAsSergeantOfFormation 对应的操作。

```csharp
// 先通过子系统 API 拿到 Team 实例
Team team = ...;
team.AssignPlayerAsSergeantOfFormation(peer, formationClass);
```

### AddTacticOption
`public void AddTacticOption(TacticComponent tacticOption)`

**用途 / Purpose:** 将 tactic option 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Team 实例
Team team = ...;
team.AddTacticOption(tacticOption);
```

### RemoveTacticOption
`public void RemoveTacticOption(Type tacticType)`

**用途 / Purpose:** 从当前容器或状态中移除 tactic option。

```csharp
// 先通过子系统 API 拿到 Team 实例
Team team = ...;
team.RemoveTacticOption(tacticType);
```

### ClearTacticOptions
`public void ClearTacticOptions()`

**用途 / Purpose:** 清空当前对象中的tactic options。

```csharp
// 先通过子系统 API 拿到 Team 实例
Team team = ...;
team.ClearTacticOptions();
```

### ResetTactic
`public void ResetTactic()`

**用途 / Purpose:** 将 tactic 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 Team 实例
Team team = ...;
team.ResetTactic();
```

### AddTeamAI
`public void AddTeamAI(TeamAIComponent teamAI, bool forceNotAIControlled = false)`

**用途 / Purpose:** 将 team a i 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Team 实例
Team team = ...;
team.AddTeamAI(teamAI, false);
```

### DelegateCommandToAI
`public void DelegateCommandToAI()`

**用途 / Purpose:** 调用 DelegateCommandToAI 对应的操作。

```csharp
// 先通过子系统 API 拿到 Team 实例
Team team = ...;
team.DelegateCommandToAI();
```

### RearrangeFormationsAccordingToFilter
`public void RearrangeFormationsAccordingToFilter( { "formation", "troopCount", "troopFilter", "excludedAgents" })`

**用途 / Purpose:** 调用 RearrangeFormationsAccordingToFilter 对应的操作。

```csharp
// 先通过子系统 API 拿到 Team 实例
Team team = ...;
team.RearrangeFormationsAccordingToFilter("formation", "troopCount", "troopFilter", });
```

### Tick
`public void Tick(float dt)`

**用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 Team 实例
Team team = ...;
team.Tick(0);
```

### GetFormation
`public Formation GetFormation(FormationClass formationIndex)`

**用途 / Purpose:** 读取并返回当前对象中 formation 的结果。

```csharp
// 先通过子系统 API 拿到 Team 实例
Team team = ...;
var result = team.GetFormation(formationIndex);
```

### SetIsEnemyOf
`public void SetIsEnemyOf(Team otherTeam, bool isEnemyOf)`

**用途 / Purpose:** 为 is enemy of 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Team 实例
Team team = ...;
team.SetIsEnemyOf(otherTeam, false);
```

### IsEnemyOf
`public bool IsEnemyOf(Team otherTeam)`

**用途 / Purpose:** 判断当前对象是否处于 enemy of 状态或条件。

```csharp
// 先通过子系统 API 拿到 Team 实例
Team team = ...;
var result = team.IsEnemyOf(otherTeam);
```

### IsFriendOf
`public bool IsFriendOf(Team otherTeam)`

**用途 / Purpose:** 判断当前对象是否处于 friend of 状态或条件。

```csharp
// 先通过子系统 API 拿到 Team 实例
Team team = ...;
var result = team.IsFriendOf(otherTeam);
```

### AddAgentToTeam
`public void AddAgentToTeam(Agent unit)`

**用途 / Purpose:** 将 agent to team 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Team 实例
Team team = ...;
team.AddAgentToTeam(unit);
```

### RemoveAgentFromTeam
`public void RemoveAgentFromTeam(Agent unit)`

**用途 / Purpose:** 从当前容器或状态中移除 agent from team。

```csharp
// 先通过子系统 API 拿到 Team 实例
Team team = ...;
team.RemoveAgentFromTeam(unit);
```

### DeactivateAgent
`public void DeactivateAgent(Agent agent)`

**用途 / Purpose:** 停用agent对应的资源、状态或功能。

```csharp
// 先通过子系统 API 拿到 Team 实例
Team team = ...;
team.DeactivateAgent(agent);
```

### OnAgentRemoved
`public void OnAgentRemoved(Agent agent)`

**用途 / Purpose:** 在 agent removed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Team 实例
Team team = ...;
team.OnAgentRemoved(agent);
```

### ToString
`public override string ToString()`

**用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 Team 实例
Team team = ...;
var result = team.ToString();
```

### OnMissionEnded
`public void OnMissionEnded()`

**用途 / Purpose:** 在 mission ended 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Team 实例
Team team = ...;
team.OnMissionEnded();
```

### TriggerOnFormationsChanged
`public void TriggerOnFormationsChanged(Formation formation)`

**用途 / Purpose:** 触发on formations changed对应的逻辑或事件。

```csharp
// 先通过子系统 API 拿到 Team 实例
Team team = ...;
team.TriggerOnFormationsChanged(formation);
```

### GetOrderControllerOf
`public OrderController GetOrderControllerOf(Agent agent)`

**用途 / Purpose:** 读取并返回当前对象中 order controller of 的结果。

```csharp
// 先通过子系统 API 拿到 Team 实例
Team team = ...;
var result = team.GetOrderControllerOf(agent);
```

### SetPlayerRole
`public void SetPlayerRole(bool isPlayerGeneral, bool isPlayerSergeant)`

**用途 / Purpose:** 为 player role 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Team 实例
Team team = ...;
team.SetPlayerRole(false, false);
```

### HasAnyEnemyTeamsWithAgents
`public bool HasAnyEnemyTeamsWithAgents(bool ignoreMountedAgents)`

**用途 / Purpose:** 判断当前对象是否已经持有 any enemy teams with agents。

```csharp
// 先通过子系统 API 拿到 Team 实例
Team team = ...;
var result = team.HasAnyEnemyTeamsWithAgents(false);
```

### HasAnyFormationsIncludingSpecialThatIsNotEmpty
`public bool HasAnyFormationsIncludingSpecialThatIsNotEmpty()`

**用途 / Purpose:** 判断当前对象是否已经持有 any formations including special that is not empty。

```csharp
// 先通过子系统 API 拿到 Team 实例
Team team = ...;
var result = team.HasAnyFormationsIncludingSpecialThatIsNotEmpty();
```

### GetFormationCount
`public int GetFormationCount()`

**用途 / Purpose:** 读取并返回当前对象中 formation count 的结果。

```csharp
// 先通过子系统 API 拿到 Team 实例
Team team = ...;
var result = team.GetFormationCount();
```

### GetAIControlledFormationCount
`public int GetAIControlledFormationCount()`

**用途 / Purpose:** 读取并返回当前对象中 a i controlled formation count 的结果。

```csharp
// 先通过子系统 API 拿到 Team 实例
Team team = ...;
var result = team.GetAIControlledFormationCount();
```

### GetAveragePositionOfEnemies
`public Vec2 GetAveragePositionOfEnemies()`

**用途 / Purpose:** 读取并返回当前对象中 average position of enemies 的结果。

```csharp
// 先通过子系统 API 拿到 Team 实例
Team team = ...;
var result = team.GetAveragePositionOfEnemies();
```

### GetAveragePosition
`public Vec2 GetAveragePosition()`

**用途 / Purpose:** 读取并返回当前对象中 average position 的结果。

```csharp
// 先通过子系统 API 拿到 Team 实例
Team team = ...;
var result = team.GetAveragePosition();
```

### GetMedianPosition
`public WorldPosition GetMedianPosition(Vec2 averagePosition)`

**用途 / Purpose:** 读取并返回当前对象中 median position 的结果。

```csharp
// 先通过子系统 API 拿到 Team 实例
Team team = ...;
var result = team.GetMedianPosition(averagePosition);
```

### GetWeightedAverageOfEnemies
`public Vec2 GetWeightedAverageOfEnemies(Vec2 basePoint)`

**用途 / Purpose:** 读取并返回当前对象中 weighted average of enemies 的结果。

```csharp
// 先通过子系统 API 拿到 Team 实例
Team team = ...;
var result = team.GetWeightedAverageOfEnemies(basePoint);
```

### DisableDetachmentTicking
`public void DisableDetachmentTicking()`

**用途 / Purpose:** 调用 DisableDetachmentTicking 对应的操作。

```csharp
// 先通过子系统 API 拿到 Team 实例
Team team = ...;
team.DisableDetachmentTicking();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
Team team = ...;
team.SetCustomOrderController(customMasterOrderController, customPlayerOrderController);
```

## 参见

- [本区域目录](../)