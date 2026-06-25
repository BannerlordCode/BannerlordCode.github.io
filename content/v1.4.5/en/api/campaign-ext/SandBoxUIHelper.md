---
title: "SandBoxUIHelper"
description: "Auto-generated class reference for SandBoxUIHelper."
---
# SandBoxUIHelper

**Namespace:** SandBox.ViewModelCollection
**Module:** SandBox.ViewModelCollection
**Type:** `public static class SandBoxUIHelper`
**Base:** none
**File:** `Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection/SandBoxUIHelper.cs`

## Overview

`SandBoxUIHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `SandBoxUIHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetExplainedNumberTooltip
`public static List<TooltipProperty> GetExplainedNumberTooltip(ref ExplainedNumber explanation)`

**Purpose:** Reads and returns the `explained number tooltip` value held by the current object.

```csharp
// Static call; no instance required
SandBoxUIHelper.GetExplainedNumberTooltip(explanation);
```

### GetBattleLootAwardTooltip
`public static List<TooltipProperty> GetBattleLootAwardTooltip(float lootPercentage)`

**Purpose:** Reads and returns the `battle loot award tooltip` value held by the current object.

```csharp
// Static call; no instance required
SandBoxUIHelper.GetBattleLootAwardTooltip(0);
```

### GetFigureheadTooltip
`public static List<TooltipProperty> GetFigureheadTooltip(Figurehead figurehead)`

**Purpose:** Reads and returns the `figurehead tooltip` value held by the current object.

```csharp
// Static call; no instance required
SandBoxUIHelper.GetFigureheadTooltip(figurehead);
```

### GetSkillEffectText
`public static string GetSkillEffectText(SkillEffect effect, int skillLevel)`

**Purpose:** Reads and returns the `skill effect text` value held by the current object.

```csharp
// Static call; no instance required
SandBoxUIHelper.GetSkillEffectText(effect, 0);
```

### GetRecruitNotificationText
`public static string GetRecruitNotificationText(int recruitmentAmount)`

**Purpose:** Reads and returns the `recruit notification text` value held by the current object.

```csharp
// Static call; no instance required
SandBoxUIHelper.GetRecruitNotificationText(0);
```

### GetItemSoldNotificationText
`public static string GetItemSoldNotificationText(ItemRosterElement item, int itemAmount, bool fromHeroToSettlement)`

**Purpose:** Reads and returns the `item sold notification text` value held by the current object.

```csharp
// Static call; no instance required
SandBoxUIHelper.GetItemSoldNotificationText(item, 0, false);
```

### GetShipSoldNotificationText
`public static string GetShipSoldNotificationText(Ship ship, int itemAmount, bool fromHeroToSettlement)`

**Purpose:** Reads and returns the `ship sold notification text` value held by the current object.

```csharp
// Static call; no instance required
SandBoxUIHelper.GetShipSoldNotificationText(ship, 0, false);
```

### GetTroopGivenToSettlementNotificationText
`public static string GetTroopGivenToSettlementNotificationText(int givenAmount)`

**Purpose:** Reads and returns the `troop given to settlement notification text` value held by the current object.

```csharp
// Static call; no instance required
SandBoxUIHelper.GetTroopGivenToSettlementNotificationText(0);
```

### GetSiegeEngineInProgressTooltip
`public static List<TooltipProperty> GetSiegeEngineInProgressTooltip(SiegeEngineConstructionProgress engineInProgress)`

**Purpose:** Reads and returns the `siege engine in progress tooltip` value held by the current object.

```csharp
// Static call; no instance required
SandBoxUIHelper.GetSiegeEngineInProgressTooltip(engineInProgress);
```

### GetSiegeEngineTooltip
`public static List<TooltipProperty> GetSiegeEngineTooltip(SiegeEngineType engine)`

**Purpose:** Reads and returns the `siege engine tooltip` value held by the current object.

```csharp
// Static call; no instance required
SandBoxUIHelper.GetSiegeEngineTooltip(engine);
```

### GetWallSectionTooltip
`public static List<TooltipProperty> GetWallSectionTooltip(Settlement settlement, int wallIndex)`

**Purpose:** Reads and returns the `wall section tooltip` value held by the current object.

```csharp
// Static call; no instance required
SandBoxUIHelper.GetWallSectionTooltip(settlement, 0);
```

### GetPrisonersSoldNotificationText
`public static string GetPrisonersSoldNotificationText(int soldPrisonerAmount)`

**Purpose:** Reads and returns the `prisoners sold notification text` value held by the current object.

```csharp
// Static call; no instance required
SandBoxUIHelper.GetPrisonersSoldNotificationText(0);
```

### GetPartyHealthyCount
`public static int GetPartyHealthyCount(MobileParty party)`

**Purpose:** Reads and returns the `party healthy count` value held by the current object.

```csharp
// Static call; no instance required
SandBoxUIHelper.GetPartyHealthyCount(party);
```

### GetPartyWoundedText
`public static string GetPartyWoundedText(int woundedAmount)`

**Purpose:** Reads and returns the `party wounded text` value held by the current object.

```csharp
// Static call; no instance required
SandBoxUIHelper.GetPartyWoundedText(0);
```

### GetPartyPrisonerText
`public static string GetPartyPrisonerText(int prisonerAmount)`

**Purpose:** Reads and returns the `party prisoner text` value held by the current object.

```csharp
// Static call; no instance required
SandBoxUIHelper.GetPartyPrisonerText(0);
```

### GetAllWoundedMembersAmount
`public static int GetAllWoundedMembersAmount(MobileParty party)`

**Purpose:** Reads and returns the `all wounded members amount` value held by the current object.

```csharp
// Static call; no instance required
SandBoxUIHelper.GetAllWoundedMembersAmount(party);
```

### GetAllPrisonerMembersAmount
`public static int GetAllPrisonerMembersAmount(MobileParty party)`

**Purpose:** Reads and returns the `all prisoner members amount` value held by the current object.

```csharp
// Static call; no instance required
SandBoxUIHelper.GetAllPrisonerMembersAmount(party);
```

### GetCharacterCode
`public static CharacterCode GetCharacterCode(CharacterObject character, bool useCivilian = false)`

**Purpose:** Reads and returns the `character code` value held by the current object.

```csharp
// Static call; no instance required
SandBoxUIHelper.GetCharacterCode(character, false);
```

### IsHeroInformationHidden
`public static bool IsHeroInformationHidden(Hero hero, out TextObject disableReason)`

**Purpose:** Determines whether the current object is in the `hero information hidden` state or condition.

```csharp
// Static call; no instance required
SandBoxUIHelper.IsHeroInformationHidden(hero, disableReason);
```

### GetMapEventVisualTypeFromMapEvent
`public static MapEventVisualTypes GetMapEventVisualTypeFromMapEvent(MapEvent mapEvent)`

**Purpose:** Reads and returns the `map event visual type from map event` value held by the current object.

```csharp
// Static call; no instance required
SandBoxUIHelper.GetMapEventVisualTypeFromMapEvent(mapEvent);
```

### IsAgentInVisibilityRangeApproximate
`public static bool IsAgentInVisibilityRangeApproximate(Agent seerAgent, Agent seenAgent)`

**Purpose:** Determines whether the current object is in the `agent in visibility range approximate` state or condition.

```csharp
// Static call; no instance required
SandBoxUIHelper.IsAgentInVisibilityRangeApproximate(seerAgent, seenAgent);
```

### CanAgentBeAlarmed
`public static bool CanAgentBeAlarmed(Agent agent)`

**Purpose:** Checks whether the current object meets the preconditions for `agent be alarmed`.

```csharp
// Static call; no instance required
SandBoxUIHelper.CanAgentBeAlarmed(agent);
```

## Usage Example

```csharp
SandBoxUIHelper.Initialize();
```

## See Also

- [Area Index](../)