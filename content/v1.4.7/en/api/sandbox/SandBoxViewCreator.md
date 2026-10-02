---
title: "SandBoxViewCreator"
description: "SandBoxViewCreator — class in SandBox.View. 12 public members (12 static)."
---

<!-- v147-skeleton -->
# SandBoxViewCreator

**Namespace:** `SandBox.View`  
**Module:** `SandBox.View`  
**Type:** `public static class SandBoxViewCreator`  
**Source:** `SandBox.View/SandBoxViewCreator.cs`

## Overview

`SandBoxViewCreator` owns a subsystem: it holds the live set of objects of one kind, keeps them in sync with the world, and hands out references to them. Subsystems are shared — a second instance means a second, divergent copy of the truth.

## Mental Model

Read a manager as the single owner of a collection, not as a utility bag. Everything that mutates the collection goes through its methods, and everything else reads the collections it exposes.

Because the instance is shared and long-lived, do not stash per-campaign scratch data on it. Keep it on the campaign object, the party or the hero you are working on.

Concretely, the surface breaks down like this:

- **Static entry points** (12): `CreateSaveLoadScreen`, `CreateMissionCraftingView`, `CreateMissionNameMarkerUIHandler`, `CreateMissionConversationView`, `CreateMissionBarterView`, `CreateMissionAgentAlarmStateView`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CreateBoardGameView` | method (static) | Static entry point. Takes no arguments. Returns `MissionView`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `CreateMissionAgentAlarmStateView` | method (static) | Static entry point. Takes 1 argument: `Mission mission`. Returns `MissionView`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `CreateMissionArenaPracticeFightView` | method (static) | Static entry point. Takes no arguments. Returns `MissionView`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `CreateMissionBarterView` | method (static) | Static entry point. Takes no arguments. Returns `MissionView`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `CreateMissionConversationView` | method (static) | Static entry point. Takes 1 argument: `Mission mission`. Returns `MissionView`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `CreateMissionCraftingView` | method (static) | Static entry point. Takes no arguments. Returns `MissionView`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `CreateMissionMainAgentDetectionView` | method (static) | Static entry point. Takes 1 argument: `Mission mission`. Returns `MissionView`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `CreateMissionNameMarkerUIHandler` | method (static) | Static entry point. Takes 1 argument: `Mission mission`. Returns `MissionView`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `CreateMissionQuestBarView` | method (static) | Static entry point. Takes no arguments. Returns `MissionView`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `CreateMissionStealthFailCounter` | method (static) | Static entry point. Takes 1 argument: `Mission mission`. Returns `MissionView`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `CreateMissionTournamentView` | method (static) | Static entry point. Takes no arguments. Returns `MissionView`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `CreateSaveLoadScreen` | method (static) | Static entry point. Takes 1 argument: `bool isSaving`. Returns `ScreenBase`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |

## Usage Example

```csharp
// Reach the one live instance through the engine; do not construct a second copy.
// SandBoxViewCreator exposes no accessor; the engine passes the instance to its callbacks.
SandBoxViewCreator.CreateSaveLoadScreen(isSaving);
SandBoxViewCreator.CreateMissionCraftingView();
```

## Risks and Boundaries

- Never construct a manager yourself when the engine already owns one; the duplicate will drift from the live state.
- Do not mutate the collection while enumerating it — materialise a list first if a callback can add or remove entries.
- Most managers are only valid between campaign start and campaign end.
- The declaration in `SandBox.View/SandBoxViewCreator.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [MissionNameMarkerUIHandler](../MissionNameMarkerUIHandler/) — `SandBox.View.Missions.NameMarkers`.
- [BarterView](../../mission-ext/BarterView/) — `TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer`.
- [MissionAgentAlarmStateView](../MissionAgentAlarmStateView/) — `SandBox.View.Missions`.
- [MissionTournamentView](../MissionTournamentView/) — `SandBox.View.Missions.Tournaments`.
- [ModuleHelper](../../modulemanager/ModuleHelper/) — `TaleWorlds.ModuleManager`.
- [BoardGameView](../../mission-ext/BoardGameView/) — `TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer`.
- [MissionArenaPracticeFightView](../MissionArenaPracticeFightView/) — `SandBox.View.Missions`.

Section: [api/sandbox/](../) — the other types in this bucket.
