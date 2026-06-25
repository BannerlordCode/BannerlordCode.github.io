---
title: "EncyclopediaListItemComparerBase"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EncyclopediaListItemComparerBase`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# EncyclopediaListItemComparerBase

**Namespace:** TaleWorlds.CampaignSystem.Encyclopedia
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class EncyclopediaListItemComparerBase : IComparer<EncyclopediaListItem>`
**Base:** `IComparer<EncyclopediaListItem>`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Encyclopedia/EncyclopediaListItemComparerBase.cs`

## 概述

`EncyclopediaListItemComparerBase` 位于 `TaleWorlds.CampaignSystem.Encyclopedia`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Encyclopedia` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsAscending` | `public bool IsAscending { get; }` |

## 主要方法

### SetSortOrder
`public void SetSortOrder(bool isAscending)`

**用途 / Purpose:** 设置 `sort order` 的值或状态。

### SwitchSortOrder
`public void SwitchSortOrder()`

**用途 / Purpose:** 处理 `switch sort order` 相关逻辑。

### SetDefaultSortOrder
`public void SetDefaultSortOrder()`

**用途 / Purpose:** 设置 `default sort order` 的值或状态。

### Compare
`public abstract int Compare(EncyclopediaListItem x, EncyclopediaListItem y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### GetComparedValueText
`public abstract string GetComparedValueText(EncyclopediaListItem item)`

**用途 / Purpose:** 获取 `compared value text` 的当前值。

## 使用示例

```csharp
var implementation = new CustomEncyclopediaListItemComparerBase();
```

## 参见

- [完整类目录](../catalog)