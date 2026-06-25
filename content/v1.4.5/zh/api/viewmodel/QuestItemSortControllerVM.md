---
title: "QuestItemSortControllerVM"
description: "QuestItemSortControllerVM 的自动生成类参考。"
---
# QuestItemSortControllerVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Quests
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class QuestItemSortControllerVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Quests/QuestItemSortControllerVM.cs`

## 概述

`QuestItemSortControllerVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Quests`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Quests` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `CurrentSortOption` | `public QuestItemSortOption? CurrentSortOption { get; }` |
| `IsThereAnyQuest` | `public bool IsThereAnyQuest { get; set; }` |

## 主要方法

### Compare
`public abstract int Compare(QuestItemVM x, QuestItemVM y)`

**用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 QuestItemSortControllerVM 实例
QuestItemSortControllerVM questItemSortControllerVM = ...;
var result = questItemSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(QuestItemVM first, QuestItemVM second)`

**用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 QuestItemSortControllerVM 实例
QuestItemSortControllerVM questItemSortControllerVM = ...;
var result = questItemSortControllerVM.Compare(first, second);
```

### Compare
`public override int Compare(QuestItemVM first, QuestItemVM second)`

**用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 QuestItemSortControllerVM 实例
QuestItemSortControllerVM questItemSortControllerVM = ...;
var result = questItemSortControllerVM.Compare(first, second);
```

### Compare
`public override int Compare(QuestItemVM first, QuestItemVM second)`

**用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 QuestItemSortControllerVM 实例
QuestItemSortControllerVM questItemSortControllerVM = ...;
var result = questItemSortControllerVM.Compare(first, second);
```

### SortByOption
`public void SortByOption(QuestItemSortOption sortOption)`

**用途 / Purpose:** 处理与 「sort by option」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 QuestItemSortControllerVM 实例
QuestItemSortControllerVM questItemSortControllerVM = ...;
questItemSortControllerVM.SortByOption(sortOption);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
QuestItemSortControllerVM questItemSortControllerVM = ...;
questItemSortControllerVM.Compare(x, y);
```

## 参见

- [本区域目录](../)