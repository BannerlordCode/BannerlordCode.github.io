---
title: "BesiegeSettlementLogEntry"
description: "BesiegeSettlementLogEntry 的自动生成类参考。"
---
# BesiegeSettlementLogEntry

**Namespace:** TaleWorlds.CampaignSystem.LogEntries
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class BesiegeSettlementLogEntry : LogEntry, IEncyclopediaLog, IChatNotification, IWarLog`
**Base:** `LogEntry`
**File:** `TaleWorlds.CampaignSystem/LogEntries/BesiegeSettlementLogEntry.cs`

## 概述

`BesiegeSettlementLogEntry` 位于 `TaleWorlds.CampaignSystem.LogEntries`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.LogEntries` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsVisibleNotification` | `public bool IsVisibleNotification { get; }` |
| `OwnerClanBeforeBesiege` | `public Clan OwnerClanBeforeBesiege { get; }` |

## 主要方法

### ToString
`public override string ToString()`

**用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 BesiegeSettlementLogEntry 实例
BesiegeSettlementLogEntry besiegeSettlementLogEntry = ...;
var result = besiegeSettlementLogEntry.ToString();
```

### IsRelatedToWar
`public bool IsRelatedToWar(StanceLink stance, out IFaction effector, out IFaction effected)`

**用途 / Purpose:** 判断当前对象是否处于 「related to war」 状态或条件。

```csharp
// 先通过子系统 API 拿到 BesiegeSettlementLogEntry 实例
BesiegeSettlementLogEntry besiegeSettlementLogEntry = ...;
var result = besiegeSettlementLogEntry.IsRelatedToWar(stance, effector, effected);
```

### GetNotificationText
`public TextObject GetNotificationText()`

**用途 / Purpose:** 读取并返回当前对象中 「notification text」 的结果。

```csharp
// 先通过子系统 API 拿到 BesiegeSettlementLogEntry 实例
BesiegeSettlementLogEntry besiegeSettlementLogEntry = ...;
var result = besiegeSettlementLogEntry.GetNotificationText();
```

### GetEncyclopediaText
`public TextObject GetEncyclopediaText()`

**用途 / Purpose:** 读取并返回当前对象中 「encyclopedia text」 的结果。

```csharp
// 先通过子系统 API 拿到 BesiegeSettlementLogEntry 实例
BesiegeSettlementLogEntry besiegeSettlementLogEntry = ...;
var result = besiegeSettlementLogEntry.GetEncyclopediaText();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
BesiegeSettlementLogEntry besiegeSettlementLogEntry = ...;
besiegeSettlementLogEntry.ToString();
```

## 参见

- [本区域目录](../)