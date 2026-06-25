---
title: "FieldSaveData"
description: "Auto-generated class reference for FieldSaveData."
---
# FieldSaveData

**Namespace:** TaleWorlds.SaveSystem.Save
**Module:** TaleWorlds.SaveSystem
**Type:** `internal class FieldSaveData : MemberSaveData`
**Base:** `MemberSaveData`
**File:** `TaleWorlds.SaveSystem/Save/FieldSaveData.cs`

## Overview

`FieldSaveData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `FieldSaveData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `FieldDefinition` | `public FieldDefinition FieldDefinition { get; }` |
| `SaveId` | `public MemberTypeId SaveId { get; }` |

## Key Methods

### Initialize
`public override void Initialize(TypeDefinitionBase typeDefinition)`

**Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Obtain an instance of FieldSaveData from the subsystem API first
FieldSaveData fieldSaveData = ...;
fieldSaveData.Initialize(typeDefinition);
```

### InitializeAsCustomStruct
`public override void InitializeAsCustomStruct(int structId)`

**Purpose:** Prepares the resources, state, or bindings required by as custom struct.

```csharp
// Obtain an instance of FieldSaveData from the subsystem API first
FieldSaveData fieldSaveData = ...;
fieldSaveData.InitializeAsCustomStruct(0);
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
FieldSaveData entry = ...;
```

## See Also

- [Area Index](../)