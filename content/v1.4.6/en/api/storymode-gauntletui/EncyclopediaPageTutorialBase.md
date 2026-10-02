---
title: "EncyclopediaPageTutorialBase"
description: "EncyclopediaPageTutorialBase: a public class in StoryMode.GauntletUI, inheriting TutorialItemBase; 4 exposed members (3 methods, 0 properties, 0 fields). Source: StoryMode.GauntletUI/Tutorial/EncyclopediaPageTutorialBase.cs."
---
# EncyclopediaPageTutorialBase

**Namespace:** `StoryMode.GauntletUI.Tutorial`
**Module:** `StoryMode.GauntletUI`
**Type:** `public abstract class EncyclopediaPageTutorialBase : TutorialItemBase`
**File:** `StoryMode.GauntletUI/Tutorial/EncyclopediaPageTutorialBase.cs`

## Overview

EncyclopediaPageTutorialBase lives in the StoryMode.GauntletUI module, source file StoryMode.GauntletUI/Tutorial/EncyclopediaPageTutorialBase.cs. It is a public class (abstract), implementing/inheriting TutorialItemBase; the inheritance chain is EncyclopediaPageTutorialBase → TutorialItemBase. It exposes 4 public/protected members: 3 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EncyclopediaPageTutorialBase is a top-level type in StoryMode.GauntletUI, namespace differing from (StoryMode.GauntletUI.Tutorial) the module directory; inheritance chain EncyclopediaPageTutorialBase → TutorialItemBase. The surface is method-led (methods 3/4, properties 0/4), so it mostly exposes operations. TutorialItemBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from StoryMode.GauntletUI/Tutorial/EncyclopediaPageTutorialBase.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `EncyclopediaPageTutorialBase` | `public EncyclopediaPageTutorialBase(EncyclopediaPages activationPage, EncyclopediaPages alternateActivationPage)` | constructor |
| `GetTutorialsRelevantContext` | `public override TutorialContexts GetTutorialsRelevantContext()` | method |
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
