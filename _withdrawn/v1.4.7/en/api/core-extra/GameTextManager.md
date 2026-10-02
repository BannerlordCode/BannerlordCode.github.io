---
title: "GameTextManager"
description: "GameTextManager — class in TaleWorlds.Core. 9 public members (0 static)."
---

<!-- v147-skeleton -->
# GameTextManager

**Namespace:** `TaleWorlds.Core`  
**Module:** `TaleWorlds.Core`  
**Type:** `public class GameTextManager`  
**Source:** `TaleWorlds.Core/GameTextManager.cs`

## Overview

`GameTextManager` owns a subsystem: it holds the live set of objects of one kind, keeps them in sync with the world, and hands out references to them. Subsystems are shared — a second instance means a second, divergent copy of the truth.

## Mental Model

Read a manager as the single owner of a collection, not as a utility bag. Everything that mutates the collection goes through its methods, and everything else reads the collections it exposes.

Because the instance is shared and long-lived, do not stash per-campaign scratch data on it. Keep it on the campaign object, the party or the hero you are working on.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `GameTextManager`.
- **Instance members** (8): `GetGameText`, `AddGameText`, `TryGetText`, `FindText`, `FindAllTextVariations`, `LoadGameTexts`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AddGameText` | method | Instance entry point. Takes 1 argument: `string id`. Returns `GameText`. Adds to the collection or relation this type owns. |
| `ChoiceTag` | property | Instance entry point `struct` property. Read it for current state; a declared setter writes that state in place. |
| `FindAllTextVariations` | method | Instance entry point. Takes 1 argument: `string id`. Returns `IEnumerable<TextObject>`. Read path: prefer it over reaching for the backing store. |
| `FindText` | method | Instance entry point. Takes 2 arguments: `string id`, `string variation`. Returns `TextObject`. Read path: prefer it over reaching for the backing store. |
| `GetGameText` | method | Instance entry point. Takes 1 argument: `string id`. Returns `GameText`. Read path: prefer it over reaching for the backing store. |
| `LoadDefaultTexts` | method | Instance entry point. Takes no arguments. |
| `LoadGameTexts` | method | Instance entry point. Takes no arguments. |
| `TryGetText` | method | Instance entry point. Takes 3 arguments: `string id`, `string variation`, `out TextObject text`. Returns `bool`. Read path: prefer it over reaching for the backing store. |
| `GameTextManager` | ctor | Instance entry point. Takes no arguments. Returns ``. |

- Constructed as `public GameTextManager()`.

## Usage Example

```csharp
// Reach the one live instance through the engine; do not construct a second copy.
var gameTextManager = new GameTextManager();
// Read the live state through gameTextManager.ChoiceTag.
```

## Risks and Boundaries

- Never construct a manager yourself when the engine already owns one; the duplicate will drift from the live state.
- Do not mutate the collection while enumerating it — materialise a list first if a callback can add or remove entries.
- Most managers are only valid between campaign start and campaign end.
- The declaration in `TaleWorlds.Core/GameTextManager.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [GameType](../../mission-ext/GameType/) — `TaleWorlds.MountAndBlade.Launcher.Library.UserDatas`.
- [ModuleInfo](../../modulemanager/ModuleInfo/) — `TaleWorlds.ModuleManager`.
- [ModuleHelper](../../modulemanager/ModuleHelper/) — `TaleWorlds.ModuleManager`.
- [Attributes](../../campaign/Attributes/) — `TaleWorlds.CampaignSystem.Extensions`.

Section: [api/core-extra/](../) — the other types in this bucket.
