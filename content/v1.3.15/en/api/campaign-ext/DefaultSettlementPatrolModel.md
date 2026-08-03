---
title: "DefaultSettlementPatrolModel"
description: "Bannerlord's default Guard House patrol eligibility, spawn interval, and culture-template selection."
---
# DefaultSettlementPatrolModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class DefaultSettlementPatrolModel : SettlementPatrolModel`  
**Base:** [`SettlementPatrolModel`](../SettlementPatrolModel)  
**Source:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementPatrolModel.cs` (1.4.5 authority)

## One-line job

`DefaultSettlementPatrolModel` uses settlement ownership, rebel state, Guard House level, and patrol-strength building effects to determine patrol eligibility, delay, and culture template.

## Mental Model

The default implementation is query-only: it searches `Town.Buildings` for a levelled `SettlementGuardHouse`. An eligible non-rebel town waits less time as the Guard House level rises, and `PatrolPartyStrength` maps to the owning culture's weak, moderate, or strong patrol template. `PatrolPartiesCampaignBehavior` still queues and creates the party.

The 1.4.5 default does not implement a separate naval-template branch, but callers must still pass the contract's `naval` argument. A custom naval policy should make that difference explicit.

## Dependencies and consumers

| Type or flow | Relationship |
| --- | --- |
| [`SettlementPatrolModel`](../SettlementPatrolModel) / [`GameModels`](../GameModels) | Contract and registered access path. |
| [`Settlement`](../../campaign/Settlement) / [`Town`](../../campaign/Town) | Supply owner, settlement kind, and building list. |
| Settlement Guard House / `BuildingEffectEnum.PatrolPartyStrength` | Supply eligibility, level, and patrol strength. |
| `CultureObject` / `PatrolPartiesCampaignBehavior` | Select the culture template and apply it to an actual patrol party. |

## Default rules

| Member | 1.4.5 behavior |
| --- | --- |
| `CanSettlementHavePatrolParties` | Requires a non-null owner, a non-rebel owner, and `settlement.IsTown`, then checks for a Guard House. |
| Guard House lookup | Requires `DefaultBuildingTypes.SettlementGuardHouse` with `CurrentLevel > 0`. |
| `GetPatrolPartySpawnDuration` | Returns `CampaignTime.Days(10 - (level - 1) * 2)`; higher levels shorten the interval. |
| `GetPartyTemplateForPatrolParty` | Strength `1/2/3` selects the owning culture's weak/moderate/strong template; other values fall back to weak; no Guard House returns null. |

## Real access and replacement

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Settlements;

Settlement settlement = Settlement.All
    .FirstOrDefault(candidate => candidate.IsTown && candidate.Town != null);
if (settlement != null)
{
    SettlementPatrolModel model = Campaign.Current.Models.SettlementPatrolModel;
    if (model.CanSettlementHavePatrolParties(settlement, naval: false))
    {
        CampaignTime spawnAfter = model
            .GetPatrolPartySpawnDuration(settlement, naval: false);
        PartyTemplateObject template = model
            .GetPartyTemplateForPatrolParty(settlement, naval: false);
    }
}
```

Register a replacement in `InitializeGameStarter` and keep eligibility, delay, and template behavior coherent. Do not call `CreatePatrolParty` from a Model query.

## Risks and version boundary

- `GetPartyTemplateForPatrolParty` returns null without a Guard House; bypassing the eligibility check can cause a later spawn null reference.
- `PatrolPartyStrength` comes from the building system. Unknown values fall back to the weak template; they do not identify arbitrary culture templates.
- Changing the interval changes map party count, simulation load, and save growth. Do not use a random delay in a frequently queried Model method.
- `PatrolPartiesCampaignBehavior` owns queue and cleanup; the Model changes policy, not the `DestroyPartyAction` lifecycle.

## Navigation

- [Parent: Campaign-Ext](..)
- [Sibling: Models family](../models/)
- [Contract: SettlementPatrolModel](../SettlementPatrolModel)
- [Related: SettlementGarrisonModel](../SettlementGarrisonModel) · [CampaignTime](../CampaignTime)
- [Downstream: Settlement](../../campaign/Settlement) · [MobileParty](../../campaign/MobileParty)

