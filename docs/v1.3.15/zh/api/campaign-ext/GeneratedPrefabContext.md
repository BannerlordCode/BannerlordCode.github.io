<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GeneratedPrefabContext`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 处理 `collect prefabs` 相关逻辑。

### AddGeneratedPrefab
`public void AddGeneratedPrefab(string prefabName, string variantName, CreateGeneratedWidget creator)`

**用途 / Purpose:** 向当前集合/状态中添加 `generated prefab`。

### InstantiatePrefab
`public GeneratedPrefabInstantiationResult InstantiatePrefab(UIContext conext, string prefabName, string variantName, Dictionary<string, object> data)`

**用途 / Purpose:** 处理 `instantiate prefab` 相关逻辑。

## 使用示例

```csharp
var value = new GeneratedPrefabContext();
value.CollectPrefabs();
```

## 参见

- [完整类目录](../catalog)