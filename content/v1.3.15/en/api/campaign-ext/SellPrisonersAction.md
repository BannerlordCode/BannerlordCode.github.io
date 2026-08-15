---
title: "SellPrisonersAction"
description: "Sells all or selected prisoners through the campaign transaction path, coordinating roster removal, hero ransom or transfer, payment, skill XP, and prisoner events."
---
# SellPrisonersAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`

**Module:** `TaleWorlds.CampaignSystem`

**Type:** `public static class SellPrisonersAction`

**Base:** none (static class)

**Source:** `TaleWorlds.CampaignSystem/Actions/SellPrisonersAction.cs`

## One-line job

Commits a prisoner sale as a complete campaign transaction instead of merely subtracting entries from `PrisonRoster`.

## Overview

This Action accepts a seller, an optional buyer, and a `TroopRoster` describing the prisoners to process. Its internal entry point separates regular troops from hero prisoners, invokes the appropriate ransom or transfer Actions, prices the sale through the ransom model, grants prisoner-management skill progress, and finally dispatches sale and possible donation events. Town ransom menus, AI prisoner sales, patrol deliveries, and disbanding-party cleanup all call this path.

## Mental model

The `prisoners` argument is the transaction manifest, not the new owner. `ApplyForSelectedPrisoners` uses its counts to mutate the seller's real roster. `ApplyForAllPrisoners` first clones the seller's roster so the original collection can be changed safely during processing. Regular troops are removed directly from the seller roster; heroes go through `EndCaptivityAction` or `TransferPrisonerAction`, so one call can affect rosters, hero captivity, money, skills, and several campaign events.

`ApplyByPartyScreen` is a special settlement-screen completion hook for a roster transfer that the Party Screen has already applied. It passes `applyConsequences: false`, so it does not remove regular prisoners again and does not pay ransom money, but it still processes heroes, skill progress, and events. It requires the main hero to be inside a settlement and is not a general headless sale API.

## Apply / ApplyInternal contract

The private `ApplyInternal(sellerParty, buyerParty, prisoners, applyConsequences)` runs in this order:

```text
Resolve the settlement from seller or buyer
  -> Regular troops: remove them from seller.PrisonRoster when consequences apply
  -> Heroes: ransom-release them, or transfer them to a buyer still at war with them
  -> Dispatch the settlement hero-prisoner change event
  -> Price entries through the ransom model and pay the seller leader/owner/clan leader or settlement
  -> SkillLevelingManager.OnPrisonerSell
  -> OnPrisonerSold
  -> OnPrisonerDonatedToSettlement when applicable
```

The main hero is never sold through this path. A hero is ransom-released when the buyer is not at war with that hero's faction; otherwise the hero transfers to the buyer. When an AI mobile party gives hostile heroes to an allied settlement, the Action also builds a donation roster for the relation and influence Behaviors that consume the donation event.

## Entry points, callers, and timing

| Public entry point | Contract and side effects | Native timing |
|---|---|---|
| `ApplyForAllPrisoners(PartyBase sellerParty, PartyBase buyerParty)` | Clones the complete seller roster and performs full settlement. The original roster has changed when the call returns. | `DisbandPartyCampaignBehavior` uses it during party cleanup; `PatrolPartiesCampaignBehavior` uses it when a patrol reaches a settlement. |
| `ApplyForSelectedPrisoners(PartyBase sellerParty, PartyBase buyerParty, TroopRoster prisoners)` | Processes only the supplied manifest, but does not verify that those counts belong to the seller. Removes prisoners, pays ransom, grants skill progress, and dispatches events. | Used by `PartiesSellPrisonerCampaignBehavior` for AI sales and by the town command that sells all player prisoners eligible for ransom. |
| `ApplyByPartyScreen(TroopRoster prisoners)` | Assumes Party Screen already changed the rosters and skips regular-troop removal and payment. It still reads `Hero.MainHero.CurrentSettlement.Party`. | Reserved for the corresponding Party Screen completion path; ordinary mod commands should normally avoid it. |

## Dependencies

| Dependency | Upstream / downstream role |
|---|---|
| [`PartyBase`](../../campaign/PartyBase) / [`TroopRoster`](../TroopRoster) | Supply the real seller, buyer, and transaction snapshot. The Action mutates the seller's prisoner roster. |
| [`RansomValueCalculationModel`](../RansomValueCalculationModel) | Prices every character with the seller leader as context. Replacing this model changes sale income. |
| [`CampaignEvents`](../CampaignEvents) | Receives settlement prisoner changes, `OnPrisonerSold`, and possibly `OnPrisonerDonatedToSettlement` in order. SandBox settlement notifications plus relation and influence Behaviors consume them. |
| [`EndCaptivityAction`](../EndCaptivityAction) / [`TransferPrisonerAction`](../TransferPrisonerAction) | Hero prisoners cannot be handled by roster arithmetic alone. These Actions close out hero captivity or transfer ownership with their own consequences. |
| [`GiveGoldAction`](../GiveGoldAction) | Full settlement pays an active leader, owner, actual clan leader, or settlement instead of writing `Hero.Gold` directly. |

## Do not edit fields directly

Do not emulate a sale with `sellerParty.PrisonRoster.AddToCounts(..., -count)`. That bypasses hero release, model-based pricing, prisoner-management skill progress, and the UI, relation, and influence events. Use `TransferPrisonerAction` when the intent is only to hand a prisoner to another party, or the reason-specific `EndCaptivityAction` path when the intent is only to release a hero.

## Risk boundaries

- None of the three entry points validates nulls, roster ownership, or available counts. A fabricated manifest can subtract incorrect counts, pay the wrong ransom, or alter a hero who was never held by the seller. Build it from the seller's current `PrisonRoster`.
- `ApplyByPartyScreen` dereferences `CurrentSettlement` and can fail immediately when the player is not inside a settlement. Do not call it from an ordinary menu, campaign tick, or load phase.
- Events dispatch synchronously after state has changed. Treat `prisoners` as the completed transaction description; do not assume its characters remain in the seller roster or sell the same manifest again from a listener.
- When an AI party gives hostile heroes to an allied settlement, the Action suppresses ransom payment for that batch and dispatches donation semantics. Supplying a friendly settlement merely to invent a buyer changes money, relation, and influence outcomes.
- `TroopRoster` manifests and event arguments are transient work data, not durable save facts. Persist stable character IDs and your own transaction state, then resolve live objects after loading; do not save an old roster for a later repeat Apply.
- Call only after the campaign has started, while both parties are live, and outside callbacks already mutating the same roster. Re-entry during load synchronization or Party Screen submission can duplicate payments and hero lifecycle events.

## Real acquisition path

This follows the real `PlayerTownVisitCampaignBehavior` path: obtain the seller from the main party and let the native helper filter the player's currently sellable prisoners. Run it only from a consequence handler that has already established the town ransom-menu context.

```csharp
using Helpers;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Roster;

public static void SellAllPlayerPrisonersFromTownMenu()
{
    PartyBase seller = PartyBase.MainParty;
    TroopRoster prisoners = MobilePartyHelper.GetPlayerPrisonersPlayerCanSell();

    if (Hero.MainHero.CurrentSettlement != null && prisoners.TotalManCount > 0)
    {
        SellPrisonersAction.ApplyForSelectedPrisoners(seller, null, prisoners);
    }
}
```

Passing `buyerParty: null` matches the native town command: regular prisoners still produce model-based ransom income, while heroes are ransom-released. Do not invent the current settlement as a buyer, because hostile heroes may instead transfer into it and trigger donation semantics.

## Version notes

The public signatures and flow on this page are for v1.3.15. The inspected v1.4.5 core source retains all three public entry points, the hero branches, ransom payment, and event ordering; the decompiled output mainly streamlines implementation details such as the underlying `TroopRoster.AddToCounts` call shape. The type remains in `TaleWorlds.CampaignSystem.Actions`, not SandBox.

## Navigation

- Save boundary: [`SaveableTypeDefiner`](../../save-system/SaveableTypeDefiner/) registers affected roster, hero, and gold state; the transaction event is not replayed after loading.
- Parent: [Campaign extension API](../)
- Sibling: [EndCaptivityAction](../EndCaptivityAction) · [TransferPrisonerAction](../TransferPrisonerAction) · [GiveGoldAction](../GiveGoldAction)
- Children: no separate child page; the three public prisoner-sale branches are documented above
- Related: [PartyBase](../../campaign/PartyBase) · [TroopRoster](../TroopRoster) · [CampaignEvents](../CampaignEvents) · [RansomValueCalculationModel](../RansomValueCalculationModel)
