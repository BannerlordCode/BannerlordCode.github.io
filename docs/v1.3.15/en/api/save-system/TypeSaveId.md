<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TypeSaveId`
- [← Area / Back to save-system](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TypeSaveId

**Namespace:** TaleWorlds.SaveSystem.Definition
**Module:** TaleWorlds.SaveSystem
**Type:** `public class TypeSaveId : SaveId`
**Base:** `SaveId`
**Area:** save-system

## Overview

`TypeSaveId` lives in `TaleWorlds.SaveSystem.Definition`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.SaveSystem.Definition` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Id` | `public int Id { get; }` |

## Key Methods

### GetStringId
`public override string GetStringId()`

**Purpose:** Gets the current value of `string id`.

### WriteTo
`public override void WriteTo(IWriter writer)`

**Purpose:** Handles logic related to `write to`.

### ReadFrom
`public static TypeSaveId ReadFrom(IReader reader)`

**Purpose:** Handles logic related to `read from`.

### GetSizeInBytes
`public override int GetSizeInBytes()`

**Purpose:** Gets the current value of `size in bytes`.

## Usage Example

```csharp
// First obtain a TypeSaveId instance from game state, then call one of its public methods
var value = new TypeSaveId();
value.GetStringId();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-save)
