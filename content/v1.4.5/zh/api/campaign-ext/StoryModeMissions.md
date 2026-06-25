---
title: "StoryModeMissions"
description: "StoryModeMissions 的自动生成类参考。"
---
# StoryModeMissions

**Namespace:** StoryMode.Missions
**Module:** StoryMode.Missions
**Type:** `public static class StoryModeMissions`
**Base:** 无
**File:** `Modules.StoryMode/StoryMode/Storymode.Missions/StoryModeMissions.cs`

## 概述

`StoryModeMissions` 位于 `StoryMode.Missions`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `StoryMode.Missions` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### OpenTrainingFieldMission
`public static Mission OpenTrainingFieldMission(string scene, Location location, CharacterObject talkToChar = null, string sceneLevels = null)`

**用途 / Purpose:** **用途 / Purpose:** 打开training field mission对应的资源或界面。

```csharp
// 静态调用，不需要实例
StoryModeMissions.OpenTrainingFieldMission("example", location, null, "example");
```

### OpenSneakIntoTheVillaMission
`public static Mission OpenSneakIntoTheVillaMission(string scene, CampaignTime overridenCt, string sceneLevels = null)`

**用途 / Purpose:** **用途 / Purpose:** 打开sneak into the villa mission对应的资源或界面。

```csharp
// 静态调用，不需要实例
StoryModeMissions.OpenSneakIntoTheVillaMission("example", overridenCt, "example");
```

## 使用示例

```csharp
StoryModeMissions.OpenTrainingFieldMission("example", location, null, "example");
```

## 参见

- [本区域目录](../)