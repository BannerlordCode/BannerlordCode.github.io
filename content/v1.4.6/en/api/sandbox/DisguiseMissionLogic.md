---
title: "DisguiseMissionLogic"
description: "DisguiseMissionLogic: a public class in SandBox, inheriting MissionLogic, IPlayerInputEffector; 24 exposed members (15 methods, 3 properties, 4 fields). Source: SandBox/Missions/MissionLogics/DisguiseMissionLogic.cs."
---
# DisguiseMissionLogic

**Namespace:** `SandBox.Missions.MissionLogics`
**Module:** `SandBox`
**Type:** `public class DisguiseMissionLogic : MissionLogic, IPlayerInputEffector, IMissionBehavior`
**File:** `SandBox/Missions/MissionLogics/DisguiseMissionLogic.cs`

## Overview

DisguiseMissionLogic lives in the SandBox module, source file SandBox/Missions/MissionLogics/DisguiseMissionLogic.cs. It is a public class, implementing/inheriting MissionLogic, IPlayerInputEffector, IMissionBehavior; the inheritance chain is DisguiseMissionLogic → MissionLogic. It exposes 24 public/protected members: 15 methods, 3 properties, 4 fields, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DisguiseMissionLogic is a top-level type in SandBox, namespace differing from (SandBox.Missions.MissionLogics) the module directory; inheritance chain DisguiseMissionLogic → MissionLogic. The surface is method-led (methods 15/24, properties 3/24), so it mostly exposes operations. MissionLogic on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Missions/MissionLogics/DisguiseMissionLogic.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BattleAgentLogic](../BattleAgentLogic)
- [same namespace BattleSurgeonLogic](../BattleSurgeonLogic)
- [same namespace CampaignMissionComponent](../CampaignMissionComponent)
- [same namespace CampaignSiegeStateHandler](../CampaignSiegeStateHandler)
