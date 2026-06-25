---
title: "PartyTroopManagerVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PartyTroopManagerVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# PartyTroopManagerVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Party.PartyTroopManagerPopUp
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartyTroopManagerVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyTroopManagerPopUp/PartyTroopManagerVM.cs`

## 概述

`PartyTroopManagerVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Party.PartyTroopManagerPopUp`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Party.PartyTroopManagerPopUp` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `PrimaryActionInputKey` | `public InputKeyItemVM PrimaryActionInputKey { get; set; }` |
| `SecondaryActionInputKey` | `public InputKeyItemVM SecondaryActionInputKey { get; set; }` |
| `IsFocusedOnACharacter` | `public bool IsFocusedOnACharacter { get; set; }` |
| `IsOpen` | `public bool IsOpen { get; set; }` |
| `IsUpgradePopUp` | `public bool IsUpgradePopUp { get; set; }` |
| `IsPrimaryActionAvailable` | `public bool IsPrimaryActionAvailable { get; set; }` |
| `IsSecondaryActionAvailable` | `public bool IsSecondaryActionAvailable { get; set; }` |
| `FocusedTroop` | `public PartyTroopManagerItemVM FocusedTroop { get; set; }` |
| `Troops` | `public MBBindingList<PartyTroopManagerItemVM> Troops { get; set; }` |
| `OpenButtonHint` | `public HintViewModel OpenButtonHint { get; set; }` |
| `UsedHorsesHint` | `public BasicTooltipViewModel UsedHorsesHint { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `AvatarText` | `public string AvatarText { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `CountText` | `public string CountText { get; set; }` |
| `GoldChangeText` | `public string GoldChangeText { get; set; }` |
| `HorseChangeText` | `public string HorseChangeText { get; set; }` |
| `MoraleChangeText` | `public string MoraleChangeText { get; set; }` |
| `DoneLbl` | `public string DoneLbl { get; set; }` |
| `CancelLbl` | `public string CancelLbl { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### OpenPopUp
`public virtual void OpenPopUp()`

**用途 / Purpose:** 处理 `open pop up` 相关逻辑。

### ExecuteDone
`public virtual void ExecuteDone()`

**用途 / Purpose:** 执行 `done` 操作或流程。

### UpdateOpenButtonHint
`public void UpdateOpenButtonHint(bool isDisabled, bool isIrrelevant, bool isUpgradesDisabled)`

**用途 / Purpose:** 更新 `open button hint` 的状态或数据。

### ExecuteCancel
`public abstract void ExecuteCancel()`

**用途 / Purpose:** 执行 `cancel` 操作或流程。

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**用途 / Purpose:** 设置 `done input key` 的值或状态。

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**用途 / Purpose:** 设置 `cancel input key` 的值或状态。

### SetPrimaryActionInputKey
`public void SetPrimaryActionInputKey(HotKey hotKey)`

**用途 / Purpose:** 设置 `primary action input key` 的值或状态。

### SetSecondaryActionInputKey
`public void SetSecondaryActionInputKey(HotKey hotKey)`

**用途 / Purpose:** 设置 `secondary action input key` 的值或状态。

## 使用示例

```csharp
var implementation = new CustomPartyTroopManagerVM();
```

## 参见

- [完整类目录](../catalog)