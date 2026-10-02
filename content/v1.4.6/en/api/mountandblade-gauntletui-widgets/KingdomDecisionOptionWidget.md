---
title: "KingdomDecisionOptionWidget"
description: "KingdomDecisionOptionWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting Widget; 13 exposed members (1 methods, 11 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Kingdom/KingdomDecisionOptionWidget.cs."
---
# KingdomDecisionOptionWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Kingdom`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class KingdomDecisionOptionWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Kingdom/KingdomDecisionOptionWidget.cs`

## Overview

KingdomDecisionOptionWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Kingdom/KingdomDecisionOptionWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is KingdomDecisionOptionWidget → Widget. It exposes 13 public/protected members: 1 methods, 11 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: KingdomDecisionOptionWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Kingdom) the module directory; inheritance chain KingdomDecisionOptionWidget → Widget. The surface is property-led (properties 11/13, methods 1/13), so it mostly exposes state for reading. Widget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Kingdom/KingdomDecisionOptionWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SealVisualWidget` | `public Widget SealVisualWidget` | property |
| `StrengthWidget` | `public DecisionSupportStrengthListPanel StrengthWidget` | property |
| `IsPlayerSupporter` | `public bool IsPlayerSupporter` | property |
| `IsAbstain` | `public bool IsAbstain` | property |
| `SealStartWidth` | `public float SealStartWidth` | property |
| `SealStartHeight` | `public float SealStartHeight` | property |
| `SealEndWidth` | `public float SealEndWidth` | property |
| `SealEndHeight` | `public float SealEndHeight` | property |
| `SealAnimLength` | `public float SealAnimLength` | property |
| `KingdomDecisionOptionWidget` | `public KingdomDecisionOptionWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `IsOptionSelected` | `public bool IsOptionSelected` | property |
| `IsKingsOption` | `public bool IsKingsOption` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace DecisionSupporterGridWidget](../DecisionSupporterGridWidget)
- [same namespace DecisionSupportStrengthListPanel](../DecisionSupportStrengthListPanel)
- [same namespace KingdomCardItemContainerWidget](../KingdomCardItemContainerWidget)
- [same namespace KingdomClanTypeVisualBrushWidget](../KingdomClanTypeVisualBrushWidget)
