---
title: "SaveManager"
description: "The static entry point of the Bannerlord save system: save, load, metadata, and serialization of SaveableField-marked objects."
---
# SaveManager

**Namespace:** TaleWorlds.SaveSystem  
**Module:** TaleWorlds.SaveSystem  
**Type:** `public static class SaveManager`  
**Base:** —  
**File:** `TaleWorlds.SaveSystem/SaveManager.cs`

## Overview

`SaveManager` is the **top-level static API** of Bannerlord's save system. It serializes any `object` (usually the `Campaign` instance or your custom data root) into a byte stream and writes it to storage, and reads/archives it back.

Core responsibilities:

- `Save(...)`: writes an object to persistent storage.
- `Load(...)` / `LoadMetaData(...)`: reads a save and its metadata.
- `InitializeGlobalDefinitionContext()`: registers all `[SaveableType]` / `[SaveableRootClass]` definitions at startup.
- `CheckSaveableTypes()`: validates that types marked with `[SaveableField]` / `[SaveableProperty]` are serialization-safe.

For mod developers, the most common touch point is **not** calling `SaveManager.Save` directly—the engine calls it automatically from the main-menu save/load UI. What you need to do is make your custom data **saveable**.

## Mental Model

Think of `SaveManager` as the **object → binary save** converter:

- It is a **static class**; all methods are called directly via `SaveManager.Method()`.
- It does not care “what this object represents”; it only cares whether the object and its fields can be safely serialized.
- Your job: mark data that must persist across saves with `[SaveableField]`, `[SaveableProperty]`, or `[SaveableRootClass]`, and keep the data types simple (primitives, strings, enums, `MBObjectBase` references, `List<T>`, `Dictionary<K,V>`, etc.).
- Do not override the `Campaign` save flow; instead, attach mod data to a `CampaignBehaviorBase.SyncData` method or a custom `SaveableData` class.

## Core Methods

### `public static void InitializeGlobalDefinitionContext()`
Called during module initialization to scan and register all saveable types. Usually invoked by the engine; mod developers rarely need to call it manually.

```csharp
// Typically called by the engine during SubModule initialization
SaveManager.InitializeGlobalDefinitionContext();
```

### `public static SaveOutput Save(object target, MetaData metaData, string saveName, ISaveDriver driver)`
Serializes `target` and writes it. `saveName` has no extension; `driver` decides where to write (e.g., file system).

```csharp
var metaData = new MetaData();
metaData.Add("ModVersion", MySubModule.Version);
SaveOutput output = SaveManager.Save(
    Campaign.Current,
    metaData,
    "MySave",
    new FileDriver("MySave"));

if (output.Successful)
{
    Console.WriteLine($"Saved {output.BytesWritten} bytes");
}
```

> Note: In mods you rarely save the whole `Campaign` yourself. More often you let the engine call save when the player clicks Save.

### `public static LoadResult Load(string saveName, ISaveDriver driver)`
Reads the specified save. The returned `LoadResult` contains the deserialized root object and metadata.

```csharp
LoadResult result = SaveManager.Load("MySave", new FileDriver("MySave"));
if (result.Successful)
{
    Campaign loadedCampaign = (Campaign)result.Root;
    MetaData meta = result.MetaData;
}
```

### `public static MetaData LoadMetaData(string saveName, ISaveDriver driver)`
Reads only the save metadata without deserializing the full object. Useful for save-game lists.

```csharp
MetaData meta = SaveManager.LoadMetaData("MySave", new FileDriver("MySave"));
string modVersion = meta.GetValue("ModVersion");
```

### `public static List<Type> CheckSaveableTypes()`
Checks whether all saveable types satisfy serialization constraints (e.g., field types supported). Useful when debugging save crashes.

```csharp
List<Type> badTypes = SaveManager.CheckSaveableTypes();
foreach (Type t in badTypes)
{
    Console.WriteLine($"Saveable type issue: {t.FullName}");
}
```

## Typical Usage Examples

### Example 1: Make custom data persist with the Campaign save

```csharp
public class MyModSaveData
{
    [SaveableField(0)]
    public int PlayerKills;

    [SaveableField(1)]
    public List<string> DefeatedBossIds = new List<string>();
}

public class MyCampaignBehavior : CampaignBehaviorBase
{
    [SaveableField(0)]
    private MyModSaveData _data = new MyModSaveData();

    public override void SyncData(IDataStore dataStore)
    {
        dataStore.SyncData("MyModData", ref _data);
    }

    public void RecordKill(string bossId)
    {
        _data.PlayerKills++;
        _data.DefeatedBossIds.Add(bossId);
    }
}
```

> `SyncData` automatically hands `_data` to `SaveManager` on save and restores it on load.

### Example 2: Safely access save version inside a behavior

```csharp
public override void OnGameLoaded(CampaignGameStarter campaignGameStarter)
{
    if (_data == null)
    {
        _data = new MyModSaveData();
    }
}
```

## Cross-Version Notes

- v1.3.0: Basic `[SaveableField]` exists, but `[SaveableProperty]` and `AutoGeneratedSaveManager` support is weaker.
- v1.3.15: Introduces `AutoGeneratedSaveManager`, which can auto-generate save contracts for simple types.
- v1.4.5: SaveSystem is further split; the `ISaveDriver` interface is more stable, but the internal binary format may change. Cross-version mods should rely on `SyncData` and `SaveableData` rather than direct binary access.

## See Also

- [AutoGeneratedSaveManager](../AutoGeneratedSaveManager/) — auto-generate save contracts
- [CampaignBehaviorBase](../../campaign-ext/CampaignBehaviorBase/) — common `SyncData` hook
- [Campaign](../../campaign/Campaign/) — the root object of the campaign world
- Save architecture deep dive: [Architecture > Save System](../../../architecture/save-system/)
