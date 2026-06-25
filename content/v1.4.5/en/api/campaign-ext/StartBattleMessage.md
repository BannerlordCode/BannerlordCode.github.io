---
title: "StartBattleMessage"
description: "Auto-generated class reference for StartBattleMessage."
---
# StartBattleMessage

**Namespace:** Messages.FromBattleServerManager.ToBattleServer
**Module:** Messages.FromBattleServerManager
**Type:** `public class StartBattleMessage : Message`
**Base:** `Message`
**File:** `bin/TaleWorlds.MountAndBlade.Diamond/Messages.FromBattleServerManager.ToBattleServer/StartBattleMessage.cs`

## Overview

`StartBattleMessage` lives in `Messages.FromBattleServerManager.ToBattleServer` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Messages.FromBattleServerManager.ToBattleServer` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

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

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
StartBattleMessage instance = ...;
```

## See Also

- [Area Index](../)