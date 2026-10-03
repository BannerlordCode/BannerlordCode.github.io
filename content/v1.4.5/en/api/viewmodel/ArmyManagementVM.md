---
title: "ArmyManagementVM"
description: "The main view model of the army management panel, and the largest single link in this directory. It maintains two party lists, recomputes cohesion and cost live, and in ExecuteDone actually creates or disbands the army and spends influence. Influence moves along three different paths — done, cancel, reset — with three different meanings."
---
# ArmyManagementVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement  
**Module:** TaleWorlds.CampaignSystem.ViewModelCollection  
**Type:** `public class ArmyManagementVM : ViewModel`  
**Base:** `ViewModel`  
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement/ArmyManagementVM.cs`

## Overview

This is the largest view model in this directory, and the only one that **actually mutates campaign state**: `ExecuteDone()` creates an army, attaches parties to it, deducts influence, and can disband the army outright. It is the panel behind the "manage army" entry on the map.

Its state falls into four groups:

- **Three lists**: `PartyList` (all candidates), `PartiesInCart` (selected), and `_partiesToRemove` (deselected during this session — private, unbound).
- **Two aggregate computations**: `OnRefresh()` (`:1167-1226`) makes one pass over the cart to total strength / cost / lord count / morale / food, then chains into `CalculateCohesion()`, `GetCanDisbandArmyWithReason()`, `UpdateCanConfirm()`, and `UpdateTooltips()`. **All panel refreshes converge on that one private method.**
- **One sort controller**: `SortControllerVM`, created in the constructor at line 1021 and handed `_partyList`.
- **Three-part cohesion bookkeeping**: `_boostedCohesion` (how many times +10 the player clicked), `_influenceSpentForCohesionBoosting` (what that cost), and the derived display value `NewCohesion`.

## 🔴 Three influence paths with three different meanings

This is the part of the class that most needs care. The same `ChangeClanInfluenceAction.Apply` appears three times with **different signs and different meanings**:

| Method | The line | Meaning |
| --- | --- | --- |
| `ExecuteDone` (`:1313`) | `ChangeClanInfluenceAction.Apply(Clan.PlayerClan, -(TotalCost - _influenceSpentForCohesionBoosting));` | **The real charge.** Note it subtracts the cohesion portion, because that part is already deducted by `Army.BoostCohesionWithInfluence`. |
| `ExecuteCancel` (`:1345`) | `ChangeClanInfluenceAction.Apply(Clan.PlayerClan, _initialInfluence - Clan.PlayerClan.Influence);` | **Refunds the difference.** So "cancel" is *not* a no-op — it restores influence to the value captured when the panel opened. |
| `ExecuteReset` (`:1367`) | the same line | **Also refunds the difference**, on top of clearing the three lists and all three cohesion counters. |

**Corollary:** if the panel closes without going through `ExecuteDone` — because the host never called `ExecuteCancel` — influence is neither charged nor refunded, and simply stays put. **And calling `ExecuteCancel` twice refunds twice**, because `_initialInfluence` is a constant while current influence has already moved.

## Mental Model

Read it as **"a two-stage editor: the selection stage only touches local lists and previews numbers, and the commit stage is what moves campaign state"**:

- **Who news it up.** **There is no `new ArmyManagementVM(...)` anywhere in the tree.** The name occurs only in its own file (the constructor at line 972). It is constructed reflectively by `GauntletViewModelBinder` from the class name written in the XML — **the only view model in this directory bound by a prefab name rather than by an attribute or a constructor table.** That is also why the seam (`ArmyMenuOverlayVM.OpenArmyManagement`) must be injected from outside.
- **Who holds the reference.** The army management screen. The `OpenArmyManagement` delegate on `ArmyMenuOverlayVM` normally points at a closure that constructs this class and pushes the screen.
- **What it binds to.** Thirty-plus `[DataSourceProperty]` members — `Text` / `int` / `bool` / `MBBindingList` / `HintViewModel` / `InputKeyItemVM`.
- **When it is disposed.** **It overrides `OnFinalize`** (`:1422-1430`), doing two things: `UnregisterEvent<TutorialNotificationElementChangeEvent>(...)` to drop the tutorial subscription, and `?.OnFinalize()` on each of the four `InputKeyItemVM`s. **The unbinding is complete.**
- 🔴 **The constructor builds the entire panel in one pass.** (`:972-1024`) It walks `MobileParty.All` to build the candidate list, **constructs a separate row for the player's own main party and seeds it into the cart**, merges existing army members into the cart, prices the cohesion boost at 10 points, records `_initialInfluence`, calls `OnRefresh()`, fires `TutorialContextChangedEvent`, builds the sort controller, registers the tutorial listener, and calls `RefreshValues()`. **There is no staged initialisation.**
- 🔴 **`_mainPartyItem` is a purpose-built row for the main party**, constructed with three null callbacks (`:997-1002`) and then hand-set with `IsAlreadyWithPlayer = true; IsMainHero = true; IsInCart = true`. `ManagementItemComparer.Compare` short-circuits on `x.IsMainHero` with `return -1` — **the main party is always first and never actually compared against the others.**
- 🔴 **`TotalCost`'s setter has a side effect** (`:383`): `CanAffordInfluenceCost = TotalCost <= 0 || (float)TotalCost <= Hero.MainHero.Clan.Influence;`. Note that **`Hero.MainHero.Clan` is dereferenced with no null check** — and `TotalCost` is written on every add, remove, and cohesion-boost click.
- 🔴 **`RemoveInputKey`'s setter propagates downward** (`:965-968`): assigning it walks the whole `PartyList` and sets every row's `RemoveInputKey` to the same value.
- **Army creation in `ExecuteDone` is conditional**: only `PartiesInCart.Count > 1 && MobileParty.MainParty.MapFaction.IsKingdomFaction` triggers army creation, party attachment, and the charge. **With a single party or a non-kingdom identity, `ExecuteDone` merely closes the window and changes nothing.**
- 🔴 **Disbanding goes through the same path.** `ExecuteDisbandArmy()` shows a confirmation dialog, and its affirmative callback runs `DisbandArmy()` (`:1392-1399`), which `OnRemove`s every cart row and then calls `ExecuteDone()`. So "disband" = "remove everyone from the cart, then commit".
- **`UpdateCanConfirm` has three branches** (`:1122-1145`): not enough influence → `CanConfirm = false` with a reason in `DoneHint`; only the main party in the cart → `CanConfirm = CanDisbandArmy` (disbanding is the only action left); otherwise `CanConfirm = true`.
- **Dead code: `OnCloseBoost()` (`:1401-1404`) has no call site.** It only fires `Game.Current.EventManager.TriggerEvent(new TutorialContextChangedEvent(TutorialContexts.ArmyManagement));` — and constructor line 1020 already does exactly that. **The code's existence shows a second trigger was intended (when the boost panel closes) and never wired up.**

## Key members

| Member | Signature | What it is actually for |
| --- | --- | --- |
| Constructor | `public ArmyManagementVM(Action onClose)` (`:972-1024`) | **The only creation path, invoked reflectively by `GauntletViewModelBinder` from the prefab's class name.** Builds the whole panel in one pass: walks `MobileParty.All` for candidates, constructs the dedicated main-party row, merges existing army members, prices the cohesion boost, records `_initialInfluence`, calls `OnRefresh()`, fires `TutorialContextChangedEvent`, builds `ArmyManagementSortControllerVM(_partyList)`, registers `TutorialNotificationElementChangeEvent`, and calls `RefreshValues()`. |
| `ExecuteDone` | `public void ExecuteDone()` (`:1285-1341`) | **The only method that truly changes campaign state.** Returns immediately if influence is short; redirects to `ExecuteDisbandArmy` if the cart holds only the main party; calls `ApplyCohesionChange()` when `NewCohesion > Cohesion`; then creates the army, attaches parties, charges via `ChangeClanInfluenceAction.Apply`, processes `_partiesToRemove`, calls `_onClose()`, and fires `CampaignEventDispatcher.Instance.OnArmyOverlaySetDirty()`. |
| `ExecuteCancel` | `public void ExecuteCancel()` (`:1343-1347`) | **Not a no-op**: refunds the difference with `_initialInfluence - Clan.PlayerClan.Influence`, then `_onClose()`. **Calling it twice refunds twice.** |
| `ExecuteReset` | `public void ExecuteReset()` (`:1349-1373`) | `OnRemove`s every cart row, replays the main party and previously-owned parties, refunds the influence difference, sets `TotalCost = 0`, zeroes all three cohesion counters, clears `_partiesToRemove`, and finishes with `OnRefresh()`. |
| `ExecuteDisbandArmy` | `public void ExecuteDisbandArmy()` (`:1375-1384`) | Only shows the `InformationManager.ShowInquiry` confirmation when `CanDisbandArmy` is true; the affirmative callback runs `DisbandArmy()` (`:1392-1399`: `OnRemove` each row, then `ExecuteDone()`). |
| `ExecuteBoostCohesionManual` | `public void ExecuteBoostCohesionManual()` (`:1386-1390`) | Calls `OnBoostCohesion()` then `TriggerEvent(new ArmyCohesionBoostedByPlayerEvent())`. **The trigger sits outside `if (CanBoostCohesion)`, and cohesion has not actually been granted yet** — see [ArmyCohesionBoostedByPlayerEvent](../ArmyCohesionBoostedByPlayerEvent). |
| `OnRefresh` | `private void OnRefresh()` (`:1167-1226`) | **The panel's refresh convergence point.** Walks the cart for totals → sets `TotalStrength`, three `Text`s, `CanCreateArmy`, `PlayerHasArmy` → `CalculateCohesion()` → `CanBoostCohesion` plus hints → `PartiesInCart.Sort(_itemComparer)` → `GetCanDisbandArmyWithReason()` → `UpdateCanConfirm()` → `UpdateTooltips()`. |
| `OnAddToCart` / `OnRemove` | `private void ...(ArmyManagementItemVM)` (`:1086-1120`) | Select / deselect. `OnAddToCart` fires `PartyAddedToArmyByPlayerEvent`, removes from `_partiesToRemove`, sets `CanJoinBackWithoutCost = false` when already with the player, and does `TotalCost += Cost`. `OnRemove` reverses all of it and sets `CanJoinBackWithoutCost = true`. Both end with `OnRefresh()`. |
| `ApplyCohesionChange` | `private void ApplyCohesionChange()` (`:1147-1154`) | The real cohesion settlement: `MobileParty.MainParty.Army.BoostCohesionWithInfluence(NewCohesion - Cohesion, _influenceSpentForCohesionBoosting)`. **Only reached from `ExecuteDone`, and only when `NewCohesion > Cohesion`.** |
| `GetCanDisbandArmyWithReason` | `private bool ...(out TextObject disabledReason)` (`:1228-1252`) | Four-stage test: no army / inside a MapEvent / a siege is active (`PlayerSiege.PlayerSiegeEvent != null`) / `CampaignUIHelper.GetMapScreenActionIsEnabledWithReason`. Every failure carries a readable reason. |
| `OnFinalize` | `public override void OnFinalize()` (`:1422-1430`) | **Complete unbinding**: `UnregisterEvent<TutorialNotificationElementChangeEvent>(OnTutorialNotificationElementIDChange)`, then `?.OnFinalize()` on each of the four `InputKeyItemVM`s. |
| `ManagementItemComparer` (nested) | `public class ManagementItemComparer : IComparer<ArmyManagementItemVM>` (`:20-30`) | **Sorts the cart only, not the candidate list.** `x.IsMainHero` returns `-1` immediately (main party first, never compared); otherwise `y.IsAlreadyWithPlayer.CompareTo(x.IsAlreadyWithPlayer)`. **Only two keys — there is no numeric sorting at all.** |
| `TotalCost` | `[DataSourceProperty] public int TotalCost` (`:371-387`) | **The setter has a side effect**: every assignment recomputes `CanAffordInfluenceCost = TotalCost <= 0 \|\| (float)TotalCost <= Hero.MainHero.Clan.Influence;`. **`Hero.MainHero.Clan` is unchecked**, and this property is written on every select, deselect, and cohesion boost. |
| `RemoveInputKey` | `[DataSourceProperty] public InputKeyItemVM RemoveInputKey` (`:950-970`) | **The setter propagates downward**: one assignment walks the entire `PartyList` and sets every row's `RemoveInputKey` to the same value (`:965-968`). |
| `OnCloseBoost` 🔴 | `private void OnCloseBoost()` (`:1401-1404`) | **Dead code, no call site.** It only fires `TriggerEvent(new TutorialContextChangedEvent(...))` — which constructor line 1020 already does, **so opening the panel raises the tutorial context event with nothing closing it.** |
| `_cohesionBoostAmount` | `private const int _cohesionBoostAmount = 10` (`:44`) | Cohesion points per boost. **A hard-coded constant**, also used to fill `GameTexts.SetVariable("NUMBER", 10)` in `RefreshValues`. A mod cannot adjust it. |
| `SortControllerVM` | `[DataSourceProperty] public ArmyManagementSortControllerVM` (`:167-182`) | Built in the constructor over `_partyList` — **so it sorts the candidate list, not the cart**. See [ArmyManagementSortControllerVM](../ArmyManagementSortControllerVM). |

## Real Example

Reproducing both influence paths — **done charges, cancel refunds**:

```csharp
using TaleWorlds.CampaignSystem.Actions;

public void CommitArmyCost(int totalCost, int influenceSpentForCohesionBoosting)
{
    // Same shape as ExecuteDone:1313: the charge subtracts the cohesion portion,
    // because Army.BoostCohesionWithInfluence already deducted that part itself.
    ChangeClanInfluenceAction.Apply(
        Clan.PlayerClan,
        -(totalCost - influenceSpentForCohesionBoosting));
}

public void RefundArmyCost(float initialInfluence)
{
    // Same shape as ExecuteCancel:1345: refund the difference.
    // So "cancel" is not a no-op, and calling this twice refunds twice.
    ChangeClanInfluenceAction.Apply(
        Clan.PlayerClan,
        initialInfluence - Clan.PlayerClan.Influence);
}
```

Reproducing the disband test and its reasons:

```csharp
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Siege;
using TaleWorlds.Localization;

public bool CanDisbandWithReason(out TextObject reason)
{
    // The same four stages as GetCanDisbandArmyWithReason (:1228-1252)
    if (MobileParty.MainParty.Army == null)
    {
        reason = new TextObject("{=iSZTOeYH}No army to disband.");
        return false;
    }

    if (MobileParty.MainParty.MapEvent != null)
    {
        reason = new TextObject("{=uipNpzVw}Cannot disband the army right now.");
        return false;
    }

    if (PlayerSiege.PlayerSiegeEvent != null)
    {
        reason = GameTexts.FindText("str_action_disabled_reason_siege");
        return false;
    }

    if (!CampaignUIHelper.GetMapScreenActionIsEnabledWithReason(out reason))
    {
        return false;
    }

    reason = TextObject.GetEmpty();
    return true;
}
```

Reproducing the cart ordering rule — **mind the two keys and the main-party short circuit**:

```csharp
public int CompareCartItems(ArmyManagementItemVM x, ArmyManagementItemVM y)
{
    // Identical to ManagementItemComparer.Compare (:20-30): the main party
    // returns -1 immediately, is always first, and is never compared.
    if (x.IsMainHero)
    {
        return -1;
    }

    return y.IsAlreadyWithPlayer.CompareTo(x.IsAlreadyWithPlayer);
}
```

Projecting cohesion after a set of joins:

```csharp
using TaleWorlds.CampaignSystem.Party;

public int ProjectCohesionAfterJoining(Army army, List<ArmyManagementItemVM> cart, int currentBoost)
{
    if (army == null)
    {
        return 0;
    }

    // Same algorithm as CalculateCohesion (:1058-1079)
    int newCohesion = Math.Min((int)army.Cohesion + currentBoost, 100);

    ArmyManagementCalculationModel model = Campaign.Current.Models.ArmyManagementCalculationModel;

    for (int i = 0; i < cart.Count; i++)
    {
        ArmyManagementItemVM item = cart[i];
        if (item.Party.IsMainParty)
        {
            continue;
        }

        if (!item.IsAlreadyWithPlayer)
        {
            newCohesion = model.CalculateNewCohesion(army, item.Party.Party, newCohesion, 1);
        }
    }

    return newCohesion;
}
```

Computing "can I press Done" yourself, sidestepping the bare `Hero.MainHero.Clan`:

```csharp
public bool ComputeCanConfirm(int totalCost, int cartCount, bool onlyMainHero, bool canDisband)
{
    // Mirrors UpdateCanConfirm (:1122-1145), but null-safe —
    // vanilla dereferences Hero.MainHero.Clan bare in TotalCost's setter.
    Clan playerClan = Clan.PlayerClan;
    int influence = playerClan != null ? playerClan.Influence : 0;
    bool canAfford = totalCost <= 0 || totalCost <= influence;

    if (!canAfford)
    {
        return false;
    }

    if (cartCount == 1 && onlyMainHero)
    {
        return canDisband;
    }

    return true;
}
```

## Risks and crash boundaries

- 🔴 **No code-level creation entry point.** The name occurs only in this file (constructor at line 972), constructed reflectively by `GauntletViewModelBinder` from the class name in the XML. **Replacing it means editing the class name in the prefab, not a call site.**
- 🔴 **`ExecuteCancel` and `ExecuteReset` both refund.** `ChangeClanInfluenceAction.Apply(Clan.PlayerClan, _initialInfluence - Clan.PlayerClan.Influence)` — since `_initialInfluence` is the constant captured at panel open, **calling either twice refunds twice.** The host must keep the done / cancel / close paths mutually exclusive.
- 🔴 **`ExecuteCancel` is not a no-op.** Many hosts assume "cancel means nothing happens", but it **writes influence**. If the panel is killed outright — neither Cancel nor Done — influence simply stays put. **Three exit routes leave three different outcomes.**
- 🔴 **`TotalCost`'s setter dereferences `Hero.MainHero.Clan` bare** (`:383`). A main party belonging to no clan NREs there. And `TotalCost` is written by `OnAddToCart`, `OnRemove`, `OnBoostCohesion`, and `ExecuteReset` — **so a single tick of a checkbox can trigger it.**
- **The tutorial context event fires once, and a second trigger was never wired up.** Constructor line 1020 fires it; the dead `OnCloseBoost()` does the same thing with no call site. **Any mod counting that event must verify the behaviour itself rather than assume a close-time trigger exists.**
- 🔴 **Event timing is mismatched.** `ExecuteBoostCohesionManual` only does bookkeeping (`OnBoostCohesion`); the real `Army.BoostCohesionWithInfluence` waits for `ApplyCohesionChange()` inside `ExecuteDone`. **Three clicks followed by Cancel = three events, zero cohesion granted.**
- 🔴 **Army creation is conditional.** It requires `PartiesInCart.Count > 1 && MobileParty.MainParty.MapFaction.IsKingdomFaction`. **With one party or a non-kingdom identity, `ExecuteDone` merely closes the window.**
- **`ManagementItemComparer` sorts the cart**, while `SortControllerVM` sorts `_partyList`. **Two sorters over two different lists** — do not conflate them. The former has exactly two keys, "main party first" and "already with the player first", and **no numeric ordering whatsoever**.
- **Three `TextObject` hints are composed from `GameTexts` variables** (`TotalCostText` / `TotalStrengthText` / `TotalCostNumbersText` use `LEFT` / `RIGHT` / `NUM` / `TOTAL_INFLUENCE`). Those variable slots are globally shared, so **do not run competing `SetVariable` composition elsewhere in parallel.**
- **`UpdateTooltips` contains one side-effect-free expression** (`:1260`): `TaleWorlds.Library.MathF.Round(PartyBase.MainParty.MobileParty.Army.Morale, 1).ToString("0.0");` — **computed and discarded**, assigned to nothing. Vanilla leftover.
- **Unbinding is complete.** `OnFinalize` drops the tutorial event and `?.OnFinalize()`s each of the four `InputKeyItemVM`s. **The `?.` means they may legitimately be null** — closing the panel without ever setting key hints will not crash.
- **Numerous bare dereferences of `MobileParty.MainParty`** across `CalculateCohesion`, `OnRefresh`, `ExecuteDone`, `ApplyCohesionChange` and a dozen other places. **A headless context or a half-initialised campaign crashes here.**
- **Serialization**: none in the usual sense. There is no `SyncData` and no `IDataStore` contact — **but the panel's outcome is written into the campaign**: `item.Party.Army`, `ChangeClanInfluenceAction.Apply`, `Army.BoostCohesionWithInfluence`, and `Kingdom.CreateArmy`. **This is the only view model in this directory with savegame-visible side effects.**
- **`RefreshValues` calls `TutorialNotification.RefreshValues();` without `?.`** (`:1055`), whereas the structurally identical [ArmyMenuOverlayVM](../ArmyMenuOverlayVM) uses `TutorialNotification?.RefreshValues()`. Here it is safe because the constructor always news it up at line 986 — **but a subclass that skips the base construction NREs.**
- **Native boundary**: pure managed in itself, but heavily native downstream — army cohesion and morale recalculation, `Kingdom.CreateArmy`, formation writes, and influence application.
- **Cross-version**: `TutorialContexts.ArmyManagement`, `PartyAddedToArmyByPlayerEvent`, the three `ArmyManagementCalculationModel` methods (`GetCohesionBoostInfluenceCost` / `CalculateNewCohesion` / `CheckPartyEligibility`), the two-argument `Army.BoostCohesionWithInfluence(int, int)` signature (see `ArmyManagementVM.cs:1152`), `Kingdom.CreateArmy(Hero, Settlement, Army.ArmyTypes)` (see `:1304`), and `_cohesionBoostAmount = 10` are all v1.4.5 shapes.

## Dependencies

- ↑ VM base: [ViewModel](../../core-extra/ViewModel) — property-change notification and the `OnFinalize` contract
- ↔ Sibling: [ArmyManagementItemVM](../ArmyManagementItemVM) — **the row type in all three lists**; `ManagementItemComparer` and `CalculateCohesion` read its properties directly
- ↔ Sibling: [ArmyManagementSortControllerVM](../ArmyManagementSortControllerVM) — the six comparators that sort `_partyList`
- ↔ Sibling: [ArmyMenuOverlayVM](../ArmyMenuOverlayVM) — the read-only overlay that **opens this panel through the `OpenArmyManagement` delegate**
- ↔ Sibling: [ArmyCohesionBoostedByPlayerEvent](../ArmyCohesionBoostedByPlayerEvent) — the signal event fired by `ExecuteBoostCohesionManual`
- ↔ Sibling: [ArmyManagementBoostEventVM](../ArmyManagementBoostEventVM) — an extension point in the same screen, unused by vanilla
- → Calculation model: [ArmyManagementCalculationModel](../../campaign/ArmyManagementCalculationModel)
- → Campaign objects: [Army](../../campaign-ext/Army), [MobileParty](../../campaign/MobileParty), [Clan](../../campaign/Clan), [Kingdom](../../campaign/Kingdom), [Hero](../../campaign/Hero)
- → Actions and dispatch: [ChangeClanInfluenceAction](../../campaign-ext/ChangeClanInfluenceAction), [CampaignEvents](../../campaign-ext/CampaignEvents)
- → Hints and tutorial: [HintViewModel](../../core-extra/HintViewModel), [BasicTooltipViewModel](../../core-extra/BasicTooltipViewModel), [ElementNotificationVM](../../core-extra/ElementNotificationVM), [TutorialContexts](../../core-extra/TutorialContexts)
- → Binding: [MBBindingList](../../core-extra/MBBindingList), [GameTextManager](../../core-extra/GameTextManager)
