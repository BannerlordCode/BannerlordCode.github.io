---
title: "ItemScoreComparer"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ItemScoreComparer`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ItemScoreComparer

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy
**模块:** TaleWorlds.CampaignSystem
**类型:** `public class ItemScoreComparer : KingdomWarSortControllerVM.ItemComparerBase`
**Base:** `KingdomWarSortControllerVM.ItemComparerBase`
**领域:** campaign-ext

## 概述

`ItemScoreComparer` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ScoreState` | `public int ScoreState { get; set; }` |
| `IsScoreSelected` | `public bool IsScoreSelected { get; set; }` |

## 主要方法

### SetSortMode
`public void SetSortMode(bool isAscending)`

**用途 / Purpose:** 设置 `sort mode` 的值或状态。

### Compare
`public abstract int Compare(KingdomWarItemVM x, KingdomWarItemVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### Compare
`public override int Compare(KingdomWarItemVM x, KingdomWarItemVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

## 使用示例

```csharp
// 先从游戏状态中拿到一个 ItemScoreComparer 实例，再调用它的公开方法
var value = new ItemScoreComparer();
value.SetSortMode(false);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
