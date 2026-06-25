---
title: "ContainerLoadData"
description: "Auto-generated class reference for ContainerLoadData."
---
# ContainerLoadData

**Namespace:** TaleWorlds.SaveSystem.Load
**Module:** TaleWorlds.SaveSystem
**Type:** `internal class ContainerLoadData`
**Base:** none
**File:** `TaleWorlds.SaveSystem/Load/ContainerLoadData.cs`

## Overview

`ContainerLoadData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `ContainerLoadData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Id` | `public int Id { get; }` |
| `Target` | `public object Target { get; }` |
| `Context` | `public LoadContext Context { get; }` |
| `TypeDefinition` | `public ContainerDefinition TypeDefinition { get; }` |
| `ContainerHeaderLoadData` | `public ContainerHeaderLoadData ContainerHeaderLoadData { get; }` |

## Key Methods

### InitializeReaders
`public void InitializeReaders(SaveEntryFolder saveEntryFolder)`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings required by readers.

```csharp
// Obtain an instance of ContainerLoadData from the subsystem API first
ContainerLoadData containerLoadData = ...;
containerLoadData.InitializeReaders(saveEntryFolder);
```

### FillCreatedObject
`public void FillCreatedObject()`

**Purpose:** **Purpose:** Executes the FillCreatedObject logic.

```csharp
// Obtain an instance of ContainerLoadData from the subsystem API first
ContainerLoadData containerLoadData = ...;
containerLoadData.FillCreatedObject();
```

### Read
`public void Read()`

**Purpose:** **Purpose:** Reads the data or state of the this instance.

```csharp
// Obtain an instance of ContainerLoadData from the subsystem API first
ContainerLoadData containerLoadData = ...;
containerLoadData.Read();
```

### FillObject
`public void FillObject()`

**Purpose:** **Purpose:** Executes the FillObject logic.

```csharp
// Obtain an instance of ContainerLoadData from the subsystem API first
ContainerLoadData containerLoadData = ...;
containerLoadData.FillObject();
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
ContainerLoadData entry = ...;
```

## See Also

- [Area Index](../)