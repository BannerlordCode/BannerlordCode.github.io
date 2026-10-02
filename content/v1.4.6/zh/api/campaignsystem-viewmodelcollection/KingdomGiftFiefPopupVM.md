---
title: "KingdomGiftFiefPopupVM"
description: "KingdomGiftFiefPopupVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 24 个（方法 7、属性 16、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/KingdomGiftFiefPopupVM.cs。"
---
# KingdomGiftFiefPopupVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class KingdomGiftFiefPopupVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/KingdomGiftFiefPopupVM.cs`

## 概述

KingdomGiftFiefPopupVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/KingdomGiftFiefPopupVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 KingdomGiftFiefPopupVM → ViewModel。public/protected 成员共 24 个：7 方法、16 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：KingdomGiftFiefPopupVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement），继承链 KingdomGiftFiefPopupVM → ViewModel。成员构成以属性为主（属性 16/24，方法 7/24），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/KingdomGiftFiefPopupVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `KingdomGiftFiefPopupVM` | `public KingdomGiftFiefPopupVM(Action onSettlementGranted)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `OpenWith` | `public void OpenWith(Settlement settlement)` | 方法 |
| `ExecuteGiftSettlement` | `public void ExecuteGiftSettlement()` | 方法 |
| `ExecuteClose` | `public void ExecuteClose()` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `SetDoneInputKey` | `public void SetDoneInputKey(HotKey hotKey)` | 方法 |
| `SetCancelInputKey` | `public void SetCancelInputKey(HotKey hotKey)` | 方法 |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey` | 属性 |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey` | 属性 |
| `IsAnyClanSelected` | `public bool IsAnyClanSelected` | 属性 |
| `MBBindingList` | `public MBBindingList<KingdomClanItemVM>Clans` | 属性 |
| `CurrentSelectedClan` | `public KingdomClanItemVM CurrentSelectedClan` | 属性 |
| `ClanSortController` | `public KingdomClanSortControllerVM ClanSortController` | 属性 |
| `IsOpen` | `public bool IsOpen` | 属性 |
| `TitleText` | `public string TitleText` | 属性 |
| `GiftText` | `public string GiftText` | 属性 |
| `CancelText` | `public string CancelText` | 属性 |
| `BannerText` | `public string BannerText` | 属性 |
| `TypeText` | `public string TypeText` | 属性 |
| `NameText` | `public string NameText` | 属性 |
| `InfluenceText` | `public string InfluenceText` | 属性 |
| `FiefsText` | `public string FiefsText` | 属性 |
| `MembersText` | `public string MembersText` | 属性 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 KingdomCategoryVM](../KingdomCategoryVM)
- [同命名空间 KingdomItemVM](../KingdomItemVM)
- [同命名空间 KingdomManagementVM](../KingdomManagementVM)
- [同命名空间 LeaveKingdomPermissionEvent](../LeaveKingdomPermissionEvent)
