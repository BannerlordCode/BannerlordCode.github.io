---
title: "ChoosingPerkUpgradesStep1Tutorial"
description: "ChoosingPerkUpgradesStep1Tutorial: a public class in StoryMode.GauntletUI, inheriting TutorialItemBase; 5 exposed members (4 methods, 0 properties, 0 fields). Source: StoryMode.GauntletUI/Tutorial/ChoosingPerkUpgradesStep1Tutorial.cs."
---
# ChoosingPerkUpgradesStep1Tutorial

**Namespace:** `StoryMode.GauntletUI.Tutorial`
**Module:** `StoryMode.GauntletUI`
**Type:** `public class ChoosingPerkUpgradesStep1Tutorial : TutorialItemBase`
**File:** `StoryMode.GauntletUI/Tutorial/ChoosingPerkUpgradesStep1Tutorial.cs`

## Overview

ChoosingPerkUpgradesStep1Tutorial lives in the StoryMode.GauntletUI module, source file StoryMode.GauntletUI/Tutorial/ChoosingPerkUpgradesStep1Tutorial.cs. It is a public class, implementing/inheriting TutorialItemBase; the inheritance chain is ChoosingPerkUpgradesStep1Tutorial → TutorialItemBase. It exposes 5 public/protected members: 4 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ChoosingPerkUpgradesStep1Tutorial is a top-level type in StoryMode.GauntletUI, namespace differing from (StoryMode.GauntletUI.Tutorial) the module directory; inheritance chain ChoosingPerkUpgradesStep1Tutorial → TutorialItemBase. The surface is method-led (methods 4/5, properties 0/5), so it mostly exposes operations. TutorialItemBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from StoryMode.GauntletUI/Tutorial/ChoosingPerkUpgradesStep1Tutorial.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ChoosingPerkUpgradesStep1Tutorial` | `public ChoosingPerkUpgradesStep1Tutorial()` | constructor |
| `IsConditionsMetForCompletion` | `public override bool IsConditionsMetForCompletion()` | method |
| `GetTutorialsRelevantContext` | `public override TutorialContexts GetTutorialsRelevantContext()` | method |
| `IsConditionsMetForActivation` | `public override bool IsConditionsMetForActivation()` | method |
| `OnTutorialContextChanged` | `public override void OnTutorialContextChanged(TutorialContextChangedEvent obj)` | method |

## See Also

- [↑ storymode-gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ArmyCohesionStep1Tutorial](../ArmyCohesionStep1Tutorial)
- [same namespace ArmyCohesionStep2Tutorial](../ArmyCohesionStep2Tutorial)
- [same namespace AssignRolesTutorial](../AssignRolesTutorial)
- [same namespace BombardmentStep1Tutorial](../BombardmentStep1Tutorial)
