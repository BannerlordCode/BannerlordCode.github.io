<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `VillageStates`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# VillageStates

**Namespace:** TaleWorlds.CampaignSystem.Settlements
**Module:** TaleWorlds.CampaignSystem
**Type:** `public enum VillageStates`
**Area:** campaign-ext

## Overview

`VillageStates` lives in `TaleWorlds.CampaignSystem.Settlements`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Settlements` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `Normal` |
| `BeingRaided` |
| `ForcedForVolunteers` |
| `ForcedForSupplies` |

## Usage Example

```csharp
VillageStates example = VillageStates.Normal;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
