---
title: "MissionDisguiseMarkerItemVM"
description: "MissionDisguiseMarkerItemVM — class in SandBox.ViewModelCollection.Missions.MainAgentDetection. 6 public members (0 static)."
---

<!-- v147-skeleton -->
# MissionDisguiseMarkerItemVM

**Namespace:** `SandBox.ViewModelCollection.Missions.MainAgentDetection`  
**Module:** `SandBox.ViewModelCollection`  
**Type:** `public class MissionDisguiseMarkerItemVM : ViewModel`  
**Base:** `ViewModel`  
**Source:** `SandBox.ViewModelCollection/Missions/MainAgentDetection/MissionDisguiseMarkerItemVM.cs`

## Overview

`MissionDisguiseMarkerItemVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ViewModel, so the members it does not redeclare are inherited from there. 3 of its own members are properties, which is where most reads and writes land.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `MissionDisguiseMarkerItemVM`.
- **Instance members** (5): `OffenseInfo`, `RefreshVisuals`, `UpdatePosition`, `AgentAlarmStateEnum`, `AgentStealthOffenseType`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AgentAlarmStateEnum` | property | Instance entry point `enum` property. Read it for current state; a declared setter writes that state in place. |
| `AgentStealthOffenseType` | property | Instance entry point `enum` property. Read it for current state; a declared setter writes that state in place. |
| `OffenseInfo` | property | Instance entry point `DisguiseMissionLogic.ShadowingAgentOffenseInfo` property. Read it for current state; a declared setter writes that state in place. |
| `RefreshVisuals` | method | Instance entry point. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `UpdatePosition` | method | Instance entry point. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `MissionDisguiseMarkerItemVM` | ctor | Instance entry point. Takes 2 arguments: `Camera missionCamera`, `DisguiseMissionLogic.ShadowingAgentOffenseInfo offenseInfo`. Returns ``. |

- Constructed as `public MissionDisguiseMarkerItemVM(Camera missionCamera, DisguiseMissionLogic.ShadowingAgentOffenseInfo offenseInfo)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new MissionDisguiseMarkerItemVM(missionCamera, offenseInfo);
// viewModel.OffenseInfo = ...;   // DisguiseMissionLogic.ShadowingAgentOffenseInfo
// viewModel.AgentAlarmStateEnum = ...;   // enum
// viewModel.AgentStealthOffenseType = ...;   // enum

// Command the widget invokes on confirm:
viewModel.RefreshVisuals();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- The declaration in `SandBox.ViewModelCollection/Missions/MainAgentDetection/MissionDisguiseMarkerItemVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [DisguiseMissionLogic](../DisguiseMissionLogic/) — `SandBox.Missions.MissionLogics`.
- [AlarmedBehaviorGroup](../AlarmedBehaviorGroup/) — `SandBox.Missions.AgentBehaviors`.

Section: [api/sandbox/](../) — the other types in this bucket.
