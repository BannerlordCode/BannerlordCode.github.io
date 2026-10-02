---
title: "ActivityManager"
description: "ActivityManager — class in TaleWorlds.ActivitySystem. 6 public members (6 static)."
---

<!-- v147-skeleton -->
# ActivityManager

**Namespace:** `TaleWorlds.ActivitySystem`  
**Module:** `TaleWorlds.ActivitySystem`  
**Type:** `public class ActivityManager`  
**Source:** `TaleWorlds.ActivitySystem/ActivityManager.cs`

## Overview

`ActivityManager` owns a subsystem: it holds the live set of objects of one kind, keeps them in sync with the world, and hands out references to them. Subsystems are shared — a second instance means a second, divergent copy of the truth.

## Mental Model

Read a manager as the single owner of a collection, not as a utility bag. Everything that mutates the collection goes through its methods, and everything else reads the collections it exposes.

Because the instance is shared and long-lived, do not stash per-campaign scratch data on it. Keep it on the campaign object, the party or the hero you are working on.

Concretely, the surface breaks down like this:

- **Static entry points** (6): `ActivityService`, `StartActivity`, `EndActivity`, `SetActivityAvailability`, `GetActivity`, `GetActivityTransition`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `ActivityService` | property (static) | Static entry point `IActivityService` property. Read it for current state; a declared setter writes that state in place. |
| `EndActivity` | method (static) | Static entry point. Takes 2 arguments: `string activityId`, `ActivityOutcome outcome`. Returns `bool`. |
| `GetActivity` | method (static) | Static entry point. Takes 1 argument: `string activityId`. Returns `Task<Activity>`. Read path: prefer it over reaching for the backing store. |
| `GetActivityTransition` | method (static) | Static entry point. Takes 1 argument: `string activityId`. Returns `ActivityTransition`. Read path: prefer it over reaching for the backing store. |
| `SetActivityAvailability` | method (static) | Static entry point. Takes 2 arguments: `string activityId`, `bool isAvailable`. Returns `bool`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `StartActivity` | method (static) | Static entry point. Takes 1 argument: `string activityId`. Returns `bool`. |

## Usage Example

```csharp
// Reach the one live instance through the engine; do not construct a second copy.
// ActivityManager exposes no accessor; the engine passes the instance to its callbacks.
ActivityManager.StartActivity(activityId);
ActivityManager.EndActivity(activityId, outcome);
```

## Risks and Boundaries

- Never construct a manager yourself when the engine already owns one; the duplicate will drift from the live state.
- Do not mutate the collection while enumerating it — materialise a list first if a callback can add or remove entries.
- Most managers are only valid between campaign start and campaign end.
- The declaration in `TaleWorlds.ActivitySystem/ActivityManager.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [IActivityService](../IActivityService/) — `TaleWorlds.ActivitySystem`.
- [TestActivityService](../TestActivityService/) — `TaleWorlds.ActivitySystem`.
- [ActivityOutcome](../ActivityOutcome/) — `TaleWorlds.ActivitySystem`.
- [Activity](../Activity/) — `TaleWorlds.ActivitySystem`.
- [ActivityTransition](../ActivityTransition/) — `TaleWorlds.ActivitySystem`.

Section: [api/activitysystem/](../) — the other types in this bucket.
