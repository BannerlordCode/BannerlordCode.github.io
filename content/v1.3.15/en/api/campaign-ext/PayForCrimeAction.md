---
title: "PayForCrimeAction"
description: "A campaign transaction that settles the main hero's crime rating with gold, influence, punishment, or execution and triggers the related state changes."
---
# PayForCrimeAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public static class PayForCrimeAction`  
**Base:** `System.Object` (static class; cannot be instantiated)  
**Source:** `TaleWorlds.CampaignSystem/Actions/PayForCrimeAction.cs`

## Responsibility

Settles the main hero's crime rating with an `IFaction` by applying the selected `CrimeModel.PaymentMethod` and its downstream campaign actions.

## Overview

`PayForCrimeAction` is the campaign transaction behind the crime-settlement menu. It is not just a write to `IFaction.MainHeroCrimeRating`: `Apply` can pay gold, spend player-clan influence, wound or kill the main hero, and then lower the crime rating if the hero survived. The official `CrimeCampaignBehavior` first reads the price for a menu option and calls `Apply` only from the confirmed consequence.

## Mental Model

Treat the API as "quote, then commit". `GetClearCrimeCost` asks the current `CrimeModel` for a price using the faction, payment method, and minimum acceptable crime rating. It reads model state and does not validate the menu, the current settlement, the hero's balance, or whether the faction is the one currently shown by the crime menu. `Apply` synchronously enters the private transaction implementation and returns no success value.

`PaymentMethod` is a flags enum. Recognized flags run in a fixed order: gold, influence, punishment, then execution. A combined `Gold | Punishment` payment therefore spends gold before rolling the punishment outcome. If the main hero is not killed, the action reduces the faction's crime rating to the smaller of its current value and `CrimeModel.GetCrimeRatingAfterPunishment()` through `ChangeCrimeRatingAction`.

Do not replace this action with direct writes to `Hero.MainHero.Gold`, `Clan.PlayerClan.Influence`, or `IFaction.MainHeroCrimeRating`. The downstream actions publish trade, influence, death, and crime-rating events that campaign behaviors and other mods may depend on.

## Public Entries and Timing

```csharp
public static float GetClearCrimeCost(
    IFaction faction,
    CrimeModel.PaymentMethod paymentMethod)

public static void Apply(
    IFaction faction,
    CrimeModel.PaymentMethod paymentMethod)
```

| Member | When to call | Side effects and boundary |
| --- | --- | --- |
| `GetClearCrimeCost(faction, paymentMethod)` | While building a menu option, tooltip, or pre-submit resource check | Reads `Campaign.Current.Models.CrimeModel.GetCost` using `GetMinAcceptableCrimeRating`; it does not mutate campaign state. |
| `Apply(faction, paymentMethod)` | From a confirmed one-shot consequence after the caller has checked the faction, payment method, and required resources | Runs synchronously with no idempotence or success result. It may mutate gold, influence, hero health/death, and crime rating, then dispatch the events owned by those actions. |
| `ApplyInternal` | Only through `Apply`; it is private to the game code | Defines the transaction order and whether a death skips the final crime-rating update. |

## Payment Methods and State Cascade

`CrimeModel.PaymentMethod` is declared with `[Flags]`. The source defines `Gold`, `Influence`, `Punishment`, `Execution`, and `ExMachina`.

| Flag or branch | State change | Downstream cascade |
| --- | --- | --- |
| `Gold` | Uses `Hero.MainHero` as payer and converts the model price to `int` | `GiveGoldAction.ApplyBetweenCharacters` clamps the actual debit to the hero's current gold and dispatches the gold-transaction event; `SkillLevelingManager.OnBribeGiven` is then called with the requested amount. |
| `Influence` | Subtracts the model price from `Clan.PlayerClan` | `ChangeClanInfluenceAction.Apply` owns the influence mutation and its event cascade. |
| `Punishment` | Computes a death chance from current hit points; on survival, calls `MakeWounded` and has a 50% random chance to call `SkillLevelingManager.OnMainHeroTortured` | A death calls `KillCharacterAction.ApplyByMurder`; a surviving hero continues to the crime-rating step. |
| `Execution` | Marks the death path unconditionally | `KillCharacterAction.ApplyByMurder` performs the hero-death cascade and the crime-rating step is skipped. |
| `ExMachina` | Has no direct payment branch in `ApplyInternal` | Unless another recognized flag kills the hero, the method still reaches the post-punishment crime-rating update. Treat this flag as an engine-specific workflow contract, not as a generic free-payment option. |
| Surviving main hero | Sets the target rating to `MathF.Min(faction.MainHeroCrimeRating, CrimeModel.GetCrimeRatingAfterPunishment())` | `ChangeCrimeRatingAction.Apply` clamps the value, writes `MainHeroCrimeRating`, can run its relation/war threshold logic, and dispatches `OnCrimeRatingChanged`. |

`GiveGoldAction` clamps the debit, but `PayForCrimeAction` still proceeds with the crime settlement. Resource availability is therefore a caller responsibility; do not use the downstream clamp as a substitute for the official menu checks. The same applies to player-clan influence.

## Official Call Sites

`CrimeCampaignBehavior` obtains the target from `Settlement.CurrentSettlement.MapFaction`. Its menu conditions call `GetClearCrimeCost` to display gold or influence costs and check the corresponding balance. The menu consequences call `Apply` for gold, influence, punishment, execution, or the combined `Gold | Punishment` path. After punishment, the behavior checks `Hero.MainHero.DeathMark` before switching menus or finishing the encounter.

This timing matters for mods: a condition callback may run more than once while the menu is being displayed, but a consequence is the one-shot commit point. Calling `Apply` from a condition, daily tick, or save synchronization callback can repeat a persistent transaction.

## Real Example: Pay the Current Settlement Fine

This follows the official acquisition path for the gold option: it takes the faction from the current settlement, quotes the current model, checks the main hero's balance, and commits once.

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Settlements;

public static class CrimeFine
{
    public static void PayAtCurrentSettlement()
    {
        if (Campaign.Current == null)
        {
            return;
        }

        Settlement settlement = Settlement.CurrentSettlement;
        IFaction faction = settlement?.MapFaction;
        if (faction == null)
        {
            return;
        }

        CrimeModel.PaymentMethod method = CrimeModel.PaymentMethod.Gold;
        int cost = (int)PayForCrimeAction.GetClearCrimeCost(faction, method);
        if (Hero.MainHero.Gold < cost)
        {
            return;
        }

        PayForCrimeAction.Apply(faction, method);
    }
}
```

Call this shape from a confirmed campaign-menu consequence or an equivalent one-shot workflow. Do not register it in both a condition and a consequence, and do not assume that returning from `Apply` means the main hero is still alive.

## Risks and Save Boundary

- `Campaign.Current`, `Hero.MainHero`, `Clan.PlayerClan`, the faction, and the active `CrimeModel` must exist. Calling during module initialization, the main menu, or campaign teardown can reach invalid singleton or model state.
- `Apply` has no idempotence guard. Repeating it can repeat resource deductions, punishment rolls, death, and event dispatch. Never call it from a re-entered menu condition, `SyncData`, or a load callback.
- `Punishment` and `Execution` are hero-lifecycle entry points, not presentation effects. Re-check `Hero.MainHero.DeathMark` after the call before continuing with menu, encounter, or party logic.
- Do not pass arbitrary unsupported flag combinations. In particular, `ExMachina` has no resource branch but still reaches the surviving-hero crime-rating update.
- Direct field or roster edits bypass the event contracts of gold, influence, death, and crime rating. The resulting object graph can look correct in a menu while listeners and saved campaign state disagree.

**Save boundary:** `Apply` is a synchronous mutation boundary, not a serializable or replayable operation. Gold, influence, hero health/death, and crime rating are campaign state that can be written into a save after the call returns. Keep mod-owned follow-up data in a `CampaignBehaviorBase.SyncData` implementation and use the [SaveManager](../../save-system/SaveManager) save system for persistent data; never invoke this action while reading or writing save data. The crime-settlement event cascade is runtime behavior and is not a substitute for rebuilding state after load.

## Version Note

The public entries, payment branches, order, and major side effects match between v1.3.15 and v1.4.5. The v1.4.5 source is decompiled and omits some downstream optional arguments at call sites, but the public `GetClearCrimeCost` and `Apply` contract is unchanged. Recompile against the target version and let that version's `CrimeModel` supply prices and thresholds.

## Dependencies

- **Upstream:** [CrimeCampaignBehavior](../CrimeCampaignBehavior) supplies `Settlement.CurrentSettlement.MapFaction`, quotes the cost, checks resources, and commits from a menu consequence; [Settlement](../../campaign/Settlement) is the real campaign context used by that path.
- **Model:** [CrimeModel](../CrimeModel) supplies the minimum rating, cost, and post-punishment rating.
- **Downstream actions:** [GiveGoldAction](../GiveGoldAction), [ChangeClanInfluenceAction](../ChangeClanInfluenceAction), [KillCharacterAction](../KillCharacterAction), and [ChangeCrimeRatingAction](../ChangeCrimeRatingAction) own the persistent mutations and their event cascades.
- **Save boundary:** [SaveManager](../../save-system/SaveManager) serializes campaign state; this action must run in gameplay flow, while mod-owned persistent state belongs in a campaign behavior's save synchronization.

## Navigation

- **Parent:** [campaign-ext API](../)
- **Sibling:** [CrimeModel](../CrimeModel) · [ChangeCrimeRatingAction](../ChangeCrimeRatingAction)
- **Children:** `GetClearCrimeCost` and `Apply` are the two public entries; their timing and side effects are documented in [Public Entries and Timing](#public-entries-and-timing).
- **Related:** [Hero](../../campaign/Hero) · [Clan](../../campaign/Clan) · [CampaignEvents](../CampaignEvents)
