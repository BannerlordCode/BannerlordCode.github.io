---
title: "GauntletInventoryScreen"
description: "GauntletInventoryScreen: a public class in SandBox.GauntletUI, inheriting ScreenBase, IInventoryStateHandler; 19 exposed members (17 methods, 1 properties, 0 fields). Source: SandBox.GauntletUI/GauntletInventoryScreen.cs."
---
# GauntletInventoryScreen

**Namespace:** `SandBox.GauntletUI`
**Module:** `SandBox.GauntletUI`
**Type:** `public class GauntletInventoryScreen : ScreenBase, IInventoryStateHandler, IGameStateListener, IChangeableScreen`
**File:** `SandBox.GauntletUI/GauntletInventoryScreen.cs`

## Overview

GauntletInventoryScreen lives in the SandBox.GauntletUI module, source file SandBox.GauntletUI/GauntletInventoryScreen.cs. It is a public class, implementing/inheriting ScreenBase, IInventoryStateHandler, IGameStateListener, IChangeableScreen; the inheritance chain is GauntletInventoryScreen → ScreenBase. It exposes 19 public/protected members: 17 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GauntletInventoryScreen is a top-level type in SandBox.GauntletUI, namespace matching the module directory; inheritance chain GauntletInventoryScreen → ScreenBase. The surface is method-led (methods 17/19, properties 1/19), so it mostly exposes operations. ScreenBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.GauntletUI/GauntletInventoryScreen.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `InventoryState` | `public InventoryState InventoryState` | property |
| `OnFrameTick` | `protected override void OnFrameTick(float dt)` | method |
| `GauntletInventoryScreen` | `public GauntletInventoryScreen(InventoryState inventoryState)` | constructor |
| `OnInitialize` | `protected override void OnInitialize()` | method |
| `OnReady` | `protected override void OnReady()` | method |
| `OnDeactivate` | `protected override void OnDeactivate()` | method |
| `OnActivate` | `protected override void OnActivate()` | method |
| `OnFinalize` | `protected override void OnFinalize()` | method |
| `ExecuteLootingScript` | `public void ExecuteLootingScript()` | method |
| `ExecuteSellAllLoot` | `public void ExecuteSellAllLoot()` | method |
| `ExecuteCancel` | `public void ExecuteCancel()` | method |
| `ExecuteConfirm` | `public void ExecuteConfirm()` | method |
| `ExecuteSwitchToPreviousTab` | `public void ExecuteSwitchToPreviousTab()` | method |
| `ExecuteSwitchToNextTab` | `public void ExecuteSwitchToNextTab()` | method |
| `ExecuteBuySingle` | `public void ExecuteBuySingle()` | method |
| `ExecuteSellSingle` | `public void ExecuteSellSingle()` | method |
| `ExecuteTakeAll` | `public void ExecuteTakeAll()` | method |
| `ExecuteGiveAll` | `public void ExecuteGiveAll()` | method |
| `ExecuteBuyConsumableItem` | `public void ExecuteBuyConsumableItem()` | method |

## See Also

- [↑ sandbox-gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace GauntletBarberScreen](../GauntletBarberScreen)
- [same namespace GauntletCharacterDeveloperScreen](../GauntletCharacterDeveloperScreen)
- [same namespace GauntletClanScreen](../GauntletClanScreen)
- [same namespace GauntletCraftingScreen](../GauntletCraftingScreen)
