---
title: "JournalLogEntry"
description: "JournalLogEntry 的自动生成类参考。"
---
# JournalLogEntry

**Namespace:** TaleWorlds.CampaignSystem.LogEntries
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class JournalLogEntry : LogEntry`
**Base:** `LogEntry`
**File:** `TaleWorlds.CampaignSystem/LogEntries/JournalLogEntry.cs`

## 概述

`JournalLogEntry` 位于 `TaleWorlds.CampaignSystem.LogEntries`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.LogEntries` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `KeepInHistoryTime` | `public override CampaignTime KeepInHistoryTime { get; }` |

## 主要方法

### IsRelatedTo
`public bool IsRelatedTo(MBObjectBase obj)`

**用途 / Purpose:** 判断当前对象是否处于 related to 状态或条件。

```csharp
// 先通过子系统 API 拿到 JournalLogEntry 实例
JournalLogEntry journalLogEntry = ...;
var result = journalLogEntry.IsRelatedTo(obj);
```

### GetEntries
`public IEnumerable<JournalLog> GetEntries()`

**用途 / Purpose:** 读取并返回当前对象中 entries 的结果。

```csharp
// 先通过子系统 API 拿到 JournalLogEntry 实例
JournalLogEntry journalLogEntry = ...;
var result = journalLogEntry.GetEntries();
```

### Update
`public void Update(MBReadOnlyList<JournalLog> entries, IssueBase.IssueUpdateDetails issueStatus = IssueBase.IssueUpdateDetails.None)`

**用途 / Purpose:** 重新计算并更新当前对象的最新表示。

```csharp
// 先通过子系统 API 拿到 JournalLogEntry 实例
JournalLogEntry journalLogEntry = ...;
journalLogEntry.Update(entries, issueBase.IssueUpdateDetails.None);
```

### Update
`public void Update(MBReadOnlyList<JournalLog> entries, QuestBase.QuestCompleteDetails questCompletionDetail)`

**用途 / Purpose:** 重新计算并更新当前对象的最新表示。

```csharp
// 先通过子系统 API 拿到 JournalLogEntry 实例
JournalLogEntry journalLogEntry = ...;
journalLogEntry.Update(entries, questCompletionDetail);
```

### IsEndedUnsuccessfully
`public bool IsEndedUnsuccessfully()`

**用途 / Purpose:** 判断当前对象是否处于 ended unsuccessfully 状态或条件。

```csharp
// 先通过子系统 API 拿到 JournalLogEntry 实例
JournalLogEntry journalLogEntry = ...;
var result = journalLogEntry.IsEndedUnsuccessfully();
```

### IsEnded
`public bool IsEnded()`

**用途 / Purpose:** 判断当前对象是否处于 ended 状态或条件。

```csharp
// 先通过子系统 API 拿到 JournalLogEntry 实例
JournalLogEntry journalLogEntry = ...;
var result = journalLogEntry.IsEnded();
```

### ToString
`public override string ToString()`

**用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 JournalLogEntry 实例
JournalLogEntry journalLogEntry = ...;
var result = journalLogEntry.ToString();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
JournalLogEntry journalLogEntry = ...;
journalLogEntry.IsRelatedTo(obj);
```

## 参见

- [本区域目录](../)