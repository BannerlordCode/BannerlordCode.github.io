---
title: "MarriageAction"
description: "Commits a model-approved Hero marriage, applies the relation and romance transitions, and reconciles Clan, governor, army, and party state."
---
# MarriageAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public static class MarriageAction`  
**Base:** none (static class)  
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/MarriageAction.cs`

## One-line responsibility

Commits a suitable pair of Heroes to marriage and performs the related spouse, relation, romance, Clan, governor, army, party, and home-settlement updates.

## Mental model

`MarriageAction` is the Campaign **commit step**. The active [MarriageModel](../../campaign/MarriageModel) decides whether the couple is suitable, what relation increase applies, and which Clan should own the married Heroes afterward. `MarriageAction.Apply` consumes those decisions and immediately mutates the world; it is not a proposal, preview, barter acceptance, or suitability query.

When the model rejects the pair, the method prints a diagnostic and returns without changing either Hero. When it accepts the pair, the source first sets both `Spouse` references and applies the effective relation increase. It chooses the post-marriage Clan, dispatches `CampaignEvents.BeforeHeroesMarried`, then reconciles each Hero whose Clan differs from that result. That reconciliation can remove a governor, detach or disband an army, finish hostile actions, remove the Hero from a party roster, make the Hero fugitive, disband a Lord party, change the Hero's Clan, and update home settlements. Finally it ends both courtships and applies [ChangeRomanticStateAction](../ChangeRomanticStateAction) with `RomanceLevelEnum.Marriage`.

The event name contains `Before`, but in v1.4.5 it is dispatched **after** spouse and relation state have been written and **before** the Clan-change cleanup and final romantic-state action. Listeners must use the supplied Heroes and not assume every final side effect has already happened.

Use this Action only after the owning romance, barter, or campaign flow has acquired live Heroes and deliberately accepted the model result. Do not set `Hero.Spouse` directly, and do not call it merely to ask whether two Heroes can marry.

## Dependency graph

```text
Romance / barter / campaign owner
  -> Campaign.Current.Models.MarriageModel
      -> MarriageAction.Apply(firstHero, secondHero, showNotification)
          -> Hero.Spouse and ChangeRelationAction
          -> CampaignEvents.BeforeHeroesMarried
          -> ChangeGovernor / DisbandArmy / MakeHeroFugitive / party cleanup
          -> ChangeRomanticStateAction(Marriage)
```

**Upstream:** [MarriageModel](../../campaign/MarriageModel), [Hero](../../campaign/Hero), romance behaviors, and the [MarriageBarterable](../../campaign/MarriageBarterable) flow provide the pair and the acceptance decision.  
**Downstream:** [CampaignEvents](../../campaign/CampaignEvents) and [CampaignEventDispatcher](../../campaign/CampaignEventDispatcher) notify Behaviors; [Clan](../../campaign/Clan), [MobileParty](../../campaign/MobileParty), and settlement/governor systems consume the resulting ownership and location changes.  
**Related Actions:** [ChangeRelationAction](../ChangeRelationAction), [ChangeRomanticStateAction](../ChangeRomanticStateAction), [ChangeGovernorAction](../ChangeGovernorAction), [DisbandArmyAction](../DisbandArmyAction), [MakeHeroFugitiveAction](../MakeHeroFugitiveAction).

## Key entry point and state order

### `Apply`

```csharp
public static void Apply(Hero firstHero, Hero secondHero, bool showNotification = true)
```

`showNotification` is passed to `OnBeforeHeroesMarried`; the relation change itself is called with `showQuickNotification: false`. The method has no result or rollback object. The important observable order is:

1. `MarriageModel.IsCoupleSuitableForMarriage` gates the whole operation.
2. `Spouse` is assigned in both directions.
3. `ChangeRelationAction.ApplyRelationChangeBetweenHeroes` applies the model's effective increase.
4. `MarriageModel.GetClanAfterMarriage` chooses the destination Clan; the Hero argument order may be swapped so the destination-side Hero is processed first.
5. `CampaignEvents.BeforeHeroesMarried` is dispatched.
6. Clan-change cleanup runs for each Hero that must move.
7. Courtships end and `ChangeRomanticStateAction.Apply` marks the romance level as marriage.

## Model versus Action

Use the model to answer a question or build a proposal, and use the Action only after that proposal is accepted:

| Goal | Correct boundary | Why |
| --- | --- | --- |
| Check whether a pair is eligible | `Campaign.Current.Models.MarriageModel.IsCoupleSuitableForMarriage` | It does not mutate Heroes. |
| Compute relation or destination Clan | `GetEffectiveRelationIncrease` / `GetClanAfterMarriage` | The active model owns game-rule variation. |
| Commit the accepted marriage | `MarriageAction.Apply` | It performs the coupled state and event cascade. |
| Observe a committed marriage | `CampaignEvents.BeforeHeroesMarried` | It is a notification boundary, not a second commit path. |

## Real current-Campaign examples

### Choose a live model-approved partner

The stock campaign obtains Heroes from the current romance/offer flow. This example uses the same live Campaign collection and asks the active model before committing:

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

This is an immediate world change. A real mod should place it behind its own accepted quest, barter, or decision state rather than using “first suitable Hero” as a player-facing marriage proposal system.

### Observe the pre-cleanup event

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

Read the supplied Heroes at the callback. Do not assume the outgoing party, governor, or final romance cleanup is already complete at this point.

## Risks and save boundaries

- **The Action trusts Campaign state.** It immediately reads `Campaign.Current.Models`; calling it during module load, the main menu, or Campaign teardown can fail before any useful result is available.
- **An unsuitable pair is a no-op, not a recoverable failure.** Check the active model first when a UI or quest needs to explain rejection; do not infer acceptance from a call returning.
- **Spouse writes are coupled.** Directly setting one `Spouse` property skips relation, courtship, romantic-state, Clan, and party cleanup and can leave a save with asymmetric marriage state.
- **Clan movement has destructive side effects.** A Hero who changes kingdom context may be detached from an army; an army leader can cause the army to disband. A Lord party led by the moving Hero can enter the disband path.
- **Governor and party references can disappear during the call.** Behaviors listening to the event should copy stable IDs and reacquire live objects on later ticks instead of continuing to use a party or governor reference as if nothing changed.
- **Event timing is not final-state timing.** `BeforeHeroesMarried` fires after spouse/relation writes but before Clan reconciliation and final romance state. Do not recursively call `MarriageAction.Apply` for the same pair from the listener.
- **Save boundary:** persistent mod state should record stable Hero IDs and its own accepted decision state. Do not serialize a temporary pair reference or assume a saved event listener will be restored by `SyncData`.

## Navigation

- **Parent:** [Campaign extension API](../) · [Campaign system](../../campaign/)
- **Siblings:** [ChangeRelationAction](../ChangeRelationAction) · [ChangeRomanticStateAction](../ChangeRomanticStateAction) · [ChangeKingdomAction](../ChangeKingdomAction)
- **Related entities:** [Hero](../../campaign/Hero) · [Clan](../../campaign/Clan) · [MobileParty](../../campaign/MobileParty) · [MarriageModel](../../campaign/MarriageModel)
- **Events and cleanup:** [CampaignEvents](../../campaign/CampaignEvents) · [ChangeGovernorAction](../ChangeGovernorAction) · [DisbandArmyAction](../DisbandArmyAction) · [MakeHeroFugitiveAction](../MakeHeroFugitiveAction)
