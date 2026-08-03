---
title: "Workshop"
description: "A runtime instance of one workshop inside a town — it binds the owning town, the owner Hero, and a WorkshopType, and tracks operating capital, cumulative profit, and per-production progress. This is the state container for the player/clan workshop economy."
---

# Workshop

**Namespace:** TaleWorlds.CampaignSystem.Settlements.Workshops
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class Workshop : SettlementArea`
**Base:** `SettlementArea`
**Source:** `TaleWorlds.CampaignSystem/Settlements/Workshops/Workshop.cs`

## Overview

`Workshop` is the **runtime instance of one specific workshop in one specific town** in the campaign world. It is not the "type definition" of a workshop (that is [`WorkshopType`](../../campaign-ext/WorkshopType/)), nor is it the daily production logic (that lives in [`WorkshopsCampaignBehavior`](../../campaign-ext/WorkshopsCampaignBehavior/)). A `Workshop` bundles four things together:

- **Location and ownership** — which town it belongs to ([`Settlement`](../Settlement/) / [`Town`](../../campaign/)), which [`Hero`](../Hero/) owns it, and a unique `Tag` within that town.
- **Production type** — the `WorkshopType` decides which raw [`ItemCategory`](../../campaign-ext/) inputs get converted into which outputs, and at what conversion speed.
- **Operating ledger** — `Capital` (current working funds), `InitialCapital` (seed money), `ProfitMade` (cumulative profit), and `Expense` (daily overhead).
- **Production progress** — `_productionProgress[]`, one 0–1 progress value per `WorkshopType.Productions` entry.

Almost every "workshop mod" touches this type: listing which shops the player runs, seeing which ones are profitable, switching a shop's production, or injecting capital. Note that `Workshop` is purely a **state and ownership container**; the actual "produce / sell / deduct expense every day" work is driven by `WorkshopsCampaignBehavior`'s daily tick, which reads economy parameters from [`WorkshopModel`](../../campaign-ext/WorkshopModel/).

## Mental Model

Think of a `Workshop` as **"a shop's business license plus its ledger"** sitting in a town:

- It lives in the **Campaign layer**, not the battle scene (Mission). Entering a fight does not turn a workshop into an `Agent`.
- One `Workshop` instance corresponds to **one fixed slot** in a town (unique `Tag`). Slots are allocated by `Town.InitializeWorkshops(...)` at game start; the `Workshop[]` array length is fixed. The `Workshop` you get is an already-existing, serialized object — **do not `new Workshop(...)` yourself**.
- It **does no production math on its own**. `ChangeGold`, `SetProgress`, and `UpdateLastRunTime` are passive record-keepers, called by `WorkshopsCampaignBehavior.DailyTickTown` during each town's daily tick. Calling them yourself is like hand-editing the ledger, and it will drift out of sync with the behavior's warehouse/progress data.
- **When it is fine to use `Workshop`'s own members directly:** read-only inspection (profit, ownership, progress) or `SetCustomName` to rename the shop.
- **When NOT to call its mutators directly:** changing owner, changing production type, or changing capital should go through the matching Action (`ChangeOwnerOfWorkshopAction`, `ChangeProductionTypeOfWorkshopAction`, `InitializeWorkshopAction`). Bypassing them skips the behavior's data and events — see Risks below.
- **Dependencies:** upstream it relies on `WorkshopType` (an XML-loaded `MBObjectBase`) and `WorkshopModel` (economy parameters). Downstream it is read by `WorkshopsCampaignBehavior` (daily tick), the `Clan` finance panel, and the warehouse UI. Changes are broadcast through `CampaignEventDispatcher`.

## When to Use / When NOT to Use

**Use `Workshop` directly when:**
- You only need to read state: list a town's or a hero's workshops, read `Capital` / `ProfitMade` / `Expense`, read `GetProductionProgress(int)`, or rename a shop with `SetCustomName`.
- You are inside a daily-tick subscription and need to nudge progress in lock-step with the behavior (rare).

**Do NOT use `Workshop`'s low-level mutators directly — use the Actions instead:**

| You want to… | Wrong (bypasses behavior) | Right (keeps data + events consistent) |
|---|---|---|
| Buy / transfer / bankruptcy a shop | `workshop.ChangeOwnerOfWorkshop(...)` | `ChangeOwnerOfWorkshopAction.ApplyByPlayerBuying` / `ApplyByDeath` / `ApplyByBankruptcy` |
| Switch production type | `workshop.ChangeWorkshopProduction(...)` | `ChangeProductionTypeOfWorkshopAction.Apply(workshop, newType, ignoreCost)` |
| Create a new shop at game start | `workshop.InitializeWorkshop(...)` | `InitializeWorkshopAction.ApplyByNewGame(workshop, owner, type)` |
| Inject / withdraw capital | `workshop.ChangeGold(...)` | Let the daily tick handle it, or use the proper economy flow |

## Dependencies

`Workshop` sits in the middle of a small dependency graph. All of these links resolve to existing pages (or bucket indexes where a deep page is not yet written):

- Upstream (definition): [`WorkshopType`](../../campaign-ext/WorkshopType/) — provides `Productions`, name, and hidden flag.
- Upstream (parameters): [`WorkshopModel`](../../campaign-ext/WorkshopModel/) — source of `InitialCapital` / `DailyExpense` / `CapitalLowLimit`.
- Downstream (driver): [`WorkshopsCampaignBehavior`](../../campaign-ext/WorkshopsCampaignBehavior/) — daily tick calls `SetProgress` / `ChangeGold` / `UpdateLastRunTime`.
- Downstream (correct mutation entry points): [`ChangeOwnerOfWorkshopAction`](../../campaign-ext/ChangeOwnerOfWorkshopAction/), [`ChangeProductionTypeOfWorkshopAction`](../../campaign-ext/ChangeProductionTypeOfWorkshopAction/), [`InitializeWorkshopAction`](../../campaign-ext/InitializeWorkshopAction/).
- Events: [`CampaignEventDispatcher`](../../campaign-ext/CampaignEventDispatcher/) — `OnItemProduced` / `OnItemConsumed`, `WorkshopOwnerChangedEvent` / `WorkshopTypeChangedEvent`.
- Warehouse interface: [`IWorkshopWarehouseCampaignBehavior`](../../campaign-ext/IWorkshopWarehouseCampaignBehavior/) — player workshop warehouse in/out ratios and input checks.
- Ownership: [`Hero`](../Hero/) and [`Clan`](../Clan/) — `Owner.OwnedWorkshops` holds the reverse reference; player shops count toward clan finance.
- Container: [`Town`](../Town/) (use `Town.Workshops` as the access point) and [`Settlement`](../Settlement/) (the geographic location).
- Output goods: [`ItemObject`](../../core/ItemObject/) — referenced by the `ItemCategory` of each `WorkshopType.Production`.

## Risks

> Directly mutating `Workshop`'s low-level setters without going through an Action is the most common source of "corrupted save / black-screen warehouse" bugs in workshop mods.

1. **Switching owner / production must go through the Actions — do not call `ChangeOwnerOfWorkshop` / `ChangeWorkshopProduction` directly.** Those methods only flip fields. `WorkshopsCampaignBehavior` maintains the player workshop's `_workshopData` (warehouse progress, stock ratio) and `_warehouseRosterPerSettlement` only inside `OnWorkshopOwnerChanged` / `OnWorkshopTypeChanged`. A raw call desynchronizes the warehouse data from the actual workshop: the player may open the "Enter Warehouse" menu and get a mismatched `ItemRoster`, or silently lose the warehouse because `_workshopData` has no matching entry. Use the pattern in Example 2.
2. **`SetProgress(i, value)` throws `IndexOutOfRangeException` if `i` is out of range.** The `_productionProgress` array length is exactly `WorkshopType.Productions.Count`. Any `i` must satisfy `0 <= i < WorkshopType.Productions.Count`. After a production switch the array is rebuilt by `ChangeWorkshopProduction`, so old indices change meaning.
3. **Do not inflate `Capital` with `ChangeGold`.** `Capital` is managed by the daily tick's `HandlePlayerWorkshopExpense` / `HandleNotableWorkshopExpense`. When capital drops below `CapitalLowLimit` and the owner cannot pay, the behavior triggers `ChangeWorkshopOwnerByBankruptcy` (via `ChangeOwnerOfWorkshopAction.ApplyByBankruptcy`) and the shop is taken over by a notable. Hand-raising `Capital` hides the bankruptcy logic; hand-lowering it forces an early bankruptcy transfer.
4. **Do not `new Workshop(...)`.** Slots and serialization belong to the engine. On save load, `AfterLoad()` corrects `_productionProgress` to `WorkshopType.Productions.Count` and pushes any `LastRunCampaignTime == CampaignTime.Zero` instance to "now". A hand-`new`ed object is neither saved nor present in `Town.Workshops`, and can become an orphan reference.
5. **`WorkshopType` is an `MBObjectBase` loaded from module XML — it cannot be `new`ed.** Obtain it via `WorkshopType.Find(id)` or `WorkshopType.All`. Passing a `null` or unknown type to `InitializeWorkshop` / `ChangeWorkshopProduction` crashes at `type.Productions`.
6. **Mutating `Capital` / `ProductionProgress` outside the daily tick can desync from `_workshopData`.** If you must, do it inside a `CampaignBehaviorBase` subscription to `DailyTickTownEvent`, when the behavior is running the same step.

## Members (grouped by theme)

### Identity and ownership

#### `public override Settlement Settlement { get; }`
The town this workshop belongs to ([`Settlement`](../Settlement/)). Read-only, injected at construction by `Town.InitializeWorkshops` and serialized. **Use when:** any logic needs to know where the shop is (e.g. nearby village supply, town tax checks).

#### `public override string Tag { get; }`
A unique short label within the town (e.g. `"workshop_1"`). Together with `Settlement` it participates in `GetHashCode()`. Read-only. **Use when:** you need a stable key to distinguish multiple workshops in the same town — more robust than an array index.

#### `public override Hero Owner { get; }`
The current owning hero. Read-only property, but internally mutable; changes should go through `ChangeOwnerOfWorkshopAction`. **Side effect note:** the reverse list `Owner.OwnedWorkshops` is maintained by `AddOwnedWorkshop` / `RemoveOwnedWorkshop`. Raw `ChangeOwnerOfWorkshop` does sync that list, but does NOT sync the behavior's warehouse data (see Risks).

#### `public override TextObject Name { get; }`
Display name: uses the `SetCustomName` value first, otherwise `WorkshopType.Name`, otherwise the literal `"Empty Workshop"`. Read-only. **Use when:** UI lists, logs, or dialog text.

#### `public WorkshopType WorkshopType { get; private set; }`
This workshop's current production type. It decides `Productions` (recipe), `IsHidden`, and the name. **Set only through** `ChangeWorkshopProduction` or the matching `ChangeProductionTypeOfWorkshopAction`; never assign `null`.

### Operating state

#### `public int Capital { get; private set; }`
Current working funds. Changed by `ChangeGold`, reduced by daily overhead, increased when production is sold. **Use when:** judging profitability or proximity to the `WorkshopModel.CapitalLowLimit` bankruptcy threshold.

#### `public int InitialCapital { get; private set; }`
Seed capital at game start / purchase. Set from `WorkshopModel.InitialCapital` inside `InitializeWorkshop`, then never changes.

#### `public int ProfitMade { get; }`
Cumulative profit, computed as `MathF.Max(Capital - InitialCapital, 0)`. Read-only derived value — callers need not maintain it.

#### `public int Expense { get; }`
Fixed daily overhead, equal to `Campaign.Current.Models.WorkshopModel.DailyExpense`. Read-only derived value. If `WorkshopType.IsHidden` is true, the behavior skips this expense during the daily tick.

#### `public CampaignTime LastRunCampaignTime { get; private set; }`
The campaign time of the last production cycle. Written by `UpdateLastRunTime` as `CampaignTime.Now`. **Use when:** deciding "how long since it produced" or for cooldowns.

### Production progress

#### `public float GetProductionProgress(int index)`
Reads the progress (0–1) of the `index`-th recipe. `index` must be `< WorkshopType.Productions.Count`, or it goes out of range. **Use when:** showing a progress bar, or deciding whether a recipe can output this cycle.

#### `public void SetProgress(int i, float value)`
Writes the progress of the `i`-th recipe. Out-of-range `i` throws `IndexOutOfRangeException`. **Side effect:** only edits this instance's array; `WorkshopsCampaignBehavior.RunTownWorkshop` accumulates `WorkshopModel.GetEffectiveConversionSpeedOfProduction` each day and writes back. **Use when:** generally do not call manually; if you must, do it inside a daily-tick subscription and ensure `i` is within `Productions.Count`.

### Lifecycle and initialization

#### `public Workshop(Settlement settlement, string tag)`
**Engine-internal** constructor: allocates the slot, zeroes capital, but does NOT bind `WorkshopType` or `Owner`. **Mods should not call it** — it is invoked by `Town.InitializeWorkshops`. After that, use `InitializeWorkshopAction.ApplyByNewGame`.

#### `public void InitializeWorkshop(Hero owner, WorkshopType type)`
Turns an empty slot into an operating workshop: sets `WorkshopType`, `_owner` (and `owner.AddOwnedWorkshop(this)`), sets `Capital` / `InitialCapital` from `WorkshopModel.InitialCapital`, and allocates the progress array sized to `type.Productions.Count`. **The normal entry point is** `InitializeWorkshopAction.ApplyByNewGame(workshop, owner, type)`. Calling this method directly does not raise `WorkshopOwnerChangedEvent` and, for player shops, does not build `_workshopData`.

#### `internal void AfterLoad()`
Post-load correction: aligns `_productionProgress` length to `WorkshopType.Productions.Count` (rebuilds if mismatched, which **loses progress**), and pushes `LastRunCampaignTime == Zero` to `Now`. **Not accessible to mods (internal)** — documented only so you do not think you can hand-"repair" progress.

### Mutation operations (most should go through an Action)

#### `public void ChangeOwnerOfWorkshop(Hero newOwner, WorkshopType type, int capital)`
Low-level owner change: `RemoveOwnedWorkshop` from old owner, `AddOwnedWorkshop` to new, `Capital = capital`; if `type != WorkshopType` it also calls `ChangeWorkshopProduction`. **Side effect / risk:** syncs `Hero.OwnedWorkshops` but does NOT sync `WorkshopsCampaignBehavior`'s warehouse data and raises no event. Correct entry: `ChangeOwnerOfWorkshopAction.ApplyByPlayerBuying` / `ApplyByDeath` / `ApplyByBankruptcy`.

#### `public void ChangeWorkshopProduction(WorkshopType newWorkshopType)`
Switches production type and **rebuilds** the `_productionProgress` array (length = new type's `Productions.Count`, old progress cleared). **Risk:** loses progress; raw call does not raise `WorkshopTypeChangedEvent`, so the player shop's `_workshopData` is not refreshed. Correct entry: `ChangeProductionTypeOfWorkshopAction.Apply(workshop, newType, ignoreCost)`.

#### `public void SetCustomName(TextObject customName)`
Sets a custom shop name that overrides `WorkshopType.Name`. **Safe and directly callable:** only changes the display name, no economic side effect. A null name falls back to `WorkshopType.Name` or `"Empty Workshop"`.

#### `public void ChangeGold(int goldChange)`
`Capital += goldChange`. **Side effect:** edits the ledger directly. Called daily by `WorkshopsCampaignBehavior` when selling output (add) and paying overhead (subtract). **Use when:** only if you explicitly want to inject/withdraw capital — otherwise it interferes with bankruptcy and profit accounting.

#### `public void UpdateLastRunTime()`
`LastRunCampaignTime = CampaignTime.Now`. Called by `RunTownWorkshop` when there was output that day. **Use when:** after manually simulating a production cycle, if you need to refresh the timestamp — do it inside a daily-tick subscription.

### Misc

#### `public override int GetHashCode()`
Hash based on `Settlement` and `Tag`, so a workshop is stably identifiable in dictionaries / sets. Safe to use directly.

#### `public override string ToString()`
`Name.ToString() + " " + Settlement.ToString()`, for logs / debugging.

## Example

### Example 1 — List every workshop in the current town (read-only, safe)

```csharp
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.CampaignSystem.Settlements.Workshops;
using TaleWorlds.CampaignSystem;
using TaleWorlds.Core;

Town town = Settlement.CurrentSettlement.Town;
foreach (Workshop workshop in town.Workshops)
{
    string name = workshop.Name.ToString();
    string type = workshop.WorkshopType?.Name.ToString() ?? "(none)";
    int profit = workshop.ProfitMade;
    int capital = workshop.Capital;
    InformationManager.DisplayMessage(
        new InformationMessage($"{name} [{type}] profit {profit}, capital {capital}"));
}
```

> `Town.Workshops` is a `Workshop[]`; `Hero.OwnedWorkshops` is an `MBReadOnlyList<Workshop>`. Both reference the same set of instances.

### Example 2 — Switch a player-owned workshop to a brewery via the correct Action

```csharp
using TaleWorlds.CampaignSystem.Settlements.Workshops;
using TaleWorlds.CampaignSystem.Actions;

// Get the target: first workshop the player owns, or any town.Workshops element
Workshop playerShop = Hero.MainHero.OwnedWorkshops.FirstOrDefault();
if (playerShop != null)
{
    // Correct production-switch entry: deducts the switch cost, syncs
    // WorkshopsCampaignBehavior's _workshopData, and raises WorkshopTypeChangedEvent.
    WorkshopType brewery = WorkshopType.Find("brewery");
    if (brewery != null && playerShop.WorkshopType != brewery)
    {
        ChangeProductionTypeOfWorkshopAction.Apply(playerShop, brewery);
    }
}
```

> Contrast: `playerShop.ChangeWorkshopProduction(brewery)` also switches the type, but it loses production progress and does not refresh the player's warehouse data — over time the warehouse menu drifts out of sync with reality. Always prefer `ChangeProductionTypeOfWorkshopAction` / `ChangeOwnerOfWorkshopAction`.

### Example 3 — Diagnose whether a player workshop is near bankruptcy (read-only)

```csharp
Workshop w = Hero.MainHero.OwnedWorkshops.FirstOrDefault();
if (w != null)
{
    int lowLimit = Campaign.Current.Models.WorkshopModel.CapitalLowLimit;
    bool nearBankruptcy = w.Capital <= lowLimit && w.Owner.Gold < w.Expense;
    if (nearBankruptcy)
    {
        InformationManager.DisplayMessage(
            new InformationMessage($"{w.Name} is near bankruptcy (capital {w.Capital} / limit {lowLimit})"));
    }
}
```

## How modders extend workshop types

`Workshop` itself only stores state; extending the workshop *economy* means extending `WorkshopType` (the definitions) and `WorkshopModel` (the economy tuning).

### 1. Add a new `WorkshopType` via module XML

Workshop types are `MBObjectBase` instances loaded from your module's XML. You declare a `<WorkshopType>` with a `name`, `jobname`, and one or more `<Production>` children that list `<Inputs>` and `<Outputs>` as `ItemCategory` references, plus a `conversion_speed`:

```xml
<WorkshopType id="my_smithy" name="My Smithy" jobname="Smith"
              equipment_cost="20000" frequency="1" isHidden="false">
  <Production conversion_speed="1.0">
    <Inputs>
      <input value="iron" input_count="2" />
    </Inputs>
    <Outputs>
      <output value="tools" output_count="1" />
    </Outputs>
  </Production>
</WorkshopType>
```

At runtime read it back with `WorkshopType.Find("my_smithy")` or iterate `WorkshopType.All` (`=> Campaign.Current.Workshops`). Each `WorkshopType.Production` exposes `Inputs`, `Outputs` (both `MBReadOnlyList<(ItemCategory, int)>`), and `ConversionSpeed`. The `ItemCategory` referenced here is what ties production to concrete goods ([`ItemObject`](../../core/ItemObject/) lives under that category).

### 2. Tune the economy with a custom `WorkshopModel`

`WorkshopModel` is abstract; the active implementation is reached via `Campaign.Current.Models.WorkshopModel`. The members that drive a workshop's ledger and speed are:

- `int InitialCapital` — seed money set in `InitializeWorkshop`.
- `int DailyExpense` — the per-day overhead surfaced as `Workshop.Expense`.
- `int CapitalLowLimit` — below this (with an unable owner) the shop goes bankrupt.
- `ExplainedNumber GetEffectiveConversionSpeedOfProduction(Workshop workshop, float speed, bool includeDescriptions)` — scales a production's `conversion_speed`.

To change these, override `WorkshopModel` in your own module (substitute the model through the normal model-registration path) rather than mutating `Workshop.Capital` directly.

### 3. Place a workshop at runtime

To actually open a shop for a hero, use `InitializeWorkshopAction.ApplyByNewGame(workshop, owner, type)` on an existing `Town.Workshops` slot — do not `new Workshop(...)`. Changing its owner or type later must use `ChangeOwnerOfWorkshopAction` / `ChangeProductionTypeOfWorkshopAction` to keep the warehouse behavior consistent.

> **On "Worker":** the `Workshop` API has no per-workshop `Worker` entity. A workshop's labor is represented conceptually by `WorkshopType.JobName` (the occupation label shown in the UI, e.g. "Brewer"); the workforce count and individual workers are not modeled as objects you can read or set on `Workshop`.

## See Also

- ↑ Parent: [Campaign API index](../) · [api root](../../)
- ↔ Siblings: [Town](../Town/) · [Settlement](../Settlement/) · [Village](../Village/) · [Hero](../Hero/) · [Clan](../Clan/) · [WorkshopData](../WorkshopData/) · [MobileParty](../MobileParty/) · [Campaign](../Campaign/)
- Related behaviors / actions / models:
  - [WorkshopType](../../campaign-ext/WorkshopType/) — production-type definition (recipes, name)
  - [WorkshopModel](../../campaign-ext/WorkshopModel/) — workshop economy parameters
  - [WorkshopsCampaignBehavior](../../campaign-ext/WorkshopsCampaignBehavior/) — daily-tick driver
  - [InitializeWorkshopAction](../../campaign-ext/InitializeWorkshopAction/) — create a shop at game start
  - [ChangeOwnerOfWorkshopAction](../../campaign-ext/ChangeOwnerOfWorkshopAction/) — buy / transfer / bankruptcy
  - [ChangeProductionTypeOfWorkshopAction](../../campaign-ext/ChangeProductionTypeOfWorkshopAction/) — switch production
  - [CampaignEventDispatcher](../../campaign-ext/CampaignEventDispatcher/) — produce/consume and workshop events
  - [IWorkshopWarehouseCampaignBehavior](../../campaign-ext/IWorkshopWarehouseCampaignBehavior/) — player warehouse in/out interface
