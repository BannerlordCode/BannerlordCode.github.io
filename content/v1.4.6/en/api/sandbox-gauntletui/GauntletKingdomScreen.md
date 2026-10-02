---
title: "GauntletKingdomScreen"
description: "GauntletKingdomScreen: a public class in SandBox.GauntletUI, inheriting ScreenBase, IGameStateListener; 10 exposed members (7 methods, 2 properties, 0 fields). Source: SandBox.GauntletUI/GauntletKingdomScreen.cs."
---
# GauntletKingdomScreen

**Namespace:** `SandBox.GauntletUI`
**Module:** `SandBox.GauntletUI`
**Type:** `public class GauntletKingdomScreen : ScreenBase, IGameStateListener`
**File:** `SandBox.GauntletUI/GauntletKingdomScreen.cs`

## Overview

GauntletKingdomScreen lives in the SandBox.GauntletUI module, source file SandBox.GauntletUI/GauntletKingdomScreen.cs. It is a public class, implementing/inheriting ScreenBase, IGameStateListener; the inheritance chain is GauntletKingdomScreen → ScreenBase. It exposes 10 public/protected members: 7 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GauntletKingdomScreen is a top-level type in SandBox.GauntletUI, namespace matching the module directory; inheritance chain GauntletKingdomScreen → ScreenBase. The surface is method-led (methods 7/10, properties 2/10), so it mostly exposes operations. ScreenBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.GauntletUI/GauntletKingdomScreen.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ sandbox-gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace GauntletBarberScreen](../GauntletBarberScreen)
- [same namespace GauntletCharacterDeveloperScreen](../GauntletCharacterDeveloperScreen)
- [same namespace GauntletClanScreen](../GauntletClanScreen)
- [same namespace GauntletCraftingScreen](../GauntletCraftingScreen)
