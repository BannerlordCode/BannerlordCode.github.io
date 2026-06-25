---
title: "Permission"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Permission`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Permission

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public enum Permission`
**Area:** mission-ext

## Overview

`Permission` lives in `TaleWorlds.MountAndBlade`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

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
Permission example = Permission.IsValid;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
