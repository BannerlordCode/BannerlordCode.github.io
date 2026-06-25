---
title: "ContainerHeaderLoadData"
description: "Auto-generated class reference for ContainerHeaderLoadData."
---
# ContainerHeaderLoadData

**Namespace:** TaleWorlds.SaveSystem.Load
**Module:** TaleWorlds.SaveSystem
**Type:** `public class ContainerHeaderLoadData`
**Base:** none
**File:** `bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem.Load/ContainerHeaderLoadData.cs`

## Overview

`ContainerHeaderLoadData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `ContainerHeaderLoadData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Id` | `public int Id { get; }` |
| `Target` | `public object Target { get; }` |
| `Context` | `public LoadContext Context { get; }` |
| `TypeDefinition` | `public ContainerDefinition TypeDefinition { get; }` |
| `SaveId` | `public SaveId SaveId { get; }` |
| `ElementCount` | `public int ElementCount { get; }` |
| `ContainerType` | `public ContainerType ContainerType { get; }` |

## Key Methods

### GetObjectTypeDefinition
`public bool GetObjectTypeDefinition()`

**Purpose:** Reads and returns the `object type definition` value held by the current object.

```csharp
// Obtain an instance of ContainerHeaderLoadData from the subsystem API first
ContainerHeaderLoadData containerHeaderLoadData = ...;
var result = containerHeaderLoadData.GetObjectTypeDefinition();
```

### CreateObject
`public void CreateObject()`

**Purpose:** Constructs a new `object` entity and returns it to the caller.

```csharp
// Obtain an instance of ContainerHeaderLoadData from the subsystem API first
ContainerHeaderLoadData containerHeaderLoadData = ...;
containerHeaderLoadData.CreateObject();
```

### InitialieReaders
`public void InitialieReaders(SaveEntryFolder saveEntryFolder)`

**Purpose:** Prepares the resources, state, or bindings required by `ialie readers`.

```csharp
// Obtain an instance of ContainerHeaderLoadData from the subsystem API first
ContainerHeaderLoadData containerHeaderLoadData = ...;
containerHeaderLoadData.InitialieReaders(saveEntryFolder);
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
ContainerHeaderLoadData entry = ...;
```

## See Also

- [Area Index](../)