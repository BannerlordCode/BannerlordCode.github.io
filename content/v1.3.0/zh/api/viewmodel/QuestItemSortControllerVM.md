---
title: "QuestItemSortControllerVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `QuestItemSortControllerVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# QuestItemSortControllerVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Quests
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class QuestItemSortControllerVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Quests/QuestItemSortControllerVM.cs`

## 概述

`QuestItemSortControllerVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Quests`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Quests` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `CurrentSortOption` | `public QuestItemSortControllerVM.QuestItemSortOption? CurrentSortOption { get; }` |
| `IsThereAnyQuest` | `public bool IsThereAnyQuest { get; set; }` |

## 主要方法

### SortByOption
`public void SortByOption(QuestItemSortControllerVM.QuestItemSortOption sortOption)`

**用途 / Purpose:** 处理 `sort by option` 相关逻辑。

### Compare
`public abstract int Compare(QuestItemVM x, QuestItemVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### Compare
`public override int Compare(QuestItemVM first, QuestItemVM second)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### Compare
`public override int Compare(QuestItemVM first, QuestItemVM second)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### Compare
`public override int Compare(QuestItemVM first, QuestItemVM second)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

## 使用示例

```csharp
var value = new QuestItemSortControllerVM();
value.SortByOption(sortOption);
```

## 参见

- [完整类目录](../catalog)