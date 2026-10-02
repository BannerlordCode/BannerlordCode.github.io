---
title: "KingdomDecisionPopupWidget"
description: "KingdomDecisionPopupWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting Widget; 4 exposed members (1 methods, 2 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Kingdom/KingdomDecisionPopupWidget.cs."
---
# KingdomDecisionPopupWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Kingdom`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class KingdomDecisionPopupWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Kingdom/KingdomDecisionPopupWidget.cs`

## Overview

KingdomDecisionPopupWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Kingdom/KingdomDecisionPopupWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is KingdomDecisionPopupWidget → Widget. It exposes 4 public/protected members: 1 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: KingdomDecisionPopupWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Kingdom) the module directory; inheritance chain KingdomDecisionPopupWidget → Widget. The surface is property-led (properties 2/4, methods 1/4), so it mostly exposes state for reading. Widget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Kingdom/KingdomDecisionPopupWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DelayAfterKingsDecision` | `public int DelayAfterKingsDecision` | property |
| `KingdomDecisionPopupWidget` | `public KingdomDecisionPopupWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `IsKingsDecisionDone` | `public bool IsKingsDecisionDone` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace DecisionSupporterGridWidget](../DecisionSupporterGridWidget)
- [same namespace DecisionSupportStrengthListPanel](../DecisionSupportStrengthListPanel)
- [same namespace KingdomCardItemContainerWidget](../KingdomCardItemContainerWidget)
- [same namespace KingdomClanTypeVisualBrushWidget](../KingdomClanTypeVisualBrushWidget)
