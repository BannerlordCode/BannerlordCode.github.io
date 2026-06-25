---
title: "WeaponComponentViewExtensions"
description: "Auto-generated class reference for WeaponComponentViewExtensions."
---
# WeaponComponentViewExtensions

**Namespace:** TaleWorlds.MountAndBlade.View
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class WeaponComponentViewExtensions`
**Base:** none
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View/WeaponComponentViewExtensions.cs`

## Overview

`WeaponComponentViewExtensions` lives in `TaleWorlds.MountAndBlade.View` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetFlyingMeshCopy
`public static MetaMesh GetFlyingMeshCopy(this WeaponComponentData weaponComponentData, ItemObject item)`

**Purpose:** Reads and returns the `flying mesh copy` value held by the current object.

```csharp
// Static call; no instance required
WeaponComponentViewExtensions.GetFlyingMeshCopy(weaponComponentData, item);
```

### GetFlyingMeshIfExists
`public static MetaMesh GetFlyingMeshIfExists(this WeaponComponentData weaponComponentData, ItemObject item)`

**Purpose:** Reads and returns the `flying mesh if exists` value held by the current object.

```csharp
// Static call; no instance required
WeaponComponentViewExtensions.GetFlyingMeshIfExists(weaponComponentData, item);
```

## Usage Example

```csharp
WeaponComponentViewExtensions.GetFlyingMeshCopy(weaponComponentData, item);
```

## See Also

- [Area Index](../)