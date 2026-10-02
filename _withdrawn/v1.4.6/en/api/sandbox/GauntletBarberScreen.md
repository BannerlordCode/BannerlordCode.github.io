---
title: "GauntletBarberScreen"
description: "GauntletBarberScreen: a public class in SandBox.GauntletUI, inheriting ScreenBase, IGameStateListener; 8 exposed members (6 methods, 1 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.GauntletUI/GauntletBarberScreen.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GauntletBarberScreen

**Namespace:** `SandBox.GauntletUI`
**Module:** `SandBox.GauntletUI`
**Type:** `public class GauntletBarberScreen : ScreenBase, IGameStateListener, IFaceGeneratorScreen`
**File:** `SandBox.GauntletUI/GauntletBarberScreen.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

GauntletBarberScreen lives in the SandBox.GauntletUI module, source file SandBox.GauntletUI/GauntletBarberScreen.cs. It is a public class, implementing/inheriting ScreenBase, IGameStateListener, IFaceGeneratorScreen; the inheritance chain is GauntletBarberScreen → ScreenBase. It exposes 8 public/protected members: 6 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GauntletBarberScreen lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.GauntletUI`, inheritance chain GauntletBarberScreen → ScreenBase. The surface is method-led (methods 6/8, properties 1/8), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.GauntletUI/GauntletBarberScreen.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Handler` | `public IFaceGeneratorHandler Handler` | property |
| `GauntletBarberScreen` | `public GauntletBarberScreen(BarberState state)` | constructor |
| `OnFrameTick` | `protected override void OnFrameTick(float dt)` | method |
| `OnExit` | `public void OnExit()` | method |
| `OnInitialize` | `protected override void OnInitialize()` | method |
| `OnFinalize` | `protected override void OnFinalize()` | method |
| `OnActivate` | `protected override void OnActivate()` | method |
| `OnDeactivate` | `protected override void OnDeactivate()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface IGameStateListener](../../core-extra/IGameStateListener/)
- [base / interface IFaceGeneratorScreen](../../mission-ext/IFaceGeneratorScreen/)
- [same namespace GauntletCharacterDeveloperScreen](../GauntletCharacterDeveloperScreen/)
- [same namespace GauntletClanScreen](../GauntletClanScreen/)
- [same namespace GauntletCraftingScreen](../GauntletCraftingScreen/)
- [same namespace GauntletEducationScreen](../GauntletEducationScreen/)
