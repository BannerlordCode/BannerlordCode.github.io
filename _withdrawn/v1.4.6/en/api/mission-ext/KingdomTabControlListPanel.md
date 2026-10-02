---
title: "KingdomTabControlListPanel"
description: "KingdomTabControlListPanel: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Kingdom, inheriting ListPanel; 12 exposed members (1 methods, 10 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Kingdom/KingdomTabControlListPanel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# KingdomTabControlListPanel

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Kingdom`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class KingdomTabControlListPanel : ListPanel`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Kingdom/KingdomTabControlListPanel.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

KingdomTabControlListPanel lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Kingdom/KingdomTabControlListPanel.cs. It is a public class, implementing/inheriting ListPanel; the inheritance chain is KingdomTabControlListPanel → ListPanel → Container → Widget → PropertyOwnerObject. It exposes 12 public/protected members: 1 methods, 10 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: KingdomTabControlListPanel lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Kingdom`, inheritance chain KingdomTabControlListPanel → ListPanel → Container → Widget → PropertyOwnerObject. The surface is property-led (properties 10/12, methods 1/12), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Kingdom/KingdomTabControlListPanel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ListPanel](../../gui/ListPanel/)
- [same namespace DecisionSupporterGridWidget](../DecisionSupporterGridWidget/)
- [same namespace DecisionSupportStrengthListPanel](../DecisionSupportStrengthListPanel/)
- [same namespace KingdomCardItemContainerWidget](../KingdomCardItemContainerWidget/)
- [same namespace KingdomClanTypeVisualBrushWidget](../KingdomClanTypeVisualBrushWidget/)
