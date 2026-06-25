---
title: "SandBoxViewCreator"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SandBoxViewCreator`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SandBoxViewCreator

**命名空间:** SandBox.View
**模块:** SandBox.View
**类型:** `public static class SandBoxViewCreator`
**领域:** campaign-ext

## 概述

`SandBoxViewCreator` 位于 `SandBox.View`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

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

### CreateMissionStealthFailCounter
`public static MissionView CreateMissionStealthFailCounter(Mission mission = null)`

**用途 / Purpose:** 创建一个 `mission stealth fail counter` 实例或对象。

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
// 先准备该类型需要的上下文，然后直接调用静态入口
SandBoxViewCreator.CreateSaveLoadScreen(false);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
