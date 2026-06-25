---
title: "ItemObjectViewExtensions"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ItemObjectViewExtensions`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ItemObjectViewExtensions

**Namespace:** TaleWorlds.MountAndBlade.View
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class ItemObjectViewExtensions`
**Area:** mission-ext

## Overview

`ItemObjectViewExtensions` lives in `TaleWorlds.MountAndBlade.View`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetCraftedMultiMesh
`public static MetaMesh GetCraftedMultiMesh(this ItemObject itemObject, bool needBatchedVersion)`

**Purpose:** Gets the current value of `crafted multi mesh`.

### GetMultiMeshCopy
`public static MetaMesh GetMultiMeshCopy(this ItemObject itemObject)`

**Purpose:** Gets the current value of `multi mesh copy`.

### GetMultiMeshCopyWithGenderData
`public static MetaMesh GetMultiMeshCopyWithGenderData(this ItemObject itemObject, bool isFemale, bool useSlimVersion, bool needBatchedVersion)`

**Purpose:** Gets the current value of `multi mesh copy with gender data`.

### GetScaledFrame
`public static MatrixFrame GetScaledFrame(this ItemObject itemObject, Mat3 rotationMatrix, MetaMesh metaMesh, float scaleFactor, Vec3 positionShift)`

**Purpose:** Gets the current value of `scaled frame`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
ItemObjectViewExtensions.GetCraftedMultiMesh(itemObject, false);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
