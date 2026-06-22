<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TraitLevelingHelper`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TraitLevelingHelper

**Namespace:** TaleWorlds.CampaignSystem.CharacterDevelopment
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class TraitLevelingHelper`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/CharacterDevelopment/TraitLevelingHelper.cs`

## 概述

`TraitLevelingHelper` 是一个静态工具类，提供辅助方法。

## 主要方法

### UpdateTraitXPAccordingToTraitLevels
```csharp
public static void UpdateTraitXPAccordingToTraitLevels()
```

### OnBattleWon
```csharp
public static void OnBattleWon(MapEvent mapEvent, float contribution)
```

### OnTroopsSacrificed
```csharp
public static void OnTroopsSacrificed()
```

### OnLordExecuted
```csharp
public static void OnLordExecuted()
```

### OnVillageRaided
```csharp
public static void OnVillageRaided()
```

### OnHostileAction
```csharp
public static void OnHostileAction(int amount)
```

### OnPartyTreatedWell
```csharp
public static void OnPartyTreatedWell()
```

### OnPartyStarved
```csharp
public static void OnPartyStarved()
```

### OnIssueFailed
```csharp
public static void OnIssueFailed(Hero targetHero, Tuple<TraitObject, int> effectedTraits)
```

### OnIssueSolvedThroughQuest
```csharp
public static void OnIssueSolvedThroughQuest(Hero targetHero, Tuple<TraitObject, int> effectedTraits)
```

### OnIssueSolvedThroughQuest
```csharp
public static void OnIssueSolvedThroughQuest(Hero targetHero, TraitObject trait, int xp)
```

### OnIssueSolvedThroughAlternativeSolution
```csharp
public static void OnIssueSolvedThroughAlternativeSolution(Hero targetHero, Tuple<TraitObject, int> effectedTraits)
```

### OnIssueSolvedThroughBetrayal
```csharp
public static void OnIssueSolvedThroughBetrayal(Hero targetHero, Tuple<TraitObject, int> effectedTraits)
```

### OnLordFreed
```csharp
public static void OnLordFreed(Hero targetHero)
```

### OnPersuasionDefection
```csharp
public static void OnPersuasionDefection(Hero targetHero)
```

### OnSiegeAftermathApplied
```csharp
public static void OnSiegeAftermathApplied(Settlement settlement, SiegeAftermathAction.SiegeAftermath aftermathType, TraitObject effectedTraits)
```

### OnIncidentResolved
```csharp
public static void OnIncidentResolved(TraitObject trait, int xpValue)
```

## 使用示例

```csharp
// TraitLevelingHelper (Helper) 的典型用法
TraitLevelingHelper./* static helper method */();;
```

## 参见

- [完整类目录](../catalog)