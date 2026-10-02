---
title: "GauntletSaveLoadScreen"
description: "GauntletSaveLoadScreen: a public class in SandBox.GauntletUI, inheriting ScreenBase; 5 exposed members (4 methods, 0 properties, 0 fields). Source: SandBox.GauntletUI/GauntletSaveLoadScreen.cs."
---
# GauntletSaveLoadScreen

**Namespace:** `SandBox.GauntletUI`
**Module:** `SandBox.GauntletUI`
**Type:** `public class GauntletSaveLoadScreen : ScreenBase`
**File:** `SandBox.GauntletUI/GauntletSaveLoadScreen.cs`

## Overview

GauntletSaveLoadScreen lives in the SandBox.GauntletUI module, source file SandBox.GauntletUI/GauntletSaveLoadScreen.cs. It is a public class, implementing/inheriting ScreenBase; the inheritance chain is GauntletSaveLoadScreen → ScreenBase. It exposes 5 public/protected members: 4 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GauntletSaveLoadScreen is a top-level type in SandBox.GauntletUI, namespace matching the module directory; inheritance chain GauntletSaveLoadScreen → ScreenBase. The surface is method-led (methods 4/5, properties 0/5), so it mostly exposes operations. ScreenBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.GauntletUI/GauntletSaveLoadScreen.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GauntletSaveLoadScreen` | `public GauntletSaveLoadScreen(bool isSaving)` | constructor |
| `OnInitialize` | `protected override void OnInitialize()` | method |
| `OnPostFrameTick` | `protected override void OnPostFrameTick(float dt)` | method |
| `OnFrameTick` | `protected override void OnFrameTick(float dt)` | method |
| `OnFinalize` | `protected override void OnFinalize()` | method |

## See Also

- [↑ sandbox-gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace GauntletBarberScreen](../GauntletBarberScreen)
- [same namespace GauntletCharacterDeveloperScreen](../GauntletCharacterDeveloperScreen)
- [same namespace GauntletClanScreen](../GauntletClanScreen)
- [same namespace GauntletCraftingScreen](../GauntletCraftingScreen)
