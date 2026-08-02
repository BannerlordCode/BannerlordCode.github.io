---
title: "Foundation / Core API — v1.4.5"
description: "The Foundation layer: module bootstrapping, the game object, the MBObject system, text, save primitives, and UI base classes. Mental map and entry order."
---
# Foundation / Core API

The bedrock everything else sits on. You touch this layer to **boot the mod, hold global state, and define saveable data**.

## ↑ Parent Navigation

- [API index](../)
- [Architecture index](../../architecture/)
- [Crash boundaries](../../architecture/crash-boundary)

## What this module is

`api/core` (plus `api/engine`) holds the types that exist before any campaign or mission: the SubModule boot pipeline, the `Game` singleton, the `MBObject`/object-manager registry, text/localization, and the save primitives. If you are adding a system, you start here.

## Hub entries (start here)

| Type | Role | Deep page |
|------|------|-----------|
| `MBSubModuleBase` | Boot entry; override lifecycle hooks to register types/UI/behaviors | [MBSubModuleBase](./MBSubModuleBase) |
| `Game` | Global game singleton; `Game.Current` | [Game](./Game) |
| `MBObjectBase` | Base of every registered game object (ItemObject, CharacterObject…) | [MBObjectBase](./MBObjectBase) |
| `MBObjectManager` | Registry/lookup of MBObjects by StringId | (cluster) |
| `MBGameManager` | Creates and owns the `Game` instance | (cluster) |
| `TextObject` | Localized, mutable string | (cluster) |
| `CampaignTime` | Calendar/time type used across the sim | (cluster) |
| `SaveableTypeDefiner` | Declares custom saveable types & SaveId | (save-system) |
| `ViewModel` | UI data model (Gauntlet) | (viewmodel) |
| `GauntletLayer` / `ScreenBase` | UI surface & screen stack | (gui) |

## Dependency graph

```
MBSubModuleBase → MBGameManager → Game
Game → Campaign (api/campaign) / Mission (api/mission)
MBObjectBase ← MBObjectManager (registry)
Game / Campaign → SaveManager (api/save-system)
ViewModel ← GauntletLayer (api/gui)
```

## Recommended reading order

1. `MBSubModuleBase` — how your code gets loaded.
2. `Game` — the global handle you read everywhere.
3. `MBObjectBase` + `MBObjectManager` — how game objects are registered/resolved.
4. Then jump to `api/campaign` (Campaign, Hero, Actions, Models) or `api/mission`.

## Risk overview (see crash boundaries)

- Never touch `Campaign.Current` before `OnGameInitializationFinished` (§6).
- Register MBObjects through the manager, not `new` (§5).
- Custom save data needs a `SaveableTypeDefiner` (§1).

## See also

- [Architecture index](../../architecture/)
- [Campaign module](../campaign/)
- [Mission module](../mission/)
- [Crash boundaries](../../architecture/crash-boundary)
