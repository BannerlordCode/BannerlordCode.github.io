---
title: "SettlementNameplateNotificationsVM"
description: "SettlementNameplateNotificationsVM 的自动生成类参考。"
---
# SettlementNameplateNotificationsVM

**Namespace:** SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes
**Module:** SandBox.ViewModelCollection
**Type:** `public class SettlementNameplateNotificationsVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes/SettlementNameplateNotificationsVM.cs`

## 概述

`SettlementNameplateNotificationsVM` 位于 `SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsEventsRegistered` | `public bool IsEventsRegistered { get; }` |
| `Notifications` | `public MBBindingList<SettlementNotificationItemBaseVM> Notifications { get; set; }` |

## 主要方法

### Tick
`public void Tick()`

**用途 / Purpose:** **用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 SettlementNameplateNotificationsVM 实例
SettlementNameplateNotificationsVM settlementNameplateNotificationsVM = ...;
settlementNameplateNotificationsVM.Tick();
```

### RegisterEvents
`public void RegisterEvents()`

**用途 / Purpose:** **用途 / Purpose:** 将events注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 SettlementNameplateNotificationsVM 实例
SettlementNameplateNotificationsVM settlementNameplateNotificationsVM = ...;
settlementNameplateNotificationsVM.RegisterEvents();
```

### UnloadEvents
`public void UnloadEvents()`

**用途 / Purpose:** **用途 / Purpose:** 调用 UnloadEvents 对应的操作。

```csharp
// 先通过子系统 API 拿到 SettlementNameplateNotificationsVM 实例
SettlementNameplateNotificationsVM settlementNameplateNotificationsVM = ...;
settlementNameplateNotificationsVM.UnloadEvents();
```

### IsValidItemForNotification
`public bool IsValidItemForNotification(ItemRosterElement item)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 valid item for notification 状态或条件。

```csharp
// 先通过子系统 API 拿到 SettlementNameplateNotificationsVM 实例
SettlementNameplateNotificationsVM settlementNameplateNotificationsVM = ...;
var result = settlementNameplateNotificationsVM.IsValidItemForNotification(item);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
SettlementNameplateNotificationsVM settlementNameplateNotificationsVM = ...;
settlementNameplateNotificationsVM.Tick();
```

## 参见

- [本区域目录](../)