---
title: "GauntletCharacterDeveloperScreen"
description: "GauntletCharacterDeveloperScreen: a public class in SandBox.GauntletUI, inheriting ScreenBase, IGameStateListener; 3 exposed members (2 methods, 0 properties, 0 fields). Source: SandBox.GauntletUI/GauntletCharacterDeveloperScreen.cs."
---
# GauntletCharacterDeveloperScreen

**Namespace:** `SandBox.GauntletUI`
**Module:** `SandBox.GauntletUI`
**Type:** `public class GauntletCharacterDeveloperScreen : ScreenBase, IGameStateListener, IChangeableScreen, ICharacterDeveloperStateHandler`
**File:** `SandBox.GauntletUI/GauntletCharacterDeveloperScreen.cs`

## Overview

GauntletCharacterDeveloperScreen lives in the SandBox.GauntletUI module, source file SandBox.GauntletUI/GauntletCharacterDeveloperScreen.cs. It is a public class, implementing/inheriting ScreenBase, IGameStateListener, IChangeableScreen, ICharacterDeveloperStateHandler; the inheritance chain is GauntletCharacterDeveloperScreen → ScreenBase. It exposes 3 public/protected members: 2 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GauntletCharacterDeveloperScreen is a top-level type in SandBox.GauntletUI, namespace matching the module directory; inheritance chain GauntletCharacterDeveloperScreen → ScreenBase. The surface is method-led (methods 2/3, properties 0/3), so it mostly exposes operations. ScreenBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.GauntletUI/GauntletCharacterDeveloperScreen.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GauntletCharacterDeveloperScreen` | `public GauntletCharacterDeveloperScreen(CharacterDeveloperState clanState)` | constructor |
| `OnInitialize` | `protected override void OnInitialize()` | method |
| `OnFrameTick` | `protected override void OnFrameTick(float dt)` | method |

## See Also

- [↑ sandbox-gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace GauntletBarberScreen](../GauntletBarberScreen)
- [same namespace GauntletClanScreen](../GauntletClanScreen)
- [same namespace GauntletCraftingScreen](../GauntletCraftingScreen)
- [same namespace GauntletEducationScreen](../GauntletEducationScreen)
