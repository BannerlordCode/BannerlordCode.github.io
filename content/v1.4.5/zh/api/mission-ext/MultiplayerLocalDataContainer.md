---
title: "MultiplayerLocalDataContainer"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerLocalDataContainer`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerLocalDataContainer

**Namespace:** TaleWorlds.MountAndBlade.Diamond.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MultiplayerLocalDataContainer<T>`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond.Lobby/MultiplayerLocalDataContainer.cs`

## 概述

`MultiplayerLocalDataContainer` 位于 `TaleWorlds.MountAndBlade.Diamond.Lobby`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Diamond.Lobby` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### CreateAsAdd
`public static ContainerOperation CreateAsAdd(T item)`

**用途 / Purpose:** 创建一个 `as add` 实例或对象。

### CreateAsRemove
`public static ContainerOperation CreateAsRemove(T item)`

**用途 / Purpose:** 创建一个 `as remove` 实例或对象。

### CreateAsInsert
`public static ContainerOperation CreateAsInsert(T item, int index)`

**用途 / Purpose:** 创建一个 `as insert` 实例或对象。

### Compare
`public int Compare(ContainerOperation x, ContainerOperation y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### AddEntry
`public void AddEntry(T item)`

**用途 / Purpose:** 向当前集合/状态中添加 `entry`。

### InsertEntry
`public void InsertEntry(T item, int index)`

**用途 / Purpose:** 处理 `insert entry` 相关逻辑。

### RemoveEntry
`public void RemoveEntry(T item)`

**用途 / Purpose:** 从当前集合/状态中移除 `entry`。

### GetEntries
`public MBReadOnlyList<T> GetEntries()`

**用途 / Purpose:** 获取 `entries` 的当前值。

## 使用示例

```csharp
var implementation = new CustomMultiplayerLocalDataContainer();
```

## 参见

- [完整类目录](../catalog)