---
title: "FindHideoutTutorialQuest"
description: "FindHideoutTutorialQuest 的自动生成类参考。"
---
# FindHideoutTutorialQuest

**Namespace:** StoryMode.Quests.TutorialPhase
**Module:** StoryMode.Quests
**Type:** `public class FindHideoutTutorialQuest : StoryModeQuestBase`
**Base:** `StoryModeQuestBase`
**File:** `Modules.StoryMode/StoryMode/StoryMode.Quests.TutorialPhase/FindHideoutTutorialQuest.cs`

## 概述

`FindHideoutTutorialQuest` 位于 `StoryMode.Quests.TutorialPhase`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `StoryMode.Quests.TutorialPhase` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Title` | `public override TextObject Title { get; }` |

## 主要方法

### OnHeroCanDieInfoIsRequested
`public override void OnHeroCanDieInfoIsRequested(Hero hero, KillCharacterActionDetail causeOfDeath, ref bool result)`

**用途 / Purpose:** 在 hero can die info is requested 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 FindHideoutTutorialQuest 实例
FindHideoutTutorialQuest findHideoutTutorialQuest = ...;
findHideoutTutorialQuest.OnHeroCanDieInfoIsRequested(hero, causeOfDeath, result);
```

### OnHeroCanBeSelectedInInventoryInfoIsRequested
`public override void OnHeroCanBeSelectedInInventoryInfoIsRequested(Hero hero, ref bool result)`

**用途 / Purpose:** 在 hero can be selected in inventory info is requested 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 FindHideoutTutorialQuest 实例
FindHideoutTutorialQuest findHideoutTutorialQuest = ...;
findHideoutTutorialQuest.OnHeroCanBeSelectedInInventoryInfoIsRequested(hero, result);
```

### OnHeroCanHaveCampaignIssuesInfoIsRequested
`public override void OnHeroCanHaveCampaignIssuesInfoIsRequested(Hero hero, ref bool result)`

**用途 / Purpose:** 在 hero can have campaign issues info is requested 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 FindHideoutTutorialQuest 实例
FindHideoutTutorialQuest findHideoutTutorialQuest = ...;
findHideoutTutorialQuest.OnHeroCanHaveCampaignIssuesInfoIsRequested(hero, result);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
FindHideoutTutorialQuest findHideoutTutorialQuest = ...;
findHideoutTutorialQuest.OnHeroCanDieInfoIsRequested(hero, causeOfDeath, result);
```

## 参见

- [本区域目录](../)