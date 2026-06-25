---
title: "MobilePartyAi"
description: "MobilePartyAi 的自动生成类参考。"
---
# MobilePartyAi

**Namespace:** TaleWorlds.CampaignSystem.Party
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MobilePartyAi`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Party/MobilePartyAi.cs`

## 概述

`MobilePartyAi` 位于 `TaleWorlds.CampaignSystem.Party`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Party` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsDisabled` | `public bool IsDisabled { get; }` |
| `RethinkAtNextHourlyTick` | `public bool RethinkAtNextHourlyTick { get; }` |
| `DoNotMakeNewDecisions` | `public bool DoNotMakeNewDecisions { get; }` |
| `IsAlerted` | `public bool IsAlerted { get; }` |
| `DoNotAttackMainPartyUntil` | `public CampaignTime DoNotAttackMainPartyUntil { get; set; }` |
| `AvoidInitiative` | `public float AvoidInitiative { get; }` |
| `AttackInitiative` | `public float AttackInitiative { get; }` |
| `AiBehaviorPartyBase` | `public PartyBase AiBehaviorPartyBase { get; }` |
| `AiBehaviorInteractable` | `public IInteractablePoint AiBehaviorInteractable { get; set; }` |

## 主要方法

### CacheAiBehaviorPartyBase
`public void CacheAiBehaviorPartyBase()`

**用途 / Purpose:** 处理与 「cache ai behavior party base」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MobilePartyAi 实例
MobilePartyAi mobilePartyAi = ...;
mobilePartyAi.CacheAiBehaviorPartyBase();
```

### CheckPartyNeedsUpdate
`public void CheckPartyNeedsUpdate()`

**用途 / Purpose:** 检查「party needs update」在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 MobilePartyAi 实例
MobilePartyAi mobilePartyAi = ...;
mobilePartyAi.CheckPartyNeedsUpdate();
```

### CalculateFleePosition
`public void CalculateFleePosition(out CampaignVec2 fleeTargetPoint, MobileParty partyToFleeFrom, Vec2 averageEnemyVec)`

**用途 / Purpose:** 计算「flee position」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 MobilePartyAi 实例
MobilePartyAi mobilePartyAi = ...;
mobilePartyAi.CalculateFleePosition(fleeTargetPoint, partyToFleeFrom, averageEnemyVec);
```

### GetNearbyPartyDataWhileDefendingSettlement
`public bool GetNearbyPartyDataWhileDefendingSettlement(Settlement targetSettlement, out bool shouldConsiderJoiningNearbyAllyParties, out bool shouldJoinLandSide, out bool shouldEngage, out MobileParty mostPowerfulLandAlly, out MobileParty mostPowerfulNavalAlly)`

**用途 / Purpose:** 读取并返回当前对象中 「nearby party data while defending settlement」 的结果。

```csharp
// 先通过子系统 API 拿到 MobilePartyAi 实例
MobilePartyAi mobilePartyAi = ...;
var result = mobilePartyAi.GetNearbyPartyDataWhileDefendingSettlement(targetSettlement, shouldConsiderJoiningNearbyAllyParties, shouldJoinLandSide, shouldEngage, mostPowerfulLandAlly, mostPowerfulNavalAlly);
```

### DisableForHours
`public void DisableForHours(int hours)`

**用途 / Purpose:** 处理与 「disable for hours」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MobilePartyAi 实例
MobilePartyAi mobilePartyAi = ...;
mobilePartyAi.DisableForHours(0);
```

### DisableAi
`public void DisableAi()`

**用途 / Purpose:** 处理与 「disable ai」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MobilePartyAi 实例
MobilePartyAi mobilePartyAi = ...;
mobilePartyAi.DisableAi();
```

### EnableAi
`public void EnableAi()`

**用途 / Purpose:** 处理与 「enable ai」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MobilePartyAi 实例
MobilePartyAi mobilePartyAi = ...;
mobilePartyAi.EnableAi();
```

### EnableAgainAtHourIsPast
`public bool EnableAgainAtHourIsPast()`

**用途 / Purpose:** 处理与 「enable again at hour is past」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MobilePartyAi 实例
MobilePartyAi mobilePartyAi = ...;
var result = mobilePartyAi.EnableAgainAtHourIsPast();
```

### SetDoNotAttackMainParty
`public void SetDoNotAttackMainParty(int hours)`

**用途 / Purpose:** 为 「do not attack main party」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MobilePartyAi 实例
MobilePartyAi mobilePartyAi = ...;
mobilePartyAi.SetDoNotAttackMainParty(0);
```

### SetInitiative
`public void SetInitiative(float attackInitiative, float avoidInitiative, float hoursUntilReset)`

**用途 / Purpose:** 为 「initiative」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MobilePartyAi 实例
MobilePartyAi mobilePartyAi = ...;
mobilePartyAi.SetInitiative(0, 0, 0);
```

### SetDoNotMakeNewDecisions
`public void SetDoNotMakeNewDecisions(bool doNotMakeNewDecisions)`

**用途 / Purpose:** 为 「do not make new decisions」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MobilePartyAi 实例
MobilePartyAi mobilePartyAi = ...;
mobilePartyAi.SetDoNotMakeNewDecisions(false);
```

### Clear
`public void Clear()`

**用途 / Purpose:** 清空当前对象中的内容。

```csharp
// 先通过子系统 API 拿到 MobilePartyAi 实例
MobilePartyAi mobilePartyAi = ...;
mobilePartyAi.Clear();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MobilePartyAi mobilePartyAi = ...;
mobilePartyAi.CacheAiBehaviorPartyBase();
```

## 参见

- [本区域目录](../)