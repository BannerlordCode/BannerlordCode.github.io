---
title: "MissionAgentMarkerTargetVM"
description: "MissionAgentMarkerTargetVM — class in SandBox.ViewModelCollection.Missions.NameMarker.Targets. 4 public members (0 static)."
---

<!-- v147-skeleton -->
# MissionAgentMarkerTargetVM

**Namespace:** `SandBox.ViewModelCollection.Missions.NameMarker.Targets`  
**Module:** `SandBox.ViewModelCollection`  
**Type:** `public class MissionAgentMarkerTargetVM : MissionNameMarkerTargetVM<Agent>`  
**Base:** `MissionNameMarkerTargetVM`  
**Source:** `SandBox.ViewModelCollection/Missions/NameMarker/Targets/MissionAgentMarkerTargetVM.cs`

## Overview

`MissionAgentMarkerTargetVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends MissionNameMarkerTargetVM, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `MissionAgentMarkerTargetVM`.
- **Instance members** (3): `UpdatePosition`, `GetName`, `UpdateQuestStatus`.
- **Extension points** (2): `UpdatePosition`, `GetName`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `UpdatePosition` | method (override) | Overrides the base member. Takes 1 argument: `Camera missionCamera`. Called from the owner’s update loop — do not assume a frame boundary. |
| `GetName` | method (override) | Overrides the base member. Takes no arguments. Returns `TextObject`. Read path: prefer it over reaching for the backing store. |
| `UpdateQuestStatus` | method | Instance entry point. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `MissionAgentMarkerTargetVM` | ctor | Instance entry point. Takes 1 argument: `Agent target`. Returns ``. |

- Constructed as `public MissionAgentMarkerTargetVM(Agent target)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new MissionAgentMarkerTargetVM(target);

// Command the widget invokes on confirm:
viewModel.UpdatePosition(missionCamera);
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 2 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox.ViewModelCollection/Missions/NameMarker/Targets/MissionAgentMarkerTargetVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [MissionNameMarkerTargetVM](../MissionNameMarkerTargetVM/) — `SandBox.ViewModelCollection.Missions.NameMarker`.
- [LinQuick](../../core-extra/LinQuick/) — `TaleWorlds.LinQuick`.
- [MissionNameMarkerHelper](../MissionNameMarkerHelper/) — `SandBox.ViewModelCollection.Missions.NameMarker`.
- [CampaignUIHelper](../../viewmodel/CampaignUIHelper/) — `TaleWorlds.CampaignSystem.ViewModelCollection`.
- [LocationComplex](../../campaign/LocationComplex/) — `TaleWorlds.CampaignSystem.Settlements.Locations`.
- [LocationCharacter](../../campaign/LocationCharacter/) — `TaleWorlds.CampaignSystem.Settlements.Locations`.
- [DisguiseMissionLogic](../DisguiseMissionLogic/) — `SandBox.Missions.MissionLogics`.
- [QuestMarkerVM](../../viewmodel/QuestMarkerVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.Quests`.

Section: [api/sandbox/](../) — the other types in this bucket.
