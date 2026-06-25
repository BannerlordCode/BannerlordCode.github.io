---
title: "SiegeAftermathLogEntry"
description: "SiegeAftermathLogEntry 的自动生成类参考。"
---
# SiegeAftermathLogEntry

**Namespace:** TaleWorlds.CampaignSystem.LogEntries
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SiegeAftermathLogEntry : LogEntry`
**Base:** `LogEntry`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.LogEntries/SiegeAftermathLogEntry.cs`

## 概述

`SiegeAftermathLogEntry` 位于 `TaleWorlds.CampaignSystem.LogEntries`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.LogEntries` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetImportanceForClan
`public override ImportanceEnum GetImportanceForClan(Clan clan)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 importance for clan 的结果。

```csharp
// 先通过子系统 API 拿到 SiegeAftermathLogEntry 实例
SiegeAftermathLogEntry siegeAftermathLogEntry = ...;
var result = siegeAftermathLogEntry.GetImportanceForClan(clan);
```

### GetConversationScoreAndComment
`public override void GetConversationScoreAndComment(Hero talkTroop, bool findString, out string comment, out ImportanceEnum score)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 conversation score and comment 的结果。

```csharp
// 先通过子系统 API 拿到 SiegeAftermathLogEntry 实例
SiegeAftermathLogEntry siegeAftermathLogEntry = ...;
siegeAftermathLogEntry.GetConversationScoreAndComment(talkTroop, false, comment, score);
```

### ToString
`public override string ToString()`

**用途 / Purpose:** **用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 SiegeAftermathLogEntry 实例
SiegeAftermathLogEntry siegeAftermathLogEntry = ...;
var result = siegeAftermathLogEntry.ToString();
```

### GetNotificationText
`public TextObject GetNotificationText()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 notification text 的结果。

```csharp
// 先通过子系统 API 拿到 SiegeAftermathLogEntry 实例
SiegeAftermathLogEntry siegeAftermathLogEntry = ...;
var result = siegeAftermathLogEntry.GetNotificationText();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
SiegeAftermathLogEntry siegeAftermathLogEntry = ...;
siegeAftermathLogEntry.GetImportanceForClan(clan);
```

## 参见

- [本区域目录](../)