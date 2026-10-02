---
title: "MissionStealthAreaUsePointNameMarkerTargetVM"
description: "MissionStealthAreaUsePointNameMarkerTargetVM — class in SandBox.ViewModelCollection.Missions.NameMarker.Targets.Hideout. 4 public members (0 static)."
---

<!-- v147-skeleton -->
# MissionStealthAreaUsePointNameMarkerTargetVM

**Namespace:** `SandBox.ViewModelCollection.Missions.NameMarker.Targets.Hideout`  
**Module:** `SandBox.ViewModelCollection`  
**Type:** `public class MissionStealthAreaUsePointNameMarkerTargetVM : MissionNameMarkerTargetBaseVM`  
**Base:** `MissionNameMarkerTargetBaseVM`  
**Source:** `SandBox.ViewModelCollection/Missions/NameMarker/Targets/Hideout/MissionStealthAreaUsePointNameMarkerTargetVM.cs`

## Overview

`MissionStealthAreaUsePointNameMarkerTargetVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends MissionNameMarkerTargetBaseVM, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `MissionStealthAreaUsePointNameMarkerTargetVM`.
- **Instance members** (3): `Equals`, `UpdatePosition`, `GetName`.
- **Extension points** (3): `Equals`, `UpdatePosition`, `GetName`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Equals` | method (override) | Overrides the base member. Takes 1 argument: `MissionNameMarkerTargetBaseVM other`. Returns `bool`. |
| `UpdatePosition` | method (override) | Overrides the base member. Takes 1 argument: `Camera missionCamera`. Called from the owner’s update loop — do not assume a frame boundary. |
| `GetName` | method (override) | Overrides the base member. Takes no arguments. Returns `TextObject`. Read path: prefer it over reaching for the backing store. |
| `MissionStealthAreaUsePointNameMarkerTargetVM` | ctor | Instance entry point. Takes 1 argument: `StealthAreaUsePoint usePoint`. Returns ``. |

- Constructed as `public MissionStealthAreaUsePointNameMarkerTargetVM(StealthAreaUsePoint usePoint)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new MissionStealthAreaUsePointNameMarkerTargetVM(usePoint);

// Command the widget invokes on confirm:
viewModel.Equals(other);
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 3 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox.ViewModelCollection/Missions/NameMarker/Targets/Hideout/MissionStealthAreaUsePointNameMarkerTargetVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [MissionNameMarkerTargetBaseVM](../MissionNameMarkerTargetBaseVM/) — `SandBox.ViewModelCollection.Missions.NameMarker`.
- [Hideout](../../campaign/Hideout/) — `TaleWorlds.CampaignSystem.Settlements`.

Section: [api/sandbox/](../) — the other types in this bucket.
