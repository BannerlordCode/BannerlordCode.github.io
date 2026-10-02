---
title: "ObjectiveMarkerWidget"
description: "ObjectiveMarkerWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting Widget; 25 exposed members (2 methods, 22 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/NameMarker/ObjectiveMarkerWidget.cs."
---
# ObjectiveMarkerWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.NameMarker`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class ObjectiveMarkerWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/NameMarker/ObjectiveMarkerWidget.cs`

## Overview

ObjectiveMarkerWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/NameMarker/ObjectiveMarkerWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is ObjectiveMarkerWidget → Widget. It exposes 25 public/protected members: 2 methods, 22 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ObjectiveMarkerWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.NameMarker) the module directory; inheritance chain ObjectiveMarkerWidget → Widget. The surface is property-led (properties 22/25, methods 2/25), so it mostly exposes state for reading. Widget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/NameMarker/ObjectiveMarkerWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AlwaysVisibleNameMarkerListPanel](../AlwaysVisibleNameMarkerListPanel)
- [same namespace DuelTargetMarkerListPanel](../DuelTargetMarkerListPanel)
- [same namespace MarkerRect](../MarkerRect)
- [same namespace NameMarkerListPanel](../NameMarkerListPanel)
