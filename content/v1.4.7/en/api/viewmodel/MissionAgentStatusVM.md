---
title: "MissionAgentStatusVM"
description: "MissionAgentStatusVM — class in TaleWorlds.MountAndBlade.ViewModelCollection. 17 public members (0 static)."
---

<!-- v147-skeleton -->
# MissionAgentStatusVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection`  
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`  
**Type:** `public class MissionAgentStatusVM : ViewModel`  
**Base:** `ViewModel`  
**Source:** `TaleWorlds.MountAndBlade.ViewModelCollection/MissionAgentStatusVM.cs`

## Overview

`MissionAgentStatusVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ViewModel, so the members it does not redeclare are inherited from there. 2 of its own members are properties, which is where most reads and writes land.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `MissionAgentStatusVM`.
- **Instance members** (16): `IsInDeployement`, `InitializeMainAgentPropterties`, `RefreshValues`, `OnFinalize`, `Tick`, `OnEquipmentInteractionViewToggled`, ….
- **Extension points** (2): `RefreshValues`, `OnFinalize`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnFinalize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `RefreshValues` | method (override) | Overrides the base member. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `InitializeMainAgentPropterties` | method | Instance entry point. Takes no arguments. |
| `IsCombatUIActive` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsInDeployement` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `OnAgentDeleted` | method | Instance entry point. Takes 1 argument: `Agent agent`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnAgentInteraction` | method | Instance entry point. Takes 3 arguments: `Agent userAgent`, `Agent agent`, `sbyte agentBoneIndex`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnAgentRemoved` | method | Instance entry point. Takes 1 argument: `Agent agent`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnEquipmentInteractionViewToggled` | method | Instance entry point. Takes 1 argument: `bool isActive`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnFocusGained` | method | Instance entry point. Takes 3 arguments: `Agent mainAgent`, `IFocusable focusableObject`, `bool isInteractable`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnFocusLost` | method | Instance entry point. Takes 2 arguments: `Agent agent`, `IFocusable focusableObject`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMainAgentHit` | method | Instance entry point. Takes 2 arguments: `int damage`, `float distance`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMainAgentWeaponChange` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnSecondaryFocusGained` | method | Instance entry point. Takes 3 arguments: `Agent agent`, `IFocusable focusableObject`, `bool isInteractable`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnSecondaryFocusLost` | method | Instance entry point. Takes 2 arguments: `Agent agent`, `IFocusable focusableObject`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `Tick` | method | Instance entry point. Takes 1 argument: `float dt`. Called from the owner’s update loop — do not assume a frame boundary. |
| `MissionAgentStatusVM` | ctor | Instance entry point. Takes 3 arguments: `Mission mission`, `Camera missionCamera`, `Func<float> getCameraToggleProgress`. Returns ``. |

- Constructed as `public MissionAgentStatusVM(Mission mission, Camera missionCamera, Func<float> getCameraToggleProgress)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new MissionAgentStatusVM(mission, missionCamera, getCameraToggleProgress);
viewModel.IsInDeployement = true;
viewModel.IsCombatUIActive = true;

// Command the widget invokes on confirm:
viewModel.InitializeMainAgentPropterties();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 2 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.ViewModelCollection/MissionAgentStatusVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [GameNetwork](../../mission-ext/GameNetwork/) — `TaleWorlds.MountAndBlade`.
- [AgentInteractionInterfaceVM](../AgentInteractionInterfaceVM/) — `TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Interaction`.
- [ItemImageIdentifierVM](../ItemImageIdentifierVM/) — `TaleWorlds.Core.ViewModelCollection.ImageIdentifiers`.
- [MissionAgentDamageFeedVM](../MissionAgentDamageFeedVM/) — `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.DamageFeed`.

Section: [api/viewmodel/](../) — the other types in this bucket.
