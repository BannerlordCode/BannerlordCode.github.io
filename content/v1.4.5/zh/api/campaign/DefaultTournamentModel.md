---
title: "DefaultTournamentModel"
description: "DefaultTournamentModel 的自动生成类参考。"
---
# DefaultTournamentModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultTournamentModel : TournamentModel`
**Base:** `TournamentModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultTournamentModel.cs`

## 概述

`DefaultTournamentModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultTournamentModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CreateTournament
`public override TournamentGame CreateTournament(Town town)`

**用途 / Purpose:** 构建一个新的 tournament 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 DefaultTournamentModel 实例
DefaultTournamentModel defaultTournamentModel = ...;
var result = defaultTournamentModel.CreateTournament(town);
```

### GetTournamentStartChance
`public override float GetTournamentStartChance(Town town)`

**用途 / Purpose:** 读取并返回当前对象中 tournament start chance 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultTournamentModel 实例
DefaultTournamentModel defaultTournamentModel = ...;
var result = defaultTournamentModel.GetTournamentStartChance(town);
```

### GetNumLeaderboardVictoriesAtGameStart
`public override int GetNumLeaderboardVictoriesAtGameStart()`

**用途 / Purpose:** 读取并返回当前对象中 num leaderboard victories at game start 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultTournamentModel 实例
DefaultTournamentModel defaultTournamentModel = ...;
var result = defaultTournamentModel.GetNumLeaderboardVictoriesAtGameStart();
```

### GetTournamentEndChance
`public override float GetTournamentEndChance(TournamentGame tournament)`

**用途 / Purpose:** 读取并返回当前对象中 tournament end chance 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultTournamentModel 实例
DefaultTournamentModel defaultTournamentModel = ...;
var result = defaultTournamentModel.GetTournamentEndChance(tournament);
```

### GetTournamentSimulationScore
`public override float GetTournamentSimulationScore(CharacterObject character)`

**用途 / Purpose:** 读取并返回当前对象中 tournament simulation score 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultTournamentModel 实例
DefaultTournamentModel defaultTournamentModel = ...;
var result = defaultTournamentModel.GetTournamentSimulationScore(character);
```

### GetRenownReward
`public override int GetRenownReward(Hero winner, Town town)`

**用途 / Purpose:** 读取并返回当前对象中 renown reward 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultTournamentModel 实例
DefaultTournamentModel defaultTournamentModel = ...;
var result = defaultTournamentModel.GetRenownReward(winner, town);
```

### GetInfluenceReward
`public override int GetInfluenceReward(Hero winner, Town town)`

**用途 / Purpose:** 读取并返回当前对象中 influence reward 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultTournamentModel 实例
DefaultTournamentModel defaultTournamentModel = ...;
var result = defaultTournamentModel.GetInfluenceReward(winner, town);
```

### GetParticipantArmor
`public override Equipment GetParticipantArmor(CharacterObject participant)`

**用途 / Purpose:** 读取并返回当前对象中 participant armor 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultTournamentModel 实例
DefaultTournamentModel defaultTournamentModel = ...;
var result = defaultTournamentModel.GetParticipantArmor(participant);
```

### GetRegularRewardItems
`public override MBList<ItemObject> GetRegularRewardItems(Town town, int regularRewardMinValue, int regularRewardMaxValue)`

**用途 / Purpose:** 读取并返回当前对象中 regular reward items 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultTournamentModel 实例
DefaultTournamentModel defaultTournamentModel = ...;
var result = defaultTournamentModel.GetRegularRewardItems(town, 0, 0);
```

### GetEliteRewardItems
`public override MBList<ItemObject> GetEliteRewardItems(Town town, int regularRewardMinValue, int regularRewardMaxValue)`

**用途 / Purpose:** 读取并返回当前对象中 elite reward items 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultTournamentModel 实例
DefaultTournamentModel defaultTournamentModel = ...;
var result = defaultTournamentModel.GetEliteRewardItems(town, 0, 0);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultTournamentModel>(new MyDefaultTournamentModel());
```

## 参见

- [本区域目录](../)