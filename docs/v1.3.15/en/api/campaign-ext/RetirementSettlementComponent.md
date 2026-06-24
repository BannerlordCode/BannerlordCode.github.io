<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RetirementSettlementComponent`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# RetirementSettlementComponent

**Namespace:** TaleWorlds.CampaignSystem.Settlements
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class RetirementSettlementComponent : SettlementComponent, ISpottable`
**Base:** `SettlementComponent`
**File:** `TaleWorlds.CampaignSystem/Settlements/RetirementSettlementComponent.cs`

## Overview

`RetirementSettlementComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `RetirementSettlementComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsSpotted` | `public bool IsSpotted { get; set; }` |
| `MapFaction` | `public override IFaction MapFaction { get; }` |

## Key Methods

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**Purpose:** Handles logic related to `deserialize`.

## Usage Example

```csharp
var component = agent.GetComponent<RetirementSettlementComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)