---
title: "CraftingOrdersTutorial"
description: "CraftingOrdersTutorial: a public class in StoryMode.GauntletUI, inheriting TutorialItemBase; 8 exposed members (7 methods, 0 properties, 0 fields). Source: StoryMode.GauntletUI/Tutorial/CraftingOrdersTutorial.cs."
---
# CraftingOrdersTutorial

**Namespace:** `StoryMode.GauntletUI.Tutorial`
**Module:** `StoryMode.GauntletUI`
**Type:** `public class CraftingOrdersTutorial : TutorialItemBase`
**File:** `StoryMode.GauntletUI/Tutorial/CraftingOrdersTutorial.cs`

## Overview

CraftingOrdersTutorial lives in the StoryMode.GauntletUI module, source file StoryMode.GauntletUI/Tutorial/CraftingOrdersTutorial.cs. It is a public class, implementing/inheriting TutorialItemBase; the inheritance chain is CraftingOrdersTutorial → TutorialItemBase. It exposes 8 public/protected members: 7 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CraftingOrdersTutorial is a top-level type in StoryMode.GauntletUI, namespace differing from (StoryMode.GauntletUI.Tutorial) the module directory; inheritance chain CraftingOrdersTutorial → TutorialItemBase. The surface is method-led (methods 7/8, properties 0/8), so it mostly exposes operations. TutorialItemBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from StoryMode.GauntletUI/Tutorial/CraftingOrdersTutorial.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CraftingOrdersTutorial` | `public CraftingOrdersTutorial()` | constructor |
| `GetTutorialsRelevantContext` | `public override TutorialContexts GetTutorialsRelevantContext()` | method |
| `OnCraftingWeaponClassSelectionOpened` | `public override void OnCraftingWeaponClassSelectionOpened(CraftingWeaponClassSelectionOpenedEvent obj)` | method |
| `OnCraftingOrderTabOpened` | `public override void OnCraftingOrderTabOpened(CraftingOrderTabOpenedEvent obj)` | method |
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
