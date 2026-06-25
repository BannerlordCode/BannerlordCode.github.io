---
title: "SandBoxViewCreator"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SandBoxViewCreator`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SandBoxViewCreator

**Namespace:** SandBox.View
**Module:** SandBox.View
**Type:** `public static class SandBoxViewCreator`
**Base:** 无
**File:** `SandBox.View/SandBoxViewCreator.cs`

## 概述

`SandBoxViewCreator` 位于 `SandBox.View`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.View` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### CreateSaveLoadScreen
`public static ScreenBase CreateSaveLoadScreen(bool isSaving)`

**用途 / Purpose:** 创建一个 `save load screen` 实例或对象。

### CreateMissionCraftingView
`public static MissionView CreateMissionCraftingView()`

**用途 / Purpose:** 创建一个 `mission crafting view` 实例或对象。

### CreateMissionNameMarkerUIHandler
`public static MissionView CreateMissionNameMarkerUIHandler(Mission mission = null)`

**用途 / Purpose:** 创建一个 `mission name marker u i handler` 实例或对象。

### CreateMissionConversationView
`public static MissionView CreateMissionConversationView(Mission mission)`

**用途 / Purpose:** 创建一个 `mission conversation view` 实例或对象。

### CreateMissionBarterView
`public static MissionView CreateMissionBarterView()`

**用途 / Purpose:** 创建一个 `mission barter view` 实例或对象。

### CreateMissionAgentAlarmStateView
`public static MissionView CreateMissionAgentAlarmStateView(Mission mission = null)`

**用途 / Purpose:** 创建一个 `mission agent alarm state view` 实例或对象。

### CreateMissionMainAgentDetectionView
`public static MissionView CreateMissionMainAgentDetectionView(Mission mission = null)`

**用途 / Purpose:** 创建一个 `mission main agent detection view` 实例或对象。

### CreateMissionTournamentView
`public static MissionView CreateMissionTournamentView()`

**用途 / Purpose:** 创建一个 `mission tournament view` 实例或对象。

### CreateMissionQuestBarView
`public static MissionView CreateMissionQuestBarView()`

**用途 / Purpose:** 创建一个 `mission quest bar view` 实例或对象。

### CreateBoardGameView
`public static MissionView CreateBoardGameView()`

**用途 / Purpose:** 创建一个 `board game view` 实例或对象。

### CreateMissionArenaPracticeFightView
`public static MissionView CreateMissionArenaPracticeFightView()`

**用途 / Purpose:** 创建一个 `mission arena practice fight view` 实例或对象。

## 使用示例

```csharp
SandBoxViewCreator.CreateSaveLoadScreen(false);
```

## 参见

- [完整类目录](../catalog)