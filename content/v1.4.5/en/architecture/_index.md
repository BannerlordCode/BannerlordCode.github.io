---
title: "Architecture — v1.4.5"
description: "Layered architecture of the Bannerlord modding SDK: Foundation, Campaign, Mission, UI, Save. How the layers relate and where a mod should start."
---
# Architecture (v1.4.5)

Bannerlord's runtime is a stack of layers. A mod almost never touches all of them — pick the layer that matches what you are building, then follow the dependency arrows.

## ↑ Parent Navigation

- [Version home](../)
- [Roadmap](./roadmap)
- [Crash boundaries](./crash-boundary)
- [Doc contract](./doc-contract)

## The layers

| Layer | What lives here | Entry you usually touch |
|-------|-----------------|--------------------------|
| **Foundation** (`api/core`, `api/engine`) | `MBSubModuleBase`, `Game`, `MBObjectBase`/`MBObjectManager`, `MBGameManager`, `TextObject`, save primitives | Derive `MBSubModuleBase`; read `Game.Current` |
| **Campaign** (`api/campaign`) | `Campaign`, `Hero`, `Clan`, `Kingdom`, `Settlement`, `MobileParty`, `*Action`, `*Model`, `CampaignBehaviorBase`, `CampaignEvents` | Add a `CampaignBehaviorBase`; use `*Action.Apply` to change the world |
| **Mission** (`api/mission`) | `Mission`, `Agent`, `Team`, `Formation`, `MissionBehavior`, `MissionLogic` | Add a `MissionBehavior` for combat/battle logic |
| **UI** (`api/viewmodel`, `api/gui`) | `ViewModel`, `GauntletLayer`, `ScreenBase` | Bind a `ViewModel` to a Gauntlet layer |
| **Save** (`api/save-system`) | `SaveManager`, `SaveableTypeDefiner`, `[SaveableField]` | Register custom saveable data in `SyncData` |

## Dependency direction (mostly one-way)

```
SubModule → Game → Campaign → (Actions / Models / Behaviors) → Entities
                     ↘ Mission → (MissionBehavior / Agent / Team)
                Campaign/Game → SaveManager (persistence)
                UI (ViewModel) reads Campaign/Mission state
```

- **Downward** calls are normal. **Upward** calls (an Entity reaching into `Campaign`, a `Campaign` calling `Mission` directly outside a battle) are the usual source of bugs and save corruption.
- **World mutation must go through `*Action.Apply`** (or a registered `CampaignBehavior`), never by writing entity fields directly from a tick or event handler. See [crash boundaries](./crash-boundary).

## Where to start (by intent)

- "Run code when the game starts / add a system" → `MBSubModuleBase` → `CampaignBehaviorBase`
- "Change the world (kill, pay, declare war)" → the matching `*Action` (e.g. `KillCharacterAction`)
- "Read/compute something each tick" → a `*Model` or a `CampaignBehaviorBase`
- "Battle/combat logic" → `MissionBehavior`
- "A UI panel" → `ViewModel` + `GauntletLayer`
- "Persist custom data" → `SaveableTypeDefiner` + `SyncData`

See [roadmap](./roadmap) for the full wave plan and [crash boundaries](./crash-boundary) before you ship.

## See also

- [Roadmap](./roadmap)
- [Crash boundaries](./crash-boundary)
- [Doc contract](./doc-contract)
- [MBSubModuleBase](../api/core/MBSubModuleBase)
- [Campaign](../api/campaign/Campaign)
- [Mission](../api/mission/Mission)
