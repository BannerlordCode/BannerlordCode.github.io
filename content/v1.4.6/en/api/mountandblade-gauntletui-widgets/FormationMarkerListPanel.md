---
title: "FormationMarkerListPanel"
description: "FormationMarkerListPanel: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting ListPanel; 21 exposed members (1 methods, 19 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/FormationMarkerListPanel.cs."
---
# FormationMarkerListPanel

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class FormationMarkerListPanel : ListPanel`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/FormationMarkerListPanel.cs`

## Overview

FormationMarkerListPanel lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/FormationMarkerListPanel.cs. It is a public class, implementing/inheriting ListPanel; the inheritance chain is FormationMarkerListPanel → ListPanel. It exposes 21 public/protected members: 1 methods, 19 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: FormationMarkerListPanel is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission) the module directory; inheritance chain FormationMarkerListPanel → ListPanel. The surface is property-led (properties 19/21, methods 1/21), so it mostly exposes state for reading. ListPanel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/FormationMarkerListPanel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgentAlarmStateWidget](../AgentAlarmStateWidget)
- [same namespace AgentAmmoTextWidget](../AgentAmmoTextWidget)
- [same namespace AgentHealthWidget](../AgentHealthWidget)
- [same namespace AgentLockVisualBrushWidget](../AgentLockVisualBrushWidget)
