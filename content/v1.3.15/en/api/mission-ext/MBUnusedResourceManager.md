---
title: "MBUnusedResourceManager"
description: "Auto-generated class reference for MBUnusedResourceManager."
---
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

**Purpose:** Assigns a new value to mesh used and updates the object's internal state.

```csharp
// Static call; no instance required
MBUnusedResourceManager.SetMeshUsed("example");
```

### SetMaterialUsed
`public static void SetMaterialUsed(string meshName)`

**Purpose:** Assigns a new value to material used and updates the object's internal state.

```csharp
// Static call; no instance required
MBUnusedResourceManager.SetMaterialUsed("example");
```

### SetBodyUsed
`public static void SetBodyUsed(string bodyName)`

**Purpose:** Assigns a new value to body used and updates the object's internal state.

```csharp
// Static call; no instance required
MBUnusedResourceManager.SetBodyUsed("example");
```

## Usage Example

```csharp
var manager = MBUnusedResourceManager.Current;
```

## See Also

- [Area Index](../)