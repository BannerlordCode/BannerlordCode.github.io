<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BarterVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# BarterVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Barter
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class BarterVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Barter/BarterVM.cs`

## 概述

`BarterVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Barter`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Barter` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `FiefLbl` | `public string FiefLbl { get; set; }` |
| `PrisonerLbl` | `public string PrisonerLbl { get; set; }` |
| `ItemLbl` | `public string ItemLbl { get; set; }` |
| `OtherLbl` | `public string OtherLbl { get; set; }` |
| `CancelLbl` | `public string CancelLbl { get; set; }` |
| `ResetLbl` | `public string ResetLbl { get; set; }` |
| `OfferLbl` | `public string OfferLbl { get; set; }` |
| `DiplomaticLbl` | `public string DiplomaticLbl { get; set; }` |
| `AutoBalanceHint` | `public HintViewModel AutoBalanceHint { get; set; }` |
| `LeftHero` | `public HeroVM LeftHero { get; set; }` |
| `RightHero` | `public HeroVM RightHero { get; set; }` |
| `IsOfferDisabled` | `public bool IsOfferDisabled { get; set; }` |
| `LeftMaxGold` | `public int LeftMaxGold { get; set; }` |
| `RightMaxGold` | `public int RightMaxGold { get; set; }` |
| `LeftNameLbl` | `public string LeftNameLbl { get; set; }` |
| `RightNameLbl` | `public string RightNameLbl { get; set; }` |
| `LeftFiefList` | `public MBBindingList<BarterItemVM> LeftFiefList { get; set; }` |
| `RightFiefList` | `public MBBindingList<BarterItemVM> RightFiefList { get; set; }` |
| `LeftPrisonerList` | `public MBBindingList<BarterItemVM> LeftPrisonerList { get; set; }` |
| `RightPrisonerList` | `public MBBindingList<BarterItemVM> RightPrisonerList { get; set; }` |
| `LeftItemList` | `public MBBindingList<BarterItemVM> LeftItemList { get; set; }` |
| `RightItemList` | `public MBBindingList<BarterItemVM> RightItemList { get; set; }` |
| `LeftOtherList` | `public MBBindingList<BarterItemVM> LeftOtherList { get; set; }` |
| `RightOtherList` | `public MBBindingList<BarterItemVM> RightOtherList { get; set; }` |
| `LeftDiplomaticList` | `public MBBindingList<BarterItemVM> LeftDiplomaticList { get; set; }` |
| `RightDiplomaticList` | `public MBBindingList<BarterItemVM> RightDiplomaticList { get; set; }` |
| `LeftOfferList` | `public MBBindingList<BarterItemVM> LeftOfferList { get; set; }` |
| `RightOfferList` | `public MBBindingList<BarterItemVM> RightOfferList { get; set; }` |
| `RightGoldList` | `public MBBindingList<BarterItemVM> RightGoldList { get; set; }` |
| `LeftGoldList` | `public MBBindingList<BarterItemVM> LeftGoldList { get; set; }` |
| `InitializationIsOver` | `public bool InitializationIsOver { get; set; }` |
| `ResultBarOtherPercentage` | `public int ResultBarOtherPercentage { get; set; }` |
| `ResultBarOffererPercentage` | `public int ResultBarOffererPercentage { get; set; }` |
| `ResetInputKey` | `public InputKeyItemVM ResetInputKey { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### OnInitialized
`public void OnInitialized()`

**用途 / Purpose:** 当 `initialized` 事件触发时调用此方法。

### ExecuteTransferAllLeftFief
`public void ExecuteTransferAllLeftFief()`

**用途 / Purpose:** 执行 `transfer all left fief` 操作或流程。

### ExecuteAutoBalance
`public void ExecuteAutoBalance()`

**用途 / Purpose:** 执行 `auto balance` 操作或流程。

### ExecuteTransferAllLeftItem
`public void ExecuteTransferAllLeftItem()`

**用途 / Purpose:** 执行 `transfer all left item` 操作或流程。

### ExecuteTransferAllLeftPrisoner
`public void ExecuteTransferAllLeftPrisoner()`

**用途 / Purpose:** 执行 `transfer all left prisoner` 操作或流程。

### ExecuteTransferAllLeftOther
`public void ExecuteTransferAllLeftOther()`

**用途 / Purpose:** 执行 `transfer all left other` 操作或流程。

### ExecuteTransferAllRightFief
`public void ExecuteTransferAllRightFief()`

**用途 / Purpose:** 执行 `transfer all right fief` 操作或流程。

### ExecuteTransferAllRightItem
`public void ExecuteTransferAllRightItem()`

**用途 / Purpose:** 执行 `transfer all right item` 操作或流程。

### ExecuteTransferAllRightPrisoner
`public void ExecuteTransferAllRightPrisoner()`

**用途 / Purpose:** 执行 `transfer all right prisoner` 操作或流程。

### ExecuteTransferAllRightOther
`public void ExecuteTransferAllRightOther()`

**用途 / Purpose:** 执行 `transfer all right other` 操作或流程。

### ExecuteOffer
`public void ExecuteOffer()`

**用途 / Purpose:** 执行 `offer` 操作或流程。

### ExecuteCancel
`public void ExecuteCancel()`

**用途 / Purpose:** 执行 `cancel` 操作或流程。

### ExecuteReset
`public void ExecuteReset()`

**用途 / Purpose:** 执行 `reset` 操作或流程。

### OnTransferItem
`public void OnTransferItem(Barterable barter, bool isTransferrable)`

**用途 / Purpose:** 当 `transfer item` 事件触发时调用此方法。

### SetResetInputKey
`public void SetResetInputKey(HotKey hotkey)`

**用途 / Purpose:** 设置 `reset input key` 的值或状态。

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotkey)`

**用途 / Purpose:** 设置 `done input key` 的值或状态。

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotkey)`

**用途 / Purpose:** 设置 `cancel input key` 的值或状态。

### InitializeStaticContent
`public void InitializeStaticContent()`

**用途 / Purpose:** 初始化 `static content` 的状态、资源或绑定。

## 使用示例

```csharp
var value = new BarterVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)