---
title: "PerkItemButtonWidget"
description: "PerkItemButtonWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterDeveloper, inheriting ButtonWidget; 15 exposed members (2 methods, 11 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/CharacterDeveloper/PerkItemButtonWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PerkItemButtonWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterDeveloper`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class PerkItemButtonWidget : ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/CharacterDeveloper/PerkItemButtonWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

PerkItemButtonWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/CharacterDeveloper/PerkItemButtonWidget.cs. It is a public class, implementing/inheriting ButtonWidget; the inheritance chain is PerkItemButtonWidget → ButtonWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject. It exposes 15 public/protected members: 2 methods, 11 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PerkItemButtonWidget lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterDeveloper`, inheritance chain PerkItemButtonWidget → ButtonWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject. The surface is property-led (properties 11/15, methods 2/15), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/CharacterDeveloper/PerkItemButtonWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `NotEarnedPerkBrush` | `public Brush NotEarnedPerkBrush` | property |
| `EarnedNotSelectedPerkBrush` | `public Brush EarnedNotSelectedPerkBrush` | property |
| `EarnedActivePerkBrush` | `public Brush EarnedActivePerkBrush` | property |
| `EarnedNotActivePerkBrush` | `public Brush EarnedNotActivePerkBrush` | property |
| `EarnedPreviousPerkNotSelectedPerkBrush` | `public Brush EarnedPreviousPerkNotSelectedPerkBrush` | property |
| `PerkVisualWidgetParent` | `public BrushWidget PerkVisualWidgetParent` | property |
| `PerkItemButtonWidget` | `public PerkItemButtonWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `HandleClick` | `protected override void HandleClick()` | method |
| `Level` | `public int Level` | property |
| `PerkVisualWidget` | `public Widget PerkVisualWidget` | property |
| `PerkState` | `public int PerkState` | property |
| `AlternativeType` | `public int AlternativeType` | property |
| `AnimState` | `public enum AnimState` | property |
| `AnimState` | `public enum AnimState` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ButtonWidget](../../gui/ButtonWidget/)
- [same namespace CharacterDeveloperAttributeInspectionPopupWidget](../CharacterDeveloperAttributeInspectionPopupWidget/)
- [same namespace CharacterDeveloperPerksContainerWidget](../CharacterDeveloperPerksContainerWidget/)
- [same namespace CharacterDeveloperPerkSelectionItemButtonWidget](../CharacterDeveloperPerkSelectionItemButtonWidget/)
- [same namespace CharacterDeveloperPerkSelectionWidget](../CharacterDeveloperPerkSelectionWidget/)
