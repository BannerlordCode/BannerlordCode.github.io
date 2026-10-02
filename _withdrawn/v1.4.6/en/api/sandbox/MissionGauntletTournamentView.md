---
title: "MissionGauntletTournamentView"
description: "MissionGauntletTournamentView: a public class in SandBox.GauntletUI.Missions, inheriting MissionView; 9 exposed members (8 methods, 0 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.GauntletUI/Missions/MissionGauntletTournamentView.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionGauntletTournamentView

**Namespace:** `SandBox.GauntletUI.Missions`
**Module:** `SandBox.GauntletUI`
**Type:** `public class MissionGauntletTournamentView : MissionView`
**File:** `SandBox.GauntletUI/Missions/MissionGauntletTournamentView.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

MissionGauntletTournamentView lives in the SandBox.GauntletUI module, source file SandBox.GauntletUI/Missions/MissionGauntletTournamentView.cs. It is a public class, implementing/inheriting MissionView; the inheritance chain is MissionGauntletTournamentView → MissionView → MissionBehavior → IMissionBehavior. It exposes 9 public/protected members: 8 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionGauntletTournamentView lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.GauntletUI.Missions`, inheritance chain MissionGauntletTournamentView → MissionView → MissionBehavior → IMissionBehavior. The surface is method-led (methods 8/9, properties 0/9), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.GauntletUI/Missions/MissionGauntletTournamentView.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MissionGauntletTournamentView` | `public MissionGauntletTournamentView()` | constructor |
| `OnMissionScreenInitialize` | `public override void OnMissionScreenInitialize()` | method |
| `OnMissionScreenFinalize` | `public override void OnMissionScreenFinalize()` | method |
| `AfterStart` | `public override void AfterStart()` | method |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | method |
| `IsOpeningEscapeMenuOnFocusChangeAllowed` | `public override bool IsOpeningEscapeMenuOnFocusChangeAllowed()` | method |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)` | method |
| `OnPhotoModeActivated` | `public override void OnPhotoModeActivated()` | method |
| `OnPhotoModeDeactivated` | `public override void OnPhotoModeDeactivated()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionView](../../mission-ext/MissionView/)
- [same namespace MissionGauntletAgentAlarmStateView](../MissionGauntletAgentAlarmStateView/)
- [same namespace MissionGauntletArenaPracticeFightView](../MissionGauntletArenaPracticeFightView/)
- [same namespace MissionGauntletBarterView](../MissionGauntletBarterView/)
- [same namespace MissionGauntletBoardGameView](../MissionGauntletBoardGameView/)
