---
title: "DecisionSupporterGridWidget"
description: "DecisionSupporterGridWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting GridWidget; 4 exposed members (1 methods, 2 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Kingdom/DecisionSupporterGridWidget.cs."
---
# DecisionSupporterGridWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Kingdom`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class DecisionSupporterGridWidget : GridWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Kingdom/DecisionSupporterGridWidget.cs`

## Overview

DecisionSupporterGridWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Kingdom/DecisionSupporterGridWidget.cs. It is a public class, implementing/inheriting GridWidget; the inheritance chain is DecisionSupporterGridWidget → GridWidget. It exposes 4 public/protected members: 1 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DecisionSupporterGridWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Kingdom) the module directory; inheritance chain DecisionSupporterGridWidget → GridWidget. The surface is property-led (properties 2/4, methods 1/4), so it mostly exposes state for reading. GridWidget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Kingdom/DecisionSupporterGridWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `VisibleCount` | `public int VisibleCount` | property |
| `MoreTextWidget` | `public TextWidget MoreTextWidget` | property |
| `DecisionSupporterGridWidget` | `public DecisionSupporterGridWidget(UIContext context) : base(context)` | constructor |
| `OnChildAdded` | `protected override void OnChildAdded(Widget child)` | method |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace DecisionSupportStrengthListPanel](../DecisionSupportStrengthListPanel)
- [same namespace KingdomCardItemContainerWidget](../KingdomCardItemContainerWidget)
- [same namespace KingdomClanTypeVisualBrushWidget](../KingdomClanTypeVisualBrushWidget)
- [same namespace KingdomDecisionFactionTypeVisualBrushWidget](../KingdomDecisionFactionTypeVisualBrushWidget)
