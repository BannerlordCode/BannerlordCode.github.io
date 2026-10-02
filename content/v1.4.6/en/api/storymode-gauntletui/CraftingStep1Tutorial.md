---
title: "CraftingStep1Tutorial"
description: "CraftingStep1Tutorial: a public class in StoryMode.GauntletUI, inheriting TutorialItemBase; 7 exposed members (6 methods, 0 properties, 0 fields). Source: StoryMode.GauntletUI/Tutorial/CraftingStep1Tutorial.cs."
---
# CraftingStep1Tutorial

**Namespace:** `StoryMode.GauntletUI.Tutorial`
**Module:** `StoryMode.GauntletUI`
**Type:** `public class CraftingStep1Tutorial : TutorialItemBase`
**File:** `StoryMode.GauntletUI/Tutorial/CraftingStep1Tutorial.cs`

## Overview

CraftingStep1Tutorial lives in the StoryMode.GauntletUI module, source file StoryMode.GauntletUI/Tutorial/CraftingStep1Tutorial.cs. It is a public class, implementing/inheriting TutorialItemBase; the inheritance chain is CraftingStep1Tutorial → TutorialItemBase. It exposes 7 public/protected members: 6 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CraftingStep1Tutorial is a top-level type in StoryMode.GauntletUI, namespace differing from (StoryMode.GauntletUI.Tutorial) the module directory; inheritance chain CraftingStep1Tutorial → TutorialItemBase. The surface is method-led (methods 6/7, properties 0/7), so it mostly exposes operations. TutorialItemBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from StoryMode.GauntletUI/Tutorial/CraftingStep1Tutorial.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CraftingStep1Tutorial` | `public CraftingStep1Tutorial()` | constructor |
| `GetTutorialsRelevantContext` | `public override TutorialContexts GetTutorialsRelevantContext()` | method |
| `OnCraftingWeaponClassSelectionOpened` | `public override void OnCraftingWeaponClassSelectionOpened(CraftingWeaponClassSelectionOpenedEvent obj)` | method |
| `OnCraftingOrderSelectionOpened` | `public override void OnCraftingOrderSelectionOpened(CraftingOrderSelectionOpenedEvent obj)` | method |
| `OnCraftingOnWeaponResultPopupOpened` | `public override void OnCraftingOnWeaponResultPopupOpened(CraftingWeaponResultPopupToggledEvent obj)` | method |
| `IsConditionsMetForActivation` | `public override bool IsConditionsMetForActivation()` | method |
| `IsConditionsMetForCompletion` | `public override bool IsConditionsMetForCompletion()` | method |

## See Also

- [↑ storymode-gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ArmyCohesionStep1Tutorial](../ArmyCohesionStep1Tutorial)
- [same namespace ArmyCohesionStep2Tutorial](../ArmyCohesionStep2Tutorial)
- [same namespace AssignRolesTutorial](../AssignRolesTutorial)
- [same namespace BombardmentStep1Tutorial](../BombardmentStep1Tutorial)
