---
title: "ObjectiveMarkerWidget"
description: "ObjectiveMarkerWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.NameMarker, inheriting Widget; 25 exposed members (2 methods, 22 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/NameMarker/ObjectiveMarkerWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ObjectiveMarkerWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.NameMarker`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class ObjectiveMarkerWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/NameMarker/ObjectiveMarkerWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

ObjectiveMarkerWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/NameMarker/ObjectiveMarkerWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is ObjectiveMarkerWidget → Widget → PropertyOwnerObject. It exposes 25 public/protected members: 2 methods, 22 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ObjectiveMarkerWidget lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.NameMarker`, inheritance chain ObjectiveMarkerWidget → Widget → PropertyOwnerObject. The surface is property-led (properties 22/25, methods 2/25), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/NameMarker/ObjectiveMarkerWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IsCombinedWithOtherMarkers` | `public bool IsCombinedWithOtherMarkers` | property |
| `FarAlphaTarget` | `public float FarAlphaTarget` | property |
| `FarDistanceCutoff` | `public float FarDistanceCutoff` | property |
| `CloseDistanceCutoff` | `public float CloseDistanceCutoff` | property |
| `Rect` | `public MarkerRect Rect` | property |
| `IsInScreenBoundaries` | `public bool IsInScreenBoundaries` | property |
| `ObjectiveMarkerWidget` | `public ObjectiveMarkerWidget(UIContext context) : base(context)` | constructor |
| `Update` | `public void Update(float dt)` | method |
| `UpdateRectangle` | `public void UpdateRectangle()` | method |
| `NameTextWidget` | `public TextWidget NameTextWidget` | property |
| `CombinationCountWidget` | `public TextWidget CombinationCountWidget` | property |
| `QuestIconWidget` | `public Widget QuestIconWidget` | property |
| `MainContainer` | `public Widget MainContainer` | property |
| `DistanceContainerWidget` | `public Widget DistanceContainerWidget` | property |
| `DistanceIconWidget` | `public Widget DistanceIconWidget` | property |
| `DistanceTextWidget` | `public Widget DistanceTextWidget` | property |
| `Position` | `public Vec2 Position` | property |
| `CombinedAveragePosition` | `public Vec2 CombinedAveragePosition` | property |
| `Distance` | `public int Distance` | property |
| `CombinedSiblingsCount` | `public int CombinedSiblingsCount` | property |
| `IsMainCombinationMarker` | `public bool IsMainCombinationMarker` | property |
| `IsDistanceRelevant` | `public bool IsDistanceRelevant` | property |
| `IsMarkerEnabled` | `public bool IsMarkerEnabled` | property |
| `IsMarkerActive` | `public bool IsMarkerActive` | property |
| `IsFocused` | `public new bool IsFocused` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AlwaysVisibleNameMarkerListPanel](../AlwaysVisibleNameMarkerListPanel/)
- [same namespace DuelTargetMarkerListPanel](../DuelTargetMarkerListPanel/)
- [same namespace MarkerRect](../MarkerRect/)
- [same namespace NameMarkerListPanel](../NameMarkerListPanel/)
