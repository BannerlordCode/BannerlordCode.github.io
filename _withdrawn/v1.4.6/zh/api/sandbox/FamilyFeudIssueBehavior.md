---
title: "FamilyFeudIssueBehavior"
description: "FamilyFeudIssueBehavior：SandBox.Issues 的 public 类，继承 CampaignBehaviorBase；公开成员 11 个（方法 3、属性 4、字段 0）。canonical 桶 sandbox。源文件 SandBox/Issues/FamilyFeudIssueBehavior.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# FamilyFeudIssueBehavior

**Namespace:** `SandBox.Issues`
**Module:** `SandBox`
**Type:** `public class FamilyFeudIssueBehavior : CampaignBehaviorBase`
**File:** `SandBox/Issues/FamilyFeudIssueBehavior.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

FamilyFeudIssueBehavior 位于 SandBox 模块，源文件 SandBox/Issues/FamilyFeudIssueBehavior.cs。它是一个 public 类，实现/继承 CampaignBehaviorBase，继承链为 FamilyFeudIssueBehavior → CampaignBehaviorBase → ICampaignBehavior。public/protected 成员共 11 个：3 方法、4 属性、4 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：FamilyFeudIssueBehavior 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.Issues`，继承链 FamilyFeudIssueBehavior → CampaignBehaviorBase → ICampaignBehavior。成员构成以属性为主（属性 4/11，方法 3/11），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/Issues/FamilyFeudIssueBehavior.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RegisterEvents` | `public override void RegisterEvents()` | 方法 |
| `OnCheckForIssue` | `public void OnCheckForIssue(Hero hero)` | 方法 |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | 方法 |
| `SaveableTypeDefiner` | `public class FamilyFeudIssueTypeDefiner : SaveableTypeDefiner` | 属性 |
| `MissionLogic` | `public class FamilyFeudIssueMissionBehavior : MissionLogic` | 属性 |
| `IssueBase` | `public class FamilyFeudIssue : IssueBase` | 属性 |
| `QuestBase` | `public class FamilyFeudIssueQuest : QuestBase` | 属性 |
| `SaveableTypeDefiner` | `public class FamilyFeudIssueTypeDefiner : SaveableTypeDefiner` | 嵌套类型 |
| `MissionLogic` | `public class FamilyFeudIssueMissionBehavior : MissionLogic` | 嵌套类型 |
| `IssueBase` | `public class FamilyFeudIssue : IssueBase` | 嵌套类型 |
| `QuestBase` | `public class FamilyFeudIssueQuest : QuestBase` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 CampaignBehaviorBase](../../campaign/CampaignBehaviorBase/)
- [同命名空间 NotableWantsDaughterFoundIssueBehavior](../NotableWantsDaughterFoundIssueBehavior/)
- [同命名空间 ProdigalSonIssueBehavior](../ProdigalSonIssueBehavior/)
- [同命名空间 RivalGangMovingInIssueBehavior](../RivalGangMovingInIssueBehavior/)
- [同命名空间 RuralNotableInnAndOutIssueBehavior](../RuralNotableInnAndOutIssueBehavior/)
