---
title: "SaveStatistics"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SaveStatistics`
- [← 本领域 / 返回 save-system](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SaveStatistics

**命名空间:** TaleWorlds.SaveSystem.Save
**模块:** TaleWorlds.SaveSystem
**类型:** `public struct SaveStatistics`
**领域:** save-system

## 概述

`SaveStatistics` 位于 `TaleWorlds.SaveSystem.Save`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.SaveSystem.Save` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `RootObject` | `public object RootObject { get; }` |
| `SaveData` | `public GameData SaveData { get; }` |
| `DefinitionContext` | `public DefinitionContext DefinitionContext { get; }` |
| `EnableSaveStatistics` | `public static bool EnableSaveStatistics { get; }` |

## 主要方法

### GetStatistics
`public static LegacySaveContext.SaveStatistics GetStatistics()`

**用途 / Purpose:** 获取 `statistics` 的当前值。

### AddStrings
`public void AddStrings(List<string> texts)`

**用途 / Purpose:** 向当前集合/状态中添加 `strings`。

### AddOrGetStringId
`public int AddOrGetStringId(string text)`

**用途 / Purpose:** 向当前集合/状态中添加 `or get string id`。

### GetObjectId
`public int GetObjectId(object target)`

**用途 / Purpose:** 获取 `object id` 的当前值。

### GetContainerId
`public int GetContainerId(object target)`

**用途 / Purpose:** 获取 `container id` 的当前值。

### GetStringId
`public int GetStringId(string target)`

**用途 / Purpose:** 获取 `string id` 的当前值。

### Save
`public bool Save(object target, MetaData metaData, out string errorMessage)`

**用途 / Purpose:** 保存 `save` 数据。

### GetObjectCounts
`public ValueTuple<int, int, int, long> GetObjectCounts(string key)`

**用途 / Purpose:** 获取 `object counts` 的当前值。

### GetContainerCounts
`public ValueTuple<int, int, int, int, long> GetContainerCounts(string key)`

**用途 / Purpose:** 获取 `container counts` 的当前值。

### GetContainerSize
`public long GetContainerSize(string key)`

**用途 / Purpose:** 获取 `container size` 的当前值。

### GetTypeKeys
`public List<string> GetTypeKeys()`

**用途 / Purpose:** 获取 `type keys` 的当前值。

### GetContainerKeys
`public List<string> GetContainerKeys()`

**用途 / Purpose:** 获取 `container keys` 的当前值。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
SaveStatistics.GetStatistics();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-save)
