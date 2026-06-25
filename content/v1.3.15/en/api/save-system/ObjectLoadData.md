---
title: "ObjectLoadData"
description: "Auto-generated class reference for ObjectLoadData."
---
# ObjectLoadData

**Namespace:** TaleWorlds.SaveSystem.Load
**Module:** TaleWorlds.SaveSystem
**Type:** `public class ObjectLoadData`
**Base:** none
**File:** `TaleWorlds.SaveSystem/Load/ObjectLoadData.cs`

## Overview

`ObjectLoadData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `ObjectLoadData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Id` | `public int Id { get; }` |
| `Target` | `public object Target { get; }` |
| `Context` | `public LoadContext Context { get; }` |
| `TypeDefinition` | `public TypeDefinition TypeDefinition { get; }` |

## Key Methods

### GetDataBySaveId
`public object GetDataBySaveId(int localSaveId)`

**Purpose:** Reads and returns the data by save id value held by the this instance.

```csharp
// Obtain an instance of ObjectLoadData from the subsystem API first
ObjectLoadData objectLoadData = ...;
var result = objectLoadData.GetDataBySaveId(0);
```

### GetMemberValueBySaveId
`public object GetMemberValueBySaveId(int localSaveId)`

**Purpose:** Reads and returns the member value by save id value held by the this instance.

```csharp
// Obtain an instance of ObjectLoadData from the subsystem API first
ObjectLoadData objectLoadData = ...;
var result = objectLoadData.GetMemberValueBySaveId(0);
```

### GetFieldValueBySaveId
`public object GetFieldValueBySaveId(int localSaveId)`

**Purpose:** Reads and returns the field value by save id value held by the this instance.

```csharp
// Obtain an instance of ObjectLoadData from the subsystem API first
ObjectLoadData objectLoadData = ...;
var result = objectLoadData.GetFieldValueBySaveId(0);
```

### GetPropertyValueBySaveId
`public object GetPropertyValueBySaveId(int localSaveId)`

**Purpose:** Reads and returns the property value by save id value held by the this instance.

```csharp
// Obtain an instance of ObjectLoadData from the subsystem API first
ObjectLoadData objectLoadData = ...;
var result = objectLoadData.GetPropertyValueBySaveId(0);
```

### HasMember
`public bool HasMember(int localSaveId)`

**Purpose:** Determines whether the this instance already holds member.

```csharp
// Obtain an instance of ObjectLoadData from the subsystem API first
ObjectLoadData objectLoadData = ...;
var result = objectLoadData.HasMember(0);
```

### InitializeReaders
`public void InitializeReaders(SaveEntryFolder saveEntryFolder)`

**Purpose:** Prepares the resources, state, or bindings required by readers.

```csharp
// Obtain an instance of ObjectLoadData from the subsystem API first
ObjectLoadData objectLoadData = ...;
objectLoadData.InitializeReaders(saveEntryFolder);
```

### CreateStruct
`public void CreateStruct()`

**Purpose:** Constructs a new struct entity and returns it to the caller.

```csharp
// Obtain an instance of ObjectLoadData from the subsystem API first
ObjectLoadData objectLoadData = ...;
objectLoadData.CreateStruct();
```

### FillCreatedObject
`public void FillCreatedObject()`

**Purpose:** Executes the FillCreatedObject logic.

```csharp
// Obtain an instance of ObjectLoadData from the subsystem API first
ObjectLoadData objectLoadData = ...;
objectLoadData.FillCreatedObject();
```

### Read
`public void Read()`

**Purpose:** Reads the data or state of the this instance.

```csharp
// Obtain an instance of ObjectLoadData from the subsystem API first
ObjectLoadData objectLoadData = ...;
objectLoadData.Read();
```

### FillObject
`public void FillObject()`

**Purpose:** Executes the FillObject logic.

```csharp
// Obtain an instance of ObjectLoadData from the subsystem API first
ObjectLoadData objectLoadData = ...;
objectLoadData.FillObject();
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
ObjectLoadData entry = ...;
```

## See Also

- [Area Index](../)