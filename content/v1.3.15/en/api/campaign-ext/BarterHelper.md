---
title: "BarterHelper"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BarterHelper`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**Purpose:** Gets the current value of `auto balance barterables add`.

### GetAutoBalanceBarterablesToRemove
`public static IEnumerable<ValueTuple<Barterable, int>> GetAutoBalanceBarterablesToRemove(BarterData barterData, IFaction factionToBalanceFor, IFaction offerer, Hero offererHero)`

**Purpose:** Gets the current value of `auto balance barterables to remove`.

## Usage Example

```csharp
BarterHelper.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)