---
title: "TextQueryPopUpVM"
description: "TextQueryPopUpVM — class in TaleWorlds.MountAndBlade.ViewModelCollection.Inquiries. 6 public members (0 static)."
---

<!-- v147-skeleton -->
# TextQueryPopUpVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Inquiries`  
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`  
**Type:** `public class TextQueryPopUpVM : PopUpBaseVM`  
**Base:** `PopUpBaseVM`  
**Source:** `TaleWorlds.MountAndBlade.ViewModelCollection/Inquiries/TextQueryPopUpVM.cs`

## Overview

`TextQueryPopUpVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends PopUpBaseVM, so the members it does not redeclare are inherited from there. 1 of its own members are properties, which is where most reads and writes land.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `TextQueryPopUpVM`.
- **Instance members** (5): `SetData`, `ExecuteAffirmativeAction`, `ExecuteNegativeAction`, `OnClearData`, `IsInputObfuscated`.
- **Extension points** (3): `ExecuteAffirmativeAction`, `ExecuteNegativeAction`, `OnClearData`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `ExecuteAffirmativeAction` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteNegativeAction` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnClearData` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `IsInputObfuscated` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `SetData` | method | Instance entry point. Takes 1 argument: `TextInquiryData data`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `TextQueryPopUpVM` | ctor | Instance entry point. Takes 1 argument: `Action closeQuery`. Returns ``. |

- Constructed as `public TextQueryPopUpVM(Action closeQuery)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new TextQueryPopUpVM(closeQuery);
viewModel.IsInputObfuscated = true;

// Command the widget invokes on confirm:
viewModel.SetData(data);
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 3 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.ViewModelCollection/Inquiries/TextQueryPopUpVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [PopUpBaseVM](../PopUpBaseVM/) — `TaleWorlds.MountAndBlade.ViewModelCollection.Inquiries`.
- [HintViewModel](../HintViewModel/) — `TaleWorlds.Core.ViewModelCollection.Information`.

Section: [api/viewmodel/](../) — the other types in this bucket.
