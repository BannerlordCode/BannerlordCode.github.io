---
title: "KingdomTabControlListPanel"
description: "KingdomTabControlListPanel: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting ListPanel; 12 exposed members (1 methods, 10 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Kingdom/KingdomTabControlListPanel.cs."
---
# KingdomTabControlListPanel

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Kingdom`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class KingdomTabControlListPanel : ListPanel`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Kingdom/KingdomTabControlListPanel.cs`

## Overview

KingdomTabControlListPanel lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Kingdom/KingdomTabControlListPanel.cs. It is a public class, implementing/inheriting ListPanel; the inheritance chain is KingdomTabControlListPanel → ListPanel. It exposes 12 public/protected members: 1 methods, 10 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: KingdomTabControlListPanel is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Kingdom) the module directory; inheritance chain KingdomTabControlListPanel → ListPanel. The surface is property-led (properties 10/12, methods 1/12), so it mostly exposes state for reading. ListPanel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Kingdom/KingdomTabControlListPanel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `KingdomTabControlListPanel` | `public KingdomTabControlListPanel(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `DiplomacyPanel` | `public Widget DiplomacyPanel` | property |
| `ArmiesPanel` | `public Widget ArmiesPanel` | property |
| `ClansPanel` | `public Widget ClansPanel` | property |
| `PoliciesPanel` | `public Widget PoliciesPanel` | property |
| `FiefsPanel` | `public Widget FiefsPanel` | property |
| `FiefsButton` | `public ButtonWidget FiefsButton` | property |
| `PoliciesButton` | `public ButtonWidget PoliciesButton` | property |
| `ClansButton` | `public ButtonWidget ClansButton` | property |
| `ArmiesButton` | `public ButtonWidget ArmiesButton` | property |
| `DiplomacyButton` | `public ButtonWidget DiplomacyButton` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace DecisionSupporterGridWidget](../DecisionSupporterGridWidget)
- [same namespace DecisionSupportStrengthListPanel](../DecisionSupportStrengthListPanel)
- [same namespace KingdomCardItemContainerWidget](../KingdomCardItemContainerWidget)
- [same namespace KingdomClanTypeVisualBrushWidget](../KingdomClanTypeVisualBrushWidget)
