---
title: "ObjectHeaderLoadData"
description: "Auto-generated class reference for ObjectHeaderLoadData."
---
# ObjectHeaderLoadData

**Namespace:** TaleWorlds.SaveSystem.Load
**Module:** TaleWorlds.SaveSystem
**Type:** `public class ObjectHeaderLoadData`
**Base:** none
**File:** `TaleWorlds.SaveSystem/Load/ObjectHeaderLoadData.cs`

## Overview

`ObjectHeaderLoadData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `ObjectHeaderLoadData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Id` | `public int Id { get; }` |
| `LoadedObject` | `public object LoadedObject { get; }` |
| `Target` | `public object Target { get; }` |
| `PropertyCount` | `public short PropertyCount { get; }` |
| `ChildStructCount` | `public short ChildStructCount { get; }` |
| `TypeDefinition` | `public TypeDefinition TypeDefinition { get; }` |
| `Context` | `public LoadContext Context { get; }` |
| `SaveId` | `public SaveId SaveId { get; }` |

## Key Methods

### InitialieReaders
`public void InitialieReaders(SaveEntryFolder saveEntryFolder)`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings required by ialie readers.

```csharp
// Obtain an instance of ObjectHeaderLoadData from the subsystem API first
ObjectHeaderLoadData objectHeaderLoadData = ...;
objectHeaderLoadData.InitialieReaders(saveEntryFolder);
```

### CreateObject
`public void CreateObject()`

**Purpose:** **Purpose:** Constructs a new object entity and returns it to the caller.

```csharp
// Obtain an instance of ObjectHeaderLoadData from the subsystem API first
ObjectHeaderLoadData objectHeaderLoadData = ...;
objectHeaderLoadData.CreateObject();
```

### AdvancedResolveObject
`public void AdvancedResolveObject(MetaData metaData, ObjectLoadData objectLoadData)`

**Purpose:** **Purpose:** Executes the AdvancedResolveObject logic.

```csharp
// Obtain an instance of ObjectHeaderLoadData from the subsystem API first
ObjectHeaderLoadData objectHeaderLoadData = ...;
objectHeaderLoadData.AdvancedResolveObject(metaData, objectLoadData);
```

### ResolveObject
`public void ResolveObject()`

**Purpose:** **Purpose:** Executes the ResolveObject logic.

```csharp
// Obtain an instance of ObjectHeaderLoadData from the subsystem API first
ObjectHeaderLoadData objectHeaderLoadData = ...;
objectHeaderLoadData.ResolveObject();
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
ObjectHeaderLoadData entry = ...;
```

## See Also

- [Area Index](../)