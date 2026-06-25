---
title: "PropertySaveData"
description: "Auto-generated class reference for PropertySaveData."
---
# PropertySaveData

**Namespace:** TaleWorlds.SaveSystem.Save
**Module:** TaleWorlds.SaveSystem
**Type:** `internal class PropertySaveData : MemberSaveData`
**Base:** `MemberSaveData`
**File:** `bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem.Save/PropertySaveData.cs`

## Overview

`PropertySaveData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `PropertySaveData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `PropertyDefinition` | `public PropertyDefinition PropertyDefinition { get; }` |
| `SaveId` | `public MemberTypeId SaveId { get; }` |

## Key Methods

### Initialize
`public override void Initialize(TypeDefinitionBase typeDefinition)`

**Purpose:** Prepares the resources, state, or bindings the current object needs before use.

```csharp
// Obtain an instance of PropertySaveData from the subsystem API first
PropertySaveData propertySaveData = ...;
propertySaveData.Initialize(typeDefinition);
```

### InitializeAsCustomStruct
`public override void InitializeAsCustomStruct(int structId)`

**Purpose:** Prepares the resources, state, or bindings required by `as custom struct`.

```csharp
// Obtain an instance of PropertySaveData from the subsystem API first
PropertySaveData propertySaveData = ...;
propertySaveData.InitializeAsCustomStruct(0);
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
PropertySaveData entry = ...;
```

## See Also

- [Area Index](../)