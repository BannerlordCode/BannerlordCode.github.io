---
title: "SiegeAftermath"
description: "The SiegeAftermathAction.SiegeAftermath enum for siege resolution, connecting the player's choice to contribution data, settlement economy, and event logs."
---
# SiegeAftermath

**Namespace:** `TaleWorlds.CampaignSystem.Actions`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public enum SiegeAftermathAction.SiegeAftermath` (nested enum)  
**Base:** `System.Enum`  
**Source:** `TaleWorlds.CampaignSystem/Actions/SiegeAftermathAction.cs`

## One-line responsibility

Mark the `Devastate`, `Pillage`, or `ShowMercy` choice after a siege and carry it with party contributions to the behavior that applies the aftermath.

## Mental Model

This enum is not settlement prosperity and does not perform pillage by itself. `SiegeAftermathAction.ApplyAftermath` receives the attacker, settlement, previous owner, and `Dictionary<MobileParty, float>` contribution map, then passes `SiegeAftermathAction.SiegeAftermath` to `CampaignEventDispatcher.OnSiegeAftermathApplied`. `SiegeAftermathCampaignBehavior` directly applies prosperity, building, loyalty, and gold effects and uses `SiegeAftermathModel` for trait XP; `DefaultLogsCampaignBehavior` records the result.

Call `ApplyAftermath` at the siege-resolution boundary while the contribution map still belongs to the current `MapEvent`. Do not treat the enum as a setter that can devastate a settlement independently of the campaign behavior.

## Enum Values and Timing

| Value | Typical entry | Downstream meaning |
|---|---|---|
| `Devastate` | `SiegeAftermathAction.ApplyAftermath` | Select the harshest post-siege branch, normally carrying destruction or economic penalties. |
| `Pillage` | `SiegeAftermathAction.ApplyAftermath` | Select the pillage branch whose loot and economic effects are handled downstream. |
| `ShowMercy` | `SiegeAftermathAction.ApplyAftermath` | Select the less destructive aftermath branch. |

The enum contains no cost, prosperity delta, or reward amount; those are calculated by the active campaign behavior and models.

## Dependencies

- **Upstream:** [`SiegeAftermathAction`](../SiegeAftermathAction), [`SiegeEvent`](../SiegeEvent/), [`MobileParty`](../../campaign/MobileParty), and [`Settlement`](../../campaign/Settlement).
- **Contribution data:** `Dictionary<MobileParty, float>` must come from the current siege battle; do not reuse another map event's contribution map.
- **Event:** [`CampaignEvents`](../CampaignEvents) exposes `OnSiegeAftermathAppliedEvent` as `IMbEvent<MobileParty, Settlement, SiegeAftermathAction.SiegeAftermath, Clan, Dictionary<MobileParty, float>>`.
- **Downstream:** `SiegeAftermathCampaignBehavior` and `DefaultLogsCampaignBehavior` listen to the event. The former directly applies settlement and gold effects; it calls `SiegeAftermathModel` for trait XP, so the model is not an independent event consumer.
- **Save boundary:** Resulting settlement and log state may be saved; the event and transient contribution map are not replayed after load.

## Risks and Lifetime

- Publishing `OnSiegeAftermathAppliedEvent` without the Action breaks the normal ordering of siege state; calling the Action alone does not implement custom economic consequences for a mod.
- The attacker, settlement, previous owner, and contribution map must describe the same siege. Mismatched objects can credit rewards, logs, or damage to the wrong settlement.
- The event synchronously reaches several behaviors. Calling the same aftermath Action from a listener can duplicate prosperity changes, logs, or rewards.
- The menu and siege data live near the `MapEvent` end boundary. Do not keep old event or party references and replay the choice later.

## Real Usage Example

The built-in `DefaultLogsCampaignBehavior` registers the same event signature:

```csharp
using System.Collections.Generic;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Settlements;

public sealed class SiegeAftermathBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.OnSiegeAftermathAppliedEvent.AddNonSerializedListener(this, OnSiegeAftermathApplied);
    }

    private void OnSiegeAftermathApplied(
        MobileParty attackerParty,
        Settlement settlement,
        SiegeAftermathAction.SiegeAftermath aftermath,
        Clan previousSettlementOwner,
        Dictionary<MobileParty, float> partyContributions)
    {
        if (settlement != null && partyContributions != null)
        {
            RecordAftermath(settlement, aftermath, partyContributions);
        }
    }

    private void RecordAftermath(Settlement settlement, SiegeAftermathAction.SiegeAftermath aftermath, Dictionary<MobileParty, float> partyContributions)
    {
        // Update mod-owned log or analysis state from this siege's inputs.
    }

    public override void SyncData(IDataStore dataStore)
    {
        // This example does not save the transient contribution map.
    }
}
```

A mod with a valid siege-resolution entry should call `SiegeAftermathAction.ApplyAftermath(attackerParty, settlement, aftermath, previousSettlementOwner, partyContributions)`, not write an aftermath value into `Settlement`.

## Version Note

v1.3.15 and v1.4.5 use the nested type `SiegeAftermathAction.SiegeAftermath` with `Devastate`, `Pillage`, and `ShowMercy`. The v1.4.5 siege behavior is the authority for the downstream notes here.

## Navigation

- ↑ Parent: [Campaign-Ext API](../)
- ↓ Owner Action: [SiegeAftermathAction](../SiegeAftermathAction)
- ↔ Siblings: [ChangeOwnerOfSettlementDetail](../ChangeOwnerOfSettlementDetail)
- Events: [CampaignEvents](../CampaignEvents) · [CampaignEventReceiver](../CampaignEventReceiver)
- Related: [SiegeEvent](../SiegeEvent/) · [Settlement](../../campaign/Settlement) · [MobileParty](../../campaign/MobileParty)
