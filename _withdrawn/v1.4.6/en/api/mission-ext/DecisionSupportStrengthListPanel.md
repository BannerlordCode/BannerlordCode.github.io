---
title: "DecisionSupportStrengthListPanel"
description: "DecisionSupportStrengthListPanel: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Kingdom, inheriting ListPanel; 13 exposed members (1 methods, 11 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Kingdom/DecisionSupportStrengthListPanel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DecisionSupportStrengthListPanel

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Kingdom`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class DecisionSupportStrengthListPanel : ListPanel`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Kingdom/DecisionSupportStrengthListPanel.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

DecisionSupportStrengthListPanel lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Kingdom/DecisionSupportStrengthListPanel.cs. It is a public class, implementing/inheriting ListPanel; the inheritance chain is DecisionSupportStrengthListPanel → ListPanel → Container → Widget → PropertyOwnerObject. It exposes 13 public/protected members: 1 methods, 11 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DecisionSupportStrengthListPanel lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Kingdom`, inheritance chain DecisionSupportStrengthListPanel → ListPanel → Container → Widget → PropertyOwnerObject. The surface is property-led (properties 11/13, methods 1/13), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Kingdom/DecisionSupportStrengthListPanel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ListPanel](../../gui/ListPanel/)
- [same namespace DecisionSupporterGridWidget](../DecisionSupporterGridWidget/)
- [same namespace KingdomCardItemContainerWidget](../KingdomCardItemContainerWidget/)
- [same namespace KingdomClanTypeVisualBrushWidget](../KingdomClanTypeVisualBrushWidget/)
- [same namespace KingdomDecisionFactionTypeVisualBrushWidget](../KingdomDecisionFactionTypeVisualBrushWidget/)
