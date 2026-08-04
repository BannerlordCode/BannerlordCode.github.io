---
title: "CampaignBehaviorDataStore"
description: "The internal SyncData bucket owned by CampaignBehaviorManager; mods should not instantiate or retrieve it directly."
---
# CampaignBehaviorDataStore

**Namespace:** `TaleWorlds.CampaignSystem`<br>
**Module:** `TaleWorlds.CampaignSystem`<br>
**Type:** `internal class CampaignBehaviorDataStore`<br>
**Base:** none (nested `BehaviorSaveData` implements [`IDataStore`](../../campaign-ext/IDataStore))<br>
**Source:** `TaleWorlds.CampaignSystem/CampaignBehaviorDataStore.cs` (1.3.15)<br>
**Owner:** [`CampaignBehaviorManager`](../../campaign-ext/CampaignBehaviorManager)

## One-line responsibility

`CampaignBehaviorDataStore` is the engine-owned container used while registered `CampaignBehaviorBase` instances save or load: the outer layer buckets by a behavior's `StringId`, and the inner layer stores values by the string keys passed to `SyncData`. It is not a public mod service or a runtime database.

## The public/internal boundary

The top-level `CampaignBehaviorDataStore` and nested `BehaviorSaveData` are both `internal`. Mod code should not `new CampaignBehaviorDataStore()`, retrieve it from `Campaign.Current`, or inject it as a registration or communication service. The normal mod-facing entry point is to derive from [`CampaignBehaviorBase`](../../campaign-ext/CampaignBehaviorBase) and use the engine-provided [`IDataStore`](../../campaign-ext/IDataStore) in `SyncData(IDataStore dataStore)`.

The visible `IsSaving`, `IsLoading`, and `SyncData<T>` members are the `BehaviorSaveData` implementation of `IDataStore`; they are not a public mod-facing API on the outer `CampaignBehaviorDataStore` type.

## Mental model: two dictionaries, one temporary tray

A save/load pass can be represented as:

```text
CampaignBehaviorManager
  -> CampaignBehaviorDataStore._behaviorDict[behavior.StringId]
       -> BehaviorSaveData._records[key]
            -> value passed by ref to Behavior.SyncData
```

- **Outer `StringId`:** one `BehaviorSaveData` bucket per behavior. Saving creates a saving bucket; loading looks for the bucket under the current behavior `StringId`.
- **Inner key:** supplied by the behavior in `SyncData`. The saving path calls `_records.Add(key, data)`, so two uses of the same key in one behavior callback throw a dictionary exception.
- **Temporary lifetime:** `BehaviorSaveData` exists for one behavior's save or load callback. Do not retain the `IDataStore` reference; daily ticks should read the behavior's own fields.

## Dependencies

| Direction | Type / system | Relationship |
|---|---|---|
| Owner | [`CampaignBehaviorManager`](../../campaign-ext/CampaignBehaviorManager) | Creates the store, invokes save/load, and clears temporary buckets |
| Mod boundary | [`CampaignBehaviorBase`](../../campaign-ext/CampaignBehaviorBase) | Supplies `SyncData(IDataStore)` and owns the fields being persisted |
| Callback contract | [`IDataStore`](../../campaign-ext/IDataStore) | Temporary save/load interface passed to each behavior |
| Registration | [`CampaignGameStarter`](../../campaign-ext/CampaignGameStarter) | Adds behaviors before the manager can register them |
| Save graph | [`SaveableTypeDefiner`](../../save-system/SaveableTypeDefiner) | Defines engine-owned save members; it does not replace behavior `SyncData` |

## Internal structure and member contracts

### `CampaignBehaviorDataStore`

| Member | Contract/visibility | Meaning |
| --- | --- | --- |
| `_behaviorDict` | `[SaveableField(1)] private readonly Dictionary<string, BehaviorSaveData>` | Outer mapping from behavior ID to data bucket |
| `CampaignBehaviorDataStore()` | `internal` | Creates an empty behavior dictionary |
| `SaveBehaviorData(CampaignBehaviorBase)` | `internal void` | Creates a saving bucket, calls the behavior's `SyncData`, and stores it by `StringId` |
| `LoadBehaviorData(CampaignBehaviorBase)` | `internal void` | Finds a loading bucket, calls `SyncData`, and may attempt an old-ID migration |
| `ClearBehaviorData()` | `internal void` | Clears the temporary outer dictionary |

### `BehaviorSaveData : IDataStore`

| Member | Contract | Meaning |
| --- | --- | --- |
| `_records` | `[SaveableField(0)] private Dictionary<string, object>` | Key/value records for one behavior |
| `IsSaving` | `public bool { get; }` | Saving flag fixed by the constructor |
| `IsLoading` | `public bool { get; }` | `!IsSaving`; mutually exclusive with `IsSaving` |
| `SyncData<T>(string key, ref T data)` | `public bool` | Writes on save; on load, assigns through `ref` when the key exists and returns `true` |

On load, a missing key returns `false` and leaves the supplied field unchanged. `true` means that this key was found, not that the whole behavior loaded successfully.

## Save lifecycle: who creates it, who calls it, when it clears

1. `CampaignBehaviorManager` creates `CampaignBehaviorDataStore` and subscribes to `CampaignEvents.OnBeforeSaveEvent`. Its `_campaignBehaviorDataStore` enters the manager's save graph through `[SaveableField(1)]`.
2. When a behavior is added, `AddBehavior` appends it and immediately calls `RegisterEvents()`. That registers event listeners; it does not replace stable identity or the save callback.
3. **Before saving:** `OnBeforeSave` clears old buckets, then calls `SaveBehaviorData` for every registered behavior. Each behavior receives a fresh `BehaviorSaveData(true)` and runs `SyncData` once, writing its current fields to `_records`.
4. **During loading:** `LoadBehaviorData` looks up the current `StringId` for each behavior. On a hit it passes a `BehaviorSaveData(false)` to `SyncData`. After all behaviors are processed, the temporary outer dictionary is cleared.
5. **ID migration:** If the current `StringId` misses, the source copies the outer dictionary and searches for an old key containing the current behavior type name. It removes that bucket, re-adds it under the current `StringId`, and calls `SyncData`. This is not a general migration system; similarly named behaviors can make fuzzy matching unsafe.

`CampaignBehaviorManager.RegisterEvents()` walks behaviors during campaign startup. Event execution and save/load callbacks are separate lifecycles: `DailyTickEvent` changes behavior fields, while `OnBeforeSave` copies those fields into behavior save buckets.

## `SyncData` and `[SaveableField]` are different contracts

| Mechanism | Boundary | Use | Registers a behavior? |
| --- | --- | --- | --- |
| `CampaignBehaviorBase.SyncData(IDataStore)` | Behavior lifecycle | Saves/restores behavior-private fields | No; the behavior still needs `CampaignGameStarter.AddBehavior(...)` |
| `[SaveableField]` / `[SaveableProperty]` | SaveSystem object graph | Defines members and field IDs for a saveable type | No; an attribute does not create a behavior or a data store |
| `[SaveableField(1)]` on the store and `[SaveableField(0)]` on `_records` | Engine implementation | Puts behavior buckets and records into the engine save graph | Owned by `CampaignBehaviorManager`, not directly used by mods |

A behavior field does not need `[SaveableField]` merely because it is synchronized through `SyncData`. Do not persist the same state through both routes: that creates duplicate sources, type definitions, and load-order risks. For ordinary saveable object members, use the SaveSystem route described by [`SaveableFieldAttribute`](../../save-system/SaveableFieldAttribute), [`SaveablePropertyAttribute`](../../save-system/SaveablePropertyAttribute), and [`SaveableTypeDefiner`](../../save-system/SaveableTypeDefiner).

## When to use / when not to use

**Use `SyncData` for:**

- Counters, collections, saveable object references, and versioned state declared by a behavior in its `SyncData` method.
- Missing-key defaults or derived-cache rebuilding during `IsLoading`.
- Stable, unique, mod-prefixed keys for fields owned by that behavior.

**Do not treat `CampaignBehaviorDataStore` as:**

- A global state service available to a mod; do not construct it, reflect it out, or cache its nested `BehaviorSaveData`.
- A behavior registrar; registration uses `CampaignGameStarter.AddBehavior`, with a stable behavior `StringId`.
- A shared event bus for daily ticks; the `IDataStore` is not valid as a retained runtime channel after the callback.
- A replacement for `[SaveableField]`; ordinary SaveSystem object members need the SaveSystem definition path.

## Real mod-side example

This shows the real mod entry path. The behavior is registered through the starter and never touches the internal `CampaignBehaviorDataStore`.

```csharp
using System.Collections.Generic;
using TaleWorlds.CampaignSystem;

public sealed class RelicTrackerBehavior : CampaignBehaviorBase
{
    private int _discoveredCount;
    private List<string> _discoveredRelicIds = new List<string>();

    public RelicTrackerBehavior(string stringId)
        : base(stringId)
    {
    }

    public override void RegisterEvents()
    {
        CampaignEvents.DailyTickEvent.AddNonSerializedListener(this, OnDailyTick);
    }

    public override void SyncData(IDataStore dataStore)
    {
        bool found = dataStore.SyncData(
            "_myMod_discoveredCount_v1",
            ref _discoveredCount);

        dataStore.SyncData(
            "_myMod_discoveredRelicIds_v1",
            ref _discoveredRelicIds);

        if (dataStore.IsLoading && !found)
        {
            _discoveredCount = 0;
        }

        if (_discoveredRelicIds == null)
        {
            _discoveredRelicIds = new List<string>();
        }
    }

    private void OnDailyTick()
    {
        // Read and mutate only the behavior's own fields here.
    }
}

// Register after receiving CampaignGameStarter in OnGameStart:
// campaignStarter.AddBehavior(new RelicTrackerBehavior("MyMod.RelicTracker.v1"));
```

The explicit `StringId` prevents a class rename from breaking the outer bucket; keys also carry a mod prefix and version. If a value type changes, introduce a `_v2` key and define a compatibility read instead of silently changing an old `int` key into a collection.

## Risk and bad-save boundaries

- **Duplicate field key:** the save path uses `Dictionary.Add`; duplicate keys in one behavior's `SyncData` callback throw and abort the save.
- **Duplicate behavior ID:** a repeated `StringId` triggers `Debug.FailedAssert`, then the later bucket replaces the earlier one. Behavior IDs must be unique and stable.
- **Fuzzy migration:** exact `StringId` wins; old-ID migration matches a key containing the type name. Similar names can select the wrong bucket.
- **Missing key:** `false` is normal for an old save or a new field. The field keeps its current default, so the behavior must decide how to initialize it and rebuild derived state.
- **Unsupported value:** UI objects, temporary engine handles, or unsupported third-party objects can fail during save collection/deserialization. Synchronize only values supported by the Bannerlord save graph.
- **Misusing phase flags:** `IsSaving` and `IsLoading` describe the current `SyncData` phase; they must not pause daily costs, events, or gameplay logic.
- **Reference lifetime:** `IDataStore` is a temporary callback parameter. Calling it after save/load has completed can target a cleared temporary bucket.

## Version comparison

The 1.4.5 comparison source is `R:\Bannerlord\bannerlord-1.4.5\Bannerlord.Source\bin\TaleWorlds.CampaignSystem\TaleWorlds.CampaignSystem\CampaignBehaviorDataStore.cs`. It remains `internal`; the outer `[SaveableField(1)]`, nested `_records` `[SaveableField(0)]`, `IsSaving`/`IsLoading`, and `SyncData<T>` save/load semantics remain aligned with 1.3.15. Across versions, maintain the behavior `StringId`, keys, value types, and missing-field defaults rather than depending on internal class names or private fields.

## Navigation

- Up: [campaign API](./)
- Siblings: [BehaviorSaveData](../BehaviorSaveData) · [Campaign](../Campaign)
- Host and contract: [CampaignBehaviorManager](../../campaign-ext/CampaignBehaviorManager) · [CampaignBehaviorBase](../../campaign-ext/CampaignBehaviorBase) · [IDataStore](../../campaign-ext/IDataStore)
- Other save route: [SaveManager](../../save-system/SaveManager) · [SaveableFieldAttribute](../../save-system/SaveableFieldAttribute) · [SaveableTypeDefiner](../../save-system/SaveableTypeDefiner)
- Return to object indexing: [CampaignObjectManager](../../campaign-ext/CampaignObjectManager)
