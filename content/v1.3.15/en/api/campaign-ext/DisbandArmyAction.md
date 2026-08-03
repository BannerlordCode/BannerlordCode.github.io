---
title: "DisbandArmyAction"
description: "Ends a temporary campaign army with a reason tag, applying player dismissal costs where appropriate and clearing every party's army membership."
---
# DisbandArmyAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public static class DisbandArmyAction`
**Source:** `TaleWorlds.CampaignSystem/Actions/DisbandArmyAction.cs`

## One-line job

End a temporary `Army` through its official dispersion path, preserving why it ended and applying the influence/relation cost only for a player-requested post-battle dismissal.

## Mental model

An army is a temporary strategic wrapper around independent `MobileParty` instances. Disbanding does **not** destroy the parties or their troop rosters; it dissolves their membership, attachments, shared objective and army ticking. The reason enum is part of campaign meaning: UI, events, AI behavior, and diagnostics can distinguish starvation from depleted cohesion or a player dismissal.

Use an `ApplyBy*` method when the army itself is ending. Do not set `party.Army = null`, clear `army.Parties`, or null `army.Kingdom` yourself. Do not use it to finish a battle, transfer troops, or remove a party from the map; those are `MapEvent`, roster, and party-lifecycle concerns.

## Dependencies and official path

```text
DisbandArmyAction.ApplyByReason(army)
  -> optional player influence and relation changes
  -> OnArmyDispersed(army, reason, hasMainParty)
  -> every member MobileParty.Army = null
  -> attached, active land parties are placed near leader and held
  -> army party list and Kingdom reference are cleared
  -> army periodic tick events are deleted
```

`Army.DisperseInternal` first prevents re-entrant dispersion, then dispatches `OnArmyDispersed` before it clears membership. Event handlers may inspect the current army at that moment, but must not retain it as an active object after the callback returns.

| Dependency | Why it matters |
|---|---|
| [`Army`](../Army) | Owns `Parties`, `LeaderParty`, cohesion, objective, and the actual `DisperseInternal` cleanup. |
| [`MobileParty`](../../campaign/MobileParty) | Each member survives but loses its `Army` reference; attached parties may be repositioned and switched to hold. |
| [`Kingdom`](../../campaign/Kingdom) / [`Clan`](../../campaign/Clan) | Army is a kingdom strategy object; the player-dismissal variant charges `Clan.PlayerClan`. |
| [`ChangeClanInfluenceAction`](../ChangeClanInfluenceAction) / [`ChangeRelationAction`](../ChangeRelationAction) | Used only by the player dismissal reason, with values from `Campaign.Current.Models.DiplomacyModel`. |
| Campaign events and save | `OnArmyDispersed` lets Behaviors clear cached army plans. A saved reference to a dispersed army is stale because its party list and kingdom are cleared. |

## Choose the reason that actually happened

| Entry point | Use for |
|---|---|
| `ApplyByReleasedByPlayerAfterBattle` | Player explicitly releases an army after battle. This is the only variant that deducts `DiplomacyModel.GetInfluenceCostOfDisbandingArmy()` and changes player relation with eligible member leaders. |
| `ApplyByArmyLeaderIsDead` / `ApplyByLeaderPartyRemoved` | Leader hero is dead, or the leader party left/was removed. |
| `ApplyByNotEnoughParty` | The army no longer has enough parties to exist. |
| `ApplyByObjectiveFinished` | A siege, raid, defense, or scripted goal has concluded. |
| `ApplyByPlayerTakenPrisoner` | The main player party/leader is captured; 1.4.5 `PlayerCaptivity` calls this for a player-led army. |
| `ApplyByFoodProblem` / `ApplyByCohesionDepleted` | Starvation threshold or cohesion threshold triggered. `Army` calls these from its regular campaign checks. |
| `ApplyByNoActiveWar` | There is no meaningful active war left for the army's faction. |
| `ApplyByInactivity` | The gathering/inactivity counter reached its limit. |
| `ApplyByNoShip` | A naval route is unavailable; relevant to the later naval-capable flow. |
| `ApplyByUnknownReason` | A genuine fallback only, such as AI recovery when its state is inconsistent. It is not a substitute for deciding your own reason. |

## Risk boundaries

- Snapshot `kingdom.Armies` or `army.Parties` before a destructive loop. The action clears the party list and kingdom reference, and event handlers may change adjacent campaign state.
- Do not call the player-release variant as a free general-purpose disband. It deducts player-clan influence and applies model-defined relation costs to non-main-party leaders, including a distinct leader-party cost.
- After the call, do not read `army.LeaderParty`, `army.Parties`, `army.Kingdom`, or use it as a long-lived save key. Reacquire a current army through `MobileParty.Army` or the kingdom list.
- During a map event or siege, let the owning campaign flow choose timing. Splitting attached parties during battle-side processing can invalidate map-event assumptions even though the action protects against repeated dispersion.
- `ApplyByNoShip` exists in 1.3.15's reason set but becomes meaningful with the expanded 1.4.5 naval context. Do not use it as a generic movement failure tag.

## Real acquisition-path example

The player army is available through `MobileParty.MainParty.Army`. This mirrors the real `PlayerCaptivity` acquisition path, while deliberately using the post-battle reason only in the matching player decision:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.CampaignSystem.Party;

public void ReleasePlayerArmyAfterBattle()
{
    Army army = MobileParty.MainParty.Army;
    if (army != null && army.LeaderParty == MobileParty.MainParty)
    {
        DisbandArmyAction.ApplyByReleasedByPlayerAfterBattle(army);
    }
}
```

The official implementation reads the diplomacy model and charges the player only after the real army has been acquired. A mod UI should show the model-derived cost before exposing this command.

## When a different operation is correct

| Intent | Use instead |
|---|---|
| Stop the current strategic goal but keep the army object until normal checks handle it | `Army.FinishArmyObjective()` |
| Remove one party from the army | official party removal/leave flow, not wholesale disband |
| Delete a party | [`DestroyPartyAction`](../DestroyPartyAction) or the relevant party action |
| Change a kingdom's war status | diplomacy actions such as `MakePeaceAction` |
| Add cohesion | `Army.BoostCohesionWithInfluence` |

## Navigation

- ↑ [Campaign actions](./) · [API](../)
- ↔ [Army](../Army) · [Kingdom](../../campaign/Kingdom) · [MobileParty](../../campaign/MobileParty) · [Clan](../../campaign/Clan)
- Related: [ChangeClanInfluenceAction](../ChangeClanInfluenceAction) · [ChangeRelationAction](../ChangeRelationAction) · [CampaignBehaviorBase](../CampaignBehaviorBase) · [Crash boundaries](../../../architecture/crash-boundaries)
