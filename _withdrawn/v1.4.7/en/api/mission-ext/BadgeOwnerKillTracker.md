---
title: "BadgeOwnerKillTracker"
description: "BadgeOwnerKillTracker — class in TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges. 3 public members (0 static)."
---

<!-- v147-skeleton -->
# BadgeOwnerKillTracker

**Namespace:** `TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges`  
**Module:** `TaleWorlds.MountAndBlade.Diamond`  
**Type:** `public class BadgeOwnerKillTracker : GameBadgeTracker`  
**Base:** `GameBadgeTracker`  
**Source:** `TaleWorlds.MountAndBlade.Diamond/MultiplayerBadges/BadgeOwnerKillTracker.cs`

## Overview

`BadgeOwnerKillTracker` is a named type in the TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends GameBadgeTracker, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `BadgeOwnerKillTracker`.
- **Instance members** (2): `OnPlayerJoin`, `OnKill`.
- **Extension points** (2): `OnPlayerJoin`, `OnKill`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnKill` | method (override) | Overrides the base member. Takes 1 argument: `KillData killData`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnPlayerJoin` | method (override) | Overrides the base member. Takes 1 argument: `PlayerData playerData`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `BadgeOwnerKillTracker` | ctor | Instance entry point. Takes 6 arguments: `string badgeId`, `BadgeCondition condition`, `Dictionary<ValueTuple<PlayerId`, `string`, …. Returns ``. |

- Constructed as `public BadgeOwnerKillTracker(string badgeId, BadgeCondition condition, Dictionary<ValueTuple<PlayerId, string, string>, int> dataDictionary)`.

## Usage Example

```csharp
var badgeOwnerKillTracker = new BadgeOwnerKillTracker(badgeId, condition, theTarget, "text", theTarget, dataDictionary);
badgeOwnerKillTracker.OnPlayerJoin(playerData);
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 2 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.Diamond/MultiplayerBadges/BadgeOwnerKillTracker.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [BadgeCondition](../BadgeCondition/) — `TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges`.

Section: [api/mission-ext/](../) — the other types in this bucket.
