---
title: "TheSpyPartyIssueQuestBehavior"
description: "TheSpyPartyIssueQuestBehavior：SandBox 的 public 类，继承 CampaignBehaviorBase；公开成员 11 个（方法 3、属性 4、字段 0）。源文件 SandBox/Issues/TheSpyPartyIssueQuestBehavior.cs。"
---
# TheSpyPartyIssueQuestBehavior

**Namespace:** `SandBox.Issues`
**Module:** `SandBox`
**Type:** `public class TheSpyPartyIssueQuestBehavior : CampaignBehaviorBase`
**File:** `SandBox/Issues/TheSpyPartyIssueQuestBehavior.cs`

## 概述

TheSpyPartyIssueQuestBehavior 位于 SandBox 模块，源文件 SandBox/Issues/TheSpyPartyIssueQuestBehavior.cs。它是一个 public 类，实现/继承 CampaignBehaviorBase，继承链为 TheSpyPartyIssueQuestBehavior → CampaignBehaviorBase。public/protected 成员共 11 个：3 方法、4 属性、4 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TheSpyPartyIssueQuestBehavior 是 SandBox 的顶层类型，命名空间与模块目录不同（SandBox.Issues），继承链 TheSpyPartyIssueQuestBehavior → CampaignBehaviorBase。成员构成以属性为主（属性 4/11，方法 3/11），对外主要以状态读取接口暴露。继承链上的 CampaignBehaviorBase 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/Issues/TheSpyPartyIssueQuestBehavior.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RegisterEvents` | `public override void RegisterEvents()` | 方法 |
| `OnCheckForIssue` | `public void OnCheckForIssue(Hero hero)` | 方法 |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | 方法 |
| `SaveableTypeDefiner` | `public class TheSpyPartyIssueQuestTypeDefiner : SaveableTypeDefiner` | 属性 |
| `SuspectNpc` | `public struct SuspectNpc` | 属性 |
| `IssueBase` | `public class TheSpyPartyIssue : IssueBase` | 属性 |
| `QuestBase` | `public class TheSpyPartyIssueQuest : QuestBase` | 属性 |
| `SaveableTypeDefiner` | `public class TheSpyPartyIssueQuestTypeDefiner : SaveableTypeDefiner` | 嵌套类型 |
| `SuspectNpc` | `public struct SuspectNpc` | 嵌套类型 |
| `IssueBase` | `public class TheSpyPartyIssue : IssueBase` | 嵌套类型 |
| `QuestBase` | `public class TheSpyPartyIssueQuest : QuestBase` | 嵌套类型 |

## 参见

- [↑ sandbox 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 FamilyFeudIssueBehavior](../FamilyFeudIssueBehavior)
- [同命名空间 NotableWantsDaughterFoundIssueBehavior](../NotableWantsDaughterFoundIssueBehavior)
- [同命名空间 ProdigalSonIssueBehavior](../ProdigalSonIssueBehavior)
- [同命名空间 RivalGangMovingInIssueBehavior](../RivalGangMovingInIssueBehavior)
