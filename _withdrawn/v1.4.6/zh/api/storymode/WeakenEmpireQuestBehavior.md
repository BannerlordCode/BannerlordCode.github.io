---
title: "WeakenEmpireQuestBehavior"
description: "WeakenEmpireQuestBehavior：StoryMode.Quests.SecondPhase 的 public 类，继承 CampaignBehaviorBase；公开成员 6 个（方法 2、属性 2、字段 0）。canonical 桶 storymode。源文件 StoryMode/Quests/SecondPhase/WeakenEmpireQuestBehavior.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# WeakenEmpireQuestBehavior

**Namespace:** `StoryMode.Quests.SecondPhase`
**Module:** `StoryMode`
**Type:** `public class WeakenEmpireQuestBehavior : CampaignBehaviorBase`
**File:** `StoryMode/Quests/SecondPhase/WeakenEmpireQuestBehavior.cs`
**Bucket:** `storymode` (rule:StoryMode)

## 概述

WeakenEmpireQuestBehavior 位于 StoryMode 模块，源文件 StoryMode/Quests/SecondPhase/WeakenEmpireQuestBehavior.cs。它是一个 public 类，实现/继承 CampaignBehaviorBase，继承链为 WeakenEmpireQuestBehavior → CampaignBehaviorBase → ICampaignBehavior。public/protected 成员共 6 个：2 方法、2 属性、2 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：WeakenEmpireQuestBehavior 落在 canonical 桶 `storymode`（命中规则 `rule:StoryMode`），命名空间 `StoryMode.Quests.SecondPhase`，继承链 WeakenEmpireQuestBehavior → CampaignBehaviorBase → ICampaignBehavior。成员构成以方法为主（方法 2/6，属性 2/6），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 StoryMode/Quests/SecondPhase/WeakenEmpireQuestBehavior.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RegisterEvents` | `public override void RegisterEvents()` | 方法 |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | 方法 |
| `SaveableTypeDefiner` | `public class WeakenEmpireQuestBehaviorTypeDefiner : SaveableTypeDefiner` | 属性 |
| `StoryModeQuestBase` | `public class WeakenEmpireQuest : StoryModeQuestBase` | 属性 |
| `SaveableTypeDefiner` | `public class WeakenEmpireQuestBehaviorTypeDefiner : SaveableTypeDefiner` | 嵌套类型 |
| `StoryModeQuestBase` | `public class WeakenEmpireQuest : StoryModeQuestBase` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 CampaignBehaviorBase](../../campaign/CampaignBehaviorBase/)
- [同命名空间 AssembleEmpireQuestBehavior](../AssembleEmpireQuestBehavior/)
- [同命名空间 ConspiracyProgressQuest](../ConspiracyProgressQuest/)
- [同命名空间 ConspiracyQuestBase](../ConspiracyQuestBase/)
