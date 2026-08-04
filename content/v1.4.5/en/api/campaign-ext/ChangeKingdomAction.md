---
title: "ChangeKingdomAction"
description: "Uses reason-specific Actions to safely handle Clan entry, departure, rebellion, mercenary service, and kingdom creation while keeping diplomacy, settlements, parties, and campaign events coherent."
---
# ChangeKingdomAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public static class ChangeKingdomAction`  
**Base:** none (static class)  
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/ChangeKingdomAction.cs`

## One-line responsibility

Moves a `Clan` into a kingdom, out of a kingdom, into rebellion, or into mercenary service while applying the related faction, settlement, party, and campaign-event changes as one world-state operation.

## Mental model

This is a Campaign-layer **world-state Action**, not a setter for `clan.Kingdom`. It reads the clan's current `Kingdom` as the old kingdom, clears `DebtToKingdom`, sets or clears `ShouldStayInKingdomUntil`, and selects a join, leave, rebellion, or mercenary branch from `ChangeKingdomActionDetail`. A branch may call `StartMercenaryServiceAction`, `EndMercenaryServiceAction`, `MakePeaceAction`, `DeclareWarAction`, `ChangeOwnerOfSettlementAction`, and `ChangeRulingClanAction`. The action then dispatches `OnClanChangedKingdom`; a defection also dispatches `OnClanDefected` afterward.

Use it when the campaign is initialized and the `Clan` and `Kingdom` are live objects owned by the current Campaign. Do not call it during save loading, before the campaign dispatcher exists, or merely to preview a rule. Evaluate eligibility, mercenary rewards, or diplomatic consequences with [GameModelsManager](../../core-extra/GameModelsManager/), [DiplomacyModel](../../campaign/DiplomacyModel), or the relevant barterable first; call this Action only when the world state should actually change.

## Dependencies and event cascade

```text
Campaign.Current
  -> Clan / Kingdom
  -> ChangeKingdomAction.ApplyBy*
      -> FactionHelper / StartMercenaryServiceAction / EndMercenaryServiceAction
      -> MakePeaceAction / DeclareWarAction / ChangeOwnerOfSettlementAction
      -> CampaignEventDispatcher
          -> CampaignEvents.OnClanChangedKingdomEvent
          -> CampaignEvents.OnClanDefectedEvent (only after defection)
```

- **Upstream state:** [Campaign](../../campaign/Campaign) owns the current campaign; [Clan](../../campaign/Clan) provides `Kingdom`, mercenary state, settlements, and war parties; [Kingdom](../../campaign/Kingdom) provides the ruling clan, hostile factions, and fief collection.
- **Direct downstream:** [CampaignEvents](../../campaign/CampaignEvents) publishes the two events; [CampaignEventReceiver](../../campaign/CampaignEventReceiver) and [CampaignEventDispatcher](../../campaign/CampaignEventDispatcher) route callbacks to registered receivers.
- **Related Actions:** Mercenary branches depend on [StartMercenaryServiceAction](../StartMercenaryServiceAction) and [EndMercenaryServiceAction](../EndMercenaryServiceAction). Leaving may call [MakePeaceAction](../MakePeaceAction), [DeclareWarAction](../DeclareWarAction), and [ChangeOwnerOfSettlementAction](../ChangeOwnerOfSettlementAction); kingdom creation uses [ChangeRulingClanAction](../ChangeRulingClanAction).
- **Rule boundary:** `Campaign.Current.Models.DiplomacyModel.IsAtConstantWar` is used to decide how departure handles peace; it is not an eligibility validator for this Action. [FactionHelper](../../system/FactionHelper) adjusts some faction stances. Models provide rules or calculations; they do not replace the Action's state mutation.

## Internal contract and public entries

The source's `ApplyInternal` is private and cannot be called by a mod. Every public entry supplies a specific `ChangeKingdomActionDetail`, along with the target kingdom, stay-until time, mercenary award multiplier, and notification flag. The old kingdom is read from `clan.Kingdom` inside the action.

#### Joining, creation, and defection

| Entry | Reason and typical timing | Important side effects |
|---|---|---|
| `ApplyByJoinToKingdom(Clan, Kingdom, CampaignTime, bool)` | A normal clan joins a kingdom; the source's `JoinKingdomAsClanBarterable` and conversation behavior use it after acceptance. | Ends existing mercenary service; leaves the old kingdom; adjusts joining faction stances; writes `clan.Kingdom` and `ShouldStayInKingdomUntil`; dispatches the clan-change event. |
| `ApplyByJoinToKingdomByDefection(Clan, Kingdom, Kingdom, CampaignTime, bool)` | A clan defects from one kingdom to another. | Uses the normal join state path, then dispatches `OnClanDefected` after `OnClanChangedKingdom`. The supplied `oldKingdom` is used for that additional event and must match the clan's actual kingdom before the call. |
| `ApplyByCreateKingdom(Clan, Kingdom, bool)` | [KingdomManager](../../campaign/KingdomManager) has initialized a kingdom and attaches its founder clan. | Ends mercenary service, leaves the old kingdom, calls `ChangeRulingClanAction.Apply`, and points `clan.Kingdom` at the new kingdom. It does not replace `Kingdom.InitializeKingdom` or independently complete `KingdomCreatedEvent`. |
| `ApplyByJoinFactionAsMercenary(Clan, Kingdom, CampaignTime, int, bool)` | A clan accepts mercenary service; the award multiplier is commonly calculated by [MinorFactionsModel](../../campaign/MinorFactionsModel) at the calling site. | Delegates to `StartMercenaryServiceAction.ApplyByDefault` instead of treating the clan as a noble clan member; the stay-until time and award multiplier are passed into the mercenary action. |

Join entries clear `clan.DebtToKingdom` before changing the relationship. Only join branches preserve the supplied `shouldStayInKingdomUntil`; leave branches reset it to `CampaignTime.Zero`.

#### Leaving, ending mercenary service, and kingdom destruction

| Entry | Reason and typical timing | Important side effects |
|---|---|---|
| `ApplyByLeaveKingdom(Clan, bool)` | A clan normally leaves a kingdom; the leave-kingdom barterable, expulsion, and abdication paths use it. | Clears `clan.Kingdom`; gives clan-owned settlements to the old kingdom's leader; moves the clan's heroes who remain in those settlements to the clan leader's `HomeSettlement`; makes peace with non-constant-war enemies and finishes hostile actions aimed in either direction. |
| `ApplyByLeaveWithRebellionAgainstKingdom(Clan, bool)` | A clan leaves through rebellion. | Clears the kingdom relation; calls `DeclareWarAction.ApplyByRebellion` against the old kingdom and declares ordinary wars on the old kingdom's enemies where needed. It does not perform normal-leave settlement transfer. |
| `ApplyByLeaveKingdomAsMercenary(Clan, bool)` | A mercenary contract ends or the mercenary leaves. | Clears the kingdom relation; calls `EndMercenaryServiceAction.EndByLeavingKingdom`; makes peace with non-constant-war enemies, finishes related hostile actions, and refreshes party visuals. |
| `ApplyByLeaveByKingdomDestruction(Clan, bool)` | [FactionDiscontinuationCampaignBehavior](../../campaign/FactionDiscontinuationCampaignBehavior) clears a kingdom's clans before the kingdom is destroyed. | Clears the kingdom relation and ends mercenary service; a mercenary clan makes peace with old enemies, while a non-mercenary clan declares war on old enemies it is not already fighting. The method does not destroy the `Kingdom`. |
| `ApplyByLeaveKingdomByClanDestruction(Clan, bool)` | [DestroyClanAction](../DestroyClanAction) has decided to destroy the clan and first removes its kingdom relation. | Runs the leave branch and dispatches the event; the caller must let the clan-destruction flow remove the object instead of pretending that a still-registered clan is already destroyed. |

After every branch, WarParty components whose MobileParty is not in a MapEvent are put into Hold mode. Only then does the source call `OnClanChangedKingdom`. `showNotification` is passed as event data; it does not skip state mutation, diplomacy, or the event itself.

## Calling contract

Each `ApplyBy*` is an immediate `void` world-state operation with no success result, rollback object, or preview mode. Before calling it, ensure that:

1. `clan` is a live clan still owned by the current Campaign.
2. A join or creation entry receives an initialized, intended `newKingdom`; a leave entry receives a clan whose current kingdom is the expected old kingdom.
3. A defection entry receives the real old kingdom from before the call, otherwise `OnClanDefected` carries a false history.
4. The current MapEvent, settlement transfer, and diplomatic state are in a phase where mutation is valid; do not insert this operation between save or load callbacks.

These entries do not calculate political cost, mercenary price, barter acceptance, or whether a kingdom decision passed. Let [GameModelsManager](../../core-extra/GameModelsManager/), [DiplomacyModel](../../campaign/DiplomacyModel), or the decision/barter flow make that decision, then call the matching `ApplyBy*` after it is accepted.

## Events

The action publishes:

- `CampaignEvents.OnClanChangedKingdomEvent`: `Clan clan, Kingdom oldKingdom, Kingdom newKingdom, ChangeKingdomAction.ChangeKingdomActionDetail detail, bool showNotification`.
- `CampaignEvents.OnClanDefectedEvent`: published only by `ApplyByJoinToKingdomByDefection` after the first event, with `Clan clan, Kingdom oldKingdom, Kingdom newKingdom`.

A mod should subscribe from [CampaignBehaviorBase](../../campaign/CampaignBehaviorBase)'s `RegisterEvents()` rather than inherit [CampaignEventReceiver](../../campaign/CampaignEventReceiver) and instantiate it. At callback time `clan.Kingdom` already points to `newKingdom`; retain the event's old-kingdom argument when the previous value is needed.

## Real acquisition paths

### Join the first available kingdom

`Clan.PlayerClan`, `Kingdom.All`, and `CampaignTime.Zero` are real 1.4.5 entry points. This example obtains live objects from the existing Campaign instead of inventing `Clan` or `Kingdom` instances:

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;

public void JoinFirstAvailableKingdom()
{
    if (Campaign.Current == null)
    {
        return;
    }

    Clan clan = Clan.PlayerClan;
    Kingdom targetKingdom = Kingdom.All.FirstOrDefault(kingdom =>
        kingdom != clan.Kingdom && !kingdom.IsEliminated);

    if (targetKingdom != null)
    {
        ChangeKingdomAction.ApplyByJoinToKingdom(
            clan, targetKingdom, CampaignTime.Zero, showNotification: false);
    }
}
```

### Observe the result from a Behavior

This is the actual Campaign event subscription path. The callback reads event arguments and does not directly assign `clan.Kingdom` again:

```csharp
using TaleWorlds.Library;

public override void RegisterEvents()
{
    CampaignEvents.OnClanChangedKingdomEvent.AddNonSerializedListener(
        this, OnClanChangedKingdom);
}

private void OnClanChangedKingdom(
    Clan clan,
    Kingdom oldKingdom,
    Kingdom newKingdom,
    ChangeKingdomAction.ChangeKingdomActionDetail detail,
    bool showNotification)
{
    if (clan == Clan.PlayerClan && detail == ChangeKingdomAction.ChangeKingdomActionDetail.JoinKingdom)
    {
        InformationManager.DisplayMessage(
            new InformationMessage("Player clan joined a kingdom."));
    }
}
```

The listener owner must be a Behavior inside the campaign lifecycle; merely creating a listener object does not register it.

## Risks and consistency boundaries

- **Do not assign the field directly:** `clan.Kingdom = targetKingdom` skips stance adjustment, mercenary cleanup, settlement transfer, peace/war changes, party visual refresh, WarParty holding, and event cascade. The in-memory world can become internally inconsistent.
- **The old kingdom must be real:** Leave branches read the old kingdom's leader, settlements, and war list. Passing a clan that is not in a kingdom, or repeating a leave from an event callback, can produce null dereferences or diplomacy against the wrong faction.
- **Defection arguments must agree:** `ApplyByJoinToKingdomByDefection` does not use its `oldKingdom` argument for the internal field switch, but it sends that argument through `OnClanDefected`; a wrong value misattributes quests, diplomacy, and UI updates.
- **Actions cascade:** Normal departure and rebellion can invoke several `MakePeace` and `DeclareWar` operations. Do not unconditionally invoke the same Action again from a listener, or the event chain can re-enter and rewrite relations repeatedly.
- **Save safety depends on timing:** These objects and relations are referenced by Campaign saves. Do not mutate them while loading is incomplete, while `DestroyClanAction` is removing the object, or while save data is being written. Let the existing Behavior, barterable, or KingdomManager lifecycle call the Action.
- **Map events matter:** The source only puts a WarParty on Hold when it is not in a MapEvent. The caller must still ensure that MapEvent, Party, and Settlement operations do not overlap an active battle or transfer.

## Navigation

- **↑ Parent:** [Campaign extension API index](../) · [Campaign system](../../campaign/)
- **↔ Siblings:** [DeclareWarAction](../DeclareWarAction) · [MakePeaceAction](../MakePeaceAction) · [ChangeOwnerOfSettlementAction](../ChangeOwnerOfSettlementAction)
- **Related leaves:** [Kingdom](../../campaign/Kingdom) · [Clan](../../campaign/Clan) · [CampaignEvents](../../campaign/CampaignEvents) · [CampaignBehaviorBase](../../campaign/CampaignBehaviorBase) · [StartMercenaryServiceAction](../StartMercenaryServiceAction) · [EndMercenaryServiceAction](../EndMercenaryServiceAction) · [DestroyClanAction](../DestroyClanAction)
