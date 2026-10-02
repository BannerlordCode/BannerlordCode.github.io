---
title: "BarterVM"
description: "BarterVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 57 个（方法 20、属性 36、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Barter/BarterVM.cs。"
---
# BarterVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Barter`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class BarterVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Barter/BarterVM.cs`

## 概述

BarterVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Barter/BarterVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 BarterVM → ViewModel。public/protected 成员共 57 个：20 方法、36 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BarterVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.Barter），继承链 BarterVM → ViewModel。成员构成以属性为主（属性 36/57，方法 20/57），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Barter/BarterVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `BarterVM` | `public BarterVM(BarterData args)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `OnInitialized` | `public void OnInitialized()` | 方法 |
| `ExecuteTransferAllLeftFief` | `public void ExecuteTransferAllLeftFief()` | 方法 |
| `ExecuteAutoBalance` | `public void ExecuteAutoBalance()` | 方法 |
| `ExecuteTransferAllLeftItem` | `public void ExecuteTransferAllLeftItem()` | 方法 |
| `ExecuteTransferAllLeftPrisoner` | `public void ExecuteTransferAllLeftPrisoner()` | 方法 |
| `ExecuteTransferAllLeftOther` | `public void ExecuteTransferAllLeftOther()` | 方法 |
| `ExecuteTransferAllRightFief` | `public void ExecuteTransferAllRightFief()` | 方法 |
| `ExecuteTransferAllRightItem` | `public void ExecuteTransferAllRightItem()` | 方法 |
| `ExecuteTransferAllRightPrisoner` | `public void ExecuteTransferAllRightPrisoner()` | 方法 |
| `ExecuteTransferAllRightOther` | `public void ExecuteTransferAllRightOther()` | 方法 |
| `ExecuteOffer` | `public void ExecuteOffer()` | 方法 |
| `ExecuteCancel` | `public void ExecuteCancel()` | 方法 |
| `ExecuteReset` | `public void ExecuteReset()` | 方法 |
| `OnTransferItem` | `public void OnTransferItem(Barterable barter, bool isTransferrable)` | 方法 |
| `FiefLbl` | `public string FiefLbl` | 属性 |
| `PrisonerLbl` | `public string PrisonerLbl` | 属性 |
| `ItemLbl` | `public string ItemLbl` | 属性 |
| `OtherLbl` | `public string OtherLbl` | 属性 |
| `CancelLbl` | `public string CancelLbl` | 属性 |
| `ResetLbl` | `public string ResetLbl` | 属性 |
| `OfferLbl` | `public string OfferLbl` | 属性 |
| `DiplomaticLbl` | `public string DiplomaticLbl` | 属性 |
| `AutoBalanceHint` | `public HintViewModel AutoBalanceHint` | 属性 |
| `LeftHero` | `public HeroVM LeftHero` | 属性 |
| `RightHero` | `public HeroVM RightHero` | 属性 |
| `IsOfferDisabled` | `public bool IsOfferDisabled` | 属性 |
| `LeftMaxGold` | `public int LeftMaxGold` | 属性 |
| `RightMaxGold` | `public int RightMaxGold` | 属性 |
| `LeftNameLbl` | `public string LeftNameLbl` | 属性 |
| `RightNameLbl` | `public string RightNameLbl` | 属性 |
| `MBBindingList` | `public MBBindingList<BarterItemVM>LeftFiefList` | 属性 |
| `MBBindingList` | `public MBBindingList<BarterItemVM>RightFiefList` | 属性 |
| `MBBindingList` | `public MBBindingList<BarterItemVM>LeftPrisonerList` | 属性 |
| `MBBindingList` | `public MBBindingList<BarterItemVM>RightPrisonerList` | 属性 |
| `MBBindingList` | `public MBBindingList<BarterItemVM>LeftItemList` | 属性 |
| `MBBindingList` | `public MBBindingList<BarterItemVM>RightItemList` | 属性 |
| `MBBindingList` | `public MBBindingList<BarterItemVM>LeftOtherList` | 属性 |
| `MBBindingList` | `public MBBindingList<BarterItemVM>RightOtherList` | 属性 |
| `MBBindingList` | `public MBBindingList<BarterItemVM>LeftDiplomaticList` | 属性 |
| `MBBindingList` | `public MBBindingList<BarterItemVM>RightDiplomaticList` | 属性 |
| `MBBindingList` | `public MBBindingList<BarterItemVM>LeftOfferList` | 属性 |
| `MBBindingList` | `public MBBindingList<BarterItemVM>RightOfferList` | 属性 |
| `MBBindingList` | `public MBBindingList<BarterItemVM>RightGoldList` | 属性 |
| `MBBindingList` | `public MBBindingList<BarterItemVM>LeftGoldList` | 属性 |
| `InitializationIsOver` | `public bool InitializationIsOver` | 属性 |
| `ResultBarOtherPercentage` | `public int ResultBarOtherPercentage` | 属性 |
| `ResultBarOffererPercentage` | `public int ResultBarOffererPercentage` | 属性 |
| `SetResetInputKey` | `public void SetResetInputKey(HotKey hotkey)` | 方法 |
| `SetDoneInputKey` | `public void SetDoneInputKey(HotKey hotkey)` | 方法 |
| `SetCancelInputKey` | `public void SetCancelInputKey(HotKey hotkey)` | 方法 |
| `ResetInputKey` | `public InputKeyItemVM ResetInputKey` | 属性 |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey` | 属性 |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey` | 属性 |
| `InitializeStaticContent` | `public void InitializeStaticContent()` | 方法 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 BarterItemVM](../BarterItemVM)
