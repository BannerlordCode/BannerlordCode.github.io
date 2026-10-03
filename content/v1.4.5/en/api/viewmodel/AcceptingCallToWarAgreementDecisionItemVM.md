---
title: "AcceptingCallToWarAgreementDecisionItemVM"
description: "The decisions-panel row for \"should we accept this call to war\". It extends DecisionItemBaseVM and, in InitValues, flattens the decision object into two banners, two leaders, a single strength-comparison bar, and the target kingdom's other wars, all ready for prefab binding."
---
# AcceptingCallToWarAgreementDecisionItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes  
**Module:** TaleWorlds.CampaignSystem.ViewModelCollection  
**Type:** `public class AcceptingCallToWarAgreementDecisionItemVM : DecisionItemBaseVM`  
**Base:** `DecisionItemBaseVM`  
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes/AcceptingCallToWarAgreementDecisionItemVM.cs`

## Overview

When an `AcceptCallToWarAgreementDecision` reaches the kingdom's domestic panel, the screen does not use it directly. `KingdomDecisionsVM` dispatches on the decision type and constructs this class — line 320:

```
return new AcceptingCallToWarAgreementDecisionItemVM(decision9, OnDecisionOver);
```

This class does exactly one thing: **flatten a decision object into a row of bindable strings and child view models**. The constructor does only two things — store the decision reference and set `DecisionType = 8` (which is how the panel recognises "this is the call-to-war row"). All content is produced in `protected override void InitValues()`, which the base class calls during initialization.

`InitValues` emits four groups:

- **Text.** `NameText` is `str_kingdom_decision_accept_call_to_war_agreement`; `AcceptCallToWarAgreementDescriptionText` is the matching `_desc` text with the `CALLING_KINGDOM` and `KINGDOM_TO_CALL_TO_WAR_AGAINST` variables filled with the proposer and target names; `LeaderText` is the generic `str_leader`.
- **Banners.** `SourceFactionBanner` / `TargetFactionBanner`, both built as `new BannerImageIdentifierVM(kingdom.Banner, nineGrid: true)` so borders survive small sizes.
- **Leaders.** `SourceFactionLeader` / `TargetFactionLeader`, both `new HeroVM(kingdom.Leader)`.
- **Comparison and context.** `ComparedStats` is an `MBBindingList<KingdomWarComparableStatVM>` holding exactly one entry — both sides' `CurrentTotalStrength` plus their faction colours as bar-end colours, with the scale ceiling hard-coded to `10000`. `TargetFactionOtherWars` lists the target's current wars, excluding the war with the proposer itself and excluding rebels and bandits; `IsTargetFactionOtherWarsVisible` is just its `Count > 0`.

## Mental Model

Read it as **"a one-shot, one-way translator from a decision object into a panel row"**:

- **Who news it up.** `KingdomDecisionsVM`, which calls `new` with `(decision, onDecisionOver)` while building the concrete decision item. `onDecisionOver` is the base class's callback for closing the panel / advancing the flow when the decision concludes; this class never touches it. **The only way to replace it is to take over `KingdomDecisionsVM`'s dispatch** — subclassing buys you nothing, because every property is overwritten with read-only display values inside `InitValues`.
- **Who holds the reference.** The owning `KingdomDecisionsVM` / decisions screen. The class caches no self-reference, but it holds `_callToWarAgreementDecision` and re-derives two things from the base class's `_decision` field: `_callingKingdom` and `TargetFaction`.
- **What it binds to.** All ten `[DataSourceProperty]` members listed above. They are all `get/set`, but they are **semantically read-only** — the panel only reads them, and the sole writer is `InitValues` itself.
- **When it is disposed.** The base class `DecisionItemBaseVM.OnFinalize()`. This class **does not override `OnFinalize`** and registers no `CampaignEvents` or `Game.Current.EventManager` listeners, so it carries no leak risk of its own. Its `_callToWarAgreementDecision` is a plain reference to campaign state, not an event subscription.
- **`DecisionType = 8` is a hard-coded contract.** A magic number written at construction time, not an enum member. Prefab and calling code identify the row by it. Reusing the magic number for your own decision type will make the two collide in the same panel slot.
- **`InitValues` runs once.** The base class calls it during panel initialization. Afterwards, if the proposer's leader changes or strengths shift, neither `ComparedStats` nor `SourceFactionLeader` **refreshes on its own** — an external `RefreshValues()` will not help, because the base `RefreshValues` does not re-run `InitValues`. This is the usual source of stale display in this family of item models.
- **Typical misuse.** Treating it as a template you can `new` up for a custom decision row and then partially populate. The constructor demands a genuine `AcceptCallToWarAgreementDecision`; passing a different `KingdomDecision` NREs inside `_callingKingdom` (`(_decision as AcceptCallToWarAgreementDecision).CallingKingdom`) rather than failing readably.

## Key members

| Member | Signature | What it is actually for |
| --- | --- | --- |
| Constructor | `public AcceptingCallToWarAgreementDecisionItemVM(AcceptCallToWarAgreementDecision decision, Action onDecisionOver)` | Called by `KingdomDecisionsVM`'s dispatch. Stores the decision reference and sets `DecisionType = 8`; **populates nothing** — that is deferred to `InitValues`. |
| `InitValues` | `protected override void InitValues()` | The only fill point: fetches the two texts, builds both nine-grid banners, builds two `HeroVM`s, creates `ComparedStats` with a single strength comparison, walks `FactionHelper.GetStances(TargetFaction)` to build `TargetFactionOtherWars`, and finally sets `IsTargetFactionOtherWarsVisible` from its count. |
| `TargetFaction` | `public IFaction TargetFaction` | Read-only expression property: casts `_decision` and takes `KingdomToCallToWarAgainst` — the kingdom you were called against. NREs if the decision type is wrong. |
| `_callingKingdom` | `private Kingdom _callingKingdom` | Likewise derived from `_decision`, taking `CallingKingdom` — the kingdom that made the offer. Used only inside `InitValues`; never exposed to the panel. |
| `NameText` | `[DataSourceProperty] public string NameText` | Panel title, the fixed text `str_kingdom_decision_accept_call_to_war_agreement`. |
| `AcceptCallToWarAgreementDescriptionText` | `[DataSourceProperty] public string AcceptCallToWarAgreementDescriptionText` | Body copy, already carrying the `CALLING_KINGDOM` and `KINGDOM_TO_CALL_TO_WAR_AGAINST` variables. A mod that rewrites the text must re-supply both variables. |
| `SourceFactionBanner` / `TargetFactionBanner` | `[DataSourceProperty] public BannerImageIdentifierVM ...` | The two faction banners, constructed with `nineGrid: true`. |
| `SourceFactionLeader` / `TargetFactionLeader` | `[DataSourceProperty] public HeroVM ...` | Portrait/name view models for both leaders, each `new HeroVM(kingdom.Leader)`. |
| `ComparedStats` | `[DataSourceProperty] public MBBindingList<KingdomWarComparableStatVM>` | The comparison-bar collection. Vanilla puts exactly one total-strength entry, with the scale ceiling hard-coded to `10000`, so the bar saturates well below real late-game army sizes. |
| `TargetFactionOtherWars` | `[DataSourceProperty] public MBBindingList<KingdomDiplomacyFactionItemVM>` | The target's ongoing wars, minus the war with the proposer, minus rebel clans and bandit factions, keeping only pairs where both sides are kingdom factions or the player's own faction. |
| `IsTargetFactionOtherWarsVisible` | `[DataSourceProperty] public bool IsTargetFactionOtherWarsVisible` | A cached `TargetFactionOtherWars.Count > 0` for deciding whether the panel shows that block. **Do not** set it externally: it does not rebuild the list in the other direction. |

## Real Example

Producing a row of this shape yourself — note that `_callingKingdom`'s access path is what pins the decision type:

```csharp
using TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes;

// The final shape the panel sees: every property already filled by InitValues
public string DescribeCallToWarDecision(AcceptingCallToWarAgreementDecisionItemVM item)
{
    return item.NameText + " | " + item.TargetFaction.Name.ToString() + " | " + item.AcceptCallToWarAgreementDescriptionText;
}
```

Reproducing the single strength-comparison bar from `InitValues` — the part mods most often rewrite:

```csharp
using TaleWorlds.CampaignSystem.KingdomManagement.Decisions.ItemTypes;
using TaleWorlds.Core;
using TaleWorlds.Library;
using TaleWorlds.Localization;

public MBBindingList<KingdomWarComparableStatVM> BuildStrengthStat(Kingdom callingKingdom, Kingdom targetKingdom)
{
    string callerColor = Color.FromUint(callingKingdom.Color).ToString();
    string targetColor = Color.FromUint(targetKingdom.Color).ToString();

    MBBindingList<KingdomWarComparableStatVM> stats = new MBBindingList<KingdomWarComparableStatVM>();
    stats.Add(new KingdomWarComparableStatVM(
        (int)callingKingdom.CurrentTotalStrength,
        (int)targetKingdom.CurrentTotalStrength,
        GameTexts.FindText("str_strength"),
        callerColor,
        targetColor,
        10000));
    return stats;
}
```

And the "target's other wars" filter — the longest conditional inside `InitValues`:

```csharp
using Helpers;
using TaleWorlds.CampaignSystem.KingdomManagement.Diplomacy;

public MBBindingList<KingdomDiplomacyFactionItemVM> BuildOtherWars(Kingdom callingKingdom, IFaction targetFaction)
{
    MBBindingList<KingdomDiplomacyFactionItemVM> wars = new MBBindingList<KingdomDiplomacyFactionItemVM>();

    foreach (StanceLink stance in FactionHelper.GetStances(targetFaction))
    {
        bool unrelatedToCalling = stance.Faction1 != callingKingdom && stance.Faction2 != callingKingdom;
        bool bothRealFactions =
            (stance.Faction1.IsKingdomFaction || stance.Faction1.Leader == Hero.MainHero) &&
            (stance.Faction2.IsKingdomFaction || stance.Faction2.Leader == Hero.MainHero);

        if (stance.IsAtWar && unrelatedToCalling && bothRealFactions
            && !stance.Faction1.IsRebelClan && !stance.Faction2.IsRebelClan
            && !stance.Faction1.IsBanditFaction && !stance.Faction2.IsBanditFaction)
        {
            IFaction other = stance.Faction1 == targetFaction ? stance.Faction2 : stance.Faction1;
            wars.Add(new KingdomDiplomacyFactionItemVM(other));
        }
    }

    return wars;
}
```

## Risks and crash boundaries

- **`TargetFaction as Kingdom` followed by an immediate dereference.** `InitValues` contains `Kingdom kingdom = TargetFaction as Kingdom;` and then reads `kingdom.Color` on the next line. `TargetFaction`'s static type is `IFaction`, so if a decision is ever constructed with a non-`Kingdom` `IFaction` target this is a silent NRE. Vanilla never hits it because `KingdomToCallToWarAgainst` really is a `Kingdom`; **subclassing and passing a hand-made decision does hit it**.
- **No null defence anywhere.** `_callingKingdom.Leader`, `TargetFaction.Leader`, and both `CurrentTotalStrength` values are dereferenced bare. A headless context or a decision caught in an odd intermediate state crashes outright.
- **Lifecycle.** Registers no listeners and does not override `OnFinalize`, so it **does not leak**. It merely references `Kingdom` and `Hero`, which are `MBObjectManager`-owned global singletons; a view model holding them extends nothing.
- **Serialization.** None. No `SyncData`, no `IDataStore`. Persistence of the decision itself is the `KingdomDecision` side's business; the item model is rebuilt every time the panel opens.
- **Stale display.** `InitValues` runs once at initialization; `LeaderText`, `ComparedStats`, and `SourceFactionLeader` do not track later changes. A panel left open shows the old leader and old strengths.
- **`DecisionType = 8` magic number.** Hard-coded rather than an enum, and not guaranteed stable across versions. A future version that inserts a decision type can shift the number while prefabs and pages still judge by the old one.
- **Native boundary.** Pure managed code, no contact with `Bannerlord.Native`. `Color.FromUint` is a plain `TaleWorlds.Library` C# wrapper.
- **The `10000` ceiling** is baked into the constructor call, not configurable. A mod that wants the comparison bar to stay readable at large army sizes has to recompute and overwrite `ComparedStats` itself.

## Dependencies

- ↑ Base class: [DecisionItemBaseVM](../DecisionItemBaseVM) — supplies `_decision`, `DecisionType`, `InitValues()`, and the decision-over callback
- ↔ Sibling: [AcceptCallToWarOfferNotificationItemVM](../AcceptCallToWarOfferNotificationItemVM) — the same offer as seen from the map notification; this class is its domestic-panel counterpart
- → Decision type: `AcceptCallToWarAgreementDecision` (zh: [../../campaign-ext/AcceptCallToWarAgreementDecision](../../campaign-ext/AcceptCallToWarAgreementDecision), en: [../../campaign/AcceptCallToWarAgreementDecision](../../campaign/AcceptCallToWarAgreementDecision))
- → Constructor caller: `KingdomDecisionsVM` (zh: [../../campaign-ext/KingdomDecisionsVM](../../campaign-ext/KingdomDecisionsVM), en: [../../campaign/KingdomDecisionsVM](../../campaign/KingdomDecisionsVM))
- → Stance source: [FactionHelper](../../system/FactionHelper) — `GetStances` produces the `StanceLink` list
- → Leader view model: [HeroVM](../HeroVM)
- → Banner image: [BannerImageIdentifierVM](../../core-extra/BannerImageIdentifierVM)
- → List container: [MBBindingList](../../core-extra/MBBindingList)
- → Text lookup: [GameTextManager](../../core-extra/GameTextManager)
