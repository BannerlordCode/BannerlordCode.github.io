---
title: "IDataStore"
description: "The temporary save/load tray handed to CampaignBehaviorBase: persist behavior state with keyed SyncData calls."
---
# IDataStore

**Namespace:** `TaleWorlds.CampaignSystem`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public interface IDataStore`  
**Base:** none  
**Source:** `TaleWorlds.CampaignSystem/IDataStore.cs`

## Overview

`IDataStore` is the minimal campaign-Behavior save contract. It has only `IsSaving`, `IsLoading`, and `SyncData<T>(string, ref T)`. During a save or load, the engine creates an internal implementation and passes it to a [CampaignBehaviorBase](../CampaignBehaviorBase/) `SyncData(IDataStore)` override.

It is not a runtime database and not a global object retrievable from `Campaign.Current`. A behavior must explicitly list its persistent fields in its own `SyncData` override.

## Mental Model

Think of `IDataStore` as a temporary tray handed to one behavior for one save/load callback:

- During saving, `SyncData` puts the current `ref` value into that behavior's `BehaviorSaveData` under a string key.
- During loading, a matching key writes the stored value back through `ref`; a missing key returns `false` and leaves the field at its current default.
- `CampaignBehaviorDataStore` stores one tray per behavior `StringId`. Each tray uses a `Dictionary<string, object>`, so keys must be unique inside one behavior.
- Do not retain the `IDataStore` reference after the callback. Runtime code should read the behavior's own fields.

## When to use / when not to use

**Use it:** inside `CampaignBehaviorBase.SyncData` for state that must survive saves: counters, saveable `MBObjectBase` references, serializable collections, and versioned configuration. Use `IsLoading` to initialize fields missing from an old save or rebuild derived caches.

**Do not use it:** do not implement or `new` an `IDataStore`, store the argument in a field, use it as a daily-tick message bus, or use it instead of `[SaveableField]`/`[SaveableProperty]` for a normal saveable object. For that route, read [SaveableTypeDefiner](../../save-system/SaveableTypeDefiner/).

## Members

| Member | Meaning |
| --- | --- |
| `bool IsSaving { get; }` | the callback is writing into a save |
| `bool IsLoading { get; }` | the callback is restoring from a save; the official implementation makes it mutually exclusive with `IsSaving` |
| `bool SyncData<T>(string key, ref T data)` | writes while saving; restores by key and reports a hit while loading |

```csharp
public override void SyncData(IDataStore dataStore)
{
    dataStore.SyncData("_raidCount", ref _raidCount);
    dataStore.SyncData("_trackedVillages", ref _trackedVillages);

    if (dataStore.IsLoading && _trackedVillages == null)
    {
        _trackedVillages = new List<string>();
    }
}
```

## Real example: save and load behavior state

The source's `AllianceCampaignBehavior` and `IncidentsCampaignBehavior` both register fields with individual `dataStore.SyncData` calls. The following is the same contract from a mod behavior:

```csharp
public sealed class RelicTrackerBehavior : CampaignBehaviorBase
{
    private int _discoveredCount;
    private List<string> _discoveredRelicIds = new List<string>();

    public override void RegisterEvents()
    {
        CampaignEvents.DailyTickEvent.AddNonSerializedListener(this, OnDailyTick);
    }

    public override void SyncData(IDataStore dataStore)
    {
        bool hadCount = dataStore.SyncData("_myMod_discoveredCount_v1", ref _discoveredCount);
        dataStore.SyncData("_myMod_discoveredRelicIds_v1", ref _discoveredRelicIds);

        if (dataStore.IsLoading && !hadCount)
        {
            _discoveredCount = 0;
        }

        _discoveredRelicIds ??= new List<string>();
    }

    private void OnDailyTick()
    {
        Hero hero = MBObjectManager.Instance.GetObject<Hero>("main_hero");
        if (hero != null && _discoveredRelicIds.Count > 0)
        {
            _discoveredCount = Math.Max(_discoveredCount, _discoveredRelicIds.Count);
        }
    }
}
```

On save, `SyncData` reads the current fields; on load, it mutates the `ref` fields. `List<string>`, primitives, and references already defined by the save system must belong to the save object graph. If you store only a `StringId`, query the object again after loading.

## Risks and crash boundaries

- **A duplicate key aborts saving.** The official `BehaviorSaveData` save path calls dictionary `Add`; the same key twice throws. Prefix keys with your mod ID and register each key once per callback.
- **Behavior `StringId` must be stable and unique.** The outer store is bucketed by this ID; duplicate IDs trigger an assertion, while a rename prevents old data from finding its bucket. Avoid identical or accidentally overlapping behavior names.
- **A missing key is normal.** New saves and old saves may lack a newly added field. Check the `SyncData` return value or initialize defaults under `IsLoading`.
- **Values must be saveable.** Putting a transient UI object, engine handle, or undefined third-party object into `SyncData` can fail collection or deserialization. Sync only supported values.
- **Version type changes.** Replacing `int` with `List<int>` under the same key can make old saves fail to read. Add a versioned key such as `_v2` and define an explicit compatibility path.
- **Phase flags are not gameplay switches.** `IsSaving` and `IsLoading` describe the current callback; they are not a reason to skip gameplay events or resource changes.

## Cross-version notes

The 1.3.15 and 1.4.5 interfaces are the same: both phase properties and generic `SyncData` remain available. Vanilla behaviors still persist private state through `CampaignBehaviorBase.SyncData`; cross-version maintenance is mainly about stable keys, value types, and defaults for missing fields.

## Dependencies

- Caller: [CampaignBehaviorBase](../CampaignBehaviorBase/) provides the normal `SyncData` override point.
- Host: [Campaign](../../campaign/Campaign/) owns the campaign behavior and behavior data store.
- Alternate route: [SaveableFieldAttribute](../../save-system/SaveableFieldAttribute/), [SaveablePropertyAttribute](../../save-system/SaveablePropertyAttribute/), and [SaveableTypeDefiner](../../save-system/SaveableTypeDefiner/) define object members.
- Backend: [SaveManager](../../save-system/SaveManager/) builds the definition context and performs the save/load operation.

## Navigation

- Parent: [campaign-ext API](./)
- Siblings: [MBObjectBase](../MBObjectBase/) · [MBObjectManager](../MBObjectManager/)
- Related: [SaveManager](../../save-system/SaveManager/) · [SaveableTypeDefiner](../../save-system/SaveableTypeDefiner/)
