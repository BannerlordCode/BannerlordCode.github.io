<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CompositeComponent`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CompositeComponent

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class CompositeComponent : GameEntityComponent`
**Base:** `GameEntityComponent`
**File:** `TaleWorlds.Engine/CompositeComponent.cs`

## Overview

`CompositeComponent` is an AgentComponent — per-agent state/logic attached to an Agent. Access via `agent.GetComponent<CompositeComponent>()` (some have a typed agent property). Subclass AgentComponent to add your own.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsValid` | `public bool IsValid { get { return base.Pointer != UIntPtr.Zero; }` |
| `Frame` | `public MatrixFrame Frame { get { MatrixFrame matrixFrame = default(MatrixFrame); EngineApplicationInterface.ICompositeComponent.GetFrame(base.Pointer, ref matrixFrame); return matrixFrame; }` |
| `VectorUserData` | `public Vec3 VectorUserData { get { return EngineApplicationInterface.ICompositeComponent.GetVectorUserData(base.Pointer); }` |

## Key Methods

### IsNull
```csharp
public static bool IsNull(CompositeComponent component)
```

### CreateCompositeComponent
```csharp
public static CompositeComponent CreateCompositeComponent()
```

### CreateCopy
```csharp
public CompositeComponent CreateCopy()
```

### AddComponent
```csharp
public void AddComponent(GameEntityComponent component)
```

### AddPrefabEntity
```csharp
public void AddPrefabEntity(string prefabName, Scene scene)
```

### Dispose
```csharp
public void Dispose()
```

### GetFactor1
```csharp
public uint GetFactor1()
```

### GetFactor2
```csharp
public uint GetFactor2()
```

### SetFactor1
```csharp
public void SetFactor1(uint factorColor1)
```

### SetFactor2
```csharp
public void SetFactor2(uint factorColor2)
```

### SetVectorArgument
```csharp
public void SetVectorArgument(float vectorArgument0, float vectorArgument1, float vectorArgument2, float vectorArgument3)
```

### SetMaterial
```csharp
public void SetMaterial(Material material)
```

### SetVisibilityMask
```csharp
public void SetVisibilityMask(VisibilityMaskFlags visibilityMask)
```

### GetFirstMetaMesh
```csharp
public override MetaMesh GetFirstMetaMesh()
```

### AddMultiMesh
```csharp
public void AddMultiMesh(string MultiMeshName)
```

### SetVisible
```csharp
public void SetVisible(bool visible)
```

### GetVisible
```csharp
public bool GetVisible()
```

## Usage Example

```csharp
// Typical usage of CompositeComponent (Component)
agent.GetComponent<CompositeComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)