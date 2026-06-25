---
title: "CompositeComponent"
description: "CompositeComponent 的自动生成类参考。"
---
# CompositeComponent

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class CompositeComponent : GameEntityComponent`
**Base:** `GameEntityComponent`
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine/CompositeComponent.cs`

## 概述

`CompositeComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `CompositeComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Frame` | `public MatrixFrame Frame { get; set; }` |
| `VectorUserData` | `public Vec3 VectorUserData { get; set; }` |

## 主要方法

### IsNull
`public static bool IsNull(CompositeComponent component)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 null 状态或条件。

```csharp
// 静态调用，不需要实例
CompositeComponent.IsNull(component);
```

### CreateCompositeComponent
`public static CompositeComponent CreateCompositeComponent()`

**用途 / Purpose:** **用途 / Purpose:** 构建一个新的 composite component 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
CompositeComponent.CreateCompositeComponent();
```

### CreateCopy
`public CompositeComponent CreateCopy()`

**用途 / Purpose:** **用途 / Purpose:** 构建一个新的 copy 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 CompositeComponent 实例
CompositeComponent compositeComponent = ...;
var result = compositeComponent.CreateCopy();
```

### AddComponent
`public void AddComponent(GameEntityComponent component)`

**用途 / Purpose:** **用途 / Purpose:** 将 component 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 CompositeComponent 实例
CompositeComponent compositeComponent = ...;
compositeComponent.AddComponent(component);
```

### AddPrefabEntity
`public void AddPrefabEntity(string prefabName, Scene scene)`

**用途 / Purpose:** **用途 / Purpose:** 将 prefab entity 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 CompositeComponent 实例
CompositeComponent compositeComponent = ...;
compositeComponent.AddPrefabEntity("example", scene);
```

### Dispose
`public void Dispose()`

**用途 / Purpose:** **用途 / Purpose:** 释放当前对象占用的非托管资源。

```csharp
// 先通过子系统 API 拿到 CompositeComponent 实例
CompositeComponent compositeComponent = ...;
compositeComponent.Dispose();
```

### GetFactor1
`public uint GetFactor1()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 factor1 的结果。

```csharp
// 先通过子系统 API 拿到 CompositeComponent 实例
CompositeComponent compositeComponent = ...;
var result = compositeComponent.GetFactor1();
```

### GetFactor2
`public uint GetFactor2()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 factor2 的结果。

```csharp
// 先通过子系统 API 拿到 CompositeComponent 实例
CompositeComponent compositeComponent = ...;
var result = compositeComponent.GetFactor2();
```

### SetFactor1
`public void SetFactor1(uint factorColor1)`

**用途 / Purpose:** **用途 / Purpose:** 为 factor1 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 CompositeComponent 实例
CompositeComponent compositeComponent = ...;
compositeComponent.SetFactor1(0);
```

### SetFactor2
`public void SetFactor2(uint factorColor2)`

**用途 / Purpose:** **用途 / Purpose:** 为 factor2 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 CompositeComponent 实例
CompositeComponent compositeComponent = ...;
compositeComponent.SetFactor2(0);
```

### SetVectorArgument
`public void SetVectorArgument(float vectorArgument0, float vectorArgument1, float vectorArgument2, float vectorArgument3)`

**用途 / Purpose:** **用途 / Purpose:** 为 vector argument 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 CompositeComponent 实例
CompositeComponent compositeComponent = ...;
compositeComponent.SetVectorArgument(0, 0, 0, 0);
```

### SetMaterial
`public void SetMaterial(Material material)`

**用途 / Purpose:** **用途 / Purpose:** 为 material 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 CompositeComponent 实例
CompositeComponent compositeComponent = ...;
compositeComponent.SetMaterial(material);
```

### SetVisibilityMask
`public void SetVisibilityMask(VisibilityMaskFlags visibilityMask)`

**用途 / Purpose:** **用途 / Purpose:** 为 visibility mask 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 CompositeComponent 实例
CompositeComponent compositeComponent = ...;
compositeComponent.SetVisibilityMask(visibilityMask);
```

### GetFirstMetaMesh
`public override MetaMesh GetFirstMetaMesh()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 first meta mesh 的结果。

```csharp
// 先通过子系统 API 拿到 CompositeComponent 实例
CompositeComponent compositeComponent = ...;
var result = compositeComponent.GetFirstMetaMesh();
```

### AddMultiMesh
`public void AddMultiMesh(string MultiMeshName)`

**用途 / Purpose:** **用途 / Purpose:** 将 multi mesh 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 CompositeComponent 实例
CompositeComponent compositeComponent = ...;
compositeComponent.AddMultiMesh("example");
```

### SetVisible
`public void SetVisible(bool visible)`

**用途 / Purpose:** **用途 / Purpose:** 为 visible 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 CompositeComponent 实例
CompositeComponent compositeComponent = ...;
compositeComponent.SetVisible(false);
```

### GetVisible
`public bool GetVisible()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 visible 的结果。

```csharp
// 先通过子系统 API 拿到 CompositeComponent 实例
CompositeComponent compositeComponent = ...;
var result = compositeComponent.GetVisible();
```

## 使用示例

```csharp
var component = agent.GetComponent<CompositeComponent>();
```

## 参见

- [本区域目录](../)