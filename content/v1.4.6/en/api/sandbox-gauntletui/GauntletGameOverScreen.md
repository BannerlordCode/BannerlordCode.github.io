---
title: "GauntletGameOverScreen"
description: "GauntletGameOverScreen: a public class in SandBox.GauntletUI, inheriting ScreenBase, IGameOverStateHandler; 2 exposed members (1 methods, 0 properties, 0 fields). Source: SandBox.GauntletUI/GauntletGameOverScreen.cs."
---
# GauntletGameOverScreen

**Namespace:** `SandBox.GauntletUI`
**Module:** `SandBox.GauntletUI`
**Type:** `public class GauntletGameOverScreen : ScreenBase, IGameOverStateHandler, IGameStateListener`
**File:** `SandBox.GauntletUI/GauntletGameOverScreen.cs`

## Overview

GauntletGameOverScreen lives in the SandBox.GauntletUI module, source file SandBox.GauntletUI/GauntletGameOverScreen.cs. It is a public class, implementing/inheriting ScreenBase, IGameOverStateHandler, IGameStateListener; the inheritance chain is GauntletGameOverScreen → ScreenBase. It exposes 2 public/protected members: 1 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GauntletGameOverScreen is a top-level type in SandBox.GauntletUI, namespace matching the module directory; inheritance chain GauntletGameOverScreen → ScreenBase. The surface is method-led (methods 1/2, properties 0/2), so it mostly exposes operations. ScreenBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.GauntletUI/GauntletGameOverScreen.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GauntletGameOverScreen` | `public GauntletGameOverScreen(GameOverState gameOverState)` | constructor |
| `OnFrameTick` | `protected override void OnFrameTick(float dt)` | method |

## See Also

- [↑ sandbox-gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace GauntletBarberScreen](../GauntletBarberScreen)
- [same namespace GauntletCharacterDeveloperScreen](../GauntletCharacterDeveloperScreen)
- [same namespace GauntletClanScreen](../GauntletClanScreen)
- [same namespace GauntletCraftingScreen](../GauntletCraftingScreen)
