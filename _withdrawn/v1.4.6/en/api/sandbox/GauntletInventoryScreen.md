---
title: "GauntletInventoryScreen"
description: "GauntletInventoryScreen: a public class in SandBox.GauntletUI, inheriting ScreenBase, IInventoryStateHandler; 19 exposed members (17 methods, 1 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.GauntletUI/GauntletInventoryScreen.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GauntletInventoryScreen

**Namespace:** `SandBox.GauntletUI`
**Module:** `SandBox.GauntletUI`
**Type:** `public class GauntletInventoryScreen : ScreenBase, IInventoryStateHandler, IGameStateListener, IChangeableScreen`
**File:** `SandBox.GauntletUI/GauntletInventoryScreen.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

GauntletInventoryScreen lives in the SandBox.GauntletUI module, source file SandBox.GauntletUI/GauntletInventoryScreen.cs. It is a public class, implementing/inheriting ScreenBase, IInventoryStateHandler, IGameStateListener, IChangeableScreen; the inheritance chain is GauntletInventoryScreen → ScreenBase. It exposes 19 public/protected members: 17 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GauntletInventoryScreen lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.GauntletUI`, inheritance chain GauntletInventoryScreen → ScreenBase. The surface is method-led (methods 17/19, properties 1/19), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.GauntletUI/GauntletInventoryScreen.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface IInventoryStateHandler](../../campaign/IInventoryStateHandler/)
- [base / interface IGameStateListener](../../core-extra/IGameStateListener/)
- [same namespace GauntletBarberScreen](../GauntletBarberScreen/)
- [same namespace GauntletCharacterDeveloperScreen](../GauntletCharacterDeveloperScreen/)
- [same namespace GauntletClanScreen](../GauntletClanScreen/)
- [same namespace GauntletCraftingScreen](../GauntletCraftingScreen/)
