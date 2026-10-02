---
title: "PartyTroopManagerVM"
description: "PartyTroopManagerVM：TaleWorlds.CampaignSystem.ViewModelCollection.Party.PartyTroopManagerPopUp 的 public 类，继承 ViewModel；公开成员 48 个（方法 18、属性 24、字段 5）。canonical 桶 viewmodel。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyTroopManagerPopUp/PartyTroopManagerVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PartyTroopManagerVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Party.PartyTroopManagerPopUp`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public abstract class PartyTroopManagerVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyTroopManagerPopUp/PartyTroopManagerVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## 概述

PartyTroopManagerVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyTroopManagerPopUp/PartyTroopManagerVM.cs。它是一个 public 类（abstract），实现/继承 ViewModel，继承链为 PartyTroopManagerVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 48 个：18 方法、24 属性、5 字段、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：PartyTroopManagerVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.CampaignSystem.ViewModelCollection`），命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Party.PartyTroopManagerPopUp`，继承链 PartyTroopManagerVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 24/48，方法 18/48），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyTroopManagerPopUp/PartyTroopManagerVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ExecuteItemPrimaryAction` | `public virtual void ExecuteItemPrimaryAction()` | 方法 |
| `ExecuteItemSecondaryAction` | `public virtual void ExecuteItemSecondaryAction()` | 方法 |
| `ExecuteItemTertiaryAction` | `public virtual void ExecuteItemTertiaryAction()` | 方法 |
| `PartyTroopManagerVM` | `public PartyTroopManagerVM(PartyVM partyVM)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `OpenPopUp` | `public virtual void OpenPopUp()` | 方法 |
| `ExecuteDone` | `public virtual void ExecuteDone()` | 方法 |
| `ConfirmCancel` | `protected virtual void ConfirmCancel()` | 方法 |
| `UpdateOpenButtonHint` | `public void UpdateOpenButtonHint(bool isDisabled, bool isIrrelevant, bool isUpgradesDisabled)` | 方法 |
| `ExecuteCancel` | `public abstract void ExecuteCancel();` | 方法 |
| `ShowCancelInquiry` | `protected void ShowCancelInquiry(Action confirmCancel)` | 方法 |
| `UpdateLabels` | `protected void UpdateLabels()` | 方法 |
| `SetFocusedCharacter` | `protected void SetFocusedCharacter(PartyTroopManagerItemVM troop)` | 方法 |
| `SetDoneInputKey` | `public void SetDoneInputKey(HotKey hotKey)` | 方法 |
| `SetCancelInputKey` | `public void SetCancelInputKey(HotKey hotKey)` | 方法 |
| `SetPrimaryActionInputKey` | `public void SetPrimaryActionInputKey(HotKey hotKey)` | 方法 |
| `SetSecondaryActionInputKey` | `public void SetSecondaryActionInputKey(HotKey hotKey)` | 方法 |
| `SetTertiaryActionInputKey` | `public void SetTertiaryActionInputKey(HotKey hotKey)` | 方法 |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey` | 属性 |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey` | 属性 |
| `PrimaryActionInputKey` | `public InputKeyItemVM PrimaryActionInputKey` | 属性 |
| `SecondaryActionInputKey` | `public InputKeyItemVM SecondaryActionInputKey` | 属性 |
| `TertiaryActionInputKey` | `public InputKeyItemVM TertiaryActionInputKey` | 属性 |
| `IsFocusedOnACharacter` | `public bool IsFocusedOnACharacter` | 属性 |
| `IsOpen` | `public bool IsOpen` | 属性 |
| `IsUpgradePopUp` | `public bool IsUpgradePopUp` | 属性 |
| `IsPrimaryActionAvailable` | `public bool IsPrimaryActionAvailable` | 属性 |
| `IsSecondaryActionAvailable` | `public bool IsSecondaryActionAvailable` | 属性 |
| `IsTertiaryActionAvailable` | `public bool IsTertiaryActionAvailable` | 属性 |
| `FocusedTroop` | `public PartyTroopManagerItemVM FocusedTroop` | 属性 |
| `MBBindingList` | `public MBBindingList<PartyTroopManagerItemVM>Troops` | 属性 |
| `OpenButtonHint` | `public HintViewModel OpenButtonHint` | 属性 |
| `UsedHorsesHint` | `public BasicTooltipViewModel UsedHorsesHint` | 属性 |
| `TitleText` | `public string TitleText` | 属性 |
| `AvatarText` | `public string AvatarText` | 属性 |
| `NameText` | `public string NameText` | 属性 |
| `CountText` | `public string CountText` | 属性 |
| `GoldChangeText` | `public string GoldChangeText` | 属性 |
| `HorseChangeText` | `public string HorseChangeText` | 属性 |
| `MoraleChangeText` | `public string MoraleChangeText` | 属性 |
| `DoneLbl` | `public string DoneLbl` | 属性 |
| `CancelLbl` | `public string CancelLbl` | 属性 |
| `_openButtonEnabledHint` | `protected TextObject _openButtonEnabledHint` | 字段 |
| `_openButtonNoTroopsHint` | `protected TextObject _openButtonNoTroopsHint` | 字段 |
| `_openButtonIrrelevantScreenHint` | `protected TextObject _openButtonIrrelevantScreenHint` | 字段 |
| `_openButtonUpgradesDisabledHint` | `protected TextObject _openButtonUpgradesDisabledHint` | 字段 |
| `int>>_initialUsedUpgradeHorsesHistory` | `protected List<Tuple<EquipmentElement, int>>_initialUsedUpgradeHorsesHistory` | 字段 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 PartyRecruitTroopVM](../PartyRecruitTroopVM/)
- [同命名空间 PartyTroopManagerItemVM](../PartyTroopManagerItemVM/)
- [同命名空间 PartyUpgradeTroopVM](../PartyUpgradeTroopVM/)
