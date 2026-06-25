---
title: "EntityVisualManagerBase"
description: "EntityVisualManagerBase 的自动生成类参考。"
---
# EntityVisualManagerBase

**Namespace:** SandBox.View.Map.Managers
**Module:** SandBox.View
**Type:** `public abstract class EntityVisualManagerBase<TEntity> : EntityVisualManagerBase`
**Base:** `EntityVisualManagerBase`
**File:** `SandBox.View/Map/Managers/EntityVisualManagerBase.2.cs`

## 概述

`EntityVisualManagerBase` 位于 `SandBox.View.Map.Managers`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.View.Map.Managers` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetVisualOfEntity
`public abstract MapEntityVisual<TEntity> GetVisualOfEntity(TEntity entity)`

**用途 / Purpose:** 读取并返回当前对象中 「visual of entity」 的结果。

```csharp
// 先通过子系统 API 拿到 EntityVisualManagerBase 实例
EntityVisualManagerBase entityVisualManagerBase = ...;
var result = entityVisualManagerBase.GetVisualOfEntity(entity);
```

### GetEntityVisualManagerBase
`public static EntityVisualManagerBase<TEntity> GetEntityVisualManagerBase()`

**用途 / Purpose:** 读取并返回当前对象中 「entity visual manager base」 的结果。

```csharp
// 静态调用，不需要实例
EntityVisualManagerBase.GetEntityVisualManagerBase();
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
EntityVisualManagerBase instance = ...;
```

## 参见

- [本区域目录](../)