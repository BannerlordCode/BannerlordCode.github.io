---
title: "GauntletCraftingScreen"
description: "GauntletCraftingScreen: a public class in SandBox.GauntletUI, inheriting ScreenBase, ICraftingStateHandler; 7 exposed members (6 methods, 0 properties, 0 fields). Source: SandBox.GauntletUI/GauntletCraftingScreen.cs."
---
# GauntletCraftingScreen

**Namespace:** `SandBox.GauntletUI`
**Module:** `SandBox.GauntletUI`
**Type:** `public class GauntletCraftingScreen : ScreenBase, ICraftingStateHandler, IGameStateListener`
**File:** `SandBox.GauntletUI/GauntletCraftingScreen.cs`

## Overview

GauntletCraftingScreen lives in the SandBox.GauntletUI module, source file SandBox.GauntletUI/GauntletCraftingScreen.cs. It is a public class, implementing/inheriting ScreenBase, ICraftingStateHandler, IGameStateListener; the inheritance chain is GauntletCraftingScreen → ScreenBase. It exposes 7 public/protected members: 6 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GauntletCraftingScreen is a top-level type in SandBox.GauntletUI, namespace matching the module directory; inheritance chain GauntletCraftingScreen → ScreenBase. The surface is method-led (methods 6/7, properties 0/7), so it mostly exposes operations. ScreenBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.GauntletUI/GauntletCraftingScreen.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GauntletCraftingScreen` | `public GauntletCraftingScreen(CraftingState craftingState)` | constructor |
| `Initialize` | `public void Initialize()` | method |
| `OnInitialize` | `protected override void OnInitialize()` | method |
| `OnFinalize` | `protected override void OnFinalize()` | method |
| `OnFrameTick` | `protected override void OnFrameTick(float dt)` | method |
| `OnCraftingLogicInitialized` | `public void OnCraftingLogicInitialized()` | method |
| `OnCraftingLogicRefreshed` | `public void OnCraftingLogicRefreshed()` | method |

## See Also

- [↑ sandbox-gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace GauntletBarberScreen](../GauntletBarberScreen)
- [same namespace GauntletCharacterDeveloperScreen](../GauntletCharacterDeveloperScreen)
- [same namespace GauntletClanScreen](../GauntletClanScreen)
- [same namespace GauntletEducationScreen](../GauntletEducationScreen)
