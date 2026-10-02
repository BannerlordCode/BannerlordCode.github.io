---
title: "EquipmentSetsTutorial"
description: "EquipmentSetsTutorial: a public class in StoryMode.GauntletUI, inheriting TutorialItemBase; 5 exposed members (4 methods, 0 properties, 0 fields). Source: StoryMode.GauntletUI/Tutorial/EquipmentSetsTutorial.cs."
---
# EquipmentSetsTutorial

**Namespace:** `StoryMode.GauntletUI.Tutorial`
**Module:** `StoryMode.GauntletUI`
**Type:** `public class EquipmentSetsTutorial : TutorialItemBase`
**File:** `StoryMode.GauntletUI/Tutorial/EquipmentSetsTutorial.cs`

## Overview

EquipmentSetsTutorial lives in the StoryMode.GauntletUI module, source file StoryMode.GauntletUI/Tutorial/EquipmentSetsTutorial.cs. It is a public class, implementing/inheriting TutorialItemBase; the inheritance chain is EquipmentSetsTutorial → TutorialItemBase. It exposes 5 public/protected members: 4 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EquipmentSetsTutorial is a top-level type in StoryMode.GauntletUI, namespace differing from (StoryMode.GauntletUI.Tutorial) the module directory; inheritance chain EquipmentSetsTutorial → TutorialItemBase. The surface is method-led (methods 4/5, properties 0/5), so it mostly exposes operations. TutorialItemBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from StoryMode.GauntletUI/Tutorial/EquipmentSetsTutorial.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `EquipmentSetsTutorial` | `public EquipmentSetsTutorial()` | constructor |
| `IsConditionsMetForCompletion` | `public override bool IsConditionsMetForCompletion()` | method |
| `OnInventoryEquipmentTypeChange` | `public override void OnInventoryEquipmentTypeChange(InventoryEquipmentTypeChangedEvent obj)` | method |
| `GetTutorialsRelevantContext` | `public override TutorialContexts GetTutorialsRelevantContext()` | method |
| `IsConditionsMetForActivation` | `public override bool IsConditionsMetForActivation()` | method |

## See Also

- [↑ storymode-gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ArmyCohesionStep1Tutorial](../ArmyCohesionStep1Tutorial)
- [same namespace ArmyCohesionStep2Tutorial](../ArmyCohesionStep2Tutorial)
- [same namespace AssignRolesTutorial](../AssignRolesTutorial)
- [same namespace BombardmentStep1Tutorial](../BombardmentStep1Tutorial)
