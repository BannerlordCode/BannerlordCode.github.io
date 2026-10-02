---
title: "DecisionSupportStrengthListPanel"
description: "DecisionSupportStrengthListPanel: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting ListPanel; 13 exposed members (1 methods, 11 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Kingdom/DecisionSupportStrengthListPanel.cs."
---
# DecisionSupportStrengthListPanel

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Kingdom`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class DecisionSupportStrengthListPanel : ListPanel`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Kingdom/DecisionSupportStrengthListPanel.cs`

## Overview

DecisionSupportStrengthListPanel lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Kingdom/DecisionSupportStrengthListPanel.cs. It is a public class, implementing/inheriting ListPanel; the inheritance chain is DecisionSupportStrengthListPanel → ListPanel. It exposes 13 public/protected members: 1 methods, 11 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DecisionSupportStrengthListPanel is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Kingdom) the module directory; inheritance chain DecisionSupportStrengthListPanel → ListPanel. The surface is property-led (properties 11/13, methods 1/13), so it mostly exposes state for reading. ListPanel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Kingdom/DecisionSupportStrengthListPanel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsAbstain` | `public bool IsAbstain` | property |
| `IsPlayerSupporter` | `public bool IsPlayerSupporter` | property |
| `IsOptionSelected` | `public bool IsOptionSelected` | property |
| `IsKingsOutcome` | `public bool IsKingsOutcome` | property |
| `DecisionSupportStrengthListPanel` | `public DecisionSupportStrengthListPanel(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `CurrentIndex` | `public int CurrentIndex` | property |
| `StrengthButton0` | `public ButtonWidget StrengthButton0` | property |
| `StrengthButton1` | `public ButtonWidget StrengthButton1` | property |
| `StrengthButton2` | `public ButtonWidget StrengthButton2` | property |
| `StrengthButton0Text` | `public RichTextWidget StrengthButton0Text` | property |
| `StrengthButton1Text` | `public RichTextWidget StrengthButton1Text` | property |
| `StrengthButton2Text` | `public RichTextWidget StrengthButton2Text` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace DecisionSupporterGridWidget](../DecisionSupporterGridWidget)
- [same namespace KingdomCardItemContainerWidget](../KingdomCardItemContainerWidget)
- [same namespace KingdomClanTypeVisualBrushWidget](../KingdomClanTypeVisualBrushWidget)
- [same namespace KingdomDecisionFactionTypeVisualBrushWidget](../KingdomDecisionFactionTypeVisualBrushWidget)
