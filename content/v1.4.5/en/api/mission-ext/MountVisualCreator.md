---
title: "MountVisualCreator"
description: "Auto-generated class reference for MountVisualCreator."
---
# MountVisualCreator

**Namespace:** TaleWorlds.MountAndBlade.View
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MountVisualCreator`
**Base:** none
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View/MountVisualCreator.cs`

## Overview

`MountVisualCreator` lives in `TaleWorlds.MountAndBlade.View` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SetMaterialProperties
`public static void SetMaterialProperties(ItemObject mountItem, MetaMesh mountMesh, MountCreationKey key, ref uint maneMeshMultiplier)`

**Purpose:** **Purpose:** Assigns a new value to material properties and updates the object's internal state.

```csharp
// Static call; no instance required
MountVisualCreator.SetMaterialProperties(mountItem, mountMesh, key, maneMeshMultiplier);
```

### AddMountMesh
`public static MountVisualCreationOutput AddMountMesh(MBAgentVisuals agentVisual, ItemObject mountItem, ItemObject harnessItem, string mountCreationKeyStr, Agent agent = null)`

**Purpose:** **Purpose:** Adds mount mesh to the current collection or state.

```csharp
// Static call; no instance required
MountVisualCreator.AddMountMesh(agentVisual, mountItem, harnessItem, "example", null);
```

### SetHorseColors
`public static void SetHorseColors(MetaMesh horseMesh, MountCreationKey mountCreationKey)`

**Purpose:** **Purpose:** Assigns a new value to horse colors and updates the object's internal state.

```csharp
// Static call; no instance required
MountVisualCreator.SetHorseColors(horseMesh, mountCreationKey);
```

### ClearMountMesh
`public static void ClearMountMesh(GameEntity gameEntity)`

**Purpose:** **Purpose:** Removes all mount mesh from the this instance.

```csharp
// Static call; no instance required
MountVisualCreator.ClearMountMesh(gameEntity);
```

### AddMountMeshToEntity
`public static void AddMountMeshToEntity(GameEntity gameEntity, ItemObject mountItem, ItemObject harnessItem, string mountCreationKeyStr, out MountVisualCreationOutput mountVisualCreationOutput, Agent agent = null)`

**Purpose:** **Purpose:** Adds mount mesh to entity to the current collection or state.

```csharp
// Static call; no instance required
MountVisualCreator.AddMountMeshToEntity(gameEntity, mountItem, harnessItem, "example", mountVisualCreationOutput, null);
```

### AddMountMeshToEntity
`public static void AddMountMeshToEntity(GameEntity gameEntity, ItemObject mountItem, ItemObject harnessItem, string mountCreationKeyStr, Agent agent = null)`

**Purpose:** **Purpose:** Adds mount mesh to entity to the current collection or state.

```csharp
// Static call; no instance required
MountVisualCreator.AddMountMeshToEntity(gameEntity, mountItem, harnessItem, "example", null);
```

### AddMountMeshToAgentVisual
`public static void AddMountMeshToAgentVisual(MBAgentVisuals agentVisual, ItemObject mountItem, ItemObject harnessItem, string mountCreationKeyStr, Agent agent = null)`

**Purpose:** **Purpose:** Adds mount mesh to agent visual to the current collection or state.

```csharp
// Static call; no instance required
MountVisualCreator.AddMountMeshToAgentVisual(agentVisual, mountItem, harnessItem, "example", null);
```

## Usage Example

```csharp
MountVisualCreator.SetMaterialProperties(mountItem, mountMesh, key, maneMeshMultiplier);
```

## See Also

- [Area Index](../)