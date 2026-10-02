---
title: "ClanSettlementItemVM"
description: "ClanSettlementItemVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 29 个（方法 9、属性 19、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanSettlementItemVM.cs。"
---
# ClanSettlementItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ClanSettlementItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanSettlementItemVM.cs`

## 概述

ClanSettlementItemVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanSettlementItemVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 ClanSettlementItemVM → ViewModel。public/protected 成员共 29 个：9 方法、19 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ClanSettlementItemVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement），继承链 ClanSettlementItemVM → ViewModel。成员构成以属性为主（属性 19/29，方法 9/29），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanSettlementItemVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ClanSettlementItemVM` | `public ClanSettlementItemVM(Settlement settlement, Action<ClanSettlementItemVM>onSelection, Action onShowSendMembers, ITeleportationCampaignBehavior teleportationBehavior)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `CreateSettlementItem` | `protected virtual ClanSettlementItemVM CreateSettlementItem(Settlement settlement, Action<ClanSettlementItemVM>onSelection, Action onShowSendMembers, ITeleportationCampaignBehavior teleportationBehavior)` | 方法 |
| `OnSettlementSelection` | `public void OnSettlementSelection()` | 方法 |
| `ExecuteLink` | `public void ExecuteLink()` | 方法 |
| `ExecuteCloseTooltip` | `public void ExecuteCloseTooltip()` | 方法 |
| `ExecuteOpenTooltip` | `public void ExecuteOpenTooltip()` | 方法 |
| `ExecuteSendMembers` | `public void ExecuteSendMembers()` | 方法 |
| `UpdateProperties` | `protected virtual void UpdateProperties()` | 方法 |
| `UpdateProfitProperties` | `protected virtual void UpdateProfitProperties()` | 方法 |
| `Governor` | `public HeroVM Governor` | 属性 |
| `MBBindingList` | `public MBBindingList<SelectableFiefItemPropertyVM>ItemProperties` | 属性 |
| `MBBindingList` | `public MBBindingList<ProfitItemPropertyVM>ProfitItemProperties` | 属性 |
| `TotalProfit` | `public ProfitItemPropertyVM TotalProfit` | 属性 |
| `FileName` | `public string FileName` | 属性 |
| `ImageName` | `public string ImageName` | 属性 |
| `VillagesText` | `public string VillagesText` | 属性 |
| `NotablesText` | `public string NotablesText` | 属性 |
| `MembersText` | `public string MembersText` | 属性 |
| `IsFortification` | `public bool IsFortification` | 属性 |
| `HasGovernor` | `public bool HasGovernor` | 属性 |
| `HasNotables` | `public bool HasNotables` | 属性 |
| `IsSendMembersEnabled` | `public bool IsSendMembersEnabled` | 属性 |
| `IsSelected` | `public bool IsSelected` | 属性 |
| `Name` | `public string Name` | 属性 |
| `MBBindingList` | `public MBBindingList<ClanSettlementItemVM>VillagesOwned` | 属性 |
| `MBBindingList` | `public MBBindingList<HeroVM>Notables` | 属性 |
| `MBBindingList` | `public MBBindingList<HeroVM>Members` | 属性 |
| `SendMembersHint` | `public HintViewModel SendMembersHint` | 属性 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 CardSelectionItemSpriteType](../CardSelectionItemSpriteType)
- [同命名空间 ClanCardSelectionInfo](../ClanCardSelectionInfo)
- [同命名空间 ClanCardSelectionItemInfo](../ClanCardSelectionItemInfo)
- [同命名空间 ClanCardSelectionItemPropertyInfo](../ClanCardSelectionItemPropertyInfo)
