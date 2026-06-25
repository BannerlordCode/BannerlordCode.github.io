---
title: "SaveId"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SaveId`
- [← Area / Back to save-system](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SaveId

**Namespace:** TaleWorlds.SaveSystem.Definition
**Module:** TaleWorlds.SaveSystem
**Type:** `public abstract class SaveId`
**Area:** save-system

## Overview

`SaveId` lives in `TaleWorlds.SaveSystem.Definition`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.SaveSystem.Definition` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetStringId
`public abstract string GetStringId()`

**Purpose:** Gets the current value of `string id`.

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

### Equals
`public override bool Equals(object obj)`

**Purpose:** Handles logic related to `equals`.

### WriteTo
`public abstract void WriteTo(IWriter writer)`

**Purpose:** Handles logic related to `write to`.

### ReadSaveIdFrom
`public static SaveId ReadSaveIdFrom(IReader reader)`

**Purpose:** Handles logic related to `read save id from`.

### GetSizeInBytes
`public abstract int GetSizeInBytes()`

**Purpose:** Gets the current value of `size in bytes`.

## Usage Example

```csharp
var implementation = new CustomSaveId();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-save)
