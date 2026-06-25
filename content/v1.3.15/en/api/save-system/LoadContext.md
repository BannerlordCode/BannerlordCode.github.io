---
title: "LoadContext"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LoadContext`
- [← Area / Back to save-system](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LoadContext

**Namespace:** TaleWorlds.SaveSystem.Load  
**Module:** TaleWorlds.SaveSystem  
**Type:** public class

The **read-side context** of the save system. `SaveManager.Load` creates a `LoadContext` internally; it deserializes headers, objects, and containers from save data and rebuilds the full object graph.

## Overview

`LoadContext` holds a `DefinitionContext` (type definition table) and an `ISaveDriver` (file I/O). Loading happens in three steps:

1. **Read headers**: `ArchiveDeserializer` parses object/container/string counts and header data from `loadData.GameData.Header`.
2. **Create objects**: iterate `ObjectHeaderLoadData`, creating empty objects per definition (ID 0 is the root).
3. **Fill objects**: read field values and populate each object (supports deferred init via `loadAsLateInitialize`).

## Mental Model

Treat `LoadContext` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

## Main properties

| Name | Type | Description |
|------|------|-------------|
| `DefinitionContext` | DefinitionContext | Type/field definition context |
| `Driver` | ISaveDriver | Underlying file I/O driver |

## Main methods

```csharp
public LoadContext(DefinitionContext definitionContext, ISaveDriver driver);

// Runs the full load flow; loadAsLateInitialize defers callbacks
public bool Load(LoadData loadData, bool loadAsLateInitialize);
```

## Usage example

```csharp
var loadResult = SaveManager.Load("MySave", fileDriver);
if (loadResult.Success)
{
    var game = loadResult.RootObject;  // root object rebuilt by LoadContext
}
```

> **For mod developers**
> Like `SaveContext`, `LoadContext` is managed internally by `SaveManager` and not usually instantiated by mods. Understanding it helps when debugging save compatibility issues (e.g. missing fields during version migration).

## See also

- [SaveManager](./SaveManager)
- [SaveContext](./SaveContext)
- [SaveAttributes](./SaveAttributes)

## Usage Example

```csharp
var example = new LoadContext();
```
