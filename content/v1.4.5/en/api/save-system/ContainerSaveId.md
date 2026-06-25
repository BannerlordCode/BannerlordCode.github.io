---
title: "ContainerSaveId"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ContainerSaveId`
- [← Area / Back to save-system](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ContainerSaveId

**Namespace:** TaleWorlds.SaveSystem.Definition
**Module:** TaleWorlds.SaveSystem
**Type:** `public class ContainerSaveId : SaveId`
**Base:** `SaveId`
**File:** `Bannerlord.Source/bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem.Definition/ContainerSaveId.cs`

## Overview

`ContainerSaveId` lives in `TaleWorlds.SaveSystem.Definition` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.SaveSystem.Definition` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ContainerType` | `public ContainerType ContainerType { get; set; }` |
| `KeyId` | `public SaveId KeyId { get; set; }` |
| `ValueId` | `public SaveId ValueId { get; set; }` |

## Key Methods

### GetStringId
`public override string GetStringId()`

**Purpose:** Gets the current value of `string id`.

### WriteTo
`public override void WriteTo(IWriter writer)`

**Purpose:** Handles logic related to `write to`.

### ReadFrom
`public static ContainerSaveId ReadFrom(IReader reader)`

**Purpose:** Handles logic related to `read from`.

### GetSizeInBytes
`public override int GetSizeInBytes()`

**Purpose:** Gets the current value of `size in bytes`.

## Usage Example

```csharp
var value = new ContainerSaveId();
value.GetStringId();
```

## See Also

- [Complete Class Catalog](../catalog)