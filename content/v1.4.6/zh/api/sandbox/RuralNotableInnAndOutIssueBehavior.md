---
title: "RuralNotableInnAndOutIssueBehavior"
description: "RuralNotableInnAndOutIssueBehavior：SandBox 的 public 类，继承 CampaignBehaviorBase；公开成员 9 个（方法 3、属性 3、字段 0）。源文件 SandBox/Issues/RuralNotableInnAndOutIssueBehavior.cs。"
---
# RuralNotableInnAndOutIssueBehavior

**Namespace:** `SandBox.Issues`
**Module:** `SandBox`
**Type:** `public class RuralNotableInnAndOutIssueBehavior : CampaignBehaviorBase`
**File:** `SandBox/Issues/RuralNotableInnAndOutIssueBehavior.cs`

## 概述

RuralNotableInnAndOutIssueBehavior 位于 SandBox 模块，源文件 SandBox/Issues/RuralNotableInnAndOutIssueBehavior.cs。它是一个 public 类，实现/继承 CampaignBehaviorBase，继承链为 RuralNotableInnAndOutIssueBehavior → CampaignBehaviorBase。public/protected 成员共 9 个：3 方法、3 属性、3 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：RuralNotableInnAndOutIssueBehavior 是 SandBox 的顶层类型，命名空间与模块目录不同（SandBox.Issues），继承链 RuralNotableInnAndOutIssueBehavior → CampaignBehaviorBase。成员构成以方法为主（方法 3/9，属性 3/9），对外主要以操作入口暴露。继承链上的 CampaignBehaviorBase 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/Issues/RuralNotableInnAndOutIssueBehavior.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RegisterEvents` | `public override void RegisterEvents()` | 方法 |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | 方法 |
| `OnCheckForIssue` | `public void OnCheckForIssue(Hero hero)` | 方法 |
| `SaveableTypeDefiner` | `public class RuralNotableInnAndOutIssueTypeDefiner : SaveableTypeDefiner` | 属性 |
| `IssueBase` | `public class RuralNotableInnAndOutIssue : IssueBase` | 属性 |
| `QuestBase` | `public class RuralNotableInnAndOutIssueQuest : QuestBase` | 属性 |
| `SaveableTypeDefiner` | `public class RuralNotableInnAndOutIssueTypeDefiner : SaveableTypeDefiner` | 嵌套类型 |
| `IssueBase` | `public class RuralNotableInnAndOutIssue : IssueBase` | 嵌套类型 |
| `QuestBase` | `public class RuralNotableInnAndOutIssueQuest : QuestBase` | 嵌套类型 |

## 参见

- [↑ sandbox 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 FamilyFeudIssueBehavior](../FamilyFeudIssueBehavior)
- [同命名空间 NotableWantsDaughterFoundIssueBehavior](../NotableWantsDaughterFoundIssueBehavior)
- [同命名空间 ProdigalSonIssueBehavior](../ProdigalSonIssueBehavior)
- [同命名空间 RivalGangMovingInIssueBehavior](../RivalGangMovingInIssueBehavior)
