---
title: "StoryModeViewCreator"
description: "StoryModeViewCreator — class in StoryMode.View. 1 public member (1 static)."
---

<!-- v147-skeleton -->
# StoryModeViewCreator

**Namespace:** `StoryMode.View`  
**Module:** `StoryMode.View`  
**Type:** `public static class StoryModeViewCreator`  
**Source:** `StoryMode.View/StoryModeViewCreator.cs`

## Overview

`StoryModeViewCreator` owns a subsystem: it holds the live set of objects of one kind, keeps them in sync with the world, and hands out references to them. Subsystems are shared — a second instance means a second, divergent copy of the truth.

## Mental Model

Read a manager as the single owner of a collection, not as a utility bag. Everything that mutates the collection goes through its methods, and everything else reads the collections it exposes.

Because the instance is shared and long-lived, do not stash per-campaign scratch data on it. Keep it on the campaign object, the party or the hero you are working on.

Concretely, the surface breaks down like this:

- **Static entry points** (1): `CreateTrainingFieldObjectiveView`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CreateTrainingFieldObjectiveView` | method (static) | Static entry point. Takes 1 argument: `Mission mission`. Returns `MissionView`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |

## Usage Example

```csharp
// Reach the one live instance through the engine; do not construct a second copy.
// StoryModeViewCreator exposes no accessor; the engine passes the instance to its callbacks.
StoryModeViewCreator.CreateTrainingFieldObjectiveView(mission);
```

## Risks and Boundaries

- Never construct a manager yourself when the engine already owns one; the duplicate will drift from the live state.
- Do not mutate the collection while enumerating it — materialise a list first if a callback can add or remove entries.
- Most managers are only valid between campaign start and campaign end.
- The declaration in `StoryMode.View/StoryModeViewCreator.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [MissionTrainingFieldObjectiveView](../MissionTrainingFieldObjectiveView/) — `StoryMode.View.Missions`.

Section: [api/storymode/](../) — the other types in this bucket.
