<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WarPartyComponent`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# WarPartyComponent

**Namespace:** TaleWorlds.CampaignSystem.Party.PartyComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class WarPartyComponent : PartyComponent`
**Base:** `PartyComponent`
**File:** `TaleWorlds.CampaignSystem/Party/PartyComponents/WarPartyComponent.cs`

## Overview

`WarPartyComponent` is an AgentComponent — per-agent state/logic attached to an Agent. Access via `agent.GetComponent<WarPartyComponent>()` (some have a typed agent property). Subclass AgentComponent to add your own.

## Key Properties

| Name | Signature |
|------|-----------|
| `Clan` | `public Clan Clan { get; }` |

## Key Methods

### GetDefaultComponentBanner
```csharp
public override Banner GetDefaultComponentBanner()
```

## Usage Example

```csharp
// Typical usage of WarPartyComponent (Component)
agent.GetComponent<WarPartyComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)