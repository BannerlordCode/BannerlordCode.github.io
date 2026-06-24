<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MountVisualCreator`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MountVisualCreator

**Namespace:** TaleWorlds.MountAndBlade.View
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MountVisualCreator`
**Area:** mission-ext

## Overview

`MountVisualCreator` lives in `TaleWorlds.MountAndBlade.View`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SetMaterialProperties
`public static void SetMaterialProperties(ItemObject mountItem, MetaMesh mountMesh, MountCreationKey key, ref uint maneMeshMultiplier)`

**Purpose:** Sets the value or state of `material properties`.

### AddMountMesh
`public static MountVisualCreationOutput AddMountMesh(MBAgentVisuals agentVisual, ItemObject mountItem, ItemObject harnessItem, string mountCreationKeyStr, Agent agent = null)`

**Purpose:** Adds `mount mesh` to the current collection or state.

### SetHorseColors
`public static void SetHorseColors(MetaMesh horseMesh, MountCreationKey mountCreationKey)`

**Purpose:** Sets the value or state of `horse colors`.

### ClearMountMesh
`public static void ClearMountMesh(GameEntity gameEntity)`

**Purpose:** Handles logic related to `clear mount mesh`.

### AddMountMeshToEntity
`public static void AddMountMeshToEntity(GameEntity gameEntity, ItemObject mountItem, ItemObject harnessItem, string mountCreationKeyStr, out MountVisualCreationOutput mountVisualCreationOutput, Agent agent = null)`

**Purpose:** Adds `mount mesh to entity` to the current collection or state.

### AddMountMeshToEntity
`public static void AddMountMeshToEntity(GameEntity gameEntity, ItemObject mountItem, ItemObject harnessItem, string mountCreationKeyStr, Agent agent = null)`

**Purpose:** Adds `mount mesh to entity` to the current collection or state.

### AddMountMeshToAgentVisual
`public static void AddMountMeshToAgentVisual(MBAgentVisuals agentVisual, ItemObject mountItem, ItemObject harnessItem, string mountCreationKeyStr, Agent agent = null)`

**Purpose:** Adds `mount mesh to agent visual` to the current collection or state.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
MountVisualCreator.SetMaterialProperties(mountItem, mountMesh, key, maneMeshMultiplier);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
