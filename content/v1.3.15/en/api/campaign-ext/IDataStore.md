---
title: "IDataStore"
description: "The per-Behavior, key/value pouch used by the save/load system — it exists only inside CampaignBehaviorBase.SyncData and is the single correct way to persist a behavior's private state across saves."
---
# IDataStore

**Namespace:** TaleWorlds.CampaignSystem  
**Module:** TaleWorlds.CampaignSystem  
**Type:** `public interface IDataStore`  
**Base:** none (interface, no base type)  
**Source:** `TaleWorlds.CampaignSystem/IDataStore.cs`

## Overview

`IDataStore` is the minimal contract at the heart of Bannerlord's **campaign save/load** mechanism: a "store or fetch a value by key" container. It lives only for the duration of **one save or load pass, scoped to one behavior** — the engine constructs it and hands it to your `CampaignBehaviorBase.SyncData(IDataStore dataStore)` override. Whatever you `SyncData` into it gets written to the save; on load the engine feeds the same values back. It is **not** a cross-campaign global database and **not** a runtime channel for sharing state between systems.

> One-line responsibility: perform a keyed, two-way sync of a single behavior's private fields with the game save, once per save and once per load.

## Mental Model

Think of `IDataStore` as **"the temporary tray the engine hands you during one save/load of your behavior"**:

- Its lifetime is extremely short. Before writing a save, the engine fires `OnBeforeSaveEvent`; `CampaignBehaviorManager` builds a fresh `BehaviorSaveData` (the internal `IDataStore` implementation, with `IsSaving == true`), calls your `SyncData`, collects everything you registered through `SyncData(key, ref value)` into that tray, then drops the tray into the `CampaignBehaviorDataStore` it keeps as a `[SaveableField(1)]` and writes the whole `Campaign` to disk. Load is the reverse: the manager prepares a tray with `IsLoading == true`, calls `SyncData`, fills your `ref` variables back by key, and discards the tray.
- It is **bucketed per behavior**. The underlying store is a `Dictionary<string, BehaviorSaveData>` keyed by `CampaignBehaviorBase.StringId`. So two different behaviors may freely use the same key (e.g. both call it `"_counter"`) with no interference; but **within one behavior** the key is the identity, and collisions are fatal (see Risks).
- The `IDataStore` instance you receive is **transient and valid only for that one call**. It is backed by the `internal` `CampaignBehaviorDataStore.BehaviorSaveData`; a mod can neither `new` one nor "fetch" a long-lived one from `Campaign`. `Campaign` has **no** `GetDataStore` / `DataStore` public member (its only data-store-shaped field is `CampaignTickCacheDataStore _tickData`, an unrelated per-tick cache).

## When to Use / When NOT to Use

**Use it (correct scenarios):**
- Override `SyncData(IDataStore dataStore)` in your `CampaignBehaviorBase` subclass and register every field that must survive a save with `SyncData("key", ref field)`. This is the **standard and only** entry point for persisting your mod's state.
- Use `IsSaving` / `IsLoading` to tell whether you are currently writing or reading, e.g. to rebuild in-memory references or recompute caches after a load.

**Do NOT do this:**
- Do **not** implement `IDataStore` yourself or `new` one up as a "global data container" for your mod. The engine only ever calls the `BehaviorSaveData` it builds internally; your implementation would never be touched.
- Do **not** stash the `dataStore` reference you receive into a field for later use. It is valid only inside that `SyncData` call; afterwards the tray is discarded or cleared, so touching it later is meaningless (and may hit another behavior's tray).
- Do **not** use it as a runtime "shared bus". To share state between behaviors, or between a behavior and the UI, use `Campaign.Current`, the various managers, or your own static/instance fields. `IDataStore` only exists at the save/load moment.
- **Correct alternatives:** mod persistence state → keep it as a field on your `CampaignBehaviorBase` subclass (or a `[SaveableField]` field) and register it in `SyncData`; runtime-shared state → a behavior instance field, a behavior fetched via `Campaign.Current.GetCampaignBehavior<T>()`, or the managers exposed by `Campaign`.

## Dependencies

- ↑ Upstream:
  - [Campaign](../../campaign/Campaign/) — the host of the whole campaign; `CampaignBehaviorManager` is its saveable child object and the `CampaignBehaviorDataStore` is written to disk together with the campaign.
  - [CampaignBehaviorBase](../CampaignBehaviorBase/) / [ICampaignBehavior](../ICampaignBehavior/) — your behavior receives this tray through `SyncData(IDataStore)`.
  - Save system: [SaveManager](../../save-system/SaveManager/) — `OnBeforeSaveEvent` triggers the write, `LoadBehaviorData` refills your behavior after `OnGameLoaded`.
  - [SaveableTypeDefiner](../../save-system/SaveableTypeDefiner/) — registers saveable types and the `LocalSaveId` metadata the object graph relies on.
- ↓ Downstream:
  - Every campaign behavior that overrides `SyncData` (vanilla `WorkshopsCampaignBehavior`, `VillagerCampaignBehavior`, `ViewDataTrackerCampaignBehavior`, etc. all use it).
  - Internal holders: `CampaignBehaviorManager` (keeps `CampaignBehaviorDataStore` as `[SaveableField(1)]`), and the save definer that registers `CampaignBehaviorDataStore` / `BehaviorSaveData` with the save type table.

## Risks

- **Lifetime is only inside the SyncData call:** the `dataStore` you get is the `BehaviorSaveData` built for this one save/load pass. Assigning it to a field and calling it later from a tick or event handler is undefined (usually an empty tray, or another behavior's tray). Persist via `SyncData`; access at runtime via your own behavior fields.
- **Duplicate keys abort the save:** the store is a `Dictionary<string, object>`, and during saving it calls `_records.Add(key, data)`. Because `Add` throws on a duplicate key, registering the **same key twice within one behavior during a save throws `ArgumentException` and aborts the save** — it does *not* silently overwrite. Give each field a unique, prefixed key (e.g. `"_myMod_counter"`). (During loading the lookup uses `TryGetValue`, so a missing key simply returns `false` rather than throwing.)
- **Cross-campaign / cross-version references:** the value you `SyncData` must be serializable and part of the save object graph (primitives, `MBObjectBase`-derived types that implement the save contract, standard containers, etc.). Storing a reference to something that only lives in this session's memory — or to a transient object outside the graph — makes save collection fail or returns `null` on load. On load, `SyncData` returning `false` means the key was absent from the save, so your `ref` variable keeps its default — always handle the "new save / old save missing a field" case.
- **Version evolution:** the save records the field's current type. If you later change a field's type (e.g. `int` to `List<int>`), an old save may fail to deserialize or throw. The safe approach is to **version the key** (e.g. `"_myMod_counter_v2"`) or tolerate the default in `SyncData`.
- **StringId decides the bucket:** the bucket key is `CampaignBehaviorBase.StringId` (by default the type name). On load, if no exact `StringId` match is found, the loader falls back to a "type name contains" match; so **do not let two behavior type names contain one another**, or loads may cross buckets. `Debug.FailedAssert` also fires if the same `StringId` is saved twice.
- **`IsSaving` / `IsLoading` are phase flags only:** do not branch game logic on them (e.g. "skip charging gold while saving"). They only tell you whether the current pass is writing or reading; the actual game state comes from the values you write into `ref`.
- **`LocalSaveId` misuse corrupts silently (attribute route):** when you persist members of a saveable type via `[SaveableField(short localSaveId)]` / `[SaveableProperty(short localSaveId)]` (registered through [SaveableTypeDefiner](../../save-system/SaveableTypeDefiner/)), the save system identifies each member by a `MemberTypeId` combining the type's class level and that `short LocalSaveId`. Reusing the same `LocalSaveId` for two different members within one type makes the loader write into the wrong field → silent data corruption; changing a member's `LocalSaveId` without a compatibility resolver makes old saves deserialize into the wrong (or a new) member. Keep each `LocalSaveId` unique within its type and stable across versions. `IDataStore.SyncData` itself does *not* use `LocalSaveId` — it matches by string key — so the key-versioning discipline above is your equivalent safety net there.

## Members

`IDataStore` has exactly three members, all centered on a single save/load sync.

### Data read/write

#### `bool SyncData<T>(string key, ref T data)`
Performs the two-way sync of `data` with the save by `key` — the **only** method you use to talk to the save.

- **While saving (`IsSaving == true`):** stores the current value of `data` under `key` and returns `true`. The engine then collects it into the current behavior's tray and writes it to disk.
- **While loading (`IsLoading == true`):** if `key` exists in the save, writes the stored value back into `data` (via `ref`) and returns `true`; if absent, leaves `data` at its default and returns `false`.
- **Side effect:** mutates `data` (on load). `T` must be serializable and belong to the save object graph.
- **When to call:** only inside your `CampaignBehaviorBase.SyncData(IDataStore dataStore)` override; never anywhere else.

```csharp
public override void SyncData(IDataStore dataStore)
{
    // Saving: writes _raidCount under "_raidCount"; Loading: restores it, or returns false if absent
    dataStore.SyncData("_raidCount", ref _raidCount);
    dataStore.SyncData("_trackedVillages", ref _trackedVillages);
}
```

### Lifecycle / phase flags

#### `bool IsSaving { get; }`
Whether this tray is in the **saving** phase (`true`) — "are we currently writing data into the save". Backed by `BehaviorSaveData._isSaving`.

#### `bool IsLoading { get; }`
Whether this tray is in the **loading** phase (`true`). Backed by `!_isSaving`, so on any given tray exactly one of `IsSaving` / `IsLoading` is true. Typical use: after load refills, rebuild in-memory references or recompute derived caches.

```csharp
public override void SyncData(IDataStore dataStore)
{
    dataStore.SyncData("_cachedHero", ref _cachedHero);
    if (dataStore.IsLoading)
    {
        // Load finished: rebuild non-saveable derived references
        RebuildDerivedReferences();
    }
}
```

## Example

### Example 1: Persisting a behavior's private state (the correct pattern)

```csharp
using TaleWorlds.CampaignSystem;
using System.Collections.Generic;

public class MyTrackerBehavior : CampaignBehaviorBase
{
    private int _raidCount;                       // field that must survive saves
    private List<string> _trackedVillageIds;

    public override void RegisterEvents()
    {
        // subscribe to campaign events as usual...
    }

    public override void SyncData(IDataStore dataStore)
    {
        // dataStore is the tray the engine hands you on save/load
        dataStore.SyncData("_raidCount", ref _raidCount);
        dataStore.SyncData("_trackedVillageIds", ref _trackedVillageIds);

        // after a load refills the fields, rebuild in-memory derived state
        if (dataStore.IsLoading)
        {
            _trackedVillageIds ??= new List<string>();
        }
    }
}
```

Once `MyTrackerBehavior` is registered through `CampaignGameStarter`, the engine calls its `SyncData` before saving (with `IsSaving`) and again after `OnGameLoaded` (with `IsLoading`), so `_raidCount` and `_trackedVillageIds` survive across saves.

### Example 2: What you must NOT do

```csharp
// ❌ Wrong 1: trying to "fetch" a long-lived IDataStore from Campaign — it does not exist
// IDataStore store = Campaign.Current.GetDataStore();   // no such API; won't compile/run

// ❌ Wrong 2: caching the SyncData argument into a field for use in a tick
private IDataStore _cachedStore;
public override void SyncData(IDataStore dataStore)
{
    _cachedStore = dataStore;   // this tray is discarded when the call ends; using it later is undefined
}

// ❌ Wrong 3: treating IDataStore as a runtime shared bus and reading/writing it in a daily tick
// it only exists at the save/load moment; you cannot reach it at runtime.
```

**Correct alternative:** for runtime sharing, keep the data on the behavior's own fields or on `Campaign.Current` / the managers; use `IDataStore` only inside `SyncData` to register persistence.

## Cross-version notes

- The `IDataStore` surface (`IsSaving` / `IsLoading` / `SyncData<T>`) is **identical** across `1.3.0`, `1.3.15`, and `1.4.5`; the `SyncData` semantics (write on save, refill on load, return hit/miss) are unchanged.
- The backing `CampaignBehaviorDataStore` and `CampaignBehaviorManager` (which holds the `[SaveableField(1)]` store and listens to `OnBeforeSaveEvent`) are stable across these versions — the standard "bucketed per behavior" save mechanism.
- When writing a cross-version mod, keep your `SyncData` values serializable, and add a version suffix to keys if you ever change a field's type, so old saves do not fail to deserialize.

## See Also

- ↑ Parent: [campaign-ext index](./)
- ↔ Sibling: [Campaign](../../campaign/Campaign/) — the campaign hub; [CampaignBehaviorBase](../CampaignBehaviorBase/) / [ICampaignBehavior](../ICampaignBehavior/) — where your behavior receives the `IDataStore`
- Related: [SaveManager](../../save-system/SaveManager/) — how the save system triggers the write and refill; [SaveableTypeDefiner](../../save-system/SaveableTypeDefiner/) — `LocalSaveId` and the saveable type table
