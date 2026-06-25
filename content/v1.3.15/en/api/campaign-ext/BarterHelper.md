---
title: "BarterHelper"
description: "Auto-generated class reference for BarterHelper."
---
# BarterHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class BarterHelper`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Helpers/BarterHelper.cs`

## Overview

`BarterHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `BarterHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetAutoBalanceBarterablesAdd
`public static IEnumerable<ValueTuple<Barterable, int>> GetAutoBalanceBarterablesAdd(BarterData barterData, IFaction factionToBalanceFor, IFaction offerer, Hero offererHero, float fulfillRatio = 1f)`

**Purpose:** Reads and returns the `auto balance barterables add` value held by the current object.

```csharp
// Static call; no instance required
BarterHelper.GetAutoBalanceBarterablesAdd(barterData, factionToBalanceFor, offerer, offererHero, 0);
```

### GetAutoBalanceBarterablesToRemove
`public static IEnumerable<ValueTuple<Barterable, int>> GetAutoBalanceBarterablesToRemove(BarterData barterData, IFaction factionToBalanceFor, IFaction offerer, Hero offererHero)`

**Purpose:** Reads and returns the `auto balance barterables to remove` value held by the current object.

```csharp
// Static call; no instance required
BarterHelper.GetAutoBalanceBarterablesToRemove(barterData, factionToBalanceFor, offerer, offererHero);
```

## Usage Example

```csharp
BarterHelper.Initialize();
```

## See Also

- [Area Index](../)