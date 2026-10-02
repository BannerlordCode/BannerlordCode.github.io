---
title: "StringItemWithActionVM"
description: "StringItemWithActionVM — class in TaleWorlds.Core.ViewModelCollection.Generic. 4 public members (0 static)."
---

<!-- v147-skeleton -->
# StringItemWithActionVM

**Namespace:** `TaleWorlds.Core.ViewModelCollection.Generic`  
**Module:** `TaleWorlds.Core.ViewModelCollection`  
**Type:** `public class StringItemWithActionVM : ViewModel`  
**Base:** `ViewModel`  
**Source:** `TaleWorlds.Core.ViewModelCollection/Generic/StringItemWithActionVM.cs`

## Overview

`StringItemWithActionVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ViewModel, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `StringItemWithActionVM`.
- **Instance members** (1): `ExecuteAction`.
- **Data and constants** (2): `Identifier`, `_onExecute`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `ExecuteAction` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `StringItemWithActionVM` | ctor | Instance entry point. Takes 3 arguments: `Action<object> onExecute`, `string item`, `object identifier`. Returns ``. |
| `Identifier` | field | Instance entry point `object` field — direct storage with no validation or notification. |
| `_onExecute` | field | Protected — for subclasses only `Action<object>` field — direct storage with no validation or notification. |

- Constructed as `public StringItemWithActionVM(Action<object> onExecute, string item, object identifier)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new StringItemWithActionVM(onExecute, item, identifier);

// Command the widget invokes on confirm:
viewModel.ExecuteAction();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- The declaration in `TaleWorlds.Core.ViewModelCollection/Generic/StringItemWithActionVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/viewmodel/](../) — the other types in this bucket.
