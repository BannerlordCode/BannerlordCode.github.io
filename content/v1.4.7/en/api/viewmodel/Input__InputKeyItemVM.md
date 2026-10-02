---
title: "InputKeyItemVM"
description: "InputKeyItemVM — class in TaleWorlds.CampaignSystem.ViewModelCollection.Input. 10 public members (5 static)."
---

<!-- v147-skeleton -->
# InputKeyItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Input`  
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`  
**Type:** `public class InputKeyItemVM : ViewModel`  
**Base:** `ViewModel`  
**Source:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Input/InputKeyItemVM.cs`

## Overview

`InputKeyItemVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ViewModel, so the members it does not redeclare are inherited from there. 2 of its own members are properties, which is where most reads and writes land.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Static entry points** (5): `CreateFromGameKey`, `CreateFromHotKey`, `CreateFromHotKeyWithForcedName`, `CreateFromGameKeyWithForcedName`, `CreateFromForcedID`.
- **Instance members** (5): `GameKey`, `HotKey`, `OnFinalize`, `RefreshValues`, `SetForcedVisibility`.
- **Extension points** (2): `OnFinalize`, `RefreshValues`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CreateFromForcedID` | method (static) | Static entry point. Takes 3 arguments: `string forcedID`, `TextObject forcedName`, `bool isConsoleOnly`. Returns `InputKeyItemVM`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `CreateFromGameKey` | method (static) | Static entry point. Takes 2 arguments: `GameKey gameKey`, `bool isConsoleOnly`. Returns `InputKeyItemVM`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `CreateFromGameKeyWithForcedName` | method (static) | Static entry point. Takes 3 arguments: `GameKey gameKey`, `TextObject forcedName`, `bool isConsoleOnly`. Returns `InputKeyItemVM`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `CreateFromHotKey` | method (static) | Static entry point. Takes 2 arguments: `HotKey hotKey`, `bool isConsoleOnly`. Returns `InputKeyItemVM`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `CreateFromHotKeyWithForcedName` | method (static) | Static entry point. Takes 3 arguments: `HotKey hotKey`, `TextObject forcedName`, `bool isConsoleOnly`. Returns `InputKeyItemVM`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `OnFinalize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `RefreshValues` | method (override) | Overrides the base member. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `GameKey` | property | Instance entry point `GameKey` property. Read it for current state; a declared setter writes that state in place. |
| `HotKey` | property | Instance entry point `HotKey` property. Read it for current state; a declared setter writes that state in place. |
| `SetForcedVisibility` | method | Instance entry point. Takes 1 argument: `bool? isVisible`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
// The engine or the owning screen constructs the view model; bind it from the layer.
// viewModel.GameKey = ...;   // GameKey
// viewModel.HotKey = ...;   // HotKey

// Command the widget invokes on confirm:
viewModel.OnFinalize();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 2 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Input/InputKeyItemVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [InputKeyItemVM](../../sandbox/InputKeyItemVM/) — `SandBox.ViewModelCollection.Input`.
- [GameKey](../../system/GameKey/) — `TaleWorlds.InputSystem`.
- [HotKey](../../system/HotKey/) — `TaleWorlds.InputSystem`.
- [GameTextManager](../../core-extra/GameTextManager/) — `TaleWorlds.Core`.

Section: [api/viewmodel/](../) — the other types in this bucket.
