---
title: "SpawnerEntityEditorHelper"
description: "Auto-generated class reference for SpawnerEntityEditorHelper."
---
# SpawnerEntityEditorHelper

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SpawnerEntityEditorHelper`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/SpawnerEntityEditorHelper.cs`

## Overview

`SpawnerEntityEditorHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `SpawnerEntityEditorHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsValid` | `public bool IsValid { get; }` |
| `SpawnedGhostEntity` | `public GameEntity SpawnedGhostEntity { get; }` |

## Key Methods

### Permission
`public struct Permission(PermissionType permission, Axis axis)`

**Purpose:** Executes the Permission logic.

```csharp
// Obtain an instance of SpawnerEntityEditorHelper from the subsystem API first
SpawnerEntityEditorHelper spawnerEntityEditorHelper = ...;
var result = spawnerEntityEditorHelper.Permission(permission, axis);
```

### GetGhostEntityOrChild
`public GameEntity GetGhostEntityOrChild(string name)`

**Purpose:** Reads and returns the ghost entity or child value held by the this instance.

```csharp
// Obtain an instance of SpawnerEntityEditorHelper from the subsystem API first
SpawnerEntityEditorHelper spawnerEntityEditorHelper = ...;
var result = spawnerEntityEditorHelper.GetGhostEntityOrChild("example");
```

### Tick
`public void Tick(float dt)`

**Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of SpawnerEntityEditorHelper from the subsystem API first
SpawnerEntityEditorHelper spawnerEntityEditorHelper = ...;
spawnerEntityEditorHelper.Tick(0);
```

### GivePermission
`public void GivePermission(string childName, Permission permission, Action<float> onChangeFunction)`

**Purpose:** Executes the GivePermission logic.

```csharp
// Obtain an instance of SpawnerEntityEditorHelper from the subsystem API first
SpawnerEntityEditorHelper spawnerEntityEditorHelper = ...;
spawnerEntityEditorHelper.GivePermission("example", permission, onChangeFunction);
```

### ChangeStableChildMatrixFrameAndApply
`public void ChangeStableChildMatrixFrameAndApply(string childName, MatrixFrame matrixFrame, bool updateTriad = true)`

**Purpose:** Executes the ChangeStableChildMatrixFrameAndApply logic.

```csharp
// Obtain an instance of SpawnerEntityEditorHelper from the subsystem API first
SpawnerEntityEditorHelper spawnerEntityEditorHelper = ...;
spawnerEntityEditorHelper.ChangeStableChildMatrixFrameAndApply("example", matrixFrame, false);
```

### GetPrefabName
`public string GetPrefabName()`

**Purpose:** Reads and returns the prefab name value held by the this instance.

```csharp
// Obtain an instance of SpawnerEntityEditorHelper from the subsystem API first
SpawnerEntityEditorHelper spawnerEntityEditorHelper = ...;
var result = spawnerEntityEditorHelper.GetPrefabName();
```

### SetupGhostMovement
`public void SetupGhostMovement(string pathName)`

**Purpose:** Assigns a new value to up ghost movement and updates the object's internal state.

```csharp
// Obtain an instance of SpawnerEntityEditorHelper from the subsystem API first
SpawnerEntityEditorHelper spawnerEntityEditorHelper = ...;
spawnerEntityEditorHelper.SetupGhostMovement("example");
```

### SetEnableAutoGhostMovement
`public void SetEnableAutoGhostMovement(bool enableAutoGhostMovement)`

**Purpose:** Assigns a new value to enable auto ghost movement and updates the object's internal state.

```csharp
// Obtain an instance of SpawnerEntityEditorHelper from the subsystem API first
SpawnerEntityEditorHelper spawnerEntityEditorHelper = ...;
spawnerEntityEditorHelper.SetEnableAutoGhostMovement(false);
```

## Usage Example

```csharp
SpawnerEntityEditorHelper.Initialize();
```

## See Also

- [Area Index](../)