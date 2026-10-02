---
title: "DisguiseMissionLogic"
description: "DisguiseMissionLogic: a public class in SandBox.Missions.MissionLogics, inheriting MissionLogic, IPlayerInputEffector; 24 exposed members (15 methods, 3 properties, 4 fields). Canonical bucket sandbox. Source: SandBox/Missions/MissionLogics/DisguiseMissionLogic.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DisguiseMissionLogic

**Namespace:** `SandBox.Missions.MissionLogics`
**Module:** `SandBox`
**Type:** `public class DisguiseMissionLogic : MissionLogic, IPlayerInputEffector, IMissionBehavior`
**File:** `SandBox/Missions/MissionLogics/DisguiseMissionLogic.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

DisguiseMissionLogic lives in the SandBox module, source file SandBox/Missions/MissionLogics/DisguiseMissionLogic.cs. It is a public class, implementing/inheriting MissionLogic, IPlayerInputEffector, IMissionBehavior; the inheritance chain is DisguiseMissionLogic → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 24 public/protected members: 15 methods, 3 properties, 4 fields, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DisguiseMissionLogic lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.Missions.MissionLogics`, inheritance chain DisguiseMissionLogic → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 15/24, properties 3/24), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Missions/MissionLogics/DisguiseMissionLogic.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IsInStealthMode` | `public bool IsInStealthMode` | property |
| `DisguiseMissionLogic.ShadowingAgentOffenseInfo>ThreatAgentInfos` | `public ReadOnlyDictionary<Agent, DisguiseMissionLogic.ShadowingAgentOffenseInfo>ThreatAgentInfos` | property |
| `DisguiseMissionLogic` | `public DisguiseMissionLogic(CharacterObject contractorCharacter, Location fromLocation, bool willSetUpContact)` | constructor |
| `OnCreated` | `public override void OnCreated()` | method |
| `GetSpawnFrameOfPassage` | `public MatrixFrame GetSpawnFrameOfPassage(Location location)` | method |
| `IsContactAgentTracked` | `public bool IsContactAgentTracked(Agent agent)` | method |
| `CanCommonAreaFightBeTriggered` | `public bool CanCommonAreaFightBeTriggered()` | method |
| `ContactAlreadySetCommonCondition` | `public bool ContactAlreadySetCommonCondition()` | method |
| `IsOnLeftSide` | `public bool IsOnLeftSide(Vec2 lineA, Vec2 lineB, Vec2 point)` | method |
| `OnAgentBuild` | `public override void OnAgentBuild(Agent agent, Banner banner)` | method |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)` | method |
| `OnEndMission` | `protected override void OnEndMission()` | method |
| `SpawnDisguiseMissionAgentInternal` | `public Agent SpawnDisguiseMissionAgentInternal(CharacterObject agentCharacter, Vec3 initialPosition, Vec2 initialDirection, string actionSetId, bool isEnemy = true)` | method |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | method |
| `GetAgentOffenseInfo` | `public DisguiseMissionLogic.ShadowingAgentOffenseInfo GetAgentOffenseInfo(Agent agent)` | method |
| `IsAgentInDetectionRadius` | `public bool IsAgentInDetectionRadius(Agent offenderAgent, Agent detectorAgent)` | method |
| `OnEndMissionRequest` | `public override InquiryData OnEndMissionRequest(out bool canPlayerLeave)` | method |
| `OnCollectPlayerEventControlFlags` | `public Agent.EventControlFlag OnCollectPlayerEventControlFlags()` | method |
| `PlayerSuspiciousLevelMin` | `public const float PlayerSuspiciousLevelMin` | field |
| `PlayerSuspiciousLevelMax` | `public const float PlayerSuspiciousLevelMax` | field |
| `ToggleStealthModeSuspiciousThreshold` | `public const float ToggleStealthModeSuspiciousThreshold` | field |
| `MissionFailDistanceToTargetAgent` | `public const float MissionFailDistanceToTargetAgent` | field |
| `ShadowingAgentOffenseInfo` | `public class ShadowingAgentOffenseInfo` | property |
| `ShadowingAgentOffenseInfo` | `public class ShadowingAgentOffenseInfo` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionLogic](../../mission-ext/MissionLogic/)
- [base / interface IPlayerInputEffector](../../mission-ext/IPlayerInputEffector/)
- [base / interface IMissionBehavior](../../mission-ext/IMissionBehavior/)
- [same namespace BattleAgentLogic](../BattleAgentLogic/)
- [same namespace BattleSurgeonLogic](../BattleSurgeonLogic/)
- [same namespace CampaignMissionComponent](../CampaignMissionComponent/)
- [same namespace CampaignSiegeStateHandler](../CampaignSiegeStateHandler/)
