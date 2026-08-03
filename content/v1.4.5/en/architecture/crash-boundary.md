---
title: "Crash & Save Boundaries — v1.4.5"
description: "The eight failure modes that corrupt saves or crash Bannerlord mods: save graph, world mutation, event timing, Agent lifecycle, ObjectManager, SubModule phases, Model replacement, UI lifetime. Each with the correct pattern."
---
# Crash & Save Boundaries (v1.4.5)

The single biggest source of "my mod corrupts saves / crashes randomly" bugs. Each section names the danger and the correct pattern. Read this before you ship.

## ↑ Parent Navigation

- [Architecture index](./)
- [Roadmap](.././roadmap)
- [Doc contract](.././doc-contract)

## 1. Save graph: SaveId, SyncData vs SaveableField, load order

- **Danger:** registering a `[SaveableField]` on a type not known to a `SaveableTypeDefiner`, or changing field types between versions → deserialization throws or silently drops data → corrupted save.
- **Correct:** every custom saveable type gets a `SaveableTypeDefiner` with a stable `SaveId`; new fields use `[SaveableField]` (auto-synced in `SyncData`), rarely-changing references use `[SaveableReference]`.
- **See:** `SaveManager`, `SaveableTypeDefiner`, `CampaignBehaviorBase.SyncData`.

## 2. World mutation must go through Action.Apply

- **Danger:** writing `hero.Gold += x` or `settlement.Owner = clan` directly from a tick/event handler → other systems (AI, quests, UI) never observe the change → inconsistent state, frozen diplomacy, broken saves.
- **Correct:** call `GiveGoldAction.Apply(...)`, `ChangeOwnerOfSettlementAction.Apply(...)`, etc. Actions cascade events and keep the simulation consistent.
- **See:** `*Action` family, `ChangeKingdomAction`, `GiveGoldAction`.

## 3. Campaign event timing vs Mission

- **Danger:** mutating Campaign entities during a Mission tick, or reading `Campaign.Current` after the campaign ended → null refs / wrong-phase exceptions.
- **Correct:** world changes during a battle go through the post-battle result (`MissionResult`) and are applied when control returns to Campaign; subscribe to `CampaignEvents` for lifecycle hooks.
- **See:** `CampaignEvents`, `MissionResult`, `Mission`.

## 4. Agent / Mission lifecycle

- **Danger:** holding an `Agent` reference after it died/left the mission, or calling `Mission.Current` outside a mission → NullReferenceException / "mission already ended" errors.
- **Correct:** listen to `OnAgentRemoved` / `OnMissionEnded`; never cache `Agent` across missions; guard `Mission.Current != null`.
- **See:** `Mission`, `Agent`, `MissionBehavior`.

## 5. MBObjectManager registration

- **Danger:** `new ItemObject()` without registering in `MBObjectManager` → StringId collisions, missing from lookups, save/load identity loss.
- **Correct:** create via the manager (`MBObjectManager.Instance.AddObject`) or load from existing data; resolve by StringId.
- **See:** `MBObjectBase`, `MBObjectManager`.

## 6. SubModule load phases

- **Danger:** doing heavy work or touching `Campaign.Current` in `OnSubModuleLoad` (before the game object exists) → NRE.
- **Correct:** `OnSubModuleLoad` = register types/UI only; `OnGameInitializationFinished` / `OnGameStart` = touch game state; use `CampaignGameStarter` to add Behaviors.
- **See:** `MBSubModuleBase`, `CampaignGameStarter`.

## 7. Model replacement

- **Danger:** replacing a `GameModels` entry with `null` or a wrong-type instance → every consumer NREs.
- **Correct:** register a subclass of the exact Model type via `CampaignGameStarter`/`AddModel`; never null out.
- **See:** `GameModels`, `CampaignGameStarter`.

## 8. UI / ViewModel lifetime

- **Danger:** updating a `ViewModel` after its `GauntletLayer` is removed, or touching Campaign state from the UI thread during a tick → cross-thread / disposed-object crashes.
- **Correct:** bind/unbind in `OnMissionBehaviourInitialize`/`OnFinalize` symmetry; marshal state reads through the layer lifecycle.
- **See:** `ViewModel`, `GauntletLayer`, `ScreenBase`.

## See also

- [Architecture index](./)
- [MBSubModuleBase](../../api/core/MBSubModuleBase)
- [Campaign](../../api/campaign/Campaign)
- [Mission](../../api/mission/Mission)
- [SaveManager](../../api/save-system/SaveManager)
