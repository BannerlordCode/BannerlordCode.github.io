---
title: "AgentVictoryLogic"
description: "AgentVictoryLogic: a public class in TaleWorlds.MountAndBlade, inheriting MissionLogic; 16 exposed members (10 methods, 4 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/AgentVictoryLogic.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# AgentVictoryLogic

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class AgentVictoryLogic : MissionLogic`
**File:** `TaleWorlds.MountAndBlade/AgentVictoryLogic.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

AgentVictoryLogic lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/AgentVictoryLogic.cs. It is a public class, implementing/inheriting MissionLogic; the inheritance chain is AgentVictoryLogic → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 16 public/protected members: 10 methods, 4 properties, 2 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: AgentVictoryLogic lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain AgentVictoryLogic → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 10/16, properties 4/16), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/AgentVictoryLogic.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CheerActionGroup` | `public AgentVictoryLogic.CheerActionGroupEnum CheerActionGroup` | property |
| `CheerReactionTimerData` | `public AgentVictoryLogic.CheerReactionTimeSettings CheerReactionTimerData` | property |
| `AfterStart` | `public override void AfterStart()` | method |
| `SetCheerActionGroup` | `public void SetCheerActionGroup(AgentVictoryLogic.CheerActionGroupEnum cheerActionGroup = AgentVictoryLogic.CheerActionGroupEnum.None)` | method |
| `SetCheerReactionTimerSettings` | `public void SetCheerReactionTimerSettings(float minDuration = 1f, float maxDuration = 8f)` | method |
| `OnClearScene` | `public override void OnClearScene()` | method |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)` | method |
| `OnEndMission` | `protected override void OnEndMission()` | method |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | method |
| `SetTimersOfVictoryReactionsOnBattleEnd` | `public void SetTimersOfVictoryReactionsOnBattleEnd(BattleSideEnum side)` | method |
| `SetTimersOfVictoryReactionsOnRetreat` | `public void SetTimersOfVictoryReactionsOnRetreat(BattleSideEnum side)` | method |
| `SetTimersOfVictoryReactionsOnTournamentVictoryForAgent` | `public void SetTimersOfVictoryReactionsOnTournamentVictoryForAgent(Agent agent, float minStartTime, float maxStartTime)` | method |
| `CheerActionGroupEnum` | `public enum CheerActionGroupEnum` | property |
| `CheerReactionTimeSettings` | `public struct CheerReactionTimeSettings` | property |
| `CheerActionGroupEnum` | `public enum CheerActionGroupEnum` | nested type |
| `CheerReactionTimeSettings` | `public struct CheerReactionTimeSettings` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionLogic](../MissionLogic/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
