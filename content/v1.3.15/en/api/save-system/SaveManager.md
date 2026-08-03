---
title: "SaveManager"
description: "The static save-system coordinator: build DefinitionContext, run SaveContext/LoadContext, and hand results to an ISaveDriver."
---
# SaveManager

**Namespace:** `TaleWorlds.SaveSystem`  
**Module:** `TaleWorlds.SaveSystem`  
**Type:** `public static class SaveManager`  
**Base:** `System.Object`  
**Source:** `TaleWorlds.SaveSystem/SaveManager.cs`

## Overview

`SaveManager` coordinates the save pipeline. It is not a save-file-name registry and not a replacement for behavior persistence. It:

- builds the current definition context with `InitializeGlobalDefinitionContext` and reports definition errors;
- runs `Save(object target, MetaData metaData, string saveName, ISaveDriver driver)`, which creates a `SaveContext`, collects the object graph, and delegates storage;
- runs `Load(string saveName, ISaveDriver driver, bool loadAsLateInitialize)`, which creates a `LoadContext` and returns a restored root;
- exposes `CheckSaveableTypes`, `LoadMetaData`, and the `.sav` extension for diagnostics and protocol work.

Most mods should not replace the game's `ISaveDriver` or call the low-level contexts directly. Define [SaveableTypeDefiner](../SaveableTypeDefiner/), member Attributes, and [IDataStore](../../campaign-ext/IDataStore/) behavior state; let the game's existing save entry point handle them.

## Mental Model

The pipeline has four layers:

1. Definition layer: `DefinitionContext.FillWithCurrentTypes()` discovers definers; errors cause save failure.
2. Object-graph layer: `SaveContext.Save` collects members and references from `target`.
3. Driver layer: `ISaveDriver.Save` writes `SaveData` to storage and can complete asynchronously.
4. Restore layer: `LoadContext.Load` reads `LoadData` and reconstructs the root; late initialization can return a callback initializer.

During save, `SaveManager` sets its loading flag false; during load it sets it true and tracks the current `OperatingVersion`. These are save-system phase states, not gameplay pause switches.

## Key members

| Member | Role |
| --- | --- |
| `SaveFileExtension` | fixed to `"sav"` |
| `InitializeGlobalDefinitionContext()` | create/fill the global definition context and print errors |
| `CheckSaveableTypes()` | find field/property value types that have Attributes but no current definition |
| `Save(...)` | build `SaveContext`, call the driver, and return `SaveOutput` |
| `LoadMetaData(...)` | ask the driver for metadata without restoring the root |
| `Load(...)` | build `LoadContext` and return `LoadResult` |
| `ShouldResolveConflicts()` | report whether the save system is currently loading |

## Real example: validate, save, and load

This is the public call shape implemented by `SaveManager`. The game normally supplies `ISaveDriver` and `MetaData`; a mod should not fake a driver to bypass the game's save UI.

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

The important point is not to save from a behavior manually; it is to ensure the `Campaign.Current` object graph and every mod type have definitions. For behavior fields, use [IDataStore](../../campaign-ext/IDataStore/); for a reusable saveable class, add member Attributes and a definer.

## Load phases and late initialization

`Load` defaults to `loadAsLateInitialize: false`. With `true`, a successful result can include a `LoadCallbackInitializator` for deferred `[LoadInitializationCallback]` methods. This works with [MBObjectBase](../../campaign-ext/MBObjectBase/)'s `OnBeforeLoad`, `PreAfterLoad`, and `AfterLoad`; do not assume every derived system is final the instant `Load` returns.

`LoadMetaData` only asks the driver and does not restore `RootObject`. `Save` can return a continuing result because `ISaveDriver.Save` can be asynchronous. The caller must handle `SaveOutput` and the driver result rather than assuming the file is already durable.

## Risks and crash boundaries

- **Definition errors block saving.** Errors collected during `InitializeGlobalDefinitionContext` cause `Save` to return a failure. Fix [SaveableTypeDefiner](../SaveableTypeDefiner/) and missing member/container definitions instead of swallowing the error.
- **The driver is not the definition layer.** `ISaveDriver` stores metadata/data; it cannot fix duplicate `LocalSaveId`, unknown types, or incompatible members.
- **Saving is asynchronous.** `ISaveDriver.Save` returns `Task<SaveResultWithMessage>`; output can be continuing or failed. Do not replace an older save or tear down critical state before success.
- **Handle load incompatibility.** A failed `LoadResult`, null root, or type mismatch must not be sent into campaign ticks as a half-restored world.
- **Phase state is not gameplay state.** `ShouldResolveConflicts()` reports the current load phase; `OperatingVersion` is not a substitute for the mod's own persisted version field.
- **Late initialization ordering.** Accessing dependent objects before the callback initializer runs creates null/order failures. Restore derived references from an explicit `AfterLoad` or load-complete phase.

## Cross-version notes

Both 1.3.15 and 1.4.5 expose `.sav`, definition-context initialization, `Save`, `LoadMetaData`, `Load`, and the late-initialize parameter. Official definitions grow between versions; keep a mod's type IDs, member IDs, behavior keys, and field types compatible instead of relying on absolute official table numbers.

## Dependencies and navigation

- Definitions: [SaveableTypeDefiner](../SaveableTypeDefiner/), [SaveableFieldAttribute](../SaveableFieldAttribute/), and [SaveablePropertyAttribute](../SaveablePropertyAttribute/).
- Behavior state: [IDataStore](../../campaign-ext/IDataStore/) is the correct behavior-private route.
- Object identity: [MBObjectManager](../../campaign-ext/MBObjectManager/) and [MBObjectBase](../../campaign-ext/MBObjectBase/) provide restorable object references.
- Campaign root: [Campaign](../../campaign/Campaign/) and its behavior data form a common `target` graph.

- Parent: [save-system API](./)
- Siblings: [SaveableTypeDefiner](../SaveableTypeDefiner/) · [SaveableFieldAttribute](../SaveableFieldAttribute/)
