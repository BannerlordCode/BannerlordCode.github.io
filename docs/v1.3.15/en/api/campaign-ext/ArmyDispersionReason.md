<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ArmyDispersionReason`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ArmyDispersionReason

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public enum ArmyDispersionReason`
**Area:** campaign-ext

## Overview

`ArmyDispersionReason` lives in `TaleWorlds.CampaignSystem`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `Unknown` |
| `DismissalRequestedWithInfluence` |
| `NotEnoughParty` |
| `KingdomChanged` |
| `CohesionDepleted` |
| `ObjectiveFinished` |
| `LeaderPartyRemoved` |
| `PlayerTakenPrisoner` |
| `CannotElectNewLeader` |
| `LeaderCannotArrivePointOnTime` |
| `ArmyLeaderIsDead` |
| `FoodProblem` |
| `NotEnoughTroop` |
| `NoActiveWar` |
| `NoShipToUse` |

## Usage Example

```csharp
ArmyDispersionReason example = ArmyDispersionReason.Unknown;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
