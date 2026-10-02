---
title: "TalkToNpcQuestTask"
description: "TalkToNpcQuestTask：TaleWorlds.CampaignSystem 的 public 类，继承 QuestTaskBase；公开成员 5 个（方法 3、属性 0、字段 0）。源文件 TaleWorlds.CampaignSystem/Issues/IssueQuestTasks/TalkToNpcQuestTask.cs。"
---
# TalkToNpcQuestTask

**Namespace:** `TaleWorlds.CampaignSystem.Issues.IssueQuestTasks`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class TalkToNpcQuestTask : QuestTaskBase`
**File:** `TaleWorlds.CampaignSystem/Issues/IssueQuestTasks/TalkToNpcQuestTask.cs`

## 概述

TalkToNpcQuestTask 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/Issues/IssueQuestTasks/TalkToNpcQuestTask.cs。它是一个 public 类，实现/继承 QuestTaskBase，继承链为 TalkToNpcQuestTask → QuestTaskBase。public/protected 成员共 5 个：3 方法、2 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TalkToNpcQuestTask 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.Issues.IssueQuestTasks），继承链 TalkToNpcQuestTask → QuestTaskBase。成员构成以方法为主（方法 3/5，属性 0/5），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/Issues/IssueQuestTasks/TalkToNpcQuestTask.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TalkToNpcQuestTask` | `public TalkToNpcQuestTask(Hero hero, Action onSucceededAction, DialogFlow dialogFlow = null) : base(dialogFlow, onSucceededAction, null, null)` | 构造函数 |
| `TalkToNpcQuestTask` | `public TalkToNpcQuestTask(CharacterObject character, Action onSucceededAction, DialogFlow dialogFlow = null) : base(dialogFlow, onSucceededAction, null, null)` | 构造函数 |
| `IsTaskCharacter` | `public bool IsTaskCharacter()` | 方法 |
| `OnFinished` | `protected override void OnFinished()` | 方法 |
| `SetReferences` | `public override void SetReferences()` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 QuestTaskBase](../QuestTaskBase)
- [同命名空间 CaptureAndBringNpcTask](../CaptureAndBringNpcTask)
- [同命名空间 ChangeCommonAreaOwnerQuestTask](../ChangeCommonAreaOwnerQuestTask)
- [同命名空间 ChangeSettlementOwnerTask](../ChangeSettlementOwnerTask)
- [同命名空间 DefeatPartyQuestTask](../DefeatPartyQuestTask)
