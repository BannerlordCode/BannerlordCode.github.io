---
title: "MemberSaveData"
description: "Auto-generated class reference for MemberSaveData."
---
# MemberSaveData

**Namespace:** TaleWorlds.SaveSystem.Save
**Module:** TaleWorlds.SaveSystem
**Type:** `internal abstract class MemberSaveData : VariableSaveData`
**Base:** `VariableSaveData`
**File:** `TaleWorlds.SaveSystem/Save/MemberSaveData.cs`

## Overview

`MemberSaveData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `MemberSaveData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ObjectSaveData` | `public ObjectSaveData ObjectSaveData { get; }` |

## Key Methods

### Initialize
`public abstract void Initialize(TypeDefinitionBase typeDefinition)`

**Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Obtain an instance of MemberSaveData from the subsystem API first
MemberSaveData memberSaveData = ...;
memberSaveData.Initialize(typeDefinition);
```

### InitializeAsCustomStruct
`public abstract void InitializeAsCustomStruct(int structId)`

**Purpose:** Prepares the resources, state, or bindings required by as custom struct.

```csharp
// Obtain an instance of MemberSaveData from the subsystem API first
MemberSaveData memberSaveData = ...;
memberSaveData.InitializeAsCustomStruct(0);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
MemberSaveData instance = ...;
```

## See Also

- [Area Index](../)