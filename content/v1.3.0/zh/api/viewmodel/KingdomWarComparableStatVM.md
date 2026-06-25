---
title: "KingdomWarComparableStatVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `KingdomWarComparableStatVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# KingdomWarComparableStatVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class KingdomWarComparableStatVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Diplomacy/KingdomWarComparableStatVM.cs`

## 概述

`KingdomWarComparableStatVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Faction1Hint` | `public BasicTooltipViewModel Faction1Hint { get; set; }` |
| `Faction2Hint` | `public BasicTooltipViewModel Faction2Hint { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `Faction1Color` | `public string Faction1Color { get; set; }` |
| `Faction2Color` | `public string Faction2Color { get; set; }` |
| `Faction1Percentage` | `public int Faction1Percentage { get; set; }` |
| `Faction1Value` | `public int Faction1Value { get; set; }` |
| `Faction2Percentage` | `public int Faction2Percentage { get; set; }` |
| `Faction2Value` | `public int Faction2Value { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

## 使用示例

```csharp
var value = new KingdomWarComparableStatVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)