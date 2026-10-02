---
title: "MissionGauntletMainAgentEquipDropView"
description: "MissionGauntletMainAgentEquipDropView: a public class in TaleWorlds.MountAndBlade.GauntletUI.Mission, inheriting MissionView; 8 exposed members (7 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI/Mission/MissionGauntletMainAgentEquipDropView.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionGauntletMainAgentEquipDropView

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Mission`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`
**Type:** `public class MissionGauntletMainAgentEquipDropView : MissionView`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/Mission/MissionGauntletMainAgentEquipDropView.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MissionGauntletMainAgentEquipDropView lives in the TaleWorlds.MountAndBlade.GauntletUI module, source file TaleWorlds.MountAndBlade.GauntletUI/Mission/MissionGauntletMainAgentEquipDropView.cs. It is a public class, implementing/inheriting MissionView; the inheritance chain is MissionGauntletMainAgentEquipDropView → MissionView → MissionBehavior → IMissionBehavior. It exposes 8 public/protected members: 7 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionGauntletMainAgentEquipDropView lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Mission`, inheritance chain MissionGauntletMainAgentEquipDropView → MissionView → MissionBehavior → IMissionBehavior. The surface is method-led (methods 7/8, properties 0/8), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI/Mission/MissionGauntletMainAgentEquipDropView.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MissionGauntletMainAgentEquipDropView` | `public MissionGauntletMainAgentEquipDropView()` | constructor |
| `EarlyStart` | `public override void EarlyStart()` | method |
| `AfterStart` | `public override void AfterStart()` | method |
| `OnMissionScreenFinalize` | `public override void OnMissionScreenFinalize()` | method |
| `OnMissionScreenTick` | `public override void OnMissionScreenTick(float dt)` | method |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)` | method |
| `OnPhotoModeActivated` | `public override void OnPhotoModeActivated()` | method |
| `OnPhotoModeDeactivated` | `public override void OnPhotoModeDeactivated()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionView](../MissionView/)
- [same namespace MissionGauntletAgentStatus](../MissionGauntletAgentStatus/)
- [same namespace MissionGauntletBoundaryCrossingView](../MissionGauntletBoundaryCrossingView/)
- [same namespace MissionGauntletCategoryLoadManager](../MissionGauntletCategoryLoadManager/)
- [same namespace MissionGauntletCrosshair](../MissionGauntletCrosshair/)
