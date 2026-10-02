---
title: "TeamAIComponent"
description: "TeamAIComponent: a public class in TaleWorlds.MountAndBlade; 32 exposed members (23 methods, 5 properties, 1 fields). Source: TaleWorlds.MountAndBlade/TeamAIComponent.cs."
---
# TeamAIComponent

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class TeamAIComponent`
**File:** `TaleWorlds.MountAndBlade/TeamAIComponent.cs`

## Overview

TeamAIComponent lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/TeamAIComponent.cs. It is a public class (abstract); the inheritance chain is TeamAIComponent. It exposes 32 public/protected members: 23 methods, 5 properties, 1 fields, 1 constructors, 2 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TeamAIComponent is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain TeamAIComponent. The surface is method-led (methods 23/32, properties 5/32), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/TeamAIComponent.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MBReadOnlyList` | `public MBReadOnlyList<StrategicArea>StrategicAreas` | property |
| `HasStrategicAreas` | `public bool HasStrategicAreas` | property |
| `IsDefenseApplicable` | `public bool IsDefenseApplicable` | property |
| `GetIsFirstTacticChosen` | `public bool GetIsFirstTacticChosen` | property |
| `TeamAIComponent` | `protected TeamAIComponent(Mission currentMission, Team currentTeam, float thinkTimerTime, float applyTimerTime)` | constructor |
| `AddStrategicArea` | `public void AddStrategicArea(StrategicArea strategicArea)` | method |
| `RemoveStrategicArea` | `public void RemoveStrategicArea(StrategicArea strategicArea)` | method |
| `RemoveAllStrategicAreas` | `public void RemoveAllStrategicAreas()` | method |
| `AddTacticOption` | `public void AddTacticOption(TacticComponent tacticOption)` | method |
| `RemoveTacticOption` | `public void RemoveTacticOption(Type tacticType)` | method |
| `ClearTacticOptions` | `public void ClearTacticOptions()` | method |
| `AssertTeam` | `public void AssertTeam(Team team)` | method |
| `NotifyTacticalDecision` | `public void NotifyTacticalDecision(in TacticalDecision decision)` | method |
| `OnDeploymentFinished` | `public virtual void OnDeploymentFinished()` | method |
| `OnFormationFrameChanged` | `public virtual void OnFormationFrameChanged(Agent agent, bool isFrameEnabled, WorldPosition frame)` | method |
| `OnMissionEnded` | `public virtual void OnMissionEnded()` | method |
| `ResetTacticalPositions` | `public void ResetTacticalPositions()` | method |
| `ResetTactic` | `public void ResetTactic(bool keepCurrentTactic = true)` | method |
| `Tick` | `protected internal virtual void Tick(float dt)` | method |
| `CheckIsDefenseApplicable` | `public void CheckIsDefenseApplicable()` | method |
| `OnTacticAppliedForFirstTime` | `public void OnTacticAppliedForFirstTime()` | method |
| `TickOccasionally` | `public virtual void TickOccasionally()` | method |
| `IsCurrentTactic` | `public bool IsCurrentTactic(TacticComponent tactic)` | method |
| `DebugTick` | `protected virtual void DebugTick(float dt)` | method |
| `OnUnitAddedToFormationForTheFirstTime` | `public abstract void OnUnitAddedToFormationForTheFirstTime(Formation formation);` | method |
| `CreateMissionSpecificBehaviors` | `protected internal virtual void CreateMissionSpecificBehaviors()` | method |
| `InitializeDetachments` | `protected internal virtual void InitializeDetachments(Mission mission)` | method |
| `BattleTokenForceSize` | `public const int BattleTokenForceSize` | field |
| `TacticOption` | `protected class TacticOption` | property |
| `TacticalDecisionDelegate` | `public delegate void TacticalDecisionDelegate(in TacticalDecision decision);` | method |
| `TacticOption` | `protected class TacticOption` | nested type |
| `TacticalDecisionDelegate` | `public delegate void TacticalDecisionDelegate(in TacticalDecision decision)` | nested type |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
