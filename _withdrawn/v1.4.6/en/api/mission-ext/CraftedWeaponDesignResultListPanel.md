---
title: "CraftedWeaponDesignResultListPanel"
description: "CraftedWeaponDesignResultListPanel: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Crafting, inheriting ListPanel; 17 exposed members (1 methods, 15 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Crafting/CraftedWeaponDesignResultListPanel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CraftedWeaponDesignResultListPanel

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Crafting`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class CraftedWeaponDesignResultListPanel : ListPanel`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Crafting/CraftedWeaponDesignResultListPanel.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

CraftedWeaponDesignResultListPanel lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Crafting/CraftedWeaponDesignResultListPanel.cs. It is a public class, implementing/inheriting ListPanel; the inheritance chain is CraftedWeaponDesignResultListPanel → ListPanel → Container → Widget → PropertyOwnerObject. It exposes 17 public/protected members: 1 methods, 15 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CraftedWeaponDesignResultListPanel lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Crafting`, inheritance chain CraftedWeaponDesignResultListPanel → ListPanel → Container → Widget → PropertyOwnerObject. The surface is property-led (properties 15/17, methods 1/17), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Crafting/CraftedWeaponDesignResultListPanel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ChangeValueTextWidget` | `public CounterTextBrushWidget ChangeValueTextWidget` | property |
| `ValueTextWidget` | `public CounterTextBrushWidget ValueTextWidget` | property |
| `GoldEffectorTextWidget` | `public RichTextWidget GoldEffectorTextWidget` | property |
| `PositiveChangeBrush` | `public Brush PositiveChangeBrush` | property |
| `NegativeChangeBrush` | `public Brush NegativeChangeBrush` | property |
| `NeutralBrush` | `public Brush NeutralBrush` | property |
| `FadeInTimeIndexOffset` | `public float FadeInTimeIndexOffset` | property |
| `FadeInTime` | `public float FadeInTime` | property |
| `CounterStartTime` | `public float CounterStartTime` | property |
| `CraftedWeaponDesignResultListPanel` | `public CraftedWeaponDesignResultListPanel(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `LabelTextWidget` | `public RichTextWidget LabelTextWidget` | property |
| `InitValue` | `public float InitValue` | property |
| `ChangeAmount` | `public float ChangeAmount` | property |
| `IsExceedingBeneficial` | `public bool IsExceedingBeneficial` | property |
| `TargetValue` | `public float TargetValue` | property |
| `IsOrderResult` | `public bool IsOrderResult` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ListPanel](../../gui/ListPanel/)
- [same namespace CardSelectionPopupButtonWidget](../CardSelectionPopupButtonWidget/)
- [same namespace CraftingCardHighlightBrushWidget](../CraftingCardHighlightBrushWidget/)
- [same namespace CraftingDifficultyBarParentWidget](../CraftingDifficultyBarParentWidget/)
- [same namespace CraftingItemStatSliderWidget](../CraftingItemStatSliderWidget/)
