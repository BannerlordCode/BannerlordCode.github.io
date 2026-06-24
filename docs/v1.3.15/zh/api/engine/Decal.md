<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Decal`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Decal

**命名空间:** TaleWorlds.Engine
**模块:** TaleWorlds.Engine
**类型:** `public sealed class Decal : GameEntityComponent`
**Base:** `GameEntityComponent`
**领域:** engine

## 概述

`Decal` 位于 `TaleWorlds.Engine`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.Engine` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsValid` | `public bool IsValid { get; }` |
| `Frame` | `public MatrixFrame Frame { get; set; }` |

## 主要方法

### CreateDecal
`public static Decal CreateDecal(string name = null)`

**用途 / Purpose:** 创建一个 `decal` 实例或对象。

### CreateCopy
`public Decal CreateCopy()`

**用途 / Purpose:** 创建一个 `copy` 实例或对象。

### CheckAndRegisterToDecalSet
`public void CheckAndRegisterToDecalSet()`

**用途 / Purpose:** 处理 `check and register to decal set` 相关逻辑。

### SetIsVisible
`public void SetIsVisible(bool value)`

**用途 / Purpose:** 设置 `is visible` 的值或状态。

### GetFactor1
`public uint GetFactor1()`

**用途 / Purpose:** 获取 `factor1` 的当前值。

### OverrideRoadBoundaryP0
`public void OverrideRoadBoundaryP0(Vec2 data)`

**用途 / Purpose:** 处理 `override road boundary p0` 相关逻辑。

### OverrideRoadBoundaryP1
`public void OverrideRoadBoundaryP1(Vec2 data)`

**用途 / Purpose:** 处理 `override road boundary p1` 相关逻辑。

### SetFactor1Linear
`public void SetFactor1Linear(uint linearFactorColor1)`

**用途 / Purpose:** 设置 `factor1 linear` 的值或状态。

### SetFactor1
`public void SetFactor1(uint factorColor1)`

**用途 / Purpose:** 设置 `factor1` 的值或状态。

### SetAlpha
`public void SetAlpha(float alpha)`

**用途 / Purpose:** 设置 `alpha` 的值或状态。

### SetVectorArgument
`public void SetVectorArgument(float vectorArgument0, float vectorArgument1, float vectorArgument2, float vectorArgument3)`

**用途 / Purpose:** 设置 `vector argument` 的值或状态。

### SetVectorArgument2
`public void SetVectorArgument2(float vectorArgument0, float vectorArgument1, float vectorArgument2, float vectorArgument3)`

**用途 / Purpose:** 设置 `vector argument2` 的值或状态。

### GetMaterial
`public Material GetMaterial()`

**用途 / Purpose:** 获取 `material` 的当前值。

### SetMaterial
`public void SetMaterial(Material material)`

**用途 / Purpose:** 设置 `material` 的值或状态。

### SetFrame
`public void SetFrame(MatrixFrame Frame)`

**用途 / Purpose:** 设置 `frame` 的值或状态。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
Decal.CreateDecal("example");
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-engine)
