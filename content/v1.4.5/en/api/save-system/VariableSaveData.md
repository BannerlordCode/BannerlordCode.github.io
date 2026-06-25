---
title: "VariableSaveData"
description: "Auto-generated class reference for VariableSaveData."
---
# VariableSaveData

**Namespace:** TaleWorlds.SaveSystem.Save
**Module:** TaleWorlds.SaveSystem
**Type:** `internal abstract class VariableSaveData`
**Base:** none
**File:** `bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem.Save/VariableSaveData.cs`

## Overview

`VariableSaveData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `VariableSaveData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Context` | `public ISaveContext Context { get; }` |
| `MemberType` | `public SavedMemberType MemberType { get; }` |
| `Value` | `public object Value { get; }` |
| `MemberSaveId` | `public MemberTypeId MemberSaveId { get; }` |
| `TypeDefinition` | `public TypeDefinitionBase TypeDefinition { get; }` |

## Key Methods

### SaveTo
`public void SaveTo(IWriter writer)`

**Purpose:** Writes `to` to persistent storage or a stream.

```csharp
// Obtain an instance of VariableSaveData from the subsystem API first
VariableSaveData variableSaveData = ...;
variableSaveData.SaveTo(writer);
```

### GetDataSize
`public int GetDataSize()`

**Purpose:** Reads and returns the `data size` value held by the current object.

```csharp
// Obtain an instance of VariableSaveData from the subsystem API first
VariableSaveData variableSaveData = ...;
var result = variableSaveData.GetDataSize();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
VariableSaveData instance = ...;
```

## See Also

- [Area Index](../)