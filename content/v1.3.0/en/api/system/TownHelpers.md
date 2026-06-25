---
title: "TownHelpers"
description: "Auto-generated class reference for TownHelpers."
---
# TownHelpers

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class TownHelpers`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Helpers/TownHelpers.cs`

## Overview

`TownHelpers` lives in `Helpers` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Helpers` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetTownFoodAndMarketStocks
`public static ValueTuple<int, int> GetTownFoodAndMarketStocks(Town town)`

**Purpose:** Reads and returns the `town food and market stocks` value held by the current object.

```csharp
// Static call; no instance required
TownHelpers.GetTownFoodAndMarketStocks(town);
```

### IsThereAnyoneToMeetInTown
`public static bool IsThereAnyoneToMeetInTown(Settlement settlement)`

**Purpose:** Determines whether the current object is in the `there anyone to meet in town` state or condition.

```csharp
// Static call; no instance required
TownHelpers.IsThereAnyoneToMeetInTown(settlement);
```

### GetHeroesToMeetInTown
`public static List<Hero> GetHeroesToMeetInTown(Settlement settlement)`

**Purpose:** Reads and returns the `heroes to meet in town` value held by the current object.

```csharp
// Static call; no instance required
TownHelpers.GetHeroesToMeetInTown(settlement);
```

### GetHeroesInSettlement
`public static MBList<Hero> GetHeroesInSettlement(Settlement settlement, Predicate<Hero> predicate = null)`

**Purpose:** Reads and returns the `heroes in settlement` value held by the current object.

```csharp
// Static call; no instance required
TownHelpers.GetHeroesInSettlement(settlement, null);
```

### RequestAMeetingPartyCondition
`public static bool RequestAMeetingPartyCondition(MobileParty party)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
TownHelpers.RequestAMeetingPartyCondition(party);
```

### RequestAMeetingHeroWithoutPartyCondition
`public static bool RequestAMeetingHeroWithoutPartyCondition(Hero hero)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
TownHelpers.RequestAMeetingHeroWithoutPartyCondition(hero);
```

### CalculatePriceDeviationRatio
`public static float CalculatePriceDeviationRatio(Town town, EquipmentElement equipmentElement)`

**Purpose:** Calculates the current value or result of `price deviation ratio`.

```csharp
// Static call; no instance required
TownHelpers.CalculatePriceDeviationRatio(town, equipmentElement);
```

## Usage Example

```csharp
TownHelpers.GetTownFoodAndMarketStocks(town);
```

## See Also

- [Area Index](../)