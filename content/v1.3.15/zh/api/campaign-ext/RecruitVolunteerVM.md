---
title: "RecruitVolunteerVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `RecruitVolunteerVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# RecruitVolunteerVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Recruitment
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class RecruitVolunteerVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Recruitment/RecruitVolunteerVM.cs`

## 概述

`RecruitVolunteerVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Recruitment`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Recruitment` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `OwnerHero` | `public Hero OwnerHero { get; }` |
| `VolunteerTroops` | `public List<CharacterObject> VolunteerTroops { get; }` |
| `GoldCost` | `public int GoldCost { get; }` |
| `Troops` | `public MBBindingList<RecruitVolunteerTroopVM> Troops { get; set; }` |
| `Owner` | `public RecruitVolunteerOwnerVM Owner { get; set; }` |
| `CanRecruit` | `public bool CanRecruit { get; set; }` |
| `ButtonIsVisible` | `public bool ButtonIsVisible { get; set; }` |
| `QuantityText` | `public string QuantityText { get; set; }` |
| `RecruitText` | `public string RecruitText { get; set; }` |
| `RecruitHint` | `public HintViewModel RecruitHint { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### ExecuteRecruit
`public void ExecuteRecruit(RecruitVolunteerTroopVM troop)`

**用途 / Purpose:** 执行 `recruit` 操作或流程。

### ExecuteRemoveFromCart
`public void ExecuteRemoveFromCart(RecruitVolunteerTroopVM troop)`

**用途 / Purpose:** 执行 `remove from cart` 操作或流程。

### OnRecruitMoveToCart
`public void OnRecruitMoveToCart(RecruitVolunteerTroopVM troop)`

**用途 / Purpose:** 当 `recruit move to cart` 事件触发时调用此方法。

### OnRecruitRemovedFromCart
`public void OnRecruitRemovedFromCart(RecruitVolunteerTroopVM troop)`

**用途 / Purpose:** 当 `recruit removed from cart` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new RecruitVolunteerVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)