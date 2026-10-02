---
title: "MissionAgentAlarmTargetVM"
description: "MissionAgentAlarmTargetVM — class in SandBox.ViewModelCollection.Missions. 7 public members (0 static)."
---

<!-- v147-skeleton -->
# MissionAgentAlarmTargetVM

**Namespace:** `SandBox.ViewModelCollection.Missions`  
**Module:** `SandBox.ViewModelCollection`  
**Type:** `public class MissionAgentAlarmTargetVM : ViewModel`  
**Base:** `ViewModel`  
**Source:** `SandBox.ViewModelCollection/Missions/MissionAgentAlarmTargetVM.cs`

## Overview

`MissionAgentAlarmTargetVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ViewModel, so the members it does not redeclare are inherited from there. 2 of its own members are properties, which is where most reads and writes land.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `MissionAgentAlarmTargetVM`.
- **Instance members** (5): `HasCautiousness`, `AlarmedBehaviorGroup`, `UpdateValues`, `UpdateScreenPosition`, `ExecuteRemove`.
- **Data and constants** (1): `TargetAgent`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AlarmedBehaviorGroup` | property | Instance entry point `AlarmedBehaviorGroup` property. Read it for current state; a declared setter writes that state in place. |
| `ExecuteRemove` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `HasCautiousness` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `UpdateScreenPosition` | method | Instance entry point. Takes 1 argument: `Camera missionCamera`. Called from the owner’s update loop — do not assume a frame boundary. |
| `UpdateValues` | method | Instance entry point. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `MissionAgentAlarmTargetVM` | ctor | Instance entry point. Takes 2 arguments: `Agent agent`, `Action<MissionAgentAlarmTargetVM> onRemove`. Returns ``. |
| `TargetAgent` | field | Instance entry point `Agent` field — direct storage with no validation or notification. |

- Constructed as `public MissionAgentAlarmTargetVM(Agent agent, Action<MissionAgentAlarmTargetVM> onRemove)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new MissionAgentAlarmTargetVM(agent, onRemove);
// viewModel.HasCautiousness = ...;   // bool
// viewModel.AlarmedBehaviorGroup = ...;   // AlarmedBehaviorGroup

// Command the widget invokes on confirm:
viewModel.UpdateValues();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- The declaration in `SandBox.ViewModelCollection/Missions/MissionAgentAlarmTargetVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [AlarmedBehaviorGroup](../AlarmedBehaviorGroup/) — `SandBox.Missions.AgentBehaviors`.
- [Min](../../core-extra/Min/) — `TaleWorlds.LinQuick`.

Section: [api/sandbox/](../) — the other types in this bucket.
