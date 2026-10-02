---
title: "SaveContext"
description: "The write-side serialiser: flattens the object graph into a string table, an object table and a container table while assigning stable object and string ids. This is why a behavior's SyncData only needs a string key and a ref field."
---
# SaveContext

**Namespace:** `TaleWorlds.SaveSystem.Save`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public class SaveContext : ISaveContext`
**Base:** none; implements `TaleWorlds.SaveSystem.ISaveContext`
**Source:** `TaleWorlds.SaveSystem/Save/SaveContext.cs` (declaration at line 12)

## Overview

`SaveContext` is the executor on the write side of the save system. [SaveManager](../SaveManager) constructs it inside the `Save` flow with a `DefinitionContext`, and it walks the object graph and produces three flat tables held in `SaveData`:

- a **string table**, where every distinct string is stored once and referenced by id — `AddOrGetStringId(string text)` allocates and de-duplicates;
- an **object table**, one row per serialised object, carrying its type number and field values, with references between objects resolved through object ids;
- a **container table**, holding the contents of collections and dictionaries.

This three-table layout explains the API that every Bannerlord mod uses: `dataStore.SyncData("Key", ref myField)`. The call takes a string and a `ref` field, and no type information at all. The type information comes from the `DefinitionContext` numbering registered by the saveable type definers, and the string key becomes a string-table id.

Alongside it sits the nested `SaveStatistics` struct, which reports per-type and per-container object counts and byte sizes, and four size fields — `HeaderSize`, `StringSize`, `ObjectSize`, `ContainerSize` — that break the written output into four measurable parts. Together they answer the question every mod author eventually asks: *why is my save 40 MB?*

## Mental Model

`SaveContext` exists only inside a single save operation, and three properties of it drive almost every decision.

**It is not yours to construct.** The constructor takes a `DefinitionContext` and that is it — the string table, the root object and the accumulated state all come from the surrounding flow. `new SaveContext(definitionContext)` compiles and produces an incomplete save, because the environment `SaveManager.Save` builds is not something you can reconstruct by hand. Treat `SaveContext` as a parameter you receive, never as a field you own.

**Ids are scoped to one serialisation.** `GetObjectId(object)`, `GetContainerId(object)` and `GetStringId(string)` return numbers meaningful only inside the current save. Persisting them is meaningless — next time, the same `Hero` has a different number. They are for debugging and for the extension points inside the flow, not for identity.

**Errors travel out through `out`, not exceptions.** `Save(object target, MetaData metaData, out string errorMessage)` reports failure by filling `errorMessage`. Ignoring it means continuing to operate on a partially written structure.

**Bloat is not strings.** Because the string table is de-duplicated, writing the same string a thousand times costs one copy. A save that grows is growing in objects or containers. `GetStatistics()` and the four size fields are the only way to tell which, and the answer is almost always "objects".

**`DefinitionContext` is immutable once supplied.** It determines what every field number means. Changing the order of `[SaveableField]` declarations, or the numbering a `[SaveableTypeDefiner]` assigns, silently invalidates every existing save — and no amount of runtime handling repairs it.

**The behavior-side mirror.** When a behavior's `SyncData(IDataStore dataStore)` runs, the `IDataStore` is a thin view over a `SaveContext` on write and a `LoadContext` on read. The same call shape serves both directions. That is why the same field list must appear in one `SyncData` body: the write side and the read side are the same code path.

## When to Use / When Not To Use

- **Use** through `SyncData` to declare the fields you want persisted; that is the supported path.
- **Use** `GetStatistics()` and the four size fields to find out what is inflating a save.
- **Use** the id lookups inside save-flow extension points, where you know the objects are already being serialised.
- **Do not** construct a `SaveContext` yourself.
- **Do not** ignore `errorMessage`.
- **Do not** treat `GetObjectId` as a test for "has this object been saved" — an unserialised object has no meaningful value.
- **Do not** persist ids across saves.
- **Do not** hold a `SaveContext` or its `SaveData` in a static field.

## Members

### State and construction

| Member | What it is for |
| --- | --- |
| `public SaveContext(DefinitionContext definitionContext)` | Constructor. Called by the save flow, not by mods — the surrounding tables and root object come from the flow, not from here. |
| `object RootObject { get; private set; }` | The root of this serialisation, normally the `Game` instance. |
| `GameData SaveData { get; private set; }` | The three tables being written: strings, objects, containers. |
| `DefinitionContext DefinitionContext { get; private set; }` | The type-number table. Fixed for the life of the context; it defines what every field number means. |

### Id allocation

| Member | What it is for |
| --- | --- |
| `int AddOrGetStringId(string text)` | Adds a string to the de-duplicated table and returns its id. The same text always yields the same id, which is why repeated strings cost nothing. |
| `int GetObjectId(object target)` | The object's id **if it has been serialised**. For an object that has not been, the value is not meaningful — this is not a "is it saved" test. |
| `int GetContainerId(object target)` | The same for containers. |
| `int GetStringId(string target)` | The id of an already-registered string, without adding one. |
| `static int GetStringSizeInBytes(string text)` | Estimated byte cost of a string in a save. Use it to attribute bloat. |

### Execution

| Member | What it is for |
| --- | --- |
| `bool Save(object target, MetaData metaData, out string errorMessage)` | The write-side main entry. **Failures arrive through `errorMessage`, not as exceptions** — check it before continuing. |
| `static SaveStatistics GetStatistics()` | A snapshot of per-type and per-container counts and sizes for this serialisation. |
| `override string ToString()` | A readable diagnostic rendering of the context. |

### `SaveStatistics` (nested struct)

| Member | What it is for |
| --- | --- |
| `public SaveStatistics(Dictionary<string, ValueTuple<int,int,int,long>> typeStatistics, Dictionary<string, ValueTuple<int,int,int,int,long>> containerStatistics)` | Builds the snapshot from the two internal tables. |
| `ValueTuple<int, int, int, long> GetObjectCounts(string key)` | Object counts and size for one type key. The first tool when a save grows. |
| `ValueTuple<int, int, int, int, long> GetContainerCounts(string key)` | Container counts and size for one container key. |
| `long GetContainerSize(string key)` | Total byte size of one container type. |
| `List<string> GetTypeKeys()` | All type keys present in the statistics. |
| `List<string> GetContainerKeys()` | All container keys present in the statistics. |

### Output size breakdown

These four fields describe how large each section of the written file is, so a before-and-after comparison localises growth immediately.

| Member | What it is for |
| --- | --- |
| `int HeaderSize` | Bytes in the file header. |
| `int StringSize` | Bytes in the string table. |
| `int ObjectSize` | Bytes in the object table. |
| `int ContainerSize` | Bytes in the container table. |

## Examples

### Example 1: Locate what is inflating a save

Four numbers and a per-type breakdown, straight from the serialiser's own accounting.

```csharp
using TaleWorlds.Core;
using TaleWorlds.SaveSystem.Save;

public static void ReportSaveShape()
{
    SaveContext.SaveStatistics stats = SaveContext.GetStatistics();

    // Which of the four sections grew?
    Debug.Print("header=" + stats.HeaderSize
                 + " string=" + stats.StringSize
                 + " object=" + stats.ObjectSize
                 + " container=" + stats.ContainerSize);

    foreach (string key in stats.GetTypeKeys())
    {
        var counts = stats.GetObjectCounts(key);
        Debug.Print(key + " objectCount=" + counts.Item1);
    }

    foreach (string containerKey in stats.GetContainerKeys())
    {
        Debug.Print(containerKey + " bytes=" + stats.GetContainerSize(containerKey));
    }
}
```

### Example 2: One SyncData body, both directions

The write side lands in a `SaveContext`, the read side in a `LoadContext`. Both go through this single method, so both fields must be listed here.

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.SaveSystem;

public class MyVisitedSettlementsBehavior : CampaignBehaviorBase
{
    private int _visits;
    private string _lastSettlementId;

    public MyVisitedSettlementsBehavior() : base("MyMod.VisitedSettlements")
    {
    }

    public override void RegisterEvents()
    {
        CampaignEvents.SettlementEntered.AddNonSerializedListener(this, HandleSettlementEntered);
    }

    public override void SyncData(IDataStore dataStore)
    {
        // IDataStore exposes SyncData<T>(string, ref T) plus IsSaving / IsLoading.
        // Which direction this runs in is decided by the flow, not by this code.
        dataStore.SyncData("MyMod.Visits", ref _visits);
        dataStore.SyncData("MyMod.LastSettlement", ref _lastSettlementId);
    }

    private void HandleSettlementEntered(MobileParty party, Settlement settlement, Hero hero)
    {
        _visits++;
        _lastSettlementId = settlement.StringId;
    }
}
```

### Example 3: Measure a single string's cost before adding it to a hot loop

De-duplication means repeated strings are free — so measure the *distinct* ones.

```csharp
using TaleWorlds.SaveSystem.Save;

public static int Measure(string candidate)
{
    // Same string many times: one copy in the table, so this is the marginal
    // cost of introducing it at all, not the cost per write
    return SaveContext.GetStringSizeInBytes(candidate);
}
```

## Risks and Boundaries

- **The constructor is not a mod entry point.** A hand-built `SaveContext` lacks the tables and root object the flow supplies, and produces an incomplete save.
- **`errorMessage` must be checked.** Failures are reported through `out`, not thrown. Ignoring it means carrying on with a damaged structure.
- **Ids are valid for one serialisation only.** `GetObjectId` / `GetStringId` values differ next time. Persisting them is meaningless.
- **`GetObjectId` says nothing about unsaved objects.** It is not an "is this in the save" predicate.
- **Save size is global.** One more behaviour, one more `[SaveableField]`, makes *every* save bigger. `GetStatistics()` is the only measurement.
- **`DefinitionContext` is the compatibility contract.** Reordering saveable fields or changing definer numbering invalidates existing saves, and that failure is not recoverable at runtime.
- **Single-use lifetime.** Holding the context or its `SaveData` in a static field leaves it pointing at the previous save's tables.
- **Single-threaded and native-backed.** The walk touches the whole object graph including native resource references. Main thread, inside the save flow.
- **Base class is `object`.** There is nothing to inherit from if you want shared behaviour; compose instead.

## Dependencies

- **Upstream / providers**
  - [SaveManager](../SaveManager) constructs this class inside the `Save` flow and supplies the `DefinitionContext`.
  - [Game](../../core-extra/Game)'s `Save(...)` is the player-facing entry point that reaches it.
- **Peers / downstream**
  - [LoadContext](../LoadContext) is the paired reader; field numbers must agree on both sides.
  - [Campaign](../../campaign/Campaign)'s save handler pulls campaign objects into the graph.
  - [CampaignBehaviorBase](../../campaign/CampaignBehaviorBase)'s `SyncData(IDataStore)` is driven by the data store backed by this context.
  - [MBObjectManager](../../campaign-ext/MBObjectManager)'s object table is referenced during serialisation.

## See Also

- ↔ Siblings in this bucket: [SaveManager](../SaveManager) · [LoadContext](../LoadContext)
- ↔ Related: [Game](../../core-extra/Game) · [Campaign](../../campaign/Campaign) · [CampaignBehaviorBase](../../campaign/CampaignBehaviorBase) · [Chinese twin](../../../../zh/api/save-system/SaveContext)