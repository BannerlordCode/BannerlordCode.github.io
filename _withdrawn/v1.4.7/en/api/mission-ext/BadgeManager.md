---
title: "BadgeManager"
description: "BadgeManager — class in TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges. 14 public members (9 static)."
---

<!-- v147-skeleton -->
# BadgeManager

**Namespace:** `TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges`  
**Module:** `TaleWorlds.MountAndBlade.Diamond`  
**Type:** `public static class BadgeManager`  
**Source:** `TaleWorlds.MountAndBlade.Diamond/MultiplayerBadges/BadgeManager.cs`

## Overview

`BadgeManager` owns a subsystem: it holds the live set of objects of one kind, keeps them in sync with the world, and hands out references to them. Subsystems are shared — a second instance means a second, divergent copy of the truth.

## Mental Model

Read a manager as the single owner of a collection, not as a utility bag. Everything that mutates the collection goes through its methods, and everything else reads the collections it exposes.

Because the instance is shared and long-lived, do not stash per-campaign scratch data on it. Keep it on the campaign object, the party or the hero you are working on.

Concretely, the surface breaks down like this:

- **Static entry points** (9): `Badges`, `IsInitialized`, `InitializeWithXML`, `OnFinalize`, `GetByIndex`, `GetById`, ….
- **Data and constants** (5): `PropertyParameterName`, `ValueParameterName`, `MinValueParameterName`, `MaxValueParameterName`, `IsBestParameterName`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Badges` | property (static) | Static entry point `List<Badge>` property. Read it for current state; a declared setter writes that state in place. |
| `GetBadgeConditionNumericValue` | method (static) | Static entry point. Takes 2 arguments: `this PlayerData playerData`, `BadgeCondition condition`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetBadgeConditionValue` | method (static) | Static entry point. Takes 2 arguments: `this PlayerData playerData`, `BadgeCondition condition`. Returns `string`. Read path: prefer it over reaching for the backing store. |
| `GetById` | method (static) | Static entry point. Takes 1 argument: `string id`. Returns `Badge`. Read path: prefer it over reaching for the backing store. |
| `GetByIndex` | method (static) | Static entry point. Takes 1 argument: `int index`. Returns `Badge`. Read path: prefer it over reaching for the backing store. |
| `GetByType` | method (static) | Static entry point. Takes 1 argument: `BadgeType type`. Returns `List<Badge>`. Read path: prefer it over reaching for the backing store. |
| `InitializeWithXML` | method (static) | Static entry point. Takes 1 argument: `string xmlPath`. |
| `IsInitialized` | property (static) | Static entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `OnFinalize` | method (static) | Static entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `IsBestParameterName` | const | Instance entry point. Takes no arguments. Returns `string`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `MaxValueParameterName` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `MinValueParameterName` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `PropertyParameterName` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `ValueParameterName` | const | Instance entry point. Takes no arguments. Returns `string`. |

## Usage Example

```csharp
// Reach the one live instance through the engine; do not construct a second copy.
// BadgeManager exposes no accessor; the engine passes the instance to its callbacks.
BadgeManager.InitializeWithXML(xmlPath);
BadgeManager.OnFinalize();
```

## Risks and Boundaries

- Never construct a manager yourself when the engine already owns one; the duplicate will drift from the live state.
- Do not mutate the collection while enumerating it — materialise a list first if a callback can add or remove entries.
- Most managers are only valid between campaign start and campaign end.
- The declaration in `TaleWorlds.MountAndBlade.Diamond/MultiplayerBadges/BadgeManager.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Badge](../Badge/) — `TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges`.
- [BadgeType](../BadgeType/) — `TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges`.
- [Attributes](../../campaign/Attributes/) — `TaleWorlds.CampaignSystem.Extensions`.
- [BadgeCondition](../BadgeCondition/) — `TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges`.
- [GameType](../GameType/) — `TaleWorlds.MountAndBlade.Launcher.Library.UserDatas`.

Section: [api/mission-ext/](../) — the other types in this bucket.
