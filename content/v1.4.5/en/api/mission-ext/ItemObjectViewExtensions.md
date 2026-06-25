---
title: "ItemObjectViewExtensions"
description: "Auto-generated class reference for ItemObjectViewExtensions."
---
# ItemObjectViewExtensions

**Namespace:** TaleWorlds.MountAndBlade.View
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class ItemObjectViewExtensions`
**Base:** none
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View/ItemObjectViewExtensions.cs`

## Overview

`ItemObjectViewExtensions` lives in `TaleWorlds.MountAndBlade.View` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetCraftedMultiMesh
`public static MetaMesh GetCraftedMultiMesh(this ItemObject itemObject, bool needBatchedVersion)`

**Purpose:** **Purpose:** Reads and returns the crafted multi mesh value held by the this instance.

```csharp
// Static call; no instance required
ItemObjectViewExtensions.GetCraftedMultiMesh(itemObject, false);
```

### GetMultiMeshCopy
`public static MetaMesh GetMultiMeshCopy(this ItemObject itemObject)`

**Purpose:** **Purpose:** Reads and returns the multi mesh copy value held by the this instance.

```csharp
// Static call; no instance required
ItemObjectViewExtensions.GetMultiMeshCopy(itemObject);
```

### GetMultiMeshCopyWithGenderData
`public static MetaMesh GetMultiMeshCopyWithGenderData(this ItemObject itemObject, bool isFemale, bool useSlimVersion, bool needBatchedVersion)`

**Purpose:** **Purpose:** Reads and returns the multi mesh copy with gender data value held by the this instance.

```csharp
// Static call; no instance required
ItemObjectViewExtensions.GetMultiMeshCopyWithGenderData(itemObject, false, false, false);
```

### GetScaledFrame
`public static MatrixFrame GetScaledFrame(this ItemObject itemObject, Mat3 rotationMatrix, MetaMesh metaMesh, float scaleFactor, Vec3 positionShift)`

**Purpose:** **Purpose:** Reads and returns the scaled frame value held by the this instance.

```csharp
// Static call; no instance required
ItemObjectViewExtensions.GetScaledFrame(itemObject, rotationMatrix, metaMesh, 0, positionShift);
```

## Usage Example

```csharp
ItemObjectViewExtensions.GetCraftedMultiMesh(itemObject, false);
```

## See Also

- [Area Index](../)