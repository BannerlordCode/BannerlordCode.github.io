---
title: "BoardGameCampaignBehavior"
description: "BoardGameCampaignBehavior 的自动生成类参考。"
---
# BoardGameCampaignBehavior

**Namespace:** SandBox.CampaignBehaviors
**Module:** SandBox.CampaignBehaviors
**Type:** `public class BoardGameCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `SandBox/CampaignBehaviors/BoardGameCampaignBehavior.cs`

## 概述

`BoardGameCampaignBehavior` 位于 `SandBox.CampaignBehaviors`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.CampaignBehaviors` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `WonBoardGamesInOneWeekInSettlement` | `public IEnumerable<Settlement> WonBoardGamesInOneWeekInSettlement { get; }` |

## 主要方法

### RegisterEvents
`public override void RegisterEvents()`

**用途 / Purpose:** 将events注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 BoardGameCampaignBehavior 实例
BoardGameCampaignBehavior boardGameCampaignBehavior = ...;
boardGameCampaignBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**用途 / Purpose:** 将data同步到相关上下文或系统中。

```csharp
// 先通过子系统 API 拿到 BoardGameCampaignBehavior 实例
BoardGameCampaignBehavior boardGameCampaignBehavior = ...;
boardGameCampaignBehavior.SyncData(dataStore);
```

### OnSessionLaunched
`public void OnSessionLaunched(CampaignGameStarter campaignGameStarter)`

**用途 / Purpose:** 在 session launched 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 BoardGameCampaignBehavior 实例
BoardGameCampaignBehavior boardGameCampaignBehavior = ...;
boardGameCampaignBehavior.OnSessionLaunched(campaignGameStarter);
```

### InitializeConversationVars
`public void InitializeConversationVars()`

**用途 / Purpose:** 为 conversation vars 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 BoardGameCampaignBehavior 实例
BoardGameCampaignBehavior boardGameCampaignBehavior = ...;
boardGameCampaignBehavior.InitializeConversationVars();
```

### OnMissionStarted
`public void OnMissionStarted(IMission mission)`

**用途 / Purpose:** 在 mission started 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 BoardGameCampaignBehavior 实例
BoardGameCampaignBehavior boardGameCampaignBehavior = ...;
boardGameCampaignBehavior.OnMissionStarted(mission);
```

### OnHeroKilled
`public void OnHeroKilled(Hero victim, Hero killer, KillCharacterAction.KillCharacterActionDetail detail, bool showNotification = true)`

**用途 / Purpose:** 在 hero killed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 BoardGameCampaignBehavior 实例
BoardGameCampaignBehavior boardGameCampaignBehavior = ...;
boardGameCampaignBehavior.OnHeroKilled(victim, killer, detail, false);
```

### taverngamehost_player_sitting_now_on_condition
`public static bool taverngamehost_player_sitting_now_on_condition()`

**用途 / Purpose:** 调用 taverngamehost_player_sitting_now_on_condition 对应的操作。

```csharp
// 静态调用，不需要实例
BoardGameCampaignBehavior.taverngamehost_player_sitting_now_on_condition();
```

### PlayerWonAgainstTavernChampion
`public void PlayerWonAgainstTavernChampion()`

**用途 / Purpose:** 调用 PlayerWonAgainstTavernChampion 对应的操作。

```csharp
// 先通过子系统 API 拿到 BoardGameCampaignBehavior 实例
BoardGameCampaignBehavior boardGameCampaignBehavior = ...;
boardGameCampaignBehavior.PlayerWonAgainstTavernChampion();
```

### SetBetAmount
`public void SetBetAmount(int bet)`

**用途 / Purpose:** 为 bet amount 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 BoardGameCampaignBehavior 实例
BoardGameCampaignBehavior boardGameCampaignBehavior = ...;
boardGameCampaignBehavior.SetBetAmount(0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
BoardGameCampaignBehavior boardGameCampaignBehavior = ...;
boardGameCampaignBehavior.RegisterEvents();
```

## 参见

- [本区域目录](../)