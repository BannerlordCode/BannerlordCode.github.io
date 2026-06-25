---
title: "ThirdPhase"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ThirdPhase`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ThirdPhase

**Namespace:** StoryMode.StoryModePhases
**Module:** StoryMode.StoryModePhases
**Type:** `public class ThirdPhase`
**Base:** 无
**File:** `Bannerlord.Source/Modules.StoryMode/StoryMode/StoryMode.StoryModePhases/ThirdPhase.cs`

## 概述

`ThirdPhase` 位于 `StoryMode.StoryModePhases`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `StoryMode.StoryModePhases` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsCompleted` | `public bool IsCompleted { get; }` |

## 主要方法

### AddAllyKingdom
`public void AddAllyKingdom(Kingdom kingdom)`

**用途 / Purpose:** 向当前集合/状态中添加 `ally kingdom`。

### AddOppositionKingdom
`public void AddOppositionKingdom(Kingdom kingdom)`

**用途 / Purpose:** 向当前集合/状态中添加 `opposition kingdom`。

### RemoveOppositionKingdom
`public void RemoveOppositionKingdom(Kingdom kingdom)`

**用途 / Purpose:** 从当前集合/状态中移除 `opposition kingdom`。

### CompleteThirdPhase
`public void CompleteThirdPhase(QuestCompleteDetails defeatTheConspiracyQuestCompleteDetail)`

**用途 / Purpose:** 处理 `complete third phase` 相关逻辑。

## 使用示例

```csharp
var value = new ThirdPhase();
value.AddAllyKingdom(kingdom);
```

## 参见

- [完整类目录](../catalog)