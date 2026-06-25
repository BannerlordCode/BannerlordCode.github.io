---
title: "LogEntry"
description: "LogEntry 的自动生成类参考。"
---
# LogEntry

**Namespace:** TaleWorlds.CampaignSystem.LogEntries
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class LogEntry`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/LogEntries/LogEntry.cs`

## 概述

`LogEntry` 位于 `TaleWorlds.CampaignSystem.LogEntries`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.LogEntries` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Id` | `public long Id { get; }` |
| `GameTime` | `public CampaignTime GameTime { get; }` |
| `KeepInHistoryTime` | `public virtual CampaignTime KeepInHistoryTime { get; }` |
| `NotificationType` | `public virtual ChatNotificationType NotificationType { get; }` |

## 主要方法

### AddLogEntry
`public static void AddLogEntry(LogEntry logEntry)`

**用途 / Purpose:** 将 「log entry」 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
LogEntry.AddLogEntry(logEntry);
```

### AddLogEntry
`public static void AddLogEntry(LogEntry logEntry, CampaignTime gameTime)`

**用途 / Purpose:** 将 「log entry」 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
LogEntry.AddLogEntry(logEntry, gameTime);
```

### GetImportanceForClan
`public virtual ImportanceEnum GetImportanceForClan(Clan clan)`

**用途 / Purpose:** 读取并返回当前对象中 「importance for clan」 的结果。

```csharp
// 先通过子系统 API 拿到 LogEntry 实例
LogEntry logEntry = ...;
var result = logEntry.GetImportanceForClan(clan);
```

### GetConversationScoreAndComment
`public virtual void GetConversationScoreAndComment(Hero talkTroop, bool findString, out string comment, out ImportanceEnum score)`

**用途 / Purpose:** 读取并返回当前对象中 「conversation score and comment」 的结果。

```csharp
// 先通过子系统 API 拿到 LogEntry 实例
LogEntry logEntry = ...;
logEntry.GetConversationScoreAndComment(talkTroop, false, comment, score);
```

### GetAsRumor
`public virtual int GetAsRumor(Settlement settlement, out TextObject comment)`

**用途 / Purpose:** 读取并返回当前对象中 「as rumor」 的结果。

```csharp
// 先通过子系统 API 拿到 LogEntry 实例
LogEntry logEntry = ...;
var result = logEntry.GetAsRumor(settlement, comment);
```

### GetHistoricComment
`public virtual TextObject GetHistoricComment(Hero talkTroop)`

**用途 / Purpose:** 读取并返回当前对象中 「historic comment」 的结果。

```csharp
// 先通过子系统 API 拿到 LogEntry 实例
LogEntry logEntry = ...;
var result = logEntry.GetHistoricComment(talkTroop);
```

### AsReasonForEnmity
`public virtual int AsReasonForEnmity(Hero referenceHero1, Hero referenceHero2)`

**用途 / Purpose:** 处理与 「as reason for enmity」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 LogEntry 实例
LogEntry logEntry = ...;
var result = logEntry.AsReasonForEnmity(referenceHero1, referenceHero2);
```

### GetValueAsPoliticsAbuseOfPower
`public virtual int GetValueAsPoliticsAbuseOfPower(Hero referenceTroop, Hero liege)`

**用途 / Purpose:** 读取并返回当前对象中 「value as politics abuse of power」 的结果。

```csharp
// 先通过子系统 API 拿到 LogEntry 实例
LogEntry logEntry = ...;
var result = logEntry.GetValueAsPoliticsAbuseOfPower(referenceTroop, liege);
```

### GetValueAsPoliticsSlightedClan
`public virtual int GetValueAsPoliticsSlightedClan(Hero referenceTroop, Hero liege)`

**用途 / Purpose:** 读取并返回当前对象中 「value as politics slighted clan」 的结果。

```csharp
// 先通过子系统 API 拿到 LogEntry 实例
LogEntry logEntry = ...;
var result = logEntry.GetValueAsPoliticsSlightedClan(referenceTroop, liege);
```

### GetValueAsPoliticsShowedWeakness
`public virtual int GetValueAsPoliticsShowedWeakness(Hero referenceTroop, Hero liege)`

**用途 / Purpose:** 读取并返回当前对象中 「value as politics showed weakness」 的结果。

```csharp
// 先通过子系统 API 拿到 LogEntry 实例
LogEntry logEntry = ...;
var result = logEntry.GetValueAsPoliticsShowedWeakness(referenceTroop, liege);
```

### IsValid
`public virtual bool IsValid()`

**用途 / Purpose:** 判断当前对象是否处于 「valid」 状态或条件。

```csharp
// 先通过子系统 API 拿到 LogEntry 实例
LogEntry logEntry = ...;
var result = logEntry.IsValid();
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
LogEntry instance = ...;
```

## 参见

- [本区域目录](../)