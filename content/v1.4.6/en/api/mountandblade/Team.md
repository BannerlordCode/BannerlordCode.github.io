---
title: "Team"
description: "Team: a public class in TaleWorlds.MountAndBlade, inheriting IMissionTeam; 77 exposed members (39 methods, 33 properties, 0 fields). Source: TaleWorlds.MountAndBlade/Team.cs."
---
# Team

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class Team : IMissionTeam`
**File:** `TaleWorlds.MountAndBlade/Team.cs`

## Overview

Team lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/Team.cs. It is a public class, implementing/inheriting IMissionTeam; the inheritance chain is Team → IMissionTeam. It exposes 77 public/protected members: 39 methods, 33 properties, 4 events, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: Team is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain Team → IMissionTeam. The surface is method-led (methods 39/77, properties 33/77), so it mostly exposes operations. IMissionTeam on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/Team.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Formation>OnFormationsChanged;` | `public event Action<Team, Formation>OnFormationsChanged;` | event |
| `OnOrderIssued;` | `public event OnOrderIssuedDelegate OnOrderIssued;` | event |
| `Action` | `public event Action<Formation>OnFormationAIActiveBehaviorChanged;` | event |
| `Action` | `public event Action<Team>OnFormationsChangedInDeployment;` | event |
| `Side` | `public BattleSideEnum Side` | property |
| `Mission` | `public Mission Mission` | property |
| `MBList` | `public MBList<Formation>FormationsIncludingEmpty` | property |
| `MBList` | `public MBList<Formation>FormationsIncludingSpecialAndEmpty` | property |
| `TeamAI` | `public TeamAIComponent TeamAI` | property |
| `IsPlayerTeam` | `public bool IsPlayerTeam` | property |
| `IsPlayerAlly` | `public bool IsPlayerAlly` | property |
| `TeamSide` | `public TeamSideEnum TeamSide` | property |
| `IsDefender` | `public bool IsDefender` | property |
| `IsAttacker` | `public bool IsAttacker` | property |
| `Color` | `public uint Color` | property |
| `Color2` | `public uint Color2` | property |
| `Banner` | `public Banner Banner` | property |
| `MasterOrderController` | `public OrderController MasterOrderController` | property |
| `PlayerOrderController` | `public OrderController PlayerOrderController` | property |
| `QuerySystem` | `public TeamQuerySystem QuerySystem` | property |
| `DetachmentManager` | `public DetachmentManager DetachmentManager` | property |
| `IsPlayerGeneral` | `public bool IsPlayerGeneral` | property |
| `IsPlayerSergeant` | `public bool IsPlayerSergeant` | property |
| `MBReadOnlyList` | `public MBReadOnlyList<Agent>ActiveAgents` | property |
| `MBReadOnlyList` | `public MBReadOnlyList<Agent>TeamAgents` | property |
| `bool>>CachedEnemyDataForFleeing` | `public MBReadOnlyList<ValueTuple<float, WorldPosition, int, Vec2, Vec2, bool>>CachedEnemyDataForFleeing` | property |
| `TeamIndex` | `public int TeamIndex` | property |
| `Team` | `public Team(MBTeam mbTeam, BattleSideEnum side, Mission mission, uint color = 4294967295U, uint color2 = 4294967295U, Banner banner = null)` | constructor |
| `SetCustomOrderController` | `public void SetCustomOrderController(OrderController customMasterOrderController, OrderController customPlayerOrderController)` | method |
| `UpdateCachedEnemyDataForFleeing` | `public void UpdateCachedEnemyDataForFleeing()` | method |
| `MoraleChangeFactor` | `public float MoraleChangeFactor` | property |
| `Reset` | `public void Reset()` | method |
| `Clear` | `public void Clear()` | method |
| `DoesFirstFormationClassContainSecond` | `public static bool DoesFirstFormationClassContainSecond(FormationClass f1, FormationClass f2)` | method |
| `GetFormationFormationClass` | `public static FormationClass GetFormationFormationClass(Formation f)` | method |
| `GetPlayerTeamFormationClass` | `public static FormationClass GetPlayerTeamFormationClass(Agent mainAgent)` | method |
| `AssignPlayerAsSergeantOfFormation` | `public void AssignPlayerAsSergeantOfFormation(MissionPeer peer, FormationClass formationClass)` | method |
| `AddTacticOption` | `public void AddTacticOption(TacticComponent tacticOption)` | method |
| `RemoveTacticOption` | `public void RemoveTacticOption(Type tacticType)` | method |
| `ClearTacticOptions` | `public void ClearTacticOptions()` | method |
| `ResetTactic` | `public void ResetTactic()` | method |
| `AddTeamAI` | `public void AddTeamAI(TeamAIComponent teamAI, bool forceNotAIControlled = false)` | method |
| `DelegateCommandToAI` | `public void DelegateCommandToAI()` | method |
| `RearrangeFormationsAccordingToFilter` | `public void RearrangeFormationsAccordingToFilter([TupleElementNames(new string[]` | method |
| `GeneralsFormation` | `public Formation GeneralsFormation` | property |
| `BodyGuardFormation` | `public Formation BodyGuardFormation` | property |
| `GeneralAgent` | `public Agent GeneralAgent` | property |
| `Tick` | `public void Tick(float dt)` | method |
| `GetFormation` | `public Formation GetFormation(FormationClass formationIndex)` | method |
| `SetIsEnemyOf` | `public void SetIsEnemyOf(Team otherTeam, bool isEnemyOf)` | method |
| `IsEnemyOf` | `public bool IsEnemyOf(Team otherTeam)` | method |
| `IsFriendOf` | `public bool IsFriendOf(Team otherTeam)` | method |
| `IEnumerable` | `public IEnumerable<Agent>Heroes` | property |
| `AddAgentToTeam` | `public void AddAgentToTeam(Agent unit)` | method |
| `RemoveAgentFromTeam` | `public void RemoveAgentFromTeam(Agent unit)` | method |
| `DeactivateAgent` | `public void DeactivateAgent(Agent agent)` | method |
| `OnAgentRemoved` | `public void OnAgentRemoved(Agent agent)` | method |
| `HasBots` | `public bool HasBots` | property |
| `Leader` | `public Agent Leader` | property |
| `Invalid` | `public static Team Invalid` | property |
| `IsValid` | `public bool IsValid` | property |
| `ToString` | `public override string ToString()` | method |
| `HasTeamAi` | `public bool HasTeamAi` | property |
| `OnMissionEnded` | `public void OnMissionEnded()` | method |
| `TriggerOnFormationsChanged` | `public void TriggerOnFormationsChanged(Formation formation)` | method |
| `TriggerOnFormationsChangedInDeployment` | `public void TriggerOnFormationsChangedInDeployment()` | method |
| `GetOrderControllerOf` | `public OrderController GetOrderControllerOf(Agent agent)` | method |
| `SetPlayerRole` | `public void SetPlayerRole(bool isPlayerGeneral, bool isPlayerSergeant)` | method |
| `HasAnyEnemyTeamsWithAgents` | `public bool HasAnyEnemyTeamsWithAgents(bool ignoreMountedAgents)` | method |
| `HasAnyFormationsIncludingSpecialThatIsNotEmpty` | `public bool HasAnyFormationsIncludingSpecialThatIsNotEmpty()` | method |
| `GetFormationCount` | `public int GetFormationCount()` | method |
| `GetAIControlledFormationCount` | `public int GetAIControlledFormationCount()` | method |
| `GetAveragePositionOfEnemies` | `public Vec2 GetAveragePositionOfEnemies()` | method |
| `GetAveragePosition` | `public Vec2 GetAveragePosition()` | method |
| `GetMedianPosition` | `public WorldPosition GetMedianPosition(Vec2 averagePosition)` | method |
| `GetWeightedAverageOfEnemies` | `public Vec2 GetWeightedAverageOfEnemies(Vec2 basePoint)` | method |
| `DisableDetachmentTicking` | `public void DisableDetachmentTicking()` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
