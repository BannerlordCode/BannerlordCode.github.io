---
title: "LoadContext"
description: "The read-side deserialiser: rebuilds the object graph from the saved string, object and container tables by id, and offers raw-by-id lookups plus a cross-type conversion fallback. This is where load-ordering questions are answered."
---
# LoadContext

**Namespace:** `TaleWorlds.SaveSystem.Load`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public class LoadContext`
**Base:** none
**Source:** `TaleWorlds.SaveSystem/Load/LoadContext.cs` (declaration at line 11)

## Overview

`LoadContext` is the executor on the read side of the save system. [SaveManager](../SaveManager) constructs it with a `DefinitionContext` and an `ISaveDriver`, and it does two jobs: pull the three saved tables into memory, and rebuild the whole object graph out of them using the ids [SaveContext](../SaveContext) assigned on the way in.

The main call is `Load(LoadData loadData, bool loadAsLateInitialize)`. It returns `true` when the graph has been rebuilt and `RootObject` is set; `false` means the load failed, and there is no partial-success state to work with.

`loadAsLateInitialize` is the parameter that decides whether your behaviour code runs against a live world. With it set to `true`, behaviour objects are restored *after* game initialisation rather than during it, which avoids executing your restore code against a half-built campaign — at the cost of a longer window in which those fields still hold their default values.

Three raw-data accessors sit alongside it: `GetObjectWithId(int)`, `GetContainerWithId(int)` and `GetStringWithId(int)`. They return the loaded-data records, not reconstructed objects. They exist for debugging and custom decoding, and they are the reliable way to ask "did this thing actually make it into the file?" without going through an object that may itself have failed to deserialise.

`TryConvertType(Type sourceType, Type targetType, ref object data)` is the compatibility fallback. Saves record a type number plus a raw value; when the field type at the read site differs from the type in the file, this attempts a conversion instead of failing outright.

## Mental Model

The question a load is really asking is: **when is it safe to touch the world?** Everything here follows from that.

**`Load` returning true does not mean the world is ready.** The object graph exists and `RootObject` is set, but the `Game` instance has not finished initialising. `Game.Current` may still be null and `Campaign.Current` may be a partial object. This is the single most common source of "my code crashes only when loading a save".

**Deferred restoration trades a crash for a window.** With `loadAsLateInitialize` set, restore code runs against an initialised campaign. Without it, restore code runs earlier and may find the world half-built. Code that reads its own saved fields immediately after `Load` returns must account for the window: in deferred mode those fields are still defaults.

**`false` from `Load` is failure, not warning.** There is no middle state. Continuing past it defers the failure to somewhere with a much less informative message.

**`TryConvertType` fails quietly.** It returns `bool`. On `false`, `data` is left untouched — so a caller that casts without checking gets an `InvalidCastException` whose root cause is back at the write side, or a field that silently sits at its default value. **The return value has to be checked.**

**Field numbers are a permanent contract.** `LoadContext` interprets each position in an object row according to the `DefinitionContext`. Change the order of `[SaveableField]` declarations and the value that used to be a `float` is now read as a different type. `TryConvertType` rescues only the cases where a conversion exists; swapping one reference type for another is beyond it.

**Ids are per-load.** The ids handed to `GetObjectWithId` and `GetStringWithId` come from the file being read now. They are not stable across saves and must not be cached between loads.

**Raw records are not objects.** `GetObjectWithId` returns an `ObjectHeaderLoadData`. It does not deserialise, and it will not hand you something safe to call methods on.

## When to Use / When Not To Use

- **Use** indirectly, driven by `SaveManager.Load`; you do not drive it yourself in normal play.
- **Use** `GetObjectWithId` and friends to answer "is this in the file?" while diagnosing a missing field.
- **Use** `TryConvertType` deliberately when you know the field type changed between versions.
- **Use** `loadAsLateInitialize` whenever your restore code reads campaign state.
- **Do not** construct a `LoadContext` by hand outside the load flow.
- **Do not** assume `Campaign.Current` is usable the moment `Load` returns.
- **Do not** cast after `TryConvertType` without checking its return value.
- **Do not** cache ids across loads.
- **Do not** store a `LoadContext` in a static field.

## Members

### State and construction

| Member | What it is for |
| --- | --- |
| `public LoadContext(DefinitionContext definitionContext, ISaveDriver driver)` | Constructor. Called by the load flow; a hand-built instance lacks the state that flow establishes. |
| `object RootObject { get; private set; }` | The reconstructed root, normally the `Game`. Set once `Load` succeeds. |
| `DefinitionContext DefinitionContext { get; private set; }` | The type-number table. Must match the one used when writing, or positions are read as the wrong types. |
| `ISaveDriver Driver { get; private set; }` | The I/O abstraction the load data came from. |

### Execution

| Member | What it is for |
| --- | --- |
| `bool Load(LoadData loadData, bool loadAsLateInitialize)` | Rebuilds the object graph from `loadData` and sets `RootObject`. `false` means failure. `loadAsLateInitialize` defers behaviour restoration until after game initialisation. |

### Type conversion

| Member | What it is for |
| --- | --- |
| `static bool TryConvertType(Type sourceType, Type targetType, ref object data)` | Attempts to convert a raw saved value to the target type, in place. **Check the return value**: on `false`, `data` is unchanged and the caller's field will end up as its default. This is the only compatibility aid for a field whose type changed between versions. |

### Raw lookups by id

These return the loaded-data records, not reconstructed objects.

| Member | What it is for |
| --- | --- |
| `ObjectHeaderLoadData GetObjectWithId(int id)` | The raw record for an object id. **The reliable way to check whether an object is present in the file** — unlike touching the reconstructed object, which may be null because deserialisation failed. |
| `ContainerHeaderLoadData GetContainerWithId(int id)` | The raw record for a container id. |
| `string GetStringWithId(int id)` | The raw string for a string id. Valid only for this load. |

## Examples

### Example 1: Load with deferred restoration when your code reads the world

```csharp
using TaleWorlds.Core;
using TaleWorlds.SaveSystem;

public static bool TryRestore(GameManagerBase gameManager, string saveName, ISaveDriver driver, out Game game)
{
    game = null;

    // true: behaviours are restored after game initialisation, so restore code
    // never runs against a half-built campaign
    LoadResult result = SaveManager.Load(saveName, driver, true);
    if (result == null)
    {
        return false;
    }

    // The graph exists here; the game instance does not finish initialising yet
    game = Game.LoadSaveGame(result, gameManager);
    return game != null;
}
```

### Example 2: Ask whether an object actually reached the file

When a restored field is a default value, check the file before you suspect your own code.

```csharp
using TaleWorlds.SaveSystem;
using TaleWorlds.SaveSystem.Load;

public static bool IsPresentInSave(LoadContext context, int objectId)
{
    // Raw data, not a reconstructed object: null here means it never got written
    ObjectHeaderLoadData raw = context.GetObjectWithId(objectId);
    return raw != null;
}
```

### Example 3: Handle a conversion failure instead of casting through it

The cast after a failed conversion is what turns a compatibility problem into a crash.

```csharp
using System;
using TaleWorlds.SaveSystem.Load;

public static int ReadCountWithFallback(object rawValue, int fallback)
{
    object value = rawValue;

    // Silent failure is the whole hazard: data is untouched when this is false
    if (!LoadContext.TryConvertType(rawValue.GetType(), typeof(int), ref value))
    {
        Console.WriteLine("save field type mismatch: " + rawValue.GetType().Name);
        return fallback;
    }

    return (int)value;
}
```

### Example 4: Keep field numbers stable across a version change

The read side cannot repair a reordering; it can only fail more clearly.

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.SaveSystem;

public class MyLedgerBehavior : CampaignBehaviorBase
{
    private float _runningTotal;
    private int _entryCount;

    public MyLedgerBehavior() : base("MyMod.Ledger")
    {
    }

    public override void SyncData(IDataStore dataStore)
    {
        // Both directions use this same call; the field order here is the
        // contract with every save written so far. Appending is safe;
        // reordering or removing is not.
        dataStore.SyncData("MyMod.RunningTotal", ref _runningTotal);
        dataStore.SyncData("MyMod.EntryCount", ref _entryCount);
    }
}
```

## Risks and Boundaries

- **`false` from `Load` is failure.** There is no partial success. Continuing defers the crash to a less legible place.
- **The default-value window.** With `loadAsLateInitialize` set, behaviour fields are still defaults right after `Load` returns. Code that reads them immediately sees defaults and will treat them as real values.
- **`TryConvertType` fails silently.** `data` is unchanged on `false`. Casting regardless produces an `InvalidCastException` whose cause is back at the write side.
- **Field numbering cannot be revised.** Reordering `[SaveableField]` declarations makes old files read as the wrong types. `TryConvertType` covers convertible cases only; reference-type swaps are beyond it.
- **Ids are per-load.** `GetObjectWithId` / `GetStringWithId` arguments do not survive into another load.
- **Raw records are not objects.** `GetObjectWithId` does not deserialise and will not hand back something you can call methods on.
- **`RootObject` existence is not readiness.** It is set on success, but how much of the world inside it has finished restoring depends on the deferred flag and on the game type.
- **Single-use lifetime.** Like its counterpart, this context is valid for one load cycle; a static field points at the previous load's tables.
- **Single-threaded and native-backed.** Deserialisation walks the whole graph and touches native resource references. Main thread, inside the load flow.

## Dependencies

- **Upstream / providers**
  - [SaveManager](../SaveManager) constructs this class and injects the `ISaveDriver`.
  - [Game](../../core-extra/Game)'s `LoadSaveGame(loadResult, gameManager)` takes over once the graph is rebuilt.
- **Peers / downstream**
  - [SaveContext](../SaveContext) is the paired writer; field numbering must match exactly.
  - [Campaign](../../campaign/Campaign) rebuilds the campaign world after loading; its save handler takes part.
  - [CampaignBehaviorBase](../../campaign/CampaignBehaviorBase)'s `SyncData(IDataStore)` is driven by the data store backed by this context.
  - [MBObjectManager](../../campaign-ext/MBObjectManager)'s instance registry is rebuilt during the load.

## See Also

- ↔ Siblings in this bucket: [SaveManager](../SaveManager) · [SaveContext](../SaveContext)
- ↔ Related: [Game](../../core-extra/Game) · [Campaign](../../campaign/Campaign) · [CampaignBehaviorBase](../../campaign/CampaignBehaviorBase) · [Chinese twin](../../../../zh/api/save-system/LoadContext)