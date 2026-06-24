<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TeleportationDetail`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TeleportationDetail

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** `public enum TeleportationDetail`
**Area:** campaign-ext

## Overview

`TeleportationDetail` lives in `TaleWorlds.CampaignSystem.Actions`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Actions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `ImmediateTeleportToSettlement` |
| `ImmediateTeleportToParty` |
| `ImmediateTeleportToPartyAsPartyLeader` |
| `DelayedTeleportToSettlement` |
| `DelayedTeleportToParty` |
| `DelayedTeleportToSettlementAsGovernor` |

## Usage Example

```csharp
TeleportationDetail example = TeleportationDetail.ImmediateTeleportToSettlement;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
