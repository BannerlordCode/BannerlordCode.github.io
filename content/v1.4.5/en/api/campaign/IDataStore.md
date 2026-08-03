---
title: "IDataStore"
description: "The bidirectional key-value contract used by CampaignBehaviorBase during save and load, handing behavior fields to the active adapter rather than acting as a user-created database."
---
# IDataStore

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public interface IDataStore`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/IDataStore.cs`

## Overview

`IDataStore` is the save/load adapter contract for campaign behaviors. Its only public members are `IsSaving`, `IsLoading`, and `SyncData<T>(string key, ref T data)`. The direction changes with the phase: saving writes the current `data` under a behavior record, while loading writes the record back through `ref data` using the same key. The interface does not choose a file, save slot, or serialization format.

## Mental Model

Treat `IDataStore` as the current channel passed into `CampaignBehaviorBase.SyncData`, not as a global state service. Campaign asks `CampaignBehaviorDataStore` to visit each behavior; the behavior declares which fields it needs, and the framework decides whether the call reads or writes. A mod should provide a stable behavior and stable keys, not implement a fake database or mutate gameplay state inside an `IsSaving` branch. New fields must account for older saves that do not contain the key.

## ↑ Parent Navigation

- [Campaign API index](../)
- [Save system architecture](../../../architecture/crash-boundary)

## ↔ Sibling Navigation

- [CampaignBehaviorBase](../CampaignBehaviorBase): defines the behavior-side `SyncData(IDataStore)` entry point.
- [CampaignBehaviorDataStore](../CampaignBehaviorDataStore): builds each behavior record and replays it during loading.
- [CampaignBehaviorManager](../CampaignBehaviorManager): invokes data storage along the behavior lifecycle.

## Children / Related Entry Points

- [Campaign](../Campaign) - owns campaign behaviors and their load sequence.
- [SaveManager](../../save-system/SaveManager) - the higher-level save coordinator.
- [CampaignTime](../CampaignTime) - a common stable campaign-time field persisted by behaviors.
- [CampaignEvents](../CampaignEvents) - behaviors often register events and persist their event-driven state through `SyncData`.

## Dependencies

The upstream callers are [CampaignBehaviorManager](../CampaignBehaviorManager) and the internal [CampaignBehaviorDataStore](../CampaignBehaviorDataStore). Saving creates `BehaviorSaveData(isSaving: true)`; loading supplies `BehaviorSaveData(isSaving: false)`. Downstream consumers are the fields of each [CampaignBehaviorBase](../CampaignBehaviorBase), such as the town-to-`CampaignTime` dictionary in `TournamentCampaignBehavior` and Hero dictionaries in `AgingCampaignBehavior`. The internal `_behaviorDict` is then part of the campaign save, so the behavior `StringId`, each key, and each field type together form the save schema.

## Save/Load Boundaries and Corruption Risks

- The framework implementation makes `IsSaving` and `IsLoading` mutually exclusive. Prefer unconditional `SyncData(key, ref field)` calls; branch on phase only for a concrete compatibility rule.
- The save branch uses dictionary `Add`. Syncing the same key twice for one behavior raises a duplicate-key error. The load branch returns `false` and keeps the default value when a key is absent, which is the expected path for an older save missing a new field.
- The load branch casts the stored value to `T`. Renaming a key, changing its type, or reusing a key for a different object can fail the cast or corrupt the save schema; keys must be stable and unique within the behavior.
- `CampaignBehaviorDataStore` finds records by behavior `StringId`. Two behaviors with the same StringId trigger an assertion and replace a record. A custom behavior should use an explicitly stable, unique constructor string instead of relying on a class name that may change.
- Implementations are framework-owned adapters. A mod should not retain an `IDataStore`, manually construct a fake `BehaviorSaveData`, or treat `SyncData` as a live database.

## Public Member Behavior

### `IsSaving` and `IsLoading`

The read-only flags identify the direction of the current callback. `BehaviorSaveData` exposes `IsSaving == true` and `IsLoading == false` while saving, and the reverse while loading. They describe this `SyncData` call, not whether the game has a background save request queued somewhere else.

### `SyncData<T>`

`SyncData` accepts a stable string key and a `ref T`. Saving records the current value; loading replaces the referenced field and returns whether the record was found. Collections, `CampaignTime`, Hero objects, and other complex values must use types and object identities supported by the game SaveSystem. Do not turn them into arbitrary strings to bypass the schema.

## Real Examples

### Sync a dictionary from TournamentCampaignBehavior

This is the real call shape from the source. The behavior owns a default-initialized field, while the framework passes the same key during saving and loading; the behavior does not choose a file or save slot.

```csharp
public class TournamentCampaignBehavior : CampaignBehaviorBase
{
    private Dictionary<Town, CampaignTime> _lastCreatedTournamentDatesInTowns = new Dictionary<Town, CampaignTime>();

    public override void SyncData(IDataStore dataStore)
    {
        dataStore.SyncData("_lastCreatedTournamentTimesInTowns", ref _lastCreatedTournamentDatesInTowns);
    }

    private void CreateTournament(Town town)
    {
        _lastCreatedTournamentDatesInTowns[town] = CampaignTime.Now;
        Campaign.Current.TournamentManager.GetTournamentGame(town);
    }
}
```

### Keep a missing field compatible with an old save

When an old save lacks a newly introduced key, `SyncData` can return `false` while leaving the initialized field intact. Do not treat that result as a failed save, and do not run an Action here that would add an entity twice.

```csharp
private Dictionary<Hero, int> _extraLivesContainer = new Dictionary<Hero, int>();

public override void SyncData(IDataStore dataStore)
{
    bool loaded = dataStore.SyncData("_extraLivesContainer", ref _extraLivesContainer);
    if (dataStore.IsLoading && !loaded)
    {
        _extraLivesContainer.Clear();
    }
}
```

After a default is synchronized, let `OnGameLoaded` or an event handler initialize derived state; production behavior should not write unrelated Campaign state from `SyncData`.

## See Also

- [Campaign API index](../)
- [CampaignBehaviorBase](../CampaignBehaviorBase)
- [CampaignBehaviorDataStore](../CampaignBehaviorDataStore)
- [CampaignBehaviorManager](../CampaignBehaviorManager)
- [SaveManager](../../save-system/SaveManager)
