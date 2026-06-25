---
title: "TradeAgreementDecisionOutcome"
description: "TradeAgreementDecisionOutcome 的自动生成类参考。"
---
# TradeAgreementDecisionOutcome

**Namespace:** TaleWorlds.CampaignSystem.Election
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class TradeAgreementDecisionOutcome : DecisionOutcome`
**Base:** `DecisionOutcome`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Election/TradeAgreementDecision.cs`

## 概述

`TradeAgreementDecisionOutcome` 位于 `TaleWorlds.CampaignSystem.Election`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Election` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetDecisionDescription
`public override TextObject GetDecisionDescription()`

**用途 / Purpose:** 读取并返回当前对象中 decision description 的结果。

```csharp
// 先通过子系统 API 拿到 TradeAgreementDecisionOutcome 实例
TradeAgreementDecisionOutcome tradeAgreementDecisionOutcome = ...;
var result = tradeAgreementDecisionOutcome.GetDecisionDescription();
```

### GetDecisionImageIdentifier
`public override ImageIdentifier GetDecisionImageIdentifier()`

**用途 / Purpose:** 读取并返回当前对象中 decision image identifier 的结果。

```csharp
// 先通过子系统 API 拿到 TradeAgreementDecisionOutcome 实例
TradeAgreementDecisionOutcome tradeAgreementDecisionOutcome = ...;
var result = tradeAgreementDecisionOutcome.GetDecisionImageIdentifier();
```

### GetDecisionLink
`public override string GetDecisionLink()`

**用途 / Purpose:** 读取并返回当前对象中 decision link 的结果。

```csharp
// 先通过子系统 API 拿到 TradeAgreementDecisionOutcome 实例
TradeAgreementDecisionOutcome tradeAgreementDecisionOutcome = ...;
var result = tradeAgreementDecisionOutcome.GetDecisionLink();
```

### GetDecisionTitle
`public override TextObject GetDecisionTitle()`

**用途 / Purpose:** 读取并返回当前对象中 decision title 的结果。

```csharp
// 先通过子系统 API 拿到 TradeAgreementDecisionOutcome 实例
TradeAgreementDecisionOutcome tradeAgreementDecisionOutcome = ...;
var result = tradeAgreementDecisionOutcome.GetDecisionTitle();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
TradeAgreementDecisionOutcome tradeAgreementDecisionOutcome = ...;
tradeAgreementDecisionOutcome.GetDecisionDescription();
```

## 参见

- [本区域目录](../)