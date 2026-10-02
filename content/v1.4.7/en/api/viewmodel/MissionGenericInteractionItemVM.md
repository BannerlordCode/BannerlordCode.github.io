---
title: "MissionGenericInteractionItemVM"
description: "MissionGenericInteractionItemVM — class in TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Interaction.InteractionItems. 5 public members (0 static)."
---

<!-- v147-skeleton -->
# MissionGenericInteractionItemVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Interaction.InteractionItems`  
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`  
**Type:** `public class MissionGenericInteractionItemVM : MissionInteractionItemBaseVM`  
**Base:** `MissionInteractionItemBaseVM`  
**Source:** `TaleWorlds.MountAndBlade.ViewModelCollection/Missions/Interaction/InteractionItems/MissionGenericInteractionItemVM.cs`

## Overview

`MissionGenericInteractionItemVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends MissionInteractionItemBaseVM, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Instance members** (5): `RefreshValues`, `SetData`, `ResetData`, `OnSetData`, `OnResetData`.
- **Extension points** (3): `RefreshValues`, `OnSetData`, `OnResetData`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `RefreshValues` | method (override) | Overrides the base member. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `OnResetData` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnSetData` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 2 arguments: `TextObject message`, `bool isDisabled`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ResetData` | method | Instance entry point. Takes no arguments. Removes from or clears the collection this type owns. |
| `SetData` | method | Instance entry point. Takes 2 arguments: `TextObject message`, `bool isDisabled`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
// The engine or the owning screen constructs the view model; bind it from the layer.

// Command the widget invokes on confirm:
viewModel.RefreshValues();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 3 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.ViewModelCollection/Missions/Interaction/InteractionItems/MissionGenericInteractionItemVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [MissionInteractionItemBaseVM](../MissionInteractionItemBaseVM/) — `TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Interaction.InteractionItems`.

Section: [api/viewmodel/](../) — the other types in this bucket.
