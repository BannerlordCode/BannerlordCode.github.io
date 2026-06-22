<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartyScreenData`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyScreenData

**Namespace:** TaleWorlds.CampaignSystem.Party
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PartyScreenData : IEnumerable<ValueTuple<TroopRosterElement, bool>>, IEnumerable`
**Base:** `IEnumerable<ValueTuple<TroopRosterElement`
**File:** `TaleWorlds.CampaignSystem/Party/PartyScreenData.cs`

## Overview

`PartyScreenData` is a data struct/DTO holding structured fields. Construct it to pass or serialize data.

## Key Properties

| Name | Signature |
|------|-----------|
| `RightParty` | `public PartyBase RightParty { get; }` |
| `LeftParty` | `public PartyBase LeftParty { get; }` |
| `RightPartyLeaderHero` | `public Hero RightPartyLeaderHero { get; }` |
| `LeftPartyLeaderHero` | `public Hero LeftPartyLeaderHero { get; }` |

## Key Methods

### GetHashCode
```csharp
public override int GetHashCode()
```

### InitializeCopyFrom
```csharp
public void InitializeCopyFrom(PartyBase rightParty, PartyBase leftParty)
```

### CopyFromPartyAndRoster
```csharp
public void CopyFromPartyAndRoster(TroopRoster rightPartyMemberRoster, TroopRoster rightPartyPrisonerRoster, TroopRoster leftPartyMemberRoster, TroopRoster leftPartyPrisonerRoster, PartyBase rightParty)
```

### CopyFromScreenData
```csharp
public void CopyFromScreenData(PartyScreenData data)
```

### BindRostersFrom
```csharp
public void BindRostersFrom(TroopRoster rightPartyMemberRoster, TroopRoster rightPartyPrisonerRoster, TroopRoster leftPartyMemberRoster, TroopRoster leftPartyPrisonerRoster, PartyBase rightParty, PartyBase leftParty)
```

### ResetUsing
```csharp
public void ResetUsing(PartyScreenData partyScreenData)
```

### IsThereAnyTroopTradeDifferenceBetween
```csharp
public bool IsThereAnyTroopTradeDifferenceBetween(PartyScreenData other)
```

### GetTroopTradeDifferencesFromTo
```csharp
public List<TroopTradeDifference> GetTroopTradeDifferencesFromTo(PartyScreenData toPartyScreenData, PartyScreenLogic.PartyRosterSide side = PartyScreenLogic.PartyRosterSide.None)
```

### GetEnumerator
```csharp
public IEnumerator<ValueTuple<TroopRosterElement, bool>> GetEnumerator()
```

### Equals
```csharp
public override bool Equals(object obj)
```

## Usage Example

```csharp
// Typical usage of PartyScreenData (Data)
new PartyScreenData { /* fill fields */ };;
```

## See Also

- [Complete Class Catalog](../catalog)