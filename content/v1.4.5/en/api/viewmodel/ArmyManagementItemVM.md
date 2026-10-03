---
title: "ArmyManagementItemVM"
description: "One candidate party row in the army management screen. Its constructor computes distance, strength, ships and influence cost exactly once, and a private UpdateEligibility keeps \"can I join\" and \"why not\" together. The sorters read precisely its DistInTime / Cost / Strength / ShipCount / LeaderNameText / Clan."
---
# ArmyManagementItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement  
**Module:** TaleWorlds.CampaignSystem.ViewModelCollection  
**Type:** `public class ArmyManagementItemVM : ViewModel`  
**Base:** `ViewModel`  
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement/ArmyManagementItemVM.cs`

## Overview

The left column of the army management screen lists parties you can enrol, and each one is an instance of this class. It carries two unrelated responsibilities:

1. **A one-shot snapshot taken at construction** (`:401-430`): read the leader portrait, banner, relation, strength, ship count, distance to the main party, and influence cost, then `RefreshValues()` to build the text.
2. **Ongoing eligibility evaluation**: `UpdateEligibility()` is called repeatedly, updating `IsEligible` and `_eligibilityReason` together.

Its three outward properties exist for the sorters: `DistInTime` (time to arrive), `Cost` (influence price), and `Clan` / `LeaderNameText` (consumed by `ItemClanComparer` and `ItemNameComparer`). `Strength` and `ShipCount` are bindable properties as well.

## That `float.MaxValue` in the constructor

Distance has one very specific branch (`:415-424`):

```csharp
_distance = DistanceHelper.FindClosestDistanceFromMobilePartyToMobileParty(Party, MobileParty.MainParty, Party.NavigationCapability);
if (MobileParty.MainParty.IsCurrentlyAtSea && !Party.HasNavalNavigationCapability)
{
    DistInTime = 2.1474836E+09f;
}
else
{
    DistInTime = TaleWorlds.Library.MathF.Ceiling(_distance / Party.Speed);
    Cost = armyManagementCalculationModel.CalculatePartyInfluenceCost(MobileParty.MainParty, mobileParty);
}
```

When the main party is at sea and this party has no naval capability:

- `DistInTime` becomes **`2.1474836E+09f` — that is `float.MaxValue`** — whose purpose is to sort the party last by distance.
- 🔴 **`Cost` is never assigned at all** and stays at the field's initial value of `-1` (declared at `:52`). Since the cost sorter `ItemCostComparer` does a plain `y.Cost.CompareTo(x.Cost)`, **a `-1` sorts below every real price, so these parties float to the very top of "sort by cost"** — the exact opposite of how "sort by distance" treats them.

This is the single most treacherous inconsistency in the type.

## Mental Model

Read it as **"a read-only snapshot computed once at construction, plus a re-evaluable eligibility switch"**:

- **Who news it up.** Two sites, both in `ArmyManagementVM`'s constructor.
  - `ArmyManagementVM.cs:994` — candidate parties other than the player's: `new ArmyManagementItemVM(OnAddToCart, OnRemove, OnFocus, item)`, **all three callbacks supplied**.
  - `ArmyManagementVM.cs:997` — the player's own main party: `_mainPartyItem = new ArmyManagementItemVM(null, null, null, Hero.MainHero.PartyBelongedTo)`, **all three callbacks null**.
- **Who holds the reference.** Two lists on `ArmyManagementVM` — `PartyList` (all candidates) and `PartiesInCart` (selected). **The same instance can appear in both.**
- **What it binds to.** Thirteen members. `NameText` / `LeaderNameText` / `InArmyText` / `DistanceText` are text; `Strength` / `ShipCount` / `Relation` / `Cost` are numbers; `ClanBanner` / `LordFace` are images; `IsEligible` / `IsInCart` / `IsMainHero` / `IsAlreadyWithPlayer` / `IsTransferDisabled` / `IsFocused` / `HasShip` / `IsCostRelevant` are states; `RemoveInputKey` is the key hint.
- **When it is disposed.** **There is nothing to dispose.** No `OnFinalize` override, no event registrations. It holds a `MobileParty` reference and three callbacks. **It cannot leak by itself** — but note `Party` is a `public readonly` **field**, not a property, so external code can take the raw `MobileParty` and hold it indefinitely.
- 🔴 **`Cost` / `Strength` / `ShipCount` / `Relation` are all writable `[DataSourceProperty]`s whose setters have side effects** (see below). `ArmyManagementVM` relies on this, writing `Cost = 0` to mean "already in the army" (`:1008`).
- **`IsInCart`'s setter also calls `UpdateIsCostRelevant()`**, and so do the setters of `Cost` and `IsAlreadyWithPlayer`. **That display state is therefore jointly determined by three properties.**
- **`ShipCount`'s setter writes `HasShip = _shipCount > 0`** (`:173`), so `HasShip` should never be written directly from outside.
- **`OnAddToCart` calls `UpdateEligibility()` twice** (`:467` and `:472`) — once before invoking the callback and once after. Reading the source, that is deliberate: evaluate under the current state, join, then re-evaluate.
- 🔴 **`OnRemove` is a no-op for the main party.** It opens with `if (!IsMainHero)`, so the main party row can never be removed — which is also why the constructor gets `null` callbacks for that row.
- 🔴 **`ExecuteBeginHint` shows the *reason* when blocked, not a tooltip.** `if (!IsEligible) { MBInformationManager.ShowHint(_eligibilityReason.ToString()); return; }` — **this is the only place `_eligibilityReason` ever reaches the player.**
- **Dead code**: `_minimumPartySizeScoreNeeded = 0.4f` (`:24`) occurs exactly once in this file — the definition, with **no references anywhere**. Do not infer a party-size threshold from it.

## Key members

| Member | Signature | What it is actually for |
| --- | --- | --- |
| `Party` | `public readonly MobileParty Party` (`:22`) | **A field, not a property**, assigned from `mobileParty` at construction and immutable thereafter. External code can grab the raw campaign object and keep it — the class's one encapsulation hole. |
| `DistInTime` | `public float DistInTime { get; }` (`:68`) | The primary key of `ItemDistanceComparer`. **Set to `2.1474836E+09f` (`float.MaxValue`) when the main party is at sea and this party has no naval capability**, purely to push it last in distance order. |
| `_distance` | `public float _distance { get; }` (`:70`) | The raw distance. **Note this is a public property with an underscore prefix** — unconventional naming, but genuinely public. |
| `Clan` | `public Clan Clan { get; }` (`:72`) | The sort key for `ItemClanComparer` (which compares `Clan.Name.ToString()`). Assigned from `mobileParty.LeaderHero.Clan` at construction. |
| `CanJoinBackWithoutCost` | `public bool CanJoinBackWithoutCost` (`:26`) | **A public field**, written by `ArmyManagementVM.OnAddToCart` / `OnRemove`. When true, `UpdateEligibility()` **skips every check** and passes — used for "already in the army, may rejoin at no cost after being taken out". |
| Constructor | `public ArmyManagementItemVM(Action<ArmyManagementItemVM> onAddToCart, Action<ArmyManagementItemVM> onRemove, Action<ArmyManagementItemVM> onFocus, MobileParty mobileParty)` (`:401-430`) | **The one-shot snapshot.** Computes banner, portrait, relation, strength, ships, distance, `DistInTime`, `Cost`, `Clan`, `IsMainHero`; sets `IsTransferDisabled = IsMainHero \|\| PlayerSiege.PlayerSiegeEvent != null`; finishes with `UpdateEligibility()` + `RefreshValues()`. The main party row passes three nulls (`ArmyManagementVM.cs:997`). |
| `UpdateEligibility` | `public void UpdateEligibility()` (`:487-509`) | Updates `IsEligible` and `_eligibilityReason` together. `CanJoinBackWithoutCost` passes immediately; `IsInCart && !IsAlreadyWithPlayer` refuses with "Already added to the army."; otherwise `CheckPartyEligibility` then `CampaignUIHelper.GetMapScreenActionIsEnabledWithReason`. |
| `ExecuteAction` | `public void ExecuteAction()` (`:444-454`) | The toggle command: `OnRemove()` when already in the cart, otherwise `OnAddToCart()`. **This is the entry point the widget binds.** |
| `OnAddToCart` | `private void OnAddToCart()` (`:465-473`) | Calls `UpdateEligibility()` first, invokes `_onAddToCart(this)` only when eligible, then **calls `UpdateEligibility()` a second time** (`:472`). |
| `OnRemove` | `private void OnRemove()` (`:456-463`) | Only runs `if (!IsMainHero)`, then `_onRemove(this)` and `UpdateEligibility()`. **The main party row can never reach the callback.** |
| `ExecuteSetFocused` / `ExecuteSetUnfocused` | `public void ExecuteSetFocused()` / `ExecuteSetUnfocused()` (`:475-485`) | The first sets `IsFocused = true` then `_onFocus?.Invoke(this)`; the second sets `IsFocused = false` then **`_onFocus?.Invoke(null)`** — passing null as the "selection cleared" signal. |
| `ExecuteBeginHint` | `public void ExecuteBeginHint()` (`:523-531`) | When blocked, shows `MBInformationManager.ShowHint(_eligibilityReason.ToString())` and returns; only when eligible does it call `InformationManager.ShowTooltip(typeof(MobileParty), Party, true, true)`. **The only place `_eligibilityReason` becomes visible to the player.** |
| `UpdateIsCostRelevant` | `private void UpdateIsCostRelevant()` (`:511-521`) | Private. Sets `IsCostRelevant = false` when `Cost == 0 && IsAlreadyWithPlayer && IsInCart`, true otherwise. **Invoked from the setters of `Cost`, `IsInCart`, and `IsAlreadyWithPlayer`.** |
| `_minimumPartySizeScoreNeeded` | `private const float _minimumPartySizeScoreNeeded = 0.4f` (`:24`) | **Dead code**: occurs once in this file — the definition, with no reference. **Do not infer an existing party-size threshold from it.** |
| `_eligibilityReason` | `private TextObject _eligibilityReason` (`:28`) | Why the row is unavailable. Private with no accessor, **reachable only through `ExecuteBeginHint`.** |

## Real Example

Reproducing the constructor's distance and cost branch — **note that `Cost` is never written in one path**:

```csharp
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Library;

public float ComputeDistInTime(MobileParty party, out int cost)
{
    cost = -1;

    float distance = DistanceHelper.FindClosestDistanceFromMobilePartyToMobileParty(
        party, MobileParty.MainParty, party.NavigationCapability);

    if (MobileParty.MainParty.IsCurrentlyAtSea && !party.HasNavalNavigationCapability)
    {
        // Vanilla assigns 2.1474836E+09f (float.MaxValue) here and
        // never writes cost at all — cost keeps its field initial of -1.
        return 2.1474836E+09f;
    }

    cost = Campaign.Current.Models.ArmyManagementCalculationModel
        .CalculatePartyInfluenceCost(MobileParty.MainParty, party);

    return MathF.Ceiling(distance / party.Speed);
}
```

Reproducing `UpdateEligibility`'s three-stage test:

```csharp
using TaleWorlds.Localization;

public bool CheckEligibility(ArmyManagementItemVM item, out TextObject reason)
{
    reason = TextObject.GetEmpty();

    if (item.CanJoinBackWithoutCost)
    {
        // Vanilla passes immediately here, with no checks at all.
        return true;
    }

    if (item.IsInCart && !item.IsAlreadyWithPlayer)
    {
        reason = new TextObject("{=idRXFzQ6}Already added to the army.");
        return false;
    }

    if (!Campaign.Current.Models.ArmyManagementCalculationModel
            .CheckPartyEligibility(item.Party, out reason))
    {
        return false;
    }

    return CampaignUIHelper.GetMapScreenActionIsEnabledWithReason(out reason);
}
```

Building a stable sort key of your own — **avoiding the `Cost == -1` trap in the at-sea branch**:

```csharp
public List<ArmyManagementItemVM> SortByEffectiveCost(List<ArmyManagementItemVM> items)
{
    // item.Cost is -1 for the "unreachable at sea" branch, which sorts below
    // every real price and would float those parties to the top.
    // Using DistInTime == float.MaxValue as the unreachable test is far steadier.
    items.Sort((a, b) =>
    {
        bool aUnreachable = a.DistInTime > 2.0E+09f;
        bool bUnreachable = b.DistInTime > 2.0E+09f;
        if (aUnreachable != bUnreachable)
        {
            return aUnreachable ? 1 : -1;
        }

        return b.Cost.CompareTo(a.Cost);
    });

    return items;
}
```

Surfacing the blocked reason — **necessary because `_eligibilityReason` has no accessor**:

```csharp
public string ExplainIfBlocked(ArmyManagementItemVM item)
{
    if (item.IsEligible)
    {
        return string.Empty;
    }

    // The private field is unreachable, so trigger ExecuteBeginHint to show it.
    // To capture the actual text you have to re-run CheckEligibility yourself.
    item.ExecuteBeginHint();
    return "(see on-screen hint)";
}
```

## Risks and crash boundaries

- 🔴 **`Cost` stays `-1` in the at-sea branch.** When `MobileParty.MainParty.IsCurrentlyAtSea && !Party.HasNavalNavigationCapability`, `Cost` is never assigned (field initial `-1`, `:52`), and `ItemCostComparer` does a plain `y.Cost.CompareTo(x.Cost)`. **Result: unreachable parties sort to the very top by cost while sorting last by distance.** That is vanilla behaviour, and the two sorters genuinely disagree. Handle the sentinel before reusing `Cost` in your own sort.
- 🔴 **The sort keys are frozen snapshots.** `DistInTime`, `_distance`, and `Clan` are get-only and **never recomputed** after construction. A party moving, a fleet being converted, a relation changing — none of it is reflected. Live data means rebuilding the instance.
- **`Party` is a public readonly field, not a property.** External code can hold that `MobileParty` long-term, bypassing this class's encapsulation and lifetime entirely.
- **Four numeric properties are writable and have side effects.** The setters of `Cost` and `IsAlreadyWithPlayer` call `UpdateIsCostRelevant()`, as does `IsInCart`'s; `ShipCount`'s additionally writes `HasShip = _shipCount > 0`. **Writing the backing fields directly breaks those couplings.**
- **`IsEligible` and the reason are maintained separately.** `IsEligible` is a public bindable property; `_eligibilityReason` is private with no accessor. **Outside code can read "cannot", but never "why"** — only `ExecuteBeginHint` can put it on screen.
- **All three callbacks may be null.** The main party row gets `null, null, null` (`ArmyManagementVM.cs:997`). `OnRemove` is guarded by `!IsMainHero` and `_onFocus` uses `?.`, but **`_onAddToCart` has no null protection** (`:470`) — if external code flips the main party row's `IsInCart` to false and clicks, `ExecuteAction` NREs.
- **No null check on `Campaign.Current.Models` during construction.** `Campaign.Current.Models.ArmyManagementCalculationModel` (`:403`) is dereferenced bare and crashes there in a headless context. Interestingly `UpdateEligibility` (`:489`) does use `Campaign.Current.Models?`.
- **Dead code**: `_minimumPartySizeScoreNeeded = 0.4f` occurs exactly once in this file (`:24`, definition only). **Do not conclude that vanilla enforces a "party must be at least 40% size" rule — it does not.**
- **Lifecycle**: no `OnFinalize` override and no events → **no leak**. `ArmyManagementVM` does not call `OnFinalize` on items either; they are reclaimed when the lists are cleared.
- **Serialization**: none. No `SyncData`, no `IDataStore` contact. The enrolment result is written by `ArmyManagementVM.ExecuteDone` via `item.Party.Army` and `ChangeClanInfluenceAction.Apply`; the item itself takes no part.
- **`ExecuteSetUnfocused` passes null to the callback.** `_onFocus?.Invoke(null)` (`:484`), and the host `ArmyManagementVM.OnFocus` does `FocusedItem = focusedItem` directly, so null is the legitimate "selection cleared" signal — **your own `_onFocus` callback must handle null.**
- **Native boundary**: none here. Pure managed, though `InformationManager.ShowTooltip(typeof(MobileParty), ...)` reaches the campaign-side presentation layer downstream.
- **Cross-version**: the three `ArmyManagementCalculationModel` methods (`CheckPartyEligibility` / `CalculatePartyInfluenceCost` / `GetPartyRelation`), the `float.MaxValue` sentinel, and the signature of `DistanceHelper.FindClosestDistanceFromMobilePartyToMobileParty` are all v1.4.5 shapes. See [ArmyManagementSortControllerVM](../ArmyManagementSortControllerVM) for the sorter side.

## Dependencies

- ↑ VM base: [ViewModel](../../core-extra/ViewModel) — property-change notification and the `RefreshValues` contract
- ↔ Sibling: [ArmyManagementVM](../ArmyManagementVM) — **the sole constructor and holder**, which also writes `Cost = 0` at `:1008` to mark "already with the player"
- ↔ Sibling: [ArmyManagementSortControllerVM](../ArmyManagementSortControllerVM) — its six comparators all read the properties listed on this page
- ↔ Sibling: [ArmyMenuOverlayVM](../ArmyMenuOverlayVM) — the other army-facing surface, reading the same campaign objects
- → Calculation model: [ArmyManagementCalculationModel](../../campaign/ArmyManagementCalculationModel)
- → Party and faction: [MobileParty](../../campaign/MobileParty), [Clan](../../campaign/Clan), [Army](../../campaign-ext/Army)
- → Distance: [DistanceHelper](../../system/DistanceHelper)
- → Images: [BannerImageIdentifierVM](../../core-extra/BannerImageIdentifierVM), [CharacterImageIdentifierVM](../../core-extra/CharacterImageIdentifierVM)
- → Hints: [InformationManager](../../core-extra/InformationManager), [MBInformationManager](../../core-extra/MBInformationManager)
