---
title: "CompositeComponent"
description: "Auto-generated class reference for CompositeComponent."
---
# CompositeComponent

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class CompositeComponent : GameEntityComponent`
**Base:** `GameEntityComponent`
**File:** `TaleWorlds.Engine/CompositeComponent.cs`

## Overview

`CompositeComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `CompositeComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsValid` | `public bool IsValid { get; }` |
| `Frame` | `public MatrixFrame Frame { get; set; }` |
| `VectorUserData` | `public Vec3 VectorUserData { get; set; }` |

## Key Methods

### IsNull
`public static bool IsNull(CompositeComponent component)`

**Purpose:** Determines whether the this instance is in the null state or condition.

```csharp
// Static call; no instance required
CompositeComponent.IsNull(component);
```

### CreateCompositeComponent
`public static CompositeComponent CreateCompositeComponent()`

**Purpose:** Constructs a new composite component entity and returns it to the caller.

```csharp
// Static call; no instance required
CompositeComponent.CreateCompositeComponent();
```

### CreateCopy
`public CompositeComponent CreateCopy()`

**Purpose:** Constructs a new copy entity and returns it to the caller.

```csharp
// Obtain an instance of CompositeComponent from the subsystem API first
CompositeComponent compositeComponent = ...;
var result = compositeComponent.CreateCopy();
```

### AddComponent
`public void AddComponent(GameEntityComponent component)`

**Purpose:** Adds component to the current collection or state.

```csharp
// Obtain an instance of CompositeComponent from the subsystem API first
CompositeComponent compositeComponent = ...;
compositeComponent.AddComponent(component);
```

### AddPrefabEntity
`public void AddPrefabEntity(string prefabName, Scene scene)`

**Purpose:** Adds prefab entity to the current collection or state.

```csharp
// Obtain an instance of CompositeComponent from the subsystem API first
CompositeComponent compositeComponent = ...;
compositeComponent.AddPrefabEntity("example", scene);
```

### Dispose
`public void Dispose()`

**Purpose:** Releases unmanaged resources held by the this instance.

```csharp
// Obtain an instance of CompositeComponent from the subsystem API first
CompositeComponent compositeComponent = ...;
compositeComponent.Dispose();
```

### GetFactor1
`public uint GetFactor1()`

**Purpose:** Reads and returns the factor1 value held by the this instance.

```csharp
// Obtain an instance of CompositeComponent from the subsystem API first
CompositeComponent compositeComponent = ...;
var result = compositeComponent.GetFactor1();
```

### GetFactor2
`public uint GetFactor2()`

**Purpose:** Reads and returns the factor2 value held by the this instance.

```csharp
// Obtain an instance of CompositeComponent from the subsystem API first
CompositeComponent compositeComponent = ...;
var result = compositeComponent.GetFactor2();
```

### SetFactor1
`public void SetFactor1(uint factorColor1)`

**Purpose:** Assigns a new value to factor1 and updates the object's internal state.

```csharp
// Obtain an instance of CompositeComponent from the subsystem API first
CompositeComponent compositeComponent = ...;
compositeComponent.SetFactor1(0);
```

### SetFactor2
`public void SetFactor2(uint factorColor2)`

**Purpose:** Assigns a new value to factor2 and updates the object's internal state.

```csharp
// Obtain an instance of CompositeComponent from the subsystem API first
CompositeComponent compositeComponent = ...;
compositeComponent.SetFactor2(0);
```

### SetVectorArgument
`public void SetVectorArgument(float vectorArgument0, float vectorArgument1, float vectorArgument2, float vectorArgument3)`

**Purpose:** Assigns a new value to vector argument and updates the object's internal state.

```csharp
// Obtain an instance of CompositeComponent from the subsystem API first
CompositeComponent compositeComponent = ...;
compositeComponent.SetVectorArgument(0, 0, 0, 0);
```

### SetMaterial
`public void SetMaterial(Material material)`

**Purpose:** Assigns a new value to material and updates the object's internal state.

```csharp
// Obtain an instance of CompositeComponent from the subsystem API first
CompositeComponent compositeComponent = ...;
compositeComponent.SetMaterial(material);
```

### SetVisibilityMask
`public void SetVisibilityMask(VisibilityMaskFlags visibilityMask)`

**Purpose:** Assigns a new value to visibility mask and updates the object's internal state.

```csharp
// Obtain an instance of CompositeComponent from the subsystem API first
CompositeComponent compositeComponent = ...;
compositeComponent.SetVisibilityMask(visibilityMask);
```

### GetFirstMetaMesh
`public override MetaMesh GetFirstMetaMesh()`

**Purpose:** Reads and returns the first meta mesh value held by the this instance.

```csharp
// Obtain an instance of CompositeComponent from the subsystem API first
CompositeComponent compositeComponent = ...;
var result = compositeComponent.GetFirstMetaMesh();
```

### AddMultiMesh
`public void AddMultiMesh(string MultiMeshName)`

**Purpose:** Adds multi mesh to the current collection or state.

```csharp
// Obtain an instance of CompositeComponent from the subsystem API first
CompositeComponent compositeComponent = ...;
compositeComponent.AddMultiMesh("example");
```

### SetVisible
`public void SetVisible(bool visible)`

**Purpose:** Assigns a new value to visible and updates the object's internal state.

```csharp
// Obtain an instance of CompositeComponent from the subsystem API first
CompositeComponent compositeComponent = ...;
compositeComponent.SetVisible(false);
```

### GetVisible
`public bool GetVisible()`

**Purpose:** Reads and returns the visible value held by the this instance.

```csharp
// Obtain an instance of CompositeComponent from the subsystem API first
CompositeComponent compositeComponent = ...;
var result = compositeComponent.GetVisible();
```

## Usage Example

```csharp
var component = agent.GetComponent<CompositeComponent>();
```

## See Also

- [Area Index](../)