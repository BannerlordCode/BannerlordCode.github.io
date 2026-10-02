---
title: "GauntletCraftingScreen"
description: "GauntletCraftingScreen: a public class in SandBox.GauntletUI, inheriting ScreenBase, ICraftingStateHandler; 7 exposed members (6 methods, 0 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.GauntletUI/GauntletCraftingScreen.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GauntletCraftingScreen

**Namespace:** `SandBox.GauntletUI`
**Module:** `SandBox.GauntletUI`
**Type:** `public class GauntletCraftingScreen : ScreenBase, ICraftingStateHandler, IGameStateListener`
**File:** `SandBox.GauntletUI/GauntletCraftingScreen.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

GauntletCraftingScreen lives in the SandBox.GauntletUI module, source file SandBox.GauntletUI/GauntletCraftingScreen.cs. It is a public class, implementing/inheriting ScreenBase, ICraftingStateHandler, IGameStateListener; the inheritance chain is GauntletCraftingScreen → ScreenBase. It exposes 7 public/protected members: 6 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GauntletCraftingScreen lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.GauntletUI`, inheritance chain GauntletCraftingScreen → ScreenBase. The surface is method-led (methods 6/7, properties 0/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.GauntletUI/GauntletCraftingScreen.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GauntletCraftingScreen` | `public GauntletCraftingScreen(CraftingState craftingState)` | constructor |
| `Initialize` | `public void Initialize()` | method |
| `OnInitialize` | `protected override void OnInitialize()` | method |
| `OnFinalize` | `protected override void OnFinalize()` | method |
| `OnFrameTick` | `protected override void OnFrameTick(float dt)` | method |
| `OnCraftingLogicInitialized` | `public void OnCraftingLogicInitialized()` | method |
| `OnCraftingLogicRefreshed` | `public void OnCraftingLogicRefreshed()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ICraftingStateHandler](../../campaign/ICraftingStateHandler/)
- [base / interface IGameStateListener](../../core-extra/IGameStateListener/)
- [same namespace GauntletBarberScreen](../GauntletBarberScreen/)
- [same namespace GauntletCharacterDeveloperScreen](../GauntletCharacterDeveloperScreen/)
- [same namespace GauntletClanScreen](../GauntletClanScreen/)
- [same namespace GauntletEducationScreen](../GauntletEducationScreen/)
