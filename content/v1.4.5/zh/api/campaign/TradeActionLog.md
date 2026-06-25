---
title: "TradeActionLog"
description: "TradeActionLog 的自动生成类参考。"
---
# TradeActionLog

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `internal class TradeActionLog`
**Base:** 无
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/CaravansCampaignBehavior.cs`

## 概述

`TradeActionLog` 位于 `TaleWorlds.CampaignSystem.CampaignBehaviors`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.CampaignBehaviors` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### OnSellAction
`public void OnSellAction(Settlement soldSettlement, int sellPrice)`

**用途 / Purpose:** **用途 / Purpose:** 在 sell action 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TradeActionLog 实例
TradeActionLog tradeActionLog = ...;
tradeActionLog.OnSellAction(soldSettlement, 0);
```

### Reset
`public void Reset()`

**用途 / Purpose:** **用途 / Purpose:** 将当前对象重置为默认或初始状态。

```csharp
// 先通过子系统 API 拿到 TradeActionLog 实例
TradeActionLog tradeActionLog = ...;
tradeActionLog.Reset();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
TradeActionLog tradeActionLog = ...;
tradeActionLog.OnSellAction(soldSettlement, 0);
```

## 参见

- [本区域目录](../)