<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PatrolPartyComponent`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PatrolPartyComponent

**Namespace:** TaleWorlds.CampaignSystem.Party.PartyComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PatrolPartyComponent : PartyComponent`
**Base:** `PartyComponent`
**File:** `TaleWorlds.CampaignSystem/Party/PartyComponents/PatrolPartyComponent.cs`

## Overview

`PatrolPartyComponent` is an AgentComponent — per-agent state/logic attached to an Agent. Access via `agent.GetComponent<PatrolPartyComponent>()` (some have a typed agent property). Subclass AgentComponent to add your own.

## Key Properties

| Name | Signature |
|------|-----------|
| `PartyOwner` | `public override Hero PartyOwner { get; }` |
| `Name` | `public override TextObject Name { get; }` |
| `HomeSettlement` | `public override Settlement HomeSettlement { get; }` |
| `Clan` | `public Clan Clan { get; }` |
| `IsNaval` | `public bool IsNaval { get; }` |

## Key Methods

### GetDefaultComponentBanner
```csharp
public override Banner GetDefaultComponentBanner()
```

### CreatePatrolParty
```csharp
public static MobileParty CreatePatrolParty(string stringId, CampaignVec2 position, float spawnRadius, Settlement homeSettlement, PartyTemplateObject template)
```

### SortRoster
```csharp
public void SortRoster()
```

## Usage Example

```csharp
// Typical usage of PatrolPartyComponent (Component)
agent.GetComponent<PatrolPartyComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)