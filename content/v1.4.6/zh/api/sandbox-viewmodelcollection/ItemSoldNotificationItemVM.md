---
title: "ItemSoldNotificationItemVM"
description: "ItemSoldNotificationItemVM：SandBox.ViewModelCollection 的 public 类，继承 SettlementNotificationItemBaseVM；公开成员 5 个（方法 1、属性 3、字段 0）。源文件 SandBox.ViewModelCollection/Nameplate/NameplateNotifications/SettlementNotificationTypes/ItemSoldNotificationItemVM.cs。"
---
# ItemSoldNotificationItemVM

**Namespace:** `SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class ItemSoldNotificationItemVM : SettlementNotificationItemBaseVM`
**File:** `SandBox.ViewModelCollection/Nameplate/NameplateNotifications/SettlementNotificationTypes/ItemSoldNotificationItemVM.cs`

## 概述

ItemSoldNotificationItemVM 位于 SandBox.ViewModelCollection 模块，源文件 SandBox.ViewModelCollection/Nameplate/NameplateNotifications/SettlementNotificationTypes/ItemSoldNotificationItemVM.cs。它是一个 public 类，实现/继承 SettlementNotificationItemBaseVM，继承链为 ItemSoldNotificationItemVM → SettlementNotificationItemBaseVM → ViewModel。public/protected 成员共 5 个：1 方法、3 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ItemSoldNotificationItemVM 是 SandBox.ViewModelCollection 的顶层类型，命名空间与模块目录不同（SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes），继承链 ItemSoldNotificationItemVM → SettlementNotificationItemBaseVM → ViewModel。成员构成以属性为主（属性 3/5，方法 1/5），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.ViewModelCollection/Nameplate/NameplateNotifications/SettlementNotificationTypes/ItemSoldNotificationItemVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Item` | `public ItemRosterElement Item` | 属性 |
| `ReceiverParty` | `public PartyBase ReceiverParty` | 属性 |
| `PayerParty` | `public PartyBase PayerParty` | 属性 |
| `ItemSoldNotificationItemVM` | `public ItemSoldNotificationItemVM(Action<SettlementNotificationItemBaseVM>onRemove, PartyBase receiverParty, PartyBase payerParty, ItemRosterElement item, int number, int createdTick) : base(onRemove, createdTick)` | 构造函数 |
| `AddNewTransaction` | `public void AddNewTransaction(int amount)` | 方法 |

## 参见

- [↑ sandbox-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 SettlementNotificationItemBaseVM](../SettlementNotificationItemBaseVM)
- [同命名空间 CaravanTransactionNotificationItemVM](../CaravanTransactionNotificationItemVM)
- [同命名空间 IssueSolvedByLordNotificationItemVM](../IssueSolvedByLordNotificationItemVM)
- [同命名空间 PrisonerSoldNotificationItemVM](../PrisonerSoldNotificationItemVM)
- [同命名空间 SettlementNameplateNotificationsVM](../SettlementNameplateNotificationsVM)
