---
title: "LogEntryHistory"
description: "LogEntryHistory 的自动生成类参考。"
---
# LogEntryHistory

**Namespace:** TaleWorlds.CampaignSystem.LogEntries
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class LogEntryHistory`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/LogEntries/LogEntryHistory.cs`

## 概述

`LogEntryHistory` 位于 `TaleWorlds.CampaignSystem.LogEntries`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.LogEntries` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `GameActionLogs` | `public MBReadOnlyList<LogEntry> GameActionLogs { get; }` |

## 主要方法

### DeleteOutdatedLogs
`public void DeleteOutdatedLogs()`

**用途 / Purpose:** **用途 / Purpose:** 调用 DeleteOutdatedLogs 对应的操作。

```csharp
// 先通过子系统 API 拿到 LogEntryHistory 实例
LogEntryHistory logEntryHistory = ...;
logEntryHistory.DeleteOutdatedLogs();
```

### GetStartIndexForComments
`public int GetStartIndexForComments()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 start index for comments 的结果。

```csharp
// 先通过子系统 API 拿到 LogEntryHistory 实例
LogEntryHistory logEntryHistory = ...;
var result = logEntryHistory.GetStartIndexForComments();
```

### GetRelevantComment
`public LogEntry GetRelevantComment(Hero conversationHero, out int bestScore, out string bestRelatedLogEntryTag)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 relevant comment 的结果。

```csharp
// 先通过子系统 API 拿到 LogEntryHistory 实例
LogEntryHistory logEntryHistory = ...;
var result = logEntryHistory.GetRelevantComment(conversationHero, bestScore, bestRelatedLogEntryTag);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
LogEntryHistory logEntryHistory = ...;
logEntryHistory.DeleteOutdatedLogs();
```

## 参见

- [本区域目录](../)