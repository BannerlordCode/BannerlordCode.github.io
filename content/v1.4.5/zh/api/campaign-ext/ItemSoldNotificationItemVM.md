---
title: "ItemSoldNotificationItemVM"
description: "ItemSoldNotificationItemVM 的自动生成类参考。"
---
# ItemSoldNotificationItemVM

**Namespace:** SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes
**Module:** SandBox.ViewModelCollection
**Type:** `public class ItemSoldNotificationItemVM : SettlementNotificationItemBaseVM`
**Base:** `SettlementNotificationItemBaseVM`
**File:** `Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes/ItemSoldNotificationItemVM.cs`

## 概述

`ItemSoldNotificationItemVM` 位于 `SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Item` | `public ItemRosterElement Item { get; }` |
| `ReceiverParty` | `public PartyBase ReceiverParty { get; }` |
| `PayerParty` | `public PartyBase PayerParty { get; }` |

## 主要方法

### AddNewTransaction
`public void AddNewTransaction(int amount)`

**用途 / Purpose:** 将 new transaction 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 ItemSoldNotificationItemVM 实例
ItemSoldNotificationItemVM itemSoldNotificationItemVM = ...;
itemSoldNotificationItemVM.AddNewTransaction(0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ItemSoldNotificationItemVM itemSoldNotificationItemVM = ...;
itemSoldNotificationItemVM.AddNewTransaction(0);
```

## 参见

- [本区域目录](../)