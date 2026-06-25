---
title: "CompositeComponent"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CompositeComponent`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CompositeComponent

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class CompositeComponent : GameEntityComponent`
**Base:** `GameEntityComponent`
**File:** `Bannerlord.Source/bin/TaleWorlds.Engine/TaleWorlds.Engine/CompositeComponent.cs`

## Overview

`CompositeComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `CompositeComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Frame` | `public MatrixFrame Frame { get; set; }` |
| `VectorUserData` | `public Vec3 VectorUserData { get; set; }` |

## Key Methods

### IsNull
`public static bool IsNull(CompositeComponent component)`

**Purpose:** Handles logic related to `is null`.

### CreateCompositeComponent
`public static CompositeComponent CreateCompositeComponent()`

**Purpose:** Creates a new `composite component` instance or object.

### CreateCopy
`public CompositeComponent CreateCopy()`

**Purpose:** Creates a new `copy` instance or object.

### AddComponent
`public void AddComponent(GameEntityComponent component)`

**Purpose:** Adds `component` to the current collection or state.

### AddPrefabEntity
`public void AddPrefabEntity(string prefabName, Scene scene)`

**Purpose:** Adds `prefab entity` to the current collection or state.

### Dispose
`public void Dispose()`

**Purpose:** Handles logic related to `dispose`.

### GetFactor1
`public uint GetFactor1()`

**Purpose:** Gets the current value of `factor1`.

### GetFactor2
`public uint GetFactor2()`

**Purpose:** Gets the current value of `factor2`.

### SetFactor1
`public void SetFactor1(uint factorColor1)`

**Purpose:** Sets the value or state of `factor1`.

### SetFactor2
`public void SetFactor2(uint factorColor2)`

**Purpose:** Sets the value or state of `factor2`.

### SetVectorArgument
`public void SetVectorArgument(float vectorArgument0, float vectorArgument1, float vectorArgument2, float vectorArgument3)`

**Purpose:** Sets the value or state of `vector argument`.

### SetMaterial
`public void SetMaterial(Material material)`

**Purpose:** Sets the value or state of `material`.

### SetVisibilityMask
`public void SetVisibilityMask(VisibilityMaskFlags visibilityMask)`

**Purpose:** Sets the value or state of `visibility mask`.

### GetFirstMetaMesh
`public override MetaMesh GetFirstMetaMesh()`

**Purpose:** Gets the current value of `first meta mesh`.

### AddMultiMesh
`public void AddMultiMesh(string MultiMeshName)`

**Purpose:** Adds `multi mesh` to the current collection or state.

### SetVisible
`public void SetVisible(bool visible)`

**Purpose:** Sets the value or state of `visible`.

### GetVisible
`public bool GetVisible()`

**Purpose:** Gets the current value of `visible`.

## Usage Example

```csharp
var component = agent.GetComponent<CompositeComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)