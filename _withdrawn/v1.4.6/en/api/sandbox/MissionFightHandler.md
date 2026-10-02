---
title: "MissionFightHandler"
description: "MissionFightHandler: a public class in SandBox.Missions.MissionLogics, inheriting MissionLogic; 24 exposed members (19 methods, 4 properties, 0 fields). Canonical bucket sandbox. Source: SandBox/Missions/MissionLogics/MissionFightHandler.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionFightHandler

**Namespace:** `SandBox.Missions.MissionLogics`
**Module:** `SandBox`
**Type:** `public class MissionFightHandler : MissionLogic`
**File:** `SandBox/Missions/MissionLogics/MissionFightHandler.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

MissionFightHandler lives in the SandBox module, source file SandBox/Missions/MissionLogics/MissionFightHandler.cs. It is a public class, implementing/inheriting MissionLogic; the inheritance chain is MissionFightHandler → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 24 public/protected members: 19 methods, 4 properties, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionFightHandler lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.Missions.MissionLogics`, inheritance chain MissionFightHandler → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 19/24, properties 4/24), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Missions/MissionLogics/MissionFightHandler.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MinMissionEndTime` | `public float MinMissionEndTime` | property |
| `ReadOnlyCollection` | `public ReadOnlyCollection<Agent>PlayerSideAgents` | property |
| `ReadOnlyCollection` | `public ReadOnlyCollection<Agent>OpponentSideAgents` | property |
| `IsPlayerSideWon` | `public bool IsPlayerSideWon` | property |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | method |
| `EarlyStart` | `public override void EarlyStart()` | method |
| `AfterStart` | `public override void AfterStart()` | method |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | method |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)` | method |
| `StartCustomFight` | `public void StartCustomFight(List<Agent>playerSideAgents, List<Agent>opponentSideAgents, bool dropWeapons, bool isItemUseDisabled, MissionFightHandler.OnFightEndDelegate onFightEndDelegate, float minimumEndTime = 1E-45f)` | method |
| `StartFistFight` | `public void StartFistFight(Agent opponent, MissionFightHandler.OnFightEndDelegate onFightEndDelegate, float minimumEndTime = 1E-45f)` | method |
| `OnEndMissionRequest` | `public override InquiryData OnEndMissionRequest(out bool canPlayerLeave)` | method |
| `OnEndMission` | `protected override void OnEndMission()` | method |
| `GetAgentToSpectate` | `public static Agent GetAgentToSpectate()` | method |
| `BeginEndFight` | `public void BeginEndFight()` | method |
| `EndFight` | `public void EndFight(bool overrideDuelWonByPlayer = false)` | method |
| `IsThereActiveFight` | `public bool IsThereActiveFight()` | method |
| `AddAgentToSide` | `public void AddAgentToSide(Agent agent, bool isPlayerSide)` | method |
| `IEnumerable` | `public IEnumerable<Agent>GetDangerSources(Agent ownerAgent)` | method |
| `IsAgentAggressive` | `public static bool IsAgentAggressive(Agent agent)` | method |
| `IsAgentJusticeWarrior` | `public static bool IsAgentJusticeWarrior(CharacterObject character)` | method |
| `IsAgentVillian` | `public static bool IsAgentVillian(CharacterObject character)` | method |
| `OnFightEndDelegate` | `public delegate void OnFightEndDelegate(bool isPlayerSideWon);` | method |
| `OnFightEndDelegate` | `public delegate void OnFightEndDelegate(bool isPlayerSideWon)` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionLogic](../../mission-ext/MissionLogic/)
- [same namespace BattleAgentLogic](../BattleAgentLogic/)
- [same namespace BattleSurgeonLogic](../BattleSurgeonLogic/)
- [same namespace CampaignMissionComponent](../CampaignMissionComponent/)
- [same namespace CampaignSiegeStateHandler](../CampaignSiegeStateHandler/)
