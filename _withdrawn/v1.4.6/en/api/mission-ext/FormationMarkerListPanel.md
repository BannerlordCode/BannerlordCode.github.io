---
title: "FormationMarkerListPanel"
description: "FormationMarkerListPanel: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission, inheriting ListPanel; 21 exposed members (1 methods, 19 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/FormationMarkerListPanel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# FormationMarkerListPanel

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class FormationMarkerListPanel : ListPanel`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/FormationMarkerListPanel.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

FormationMarkerListPanel lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/FormationMarkerListPanel.cs. It is a public class, implementing/inheriting ListPanel; the inheritance chain is FormationMarkerListPanel → ListPanel → Container → Widget → PropertyOwnerObject. It exposes 21 public/protected members: 1 methods, 19 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: FormationMarkerListPanel lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission`, inheritance chain FormationMarkerListPanel → ListPanel → Container → Widget → PropertyOwnerObject. The surface is property-led (properties 19/21, methods 1/21), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/FormationMarkerListPanel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `FarAlphaTarget` | `public float FarAlphaTarget` | property |
| `FarDistanceCutoff` | `public float FarDistanceCutoff` | property |
| `CloseDistanceCutoff` | `public float CloseDistanceCutoff` | property |
| `ClosestFadeoutRange` | `public float ClosestFadeoutRange` | property |
| `FarScaleTarget` | `public float FarScaleTarget` | property |
| `CloseScaleTarget` | `public float CloseScaleTarget` | property |
| `FormationMarkerListPanel` | `public FormationMarkerListPanel(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `IsMarkerEnabled` | `public bool IsMarkerEnabled` | property |
| `IsTargetingAFormation` | `public bool IsTargetingAFormation` | property |
| `IsActive` | `public bool IsActive` | property |
| `ShowDistanceTexts` | `public bool ShowDistanceTexts` | property |
| `TeamType` | `public int TeamType` | property |
| `WSign` | `public int WSign` | property |
| `Distance` | `public float Distance` | property |
| `MarkerType` | `public string MarkerType` | property |
| `Position` | `public Vec2 Position` | property |
| `IconBrush` | `public Brush IconBrush` | property |
| `FormationTypeMarker` | `public Widget FormationTypeMarker` | property |
| `TeamTypeMarker` | `public Widget TeamTypeMarker` | property |
| `NameTextWidget` | `public TextWidget NameTextWidget` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ListPanel](../../gui/ListPanel/)
- [same namespace AgentAlarmStateWidget](../AgentAlarmStateWidget/)
- [same namespace AgentAmmoTextWidget](../AgentAmmoTextWidget/)
- [same namespace AgentHealthWidget](../AgentHealthWidget/)
- [same namespace AgentLockVisualBrushWidget](../AgentLockVisualBrushWidget/)
