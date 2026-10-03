---
title: "ArmyManagementBoostEventVM"
description: "The view model for a \"buy cohesion\" purchase in the army management screen: a nested BoostCurrency enum, six bindable properties, and an execute delegate that hands itself back to the host. Its ExecuteEvent is private, and vanilla never constructs it — like ArmyCohesionBoostedByPlayerEvent, it is an extension point left for mods."
---
# ArmyManagementBoostEventVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement  
**Module:** TaleWorlds.CampaignSystem.ViewModelCollection  
**Type:** `public class ArmyManagementBoostEventVM : ViewModel`  
**Base:** `ViewModel`  
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement/ArmyManagementBoostEventVM.cs`

## Overview

The army management screen lets the player spend money to raise army cohesion. This type describes **one purchasable option**: what it costs, what it buys, and in which currency. It abstracts "buy N points of cohesion" into a reusable row rather than hard-coding the logic inside `ArmyManagementVM`.

The constructor signature settles three things in one go:

```csharp
public ArmyManagementBoostEventVM(BoostCurrency currencyToPayForCohesion, int amountToPay,
    int amountOfCohesionToGain, Action<ArmyManagementBoostEventVM> onExecuteEvent)
```

Four inputs: **which currency**, **how much**, **how much cohesion gained**, and **who to call when the player clicks**. Note that the last callback hands `this` back to you (`Action<ArmyManagementBoostEventVM>`), so the host can read the already-populated `AmountToPay`, `AmountOfCohesionToGain`, and friends off the parameter object.

A two-value enum is nested in the class:

```csharp
public enum BoostCurrency { Gold, Influence }
```

and there are six `[DataSourceProperty]` members: `IsEnabled`, `AmountToPay`, `CurrencyType`, `AmountOfCohesionToGain`, `SpendText`, `GainText`. Note that `CurrencyType` is an **`int`** while `CurrencyToPayForCohesion` is a **read-only `BoostCurrency`** — two representations coexist, the former for widgets, the latter for C#.

## Who uses it

🔴 **Nobody in vanilla.** Searching the tree for `new ArmyManagementBoostEventVM` yields 0 hits; the type name appears only inside its own file (the class declaration, the field `private readonly Action<ArmyManagementBoostEventVM> _onExecuteEvent`, and the constructor). **There is no `ExecuteBoostCohesion` or equivalent call site constructing it.** It is an extension point left purely for mods.

What vanilla uses instead is the **hard-coded** version: `private const int _cohesionBoostAmount = 10;`, an `int CohesionBoostCost`, and `ExecuteBoostCohesionManual()`. In other words, **this class is the abstraction for "a configurable set of purchase options", while vanilla hand-wrote the single option it could express.**

## Mental Model

Read it as **"an immutable purchase-option description plus a callback that returns the decision to the host"**:

- **Who news it up.** **A mod.** Vanilla never constructs one. To wire it in, you construct it yourself and point `onExecuteEvent` at your own settlement logic.
- **Who holds the reference.** You decide. No global list adopts it automatically — it is in none of `ArmyManagementVM`'s `MBBindingList`s. For a widget to see it, *you* have to put it into some bindable collection.
- **What it binds to.** The six `[DataSourceProperty]` members. `SpendText` / `GainText` are already-rendered display strings produced by `RefreshValues`; `AmountToPay` / `AmountOfCohesionToGain` / `CurrencyType` exist for prefab branching and icon selection; `IsEnabled` drives button availability.
- **When it is disposed.** **There is no disposal.** It does not override `OnFinalize` and registers nothing on `CampaignEvents` or `Game.Current.EventManager`. The only thing it holds is an `Action` delegate — and that delegate typically captures the host, so **your own lifetime management is the only defence against leaking.**
- 🔴 **`ExecuteEvent()` is private.** Exactly like `ActionOptionDataVM.ExecuteAction`, it is triggered by Gauntlet binding on its name, and there is no C# entry point. To fire it from code you must work through the `onExecuteEvent` delegate you passed in, or reflect.
- 🔴 **`RefreshValues()` writes to `GameTexts`' global variable slots.** It sets `AMOUNT`, reads `str_cohesion_boost_spend`, sets `GAIN_AMOUNT`, reads `str_cohesion_boost_gain`. **`GameTexts` variable slots are shared**, so two side-by-side purchase options will step on each other: the second instance's `RefreshValues()` overwrites what the first just set. Two instances must refresh and consume strictly in sequence, never interleaved.
- **`CurrencyType` and `CurrencyToPayForCohesion` are the same value in two types.** Constructor line 140 does `CurrencyType = (int)currencyToPayForCohesion;`. Use the latter for C#, the former for widgets. `BoostCurrency` is nested inside this class, so **external references must spell out `ArmyManagementBoostEventVM.BoostCurrency`.**
- **`IsEnabled` is hard-set to `true`** in the constructor and **nothing in vanilla ever changes it**. It is there for you to control.
- **Misuse**: assuming it takes effect on its own. It is a description plus a callback; actually deducting money and granting cohesion is entirely up to your `onExecuteEvent`. Vanilla's `ArmyManagementVM` calls `Army.BoostCohesionWithInfluence` itself, inside `ApplyCohesionChange()`.

## Key members

| Member | Signature | What it is actually for |
| --- | --- | --- |
| `BoostCurrency` (nested enum) | `public enum BoostCurrency { Gold, Influence }` (`ArmyManagementBoostEventVM.cs:9-13`) | The two currencies. Vanilla's army management only uses `Influence`. Being nested, external code must spell out `ArmyManagementBoostEventVM.BoostCurrency`. |
| `CurrencyToPayForCohesion` | `public BoostCurrency BoostCurrency CurrencyToPayForCohesion { get; }` (`:29`) | **Read-only**, fixed at construction. The strongly typed representation for C# code. |
| `CurrencyType` | `[DataSourceProperty] public int CurrencyType` (`:65-80`) | **The same value as an `int`**, assigned from `(int)currencyToPayForCohesion` at constructor line 140. For widgets that branch or pick icons by integer. **Only the constructor keeps the two in sync.** |
| `AmountToPay` | `[DataSourceProperty] public int AmountToPay` (`:48-63`) | The price. `RefreshValues` feeds it into `GameTexts`' `AMOUNT` variable to build `SpendText`. |
| `AmountOfCohesionToGain` | `[DataSourceProperty] public int AmountOfCohesionToGain` (`:82-97`) | How much cohesion the purchase yields. Likewise used for the `GAIN_AMOUNT` variable. |
| `SpendText` / `GainText` | `[DataSourceProperty] public string SpendText` / `GainText` (`:99-131`) | Ready-made display copy from `str_cohesion_boost_spend` and `str_cohesion_boost_gain`. **Snapshots — call `RefreshValues()` again after a language switch.** |
| `IsEnabled` | `[DataSourceProperty] public bool IsEnabled` (`:31-46`) | Button availability. Hard-set to `true` at constructor line 135 and never modified by vanilla afterwards — yours to control. |
| Constructor | `public ArmyManagementBoostEventVM(BoostCurrency, int amountToPay, int amountOfCohesionToGain, Action<ArmyManagementBoostEventVM> onExecuteEvent)` (`:133-142`) | Fixes currency, price, gain, and callback; syncs `CurrencyType`; then **calls `RefreshValues()` once itself** so the copy is immediately usable. |
| `RefreshValues` | `public override void RefreshValues()` (`:144-151`) | Uses unscoped `GameTexts.SetVariable` to set `AMOUNT` / `GAIN_AMOUNT` and build both strings. **Those variable slots are globally shared, so parallel refreshes across instances overwrite each other.** |
| `ExecuteEvent` | `private void ExecuteEvent()` (`:153-156`) | The only behaviour: `_onExecuteEvent(this)`. **Private, fired by Gauntlet name binding**; no public C# entry point exists. |
| `_onExecuteEvent` | `private readonly Action<ArmyManagementBoostEventVM>` (`:15`) | The callback supplied at construction. **The lifetime of whatever it captures is not managed by this class** — the one and only leak possibility here. |

## Real Example

Constructing a purchase option and wiring your own settlement:

```csharp
using TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement;
using TaleWorlds.Library;

public class MyCohesionPurchaseOption
{
    private readonly ArmyManagementBoostEventVM _option;

    public MyCohesionPurchaseOption(int influenceCost, int cohesionGain)
    {
        _option = new ArmyManagementBoostEventVM(
            ArmyManagementBoostEventVM.BoostCurrency.Influence,
            influenceCost,
            cohesionGain,
            OnPurchased);
    }

    public ArmyManagementBoostEventVM ViewModel => _option;

    private void OnPurchased(ArmyManagementBoostEventVM option)
    {
        // The callback hands `self` back, so you can read the populated properties.
        Clan.PlayerClan.Influence -= option.AmountToPay;

        Army army = MobileParty.MainParty.Army;
        if (army != null)
        {
            army.BoostCohesionWithInfluence(option.AmountOfCohesionToGain, option.AmountToPay);
        }
    }
}
```

Producing and reading the copy — note it must be consumed immediately after `RefreshValues`, because the `GameTexts` variable slots are shared:

```csharp
public string[] ReadBoostTexts(ArmyManagementBoostEventVM option)
{
    option.RefreshValues();

    // Read straight away. Another instance calling RefreshValues() at this moment
    // would overwrite AMOUNT / GAIN_AMOUNT in GameTexts, so do not cache and defer.
    return new[] { option.SpendText, option.GainText };
}
```

Doing availability yourself, because the constructor hard-set it to `true`:

```csharp
public void UpdateAvailability(ArmyManagementBoostEventVM option)
{
    Army army = MobileParty.MainParty.Army;

    bool canBuy = army != null
                  && army.Cohesion + option.AmountOfCohesionToGain <= 100f
                  && Clan.PlayerClan.Influence >= option.AmountToPay;

    option.IsEnabled = canBuy;
}
```

Branching on the enum rather than the int, so you never depend on a magic number:

```csharp
public string DescribeCurrency(ArmyManagementBoostEventVM option)
{
    // Use the strongly typed CurrencyToPayForCohesion rather than guessing what
    // the integer in CurrencyType means.
    if (option.CurrencyToPayForCohesion == ArmyManagementBoostEventVM.BoostCurrency.Influence)
    {
        return "influence";
    }

    return "gold";
}
```

## Risks and crash boundaries

- 🔴 **`GameTexts` variable slots are globally shared.** `RefreshValues()` uses the unscoped `GameTexts.SetVariable("AMOUNT", ...)` / `SetVariable("GAIN_AMOUNT", ...)`. Two purchase options displayed side by side will overwrite each other's values, because the second refresh replaces what the first wrote. **Refresh then consume immediately; never interleave.** This is the easiest trap in the whole class.
- 🔴 **`ExecuteEvent()` is private.** There is no public C# trigger path, only Gauntlet binding. To fire it from code you must retain your own delegate from construction time.
- **It does nothing by itself.** No money deducted, no cohesion granted, no campaign state touched. All side effects live in the `onExecuteEvent` you supply. Wiring this into a screen without writing the callback yields a button that does nothing.
- **`IsEnabled` is decorative.** Hard-set to `true` at construction and never touched by vanilla. It does not automatically reflect insufficient influence or near-max cohesion. **You must implement availability yourself.**
- **Delegate capture is the only leak vector.** `_onExecuteEvent` normally captures your host object, and this class does not manage that lifetime. Caching the option in a static field or anything longer-lived than the screen lengthens your host's life too. Prefer passing `static` methods.
- **`CurrencyType` never re-syncs.** It is assigned exactly once, in the constructor. Subclass and shadow either one and the two representations drift apart.
- **Serialization**: none. No `SyncData`, no `IDataStore` contact. Persisting the purchase option is your callback's job.
- **No `OnFinalize` override and no event registrations**, so the class **cannot leak on its own**.
- **`SpendText` / `GainText` are snapshots.** After a language switch you must call `RefreshValues()` explicitly — and the global-slot problem above returns at that moment.
- **Native boundary**: none. Pure managed.
- **Cross-version**: the two `BoostCurrency` values, the `str_cohesion_boost_spend` / `str_cohesion_boost_gain` text keys, and vanilla's `_cohesionBoostAmount = 10` constant are all v1.4.5 shapes. This class is **unused by vanilla**, so whether it behaves the same next version rests entirely on Taleworlds keeping the extension point; no cross-version guarantee exists.

## Dependencies

- ↑ VM base: [ViewModel](../../core-extra/ViewModel) — the property-change notification and `RefreshValues` contract come from here
- ↔ Sibling: [ArmyManagementVM](../ArmyManagementVM) — the same screen's host; **it does not use this class**, instead hard-coding the equivalent single option (`_cohesionBoostAmount = 10` and `ExecuteBoostCohesionManual()`)
- ↔ Sibling: [ArmyCohesionBoostedByPlayerEvent](../ArmyCohesionBoostedByPlayerEvent) — another extension point in the same screen, likewise unused in vanilla
- ↔ Sibling: [ArmyManagementItemVM](../ArmyManagementItemVM) — the same screen's row view model, holding real campaign state references; compare it against this page's stateless option description
- → Text system: [GameTextManager](../../core-extra/GameTextManager) — host of `SetVariable` / `FindText`, and the origin of the global-slot problem
- → List container: [MBBindingList](../../core-extra/MBBindingList) — in case you bind instances into a collection
- → Derived objects: [Army](../../campaign-ext/Army), [MobileParty](../../campaign/MobileParty), [Clan](../../campaign/Clan)
