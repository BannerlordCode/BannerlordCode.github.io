---
title: "CharacterInsultedLogEntry"
description: "CharacterInsultedLogEntry 的自动生成类参考。"
---
# CharacterInsultedLogEntry

**Namespace:** TaleWorlds.CampaignSystem.LogEntries
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CharacterInsultedLogEntry : LogEntry, IEncyclopediaLog, IChatNotification`
**Base:** `LogEntry`
**File:** `TaleWorlds.CampaignSystem/LogEntries/CharacterInsultedLogEntry.cs`

## 概述

`CharacterInsultedLogEntry` 位于 `TaleWorlds.CampaignSystem.LogEntries`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.LogEntries` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `KeepInHistoryTime` | `public override CampaignTime KeepInHistoryTime { get; }` |
| `NotificationType` | `public override ChatNotificationType NotificationType { get; }` |
| `IsVisibleNotification` | `public bool IsVisibleNotification { get; }` |

## 主要方法

### GetHistoricComment
`public override TextObject GetHistoricComment(Hero talkTroop)`

**用途 / Purpose:** 读取并返回当前对象中 「historic comment」 的结果。

```csharp
// 先通过子系统 API 拿到 CharacterInsultedLogEntry 实例
CharacterInsultedLogEntry characterInsultedLogEntry = ...;
var result = characterInsultedLogEntry.GetHistoricComment(talkTroop);
```

### AsReasonForEnmity
`public override int AsReasonForEnmity(Hero referenceHero1, Hero referenceHero2)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 CharacterInsultedLogEntry 实例
CharacterInsultedLogEntry characterInsultedLogEntry = ...;
var result = characterInsultedLogEntry.AsReasonForEnmity(referenceHero1, referenceHero2);
```

### ToString
`public override string ToString()`

**用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 CharacterInsultedLogEntry 实例
CharacterInsultedLogEntry characterInsultedLogEntry = ...;
var result = characterInsultedLogEntry.ToString();
```

### GetNotificationText
`public TextObject GetNotificationText()`

**用途 / Purpose:** 读取并返回当前对象中 「notification text」 的结果。

```csharp
// 先通过子系统 API 拿到 CharacterInsultedLogEntry 实例
CharacterInsultedLogEntry characterInsultedLogEntry = ...;
var result = characterInsultedLogEntry.GetNotificationText();
```

### GetEncyclopediaText
`public TextObject GetEncyclopediaText()`

**用途 / Purpose:** 读取并返回当前对象中 「encyclopedia text」 的结果。

```csharp
// 先通过子系统 API 拿到 CharacterInsultedLogEntry 实例
CharacterInsultedLogEntry characterInsultedLogEntry = ...;
var result = characterInsultedLogEntry.GetEncyclopediaText();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
CharacterInsultedLogEntry characterInsultedLogEntry = ...;
characterInsultedLogEntry.GetHistoricComment(talkTroop);
```

## 参见

- [本区域目录](../)