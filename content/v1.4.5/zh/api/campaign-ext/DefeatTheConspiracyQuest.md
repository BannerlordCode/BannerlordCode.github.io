---
title: "DefeatTheConspiracyQuest"
description: "DefeatTheConspiracyQuest 的自动生成类参考。"
---
# DefeatTheConspiracyQuest

**Namespace:** StoryMode.Quests.ThirdPhase
**Module:** StoryMode.Quests
**Type:** `public class DefeatTheConspiracyQuest`
**Base:** 无
**File:** `Modules.StoryMode/StoryMode/StoryMode.Quests.ThirdPhase/DefeatTheConspiracyQuestBehavior.cs`

## 概述

`DefeatTheConspiracyQuest` 位于 `StoryMode.Quests.ThirdPhase`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `StoryMode.Quests.ThirdPhase` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Title` | `public override TextObject Title { get; }` |

## 主要方法

### CalculateReinforcedWarScore
`public void CalculateReinforcedWarScore()`

**用途 / Purpose:** **用途 / Purpose:** 计算reinforced war score的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DefeatTheConspiracyQuest 实例
DefeatTheConspiracyQuest defeatTheConspiracyQuest = ...;
defeatTheConspiracyQuest.CalculateReinforcedWarScore();
```

### IsMobilePartyCreatedForQuest
`public bool IsMobilePartyCreatedForQuest(MobileParty mobileParty)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 mobile party created for quest 状态或条件。

```csharp
// 先通过子系统 API 拿到 DefeatTheConspiracyQuest 实例
DefeatTheConspiracyQuest defeatTheConspiracyQuest = ...;
var result = defeatTheConspiracyQuest.IsMobilePartyCreatedForQuest(mobileParty);
```

### RegisterEvents
`public override void RegisterEvents()`

**用途 / Purpose:** **用途 / Purpose:** 将events注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 DefeatTheConspiracyQuest 实例
DefeatTheConspiracyQuest defeatTheConspiracyQuest = ...;
defeatTheConspiracyQuest.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**用途 / Purpose:** **用途 / Purpose:** 将data同步到相关上下文或系统中。

```csharp
// 先通过子系统 API 拿到 DefeatTheConspiracyQuest 实例
DefeatTheConspiracyQuest defeatTheConspiracyQuest = ...;
defeatTheConspiracyQuest.SyncData(dataStore);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
DefeatTheConspiracyQuest defeatTheConspiracyQuest = ...;
defeatTheConspiracyQuest.CalculateReinforcedWarScore();
```

## 参见

- [本区域目录](../)