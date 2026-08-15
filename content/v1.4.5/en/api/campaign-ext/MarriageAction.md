---
title: "MarriageAction"
description: "Commits a Hero marriage already approved by the MarriageModel, applying relation and romance state and coordinating Clan, governor, army, and party state."
---

# MarriageAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public static class MarriageAction`  
**Base:** None (static class)  
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/MarriageAction.cs`

## Overview

Commits a real Hero pair that has already passed the current `MarriageModel` eligibility check and been accepted by romance, barter, or a Campaign owner as spouses, writing the bidirectional spouse and relation state, ending the courtship, and completing the linked updates that Clan, governor, army, party, home settlement, romance state, and event notifications require; it is not responsible for previewing or deciding marriage eligibility.

## Mental Model

`MarriageAction` is the campaign-layer **commit step**. The current [MarriageModel](../../campaign/MarriageModel) decides whether the two are suitable to marry, how much relation to add, and which Clan should own the membership after marriage. `MarriageAction.Apply` consumes those decisions and changes the world immediately; it is not a proposal, preview, barter-accept, or eligibility-query interface.

When the model rejects, the method just emits diagnostics and returns, changing neither Hero. When the model accepts, the source first writes `Spouse` bidirectionally, then applies the effective relation delta, computes the post-marriage Clan, then raises `CampaignEvents.BeforeHeroesMarried`, then processes the Hero whose Clan differs. This cleanup may remove a governor, leave or disband an army, end hostile actions, remove the Hero from the party roster, turn the Hero into a fugitive, disband the lord party, update the Clan, and update the home settlement. Finally it ends the courtship for both and writes `RomanceLevelEnum.Marriage` via [ChangeRomanticStateAction](../ChangeRomanticStateAction).

The event name contains `Before`, but in v1.4.5 it is dispatched after the spouse and relation are written and the Clan cleanup and final romance state are not yet complete. Listeners must use the Hero from the parameters and must not assume all final side effects have finished.

Call it only after romance, barter, or the campaign flow have obtained live Heroes and explicitly accepted the model result. Do not set `Hero.Spouse` directly, and do not call it just to ask whether the two can marry.

## Dependencies

```text
Romance / barter / campaign owner
  -> Campaign.Current.Models.MarriageModel
      -> MarriageAction.Apply(firstHero, secondHero, showNotification)
          -> Hero.Spouse and ChangeRelationAction
          -> CampaignEvents.BeforeHeroesMarried
          -> ChangeGovernor / DisbandArmy / MakeHeroFugitive / party cleanup
          -> ChangeRomanticStateAction(Marriage)
```

**Upstream:** [MarriageModel](../../campaign/MarriageModel), [Hero](../../campaign/Hero), the romance Behavior, and the [MarriageBarterable](../../campaign/MarriageBarterable) flow supply the pairing and acceptance result.  
**Downstream:** [CampaignEvents](../../campaign/CampaignEvents) and [CampaignEventDispatcher](../../campaign/CampaignEventDispatcher) notify Behaviors; [Clan](../../campaign/Clan), [MobileParty](../../campaign/MobileParty), and the settlement/governor systems consume the membership and position changes.  
**Related Actions:** [ChangeRelationAction](../ChangeRelationAction), [ChangeRomanticStateAction](../ChangeRomanticStateAction), [ChangeGovernorAction](../ChangeGovernorAction), [DisbandArmyAction](../DisbandArmyAction), [MakeHeroFugitiveAction](../MakeHeroFugitiveAction).

## Key Entry Points & State Order

### `Apply`

```csharp
public static void Apply(Hero firstHero, Hero secondHero, bool showNotification = true)
```

`showNotification` is passed to `OnBeforeHeroesMarried`; the relation Action is called with `showQuickNotification: false`. The important observable order is:

1. `MarriageModel.IsCoupleSuitableForMarriage` first decides whether the whole operation continues.
2. Write `Spouse` bidirectionally.
3. `ChangeRelationAction.ApplyRelationChangeBetweenHeroes` applies the relation delta computed by the model.
4. `MarriageModel.GetClanAfterMarriage` chooses the target Clan; the source may swap the Hero argument order so the Hero on the target-Clan side is processed first.
5. Dispatch `CampaignEvents.BeforeHeroesMarried`.
6. Perform Clan cleanup for any Hero that needs to migrate.
7. End the courtship and write the marriage romance state via `ChangeRomanticStateAction.Apply`.

## Model/Action Boundary

Use the Model to query and construct proposals; call the Action only after the proposal/decision is accepted:

| Goal | Correct boundary | Reason |
| --- | --- | --- |
| Check pair eligibility | `Campaign.Current.Models.MarriageModel.IsCoupleSuitableForMarriage` | Does not change the Hero. |
| Compute relation or target Clan | `GetEffectiveRelationIncrease` / `GetClanAfterMarriage` | The current Model holds the versioned rules. |
| Commit an accepted marriage | `MarriageAction.Apply` | Performs the full state and event cascade. |
| Observe a marriage commit | `CampaignEvents.BeforeHeroesMarried` | It is a notification boundary, not a second commit entry. |

## Real Current-Campaign Examples

### Pick a model-approved spouse from the current Campaign

The vanilla campaign obtains Heroes from the current romance/offer flow. The example below uses the same set of live objects and queries the current Model before committing:

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;

public static void MarryMainHeroWithEligibleHero()
{
    if (Campaign.Current == null || Hero.MainHero == null)
        return;

    Hero partner = Hero.AllAliveHeroes.FirstOrDefault(hero =>
        hero != Hero.MainHero &&
        Campaign.Current.Models.MarriageModel.IsCoupleSuitableForMarriage(Hero.MainHero, hero));
    if (partner == null)
        return;

    MarriageAction.Apply(Hero.MainHero, partner, showNotification: false);
}
```

This is an immediate world change. A real mod should place it after its own already-accepted quest, barter, or decision state, and should not treat "the first eligible person" as a player-facing proposal system.

### Observe the pre-marriage cleanup-stage event

```csharp
using TaleWorlds.CampaignSystem;

private void RegisterEvents()
{
    CampaignEvents.BeforeHeroesMarried.AddNonSerializedListener(this, OnBeforeHeroesMarried);
}

private void OnBeforeHeroesMarried(Hero firstHero, Hero secondHero, bool showNotification)
{
    RememberMarriage(firstHero.StringId, secondHero.StringId, showNotification);
}
```

Read the passed-in Hero in the callback; do not assume the outgoing party, governor, or final romance cleanup is already complete.

## Risks & Save Boundaries

- **The Action trusts Campaign state.** It reads `Campaign.Current.Models` immediately; calling it during module load, the main menu, or the Campaign teardown phase may fail before returning.
- **An unsuitable pair is a no-op.** If the UI or a quest needs to explain a rejection, query the current Model first; do not read "the call returned" as acceptance success.
- **The Spouse write is a coupled operation.** Setting only one side's `Spouse` skips relation, courtship, romance state, Clan, and party cleanup, which can leave an asymmetric marriage in the save.
- **Clan movement has destructive side effects.** When a Hero moves across kingdom contexts it may leave an army; an army leader may cause the army to disband; a lord party's leader may enter the disband path.
- **Governor and party references may go stale during the call.** Event listeners should copy stable ids, re-acquire objects on later ticks, and not keep treating the old party or governor reference as unchanged.
- **Event timing is not final-state timing.** `BeforeHeroesMarried` fires after spouse/relation are written but before Clan coordination and the final romance state. Do not recursively call `MarriageAction.Apply` on the same pair from a listener.
- **Save boundary:** persist stable Hero ids and your own accepted-decision state, do not serialize transient pairing references, and do not assume the save's event listeners are restored by `SyncData`.

## Navigation

- **Parent:** [Campaign extension API](../) · [Campaign system](../../campaign/)
- **Siblings:** [ChangeRelationAction](../ChangeRelationAction) · [ChangeRomanticStateAction](../ChangeRomanticStateAction) · [ChangeKingdomAction](../ChangeKingdomAction)
- **Related entities:** [Hero](../../campaign/Hero) · [Clan](../../campaign/Clan) · [MobileParty](../../campaign/MobileParty) · [MarriageModel](../../campaign/MarriageModel)
- **Events & cleanup:** [CampaignEvents](../../campaign/CampaignEvents) · [ChangeGovernorAction](../ChangeGovernorAction) · [DisbandArmyAction](../DisbandArmyAction) · [MakeHeroFugitiveAction](../MakeHeroFugitiveAction)
