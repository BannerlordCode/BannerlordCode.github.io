<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IncidentTrigger`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# IncidentTrigger

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public enum IncidentTrigger`
**Area:** campaign-ext

## Overview

`IncidentTrigger` lives in `TaleWorlds.CampaignSystem.CampaignBehaviors`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `LeavingVillage` |
| `1` |
| `LeavingTown` |
| `2` |
| `LeavingCastle` |
| `4` |
| `LeavingSettlement` |
| `8` |
| `LeavingEncounter` |
| `16` |
| `LeavingBattle` |
| `32` |
| `EnteringVillage` |
| `64` |
| `EnteringTown` |
| `128` |
| `EnteringCastle` |
| `256` |
| `WaitingInSettlement` |
| `512` |
| `DuringSiege` |

## Usage Example

```csharp
IncidentTrigger example = IncidentTrigger.LeavingVillage;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
