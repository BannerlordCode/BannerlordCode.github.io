---
title: "MultiplayerLocalDataContainer"
description: "MultiplayerLocalDataContainer 的自动生成类参考。"
---
# MultiplayerLocalDataContainer

**Namespace:** TaleWorlds.MountAndBlade.Diamond.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MultiplayerLocalDataContainer<T>`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond.Lobby/MultiplayerLocalDataContainer.cs`

## 概述

`MultiplayerLocalDataContainer` 位于 `TaleWorlds.MountAndBlade.Diamond.Lobby`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Diamond.Lobby` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### CreateAsAdd
`public static ContainerOperation CreateAsAdd(T item)`

**用途 / Purpose:** 构建一个新的 as add 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
MultiplayerLocalDataContainer.CreateAsAdd(item);
```

### CreateAsRemove
`public static ContainerOperation CreateAsRemove(T item)`

**用途 / Purpose:** 构建一个新的 as remove 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
MultiplayerLocalDataContainer.CreateAsRemove(item);
```

### CreateAsInsert
`public static ContainerOperation CreateAsInsert(T item, int index)`

**用途 / Purpose:** 构建一个新的 as insert 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
MultiplayerLocalDataContainer.CreateAsInsert(item, 0);
```

### Compare
`public int Compare(ContainerOperation x, ContainerOperation y)`

**用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 MultiplayerLocalDataContainer 实例
MultiplayerLocalDataContainer multiplayerLocalDataContainer = ...;
var result = multiplayerLocalDataContainer.Compare(x, y);
```

### AddEntry
`public void AddEntry(T item)`

**用途 / Purpose:** 将 entry 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 MultiplayerLocalDataContainer 实例
MultiplayerLocalDataContainer multiplayerLocalDataContainer = ...;
multiplayerLocalDataContainer.AddEntry(item);
```

### InsertEntry
`public void InsertEntry(T item, int index)`

**用途 / Purpose:** 调用 InsertEntry 对应的操作。

```csharp
// 先通过子系统 API 拿到 MultiplayerLocalDataContainer 实例
MultiplayerLocalDataContainer multiplayerLocalDataContainer = ...;
multiplayerLocalDataContainer.InsertEntry(item, 0);
```

### RemoveEntry
`public void RemoveEntry(T item)`

**用途 / Purpose:** 从当前容器或状态中移除 entry。

```csharp
// 先通过子系统 API 拿到 MultiplayerLocalDataContainer 实例
MultiplayerLocalDataContainer multiplayerLocalDataContainer = ...;
multiplayerLocalDataContainer.RemoveEntry(item);
```

### GetEntries
`public MBReadOnlyList<T> GetEntries()`

**用途 / Purpose:** 读取并返回当前对象中 entries 的结果。

```csharp
// 先通过子系统 API 拿到 MultiplayerLocalDataContainer 实例
MultiplayerLocalDataContainer multiplayerLocalDataContainer = ...;
var result = multiplayerLocalDataContainer.GetEntries();
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
MultiplayerLocalDataContainer instance = ...;
```

## 参见

- [本区域目录](../)