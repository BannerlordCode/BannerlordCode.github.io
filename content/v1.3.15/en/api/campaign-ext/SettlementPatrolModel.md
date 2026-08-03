---
title: "SettlementPatrolModel"
description: "The model contract for patrol eligibility, spawn timing, and settlement patrol-party templates."
---
# SettlementPatrolModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class SettlementPatrolModel : MBGameModel<SettlementPatrolModel>`  
**Base:** `MBGameModel<SettlementPatrolModel>`  
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementPatrolModel.cs`

## One-line job

`SettlementPatrolModel` supplies patrol spawn delay, settlement eligibility, and the party template used by patrol behavior. It does not create a `MobileParty` or destroy an existing patrol.

## Mental Model

`PatrolPartiesCampaignBehavior` owns the lifecycle. During campaign ticks it asks the Model for eligibility, keeps a generation queue, obtains a template, and only then calls `PatrolPartyComponent.CreatePatrolParty`. Thus `CanSettlementHavePatrolParties` is the gate, `GetPatrolPartySpawnDuration` is the queue delay, and `GetPartyTemplateForPatrolParty` is the spawn configuration. Calling the template method a factory bypasses queue and cleanup behavior.

## Dependencies and consumers

| Type or flow | Relationship |
| --- | --- |
| [`GameModels`](../GameModels) / [`Campaign`](../../campaign/Campaign) | Provides the active registered patrol policy. |
| [`Settlement`](../../campaign/Settlement) / [`Town`](../../campaign/Town) | Supply owner, town kind, buildings, and gate/port context. |
| Settlement Guard House / `BuildingEffectModel` | Supply eligibility, interval, and patrol strength. |
| `PatrolPartiesCampaignBehavior` | Maintains the queue, creates patrol parties, and removes invalid parties with `DestroyPartyAction`. |

## Public contract

| Member | Actual responsibility and timing |
| --- | --- |
| `GetPatrolPartySpawnDuration(Settlement, bool)` | Returns the `CampaignTime` delay before the next patrol spawn. |
| `CanSettlementHavePatrolParties(Settlement, bool)` | Checks whether the settlement currently qualifies. |
| `GetPartyTemplateForPatrolParty(Settlement, bool)` | Returns the `PartyTemplateObject` for a patrol; may be null when ineligible. |

## Real access path

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
    bool eligible = model.CanSettlementHavePatrolParties(settlement, naval: false);
    if (eligible)
    {
        CampaignTime delay = model.GetPatrolPartySpawnDuration(settlement, naval: false);
        PartyTemplateObject template = model
            .GetPartyTemplateForPatrolParty(settlement, naval: false);
    }
}
```

This is a state preview. Let `PatrolPartiesCampaignBehavior` perform actual spawning; do not create parties from UI or a daily callback.

## Risks and version boundary

- The default requires a non-rebel town with an owner and an upgraded Guard House; an ineligible settlement can return a null template.
- `naval` is part of the public contract. The 1.4.5 land implementation mainly uses the Guard House path, but a replacement must define its naval behavior explicitly.
- The queue, spawn position, cleanup, and save state belong to the Behavior. Creating a party in the Model causes duplicate or orphaned parties.
- Removing eligibility can cause the Behavior to call `DestroyPartyAction`; validate cleanup of existing patrols when replacing the policy.

## Navigation

- [Parent: Campaign-Ext](..)
- [Sibling: Models family](../models/)
- [Default: DefaultSettlementPatrolModel](../DefaultSettlementPatrolModel)
- [Related: SettlementGarrisonModel](../SettlementGarrisonModel) · [CampaignTime](../CampaignTime)
- [Downstream: Settlement](../../campaign/Settlement) · [MobileParty](../../campaign/MobileParty)

