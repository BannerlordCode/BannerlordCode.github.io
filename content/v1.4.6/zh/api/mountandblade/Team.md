---
title: "Team"
description: "Team：TaleWorlds.MountAndBlade 的 public 类，继承 IMissionTeam；公开成员 77 个（方法 39、属性 33、字段 0）。源文件 TaleWorlds.MountAndBlade/Team.cs。"
---
# Team

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class Team : IMissionTeam`
**File:** `TaleWorlds.MountAndBlade/Team.cs`

## 概述

Team 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/Team.cs。它是一个 public 类，实现/继承 IMissionTeam，继承链为 Team → IMissionTeam。public/protected 成员共 77 个：39 方法、33 属性、4 事件、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：Team 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 Team → IMissionTeam。成员构成以方法为主（方法 39/77，属性 33/77），对外主要以操作入口暴露。继承链上的 IMissionTeam 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/Team.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Formation>OnFormationsChanged;` | `public event Action<Team, Formation>OnFormationsChanged;` | 事件 |
| `OnOrderIssued;` | `public event OnOrderIssuedDelegate OnOrderIssued;` | 事件 |
| `Action` | `public event Action<Formation>OnFormationAIActiveBehaviorChanged;` | 事件 |
| `Action` | `public event Action<Team>OnFormationsChangedInDeployment;` | 事件 |
| `Side` | `public BattleSideEnum Side` | 属性 |
| `Mission` | `public Mission Mission` | 属性 |
| `MBList` | `public MBList<Formation>FormationsIncludingEmpty` | 属性 |
| `MBList` | `public MBList<Formation>FormationsIncludingSpecialAndEmpty` | 属性 |
| `TeamAI` | `public TeamAIComponent TeamAI` | 属性 |
| `IsPlayerTeam` | `public bool IsPlayerTeam` | 属性 |
| `IsPlayerAlly` | `public bool IsPlayerAlly` | 属性 |
| `TeamSide` | `public TeamSideEnum TeamSide` | 属性 |
| `IsDefender` | `public bool IsDefender` | 属性 |
| `IsAttacker` | `public bool IsAttacker` | 属性 |
| `Color` | `public uint Color` | 属性 |
| `Color2` | `public uint Color2` | 属性 |
| `Banner` | `public Banner Banner` | 属性 |
| `MasterOrderController` | `public OrderController MasterOrderController` | 属性 |
| `PlayerOrderController` | `public OrderController PlayerOrderController` | 属性 |
| `QuerySystem` | `public TeamQuerySystem QuerySystem` | 属性 |
| `DetachmentManager` | `public DetachmentManager DetachmentManager` | 属性 |
| `IsPlayerGeneral` | `public bool IsPlayerGeneral` | 属性 |
| `IsPlayerSergeant` | `public bool IsPlayerSergeant` | 属性 |
| `MBReadOnlyList` | `public MBReadOnlyList<Agent>ActiveAgents` | 属性 |
| `MBReadOnlyList` | `public MBReadOnlyList<Agent>TeamAgents` | 属性 |
| `bool>>CachedEnemyDataForFleeing` | `public MBReadOnlyList<ValueTuple<float, WorldPosition, int, Vec2, Vec2, bool>>CachedEnemyDataForFleeing` | 属性 |
| `TeamIndex` | `public int TeamIndex` | 属性 |
| `Team` | `public Team(MBTeam mbTeam, BattleSideEnum side, Mission mission, uint color = 4294967295U, uint color2 = 4294967295U, Banner banner = null)` | 构造函数 |
| `SetCustomOrderController` | `public void SetCustomOrderController(OrderController customMasterOrderController, OrderController customPlayerOrderController)` | 方法 |
| `UpdateCachedEnemyDataForFleeing` | `public void UpdateCachedEnemyDataForFleeing()` | 方法 |
| `MoraleChangeFactor` | `public float MoraleChangeFactor` | 属性 |
| `Reset` | `public void Reset()` | 方法 |
| `Clear` | `public void Clear()` | 方法 |
| `DoesFirstFormationClassContainSecond` | `public static bool DoesFirstFormationClassContainSecond(FormationClass f1, FormationClass f2)` | 方法 |
| `GetFormationFormationClass` | `public static FormationClass GetFormationFormationClass(Formation f)` | 方法 |
| `GetPlayerTeamFormationClass` | `public static FormationClass GetPlayerTeamFormationClass(Agent mainAgent)` | 方法 |
| `AssignPlayerAsSergeantOfFormation` | `public void AssignPlayerAsSergeantOfFormation(MissionPeer peer, FormationClass formationClass)` | 方法 |
| `AddTacticOption` | `public void AddTacticOption(TacticComponent tacticOption)` | 方法 |
| `RemoveTacticOption` | `public void RemoveTacticOption(Type tacticType)` | 方法 |
| `ClearTacticOptions` | `public void ClearTacticOptions()` | 方法 |
| `ResetTactic` | `public void ResetTactic()` | 方法 |
| `AddTeamAI` | `public void AddTeamAI(TeamAIComponent teamAI, bool forceNotAIControlled = false)` | 方法 |
| `DelegateCommandToAI` | `public void DelegateCommandToAI()` | 方法 |
| `RearrangeFormationsAccordingToFilter` | `public void RearrangeFormationsAccordingToFilter([TupleElementNames(new string[]` | 方法 |
| `GeneralsFormation` | `public Formation GeneralsFormation` | 属性 |
| `BodyGuardFormation` | `public Formation BodyGuardFormation` | 属性 |
| `GeneralAgent` | `public Agent GeneralAgent` | 属性 |
| `Tick` | `public void Tick(float dt)` | 方法 |
| `GetFormation` | `public Formation GetFormation(FormationClass formationIndex)` | 方法 |
| `SetIsEnemyOf` | `public void SetIsEnemyOf(Team otherTeam, bool isEnemyOf)` | 方法 |
| `IsEnemyOf` | `public bool IsEnemyOf(Team otherTeam)` | 方法 |
| `IsFriendOf` | `public bool IsFriendOf(Team otherTeam)` | 方法 |
| `IEnumerable` | `public IEnumerable<Agent>Heroes` | 属性 |
| `AddAgentToTeam` | `public void AddAgentToTeam(Agent unit)` | 方法 |
| `RemoveAgentFromTeam` | `public void RemoveAgentFromTeam(Agent unit)` | 方法 |
| `DeactivateAgent` | `public void DeactivateAgent(Agent agent)` | 方法 |
| `OnAgentRemoved` | `public void OnAgentRemoved(Agent agent)` | 方法 |
| `HasBots` | `public bool HasBots` | 属性 |
| `Leader` | `public Agent Leader` | 属性 |
| `Invalid` | `public static Team Invalid` | 属性 |
| `IsValid` | `public bool IsValid` | 属性 |
| `ToString` | `public override string ToString()` | 方法 |
| `HasTeamAi` | `public bool HasTeamAi` | 属性 |
| `OnMissionEnded` | `public void OnMissionEnded()` | 方法 |
| `TriggerOnFormationsChanged` | `public void TriggerOnFormationsChanged(Formation formation)` | 方法 |
| `TriggerOnFormationsChangedInDeployment` | `public void TriggerOnFormationsChangedInDeployment()` | 方法 |
| `GetOrderControllerOf` | `public OrderController GetOrderControllerOf(Agent agent)` | 方法 |
| `SetPlayerRole` | `public void SetPlayerRole(bool isPlayerGeneral, bool isPlayerSergeant)` | 方法 |
| `HasAnyEnemyTeamsWithAgents` | `public bool HasAnyEnemyTeamsWithAgents(bool ignoreMountedAgents)` | 方法 |
| `HasAnyFormationsIncludingSpecialThatIsNotEmpty` | `public bool HasAnyFormationsIncludingSpecialThatIsNotEmpty()` | 方法 |
| `GetFormationCount` | `public int GetFormationCount()` | 方法 |
| `GetAIControlledFormationCount` | `public int GetAIControlledFormationCount()` | 方法 |
| `GetAveragePositionOfEnemies` | `public Vec2 GetAveragePositionOfEnemies()` | 方法 |
| `GetAveragePosition` | `public Vec2 GetAveragePosition()` | 方法 |
| `GetMedianPosition` | `public WorldPosition GetMedianPosition(Vec2 averagePosition)` | 方法 |
| `GetWeightedAverageOfEnemies` | `public Vec2 GetWeightedAverageOfEnemies(Vec2 basePoint)` | 方法 |
| `DisableDetachmentTicking` | `public void DisableDetachmentTicking()` | 方法 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
