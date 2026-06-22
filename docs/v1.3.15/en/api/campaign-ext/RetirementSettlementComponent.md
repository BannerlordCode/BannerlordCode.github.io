<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RetirementSettlementComponent`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# RetirementSettlementComponent

**Namespace:** TaleWorlds.CampaignSystem.Settlements
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class RetirementSettlementComponent : SettlementComponent, ISpottable`
**Base:** `SettlementComponent`
**File:** `TaleWorlds.CampaignSystem/Settlements/RetirementSettlementComponent.cs`

## Overview

`RetirementSettlementComponent` is an AgentComponent — per-agent state/logic attached to an Agent. Access via `agent.GetComponent<RetirementSettlementComponent>()` (some have a typed agent property). Subclass AgentComponent to add your own.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsSpotted` | `public bool IsSpotted { get; set; }` |
| `MapFaction` | `public override IFaction MapFaction { get; }` |

## Key Methods

### Deserialize
```csharp
public override void Deserialize(MBObjectManager objectManager, XmlNode node)
```

## Usage Example

```csharp
// Typical usage of RetirementSettlementComponent (Component)
agent.GetComponent<RetirementSettlementComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)