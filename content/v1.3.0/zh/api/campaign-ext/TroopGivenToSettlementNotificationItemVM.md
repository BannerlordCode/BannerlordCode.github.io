---
title: "TroopGivenToSettlementNotificationItemVM"
description: "TroopGivenToSettlementNotificationItemVM 的自动生成类参考。"
---
# TroopGivenToSettlementNotificationItemVM

**Namespace:** SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes
**Module:** SandBox.ViewModelCollection
**Type:** `public class TroopGivenToSettlementNotificationItemVM : SettlementNotificationItemBaseVM`
**Base:** `SettlementNotificationItemBaseVM`
**File:** `SandBox.ViewModelCollection/Nameplate/NameplateNotifications/SettlementNotificationTypes/TroopGivenToSettlementNotificationItemVM.cs`

## 概述

`TroopGivenToSettlementNotificationItemVM` 位于 `SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `GiverHero` | `public Hero GiverHero { get; }` |
| `Troops` | `public TroopRoster Troops { get; }` |

## 主要方法

### AddNewAction
`public void AddNewAction(TroopRoster newTroops)`

**用途 / Purpose:** **用途 / Purpose:** 将 new action 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 TroopGivenToSettlementNotificationItemVM 实例
TroopGivenToSettlementNotificationItemVM troopGivenToSettlementNotificationItemVM = ...;
troopGivenToSettlementNotificationItemVM.AddNewAction(newTroops);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
TroopGivenToSettlementNotificationItemVM troopGivenToSettlementNotificationItemVM = ...;
troopGivenToSettlementNotificationItemVM.AddNewAction(newTroops);
```

## 参见

- [本区域目录](../)