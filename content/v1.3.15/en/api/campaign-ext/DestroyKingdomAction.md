---
title: "DestroyKingdomAction"
description: "Irreversibly dismantles a kingdom by destroying every surviving member clan, removing wars, and notifying campaign observers."
---
# DestroyKingdomAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** static action  
**Source:** `TaleWorlds.CampaignSystem/Actions/DestroyKingdomAction.cs`

## One-line job

Eliminate a kingdom as a political container by cascading the official clan-destruction transaction through every non-eliminated member, then removing its wars and raising the kingdom-destroyed event.

## Mental model

`Kingdom` is not just a diplomatic flag. It owns a live membership graph of clans, their armies and holdings, as well as its stance records. This action is therefore a **fan-out destruction transaction**:

```text
Kingdom (marked eliminated)
  -> each surviving Clan: DestroyClanAction
       -> parties, heroes, fiefs, clan wars, membership
  -> RemoveFactionsFromCampaignWars(Kingdom)
  -> OnKingdomDestroyed(Kingdom)
```

Use it only for an irrecoverable kingdom-collapse outcome. It is not a shortcut for changing rulers, removing one clan, making peace, or removing a policy. The built-in faction-discontinuation behavior first moves any relevant surviving clans out through `ChangeKingdomAction`, clears `RulingClan`, and only then applies this action.

## Dependencies and event order

| Direction | Types and effect |
|---|---|
| Upstream | [`Kingdom`](../../campaign/Kingdom) supplies the clan snapshot. It becomes `IsEliminated` before child cleanup starts. |
| Main cascade | [`DestroyClanAction`](../DestroyClanAction) runs once for each non-eliminated clan; it removes parties and heroes, transfers towns/castles, clears clan war records, and leaves kingdom membership. |
| Political cleanup | `Campaign.Current.FactionManager.RemoveFactionsFromCampaignWars` removes the destroyed kingdom's remaining war relations only after the clan loop. |
| Observers | `CampaignEventDispatcher.OnKingdomDestroyed` fires after deactivation, clan cleanup, list removal, and war removal. Behaviors should treat it as a notification to clear cached kingdom/army/fief assumptions. |
| Related systems | [`ChangeKingdomAction`](../ChangeKingdomAction), [`ChangeOwnerOfSettlementAction`](../ChangeOwnerOfSettlementAction), [`KillCharacterAction`](../KillCharacterAction), and [`DisbandArmyAction`](../DisbandArmyAction) are reached indirectly through the clan cascade. |

The action uses `destroyedKingdom.Clans.ToList()` and invokes `RemoveClanInternal` after each child cascade. That detail is the reason a mod must not replace it with a loop that merely toggles `IsEliminated` or `Clan.Kingdom`.

## Reason-specific variants and member timing

| Entry point | Meaning | What happens to members |
|---|---|---|
| `Apply` | Normal political destruction. `FactionDiscontinuationCampaignBehavior` uses this when the kingdom has no further reason to exist. | Each surviving clan follows `DestroyClanAction.Apply`: its leader and all other living members enter the removal path. |
| `ApplyByKingdomLeaderDeath` | The kingdom is being removed because the leader-death situation is already in progress. The 1.4.5 `KillCharacterAction` and SandBox heir-selection flow provide real callers. | Each clan follows `DestroyClanAction.ApplyByClanLeaderDeath`, which avoids removing the already-handled clan leader a second time while removing other living members. |

This is not succession. If a kingdom should survive the ruler, use the appropriate ruler/heir and kingdom-membership paths. Choosing the leader-death variant solely because the leader is inconvenient to a mod skips a meaningful part of the normal member-removal timing.

## Risk boundaries

- The operation is irreversible at campaign level. An eliminated `Kingdom` object may still be referenced by UI, behaviors, and saves; clear or revalidate those references after `OnKingdomDestroyed`.
- It can transfer every town and castle held by every destroyed clan, remove their parties and heroes, collapse attached armies, and delete active wars. Do not use it as a “leave faction” button.
- Never call it while enumerating `Kingdom.All`, `kingdom.Clans`, `kingdom.Armies`, or a behavior-owned cache of their members. The implementation intentionally changes membership beneath those collections.
- Do not invoke it during load reconstruction. Campaign object lists, war stances, and settlement owner relationships must already be fully established for the cascade to serialize coherently.
- A custom precondition must account for player participation. `Clan.PlayerClan.Kingdom` can be null, and destroying a player kingdom follows the same destructive member path as any other kingdom.

## Real acquisition-path example

The acquisition is from the campaign's actual kingdom registry. This example models an explicitly authored terminal event; it must not be used as ordinary succession code.

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;

public void EndScenarioKingdom(string kingdomId)
{
    Kingdom kingdom = Kingdom.All.FirstOrDefault(k =>
        k.StringId == kingdomId && !k.IsEliminated);

    if (kingdom != null && kingdom.Clans.All(clan => clan.IsEliminated))
    {
        DestroyKingdomAction.Apply(kingdom);
    }
}
```

`Kingdom.All` is a campaign registry, not a fabricated service. The guard also makes this deliberately narrow: use `ChangeKingdomAction` for any kingdom that still contains a surviving clan you intend to preserve.

## When not to call it

| Requirement | Correct boundary |
|---|---|
| A clan should leave but remain playable | [`ChangeKingdomAction`](../ChangeKingdomAction) |
| A king dies and the realm should continue | succession / ruler selection, not destruction |
| End a war | diplomacy action such as `MakePeaceAction` |
| End one army's campaign | [`DisbandArmyAction`](../DisbandArmyAction) |
| Remove one clan | [`DestroyClanAction`](../DestroyClanAction) |

## Navigation

- ↑ [Campaign actions](./) · [API](../)
- ↔ [Kingdom](../../campaign/Kingdom) · [Clan](../../campaign/Clan) · [Army](../Army)
- Related: [DestroyClanAction](../DestroyClanAction) · [ChangeKingdomAction](../ChangeKingdomAction) · [CampaignBehaviorBase](../CampaignBehaviorBase) · [Crash boundaries](../../../architecture/crash-boundaries)
