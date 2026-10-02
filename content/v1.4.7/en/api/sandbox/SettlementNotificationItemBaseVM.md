---
title: "SettlementNotificationItemBaseVM"
description: "SettlementNotificationItemBaseVM — class in SandBox.ViewModelCollection.Nameplate.NameplateNotifications. 7 public members (0 static)."
---

<!-- v147-skeleton -->
# SettlementNotificationItemBaseVM

**Namespace:** `SandBox.ViewModelCollection.Nameplate.NameplateNotifications`  
**Module:** `SandBox.ViewModelCollection`  
**Type:** `public class SettlementNotificationItemBaseVM : ViewModel`  
**Base:** `ViewModel`  
**Source:** `SandBox.ViewModelCollection/Nameplate/NameplateNotifications/SettlementNotificationItemBaseVM.cs`

## Overview

`SettlementNotificationItemBaseVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ViewModel, so the members it does not redeclare are inherited from there. 5 of its own members are properties, which is where most reads and writes land.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `SettlementNotificationItemBaseVM`.
- **Instance members** (6): `CreatedTick`, `ExecuteRemove`, `CharacterName`, `RelationType`, `Text`, `CharacterVisual`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CharacterName` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `CharacterVisual` | property | Instance entry point `CharacterImageIdentifierVM` property. Read it for current state; a declared setter writes that state in place. |
| `CreatedTick` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `ExecuteRemove` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `RelationType` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `Text` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `SettlementNotificationItemBaseVM` | ctor | Instance entry point. Takes 2 arguments: `Action<SettlementNotificationItemBaseVM> onRemove`, `int createdTick`. Returns ``. |

- Constructed as `public SettlementNotificationItemBaseVM(Action<SettlementNotificationItemBaseVM> onRemove, int createdTick)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new SettlementNotificationItemBaseVM(onRemove, createdTick);
// viewModel.CreatedTick = ...;   // int
// viewModel.CharacterName = ...;   // string
// viewModel.RelationType = ...;   // int

// Command the widget invokes on confirm:
viewModel.ExecuteRemove();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- The declaration in `SandBox.ViewModelCollection/Nameplate/NameplateNotifications/SettlementNotificationItemBaseVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [CharacterImageIdentifierVM](../../viewmodel/CharacterImageIdentifierVM/) — `TaleWorlds.Core.ViewModelCollection.ImageIdentifiers`.

Section: [api/sandbox/](../) — the other types in this bucket.
