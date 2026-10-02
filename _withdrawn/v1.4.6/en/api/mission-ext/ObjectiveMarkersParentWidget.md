---
title: "ObjectiveMarkersParentWidget"
description: "ObjectiveMarkersParentWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.NameMarker, inheriting Widget; 7 exposed members (1 methods, 5 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/NameMarker/ObjectiveMarkersParentWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ObjectiveMarkersParentWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.NameMarker`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class ObjectiveMarkersParentWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/NameMarker/ObjectiveMarkersParentWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

ObjectiveMarkersParentWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/NameMarker/ObjectiveMarkersParentWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is ObjectiveMarkersParentWidget → Widget → PropertyOwnerObject. It exposes 7 public/protected members: 1 methods, 5 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ObjectiveMarkersParentWidget lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.NameMarker`, inheritance chain ObjectiveMarkersParentWidget → Widget → PropertyOwnerObject. The surface is property-led (properties 5/7, methods 1/7), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/NameMarker/ObjectiveMarkersParentWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MinDistanceToFocus` | `public float MinDistanceToFocus` | property |
| `ObjectiveMarkersParentWidget` | `public ObjectiveMarkersParentWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `IsMarkersEnabled` | `public bool IsMarkersEnabled` | property |
| `TargetAlphaValue` | `public float TargetAlphaValue` | property |
| `MaxDistanceToCombineMarkers` | `public float MaxDistanceToCombineMarkers` | property |
| `MarkersContainer` | `public Widget MarkersContainer` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AlwaysVisibleNameMarkerListPanel](../AlwaysVisibleNameMarkerListPanel/)
- [same namespace DuelTargetMarkerListPanel](../DuelTargetMarkerListPanel/)
- [same namespace MarkerRect](../MarkerRect/)
- [same namespace NameMarkerListPanel](../NameMarkerListPanel/)
