---
title: "TournamentModel"
description: "TournamentModel 的自动生成类参考。"
---
# TournamentModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class TournamentModel : MBGameModel<TournamentModel>`
**Base:** `MBGameModel<TournamentModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/TournamentModel.cs`

## 概述

`TournamentModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `TournamentModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetTournamentStartChance
`public abstract float GetTournamentStartChance(Town town)`

**用途 / Purpose:** 读取并返回当前对象中 「tournament start chance」 的结果。

```csharp
// 先通过子系统 API 拿到 TournamentModel 实例
TournamentModel tournamentModel = ...;
var result = tournamentModel.GetTournamentStartChance(town);
```

### CreateTournament
`public abstract TournamentGame CreateTournament(Town town)`

**用途 / Purpose:** 构建一个新的 「tournament」 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 TournamentModel 实例
TournamentModel tournamentModel = ...;
var result = tournamentModel.CreateTournament(town);
```

### GetTournamentEndChance
`public abstract float GetTournamentEndChance(TournamentGame tournament)`

**用途 / Purpose:** 读取并返回当前对象中 「tournament end chance」 的结果。

```csharp
// 先通过子系统 API 拿到 TournamentModel 实例
TournamentModel tournamentModel = ...;
var result = tournamentModel.GetTournamentEndChance(tournament);
```

### GetNumLeaderboardVictoriesAtGameStart
`public abstract int GetNumLeaderboardVictoriesAtGameStart()`

**用途 / Purpose:** 读取并返回当前对象中 「num leaderboard victories at game start」 的结果。

```csharp
// 先通过子系统 API 拿到 TournamentModel 实例
TournamentModel tournamentModel = ...;
var result = tournamentModel.GetNumLeaderboardVictoriesAtGameStart();
```

### GetTournamentSimulationScore
`public abstract float GetTournamentSimulationScore(CharacterObject character)`

**用途 / Purpose:** 读取并返回当前对象中 「tournament simulation score」 的结果。

```csharp
// 先通过子系统 API 拿到 TournamentModel 实例
TournamentModel tournamentModel = ...;
var result = tournamentModel.GetTournamentSimulationScore(character);
```

### GetRenownReward
`public abstract int GetRenownReward(Hero winner, Town town)`

**用途 / Purpose:** 读取并返回当前对象中 「renown reward」 的结果。

```csharp
// 先通过子系统 API 拿到 TournamentModel 实例
TournamentModel tournamentModel = ...;
var result = tournamentModel.GetRenownReward(winner, town);
```

### GetInfluenceReward
`public abstract int GetInfluenceReward(Hero winner, Town town)`

**用途 / Purpose:** 读取并返回当前对象中 「influence reward」 的结果。

```csharp
// 先通过子系统 API 拿到 TournamentModel 实例
TournamentModel tournamentModel = ...;
var result = tournamentModel.GetInfluenceReward(winner, town);
```

### GetParticipantArmor
`public abstract Equipment GetParticipantArmor(CharacterObject participant)`

**用途 / Purpose:** 读取并返回当前对象中 「participant armor」 的结果。

```csharp
// 先通过子系统 API 拿到 TournamentModel 实例
TournamentModel tournamentModel = ...;
var result = tournamentModel.GetParticipantArmor(participant);
```

### GetRegularRewardItems
`public abstract MBList<ItemObject> GetRegularRewardItems(Town town, int regularRewardMinValue, int regularRewardMaxValue)`

**用途 / Purpose:** 读取并返回当前对象中 「regular reward items」 的结果。

```csharp
// 先通过子系统 API 拿到 TournamentModel 实例
TournamentModel tournamentModel = ...;
var result = tournamentModel.GetRegularRewardItems(town, 0, 0);
```

### GetEliteRewardItems
`public abstract MBList<ItemObject> GetEliteRewardItems(Town town, int regularRewardMinValue, int regularRewardMaxValue)`

**用途 / Purpose:** 读取并返回当前对象中 「elite reward items」 的结果。

```csharp
// 先通过子系统 API 拿到 TournamentModel 实例
TournamentModel tournamentModel = ...;
var result = tournamentModel.GetEliteRewardItems(town, 0, 0);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
TournamentModel instance = ...;
```

## 参见

- [本区域目录](../)