---
title: "SettlementNotificationItemBaseVM"
description: "SettlementNotificationItemBaseVM 的自动生成类参考。"
---
# SettlementNotificationItemBaseVM

**Namespace:** SandBox.ViewModelCollection.Nameplate.NameplateNotifications
**Module:** SandBox.ViewModelCollection
**Type:** `public class SettlementNotificationItemBaseVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Nameplate.NameplateNotifications/SettlementNotificationItemBaseVM.cs`

## 概述

`SettlementNotificationItemBaseVM` 位于 `SandBox.ViewModelCollection.Nameplate.NameplateNotifications`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.ViewModelCollection.Nameplate.NameplateNotifications` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `CreatedTick` | `public int CreatedTick { get; set; }` |
| `CharacterName` | `public string CharacterName { get; set; }` |
| `RelationType` | `public int RelationType { get; set; }` |
| `Text` | `public string Text { get; set; }` |
| `CharacterVisual` | `public CharacterImageIdentifierVM CharacterVisual { get; set; }` |

## 主要方法

### ExecuteRemove
`public void ExecuteRemove()`

**用途 / Purpose:** 执行 「remove」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SettlementNotificationItemBaseVM 实例
SettlementNotificationItemBaseVM settlementNotificationItemBaseVM = ...;
settlementNotificationItemBaseVM.ExecuteRemove();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
SettlementNotificationItemBaseVM settlementNotificationItemBaseVM = ...;
settlementNotificationItemBaseVM.ExecuteRemove();
```

## 参见

- [本区域目录](../)