---
title: "Decal"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Decal`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# Decal

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class Decal : GameEntityComponent`
**Base:** `GameEntityComponent`
**File:** `TaleWorlds.Engine/Decal.cs`

## 概述

`Decal` 位于 `TaleWorlds.Engine`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

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

### GetFactor1
`public uint GetFactor1()`

**用途 / Purpose:** 获取 `factor1` 的当前值。

### SetFactor1Linear
`public void SetFactor1Linear(uint linearFactorColor1)`

**用途 / Purpose:** 设置 `factor1 linear` 的值或状态。

### SetFactor1
`public void SetFactor1(uint factorColor1)`

**用途 / Purpose:** 设置 `factor1` 的值或状态。

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
Decal.CreateDecal("example");
```

## 参见

- [完整类目录](../catalog)