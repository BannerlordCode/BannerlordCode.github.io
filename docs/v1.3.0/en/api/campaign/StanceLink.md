<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StanceLink`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# StanceLink

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class StanceLink`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/StanceLink.cs`

## Overview

`StanceLink` lives in `TaleWorlds.CampaignSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsNeutral` | `public bool IsNeutral { get; }` |
| `IsAtWar` | `public bool IsAtWar { get; set; }` |
| `Faction1` | `public IFaction Faction1 { get; }` |
| `Faction2` | `public IFaction Faction2 { get; }` |
| `WarStartDate` | `public CampaignTime WarStartDate { get; }` |
| `PeaceDeclarationDate` | `public CampaignTime PeaceDeclarationDate { get; }` |
| `TroopCasualties1` | `public int TroopCasualties1 { get; set; }` |
| `TroopCasualties2` | `public int TroopCasualties2 { get; set; }` |
| `ShipCasualties1` | `public int ShipCasualties1 { get; set; }` |
| `ShipCasualties2` | `public int ShipCasualties2 { get; set; }` |
| `SuccessfulSieges1` | `public int SuccessfulSieges1 { get; set; }` |
| `SuccessfulSieges2` | `public int SuccessfulSieges2 { get; set; }` |
| `SuccessfulRaids1` | `public int SuccessfulRaids1 { get; set; }` |
| `SuccessfulRaids2` | `public int SuccessfulRaids2 { get; set; }` |
| `TotalTributePaidBy1` | `public int TotalTributePaidBy1 { get; set; }` |
| `TotalTributePaidBy2` | `public int TotalTributePaidBy2 { get; set; }` |
| `SuccessfulTownSieges1` | `public int SuccessfulTownSieges1 { get; set; }` |
| `SuccessfulTownSieges2` | `public int SuccessfulTownSieges2 { get; set; }` |

## Key Methods

### GetCasualties
`public int GetCasualties(IFaction faction)`

**Purpose:** Gets the current value of `casualties`.

### GetSuccessfulSieges
`public int GetSuccessfulSieges(IFaction faction)`

**Purpose:** Gets the current value of `successful sieges`.

### GetSuccessfulRaids
`public int GetSuccessfulRaids(IFaction faction)`

**Purpose:** Gets the current value of `successful raids`.

### GetTotalTributePaid
`public int GetTotalTributePaid(IFaction faction)`

**Purpose:** Gets the current value of `total tribute paid`.

### GetSuccessfulTownSieges
`public int GetSuccessfulTownSieges(IFaction faction)`

**Purpose:** Gets the current value of `successful town sieges`.

### GetDailyTributePaid
`public int GetDailyTributePaid(IFaction faction)`

**Purpose:** Gets the current value of `daily tribute paid`.

### SetDailyTributePaid
`public void SetDailyTributePaid(IFaction payer, int dailyTribute)`

**Purpose:** Sets the value or state of `daily tribute paid`.

## Usage Example

```csharp
var value = new StanceLink();
value.GetCasualties(faction);
```

## See Also

- [Complete Class Catalog](../catalog)