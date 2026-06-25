---
title: "StartBattleMessage"
description: "StartBattleMessage 的自动生成类参考。"
---
# StartBattleMessage

**Namespace:** Messages.FromBattleServerManager.ToBattleServer
**Module:** Messages.FromBattleServerManager
**Type:** `public class StartBattleMessage : Message`
**Base:** `Message`
**File:** `TaleWorlds.MountAndBlade.Diamond/Messages/FromBattleServerManager/ToBattleServer/StartBattleMessage.cs`

## 概述

`StartBattleMessage` 位于 `Messages.FromBattleServerManager.ToBattleServer`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Messages.FromBattleServerManager.ToBattleServer` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `SceneName` | `public string SceneName { get; }` |
| `GameType` | `public string GameType { get; }` |
| `BattleId` | `public Guid BattleId { get; }` |
| `Faction1` | `public string Faction1 { get; }` |
| `Faction2` | `public string Faction2 { get; }` |
| `MinRequiredPlayerCountToStartBattle` | `public int MinRequiredPlayerCountToStartBattle { get; }` |
| `BattleSize` | `public int BattleSize { get; }` |
| `RoundThreshold` | `public int RoundThreshold { get; }` |
| `MoraleThreshold` | `public float MoraleThreshold { get; }` |
| `UseAnalytics` | `public bool UseAnalytics { get; }` |
| `CaptureMovementData` | `public bool CaptureMovementData { get; }` |
| `AnalyticsServiceAddress` | `public string AnalyticsServiceAddress { get; }` |
| `MaxFriendlyKillCount` | `public int MaxFriendlyKillCount { get; }` |
| `MaxFriendlyDamage` | `public float MaxFriendlyDamage { get; }` |
| `MaxFriendlyDamagePerSingleRound` | `public float MaxFriendlyDamagePerSingleRound { get; }` |
| `RoundFriendlyDamageLimit` | `public float RoundFriendlyDamageLimit { get; }` |
| `MaxRoundsOverLimitCount` | `public int MaxRoundsOverLimitCount { get; }` |
| `IsPremadeGame` | `public bool IsPremadeGame { get; }` |
| `ProfanityList` | `public string ProfanityList { get; }` |
| `PremadeGameType` | `public PremadeGameType PremadeGameType { get; }` |
| `AllowList` | `public string AllowList { get; }` |
| `AssignedPlayers` | `public PlayerId AssignedPlayers { get; }` |

## 使用示例

```csharp
// 从对应子系统 API 获取实例
StartBattleMessage instance = ...;
```

## 参见

- [本区域目录](../)