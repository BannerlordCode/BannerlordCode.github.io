---
title: "SandBoxViewCreator"
description: "SandBoxViewCreator 的自动生成类参考。"
---
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

**用途 / Purpose:** 构建一个新的 save load screen 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
SandBoxViewCreator.CreateSaveLoadScreen(false);
```

### CreateMissionCraftingView
`public static MissionView CreateMissionCraftingView()`

**用途 / Purpose:** 构建一个新的 mission crafting view 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
SandBoxViewCreator.CreateMissionCraftingView();
```

### CreateMissionNameMarkerUIHandler
`public static MissionView CreateMissionNameMarkerUIHandler(Mission mission = null)`

**用途 / Purpose:** 构建一个新的 mission name marker u i handler 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
SandBoxViewCreator.CreateMissionNameMarkerUIHandler(null);
```

### CreateMissionConversationView
`public static MissionView CreateMissionConversationView(Mission mission)`

**用途 / Purpose:** 构建一个新的 mission conversation view 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
SandBoxViewCreator.CreateMissionConversationView(mission);
```

### CreateMissionBarterView
`public static MissionView CreateMissionBarterView()`

**用途 / Purpose:** 构建一个新的 mission barter view 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
SandBoxViewCreator.CreateMissionBarterView();
```

### CreateMissionAgentAlarmStateView
`public static MissionView CreateMissionAgentAlarmStateView(Mission mission = null)`

**用途 / Purpose:** 构建一个新的 mission agent alarm state view 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
SandBoxViewCreator.CreateMissionAgentAlarmStateView(null);
```

### CreateMissionMainAgentDetectionView
`public static MissionView CreateMissionMainAgentDetectionView(Mission mission = null)`

**用途 / Purpose:** 构建一个新的 mission main agent detection view 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
SandBoxViewCreator.CreateMissionMainAgentDetectionView(null);
```

### CreateMissionTournamentView
`public static MissionView CreateMissionTournamentView()`

**用途 / Purpose:** 构建一个新的 mission tournament view 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
SandBoxViewCreator.CreateMissionTournamentView();
```

### CreateMissionQuestBarView
`public static MissionView CreateMissionQuestBarView()`

**用途 / Purpose:** 构建一个新的 mission quest bar view 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
SandBoxViewCreator.CreateMissionQuestBarView();
```

### CreateBoardGameView
`public static MissionView CreateBoardGameView()`

**用途 / Purpose:** 构建一个新的 board game view 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
SandBoxViewCreator.CreateBoardGameView();
```

### CreateMissionArenaPracticeFightView
`public static MissionView CreateMissionArenaPracticeFightView()`

**用途 / Purpose:** 构建一个新的 mission arena practice fight view 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
SandBoxViewCreator.CreateMissionArenaPracticeFightView();
```

## 使用示例

```csharp
SandBoxViewCreator.CreateSaveLoadScreen(false);
```

## 参见

- [本区域目录](../)