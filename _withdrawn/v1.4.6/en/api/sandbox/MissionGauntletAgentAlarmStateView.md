---
title: "MissionGauntletAgentAlarmStateView"
description: "MissionGauntletAgentAlarmStateView: a public class in SandBox.GauntletUI.Missions, inheriting MissionAgentAlarmStateView; 9 exposed members (8 methods, 0 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.GauntletUI/Missions/MissionGauntletAgentAlarmStateView.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionGauntletAgentAlarmStateView

**Namespace:** `SandBox.GauntletUI.Missions`
**Module:** `SandBox.GauntletUI`
**Type:** `public class MissionGauntletAgentAlarmStateView : MissionAgentAlarmStateView`
**File:** `SandBox.GauntletUI/Missions/MissionGauntletAgentAlarmStateView.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

MissionGauntletAgentAlarmStateView lives in the SandBox.GauntletUI module, source file SandBox.GauntletUI/Missions/MissionGauntletAgentAlarmStateView.cs. It is a public class, implementing/inheriting MissionAgentAlarmStateView; the inheritance chain is MissionGauntletAgentAlarmStateView → MissionAgentAlarmStateView → MissionView → MissionBehavior → IMissionBehavior. It exposes 9 public/protected members: 8 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionGauntletAgentAlarmStateView lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.GauntletUI.Missions`, inheritance chain MissionGauntletAgentAlarmStateView → MissionAgentAlarmStateView → MissionView → MissionBehavior → IMissionBehavior. The surface is method-led (methods 8/9, properties 0/9), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.GauntletUI/Missions/MissionGauntletAgentAlarmStateView.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MissionGauntletAgentAlarmStateView` | `public MissionGauntletAgentAlarmStateView()` | constructor |
| `OnMissionScreenInitialize` | `public override void OnMissionScreenInitialize()` | method |
| `OnMissionScreenFinalize` | `public override void OnMissionScreenFinalize()` | method |
| `OnAgentBuild` | `public override void OnAgentBuild(Agent agent, Banner banner)` | method |
| `OnAgentTeamChanged` | `public override void OnAgentTeamChanged(Team prevTeam, Team newTeam, Agent agent)` | method |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)` | method |
| `OnMissionScreenTick` | `public override void OnMissionScreenTick(float dt)` | method |
| `OnResumeView` | `protected override void OnResumeView()` | method |
| `OnSuspendView` | `protected override void OnSuspendView()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionAgentAlarmStateView](../MissionAgentAlarmStateView/)
- [same namespace MissionGauntletArenaPracticeFightView](../MissionGauntletArenaPracticeFightView/)
- [same namespace MissionGauntletBarterView](../MissionGauntletBarterView/)
- [same namespace MissionGauntletBoardGameView](../MissionGauntletBoardGameView/)
- [same namespace MissionGauntletCheatView](../MissionGauntletCheatView/)
