---
title: "UpgradingTroopsStep2Tutorial"
description: "UpgradingTroopsStep2Tutorial: a public class in StoryMode.GauntletUI, inheriting TutorialItemBase; 6 exposed members (5 methods, 0 properties, 0 fields). Source: StoryMode.GauntletUI/Tutorial/UpgradingTroopsStep2Tutorial.cs."
---
# UpgradingTroopsStep2Tutorial

**Namespace:** `StoryMode.GauntletUI.Tutorial`
**Module:** `StoryMode.GauntletUI`
**Type:** `public class UpgradingTroopsStep2Tutorial : TutorialItemBase`
**File:** `StoryMode.GauntletUI/Tutorial/UpgradingTroopsStep2Tutorial.cs`

## Overview

UpgradingTroopsStep2Tutorial lives in the StoryMode.GauntletUI module, source file StoryMode.GauntletUI/Tutorial/UpgradingTroopsStep2Tutorial.cs. It is a public class, implementing/inheriting TutorialItemBase; the inheritance chain is UpgradingTroopsStep2Tutorial → TutorialItemBase. It exposes 6 public/protected members: 5 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: UpgradingTroopsStep2Tutorial is a top-level type in StoryMode.GauntletUI, namespace differing from (StoryMode.GauntletUI.Tutorial) the module directory; inheritance chain UpgradingTroopsStep2Tutorial → TutorialItemBase. The surface is method-led (methods 5/6, properties 0/6), so it mostly exposes operations. TutorialItemBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from StoryMode.GauntletUI/Tutorial/UpgradingTroopsStep2Tutorial.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `UpgradingTroopsStep2Tutorial` | `public UpgradingTroopsStep2Tutorial()` | constructor |
| `IsConditionsMetForCompletion` | `public override bool IsConditionsMetForCompletion()` | method |
| `OnPlayerToggledUpgradePopup` | `public override void OnPlayerToggledUpgradePopup(PlayerToggledUpgradePopupEvent obj)` | method |
| `OnPlayerUpgradeTroop` | `public override void OnPlayerUpgradeTroop(CharacterObject arg1, CharacterObject arg2, int arg3)` | method |
| `IsConditionsMetForActivation` | `public override bool IsConditionsMetForActivation()` | method |
| `GetTutorialsRelevantContext` | `public override TutorialContexts GetTutorialsRelevantContext()` | method |

## See Also

- [↑ storymode-gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ArmyCohesionStep1Tutorial](../ArmyCohesionStep1Tutorial)
- [same namespace ArmyCohesionStep2Tutorial](../ArmyCohesionStep2Tutorial)
- [same namespace AssignRolesTutorial](../AssignRolesTutorial)
- [same namespace BombardmentStep1Tutorial](../BombardmentStep1Tutorial)
