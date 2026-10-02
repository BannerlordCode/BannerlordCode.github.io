---
title: "MapNotificationVM"
description: "MapNotificationVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 13 个（方法 8、属性 3、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapNotificationVM.cs。"
---
# MapNotificationVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Map`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class MapNotificationVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapNotificationVM.cs`

## 概述

MapNotificationVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapNotificationVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 MapNotificationVM → ViewModel。public/protected 成员共 13 个：8 方法、3 属性、1 事件、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MapNotificationVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.Map），继承链 MapNotificationVM → ViewModel。成员构成以方法为主（方法 8/13，属性 3/13），对外主要以操作入口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapNotificationVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Action` | `public event Action<MapNotificationItemBaseVM>ReceiveNewNotification;` | 事件 |
| `MapNotificationVM` | `public MapNotificationVM(INavigationHandler navigationHandler, Action<CampaignVec2>fastMoveCameraToPosition)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `RegisterMapNotificationType` | `public void RegisterMapNotificationType(Type data, Type item)` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `OnFrameTick` | `public void OnFrameTick(float dt)` | 方法 |
| `OnMenuModeTick` | `public void OnMenuModeTick(float dt)` | 方法 |
| `AddMapNotification` | `public void AddMapNotification(InformationData data)` | 方法 |
| `RemoveAllNotifications` | `public void RemoveAllNotifications()` | 方法 |
| `SetRemoveInputKey` | `public void SetRemoveInputKey(HotKey hotKey)` | 方法 |
| `RemoveInputKey` | `public InputKeyItemVM RemoveInputKey` | 属性 |
| `FocusedNotificationItem` | `public MapNotificationItemBaseVM FocusedNotificationItem` | 属性 |
| `MBBindingList` | `public MBBindingList<MapNotificationItemBaseVM>NotificationItems` | 属性 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
