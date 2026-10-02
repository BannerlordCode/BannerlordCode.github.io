---
title: "SettlementNameplateNotificationsVM"
description: "SettlementNameplateNotificationsVM：SandBox.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 7 个（方法 4、属性 2、字段 0）。源文件 SandBox.ViewModelCollection/Nameplate/NameplateNotifications/SettlementNotificationTypes/SettlementNameplateNotificationsVM.cs。"
---
# SettlementNameplateNotificationsVM

**Namespace:** `SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class SettlementNameplateNotificationsVM : ViewModel`
**File:** `SandBox.ViewModelCollection/Nameplate/NameplateNotifications/SettlementNotificationTypes/SettlementNameplateNotificationsVM.cs`

## 概述

SettlementNameplateNotificationsVM 位于 SandBox.ViewModelCollection 模块，源文件 SandBox.ViewModelCollection/Nameplate/NameplateNotifications/SettlementNotificationTypes/SettlementNameplateNotificationsVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 SettlementNameplateNotificationsVM → ViewModel。public/protected 成员共 7 个：4 方法、2 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SettlementNameplateNotificationsVM 是 SandBox.ViewModelCollection 的顶层类型，命名空间与模块目录不同（SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes），继承链 SettlementNameplateNotificationsVM → ViewModel。成员构成以方法为主（方法 4/7，属性 2/7），对外主要以操作入口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.ViewModelCollection/Nameplate/NameplateNotifications/SettlementNotificationTypes/SettlementNameplateNotificationsVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsEventsRegistered` | `public bool IsEventsRegistered` | 属性 |
| `SettlementNameplateNotificationsVM` | `public SettlementNameplateNotificationsVM(Settlement settlement)` | 构造函数 |
| `Tick` | `public void Tick()` | 方法 |
| `RegisterEvents` | `public void RegisterEvents()` | 方法 |
| `UnloadEvents` | `public void UnloadEvents()` | 方法 |
| `IsValidItemForNotification` | `public bool IsValidItemForNotification(ItemRosterElement item)` | 方法 |
| `MBBindingList` | `public MBBindingList<SettlementNotificationItemBaseVM>Notifications` | 属性 |

## 参见

- [↑ sandbox-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 CaravanTransactionNotificationItemVM](../CaravanTransactionNotificationItemVM)
- [同命名空间 IssueSolvedByLordNotificationItemVM](../IssueSolvedByLordNotificationItemVM)
- [同命名空间 ItemSoldNotificationItemVM](../ItemSoldNotificationItemVM)
- [同命名空间 PrisonerSoldNotificationItemVM](../PrisonerSoldNotificationItemVM)
