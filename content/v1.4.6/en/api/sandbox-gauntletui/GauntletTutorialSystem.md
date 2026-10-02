---
title: "GauntletTutorialSystem"
description: "GauntletTutorialSystem: a public class in SandBox.GauntletUI, inheriting GlobalLayer; 7 exposed members (3 methods, 3 properties, 0 fields). Source: SandBox.GauntletUI/Tutorial/GauntletTutorialSystem.cs."
---
# GauntletTutorialSystem

**Namespace:** `SandBox.GauntletUI.Tutorial`
**Module:** `SandBox.GauntletUI`
**Type:** `public class GauntletTutorialSystem : GlobalLayer`
**File:** `SandBox.GauntletUI/Tutorial/GauntletTutorialSystem.cs`

## Overview

GauntletTutorialSystem lives in the SandBox.GauntletUI module, source file SandBox.GauntletUI/Tutorial/GauntletTutorialSystem.cs. It is a public class, implementing/inheriting GlobalLayer; the inheritance chain is GauntletTutorialSystem → GlobalLayer. It exposes 7 public/protected members: 3 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GauntletTutorialSystem is a top-level type in SandBox.GauntletUI, namespace differing from (SandBox.GauntletUI.Tutorial) the module directory; inheritance chain GauntletTutorialSystem → GlobalLayer. The surface is method-led (methods 3/7, properties 3/7), so it mostly exposes operations. GlobalLayer on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.GauntletUI/Tutorial/GauntletTutorialSystem.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CurrentEncyclopediaPageContext` | `public EncyclopediaPages CurrentEncyclopediaPageContext` | property |
| `IsCharacterPortraitPopupOpen` | `public bool IsCharacterPortraitPopupOpen` | property |
| `CurrentContext` | `public TutorialContexts CurrentContext` | property |
| `GauntletTutorialSystem` | `public GauntletTutorialSystem()` | constructor |
| `OnTick` | `protected override void OnTick(float dt)` | method |
| `OnInitialize` | `public static void OnInitialize()` | method |
| `OnUnload` | `public static void OnUnload()` | method |

## See Also

- [↑ sandbox-gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace TutorialAttribute](../TutorialAttribute)
- [same namespace TutorialHelper](../TutorialHelper)
- [same namespace TutorialItemBase](../TutorialItemBase)
