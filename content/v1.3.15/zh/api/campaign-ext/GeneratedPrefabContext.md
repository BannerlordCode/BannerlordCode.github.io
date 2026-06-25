---
title: "GeneratedPrefabContext"
description: "GeneratedPrefabContext 的自动生成类参考。"
---
# GeneratedPrefabContext

**Namespace:** TaleWorlds.GauntletUI.PrefabSystem
**Module:** TaleWorlds.GauntletUI
**Type:** `public class GeneratedPrefabContext`
**Base:** 无
**File:** `TaleWorlds.GauntletUI.PrefabSystem/GeneratedPrefabContext.cs`

## 概述

`GeneratedPrefabContext` 位于 `TaleWorlds.GauntletUI.PrefabSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI.PrefabSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### CollectPrefabs
`public void CollectPrefabs()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 GeneratedPrefabContext 实例
GeneratedPrefabContext generatedPrefabContext = ...;
generatedPrefabContext.CollectPrefabs();
```

### AddGeneratedPrefab
`public void AddGeneratedPrefab(string prefabName, string variantName, CreateGeneratedWidget creator)`

**用途 / Purpose:** 将 「generated prefab」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 GeneratedPrefabContext 实例
GeneratedPrefabContext generatedPrefabContext = ...;
generatedPrefabContext.AddGeneratedPrefab("example", "example", creator);
```

### InstantiatePrefab
`public GeneratedPrefabInstantiationResult InstantiatePrefab(UIContext conext, string prefabName, string variantName, Dictionary<string, object> data)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 GeneratedPrefabContext 实例
GeneratedPrefabContext generatedPrefabContext = ...;
var result = generatedPrefabContext.InstantiatePrefab(conext, "example", "example", dictionary<string, data);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
GeneratedPrefabContext generatedPrefabContext = ...;
generatedPrefabContext.CollectPrefabs();
```

## 参见

- [本区域目录](../)