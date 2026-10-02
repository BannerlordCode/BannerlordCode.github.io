---
title: "PerkSelectionBarWidget"
description: "PerkSelectionBarWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting Widget; 13 exposed members (1 methods, 11 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/CharacterDeveloper/PerkSelectionBarWidget.cs."
---
# PerkSelectionBarWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterDeveloper`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class PerkSelectionBarWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/CharacterDeveloper/PerkSelectionBarWidget.cs`

## Overview

PerkSelectionBarWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/CharacterDeveloper/PerkSelectionBarWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is PerkSelectionBarWidget → Widget. It exposes 13 public/protected members: 1 methods, 11 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PerkSelectionBarWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterDeveloper) the module directory; inheritance chain PerkSelectionBarWidget → Widget. The surface is property-led (properties 11/13, methods 1/13), so it mostly exposes state for reading. Widget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/CharacterDeveloper/PerkSelectionBarWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PerkSelectionBarWidget` | `public PerkSelectionBarWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `ProgressClip` | `public Widget ProgressClip` | property |
| `PercentageIndicatorWidget` | `public Widget PercentageIndicatorWidget` | property |
| `FullLearningRateClip` | `public Widget FullLearningRateClip` | property |
| `SeperatorContainer` | `public Widget SeperatorContainer` | property |
| `LearningLimitIndicatorWidget` | `public Widget LearningLimitIndicatorWidget` | property |
| `FullLearningRateClipInnerContent` | `public Widget FullLearningRateClipInnerContent` | property |
| `PerksList` | `public Widget PerksList` | property |
| `PercentageIndicatorTextWidget` | `public TextWidget PercentageIndicatorTextWidget` | property |
| `MaxLevel` | `public int MaxLevel` | property |
| `FullLearningRateLevel` | `public int FullLearningRateLevel` | property |
| `Level` | `public int Level` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CharacterDeveloperAttributeInspectionPopupWidget](../CharacterDeveloperAttributeInspectionPopupWidget)
- [same namespace CharacterDeveloperPerksContainerWidget](../CharacterDeveloperPerksContainerWidget)
- [same namespace CharacterDeveloperPerkSelectionItemButtonWidget](../CharacterDeveloperPerkSelectionItemButtonWidget)
- [same namespace CharacterDeveloperPerkSelectionWidget](../CharacterDeveloperPerkSelectionWidget)
