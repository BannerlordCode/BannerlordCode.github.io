---
title: "ArmyManagementItemVM"
description: "ArmyManagementItemVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 33 个（方法 10、属性 22、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ArmyManagement/ArmyManagementItemVM.cs。"
---
# ArmyManagementItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ArmyManagementItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ArmyManagement/ArmyManagementItemVM.cs`

## 概述

ArmyManagementItemVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ArmyManagement/ArmyManagementItemVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 ArmyManagementItemVM → ViewModel。public/protected 成员共 33 个：10 方法、22 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ArmyManagementItemVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement），继承链 ArmyManagementItemVM → ViewModel。成员构成以属性为主（属性 22/33，方法 10/33），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ArmyManagement/ArmyManagementItemVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DistInTime` | `public float DistInTime` | 属性 |
| `_distance` | `public float _distance` | 属性 |
| `Clan` | `public Clan Clan` | 属性 |
| `ArmyManagementItemVM` | `public ArmyManagementItemVM(Action<ArmyManagementItemVM>onAddToCart, Action<ArmyManagementItemVM>onRemove, Action<ArmyManagementItemVM>onFocus, MobileParty mobileParty)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `ExecuteAction` | `public void ExecuteAction()` | 方法 |
| `ExecuteSetFocused` | `public void ExecuteSetFocused()` | 方法 |
| `ExecuteSetUnfocused` | `public void ExecuteSetUnfocused()` | 方法 |
| `UpdateEligibility` | `public void UpdateEligibility()` | 方法 |
| `ExecuteBeginHint` | `public void ExecuteBeginHint()` | 方法 |
| `ExecuteBeginClanHint` | `public void ExecuteBeginClanHint()` | 方法 |
| `ExecuteEndHint` | `public void ExecuteEndHint()` | 方法 |
| `ExecuteOpenEncyclopedia` | `public void ExecuteOpenEncyclopedia()` | 方法 |
| `ExecuteOpenClanEncyclopedia` | `public void ExecuteOpenClanEncyclopedia()` | 方法 |
| `RemoveInputKey` | `public InputKeyItemVM RemoveInputKey` | 属性 |
| `IsEligible` | `public bool IsEligible` | 属性 |
| `IsInCart` | `public bool IsInCart` | 属性 |
| `IsMainHero` | `public bool IsMainHero` | 属性 |
| `Strength` | `public int Strength` | 属性 |
| `ShipCount` | `public int ShipCount` | 属性 |
| `HasShip` | `public bool HasShip` | 属性 |
| `DistanceText` | `public string DistanceText` | 属性 |
| `InArmyText` | `public string InArmyText` | 属性 |
| `Cost` | `public int Cost` | 属性 |
| `IsCostRelevant` | `public bool IsCostRelevant` | 属性 |
| `Relation` | `public int Relation` | 属性 |
| `ClanBanner` | `public BannerImageIdentifierVM ClanBanner` | 属性 |
| `LordFace` | `public CharacterImageIdentifierVM LordFace` | 属性 |
| `NameText` | `public string NameText` | 属性 |
| `IsAlreadyWithPlayer` | `public bool IsAlreadyWithPlayer` | 属性 |
| `IsTransferDisabled` | `public bool IsTransferDisabled` | 属性 |
| `LeaderNameText` | `public string LeaderNameText` | 属性 |
| `IsFocused` | `public bool IsFocused` | 属性 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ArmyCohesionBoostedByPlayerEvent](../ArmyCohesionBoostedByPlayerEvent)
- [同命名空间 ArmyManagementBoostEventVM](../ArmyManagementBoostEventVM)
- [同命名空间 ArmyManagementSortControllerVM](../ArmyManagementSortControllerVM)
- [同命名空间 ArmyManagementVM](../ArmyManagementVM)
