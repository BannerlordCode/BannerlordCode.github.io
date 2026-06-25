---
title: "PolicyDecisionOutcome"
description: "PolicyDecisionOutcome 的自动生成类参考。"
---
# PolicyDecisionOutcome

**Namespace:** TaleWorlds.CampaignSystem.Election
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PolicyDecisionOutcome : DecisionOutcome`
**Base:** `DecisionOutcome`
**File:** `TaleWorlds.CampaignSystem/Election/KingdomPolicyDecision.cs`

## 概述

`PolicyDecisionOutcome` 位于 `TaleWorlds.CampaignSystem.Election`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Election` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ShouldDecisionBeEnforced` | `public bool ShouldDecisionBeEnforced { get; }` |

## 主要方法

### GetDecisionTitle
`public override TextObject GetDecisionTitle()`

**用途 / Purpose:** 读取并返回当前对象中 「decision title」 的结果。

```csharp
// 先通过子系统 API 拿到 PolicyDecisionOutcome 实例
PolicyDecisionOutcome policyDecisionOutcome = ...;
var result = policyDecisionOutcome.GetDecisionTitle();
```

### GetDecisionDescription
`public override TextObject GetDecisionDescription()`

**用途 / Purpose:** 读取并返回当前对象中 「decision description」 的结果。

```csharp
// 先通过子系统 API 拿到 PolicyDecisionOutcome 实例
PolicyDecisionOutcome policyDecisionOutcome = ...;
var result = policyDecisionOutcome.GetDecisionDescription();
```

### GetDecisionLink
`public override string GetDecisionLink()`

**用途 / Purpose:** 读取并返回当前对象中 「decision link」 的结果。

```csharp
// 先通过子系统 API 拿到 PolicyDecisionOutcome 实例
PolicyDecisionOutcome policyDecisionOutcome = ...;
var result = policyDecisionOutcome.GetDecisionLink();
```

### GetDecisionImageIdentifier
`public override ImageIdentifier GetDecisionImageIdentifier()`

**用途 / Purpose:** 读取并返回当前对象中 「decision image identifier」 的结果。

```csharp
// 先通过子系统 API 拿到 PolicyDecisionOutcome 实例
PolicyDecisionOutcome policyDecisionOutcome = ...;
var result = policyDecisionOutcome.GetDecisionImageIdentifier();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
PolicyDecisionOutcome policyDecisionOutcome = ...;
policyDecisionOutcome.GetDecisionTitle();
```

## 参见

- [本区域目录](../)