---
title: "NameMarkerScreenWidget"
description: "NameMarkerScreenWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting Widget; 5 exposed members (1 methods, 3 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/NameMarker/NameMarkerScreenWidget.cs."
---
# NameMarkerScreenWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.NameMarker`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class NameMarkerScreenWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/NameMarker/NameMarkerScreenWidget.cs`

## Overview

NameMarkerScreenWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/NameMarker/NameMarkerScreenWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is NameMarkerScreenWidget → Widget. It exposes 5 public/protected members: 1 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: NameMarkerScreenWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.NameMarker) the module directory; inheritance chain NameMarkerScreenWidget → Widget. The surface is property-led (properties 3/5, methods 1/5), so it mostly exposes state for reading. Widget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/NameMarker/NameMarkerScreenWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `NameMarkerScreenWidget` | `public NameMarkerScreenWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `IsMarkersEnabled` | `public bool IsMarkersEnabled` | property |
| `TargetAlphaValue` | `public float TargetAlphaValue` | property |
| `MarkersContainer` | `public Widget MarkersContainer` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AlwaysVisibleNameMarkerListPanel](../AlwaysVisibleNameMarkerListPanel)
- [same namespace DuelTargetMarkerListPanel](../DuelTargetMarkerListPanel)
- [same namespace MarkerRect](../MarkerRect)
- [same namespace NameMarkerListPanel](../NameMarkerListPanel)
