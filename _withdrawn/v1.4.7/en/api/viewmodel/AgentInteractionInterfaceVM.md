---
title: "AgentInteractionInterfaceVM"
description: "AgentInteractionInterfaceVM — class in TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Interaction. 11 public members (0 static)."
---

<!-- v147-skeleton -->
# AgentInteractionInterfaceVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Interaction`  
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`  
**Type:** `public class AgentInteractionInterfaceVM : ViewModel`  
**Base:** `ViewModel`  
**Source:** `TaleWorlds.MountAndBlade.ViewModelCollection/Missions/Interaction/AgentInteractionInterfaceVM.cs`

## Overview

`AgentInteractionInterfaceVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ViewModel, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `AgentInteractionInterfaceVM`.
- **Instance members** (10): `RefreshValues`, `OnFinalize`, `OnFocusedHealthChanged`, `OnActiveMissionHintChanged`, `AddSecondaryMessage`, `RemoveSecondaryMessage`, ….
- **Extension points** (2): `RefreshValues`, `OnFinalize`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnFinalize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `RefreshValues` | method (override) | Overrides the base member. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `AddSecondaryMessage` | method | Instance entry point. Takes 1 argument: `MissionInteractionItemBaseVM message`. Adds to the collection or relation this type owns. |
| `ClearForcedInteractionTexts` | method | Instance entry point. Takes no arguments. Removes from or clears the collection this type owns. |
| `HasSecondaryInteractionMessage` | method | Instance entry point. Takes 1 argument: `MissionInteractionItemBaseVM message`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `OnActiveMissionHintChanged` | method | Instance entry point. Takes 2 arguments: `MissionHint previousHint`, `MissionHint newHint`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnFocusedHealthChanged` | method | Instance entry point. Takes 3 arguments: `IFocusable focusable`, `float healthPercentage`, `bool hideHealthbarWhenFull`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `RemoveSecondaryMessage` | method | Instance entry point. Takes 1 argument: `MissionInteractionItemBaseVM message`. Returns `bool`. Removes from or clears the collection this type owns. |
| `ResetFocus` | method | Instance entry point. Takes no arguments. Removes from or clears the collection this type owns. |
| `SetForcedInteractionTexts` | method | Instance entry point. Takes 4 arguments: `TextObject text1`, `bool isDisabled1`, `TextObject text2`, `bool isDisabled2`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `AgentInteractionInterfaceVM` | ctor | Instance entry point. Takes 1 argument: `Mission mission`. Returns ``. |

- Constructed as `public AgentInteractionInterfaceVM(Mission mission)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new AgentInteractionInterfaceVM(mission);

// Command the widget invokes on confirm:
viewModel.RefreshValues();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 2 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.ViewModelCollection/Missions/Interaction/AgentInteractionInterfaceVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [MissionPrimaryInteractionItemVM](../MissionPrimaryInteractionItemVM/) — `TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Interaction.InteractionItems`.
- [MissionInteractionItemBaseVM](../MissionInteractionItemBaseVM/) — `TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Interaction.InteractionItems`.
- [MissionHint](../../mission-ext/MissionHint/) — `TaleWorlds.MountAndBlade.Missions.Hints`.
- [MissionHintInteractionItemVM](../MissionHintInteractionItemVM/) — `TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Interaction.InteractionItems`.

Section: [api/viewmodel/](../) — the other types in this bucket.
