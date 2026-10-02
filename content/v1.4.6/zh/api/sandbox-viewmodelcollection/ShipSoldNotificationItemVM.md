---
title: "ShipSoldNotificationItemVM"
description: "ShipSoldNotificationItemVM：SandBox.ViewModelCollection 的 public 类，继承 SettlementNotificationItemBaseVM；公开成员 5 个（方法 1、属性 3、字段 0）。源文件 SandBox.ViewModelCollection/Nameplate/NameplateNotifications/SettlementNotificationTypes/ShipSoldNotificationItemVM.cs。"
---
# ShipSoldNotificationItemVM

**Namespace:** `SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class ShipSoldNotificationItemVM : SettlementNotificationItemBaseVM`
**File:** `SandBox.ViewModelCollection/Nameplate/NameplateNotifications/SettlementNotificationTypes/ShipSoldNotificationItemVM.cs`

## 概述

ShipSoldNotificationItemVM 位于 SandBox.ViewModelCollection 模块，源文件 SandBox.ViewModelCollection/Nameplate/NameplateNotifications/SettlementNotificationTypes/ShipSoldNotificationItemVM.cs。它是一个 public 类，实现/继承 SettlementNotificationItemBaseVM，继承链为 ShipSoldNotificationItemVM → SettlementNotificationItemBaseVM → ViewModel。public/protected 成员共 5 个：1 方法、3 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ShipSoldNotificationItemVM 是 SandBox.ViewModelCollection 的顶层类型，命名空间与模块目录不同（SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes），继承链 ShipSoldNotificationItemVM → SettlementNotificationItemBaseVM → ViewModel。成员构成以属性为主（属性 3/5，方法 1/5），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.ViewModelCollection/Nameplate/NameplateNotifications/SettlementNotificationTypes/ShipSoldNotificationItemVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Ship` | `public Ship Ship` | 属性 |
| `SettlementParty` | `public PartyBase SettlementParty` | 属性 |
| `HeroParty` | `public PartyBase HeroParty` | 属性 |
| `ShipSoldNotificationItemVM` | `public ShipSoldNotificationItemVM(Action<SettlementNotificationItemBaseVM>onRemove, Ship ship, PartyBase settlementParty, PartyBase heroParty, int amount, int createdTick) : base(onRemove, createdTick)` | 构造函数 |
| `AddNewTransaction` | `public void AddNewTransaction(int amount)` | 方法 |

## 参见

- [↑ sandbox-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 SettlementNotificationItemBaseVM](../SettlementNotificationItemBaseVM)
- [同命名空间 CaravanTransactionNotificationItemVM](../CaravanTransactionNotificationItemVM)
- [同命名空间 IssueSolvedByLordNotificationItemVM](../IssueSolvedByLordNotificationItemVM)
- [同命名空间 ItemSoldNotificationItemVM](../ItemSoldNotificationItemVM)
- [同命名空间 PrisonerSoldNotificationItemVM](../PrisonerSoldNotificationItemVM)
