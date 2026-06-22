<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CompositeComponent`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CompositeComponent

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class CompositeComponent : GameEntityComponent`
**Base:** `GameEntityComponent`
**File:** `TaleWorlds.Engine/CompositeComponent.cs`

## 概述

`CompositeComponent` 是一个 AgentComponent——附加在 Agent 上的每-agent 状态/逻辑组件。通过 `agent.GetComponent<CompositeComponent>()` 访问（部分组件在 agent 上有强类型属性）。继承 AgentComponent 可添加自定义组件。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsValid` | `public bool IsValid { get { return base.Pointer != UIntPtr.Zero; }` |
| `Frame` | `public MatrixFrame Frame { get { MatrixFrame matrixFrame = default(MatrixFrame); EngineApplicationInterface.ICompositeComponent.GetFrame(base.Pointer, ref matrixFrame); return matrixFrame; }` |
| `VectorUserData` | `public Vec3 VectorUserData { get { return EngineApplicationInterface.ICompositeComponent.GetVectorUserData(base.Pointer); }` |

## 主要方法

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

## 使用示例

```csharp
// CompositeComponent (Component) 的典型用法
agent.GetComponent<CompositeComponent>();
```

## 参见

- [完整类目录](../catalog)