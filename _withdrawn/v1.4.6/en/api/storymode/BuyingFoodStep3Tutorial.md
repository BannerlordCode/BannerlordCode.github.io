---
title: "BuyingFoodStep3Tutorial"
description: "BuyingFoodStep3Tutorial: a public class in StoryMode.GauntletUI.Tutorial, inheriting TutorialItemBase; 5 exposed members (4 methods, 0 properties, 0 fields). Canonical bucket storymode. Source: StoryMode.GauntletUI/Tutorial/BuyingFoodStep3Tutorial.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BuyingFoodStep3Tutorial

**Namespace:** `StoryMode.GauntletUI.Tutorial`
**Module:** `StoryMode.GauntletUI`
**Type:** `public class BuyingFoodStep3Tutorial : TutorialItemBase`
**File:** `StoryMode.GauntletUI/Tutorial/BuyingFoodStep3Tutorial.cs`
**Bucket:** `storymode` (rule:StoryMode)

## Overview

BuyingFoodStep3Tutorial lives in the StoryMode.GauntletUI module, source file StoryMode.GauntletUI/Tutorial/BuyingFoodStep3Tutorial.cs. It is a public class, implementing/inheriting TutorialItemBase; the inheritance chain is BuyingFoodStep3Tutorial → TutorialItemBase. It exposes 5 public/protected members: 4 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BuyingFoodStep3Tutorial lands in canonical bucket `storymode` (matched rule `rule:StoryMode`), namespace `StoryMode.GauntletUI.Tutorial`, inheritance chain BuyingFoodStep3Tutorial → TutorialItemBase. The surface is method-led (methods 4/5, properties 0/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from StoryMode.GauntletUI/Tutorial/BuyingFoodStep3Tutorial.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `BuyingFoodStep3Tutorial` | `public BuyingFoodStep3Tutorial()` | constructor |
| `IsConditionsMetForCompletion` | `public override bool IsConditionsMetForCompletion()` | method |
| `IsConditionsMetForActivation` | `public override bool IsConditionsMetForActivation()` | method |
| `OnPlayerInventoryExchange` | `public override void OnPlayerInventoryExchange(List<ValueTuple<ItemRosterElement, int>>purchasedItems, List<ValueTuple<ItemRosterElement, int>>soldItems, bool isTrading)` | method |
| `GetTutorialsRelevantContext` | `public override TutorialContexts GetTutorialsRelevantContext()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface TutorialItemBase](../../sandbox/TutorialItemBase/)
- [same namespace ArmyCohesionStep1Tutorial](../ArmyCohesionStep1Tutorial/)
- [same namespace ArmyCohesionStep2Tutorial](../ArmyCohesionStep2Tutorial/)
- [same namespace AssignRolesTutorial](../AssignRolesTutorial/)
- [same namespace BombardmentStep1Tutorial](../BombardmentStep1Tutorial/)
