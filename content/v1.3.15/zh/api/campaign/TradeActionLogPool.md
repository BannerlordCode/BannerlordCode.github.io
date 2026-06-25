---
title: "TradeActionLogPool"
description: "TradeActionLogPool 的自动生成类参考。"
---
# TradeActionLogPool

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `internal class TradeActionLogPool`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/CaravansCampaignBehavior.cs`

## 概述

`TradeActionLogPool` 位于 `TaleWorlds.CampaignSystem.CampaignBehaviors`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.CampaignBehaviors` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Size` | `public int Size { get; }` |

## 主要方法

### CreateNewLog
`public CaravansCampaignBehavior.TradeActionLog CreateNewLog(Settlement boughtSettlement, int buyPrice, ItemRosterElement itemRosterElement)`

**用途 / Purpose:** **用途 / Purpose:** 构建一个新的 new log 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 TradeActionLogPool 实例
TradeActionLogPool tradeActionLogPool = ...;
var result = tradeActionLogPool.CreateNewLog(boughtSettlement, 0, itemRosterElement);
```

### ReleaseLog
`public void ReleaseLog(CaravansCampaignBehavior.TradeActionLog log)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ReleaseLog 对应的操作。

```csharp
// 先通过子系统 API 拿到 TradeActionLogPool 实例
TradeActionLogPool tradeActionLogPool = ...;
tradeActionLogPool.ReleaseLog(log);
```

### ToString
`public override string ToString()`

**用途 / Purpose:** **用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 TradeActionLogPool 实例
TradeActionLogPool tradeActionLogPool = ...;
var result = tradeActionLogPool.ToString();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
TradeActionLogPool tradeActionLogPool = ...;
tradeActionLogPool.CreateNewLog(boughtSettlement, 0, itemRosterElement);
```

## 参见

- [本区域目录](../)