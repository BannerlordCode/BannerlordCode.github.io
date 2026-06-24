<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IncidentType`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# IncidentType

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public enum IncidentType`
**Area:** campaign-ext

## Overview

`IncidentType` lives in `TaleWorlds.CampaignSystem.CampaignBehaviors`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `TroopSettlementRelation` |
| `FoodConsumption` |
| `PlightOfCivilians` |
| `PartyCampLife` |
| `AnimalIllness` |
| `Illness` |
| `HuntingForaging` |
| `PostBattle` |
| `HardTravel` |
| `Profit` |
| `DreamsSongsAndSigns` |
| `FiefManagement` |
| `Siege` |

## Usage Example

```csharp
IncidentType example = IncidentType.TroopSettlementRelation;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
