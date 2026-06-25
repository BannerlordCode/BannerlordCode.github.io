---
title: "SaveContext"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SaveContext`
- [← Area / Back to save-system](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SaveContext

**Namespace:** TaleWorlds.SaveSystem.Save  
**Module:** TaleWorlds.SaveSystem  
**Type:** public class (implements `ISaveContext`)

The **write-side context** of the save system. `SaveManager.Save` creates a `SaveContext` internally; it walks the object graph, collects every object/container/string that needs serializing, and produces the final save data.

## Overview

`SaveContext` holds the root object and a `DefinitionContext` (type definition table). It maintains four core index tables:

| Field | Purpose |
|-------|---------|
| `_childObjects` / `_idsOfChildObjects` | All referenced saveable objects and their integer IDs |
| `_childContainers` / `_idsOfChildContainers` | Containers (lists/dicts/etc.) and their IDs |
| `_strings` / `_idsOfStrings` | String dedup table |

The collection phase uses `TWParallel.ForWithoutRenderThread` for parallelism — the critical path for save performance.

## Mental Model

Treat `SaveContext` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

## Main properties

| Name | Type | Description |
|------|------|-------------|
| `RootObject` | object | The root object of this save (usually game state) |
| `DefinitionContext` | DefinitionContext | Type/field definition context |

## Main static members

```csharp
public static SaveStatistics GetStatistics();
public static bool EnableSaveStatistics { get; }   // always false in release
```

`GetStatistics` returns type/container stats, meaningful only when `EnableSaveStatistics` is true.

## Key flow

1. **Construct**: `new SaveContext(definitionContext)`, initializing each index table with capacity 131072.
2. **Collect**: `CollectSaveDatas()` walks `_childObjects` / `_childContainers` in parallel, producing `SaveData` per object.
3. **Write**: `SaveManager` coordinates the driver to flush collected results to disk.

## Usage example

```csharp
SaveManager.InitializeGlobalDefinitionContext();
var defCtx = SaveManager.GetGlobalDefinitionContext();
var ctx = new SaveContext(defCtx);
// Usually you don't call this manually; SaveManager.Save wraps it.
```

> **For mod developers**
> In almost all cases you do **not** use `SaveContext` directly — just annotate fields with `[SaveableField]` and properties with `[SaveableProperty]`, and `SaveManager` / `SaveContext` handle serialization automatically. Touching this type directly is advanced usage.

## See also

- [SaveManager](./SaveManager)
- [LoadContext](./LoadContext)
- [SaveAttributes](./SaveAttributes)

## Usage Example

```csharp
var example = new SaveContext();
```
