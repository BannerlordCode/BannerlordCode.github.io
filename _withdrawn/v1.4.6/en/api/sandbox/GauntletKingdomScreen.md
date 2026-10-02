---
title: "GauntletKingdomScreen"
description: "GauntletKingdomScreen: a public class in SandBox.GauntletUI, inheriting ScreenBase, IGameStateListener; 10 exposed members (7 methods, 2 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.GauntletUI/GauntletKingdomScreen.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GauntletKingdomScreen

**Namespace:** `SandBox.GauntletUI`
**Module:** `SandBox.GauntletUI`
**Type:** `public class GauntletKingdomScreen : ScreenBase, IGameStateListener`
**File:** `SandBox.GauntletUI/GauntletKingdomScreen.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

GauntletKingdomScreen lives in the SandBox.GauntletUI module, source file SandBox.GauntletUI/GauntletKingdomScreen.cs. It is a public class, implementing/inheriting ScreenBase, IGameStateListener; the inheritance chain is GauntletKingdomScreen → ScreenBase. It exposes 10 public/protected members: 7 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GauntletKingdomScreen lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.GauntletUI`, inheritance chain GauntletKingdomScreen → ScreenBase. The surface is method-led (methods 7/10, properties 2/10), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.GauntletUI/GauntletKingdomScreen.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `DataSource` | `public KingdomManagementVM DataSource` | property |
| `IsMakingDecision` | `public bool IsMakingDecision` | property |
| `GauntletKingdomScreen` | `public GauntletKingdomScreen(KingdomState kingdomState)` | constructor |
| `OnInitialize` | `protected override void OnInitialize()` | method |
| `OnFrameTick` | `protected override void OnFrameTick(float dt)` | method |
| `CreateDataSource` | `protected virtual KingdomManagementVM CreateDataSource()` | method |
| `ShowArmyOnMap` | `protected void ShowArmyOnMap(Army army)` | method |
| `OpenArmyManagement` | `protected void OpenArmyManagement()` | method |
| `CloseArmyManagement` | `protected void CloseArmyManagement()` | method |
| `CloseKingdomScreen` | `protected void CloseKingdomScreen()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface IGameStateListener](../../core-extra/IGameStateListener/)
- [same namespace GauntletBarberScreen](../GauntletBarberScreen/)
- [same namespace GauntletCharacterDeveloperScreen](../GauntletCharacterDeveloperScreen/)
- [same namespace GauntletClanScreen](../GauntletClanScreen/)
- [same namespace GauntletCraftingScreen](../GauntletCraftingScreen/)
