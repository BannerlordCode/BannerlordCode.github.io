---
title: "JournalLog"
description: "JournalLog 的自动生成类参考。"
---
# JournalLog

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class JournalLog`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/JournalLog.cs`

## 概述

`JournalLog` 位于 `TaleWorlds.CampaignSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `CurrentProgress` | `public int CurrentProgress { get; }` |

## 主要方法

### UpdateCurrentProgress
`public void UpdateCurrentProgress(int progress)`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新 current progress 的最新表示。

```csharp
// 先通过子系统 API 拿到 JournalLog 实例
JournalLog journalLog = ...;
journalLog.UpdateCurrentProgress(0);
```

### HasBeenCompleted
`public bool HasBeenCompleted()`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否已经持有 been completed。

```csharp
// 先通过子系统 API 拿到 JournalLog 实例
JournalLog journalLog = ...;
var result = journalLog.HasBeenCompleted();
```

### GetTimeText
`public TextObject GetTimeText()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 time text 的结果。

```csharp
// 先通过子系统 API 拿到 JournalLog 实例
JournalLog journalLog = ...;
var result = journalLog.GetTimeText();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
JournalLog journalLog = ...;
journalLog.UpdateCurrentProgress(0);
```

## 参见

- [本区域目录](../)