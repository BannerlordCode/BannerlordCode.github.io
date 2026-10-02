---
title: "CustomBattleProvider"
description: "CustomBattleProvider — class in TaleWorlds.MountAndBlade.CustomBattle.CustomBattle. 2 public members (0 static)."
---

<!-- v147-skeleton -->
# CustomBattleProvider

**Namespace:** `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle`  
**Module:** `TaleWorlds.MountAndBlade.CustomBattle`  
**Type:** `public class CustomBattleProvider : ICustomBattleProvider`  
**Base:** `ICustomBattleProvider`  
**Source:** `TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/CustomBattleProvider.cs`

## Overview

`CustomBattleProvider` owns a subsystem: it holds the live set of objects of one kind, keeps them in sync with the world, and hands out references to them. Subsystems are shared — a second instance means a second, divergent copy of the truth.

It extends ICustomBattleProvider, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Read a manager as the single owner of a collection, not as a utility bag. Everything that mutates the collection goes through its methods, and everything else reads the collections it exposes.

Because the instance is shared and long-lived, do not stash per-campaign scratch data on it. Keep it on the campaign object, the party or the hero you are working on.

Concretely, the surface breaks down like this:

- **Instance members** (2): `StartCustomBattle`, `GetName`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GetName` | method | Instance entry point. Takes no arguments. Returns `TextObject`. Read path: prefer it over reaching for the backing store. |
| `StartCustomBattle` | method | Instance entry point. Takes no arguments. |

## Usage Example

```csharp
// Reach the one live instance through the engine; do not construct a second copy.
// CustomBattleProvider exposes no accessor; the engine passes the instance to its callbacks.
```

## Risks and Boundaries

- Never construct a manager yourself when the engine already owns one; the duplicate will drift from the live state.
- Do not mutate the collection while enumerating it — materialise a list first if a callback can add or remove entries.
- Most managers are only valid between campaign start and campaign end.
- The declaration in `TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/CustomBattleProvider.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [ICustomBattleProvider](../../mission-ext/ICustomBattleProvider/) — `TaleWorlds.MountAndBlade.View.CustomBattle`.

Section: [api/custombattle/](../) — the other types in this bucket.
