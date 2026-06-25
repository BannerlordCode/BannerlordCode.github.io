---
title: "MetaDataExtensions"
description: "Auto-generated class reference for MetaDataExtensions."
---
# MetaDataExtensions

**Namespace:** TaleWorlds.CampaignSystem.Extensions
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class MetaDataExtensions`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Extensions/MetaDataExtensions.cs`

## Overview

`MetaDataExtensions` lives in `TaleWorlds.CampaignSystem.Extensions` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Extensions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetUniqueGameId
`public static string GetUniqueGameId(this MetaData metaData)`

**Purpose:** Reads and returns the `unique game id` value held by the current object.

```csharp
// Static call; no instance required
MetaDataExtensions.GetUniqueGameId(metaData);
```

### GetMainHeroLevel
`public static int GetMainHeroLevel(this MetaData metaData)`

**Purpose:** Reads and returns the `main hero level` value held by the current object.

```csharp
// Static call; no instance required
MetaDataExtensions.GetMainHeroLevel(metaData);
```

### GetMainPartyFood
`public static float GetMainPartyFood(this MetaData metaData)`

**Purpose:** Reads and returns the `main party food` value held by the current object.

```csharp
// Static call; no instance required
MetaDataExtensions.GetMainPartyFood(metaData);
```

### GetMainHeroGold
`public static int GetMainHeroGold(this MetaData metaData)`

**Purpose:** Reads and returns the `main hero gold` value held by the current object.

```csharp
// Static call; no instance required
MetaDataExtensions.GetMainHeroGold(metaData);
```

### GetClanInfluence
`public static float GetClanInfluence(this MetaData metaData)`

**Purpose:** Reads and returns the `clan influence` value held by the current object.

```csharp
// Static call; no instance required
MetaDataExtensions.GetClanInfluence(metaData);
```

### GetClanFiefs
`public static int GetClanFiefs(this MetaData metaData)`

**Purpose:** Reads and returns the `clan fiefs` value held by the current object.

```csharp
// Static call; no instance required
MetaDataExtensions.GetClanFiefs(metaData);
```

### GetMainPartyHealthyMemberCount
`public static int GetMainPartyHealthyMemberCount(this MetaData metaData)`

**Purpose:** Reads and returns the `main party healthy member count` value held by the current object.

```csharp
// Static call; no instance required
MetaDataExtensions.GetMainPartyHealthyMemberCount(metaData);
```

### GetMainPartyPrisonerMemberCount
`public static int GetMainPartyPrisonerMemberCount(this MetaData metaData)`

**Purpose:** Reads and returns the `main party prisoner member count` value held by the current object.

```csharp
// Static call; no instance required
MetaDataExtensions.GetMainPartyPrisonerMemberCount(metaData);
```

### GetMainPartyWoundedMemberCount
`public static int GetMainPartyWoundedMemberCount(this MetaData metaData)`

**Purpose:** Reads and returns the `main party wounded member count` value held by the current object.

```csharp
// Static call; no instance required
MetaDataExtensions.GetMainPartyWoundedMemberCount(metaData);
```

### GetClanBannerCode
`public static string GetClanBannerCode(this MetaData metaData)`

**Purpose:** Reads and returns the `clan banner code` value held by the current object.

```csharp
// Static call; no instance required
MetaDataExtensions.GetClanBannerCode(metaData);
```

### GetCharacterName
`public static string GetCharacterName(this MetaData metaData)`

**Purpose:** Reads and returns the `character name` value held by the current object.

```csharp
// Static call; no instance required
MetaDataExtensions.GetCharacterName(metaData);
```

### GetCharacterVisualCode
`public static string GetCharacterVisualCode(this MetaData metaData)`

**Purpose:** Reads and returns the `character visual code` value held by the current object.

```csharp
// Static call; no instance required
MetaDataExtensions.GetCharacterVisualCode(metaData);
```

### GetDayLong
`public static double GetDayLong(this MetaData metaData)`

**Purpose:** Reads and returns the `day long` value held by the current object.

```csharp
// Static call; no instance required
MetaDataExtensions.GetDayLong(metaData);
```

### GetIronmanMode
`public static bool GetIronmanMode(this MetaData metaData)`

**Purpose:** Reads and returns the `ironman mode` value held by the current object.

```csharp
// Static call; no instance required
MetaDataExtensions.GetIronmanMode(metaData);
```

### GetPlayerHealthPercentage
`public static int GetPlayerHealthPercentage(this MetaData metaData)`

**Purpose:** Reads and returns the `player health percentage` value held by the current object.

```csharp
// Static call; no instance required
MetaDataExtensions.GetPlayerHealthPercentage(metaData);
```

## Usage Example

```csharp
MetaDataExtensions.GetUniqueGameId(metaData);
```

## See Also

- [Area Index](../)