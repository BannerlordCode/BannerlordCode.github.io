---
title: "MissionGauntletAgentStatus"
description: "MissionGauntletAgentStatus: a public class in TaleWorlds.MountAndBlade.GauntletUI.Mission, inheriting MissionAgentStatusUIHandler; 22 exposed members (21 methods, 1 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI/Mission/MissionGauntletAgentStatus.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionGauntletAgentStatus

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Mission`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`
**Type:** `public class MissionGauntletAgentStatus : MissionAgentStatusUIHandler`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/Mission/MissionGauntletAgentStatus.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MissionGauntletAgentStatus lives in the TaleWorlds.MountAndBlade.GauntletUI module, source file TaleWorlds.MountAndBlade.GauntletUI/Mission/MissionGauntletAgentStatus.cs. It is a public class, implementing/inheriting MissionAgentStatusUIHandler; the inheritance chain is MissionGauntletAgentStatus → MissionAgentStatusUIHandler → MissionBattleUIBaseView → MissionView → MissionBehavior → IMissionBehavior. It exposes 22 public/protected members: 21 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionGauntletAgentStatus lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Mission`, inheritance chain MissionGauntletAgentStatus → MissionAgentStatusUIHandler → MissionBattleUIBaseView → MissionView → MissionBehavior → IMissionBehavior. The surface is method-led (methods 21/22, properties 1/22), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI/Mission/MissionGauntletAgentStatus.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `DataSource` | `public MissionAgentStatusVM DataSource` | property |
| `AddInteractionMessage` | `public override void AddInteractionMessage(MissionInteractionItemBaseVM message)` | method |
| `RemoveInteractionMessage` | `public override void RemoveInteractionMessage(MissionInteractionItemBaseVM message)` | method |
| `HasInteractionMessage` | `public override bool HasInteractionMessage(MissionInteractionItemBaseVM message)` | method |
| `OnMissionStateActivated` | `public override void OnMissionStateActivated()` | method |
| `EarlyStart` | `public override void EarlyStart()` | method |
| `OnCreateView` | `protected override void OnCreateView()` | method |
| `OnDestroyView` | `protected override void OnDestroyView()` | method |
| `OnSuspendView` | `protected override void OnSuspendView()` | method |
| `OnResumeView` | `protected override void OnResumeView()` | method |
| `AfterStart` | `public override void AfterStart()` | method |
| `OnMissionScreenInitialize` | `public override void OnMissionScreenInitialize()` | method |
| `OnDeploymentFinished` | `public override void OnDeploymentFinished()` | method |
| `OnMissionScreenFinalize` | `public override void OnMissionScreenFinalize()` | method |
| `OnMissionScreenTick` | `public override void OnMissionScreenTick(float dt)` | method |
| `OnFocusGained` | `public override void OnFocusGained(Agent mainAgent, IFocusable focusableObject, bool isInteractable)` | method |
| `OnAgentInteraction` | `public override void OnAgentInteraction(Agent userAgent, Agent agent, sbyte agentBoneIndex)` | method |
| `OnFocusLost` | `public override void OnFocusLost(Agent agent, IFocusable focusableObject)` | method |
| `OnAgentDeleted` | `public override void OnAgentDeleted(Agent affectedAgent)` | method |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)` | method |
| `OnPhotoModeActivated` | `public override void OnPhotoModeActivated()` | method |
| `OnPhotoModeDeactivated` | `public override void OnPhotoModeDeactivated()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionAgentStatusUIHandler](../MissionAgentStatusUIHandler/)
- [same namespace MissionGauntletBoundaryCrossingView](../MissionGauntletBoundaryCrossingView/)
- [same namespace MissionGauntletCategoryLoadManager](../MissionGauntletCategoryLoadManager/)
- [same namespace MissionGauntletCrosshair](../MissionGauntletCrosshair/)
- [same namespace MissionGauntletEscapeMenuBase](../MissionGauntletEscapeMenuBase/)
