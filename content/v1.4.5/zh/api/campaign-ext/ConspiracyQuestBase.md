---
title: "ConspiracyQuestBase"
description: "ConspiracyQuestBase 的自动生成类参考。"
---
# ConspiracyQuestBase

**Namespace:** StoryMode.Quests.SecondPhase
**Module:** StoryMode.Quests
**Type:** `public abstract class ConspiracyQuestBase : QuestBase`
**Base:** `QuestBase`
**File:** `Modules.StoryMode/StoryMode/StoryMode.Quests.SecondPhase/ConspiracyQuestBase.cs`

## 概述

`ConspiracyQuestBase` 位于 `StoryMode.Quests.SecondPhase`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `StoryMode.Quests.SecondPhase` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `SideNotificationText` | `public abstract TextObject SideNotificationText { get; }` |
| `StartMessageLogFromMentor` | `public abstract TextObject StartMessageLogFromMentor { get; }` |
| `StartLog` | `public abstract TextObject StartLog { get; }` |
| `ConspiracyStrengthDecreaseAmount` | `public abstract float ConspiracyStrengthDecreaseAmount { get; }` |
| `Mentor` | `public Hero Mentor { get; }` |

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
ConspiracyQuestBase instance = ...;
```

## 参见

- [本区域目录](../)