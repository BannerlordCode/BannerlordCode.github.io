---
title: "CheerBarkNodeItemVM"
description: "CheerBarkNodeItemVM — class in TaleWorlds.MountAndBlade.ViewModelCollection.HUD. 8 public members (0 static)."
---

<!-- v147-skeleton -->
# CheerBarkNodeItemVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.HUD`  
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`  
**Type:** `public class CheerBarkNodeItemVM : ViewModel`  
**Base:** `ViewModel`  
**Source:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/CheerBarkNodeItemVM.cs`

## Overview

`CheerBarkNodeItemVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ViewModel, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (2): `CheerBarkNodeItemVM`, `CheerBarkNodeItemVM`.
- **Instance members** (5): `ClearSelectionRecursive`, `ExecuteFocused`, `RefreshValues`, `AddSubNode`, `OnFinalize`.
- **Extension points** (2): `RefreshValues`, `OnFinalize`.
- **Data and constants** (1): `TauntUsageDisabledReason`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnFinalize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `RefreshValues` | method (override) | Overrides the base member. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `AddSubNode` | method | Instance entry point. Takes 1 argument: `CheerBarkNodeItemVM subNode`. Adds to the collection or relation this type owns. |
| `ClearSelectionRecursive` | method | Instance entry point. Takes no arguments. Removes from or clears the collection this type owns. |
| `ExecuteFocused` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `CheerBarkNodeItemVM` | ctor | Instance entry point. Takes 6 arguments: `string tauntVisualName`, `TextObject nodeName`, `string nodeId`, `HotKey key`, …. Returns ``. |
| `CheerBarkNodeItemVM` | ctor | Instance entry point. Takes 5 arguments: `TextObject nodeName`, `string nodeId`, `HotKey key`, `bool consoleOnlyShortcut`, …. Returns ``. |
| `TauntUsageDisabledReason` | field | Instance entry point `TauntUsageManager.TauntUsage.TauntUsageFlag` field — direct storage with no validation or notification. |

- Constructed as `public CheerBarkNodeItemVM(string tauntVisualName, TextObject nodeName, string nodeId, HotKey key, bool consoleOnlyShortcut = false, TauntUsageManager.TauntUsage.TauntUsageFlag disabledReason = TauntUsageManager.TauntUsage.TauntUsageFlag.None)`.
- Constructed as `public CheerBarkNodeItemVM(TextObject nodeName, string nodeId, HotKey key, bool consoleOnlyShortcut = false, TauntUsageManager.TauntUsage.TauntUsageFlag disabledReason = TauntUsageManager.TauntUsage.TauntUsageFlag.None)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new CheerBarkNodeItemVM(tauntVisualName, nodeName, nodeId, key, consoleOnlyShortcut, disabledReason);

// Command the widget invokes on confirm:
viewModel.ClearSelectionRecursive();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 2 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/CheerBarkNodeItemVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [HotKey](../../system/HotKey/) — `TaleWorlds.InputSystem`.
- [TauntUsageManager](../../core-extra/TauntUsageManager/) — `TaleWorlds.Core`.
- [InputKeyItemVM](../../sandbox/InputKeyItemVM/) — `SandBox.ViewModelCollection.Input`.

Section: [api/viewmodel/](../) — the other types in this bucket.
