---
title: "PartyNameplateVM"
description: "PartyNameplateVM：SandBox.ViewModelCollection 的 public 类，继承 NameplateVM；公开成员 42 个（方法 10、属性 18、字段 13）。源文件 SandBox.ViewModelCollection/Nameplate/PartyNameplateVM.cs。"
---
# PartyNameplateVM

**Namespace:** `SandBox.ViewModelCollection.Nameplate`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class PartyNameplateVM : NameplateVM`
**File:** `SandBox.ViewModelCollection/Nameplate/PartyNameplateVM.cs`

## 概述

PartyNameplateVM 位于 SandBox.ViewModelCollection 模块，源文件 SandBox.ViewModelCollection/Nameplate/PartyNameplateVM.cs。它是一个 public 类，实现/继承 NameplateVM，继承链为 PartyNameplateVM → NameplateVM → ViewModel。public/protected 成员共 42 个：10 方法、18 属性、13 字段、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：PartyNameplateVM 是 SandBox.ViewModelCollection 的顶层类型，命名空间与模块目录不同（SandBox.ViewModelCollection.Nameplate），继承链 PartyNameplateVM → NameplateVM → ViewModel。成员构成以属性为主（属性 18/42，方法 10/42），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.ViewModelCollection/Nameplate/PartyNameplateVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Party` | `public MobileParty Party` | 属性 |
| `PartyNameplateVM` | `public PartyNameplateVM()` | 构造函数 |
| `InitializeWith` | `public void InitializeWith(MobileParty party, Camera mapCamera)` | 方法 |
| `Clear` | `public virtual void Clear()` | 方法 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `RegisterEvents` | `public void RegisterEvents()` | 方法 |
| `UnregisterEvents` | `public void UnregisterEvents()` | 方法 |
| `RefreshDynamicProperties` | `public override void RefreshDynamicProperties(bool forceUpdate)` | 方法 |
| `RefreshPosition` | `public override void RefreshPosition()` | 方法 |
| `RefreshTutorialStatus` | `public override void RefreshTutorialStatus(string newTutorialHighlightElementID)` | 方法 |
| `DetermineIsVisibleOnMap` | `public void DetermineIsVisibleOnMap()` | 方法 |
| `RefreshBinding` | `public virtual void RefreshBinding()` | 方法 |
| `HeadPosition` | `public Vec2 HeadPosition` | 属性 |
| `Count` | `public string Count` | 属性 |
| `Prisoner` | `public string Prisoner` | 属性 |
| `MBBindingList` | `public MBBindingList<QuestMarkerVM>Quests` | 属性 |
| `Wounded` | `public string Wounded` | 属性 |
| `ExtraInfoText` | `public string ExtraInfoText` | 属性 |
| `MovementSpeedText` | `public string MovementSpeedText` | 属性 |
| `FullName` | `public string FullName` | 属性 |
| `IsInArmy` | `public bool IsInArmy` | 属性 |
| `IsInSettlement` | `public bool IsInSettlement` | 属性 |
| `IsDisorganized` | `public bool IsDisorganized` | 属性 |
| `IsCurrentlyAtSea` | `public bool IsCurrentlyAtSea` | 属性 |
| `IsArmy` | `public bool IsArmy` | 属性 |
| `IsBehind` | `public bool IsBehind` | 属性 |
| `IsHigh` | `public bool IsHigh` | 属性 |
| `ShouldShowFullName` | `public bool ShouldShowFullName` | 属性 |
| `PartyBanner` | `public BannerImageIdentifierVM PartyBanner` | 属性 |
| `PositiveIndicator` | `public static string PositiveIndicator` | 字段 |
| `PositiveArmyIndicator` | `public static string PositiveArmyIndicator` | 字段 |
| `NegativeIndicator` | `public static string NegativeIndicator` | 字段 |
| `NegativeArmyIndicator` | `public static string NegativeArmyIndicator` | 字段 |
| `NeutralIndicator` | `public static string NeutralIndicator` | 字段 |
| `NeutralArmyIndicator` | `public static string NeutralArmyIndicator` | 字段 |
| `MainPartyIndicator` | `public static string MainPartyIndicator` | 字段 |
| `MainPartyArmyIndicator` | `public static string MainPartyArmyIndicator` | 字段 |
| `AllianceIndicator` | `public static string AllianceIndicator` | 字段 |
| `AllianceArmyIndicator` | `public static string AllianceArmyIndicator` | 字段 |
| `_latestPrisonerAmount` | `protected int _latestPrisonerAmount` | 字段 |
| `_latestWoundedAmount` | `protected int _latestWoundedAmount` | 字段 |
| `_latestTotalCount` | `protected int _latestTotalCount` | 字段 |

## 参见

- [↑ sandbox-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 NameplateVM](../NameplateVM)
- [同命名空间 NameplateVM](../NameplateVM)
- [同命名空间 PartyNameplatesVM](../PartyNameplatesVM)
- [同命名空间 PartyPlayerNameplateVM](../PartyPlayerNameplateVM)
- [同命名空间 SettlementNameplateEventItemVM](../SettlementNameplateEventItemVM)
