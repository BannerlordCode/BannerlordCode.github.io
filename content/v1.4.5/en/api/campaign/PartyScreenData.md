---
title: "PartyScreenData"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartyScreenData`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PartyScreenData

**Namespace:** TaleWorlds.CampaignSystem.Party
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PartyScreenData : IEnumerable<(TroopRosterElement, bool)>, IEnumerable`
**Base:** `IEnumerable<(TroopRosterElement`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Party/PartyScreenData.cs`

## Overview

`PartyScreenData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `PartyScreenData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `RightParty` | `public PartyBase RightParty { get; }` |
| `LeftParty` | `public PartyBase LeftParty { get; }` |
| `RightPartyLeaderHero` | `public Hero RightPartyLeaderHero { get; }` |
| `LeftPartyLeaderHero` | `public Hero LeftPartyLeaderHero { get; }` |

## Key Methods

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

### InitializeCopyFrom
`public void InitializeCopyFrom(PartyBase rightParty, PartyBase leftParty)`

**Purpose:** Initializes the state, resources, or bindings for `copy from`.

### CopyFromPartyAndRoster
`public void CopyFromPartyAndRoster(TroopRoster rightPartyMemberRoster, TroopRoster rightPartyPrisonerRoster, TroopRoster leftPartyMemberRoster, TroopRoster leftPartyPrisonerRoster, PartyBase rightParty)`

**Purpose:** Handles logic related to `copy from party and roster`.

### CopyFromScreenData
`public void CopyFromScreenData(PartyScreenData data)`

**Purpose:** Handles logic related to `copy from screen data`.

### BindRostersFrom
`public void BindRostersFrom(TroopRoster rightPartyMemberRoster, TroopRoster rightPartyPrisonerRoster, TroopRoster leftPartyMemberRoster, TroopRoster leftPartyPrisonerRoster, PartyBase rightParty, PartyBase leftParty)`

**Purpose:** Handles logic related to `bind rosters from`.

### ResetUsing
`public void ResetUsing(PartyScreenData partyScreenData)`

**Purpose:** Resets `using` to its initial state.

### IsThereAnyTroopTradeDifferenceBetween
`public bool IsThereAnyTroopTradeDifferenceBetween(PartyScreenData other)`

**Purpose:** Handles logic related to `is there any troop trade difference between`.

### GetTroopTradeDifferencesFromTo
`public List<TroopTradeDifference> GetTroopTradeDifferencesFromTo(PartyScreenData toPartyScreenData, PartyScreenLogic.PartyRosterSide side = PartyScreenLogic.PartyRosterSide.None)`

**Purpose:** Gets the current value of `troop trade differences from to`.

### Equals
`public override bool Equals(object obj)`

**Purpose:** Handles logic related to `equals`.

## Usage Example

```csharp
PartyScreenData example = PartyScreenData.RightParty;
```

## See Also

- [Complete Class Catalog](../catalog)