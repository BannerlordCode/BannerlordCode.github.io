---
title: "MissionGauntletMainAgentEquipmentControllerView"
description: "MissionGauntletMainAgentEquipmentControllerView: a public class in TaleWorlds.MountAndBlade.GauntletUI.Mission, inheriting MissionView; 10 exposed members (7 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI/Mission/MissionGauntletMainAgentEquipmentControllerView.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionGauntletMainAgentEquipmentControllerView

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Mission`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`
**Type:** `public class MissionGauntletMainAgentEquipmentControllerView : MissionView`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/Mission/MissionGauntletMainAgentEquipmentControllerView.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MissionGauntletMainAgentEquipmentControllerView lives in the TaleWorlds.MountAndBlade.GauntletUI module, source file TaleWorlds.MountAndBlade.GauntletUI/Mission/MissionGauntletMainAgentEquipmentControllerView.cs. It is a public class, implementing/inheriting MissionView; the inheritance chain is MissionGauntletMainAgentEquipmentControllerView → MissionView → MissionBehavior → IMissionBehavior. It exposes 10 public/protected members: 7 methods, 2 events, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionGauntletMainAgentEquipmentControllerView lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Mission`, inheritance chain MissionGauntletMainAgentEquipmentControllerView → MissionView → MissionBehavior → IMissionBehavior. The surface is method-led (methods 7/10, properties 0/10), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI/Mission/MissionGauntletMainAgentEquipmentControllerView.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Action` | `public event Action<bool>OnEquipmentDropInteractionViewToggled;` | event |
| `Action` | `public event Action<bool>OnEquipmentEquipInteractionViewToggled;` | event |
| `MissionGauntletMainAgentEquipmentControllerView` | `public MissionGauntletMainAgentEquipmentControllerView()` | constructor |
| `OnMissionScreenInitialize` | `public override void OnMissionScreenInitialize()` | method |
| `OnMissionScreenFinalize` | `public override void OnMissionScreenFinalize()` | method |
| `OnMissionScreenTick` | `public override void OnMissionScreenTick(float dt)` | method |
| `OnFocusGained` | `public override void OnFocusGained(Agent agent, IFocusable focusableObject, bool isInteractable)` | method |
| `OnFocusLost` | `public override void OnFocusLost(Agent agent, IFocusable focusableObject)` | method |
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
