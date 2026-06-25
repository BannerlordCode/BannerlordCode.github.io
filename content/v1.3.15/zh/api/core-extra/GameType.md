---
title: "GameType"
description: "GameType 的自动生成类参考。"
---
# GameType

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public abstract class GameType`
**Base:** 无
**File:** `TaleWorlds.Core/GameType.cs`

## 概述

`GameType` 位于 `TaleWorlds.Core`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `SupportsSaving` | `public virtual bool SupportsSaving { get; set; }` |
| `CurrentGame` | `public Game CurrentGame { get; set; }` |
| `ObjectManager` | `public MBObjectManager ObjectManager { get; }` |
| `GameManager` | `public GameManagerBase GameManager { get; }` |
| `IsInventoryAccessibleAtMission` | `public virtual bool IsInventoryAccessibleAtMission { get; }` |
| `IsQuestScreenAccessibleAtMission` | `public virtual bool IsQuestScreenAccessibleAtMission { get; }` |
| `IsCharacterWindowAccessibleAtMission` | `public virtual bool IsCharacterWindowAccessibleAtMission { get; }` |
| `IsPartyWindowAccessibleAtMission` | `public virtual bool IsPartyWindowAccessibleAtMission { get; }` |
| `IsKingdomWindowAccessibleAtMission` | `public virtual bool IsKingdomWindowAccessibleAtMission { get; }` |
| `IsClanWindowAccessibleAtMission` | `public virtual bool IsClanWindowAccessibleAtMission { get; }` |
| `IsEncyclopediaWindowAccessibleAtMission` | `public virtual bool IsEncyclopediaWindowAccessibleAtMission { get; }` |
| `IsBannerWindowAccessibleAtMission` | `public virtual bool IsBannerWindowAccessibleAtMission { get; }` |
| `IsDevelopment` | `public virtual bool IsDevelopment { get; }` |
| `IsCoreOnlyGameMode` | `public virtual bool IsCoreOnlyGameMode { get; }` |
| `RequiresTutorial` | `public virtual bool RequiresTutorial { get; }` |
| `GameTypeStringId` | `public virtual string GameTypeStringId { get; }` |

## 主要方法

### OnStateChanged
`public abstract void OnStateChanged(GameState oldState)`

**用途 / Purpose:** 在 「state changed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 GameType 实例
GameType gameType = ...;
gameType.OnStateChanged(oldState);
```

### DoLoadingForGameType
`public bool DoLoadingForGameType()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 GameType 实例
GameType gameType = ...;
var result = gameType.DoLoadingForGameType();
```

### OnDestroy
`public abstract void OnDestroy()`

**用途 / Purpose:** 在 「destroy」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 GameType 实例
GameType gameType = ...;
gameType.OnDestroy();
```

### OnMissionIsStarting
`public virtual void OnMissionIsStarting(string missionName, MissionInitializerRecord rec)`

**用途 / Purpose:** 在 「mission is starting」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 GameType 实例
GameType gameType = ...;
gameType.OnMissionIsStarting("example", rec);
```

### InitializeParameters
`public virtual void InitializeParameters()`

**用途 / Purpose:** 为 「parameters」 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 GameType 实例
GameType gameType = ...;
gameType.InitializeParameters();
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
GameType instance = ...;
```

## 参见

- [本区域目录](../)