---
title: "TroopGivenToSettlementNotificationItemVM"
description: "TroopGivenToSettlementNotificationItemVM：SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes 的 public 类，继承 SettlementNotificationItemBaseVM；公开成员 4 个（方法 1、属性 2、字段 0）。canonical 桶 sandbox。源文件 SandBox.ViewModelCollection/Nameplate/NameplateNotifications/SettlementNotificationTypes/TroopGivenToSettlementNotificationItemVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TroopGivenToSettlementNotificationItemVM

**Namespace:** `SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class TroopGivenToSettlementNotificationItemVM : SettlementNotificationItemBaseVM`
**File:** `SandBox.ViewModelCollection/Nameplate/NameplateNotifications/SettlementNotificationTypes/TroopGivenToSettlementNotificationItemVM.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

TroopGivenToSettlementNotificationItemVM 位于 SandBox.ViewModelCollection 模块，源文件 SandBox.ViewModelCollection/Nameplate/NameplateNotifications/SettlementNotificationTypes/TroopGivenToSettlementNotificationItemVM.cs。它是一个 public 类，实现/继承 SettlementNotificationItemBaseVM，继承链为 TroopGivenToSettlementNotificationItemVM → SettlementNotificationItemBaseVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 4 个：1 方法、2 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TroopGivenToSettlementNotificationItemVM 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes`，继承链 TroopGivenToSettlementNotificationItemVM → SettlementNotificationItemBaseVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 2/4，方法 1/4），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.ViewModelCollection/Nameplate/NameplateNotifications/SettlementNotificationTypes/TroopGivenToSettlementNotificationItemVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GiverHero` | `public Hero GiverHero` | 属性 |
| `Troops` | `public TroopRoster Troops` | 属性 |
| `TroopGivenToSettlementNotificationItemVM` | `public TroopGivenToSettlementNotificationItemVM(Action<SettlementNotificationItemBaseVM>onRemove, Hero giverHero, TroopRoster troops, int createdTick) : base(onRemove, createdTick)` | 构造函数 |
| `AddNewAction` | `public void AddNewAction(TroopRoster newTroops)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 SettlementNotificationItemBaseVM](../SettlementNotificationItemBaseVM/)
- [同命名空间 CaravanTransactionNotificationItemVM](../CaravanTransactionNotificationItemVM/)
- [同命名空间 IssueSolvedByLordNotificationItemVM](../IssueSolvedByLordNotificationItemVM/)
- [同命名空间 ItemSoldNotificationItemVM](../ItemSoldNotificationItemVM/)
- [同命名空间 PrisonerSoldNotificationItemVM](../PrisonerSoldNotificationItemVM/)
