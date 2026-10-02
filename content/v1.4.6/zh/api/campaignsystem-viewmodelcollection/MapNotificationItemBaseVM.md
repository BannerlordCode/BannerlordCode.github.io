---
title: "MapNotificationItemBaseVM"
description: "MapNotificationItemBaseVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 19 个（方法 9、属性 9、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapNotificationTypes/MapNotificationItemBaseVM.cs。"
---
# MapNotificationItemBaseVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class MapNotificationItemBaseVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapNotificationTypes/MapNotificationItemBaseVM.cs`

## 概述

MapNotificationItemBaseVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapNotificationTypes/MapNotificationItemBaseVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 MapNotificationItemBaseVM → ViewModel。public/protected 成员共 19 个：9 方法、9 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MapNotificationItemBaseVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes），继承链 MapNotificationItemBaseVM → ViewModel。成员构成以方法为主（方法 9/19，属性 9/19），对外主要以操作入口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapNotificationTypes/MapNotificationItemBaseVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `NavigationHandler` | `public INavigationHandler NavigationHandler` | 属性 |
| `Data` | `public InformationData Data` | 属性 |
| `MapNotificationItemBaseVM` | `public MapNotificationItemBaseVM(InformationData data)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `SetNavigationHandler` | `public void SetNavigationHandler(INavigationHandler navigationHandler)` | 方法 |
| `SetFastMoveCameraToPosition` | `public void SetFastMoveCameraToPosition(Action<CampaignVec2>fastMoveCameraToPosition)` | 方法 |
| `ExecuteAction` | `public void ExecuteAction()` | 方法 |
| `ExecuteRemove` | `public void ExecuteRemove()` | 方法 |
| `ExecuteSetFocused` | `public void ExecuteSetFocused()` | 方法 |
| `ExecuteSetUnfocused` | `public void ExecuteSetUnfocused()` | 方法 |
| `ManualRefreshRelevantStatus` | `public virtual void ManualRefreshRelevantStatus()` | 方法 |
| `SetRemoveInputKey` | `public void SetRemoveInputKey(HotKey hotKey)` | 方法 |
| `RemoveInputKey` | `public InputKeyItemVM RemoveInputKey` | 属性 |
| `IsFocused` | `public bool IsFocused` | 属性 |
| `NotificationIdentifier` | `public string NotificationIdentifier` | 属性 |
| `TitleText` | `public string TitleText` | 属性 |
| `ForceInspection` | `public bool ForceInspection` | 属性 |
| `DescriptionText` | `public string DescriptionText` | 属性 |
| `SoundId` | `public string SoundId` | 属性 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AcceptCallToWarOfferNotificationItemVM](../AcceptCallToWarOfferNotificationItemVM)
- [同命名空间 AlleyLeaderDiedMapNotificationItemVM](../AlleyLeaderDiedMapNotificationItemVM)
- [同命名空间 AlleyUnderAttackMapNotificationItemVM](../AlleyUnderAttackMapNotificationItemVM)
- [同命名空间 AllianceOfferNotificationItemVM](../AllianceOfferNotificationItemVM)
