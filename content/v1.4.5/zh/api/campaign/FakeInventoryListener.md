---
title: "FakeInventoryListener"
description: "FakeInventoryListener 的自动生成类参考。"
---
# FakeInventoryListener

**Namespace:** TaleWorlds.CampaignSystem.Inventory
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class FakeInventoryListener : InventoryListener`
**Base:** `InventoryListener`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Inventory/FakeInventoryListener.cs`

## 概述

`FakeInventoryListener` 位于 `TaleWorlds.CampaignSystem.Inventory`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Inventory` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetGold
`public override int GetGold()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 gold 的结果。

```csharp
// 先通过子系统 API 拿到 FakeInventoryListener 实例
FakeInventoryListener fakeInventoryListener = ...;
var result = fakeInventoryListener.GetGold();
```

### GetTraderName
`public override TextObject GetTraderName()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 trader name 的结果。

```csharp
// 先通过子系统 API 拿到 FakeInventoryListener 实例
FakeInventoryListener fakeInventoryListener = ...;
var result = fakeInventoryListener.GetTraderName();
```

### SetGold
`public override void SetGold(int gold)`

**用途 / Purpose:** **用途 / Purpose:** 为 gold 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 FakeInventoryListener 实例
FakeInventoryListener fakeInventoryListener = ...;
fakeInventoryListener.SetGold(0);
```

### OnTransaction
`public override void OnTransaction()`

**用途 / Purpose:** **用途 / Purpose:** 在 transaction 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 FakeInventoryListener 实例
FakeInventoryListener fakeInventoryListener = ...;
fakeInventoryListener.OnTransaction();
```

### GetOppositeParty
`public override PartyBase GetOppositeParty()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 opposite party 的结果。

```csharp
// 先通过子系统 API 拿到 FakeInventoryListener 实例
FakeInventoryListener fakeInventoryListener = ...;
var result = fakeInventoryListener.GetOppositeParty();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
FakeInventoryListener fakeInventoryListener = ...;
fakeInventoryListener.GetGold();
```

## 参见

- [本区域目录](../)