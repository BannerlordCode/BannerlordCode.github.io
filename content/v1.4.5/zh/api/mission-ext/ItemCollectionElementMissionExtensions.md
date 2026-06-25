---
title: "ItemCollectionElementMissionExtensions"
description: "ItemCollectionElementMissionExtensions 的自动生成类参考。"
---
# ItemCollectionElementMissionExtensions

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class ItemCollectionElementMissionExtensions`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/ItemCollectionElementMissionExtensions.cs`

## 概述

`ItemCollectionElementMissionExtensions` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetItemHolsterIndices
`public static StackArray.StackArray4Int GetItemHolsterIndices(this ItemObject item)`

**用途 / Purpose:** 读取并返回当前对象中 「item holster indices」 的结果。

```csharp
// 静态调用，不需要实例
ItemCollectionElementMissionExtensions.GetItemHolsterIndices(item);
```

## 使用示例

```csharp
ItemCollectionElementMissionExtensions.GetItemHolsterIndices(item);
```

## 参见

- [本区域目录](../)