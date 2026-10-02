---
title: "ObjectiveMarkersParentWidget"
description: "ObjectiveMarkersParentWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting Widget; 7 exposed members (1 methods, 5 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/NameMarker/ObjectiveMarkersParentWidget.cs."
---
# ObjectiveMarkersParentWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.NameMarker`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class ObjectiveMarkersParentWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/NameMarker/ObjectiveMarkersParentWidget.cs`

## Overview

ObjectiveMarkersParentWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/NameMarker/ObjectiveMarkersParentWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is ObjectiveMarkersParentWidget → Widget. It exposes 7 public/protected members: 1 methods, 5 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ObjectiveMarkersParentWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.NameMarker) the module directory; inheritance chain ObjectiveMarkersParentWidget → Widget. The surface is property-led (properties 5/7, methods 1/7), so it mostly exposes state for reading. Widget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/NameMarker/ObjectiveMarkersParentWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MinDistanceToFocus` | `public float MinDistanceToFocus` | property |
| `ObjectiveMarkersParentWidget` | `public ObjectiveMarkersParentWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `IsMarkersEnabled` | `public bool IsMarkersEnabled` | property |
| `TargetAlphaValue` | `public float TargetAlphaValue` | property |
| `MaxDistanceToCombineMarkers` | `public float MaxDistanceToCombineMarkers` | property |
| `MarkersContainer` | `public Widget MarkersContainer` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AlwaysVisibleNameMarkerListPanel](../AlwaysVisibleNameMarkerListPanel)
- [same namespace DuelTargetMarkerListPanel](../DuelTargetMarkerListPanel)
- [same namespace MarkerRect](../MarkerRect)
- [same namespace NameMarkerListPanel](../NameMarkerListPanel)
