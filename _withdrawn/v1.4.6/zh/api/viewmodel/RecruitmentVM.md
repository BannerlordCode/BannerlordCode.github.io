---
title: "RecruitmentVM"
description: "RecruitmentVM：TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Recruitment 的 public 类，继承 ViewModel；公开成员 51 个（方法 13、属性 37、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Recruitment/RecruitmentVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# RecruitmentVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Recruitment`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class RecruitmentVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Recruitment/RecruitmentVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## 概述

RecruitmentVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Recruitment/RecruitmentVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 RecruitmentVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 51 个：13 方法、37 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：RecruitmentVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.CampaignSystem.ViewModelCollection`），命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Recruitment`，继承链 RecruitmentVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 37/51，方法 13/51），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Recruitment/RecruitmentVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsQuitting` | `public bool IsQuitting` | 属性 |
| `RecruitmentVM` | `public RecruitmentVM()` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `RefreshScreen` | `public void RefreshScreen()` | 方法 |
| `ExecuteDone` | `public void ExecuteDone()` | 方法 |
| `ExecuteForceQuit` | `public void ExecuteForceQuit()` | 方法 |
| `ExecuteReset` | `public void ExecuteReset()` | 方法 |
| `ExecuteRecruitAll` | `public void ExecuteRecruitAll()` | 方法 |
| `Deactivate` | `public void Deactivate()` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `ResetHint` | `public HintViewModel ResetHint` | 属性 |
| `FocusedVolunteerTroop` | `public RecruitVolunteerTroopVM FocusedVolunteerTroop` | 属性 |
| `FocusedVolunteerOwner` | `public RecruitVolunteerOwnerVM FocusedVolunteerOwner` | 属性 |
| `PartyWageHint` | `public HintViewModel PartyWageHint` | 属性 |
| `PartyCapacityHint` | `public HintViewModel PartyCapacityHint` | 属性 |
| `PartySpeedHint` | `public BasicTooltipViewModel PartySpeedHint` | 属性 |
| `RemainingFoodHint` | `public HintViewModel RemainingFoodHint` | 属性 |
| `TotalWealthHint` | `public HintViewModel TotalWealthHint` | 属性 |
| `TotalCostHint` | `public HintViewModel TotalCostHint` | 属性 |
| `DoneHint` | `public HintViewModel DoneHint` | 属性 |
| `RecruitAllHint` | `public BasicTooltipViewModel RecruitAllHint` | 属性 |
| `PartyWage` | `public int PartyWage` | 属性 |
| `PartyCapacityText` | `public string PartyCapacityText` | 属性 |
| `PartyWageText` | `public string PartyWageText` | 属性 |
| `RecruitAllText` | `public string RecruitAllText` | 属性 |
| `PartySpeedText` | `public string PartySpeedText` | 属性 |
| `ResetAllText` | `public string ResetAllText` | 属性 |
| `CancelText` | `public string CancelText` | 属性 |
| `RemainingFoodText` | `public string RemainingFoodText` | 属性 |
| `TotalCostText` | `public string TotalCostText` | 属性 |
| `Enabled` | `public bool Enabled` | 属性 |
| `IsDoneEnabled` | `public bool IsDoneEnabled` | 属性 |
| `IsPartyCapacityWarningEnabled` | `public bool IsPartyCapacityWarningEnabled` | 属性 |
| `TitleText` | `public string TitleText` | 属性 |
| `DoneText` | `public string DoneText` | 属性 |
| `CanRecruitAll` | `public bool CanRecruitAll` | 属性 |
| `TotalWealth` | `public int TotalWealth` | 属性 |
| `PartyCapacity` | `public int PartyCapacity` | 属性 |
| `InitialPartySize` | `public int InitialPartySize` | 属性 |
| `CurrentPartySize` | `public int CurrentPartySize` | 属性 |
| `MBBindingList` | `public MBBindingList<RecruitVolunteerVM>VolunteerList` | 属性 |
| `MBBindingList` | `public MBBindingList<RecruitVolunteerTroopVM>TroopsInCart` | 属性 |
| `SetGetKeyTextFromKeyIDFunc` | `public void SetGetKeyTextFromKeyIDFunc(Func<string, TextObject>getKeyTextFromKeyId)` | 方法 |
| `SetCancelInputKey` | `public void SetCancelInputKey(HotKey hotKey)` | 方法 |
| `SetDoneInputKey` | `public void SetDoneInputKey(HotKey hotKey)` | 方法 |
| `SetRecruitAllInputKey` | `public void SetRecruitAllInputKey(HotKey hotKey)` | 方法 |
| `SetResetInputKey` | `public void SetResetInputKey(HotKey hotKey)` | 方法 |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey` | 属性 |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey` | 属性 |
| `ResetInputKey` | `public InputKeyItemVM ResetInputKey` | 属性 |
| `RecruitAllInputKey` | `public InputKeyItemVM RecruitAllInputKey` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 RecruitVolunteerOwnerVM](../RecruitVolunteerOwnerVM/)
- [同命名空间 RecruitVolunteerTroopVM](../RecruitVolunteerTroopVM/)
- [同命名空间 RecruitVolunteerVM](../RecruitVolunteerVM/)
