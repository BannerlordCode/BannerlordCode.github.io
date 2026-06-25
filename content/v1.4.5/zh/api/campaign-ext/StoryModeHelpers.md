---
title: "StoryModeHelpers"
description: "StoryModeHelpers 的自动生成类参考。"
---
# StoryModeHelpers

**Namespace:** StoryMode
**Module:** StoryMode
**Type:** `public static class StoryModeHelpers`
**Base:** 无
**File:** `Modules.StoryMode/StoryMode/StoryMode/StoryModeHelpers.cs`

## 概述

`StoryModeHelpers` 位于 `StoryMode`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `StoryMode` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### SetPlayerSiblingsSkillsIfNeeded
`public static void SetPlayerSiblingsSkillsIfNeeded(Hero hero)`

**用途 / Purpose:** **用途 / Purpose:** 为 player siblings skills if needed 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
StoryModeHelpers.SetPlayerSiblingsSkillsIfNeeded(hero);
```

## 使用示例

```csharp
StoryModeHelpers.SetPlayerSiblingsSkillsIfNeeded(hero);
```

## 参见

- [本区域目录](../)