---
title: "TraitLevelingHelper"
description: "TraitLevelingHelper 的自动生成类参考。"
---
# TraitLevelingHelper

**Namespace:** TaleWorlds.CampaignSystem.CharacterDevelopment
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class TraitLevelingHelper`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/CharacterDevelopment/TraitLevelingHelper.cs`

## 概述

`TraitLevelingHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `TraitLevelingHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### UpdateTraitXPAccordingToTraitLevels
`public static void UpdateTraitXPAccordingToTraitLevels()`

**用途 / Purpose:** 重新计算并更新 trait x p according to trait levels 的最新表示。

```csharp
// 静态调用，不需要实例
TraitLevelingHelper.UpdateTraitXPAccordingToTraitLevels();
```

### OnBattleWon
`public static void OnBattleWon(MapEvent mapEvent, float contribution)`

**用途 / Purpose:** 在 battle won 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
TraitLevelingHelper.OnBattleWon(mapEvent, 0);
```

### OnTroopsSacrificed
`public static void OnTroopsSacrificed()`

**用途 / Purpose:** 在 troops sacrificed 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
TraitLevelingHelper.OnTroopsSacrificed();
```

### OnLordExecuted
`public static void OnLordExecuted()`

**用途 / Purpose:** 在 lord executed 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
TraitLevelingHelper.OnLordExecuted();
```

### OnVillageRaided
`public static void OnVillageRaided()`

**用途 / Purpose:** 在 village raided 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
TraitLevelingHelper.OnVillageRaided();
```

### OnHostileAction
`public static void OnHostileAction(int amount)`

**用途 / Purpose:** 在 hostile action 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
TraitLevelingHelper.OnHostileAction(0);
```

### OnPartyTreatedWell
`public static void OnPartyTreatedWell()`

**用途 / Purpose:** 在 party treated well 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
TraitLevelingHelper.OnPartyTreatedWell();
```

### OnPartyStarved
`public static void OnPartyStarved()`

**用途 / Purpose:** 在 party starved 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
TraitLevelingHelper.OnPartyStarved();
```

### OnIssueFailed
`public static void OnIssueFailed(Hero targetHero, Tuple<TraitObject, int> effectedTraits)`

**用途 / Purpose:** 在 issue failed 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
TraitLevelingHelper.OnIssueFailed(targetHero, tuple<TraitObject, 0);
```

### OnIssueSolvedThroughQuest
`public static void OnIssueSolvedThroughQuest(Hero targetHero, Tuple<TraitObject, int> effectedTraits)`

**用途 / Purpose:** 在 issue solved through quest 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
TraitLevelingHelper.OnIssueSolvedThroughQuest(targetHero, tuple<TraitObject, 0);
```

### OnIssueSolvedThroughQuest
`public static void OnIssueSolvedThroughQuest(Hero targetHero, TraitObject trait, int xp)`

**用途 / Purpose:** 在 issue solved through quest 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
TraitLevelingHelper.OnIssueSolvedThroughQuest(targetHero, trait, 0);
```

### OnIssueSolvedThroughAlternativeSolution
`public static void OnIssueSolvedThroughAlternativeSolution(Hero targetHero, Tuple<TraitObject, int> effectedTraits)`

**用途 / Purpose:** 在 issue solved through alternative solution 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
TraitLevelingHelper.OnIssueSolvedThroughAlternativeSolution(targetHero, tuple<TraitObject, 0);
```

### OnIssueSolvedThroughBetrayal
`public static void OnIssueSolvedThroughBetrayal(Hero targetHero, Tuple<TraitObject, int> effectedTraits)`

**用途 / Purpose:** 在 issue solved through betrayal 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
TraitLevelingHelper.OnIssueSolvedThroughBetrayal(targetHero, tuple<TraitObject, 0);
```

### OnLordFreed
`public static void OnLordFreed(Hero targetHero)`

**用途 / Purpose:** 在 lord freed 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
TraitLevelingHelper.OnLordFreed(targetHero);
```

### OnPersuasionDefection
`public static void OnPersuasionDefection(Hero targetHero)`

**用途 / Purpose:** 在 persuasion defection 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
TraitLevelingHelper.OnPersuasionDefection(targetHero);
```

### OnSiegeAftermathApplied
`public static void OnSiegeAftermathApplied(Settlement settlement, SiegeAftermathAction.SiegeAftermath aftermathType, TraitObject effectedTraits)`

**用途 / Purpose:** 在 siege aftermath applied 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
TraitLevelingHelper.OnSiegeAftermathApplied(settlement, aftermathType, effectedTraits);
```

### OnIncidentResolved
`public static void OnIncidentResolved(TraitObject trait, int xpValue)`

**用途 / Purpose:** 在 incident resolved 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
TraitLevelingHelper.OnIncidentResolved(trait, 0);
```

## 使用示例

```csharp
TraitLevelingHelper.Initialize();
```

## 参见

- [本区域目录](../)