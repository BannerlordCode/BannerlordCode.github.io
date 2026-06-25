---
title: "IntermissionVoteItemListExtensions"
description: "IntermissionVoteItemListExtensions 的自动生成类参考。"
---
# IntermissionVoteItemListExtensions

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class IntermissionVoteItemListExtensions`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/IntermissionVoteItemListExtensions.cs`

## 概述

`IntermissionVoteItemListExtensions` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### ContainsItem
`public static bool ContainsItem(this List<IntermissionVoteItem> intermissionVoteItems, string id)`

**用途 / Purpose:** 检查当前对象是否含有item。

```csharp
// 静态调用，不需要实例
IntermissionVoteItemListExtensions.ContainsItem(intermissionVoteItems, "example");
```

### Add
`public static IntermissionVoteItem Add(this List<IntermissionVoteItem> intermissionVoteItems, string id)`

**用途 / Purpose:** 向当前容器或状态添加项。

```csharp
// 静态调用，不需要实例
IntermissionVoteItemListExtensions.Add(intermissionVoteItems, "example");
```

### GetItem
`public static IntermissionVoteItem GetItem(this List<IntermissionVoteItem> intermissionVoteItems, string id)`

**用途 / Purpose:** 读取并返回当前对象中 item 的结果。

```csharp
// 静态调用，不需要实例
IntermissionVoteItemListExtensions.GetItem(intermissionVoteItems, "example");
```

## 使用示例

```csharp
IntermissionVoteItemListExtensions.ContainsItem(intermissionVoteItems, "example");
```

## 参见

- [本区域目录](../)