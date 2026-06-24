<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CompositeComponent`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CompositeComponent

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class CompositeComponent : GameEntityComponent`
**Base:** `GameEntityComponent`
**File:** `Bannerlord.Source/bin/TaleWorlds.Engine/TaleWorlds.Engine/CompositeComponent.cs`

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

**用途 / Purpose:** 处理 `is null` 相关逻辑。

### CreateCompositeComponent
`public static CompositeComponent CreateCompositeComponent()`

**用途 / Purpose:** 创建一个 `composite component` 实例或对象。

### CreateCopy
`public CompositeComponent CreateCopy()`

**用途 / Purpose:** 创建一个 `copy` 实例或对象。

### AddComponent
`public void AddComponent(GameEntityComponent component)`

**用途 / Purpose:** 向当前集合/状态中添加 `component`。

### AddPrefabEntity
`public void AddPrefabEntity(string prefabName, Scene scene)`

**用途 / Purpose:** 向当前集合/状态中添加 `prefab entity`。

### Dispose
`public void Dispose()`

**用途 / Purpose:** 处理 `dispose` 相关逻辑。

### GetFactor1
`public uint GetFactor1()`

**用途 / Purpose:** 获取 `factor1` 的当前值。

### GetFactor2
`public uint GetFactor2()`

**用途 / Purpose:** 获取 `factor2` 的当前值。

### SetFactor1
`public void SetFactor1(uint factorColor1)`

**用途 / Purpose:** 设置 `factor1` 的值或状态。

### SetFactor2
`public void SetFactor2(uint factorColor2)`

**用途 / Purpose:** 设置 `factor2` 的值或状态。

### SetVectorArgument
`public void SetVectorArgument(float vectorArgument0, float vectorArgument1, float vectorArgument2, float vectorArgument3)`

**用途 / Purpose:** 设置 `vector argument` 的值或状态。

### SetMaterial
`public void SetMaterial(Material material)`

**用途 / Purpose:** 设置 `material` 的值或状态。

### SetVisibilityMask
`public void SetVisibilityMask(VisibilityMaskFlags visibilityMask)`

**用途 / Purpose:** 设置 `visibility mask` 的值或状态。

### GetFirstMetaMesh
`public override MetaMesh GetFirstMetaMesh()`

**用途 / Purpose:** 获取 `first meta mesh` 的当前值。

### AddMultiMesh
`public void AddMultiMesh(string MultiMeshName)`

**用途 / Purpose:** 向当前集合/状态中添加 `multi mesh`。

### SetVisible
`public void SetVisible(bool visible)`

**用途 / Purpose:** 设置 `visible` 的值或状态。

### GetVisible
`public bool GetVisible()`

**用途 / Purpose:** 获取 `visible` 的当前值。

## 使用示例

```csharp
var component = agent.GetComponent<CompositeComponent>();
```

## 参见

- [完整类目录](../catalog)