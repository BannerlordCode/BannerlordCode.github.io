---
title: "MakePeaceAction"
description: "Ends a live Campaign war through the diplomatic Action, records the correct peace cause, refreshes player-facing map visuals, and publishes MakePeace."
---
# MakePeaceAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public static class MakePeaceAction`  
**Base:** none (static class)  
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/MakePeaceAction.cs`  
**Version note:** this page describes the shipped v1.4.5 implementation.

## One-line responsibility

Changes the diplomatic stance of two live `IFaction` instances to neutral, configures any peace tribute on their shared `StanceLink`, refreshes the player-facing opponent visuals, and publishes one `CampaignEvents.MakePeace` notification with the appropriate `MakePeaceDetail`.

## Mental model

`MakePeaceAction` is the **state-writing end** of a peace flow, not its decision process. Both public entries reach the private `ApplyInternal`. That method first obtains the existing stance, calls `FactionManager.SetNeutral(faction1, faction2)`, configures the stance's daily tribute, refreshes visible hostile-side parties and settlements when the main hero's map faction is involved, then calls `CampaignEventDispatcher.Instance.OnMakePeace`.

The Action does not decide whether peace is suitable, validate a kingdom vote, or choose a treaty target. Those are caller responsibilities. The Action directly invokes only the stance, tribute, visual, and dispatcher operations in its source, but a normal stock Campaign synchronously completes the resulting continuity and `MakePeace` event cascade. The normal kingdom-decision path is [MakePeaceKingdomDecision](../../campaign/MakePeaceKingdomDecision), while clan/kingdom transition paths such as [ChangeKingdomAction](../ChangeKingdomAction) use plain peace only after their own rules have determined that the relation must end.

## Dependencies and event cascade

```text
Campaign.Current
  -> Kingdom / Clan as IFaction
  -> MakePeaceAction.Apply*
      -> FactionManager.SetNeutral
          -> StanceLink leaves War: ResetStats + PeaceDeclarationDate
          -> OnMapEventContinuityNeedsUpdate (synchronous)
              -> PartyDiplomaticHandler: battle, encounter, and siege continuity
          -> FactionsAtWarWith refresh
      -> StanceLink.SetDailyTributePaid
      -> visible Settlement + MobileParty visuals (player relation only)
      -> CampaignEventDispatcher.OnMakePeace
          -> CampaignEvents.MakePeace
          -> AI hostile-action cleanup, diplomacy, UI, quest, and mod listeners
```

- **Live faction state:** [Kingdom](../../campaign/Kingdom) and [Clan](../../campaign/Clan) implement [IFaction](../../campaign/IFaction). Use their current Campaign instances, not a stored surrogate or a newly constructed implementation.
- **State writer and early continuity:** [FactionManager](../../campaign/FactionManager) assigns the shared `StanceLink.StanceType`. Leaving `War` synchronously calls `ResetStats`, records `PeaceDeclarationDate`, changes the stance, and emits `OnMapEventContinuityNeedsUpdate` before `SetNeutral` refreshes both `FactionsAtWarWith` lists. Only after `SetNeutral` returns does this Action call `StanceLink.SetDailyTributePaid(faction1, amount, duration)`.
- **Map, encounter, and siege continuity:** [PartyDiplomaticHandlerCampaignBehavior](../../campaign/PartyDiplomaticHandlerCampaignBehavior) is a built-in listener for that earlier continuity event. Depending on affected parties, it can remove invalid battle participants, mark a map event `DiplomaticallyFinished`, finish the player encounter, detach besiegers, make parties leave unsuitable settlements, and activate the peace-ended menu. These are synchronous stock-Campaign consequences of the stance change, not direct calls in `MakePeaceAction.cs`.
- **Final downstream event:** [CampaignEvents](../../campaign/CampaignEvents) exposes `MakePeace` as `IMbEvent<IFaction, IFaction, MakePeaceAction.MakePeaceDetail>`. Its built-in synchronous subscribers include [AiPartyThinkBehavior](../../campaign/AiPartyThinkBehavior), which selects the kingdom/kingdom, kingdom/clan, or clan/clan `FactionHelper.FinishAllRelatedHostileActions*` path. That cleanup can finish army objectives, hold hostile parties, detach siege camps, and mark/update diplomatically finished map events.
- **Other built-in subscribers:** the stock `MakePeace` cascade can release prisoners, cap the opponent's player crime rating, recalculate village trade bounds, reconcile kingdom decisions, end matching alliance-related call-to-war agreements, refresh siege UI and notifications, and resolve or cancel relevant issue/quest flows when their conditions match. Mods must treat these as conditional built-in effects, not as universal work that the caller must repeat.
- **War statistics:** [CampaignWarManagerBehavior](../../campaign/CampaignWarManagerBehavior) does not subscribe to `MakePeace`; it later observes `MapEventEnded` and `RaidCompletedEvent`. Its counters are on the same `StanceLink` that leaving war resets, so a diplomatically ended map event may later reach that behavior after the war statistics have already been cleared.

## Entry points and detail semantics

There are only two public entries. They perform the same state-transition sequence, but listeners receive different reason data and tribute setup.

| Entry | Detail delivered to `MakePeace` | Tribute setup | Use it when |
|---|---|---|---|
| `Apply(IFaction faction1, IFaction faction2)` | `MakePeaceDetail.Default` | passes `0, 0`; no daily tribute and no installments | an already-authorized non-election path must end this exact relation, such as a clan/kingdom transition or a completed peace barter. |
| `ApplyByKingdomDecision(IFaction faction1, IFaction faction2, int dailyTributeFrom1To2, int dailyTributeDuration)` | `MakePeaceDetail.ByKingdomDecision` | stores the supplied payment and installment count | a confirmed kingdom peace decision or the current peace-offer flow has already selected its result. |

`faction1` is also the payer argument passed to `SetDailyTributePaid`. A positive `dailyTributeFrom1To2` represents a payment from `faction1` to `faction2`; a negative value reverses the economic direction, while the `MakePeace` event still reports the original `(faction1, faction2)` argument order. `dailyTributeDuration` is the number of daily installments (days). `StanceLink.GetRemainingTributePaymentCount` makes the effective remaining count zero for a zero amount and clamps exhausted or non-positive installment counts to zero. The Action does not calculate or normalize either value. In particular, plain `Apply` overwrites the current agreement with zero amount and zero installments.

Do not label a rebellion ending, clan departure, or generic war-ending path as `ByKingdomDecision` just because kingdoms are involved. v1.4.5 has no separate public rebellion or war-ending `MakePeaceDetail`: these paths use `Default` after their caller has applied its own rules. Conversely, a voted treaty must use `ApplyByKingdomDecision` so listeners can distinguish it from a plain state cleanup.

## Preconditions owned by the caller

The Action returns `void` and does not offer a validation result. Before calling it, the owner of the flow must ensure all of the following:

1. `Campaign.Current`, the two faction instances, `FactionManager`, and the event dispatcher are initialized.
2. Both inputs are current, non-null `IFaction` objects, are distinct, and represent the map-level relation intended by the flow. A clan may have a separate `MapFaction`; do not accidentally settle the wrong layer.
3. The factions are actually at war through `faction1.IsAtWarWith(faction2)`. Calling a peace Action for a neutral relation can still produce a misleading event and reset treaty data.
4. A peace is legal in the owning context. For kingdom politics, evaluate the decision path and its authority first; for a custom system, account for constant-war rules and its own gameplay constraints. Do not duplicate the stock continuity and `MakePeace` cleanup described above unless the mod intentionally replaces that behavior.
5. For a decision treaty, the caller has already calculated a valid amount and duration. `DiplomacyModel` provides the scoring and, for clans, `GetDailyTributeToPay`; it does not make the treaty or validate an arbitrary integer pair for this Action.

`FactionManager.SetNeutral` protects only against equal factions and shallow diplomatic stances. It is not a substitute for these campaign-level checks.

## State-change order

The implementation order is significant to event consumers:

1. It captures `faction1.GetStanceWith(faction2)`.
2. `FactionManager.SetNeutral` assigns `StanceLink.StanceType = Neutral`. When the old state is `War`, the setter first calls `ResetStats` and sets `PeaceDeclarationDate`; the reset clears troop and ship casualties, raids, sieges, town sieges, prior tribute totals, daily tribute, and installments.
3. The same setter synchronously emits `OnMapEventContinuityNeedsUpdate(faction1)`. The built-in party-diplomatic behavior can reconcile battle parties, map events, player encounters, siege camps, settlements, and the peace-ended menu before the Action continues.
4. `SetNeutral` refreshes both factions' war-faction caches. The captured `StanceLink` then receives `SetDailyTributePaid(faction1, dailyTributeFrom1To2, dailyTributeDuration)`.
5. If either input equals `Hero.MainHero.MapFaction`, every visible `Settlement` and `MobileParty` whose map faction is the other side receives `SetVisualAsDirty()`.
6. `CampaignEventDispatcher.Instance.OnMakePeace(faction1, faction2, detail)` reaches `CampaignEvents.MakePeace`, whose built-in listeners synchronously finish applicable hostile actions and other diplomacy consequences.

Therefore a `MakePeace` listener sees the neutral stance, reset war statistics, and the newly configured tribute. A mod must not assume the old hostile map-event, siege, party, encounter, or quest state remains available after the call; the normal Campaign may already have reconciled it through the earlier continuity event or the final `MakePeace` subscribers.

## Model versus Action

Use `Campaign.Current.Models.DiplomacyModel` to answer a policy question, for example `IsPeaceSuitable`, `GetScoreOfDeclaringPeace`, or `GetDailyTributeToPay`. [MakePeaceKingdomDecision](../../campaign/MakePeaceKingdomDecision) consumes that kind of policy result and calls `ApplyByKingdomDecision` only when its chosen outcome says to declare peace.

Use `MakePeaceAction` only when the policy or gameplay flow has already decided to mutate the world. Do not use the Action to probe a score, and do not treat a good score as permission to skip a kingdom decision. [DeclareWarAction](../DeclareWarAction) is the inverse state Action; neither Action replaces the diplomacy model or a decision process.

## Safe current-Campaign example

This example deliberately uses plain `Apply` for a custom, already-authorized non-election flow. It finds only live kingdoms in the current Campaign and does not stand in for the kingdom decision UI or its vote.

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;

public void EndAuthorizedPlayerKingdomWar()
{
    if (Campaign.Current == null || Clan.PlayerClan == null)
    {
        return;
    }

    Kingdom playerKingdom = Clan.PlayerClan.Kingdom;
    if (playerKingdom == null)
    {
        return;
    }

    Kingdom enemyKingdom = Kingdom.All.FirstOrDefault(kingdom =>
        kingdom != playerKingdom &&
        !kingdom.IsEliminated &&
        playerKingdom.IsAtWarWith(kingdom));

    if (enemyKingdom == null)
    {
        return;
    }

    MakePeaceAction.Apply(playerKingdom, enemyKingdom);
}
```

For a kingdom vote, do not replace [MakePeaceKingdomDecision](../../campaign/MakePeaceKingdomDecision) with this code. After that decision has chosen peace, use its supplied sides, daily tribute, and duration with `ApplyByKingdomDecision`.

## Listening and lifecycle

Long-lived mod behavior should listen through static [CampaignEvents](../../campaign/CampaignEvents), not by fabricating a dispatcher or event receiver:

```csharp
public override void RegisterEvents()
{
    CampaignEvents.MakePeace.AddNonSerializedListener(this, OnMakePeace);
}

private void OnMakePeace(
    IFaction faction1,
    IFaction faction2,
    MakePeaceAction.MakePeaceDetail detail)
{
    if (detail == MakePeaceAction.MakePeaceDetail.ByKingdomDecision)
    {
        InformationManager.DisplayMessage(
            new InformationMessage("A kingdom treaty completed."));
    }
}
```

Add `using TaleWorlds.Core;` for `InformationManager` and `InformationMessage`. `RegisterEvents` belongs in a [CampaignBehaviorBase](../../campaign/CampaignBehaviorBase) that participates in the Campaign lifecycle. `AddNonSerializedListener` registrations are not save fields; recreate them when the behavior registers after load and do not persist a stale faction reference across campaign teardown. Since the `StanceLink` and its tribute values are saveable campaign state, calling the Action during incomplete loading, save writing, or a kingdom/clan destruction transition can leave your own behavior's durable state out of step with the restored relation.

## Risks and consistency boundaries

- **Direct war-state writes are unsafe:** never assign a stance's `StanceType`, edit `FactionsAtWarWith`, or alter a `StanceLink` field to make peace. You skip `FactionManager` cache synchronization, the `ResetStats`/peace-date transition, map-event continuity, player-side visual invalidation, and the final `MakePeace` cascade.
- **Direct tribute writes are unsafe:** never set a tribute amount or installments directly. `MakePeaceAction` uses `SetDailyTributePaid` on the exact relation after neutralizing it; bypassing that sequence can associate a treaty with the wrong side, stale war state, or omit the event-driven consequences.
- **Direction matters:** pass the intended payer as `faction1`. Swapping sides reverses the meaning of a positive daily payment and also changes the event argument order observed by listeners.
- **Stock cleanup is synchronous:** the stance-continuity listener and `MakePeace` subscribers reconcile applicable map events, sieges, hostile party and army goals, player encounters, prisoner/crime/trade/decision/agreement state, UI, and relevant issue/quest flows. Do not repeat `FactionHelper.FinishAllRelatedHostileActions*`, siege detachment, or encounter cleanup from a listener unless deliberately replacing a built-in path.
- **Event ordering and re-entry:** `CampaignEvents.MakePeace` is emitted after the Action's direct mutation and the earlier stance-continuity cascade. Its dispatch then synchronously invokes built-in and mod listeners. A listener therefore sees the completed stat reset, continuity work, cache refresh, tribute write, and visual dirtying, but must not assume every other `MakePeace` listener has already run. A listener that immediately calls another diplomacy Action needs an explicit guard, otherwise it can issue duplicate events or undo the flow that just completed.
- **Lifecycle first:** call only after Campaign systems are available and before your owner is disposed. Never use this static Action as a save migration shortcut without recreating the normal action/event sequence.

## Navigation

- **Up Parent:** [Campaign extension API index](../) · [Campaign system](../../campaign/)
- **Siblings:** [DeclareWarAction](../DeclareWarAction) · [ChangeKingdomAction](../ChangeKingdomAction) · [MakePeaceDetail](../MakePeaceDetail)
- **Related leaves:** [Campaign](../../campaign/Campaign) · [IFaction](../../campaign/IFaction) · [Kingdom](../../campaign/Kingdom) · [Clan](../../campaign/Clan) · [FactionManager](../../campaign/FactionManager) · [CampaignEvents](../../campaign/CampaignEvents) · [DiplomacyModel](../../campaign/DiplomacyModel) · [MakePeaceKingdomDecision](../../campaign/MakePeaceKingdomDecision) · [CampaignWarManagerBehavior](../../campaign/CampaignWarManagerBehavior)
