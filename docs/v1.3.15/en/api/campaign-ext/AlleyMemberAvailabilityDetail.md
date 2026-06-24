<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AlleyMemberAvailabilityDetail`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AlleyMemberAvailabilityDetail

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public enum AlleyMemberAvailabilityDetail`
**Area:** campaign-ext

## Overview

`AlleyMemberAvailabilityDetail` lives in `TaleWorlds.CampaignSystem.GameComponents`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.GameComponents` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `Available` |
| `AvailableWithDelay` |
| `NotEnoughRoguerySkill` |
| `NotEnoughMercyTrait` |
| `CanNotLeadParty` |
| `AlreadyAlleyLeader` |
| `Prisoner` |
| `SolvingIssue` |
| `Traveling` |
| `Busy` |
| `Fugutive` |
| `Governor` |

## Usage Example

```csharp
AlleyMemberAvailabilityDetail example = AlleyMemberAvailabilityDetail.Available;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
