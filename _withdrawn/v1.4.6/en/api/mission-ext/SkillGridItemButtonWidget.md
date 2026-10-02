---
title: "SkillGridItemButtonWidget"
description: "SkillGridItemButtonWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterDeveloper, inheriting ButtonWidget; 7 exposed members (1 methods, 5 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/CharacterDeveloper/SkillGridItemButtonWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SkillGridItemButtonWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterDeveloper`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class SkillGridItemButtonWidget : ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/CharacterDeveloper/SkillGridItemButtonWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

SkillGridItemButtonWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/CharacterDeveloper/SkillGridItemButtonWidget.cs. It is a public class, implementing/inheriting ButtonWidget; the inheritance chain is SkillGridItemButtonWidget → ButtonWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject. It exposes 7 public/protected members: 1 methods, 5 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SkillGridItemButtonWidget lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterDeveloper`, inheritance chain SkillGridItemButtonWidget → ButtonWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject. The surface is property-led (properties 5/7, methods 1/7), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/CharacterDeveloper/SkillGridItemButtonWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CannotLearnBrush` | `public Brush CannotLearnBrush` | property |
| `CanLearnBrush` | `public Brush CanLearnBrush` | property |
| `SkillGridItemButtonWidget` | `public SkillGridItemButtonWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `FocusLevelWidget` | `public Widget FocusLevelWidget` | property |
| `CanLearnSkill` | `public bool CanLearnSkill` | property |
| `CurrentFocusLevel` | `public int CurrentFocusLevel` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ButtonWidget](../../gui/ButtonWidget/)
- [same namespace CharacterDeveloperAttributeInspectionPopupWidget](../CharacterDeveloperAttributeInspectionPopupWidget/)
- [same namespace CharacterDeveloperPerksContainerWidget](../CharacterDeveloperPerksContainerWidget/)
- [same namespace CharacterDeveloperPerkSelectionItemButtonWidget](../CharacterDeveloperPerkSelectionItemButtonWidget/)
- [same namespace CharacterDeveloperPerkSelectionWidget](../CharacterDeveloperPerkSelectionWidget/)
