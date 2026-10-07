---
title: "BarterData"
description: "The context envelope for one barter session: both heroes and parties, the group roster, the barterable roster, persuasion discount, and the AI-trade flag. Built by BarterManager.StartBarterOffer and the only entry point barter behaviors use."
---

# BarterData

**Namespace:** `TaleWorlds.CampaignSystem.BarterSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class BarterData`
**Base:** none (derives directly from object)
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.BarterSystem/BarterData.cs`

## Overview

`BarterData` is the **context object for a single barter session**. It executes no trade logic itself; it answers four kinds of question: **who is talking to whom** (`OffererHero` / `OtherHero` / `OffererParty` / `OtherParty`), **which groups exist** (`_barterGroups`), **which lines exist** (`_barterables`), and **what special parameters this deal carries** (`ContextInitializer` / `PersuasionCostReduction` / `IsAiBarter`).

In the architecture this type carries the **"shared envelope between barter behaviors and the trade UI"** slot. Every barter behavior — `GoldBarterBehavior`, `ItemBarterBehavior`, `FiefBarterBehavior`, `SetPrisonerFreeBarterBehavior`, `TransferPrisonerBarterBehavior` — receives the same `BarterData` instance by listening to `CampaignEventDispatcher.Instance.OnBarterablesRequested(args)`, and fills it with `AddBarterable<XxxBarterGroup>(...)`. Everything the player sees on screen is what those behaviors put into this envelope.

Its lifetime is extremely short: **`BarterManager.StartBarterOffer` constructs one, broadcasts one event, the player confirms or cancels, and it is discarded**. It **does not enter the save** — `BarterData` carries no `SaveableField` or `SaveableProperty` at all.

The most important implementation detail sits in `AddBarterable<T>` (`BarterData.cs:46`):

```csharp
foreach (BarterGroup barterGroup in _barterGroups)
{
    if (barterGroup is T)
    {
        barterable.Initialize(barterGroup, isContextDependent);
        _barterables.Add(barterable);
        break;
    }
}
```

**A non-match is silently discarded** — no `else`, no log, no exception. The second key detail is in the constructor (`BarterData.cs:42`): `_barterGroups` comes from `Campaign.Current.Models.DiplomacyModel.GetBarterGroups().ToList()`, which is both a **copy** and a hard **dependency on `Campaign.Current` existing**.

## Mental Model

Think of it as **one page of a deal draft**.

- **The call order is: manager constructs, event broadcasts, behaviors register, UI displays, `Apply()` commits.** You will almost never `new BarterData` yourself — only two places do: `BarterManager.StartBarterOffer` (`BarterManager.cs:81`) and `BarterManager.ExecuteAiBarter` (`BarterManager.cs:98`, which passes `null` for both parties and `isAiBarter: true`). As a mod your job is to **listen to `OnBarterablesRequested` and add lines**.
- **The generic argument of `AddBarterable<T>` is the group type, not the line type.** Write `args.AddBarterable<GoldBarterGroup>(myBarterable)`, not `AddBarterable<MyBarterableType>`. This is the most common mistake.
- **Only the first match takes effect.** The six official groups do not inherit from one another, so there is no ambiguity today; if you derive `MyGroup : GoldBarterGroup`, `AddBarterable<GoldBarterGroup>` binds to whichever entry appears first in `_barterGroups`.
- **`AddBarterGroup` is a back door the manager uses.** `BarterManager.AddBaseBarterables` appends a `DefaultsBarterGroup` through it, and so does `ExecuteAiBarter`. An external behavior can use it to insert a custom group, but it **does not de-duplicate** — adding twice yields two identically-typed groups.
- **`GetBarterables()` hands back the internal list, not a copy.** The official code queries it with LINQ (`GetOfferedBarterables` is literally `from ... in GetBarterables()`), but mutating it from outside bypasses `Initialize` and leaves the line with a null `Group`.
- **`OffererMapFaction` and `OtherMapFaction` both have a null fallback.** Each is `Hero?.MapFaction ?? Party.MapFaction`. But if the hero *and* the party are both null — which is exactly what the AI trade path passes — these throw.

### What the six field groups answer

| Domain | Fields | Question it answers |
| --- | --- | --- |
| Both identities | `OffererHero` / `OtherHero` | Who is negotiating |
| Both parties | `OffererParty` / `OtherParty` | Which roster the goods come from |
| Both factions | `OffererMapFaction` / `OtherMapFaction` | Which faction drives unit pricing |
| Group roster | `GetBarterGroups` / `GetBarterGroup<T>` | Which category a line lands in, and its AI weight |
| Line roster | `GetBarterables` / `GetOfferedBarterables` | Which rows exist, and which are actually on the table |
| Session parameters | `ContextInitializer` / `PersuasionCostReduction` / `IsAiBarter` | Whether behaviors get a context callback, how much persuasion is discounted, and whether the AI is driving |

## How to use

**How to obtain it.** **Read it off the settlement / diplomacy model.** `public class BarterData` is held by the diplomacy model per settlement; you enumerate `_barterGroups` and ask `DiplomacyModel.GetBarterGroups(...)` rather than building one, and add to it only with `AddBarterable<T>()`.

```csharp
foreach (BarterGroup group in _barterGroups)
{
    foreach (Barterable b in group.Barterables) { /* inspect */ }
}
```

**The most common pitfall.** **`AddBarterable<T>` silently discards a non-match.** There is no `else`, no log and no exception, so a group that never reaches `DiplomacyModel.GetBarterGroups(...)` just vanishes.

## Key members

| Member | Signature | What this member is actually for |
| --- | --- | --- |
| `OffererHero` | `public readonly Hero OffererHero` | The hero who offered. Written from the `offerer` argument of `StartBarterOffer` (`BarterData.cs:81`), **`readonly` with no setter**. The AI path passes `faction1.Leader`, which can be null. |
| `OtherHero` | `public readonly Hero OtherHero` | The counterparty. Note `StartBarterOffer` passes `beneficiaryOfOtherHero ?? other`, so the **beneficiary can differ from the negotiator**. |
| `OffererParty` | `public readonly PartyBase OffererParty` | The offerer's party. `ExecuteAiBarter` passes `null` explicitly (`BarterManager.cs:98`), so **check it before reading**. |
| `OtherParty` | `public readonly PartyBase OtherParty` | The counterparty's party; equally nullable. |
| `ContextInitializer` | `public readonly BarterManager.BarterContextInitializer ContextInitializer` | Session context delegate, typed `bool BarterContextInitializer(Barterable, BarterData, object = null)` (`BarterManager.cs:15`). Behaviors call it after constructing a line; false means the line should not appear. **When the player initiates with `Hero.MainHero` and passes null, the manager instead runs the `CanPlayerBarterWithHero` cooldown check and returns early on failure** (`BarterManager.cs:74-78`). |
| `PersuasionCostReduction` | `public readonly int PersuasionCostReduction` | Persuasion discount, from the same-named `StartBarterOffer` parameter, default 0. It changes the persuasion difficulty shown in the UI, not the trade outcome. |
| `OffererMapFaction` | `public IFaction OffererMapFaction => OffererHero?.MapFaction ?? OffererParty.MapFaction` | The offerer's faction, consumed by `GetUnitValueForFaction` to pick a pricing branch. **A null hero falls through to the party; a null party throws** — the `?.` only protects the hero side. |
| `OtherMapFaction` | `public IFaction OtherMapFaction => OtherHero?.MapFaction ?? OtherParty.MapFaction` | The counterparty's faction, same shape and same boundary. |
| `IsAiBarter` | `public bool IsAiBarter { get; }` | Distinguishes a manual player trade from an automated AI one. `ExecuteAiBarter` passes true (`BarterManager.cs:98`). **Branch on this in a behavior to decide whether to open UI or fire events.** |
| `AddBarterable<T>` | `public void AddBarterable<T>(Barterable barterable, bool isContextDependent = false)` | Registers one trade line. The generic parameter is the **group type**. It walks `_barterGroups`, takes the first `is T` match, calls `barterable.Initialize(...)`, appends to `_barterables`, and breaks. **A non-match is silently discarded** and the `barterable` argument is never null-checked. |
| `AddBarterGroup` | `public void AddBarterGroup(BarterGroup barterGroup)` | Appends a group to the end of `_barterGroups`. **No de-duplication**, so appending twice creates two identical groups. The manager itself uses it to insert `DefaultsBarterGroup`. |
| `GetBarterGroups` | `public List<BarterGroup> GetBarterGroups()` | Returns `_barterGroups` **itself, not a copy** — enumerable so you can read every current group and its weight. |
| `GetBarterables` | `public List<Barterable> GetBarterables()` | Returns `_barterables` **itself, not a copy**. `GetOfferedBarterables` LINQ-filters exactly this. Mutating it externally bypasses `Initialize`. |
| `GetBarterGroup<T>` | `public BarterGroup GetBarterGroup<T>()` | First group of the given type, or **null** when `_barterGroups.OfType<T>()` is empty. It does not throw. |
| `GetOfferedBarterables` | `public List<Barterable> GetOfferedBarterables()` | Filters to lines with `IsOffered == true` and returns a **new** list. This is the canonical read point for "which rows are really on the table". |

## Examples

Add your own line inside a barter behavior, shaped after the official `GoldBarterBehavior`:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.BarterSystem;
using TaleWorlds.CampaignSystem.BarterSystem.Barterables;

public class MyRenownBarterBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEventDispatcher.Instance.OnBarterablesRequested += OnBarterablesRequested;
    }

    private void OnBarterablesRequested(BarterData args)
    {
        if (args == null || args.IsAiBarter || args.OffererHero == null || args.OtherHero == null)
        {
            return;
        }

        GoldBarterable gold = new GoldBarterable(
            args.OffererHero, args.OtherHero, args.OffererParty, args.OtherParty, 200);
        args.AddBarterable<GoldBarterGroup>(gold, isContextDependent: true);
    }

    public override void SyncData(IDataStore dataStore)
    {
    }
}
```

Read the current state of a deal: groups, lines, and which lines are offered:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.BarterSystem;

public static void DumpBarter(BarterData data)
{
    if (data == null)
    {
        return;
    }

    Debug.Print("offerer faction = " + data.OffererMapFaction.Name.ToString(), 0);
    Debug.Print("groups = " + data.GetBarterGroups().Count, 0);
    Debug.Print("lines = " + data.GetBarterables().Count, 0);

    foreach (Barterable line in data.GetOfferedBarterables())
    {
        Debug.Print("offered: " + line.StringID + " x" + line.CurrentAmount, 0);
    }
}
```

Attach a real good to a deal and confirm the line landed in the right group, shaped after `ItemBarterBehavior.cs:104`:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.BarterSystem;
using TaleWorlds.CampaignSystem.BarterSystem.Barterables;
using TaleWorlds.CampaignSystem.Roster;

public static bool RegisterGoodsLine(BarterData data, Hero offerer, Hero other)
{
    if (data == null || offerer == null || other == null)
    {
        return false;
    }

    if (offerer.PartyBelongedTo == null || other.PartyBelongedTo == null)
    {
        return false;
    }

    // A real barterable: ItemBarterable, with the constructor signature from ItemBarterBehavior line 104
    ItemRosterElement goods = offerer.PartyBelongedTo.ItemRoster.GetElementCopyAtIndex(0);
    ItemBarterable line = new ItemBarterable(offerer, other, offerer.PartyBelongedTo, other.PartyBelongedTo, goods, goods.EquipmentElement.GetBaseValue());
    data.AddBarterable<ItemBarterGroup>(line);
    if (line.Group == null)
    {
        Debug.Print("ItemBarterGroup missing, the line was dropped silently", 0);
        return false;
    }

    line.SetIsOffered(true);
    return data.GetOfferedBarterables().Contains(line);
}
```

## Risks and crash boundaries

- **`AddBarterable<T>` silently discards a non-match.** No `else`, no log, no exception (`BarterData.cs:46-57`). If your custom group never reaches `DiplomacyModel.GetBarterGroups()`, the line simply disappears.
- **The generic argument is the group type, not the line type.** `AddBarterable<GoldBarterGroup>(myBarterable)` is correct; naming the line type fails to compile, while naming a **base** group type compiles and silently binds to the first matching instance in the list.
- **The constructor depends on `Campaign.Current`.** `_barterGroups` comes from `Campaign.Current.Models.DiplomacyModel.GetBarterGroups()` (`BarterData.cs:42`). `new BarterData(...)` at the main menu or before the campaign exists throws immediately.
- **`OffererParty` and `OtherParty` can be null.** `ExecuteAiBarter` passes `null, null` on purpose (`BarterManager.cs:98`). With a null hero as well, `OffererMapFaction` throws — the `?.` guards only the hero.
- **Two getters return the internal lists themselves.** `GetBarterGroups()` and `GetBarterables()` are not copies. Adding or removing externally bypasses `Initialize` and yields null-`Group` or ungrouped lines.
- **`AddBarterGroup` does not de-duplicate.** The manager appends a `DefaultsBarterGroup` internally; appending your own produces a second one.
- **Only the first match takes effect.** Inheritance ambiguity is resolved by list order, and that order comes from the `DiplomacyModel` implementation — a mod override can change it.
- **Does not enter the save.** There is no `SaveableField` or `SaveableProperty` anywhere; the session is one-shot and never restored on load.
- **Extremely short lifetime.** From `StartBarterOffer` until the player closes the trade screen. **Never cache a `BarterData` in a field** — it becomes garbage once the session ends, and it keeps `Hero` references alive through its barterables.

## Cross-Version Notes

`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.BarterSystem/BarterData.cs` is a 90-line original-source file with zero save attributes. Four things to check across versions: whether the constructor still pulls groups from `DiplomacyModel`; whether `AddBarterable<T>` keeps its first-match-plus-silent-discard semantics; whether `GetBarterables` still returns the internal list rather than a copy; and whether the `BarterManager.BarterContextInitializer` delegate signature changed — it is the type of a `BarterData` field, so a signature change drags every barter behavior with it.

## Dependencies

- Sole constructor: [BarterManager](../BarterManager) at `StartBarterOffer` (`BarterManager.cs:81`) and `ExecuteAiBarter` (`BarterManager.cs:98`), followed by `CampaignEventDispatcher.Instance.OnBarterablesRequested(args)` broadcasting the instance out
- Source of the groups: `GetBarterGroups()` on [DiplomacyModel](../DiplomacyModel), `ToList()`-copied in the constructor
- Line type: [Barterable](../Barterable) is the element type of `_barterables`, and `AddBarterable<T>` calls its `Initialize`
- Group type: [BarterGroup](../BarterGroup) is the element type of `_barterGroups`, and `GetBarterGroup<T>` filters it with `OfType`
- Both sides: [Hero](../Hero) and [PartyBase](../PartyBase) (or [MobileParty](../MobileParty)); the faction side is `IFaction`
- Behavior-side consumers: `GoldBarterBehavior`, `ItemBarterBehavior`, `FiefBarterBehavior`, `SetPrisonerFreeBarterBehavior`, and `TransferPrisonerBarterBehavior` all push lines through `AddBarterable<XxxBarterGroup>`
- Bucket index: [campaign API section](../)
