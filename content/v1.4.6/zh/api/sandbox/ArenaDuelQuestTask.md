---
title: "ArenaDuelQuestTask"
description: "ArenaDuelQuestTask：SandBox 的 public 类，继承 QuestTaskBase；公开成员 5 个（方法 4、属性 0、字段 0）。源文件 SandBox/Issues/IssueQuestTasks/ArenaDuelQuestTask.cs。"
---
# ArenaDuelQuestTask

**Namespace:** `SandBox.Issues.IssueQuestTasks`
**Module:** `SandBox`
**Type:** `public class ArenaDuelQuestTask : QuestTaskBase`
**File:** `SandBox/Issues/IssueQuestTasks/ArenaDuelQuestTask.cs`

## 概述

ArenaDuelQuestTask 位于 SandBox 模块，源文件 SandBox/Issues/IssueQuestTasks/ArenaDuelQuestTask.cs。它是一个 public 类，实现/继承 QuestTaskBase，继承链为 ArenaDuelQuestTask → QuestTaskBase。public/protected 成员共 5 个：4 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ArenaDuelQuestTask 是 SandBox 的顶层类型，命名空间与模块目录不同（SandBox.Issues.IssueQuestTasks），继承链 ArenaDuelQuestTask → QuestTaskBase。成员构成以方法为主（方法 4/5，属性 0/5），对外主要以操作入口暴露。继承链上的 QuestTaskBase 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/Issues/IssueQuestTasks/ArenaDuelQuestTask.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ArenaDuelQuestTask` | `public ArenaDuelQuestTask(CharacterObject duelOpponentCharacter, Settlement settlement, Action onSucceededAction, Action onFailedAction, DialogFlow dialogFlow = null) : base(dialogFlow, onSucceededAction, onFailedAction, null)` | 构造函数 |
| `AfterStart` | `public void AfterStart(IMission mission)` | 方法 |
| `SetReferences` | `public override void SetReferences()` | 方法 |
| `OnGameMenuOpened` | `public void OnGameMenuOpened(MenuCallbackArgs args)` | 方法 |
| `MissionTick` | `public void MissionTick(float dt)` | 方法 |

## 参见

- [↑ sandbox 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 BeginConversationInitiatedByAIQuestTask](../BeginConversationInitiatedByAIQuestTask)
- [同命名空间 FollowAgentQuestTask](../FollowAgentQuestTask)
