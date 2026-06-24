<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PatrolPartyComponent`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PatrolPartyComponent

**Namespace:** TaleWorlds.CampaignSystem.Party.PartyComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PatrolPartyComponent : PartyComponent`
**Base:** `PartyComponent`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Party.PartyComponents/PatrolPartyComponent.cs`

## Overview

`PatrolPartyComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `PatrolPartyComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsNaval` | `public bool IsNaval { get; }` |

## Key Methods

### GetDefaultComponentBanner
`public override Banner GetDefaultComponentBanner()`

**Purpose:** Gets the current value of `default component banner`.

### CreatePatrolParty
`public static MobileParty CreatePatrolParty(string stringId, CampaignVec2 position, float spawnRadius, Settlement homeSettlement, PartyTemplateObject template)`

**Purpose:** Creates a new `patrol party` instance or object.

### SortRoster
`public void SortRoster()`

**Purpose:** Handles logic related to `sort roster`.

## Usage Example

```csharp
var component = agent.GetComponent<PatrolPartyComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)