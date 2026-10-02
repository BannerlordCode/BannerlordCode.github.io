---
title: "GauntletEducationScreen"
description: "GauntletEducationScreen: a public class in SandBox.GauntletUI, inheriting ScreenBase, IGameStateListener; 3 exposed members (1 methods, 1 properties, 0 fields). Source: SandBox.GauntletUI/GauntletEducationScreen.cs."
---
# GauntletEducationScreen

**Namespace:** `SandBox.GauntletUI`
**Module:** `SandBox.GauntletUI`
**Type:** `public class GauntletEducationScreen : ScreenBase, IGameStateListener`
**File:** `SandBox.GauntletUI/GauntletEducationScreen.cs`

## Overview

GauntletEducationScreen lives in the SandBox.GauntletUI module, source file SandBox.GauntletUI/GauntletEducationScreen.cs. It is a public class, implementing/inheriting ScreenBase, IGameStateListener; the inheritance chain is GauntletEducationScreen → ScreenBase. It exposes 3 public/protected members: 1 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GauntletEducationScreen is a top-level type in SandBox.GauntletUI, namespace matching the module directory; inheritance chain GauntletEducationScreen → ScreenBase. The surface is method-led (methods 1/3, properties 1/3), so it mostly exposes operations. ScreenBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.GauntletUI/GauntletEducationScreen.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CharacterLayer` | `public SceneLayer CharacterLayer` | property |
| `GauntletEducationScreen` | `public GauntletEducationScreen(EducationState educationState)` | constructor |
| `OnFrameTick` | `protected override void OnFrameTick(float dt)` | method |

## See Also

- [↑ sandbox-gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace GauntletBarberScreen](../GauntletBarberScreen)
- [same namespace GauntletCharacterDeveloperScreen](../GauntletCharacterDeveloperScreen)
- [same namespace GauntletClanScreen](../GauntletClanScreen)
- [same namespace GauntletCraftingScreen](../GauntletCraftingScreen)
