---
title: "SaveManager"
description: "The static orchestrator of the TaleWorlds.SaveSystem: it builds the DefinitionContext, drives SaveContext/LoadContext, and hands the result to an ISaveDriver."
---
# SaveManager

**Namespace:** `TaleWorlds.SaveSystem`  
**Module:** `TaleWorlds.SaveSystem`  
**Type:** `public static class SaveManager`  
**Base:** `System.Object`  
**Source:** `TaleWorlds.SaveSystem/SaveManager.cs`

## Overview

`SaveManager` is the flow controller of the save system, not the save-file-name manager and not a replacement API for Behavior state. It:

- collects the save definitions in the current assembly through `InitializeGlobalDefinitionContext` and records definition errors;
- creates a `SaveContext` with `Save(object target, MetaData metaData, string saveName, ISaveDriver driver)`, collects the object graph, and hands it to the driver to write the file;
- creates a `LoadContext` with `Load(string saveName, ISaveDriver driver, bool loadAsLateInitialize)`, restores the root object, and returns a `LoadResult`;
- exposes diagnostic/protocol entry points such as `CheckSaveableTypes()`, `LoadMetaData()`, and the `.sav` extension.

Most mods should not replace the game's `ISaveDriver` or call the low-level contexts directly. A mod should first get its [SaveableTypeDefiner](../SaveableTypeDefiner/), field/property Attributes, and Behavior registration with [IDataStore](../../campaign/IDataStore) right, and let the game's existing save entry point handle them.

## Mental Model

Saving has four layers:

1. Type-definition layer: `DefinitionContext.FillWithCurrentTypes()` reads the definers; on failure a save directly produces a `SaveOutput` error.
2. Object-graph layer: `SaveContext.Save` collects members and references from `target`.
3. File-driver layer: `ISaveDriver.Save` writes `SaveData` to the real storage and may return asynchronously.
4. Restore layer: `LoadContext.Load` reads `LoadData`, then rebuilds the root object by definition; with late initialize it returns a callback initializer.

`SaveManager` sets `_isLoading` to false during saving, to true during loading, and sets the current `OperatingVersion`. These are phase states internal to the save system, not a "pause switch" for a mod's business logic.

## Key Members

| Member | Role |
| --- | --- |
| `SaveFileExtension` | Fixed at `"sav"` |
| `InitializeGlobalDefinitionContext()` | Creates and fills the global definition context, outputting definition errors |
| `CheckSaveableTypes()` | Scans fields/properties types carrying a Saveable attribute but with no definition in the current context |
| `Save(...)` | Builds the `SaveContext`, calls the driver to save, and returns `SaveOutput` |
| `LoadMetaData(...)` | Asks only the driver to read the save metadata |
| `Load(...)` | Builds the `LoadContext` and returns a `LoadResult` |
| `ShouldResolveConflicts()` | Reflects whether a load flow is currently in progress, for the conflict-resolution logic |

## Real Example: Validate, Save, and Load

This is the actual public call shape of `SaveManager` in the source. `ISaveDriver` and `MetaData` are normally provided by the game's save layer; a mod must not fake a driver to bypass the game's save UI.

```csharp
SaveManager.InitializeGlobalDefinitionContext();
List<Type> missingTypes = SaveManager.CheckSaveableTypes();

SaveOutput saveResult = SaveManager.Save(
    Campaign.Current,
    campaignMetaData,
    "my_campaign_slot",
    saveDriver);

if (saveResult != null && saveResult.Successful)
{
    LoadResult loadResult = SaveManager.Load("my_campaign_slot", saveDriver);
    if (loadResult != null && loadResult.Successful)
    {
        Campaign loadedCampaign = (Campaign)loadResult.RootObject;
    }
}
```

The key point of the example is not to save actively inside a Behavior, but to guarantee that the object graph of `Campaign.Current` and all mod types are defined. If you only add Behavior fields, use [IDataStore](../../campaign/IDataStore); if you add a class that can be referenced by multiple objects, then add an Attribute and definer for that class.

## Load Phase and Late Initialization

`Load` defaults to `loadAsLateInitialize: false`. When you pass `true`, a successful result carries a `LoadCallbackInitializator` that the caller runs at an appropriate game stage to execute the deferred `[LoadInitializationCallback]`. This pairs with `MBObjectBase`'s `OnBeforeLoad`, `PreAfterLoad`, and `AfterLoad`; do not assume every derived system has finished its final initialization the instant `Load` returns.

`LoadMetaData` only asks the driver and does not restore `RootObject`. `Save` may return a continuing state, because `ISaveDriver.Save` can complete asynchronously; the caller should handle the result from `SaveOutput` / the driver rather than immediately assuming the file is on disk.

## Risks and Corrupt-Save Boundaries

- **Definition errors block saving.** The errors collected by `InitializeGlobalDefinitionContext` make `Save` return a failure; check [SaveableTypeDefiner](../SaveableTypeDefiner/) and all container/member definitions, and do not swallow the error with try/catch and keep publishing.
- **The driver is not the definition layer.** `ISaveDriver` only handles metadata/data access; it will not fix a duplicated `LocalSaveId`, an unknown type, or an incompatible field.
- **Saving is an async boundary.** `ISaveDriver.Save` returns `Task<SaveResultWithMessage>`; the save result may be continuing or failed. Do not overwrite the old save or exit a critical state before the result succeeds.
- **Handle incompatible loads explicitly.** When `LoadResult` fails, the root object is null, or an old type does not match, do not feed a half-loaded object into the campaign tick.
- **Do not treat phase state as game state.** `ShouldResolveConflicts()` is only the current load flag; `OperatingVersion` is not a substitute for a mod's own version field.
- **Wrong late initialization.** Accessing a dependency object before the callback initializer runs produces null or order-dependent errors; put derived-reference restoration after an explicit `AfterLoad` / load-finished event.

## Cross-Version Notes

Both 1.3.15 and 1.4.5 provide `.sav`, the definition context, `Save`, `LoadMetaData`, `Load`, and the late-initialize parameter. Internal implementations and official type definitions grow over time; a cross-version mod must keep its own type ID, member ID, key, and field types compatible, and must not rely on the absolute numbering of the official type table.

## Dependencies

- Definitions: [SaveableTypeDefiner](../SaveableTypeDefiner/), [SaveableFieldAttribute](../SaveableFieldAttribute/), [SaveablePropertyAttribute](../SaveablePropertyAttribute/).
- Behavior: [IDataStore](../../campaign/IDataStore) is the correct entry point for a Behavior's private state.
- Object identity: [MBObjectManager](../../campaign-ext/MBObjectManager/) and [MBObjectBase](../../campaign-ext/MBObjectBase/) provide restorable object references.
- Campaign root: [Campaign](../../campaign/Campaign/) and its behavior data form the common `target` object graph.

- Parent: [save-system API](./)
- Sibling: [SaveableTypeDefiner](../SaveableTypeDefiner/) · [SaveableFieldAttribute](../SaveableFieldAttribute/)

## See Also

- [save-system API](./) — this bucket's index
- [SaveableTypeDefiner](../SaveableTypeDefiner/) — declaring your saveable types
- [IDataStore](../../campaign/IDataStore) — per-behavior save state
- [Campaign](../../campaign/Campaign/) — the common save target
