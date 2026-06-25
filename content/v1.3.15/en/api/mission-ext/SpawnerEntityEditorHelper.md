---
title: "SpawnerEntityEditorHelper"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SpawnerEntityEditorHelper`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SpawnerEntityEditorHelper

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SpawnerEntityEditorHelper`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/SpawnerEntityEditorHelper.cs`

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

### GetGhostEntityOrChild
`public GameEntity GetGhostEntityOrChild(string name)`

**Purpose:** Gets the current value of `ghost entity or child`.

### Tick
`public void Tick(float dt)`

**Purpose:** Handles logic related to `tick`.

### GivePermission
`public void GivePermission(string childName, SpawnerEntityEditorHelper.Permission permission, Action<float> onChangeFunction)`

**Purpose:** Handles logic related to `give permission`.

### ChangeStableChildMatrixFrameAndApply
`public void ChangeStableChildMatrixFrameAndApply(string childName, MatrixFrame matrixFrame, bool updateTriad = true)`

**Purpose:** Handles logic related to `change stable child matrix frame and apply`.

### GetPrefabName
`public string GetPrefabName()`

**Purpose:** Gets the current value of `prefab name`.

### SetupGhostMovement
`public void SetupGhostMovement(string pathName)`

**Purpose:** Sets the value or state of `up ghost movement`.

### SetEnableAutoGhostMovement
`public void SetEnableAutoGhostMovement(bool enableAutoGhostMovement)`

**Purpose:** Sets the value or state of `enable auto ghost movement`.

## Usage Example

```csharp
SpawnerEntityEditorHelper.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)