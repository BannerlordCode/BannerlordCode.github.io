---
title: "TalkToNpcQuestTask"
description: "TalkToNpcQuestTask 的自动生成类参考。"
---
# TalkToNpcQuestTask

**Namespace:** TaleWorlds.CampaignSystem.Issues.IssueQuestTasks
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class TalkToNpcQuestTask : QuestTaskBase`
**Base:** `QuestTaskBase`
**File:** `TaleWorlds.CampaignSystem/Issues/IssueQuestTasks/TalkToNpcQuestTask.cs`

## 概述

`TalkToNpcQuestTask` 位于 `TaleWorlds.CampaignSystem.Issues.IssueQuestTasks`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Issues.IssueQuestTasks` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### IsTaskCharacter
`public bool IsTaskCharacter()`

**用途 / Purpose:** 判断当前对象是否处于 task character 状态或条件。

```csharp
// 先通过子系统 API 拿到 TalkToNpcQuestTask 实例
TalkToNpcQuestTask talkToNpcQuestTask = ...;
var result = talkToNpcQuestTask.IsTaskCharacter();
```

### SetReferences
`public override void SetReferences()`

**用途 / Purpose:** 为 references 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 TalkToNpcQuestTask 实例
TalkToNpcQuestTask talkToNpcQuestTask = ...;
talkToNpcQuestTask.SetReferences();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
TalkToNpcQuestTask talkToNpcQuestTask = ...;
talkToNpcQuestTask.IsTaskCharacter();
```

## 参见

- [本区域目录](../)