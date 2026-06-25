---
title: "Trade"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Trade`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Trade

**Namespace:** TaleWorlds.CampaignSystem.CharacterDevelopment
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class Trade`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/CharacterDevelopment/DefaultPerks.cs`

## Overview

`Trade` lives in `TaleWorlds.CampaignSystem.CharacterDevelopment` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CharacterDevelopment` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Appraiser` | `public static PerkObject Appraiser { get; }` |
| `WholeSeller` | `public static PerkObject WholeSeller { get; }` |
| `CaravanMaster` | `public static PerkObject CaravanMaster { get; }` |
| `MarketDealer` | `public static PerkObject MarketDealer { get; }` |
| `TravelingRumors` | `public static PerkObject TravelingRumors { get; }` |
| `LocalConnection` | `public static PerkObject LocalConnection { get; }` |
| `DistributedGoods` | `public static PerkObject DistributedGoods { get; }` |
| `Tollgates` | `public static PerkObject Tollgates { get; }` |
| `ArtisanCommunity` | `public static PerkObject ArtisanCommunity { get; }` |
| `GreatInvestor` | `public static PerkObject GreatInvestor { get; }` |
| `MercenaryConnections` | `public static PerkObject MercenaryConnections { get; }` |
| `ContentTrades` | `public static PerkObject ContentTrades { get; }` |
| `InsurancePlans` | `public static PerkObject InsurancePlans { get; }` |
| `RapidDevelopment` | `public static PerkObject RapidDevelopment { get; }` |
| `GranaryAccountant` | `public static PerkObject GranaryAccountant { get; }` |
| `TradeyardForeman` | `public static PerkObject TradeyardForeman { get; }` |
| `SwordForBarter` | `public static PerkObject SwordForBarter { get; }` |
| `SelfMadeMan` | `public static PerkObject SelfMadeMan { get; }` |
| `SilverTongue` | `public static PerkObject SilverTongue { get; }` |
| `SpringOfGold` | `public static PerkObject SpringOfGold { get; }` |
| `ManOfMeans` | `public static PerkObject ManOfMeans { get; }` |
| `TrickleDown` | `public static PerkObject TrickleDown { get; }` |
| `EverythingHasAPrice` | `public static PerkObject EverythingHasAPrice { get; }` |

## Usage Example

```csharp
var example = new Trade();
```

## See Also

- [Complete Class Catalog](../catalog)