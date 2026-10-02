---
title: "AchievementManager"
description: "AchievementManager — class in TaleWorlds.AchievementSystem. 4 public members (4 static)."
---

<!-- v147-skeleton -->
# AchievementManager

**Namespace:** `TaleWorlds.AchievementSystem`  
**Module:** `TaleWorlds.AchievementSystem`  
**Type:** `public class AchievementManager`  
**Source:** `TaleWorlds.AchievementSystem/AchievementManager.cs`

## Overview

`AchievementManager` owns a subsystem: it holds the live set of objects of one kind, keeps them in sync with the world, and hands out references to them. Subsystems are shared — a second instance means a second, divergent copy of the truth.

## Mental Model

Read a manager as the single owner of a collection, not as a utility bag. Everything that mutates the collection goes through its methods, and everything else reads the collections it exposes.

Because the instance is shared and long-lived, do not stash per-campaign scratch data on it. Keep it on the campaign object, the party or the hero you are working on.

Concretely, the surface breaks down like this:

- **Static entry points** (4): `AchievementService`, `SetStat`, `GetStat`, `GetStats`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AchievementService` | property (static) | Static entry point `IAchievementService` property. Read it for current state; a declared setter writes that state in place. |
| `GetStat` | method (static) | Static entry point. Takes 1 argument: `string name`. Returns `Task<int>`. Read path: prefer it over reaching for the backing store. |
| `GetStats` | method (static) | Static entry point. Takes 1 argument: `string[] names`. Returns `Task<int[]>`. Read path: prefer it over reaching for the backing store. |
| `SetStat` | method (static) | Static entry point. Takes 2 arguments: `string name`, `int value`. Returns `bool`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |

## Usage Example

```csharp
// Reach the one live instance through the engine; do not construct a second copy.
// AchievementManager exposes no accessor; the engine passes the instance to its callbacks.
AchievementManager.SetStat(name, value);
AchievementManager.GetStat(name);
```

## Risks and Boundaries

- Never construct a manager yourself when the engine already owns one; the duplicate will drift from the live state.
- Do not mutate the collection while enumerating it — materialise a list first if a callback can add or remove entries.
- Most managers are only valid between campaign start and campaign end.
- The declaration in `TaleWorlds.AchievementSystem/AchievementManager.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [IAchievementService](../IAchievementService/) — `TaleWorlds.AchievementSystem`.
- [TestAchievementService](../TestAchievementService/) — `TaleWorlds.AchievementSystem`.

Section: [api/achievementsystem/](../) — the other types in this bucket.
