---
title: "DuelTargetMarkerListPanel"
description: "DuelTargetMarkerListPanel: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.NameMarker, inheriting ListPanel; 14 exposed members (1 methods, 12 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/NameMarker/DuelTargetMarkerListPanel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DuelTargetMarkerListPanel

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.NameMarker`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class DuelTargetMarkerListPanel : ListPanel`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/NameMarker/DuelTargetMarkerListPanel.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

DuelTargetMarkerListPanel lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/NameMarker/DuelTargetMarkerListPanel.cs. It is a public class, implementing/inheriting ListPanel; the inheritance chain is DuelTargetMarkerListPanel → ListPanel → Container → Widget → PropertyOwnerObject. It exposes 14 public/protected members: 1 methods, 12 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DuelTargetMarkerListPanel lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.NameMarker`, inheritance chain DuelTargetMarkerListPanel → ListPanel → Container → Widget → PropertyOwnerObject. The surface is property-led (properties 12/14, methods 1/14), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/NameMarker/DuelTargetMarkerListPanel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `DuelTargetMarkerListPanel` | `public DuelTargetMarkerListPanel(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `Position` | `public Vec2 Position` | property |
| `IsAgentInScreenBoundaries` | `public bool IsAgentInScreenBoundaries` | property |
| `IsAvailable` | `public bool IsAvailable` | property |
| `IsTracked` | `public bool IsTracked` | property |
| `IsAgentFocused` | `public bool IsAgentFocused` | property |
| `HasTargetSentDuelRequest` | `public bool HasTargetSentDuelRequest` | property |
| `HasPlayerSentDuelRequest` | `public bool HasPlayerSentDuelRequest` | property |
| `WSign` | `public int WSign` | property |
| `ActionText` | `public RichTextWidget ActionText` | property |
| `Background` | `public BrushWidget Background` | property |
| `Border` | `public BrushWidget Border` | property |
| `TroopClassBorder` | `public BrushWidget TroopClassBorder` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ListPanel](../../gui/ListPanel/)
- [same namespace AlwaysVisibleNameMarkerListPanel](../AlwaysVisibleNameMarkerListPanel/)
- [same namespace MarkerRect](../MarkerRect/)
- [same namespace NameMarkerListPanel](../NameMarkerListPanel/)
- [same namespace NameMarkerScreenWidget](../NameMarkerScreenWidget/)
