---
title: "PartyScreenData"
description: "Auto-generated class reference for PartyScreenData."
---
# PartyScreenData

**Namespace:** TaleWorlds.CampaignSystem.Party
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PartyScreenData : IEnumerable<(TroopRosterElement, bool)>, IEnumerable`
**Base:** `IEnumerable<(TroopRosterElement`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Party/PartyScreenData.cs`

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

**Purpose:** **Purpose:** Returns a hash code for the this instance, used for fast lookup in dictionaries and hash sets.

```csharp
// Obtain an instance of PartyScreenData from the subsystem API first
PartyScreenData partyScreenData = ...;
var result = partyScreenData.GetHashCode();
```

### InitializeCopyFrom
`public void InitializeCopyFrom(PartyBase rightParty, PartyBase leftParty)`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings required by copy from.

```csharp
// Obtain an instance of PartyScreenData from the subsystem API first
PartyScreenData partyScreenData = ...;
partyScreenData.InitializeCopyFrom(rightParty, leftParty);
```

### CopyFromPartyAndRoster
`public void CopyFromPartyAndRoster(TroopRoster rightPartyMemberRoster, TroopRoster rightPartyPrisonerRoster, TroopRoster leftPartyMemberRoster, TroopRoster leftPartyPrisonerRoster, PartyBase rightParty)`

**Purpose:** **Purpose:** Copies the from party and roster state of the this instance to a target.

```csharp
// Obtain an instance of PartyScreenData from the subsystem API first
PartyScreenData partyScreenData = ...;
partyScreenData.CopyFromPartyAndRoster(rightPartyMemberRoster, rightPartyPrisonerRoster, leftPartyMemberRoster, leftPartyPrisonerRoster, rightParty);
```

### CopyFromScreenData
`public void CopyFromScreenData(PartyScreenData data)`

**Purpose:** **Purpose:** Copies the from screen data state of the this instance to a target.

```csharp
// Obtain an instance of PartyScreenData from the subsystem API first
PartyScreenData partyScreenData = ...;
partyScreenData.CopyFromScreenData(data);
```

### BindRostersFrom
`public void BindRostersFrom(TroopRoster rightPartyMemberRoster, TroopRoster rightPartyPrisonerRoster, TroopRoster leftPartyMemberRoster, TroopRoster leftPartyPrisonerRoster, PartyBase rightParty, PartyBase leftParty)`

**Purpose:** **Purpose:** Executes the BindRostersFrom logic.

```csharp
// Obtain an instance of PartyScreenData from the subsystem API first
PartyScreenData partyScreenData = ...;
partyScreenData.BindRostersFrom(rightPartyMemberRoster, rightPartyPrisonerRoster, leftPartyMemberRoster, leftPartyPrisonerRoster, rightParty, leftParty);
```

### ResetUsing
`public void ResetUsing(PartyScreenData partyScreenData)`

**Purpose:** **Purpose:** Returns using to its default or initial condition.

```csharp
// Obtain an instance of PartyScreenData from the subsystem API first
PartyScreenData partyScreenData = ...;
partyScreenData.ResetUsing(partyScreenData);
```

### IsThereAnyTroopTradeDifferenceBetween
`public bool IsThereAnyTroopTradeDifferenceBetween(PartyScreenData other)`

**Purpose:** **Purpose:** Determines whether the this instance is in the there any troop trade difference between state or condition.

```csharp
// Obtain an instance of PartyScreenData from the subsystem API first
PartyScreenData partyScreenData = ...;
var result = partyScreenData.IsThereAnyTroopTradeDifferenceBetween(other);
```

### GetTroopTradeDifferencesFromTo
`public List<TroopTradeDifference> GetTroopTradeDifferencesFromTo(PartyScreenData toPartyScreenData, PartyScreenLogic.PartyRosterSide side = PartyScreenLogic.PartyRosterSide.None)`

**Purpose:** **Purpose:** Reads and returns the troop trade differences from to value held by the this instance.

```csharp
// Obtain an instance of PartyScreenData from the subsystem API first
PartyScreenData partyScreenData = ...;
var result = partyScreenData.GetTroopTradeDifferencesFromTo(toPartyScreenData, partyScreenLogic.PartyRosterSide.None);
```

### Equals
`public override bool Equals(object obj)`

**Purpose:** **Purpose:** Compares the this instance with the supplied instance for equality.

```csharp
// Obtain an instance of PartyScreenData from the subsystem API first
PartyScreenData partyScreenData = ...;
var result = partyScreenData.Equals(obj);
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
PartyScreenData entry = ...;
```

## See Also

- [Area Index](../)