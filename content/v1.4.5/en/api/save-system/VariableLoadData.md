---
title: "VariableLoadData"
description: "Auto-generated class reference for VariableLoadData."
---
# VariableLoadData

**Namespace:** TaleWorlds.SaveSystem.Load
**Module:** TaleWorlds.SaveSystem
**Type:** `internal abstract class VariableLoadData`
**Base:** none
**File:** `bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem.Load/VariableLoadData.cs`

## Overview

`VariableLoadData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `VariableLoadData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Context` | `public LoadContext Context { get; }` |
| `MemberSaveId` | `public MemberTypeId MemberSaveId { get; }` |
| `SavedMemberType` | `public SavedMemberType SavedMemberType { get; }` |
| `Data` | `public object Data { get; }` |

## Key Methods

### Read
`public void Read()`

**Purpose:** Reads the data or state of the current object.

```csharp
// Obtain an instance of VariableLoadData from the subsystem API first
VariableLoadData variableLoadData = ...;
variableLoadData.Read();
```

### SetCustomStructData
`public void SetCustomStructData(object customStructObject)`

**Purpose:** Assigns a new value to `custom struct data` and updates the object's internal state.

```csharp
// Obtain an instance of VariableLoadData from the subsystem API first
VariableLoadData variableLoadData = ...;
variableLoadData.SetCustomStructData(customStructObject);
```

### GetDataToUse
`public object GetDataToUse()`

**Purpose:** Reads and returns the `data to use` value held by the current object.

```csharp
// Obtain an instance of VariableLoadData from the subsystem API first
VariableLoadData variableLoadData = ...;
var result = variableLoadData.GetDataToUse();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
VariableLoadData instance = ...;
```

## See Also

- [Area Index](../)