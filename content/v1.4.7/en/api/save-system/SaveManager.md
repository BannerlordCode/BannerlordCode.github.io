---
title: "SaveManager"
description: "The static facade of the save system: builds the global type-definition context, reports which types are saveable, and runs the Save and Load flows over an ISaveDriver. Exposes the .sav file extension constant."
---
# SaveManager

**Namespace:** `TaleWorlds.SaveSystem`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public static class SaveManager`
**Base:** none (static class)
**Source:** `TaleWorlds.SaveSystem/SaveManager.cs` (declaration at line 14)

## Overview

`SaveManager` is the static face of `TaleWorlds.SaveSystem`. It holds no state of its own — every member is static and every byte of I/O is delegated to an `ISaveDriver` supplied by the caller. In normal play the save flow is driven from [Game](../../core-extra/Game): `Game.Save(...)` and `Game.LoadSaveGame(...)` are the player's-facing entry points, and they end up here. A mod reaches `SaveManager` directly when it needs to write or read save data somewhere the engine did not ask for — an export, an import, a test fixture.

The three things it does:

**Definition context.** `InitializeGlobalDefinitionContext()` builds the process-wide `DefinitionContext`, which is the mapping from each `[SaveableField]` / `[SaveableTypeDefiner]` declaration to the integer that represents it in a file. Every save and load depends on that numbering being identical to what the file was written with.

**Type introspection.** `CheckSaveableTypes()` returns the list of registered saveable types. It is the first thing to call when a field fails to round-trip: if the type is not in that list, no amount of correctness in your `SyncData` will help.

**The two flows.** `Save(object target, MetaData metaData, string saveName, ISaveDriver driver)` writes; `Load(saveName, driver)` and its `loadAsLateInitialize` overload read. `LoadMetaData(saveName, driver)` is the cheap third path — it reads only the metadata header, which is what a save-list UI needs and what makes listing saves affordable.

Two switches complete the picture. `ShouldResolveConflicts()` reports whether the loader should attempt to reconcile inconsistent type definitions — a cross-version troubleshooting tool, not a normal path. `SaveFileExtension` is `"sav"`.

## Mental Model

Read the save system as three stages: **define, write, read**, in that order, with the ordering enforced rather than merely conventional.

**Definition context first, and exactly once.** `InitializeGlobalDefinitionContext()` must run before any save or load, because it is what gives every saveable field a stable number. Calling it again rebuilds the table, and any previously written save stops resolving against it. In the engine this happens once during boot; a mod that boots the save system itself owns that responsibility.

**Write and read are symmetric, and the symmetry is the contract.** `Save` walks the object graph through [SaveContext](../SaveContext); `Load` rebuilds it through [LoadContext](../LoadContext). The field numbers are the join between them. A field that is written must be readable at the same number — that is why reordering `[SaveableField]` declarations is a breaking change, not a refactor.

**`loadAsLateInitialize` trades immediacy for safety.** With it set, behavior objects are restored after game initialisation rather than during it. That avoids running your restore code against a half-built campaign, at the cost of a longer window in which those fields still hold their default values. Code that reads its own saved fields immediately after `Load` returns needs to know which mode it is in.

**`ISaveDriver` is not optional.** Every entry point that touches storage takes one. It is the I/O abstraction that decides whether bytes land in a file, in memory, or somewhere else. There is no driver-free overload.

**`LoadMetaData` is not a cheap `Load`.** It is a genuinely different and much cheaper operation — header only. A save browser that calls `Load` per row is doing orders of magnitude more work than it needs to.

## When to Use / When Not To Use

- **Use** `LoadMetaData` to populate a save list: timestamp, version, anything in `MetaData`.
- **Use** `CheckSaveableTypes` to diagnose a field that will not round-trip.
- **Use** `Save` / `Load` for mod-owned data outside the engine's own save flow — export, import, fixtures.
- **Use** `SaveFileExtension` instead of a literal `"sav"`.
- **Do not** write the player's main save through `SaveManager.Save` from a mod. That bypasses the surrounding flow `Game.Save` drives.
- **Do not** call `InitializeGlobalDefinitionContext` a second time.
- **Do not** use `ShouldResolveConflicts` in production logic; it changes loader behaviour.
- **Do not** call `CheckSaveableTypes` from a tick or a draw path.

## Members

| Member | What it is for |
| --- | --- |
| `public const string SaveFileExtension = "sav"` | The save file extension. Use it for file-type checks instead of a string literal. |
| `static void InitializeGlobalDefinitionContext()` | Builds the global type-definition table. **Must precede every save and load, and must not be repeated** — a second call renumbers fields and breaks existing files. |
| `static List<Type> CheckSaveableTypes()` | Every registered saveable type. The first diagnostic when a field silently fails to persist. Scans the full registry, so it is a debugging call, not a loop-body call. |
| `static SaveOutput Save(object target, MetaData metaData, string saveName, ISaveDriver driver)` | Runs the write flow. `target` is the root object to serialise — normally the `Game` instance. `metaData` carries version and timestamp. `driver` decides where the bytes go. The returned `SaveOutput` carries success and error information. |
| `static LoadResult Load(string saveName, ISaveDriver driver)` | Runs the read flow and returns the loaded data. Feed the result to `Game.LoadSaveGame`. |
| `static LoadResult Load(string saveName, ISaveDriver driver, bool loadAsLateInitialize)` | Same, with behavior objects restored after game initialisation. Safer for code that reads the world during restore; longer window before those fields are populated. |
| `static MetaData LoadMetaData(string saveName, ISaveDriver driver)` | Reads **only** the metadata header. The cheap path for save-list UIs. Returns null when the save is not there. |
| `static bool ShouldResolveConflicts()` | Whether the loader should try to reconcile inconsistent type definitions. A cross-version troubleshooting switch, not a routine setting. |

## Examples

### Example 1: Build a save list from metadata only

Reading the header is far cheaper than loading each save, and the header is all a list needs.

```csharp
using System.Collections.Generic;
using TaleWorlds.SaveSystem;

public class MySaveListEntry
{
    public string DateText = "";
    public string VersionText = "";
}

// ISaveDriver is injected by the platform layer; file, memory and test
// implementations all satisfy it.
public static List<MySaveListEntry> BuildList(ISaveDriver driver)
{
    List<MySaveListEntry> rows = new List<MySaveListEntry>();

    foreach (string name in driver.GetSaveGameFileNames())
    {
        MetaData meta = SaveManager.LoadMetaData(name, driver);
        if (meta == null)
        {
            // No such save
            continue;
        }

        string rawDate;
        string rawVersion;

        // MetaData is a string-keyed bag and comes from a player-editable file
        MySaveListEntry row = new MySaveListEntry();
        row.DateText = meta.TryGetValue("SaveDate", out rawDate) ? rawDate : "unknown";
        row.VersionText = meta.TryGetValue("ApplicationVersion", out rawVersion) ? rawVersion : "unknown";
        rows.Add(row);
    }

    return rows;
}
```

### Example 2: Load with deferred behavior restoration

Pick this when your restore code reads the campaign world.

```csharp
using TaleWorlds.Core;
using TaleWorlds.SaveSystem;

public static bool TryRestore(GameManagerBase gameManager, string saveName, ISaveDriver driver, out Game game)
{
    game = null;

    // true: behaviors are restored after game initialisation, so they never
    // run against a half-built campaign
    LoadResult result = SaveManager.Load(saveName, driver, true);
    if (result == null)
    {
        return false;
    }

    game = Game.LoadSaveGame(result, gameManager);
    return game != null;
}
```

### Example 3: Diagnose a field that will not persist

Confirm registration before suspecting your own serialization code.

```csharp
using System.Collections.Generic;
using TaleWorlds.SaveSystem;

public static bool IsSaveable(string typeName)
{
    // The definition context must exist before the registry means anything
    SaveManager.InitializeGlobalDefinitionContext();

    List<System.Type> saveable = SaveManager.CheckSaveableTypes();

    foreach (System.Type type in saveable)
    {
        if (type.Name == typeName)
        {
            return true;
        }
    }

    // Not registered means the SaveableTypeDefiner never ran: the root cause
    // is registration, not the SyncData body
    return false;
}
```

## Risks and Boundaries

- **Ordering is a hard constraint.** `InitializeGlobalDefinitionContext()` before every save and load, never twice. A second call renumbers fields and existing files stop resolving.
- **`CheckSaveableTypes()` scans the whole registry.** It is a diagnostic; calling it per frame is a self-inflicted stall.
- **`ShouldResolveConflicts()` changes loader behaviour.** It is for diagnosing cross-version or cross-mod incompatibility and can mask the real failure. Do not depend on it in shipping logic.
- **Writing the main save from a mod bypasses the engine flow.** `Game.Save` drives the surrounding save events and metadata; going straight to `SaveManager.Save` skips them.
- **Deferred initialisation widens the default-value window.** With `loadAsLateInitialize` set, a behavior's fields are still default right after `Load` returns. Code that reads them immediately sees defaults.
- **`MetaData` comes from a file.** It is a string-keyed bag (`Add`, `TryGetValue`) and it is player-editable. Null-check it and parse defensively; never trust a version string blindly.
- **A driver is mandatory.** Every storage-touching method takes an `ISaveDriver`; in a tool environment without one these calls fail.
- **Single-threaded and native-backed.** Serialisation walks a large object graph and touches native resource references. Run it on the main thread inside the save or load flow, never from a background task.
- **Not everything is saveable.** Only types with a registered definer appear in `CheckSaveableTypes`, and only fields the definer covers are written.

## Dependencies

- **Upstream / providers**
  - [Game](../../core-extra/Game)'s `Save(...)` and `LoadSaveGame(...)` are the normal entry points that funnel into this class.
  - [MBSubModuleBase](../../core/MBSubModuleBase)'s save and load hooks are triggered by the flow this class runs.
- **Peers / downstream**
  - [SaveContext](../SaveContext) performs the writing side; [LoadContext](../LoadContext) performs the reading side. Field numbers must match on both.
  - [Campaign](../../campaign/Campaign)'s save handler pulls campaign objects into the graph, and [CampaignBehaviorBase](../../campaign/CampaignBehaviorBase)'s `SyncData` is driven by the data store these classes supply.
  - [MBObjectManager](../../campaign-ext/MBObjectManager)'s instance registry is rebuilt during load.

## See Also

- ↔ Siblings in this bucket: [SaveContext](../SaveContext) · [LoadContext](../LoadContext)
- ↔ Related: [Game](../../core-extra/Game) · [Campaign](../../campaign/Campaign) · [CampaignBehaviorBase](../../campaign/CampaignBehaviorBase) · [MBObjectManager](../../campaign-ext/MBObjectManager) · [Chinese twin](../../../../zh/api/save-system/SaveManager)