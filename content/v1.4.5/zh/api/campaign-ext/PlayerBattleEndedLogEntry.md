---
title: "PlayerBattleEndedLogEntry"
description: "PlayerBattleEndedLogEntry 的自动生成类参考。"
---
# PlayerBattleEndedLogEntry

**Namespace:** TaleWorlds.CampaignSystem.LogEntries
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PlayerBattleEndedLogEntry : LogEntry, IChatNotification`
**Base:** `LogEntry`
**File:** `TaleWorlds.CampaignSystem/LogEntries/PlayerBattleEndedLogEntry.cs`

## 概述

`PlayerBattleEndedLogEntry` 位于 `TaleWorlds.CampaignSystem.LogEntries`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.LogEntries` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsNavalBattle` | `public bool IsNavalBattle { get; }` |
| `PlayerCasualties` | `public int PlayerCasualties { get; }` |
| `HasHeavyCausality` | `public bool HasHeavyCausality { get; }` |
| `IsAgainstGreatOdds` | `public bool IsAgainstGreatOdds { get; }` |
| `IsVisibleNotification` | `public bool IsVisibleNotification { get; }` |

## 主要方法

### GetImportanceForClan
`public override ImportanceEnum GetImportanceForClan(Clan clan)`

**用途 / Purpose:** 读取并返回当前对象中 importance for clan 的结果。

```csharp
// 先通过子系统 API 拿到 PlayerBattleEndedLogEntry 实例
PlayerBattleEndedLogEntry playerBattleEndedLogEntry = ...;
var result = playerBattleEndedLogEntry.GetImportanceForClan(clan);
```

### GetConversationScoreAndComment
`public override void GetConversationScoreAndComment(Hero talkTroop, bool findString, out string comment, out ImportanceEnum score)`

**用途 / Purpose:** 读取并返回当前对象中 conversation score and comment 的结果。

```csharp
// 先通过子系统 API 拿到 PlayerBattleEndedLogEntry 实例
PlayerBattleEndedLogEntry playerBattleEndedLogEntry = ...;
playerBattleEndedLogEntry.GetConversationScoreAndComment(talkTroop, false, comment, score);
```

### ToString
`public override string ToString()`

**用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 PlayerBattleEndedLogEntry 实例
PlayerBattleEndedLogEntry playerBattleEndedLogEntry = ...;
var result = playerBattleEndedLogEntry.ToString();
```

### GetNotificationText
`public TextObject GetNotificationText()`

**用途 / Purpose:** 读取并返回当前对象中 notification text 的结果。

```csharp
// 先通过子系统 API 拿到 PlayerBattleEndedLogEntry 实例
PlayerBattleEndedLogEntry playerBattleEndedLogEntry = ...;
var result = playerBattleEndedLogEntry.GetNotificationText();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
PlayerBattleEndedLogEntry playerBattleEndedLogEntry = ...;
playerBattleEndedLogEntry.GetImportanceForClan(clan);
```

## 参见

- [本区域目录](../)