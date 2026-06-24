<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MetaDataExtensions`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MetaDataExtensions

**Namespace:** TaleWorlds.CampaignSystem.Extensions
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class MetaDataExtensions`
**Area:** core-extra

## Overview

`MetaDataExtensions` lives in `TaleWorlds.CampaignSystem.Extensions`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Extensions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetUniqueGameId
`public static string GetUniqueGameId(this MetaData metaData)`

**Purpose:** Gets the current value of `unique game id`.

### GetMainHeroLevel
`public static int GetMainHeroLevel(this MetaData metaData)`

**Purpose:** Gets the current value of `main hero level`.

### GetMainPartyFood
`public static float GetMainPartyFood(this MetaData metaData)`

**Purpose:** Gets the current value of `main party food`.

### GetMainHeroGold
`public static int GetMainHeroGold(this MetaData metaData)`

**Purpose:** Gets the current value of `main hero gold`.

### GetClanInfluence
`public static float GetClanInfluence(this MetaData metaData)`

**Purpose:** Gets the current value of `clan influence`.

### GetClanFiefs
`public static int GetClanFiefs(this MetaData metaData)`

**Purpose:** Gets the current value of `clan fiefs`.

### GetMainPartyHealthyMemberCount
`public static int GetMainPartyHealthyMemberCount(this MetaData metaData)`

**Purpose:** Gets the current value of `main party healthy member count`.

### GetMainPartyPrisonerMemberCount
`public static int GetMainPartyPrisonerMemberCount(this MetaData metaData)`

**Purpose:** Gets the current value of `main party prisoner member count`.

### GetMainPartyWoundedMemberCount
`public static int GetMainPartyWoundedMemberCount(this MetaData metaData)`

**Purpose:** Gets the current value of `main party wounded member count`.

### GetClanBannerCode
`public static string GetClanBannerCode(this MetaData metaData)`

**Purpose:** Gets the current value of `clan banner code`.

### GetCharacterName
`public static string GetCharacterName(this MetaData metaData)`

**Purpose:** Gets the current value of `character name`.

### GetCharacterVisualCode
`public static string GetCharacterVisualCode(this MetaData metaData)`

**Purpose:** Gets the current value of `character visual code`.

### GetDayLong
`public static double GetDayLong(this MetaData metaData)`

**Purpose:** Gets the current value of `day long`.

### GetIronmanMode
`public static bool GetIronmanMode(this MetaData metaData)`

**Purpose:** Gets the current value of `ironman mode`.

### GetPlayerHealthPercentage
`public static int GetPlayerHealthPercentage(this MetaData metaData)`

**Purpose:** Gets the current value of `player health percentage`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
MetaDataExtensions.GetUniqueGameId(metaData);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)
