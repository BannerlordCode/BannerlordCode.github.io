---
title: "MBUnusedResourceManager"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBUnusedResourceManager`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBUnusedResourceManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MBUnusedResourceManager`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/MBUnusedResourceManager.cs`

## Overview

`MBUnusedResourceManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `MBUnusedResourceManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### SetMeshUsed
`public static void SetMeshUsed(string meshName)`

**Purpose:** Sets the value or state of `mesh used`.

### SetMaterialUsed
`public static void SetMaterialUsed(string meshName)`

**Purpose:** Sets the value or state of `material used`.

### SetBodyUsed
`public static void SetBodyUsed(string bodyName)`

**Purpose:** Sets the value or state of `body used`.

## Usage Example

```csharp
var manager = MBUnusedResourceManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)