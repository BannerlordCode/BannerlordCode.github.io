---
title: "Workshop"
description: "A concrete workshop instance inside a town in the campaign: it binds its owning settlement, owning hero, and production type, and records working capital, profit/loss, and daily production progress — the carrier of workshop economy and player investment."
---
# Workshop

**Namespace:** `TaleWorlds.CampaignSystem.Settlements.Workshops`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class Workshop : SettlementArea`  
**Base:** `SettlementArea`  
**File:** `TaleWorlds.CampaignSystem/Settlements/Workshops/Workshop.cs`

## Overview

`Workshop` is the **runtime instance of one specific workshop in one specific town** in the Bannerlord campaign world — not the "type definition" of a workshop (that is [`WorkshopType`](../WorkshopType)), and not the daily production logic of a workshop (that lives in [`WorkshopsCampaignBehavior`](../WorkshopsCampaignBehavior)). It binds four things together:

- **Location and ownership**: which town ([`Settlement`](../Settlement/) / [`Town`](../Town/)) it belongs to, which hero ([`Hero`](../Hero/)) owns it, and its unique tag `Tag` in the town.
- **Production type**: `WorkshopType` decides which raw materials ([`ItemCategory`](../../campaign-ext/)) it turns into which goods, and how fast.
- **Ledger**: `Capital` (current working capital), `InitialCapital` (starting capital), `ProfitMade` (cumulative profit), `Expense` (daily overhead).
- **Production progress**: `_productionProgress[]` (one 0~1 progress per `WorkshopType.Productions`).

Nearly every "workshop mod" touches it: reading which shops the player runs in a town, seeing which one is profitable, switching one to another production, or injecting capital into one. Note that `Workshop` is only a **state and ownership container**; the actual "produce / sell / deduct money every day" is driven by `WorkshopsCampaignBehavior`'s daily tick and reads its economic parameters through [`WorkshopModel`](../WorkshopModel).

## Mental Model

Think of `Workshop` as **"the business license plus ledger of one shopfront in a town"**:

- It lives in the **campaign layer**, not in the battle scene (Mission). A workshop does not become an `Agent` when a battle starts.
- One `Workshop` instance corresponds to one **fixed slot in a town** (unique `Tag`). The slots are allocated at game start by `Town.InitializeWorkshops(...)`, and the `Workshop[]` array length is fixed; the `Workshop` you get is an already-existing, serialized object, so **do not `new Workshop(...)` yourself**.
- It **does not run the production calculation**: `ChangeGold`, `SetProgress`, `UpdateLastRunTime` are all "passive records", called by `WorkshopsCampaignBehavior.DailyTickTown` inside each town's daily tick. Calling them yourself is equivalent to editing the ledger by hand, and desyncs from the behavior's internal warehouse / progress data.
- **When to call `Workshop`'s methods directly**: read-only (see profit, see ownership, see progress), or use `SetCustomName` to rename the shop.
- **When not to call the mutation methods directly**: changing owner, changing production type, or changing capital should go through the corresponding Action (`ChangeOwnerOfWorkshopAction`, `ChangeProductionTypeOfWorkshopAction`, `InitializeWorkshopAction`), otherwise you bypass behavior data and events — see the Risks section below.
- **Dependencies**: upstream it depends on `WorkshopType` (an `MBObjectBase` loaded from XML) and `WorkshopModel` (economic parameters); downstream it is read by `WorkshopsCampaignBehavior` (daily tick), the `Clan` finance panel, and the warehouse UI; changes are broadcast through `CampaignEventDispatcher`.

## Dependencies

| Direction | Node | Relationship |
|-----------|------|--------------|
| Upstream (definition / parameters) | [WorkshopType](../WorkshopType) | Decides the production recipe `Productions`, name, and hidden state |
| Upstream (parameters) | [WorkshopModel](../WorkshopModel) | Source of `InitialCapital` / `DailyExpense` / `CapitalLowLimit`, etc. |
| Downstream (driver) | [WorkshopsCampaignBehavior](../WorkshopsCampaignBehavior) | Calls `SetProgress` / `ChangeGold` / `UpdateLastRunTime` in the daily tick |
| Downstream (mutation entry) | [ChangeOwnerOfWorkshopAction](../../campaign-ext/ChangeOwnerOfWorkshopAction/) · [ChangeProductionTypeOfWorkshopAction](../../campaign-ext/ChangeProductionTypeOfWorkshopAction/) · [InitializeWorkshopAction](../../campaign-ext/InitializeWorkshopAction/) | Correct entries for changing owner / switching production / opening a shop at game start |
| Events | [CampaignEventDispatcher](../CampaignEventDispatcher) | `OnItemProduced` / `OnItemConsumed`; `WorkshopOwnerChangedEvent` / `WorkshopTypeChangedEvent` |
| Warehouse interface | [IWorkshopWarehouseCampaignBehavior](../IWorkshopWarehouseCampaignBehavior) | The player workshop's warehouse in/out ratio and raw-material checks |
| Ownership | [Hero](../Hero/) · [Clan](../Clan/) | `Owner.OwnedWorkshops` holds the reverse reference; the player's shops count toward clan finances |
| Container | [Town](../Town/) · [Settlement](../Settlement/) | `Town.Workshops` is the acquisition entry; `Settlement` is the geographic location |

## Risks

> Directly changing a `Workshop`'s low-level setter without going through an Action is the most common source of "save corruption / black-screen warehouse" bugs in workshop mods.

1. **Changing owner / switching production must go through the Action — do not bare-call `ChangeOwnerOfWorkshop` / `ChangeWorkshopProduction`.** Those two methods only change fields; `WorkshopsCampaignBehavior` maintains the player workshop's `_workshopData` (warehouse progress, stock ratio) and `_warehouseRosterPerSettlement` only inside `OnWorkshopOwnerChanged` / `OnWorkshopTypeChanged`. A bare call desyncs the "warehouse data" from the actual workshop: when the player opens the "enter warehouse" menu in town they may get a mismatched `ItemRoster`, or even silently lose the warehouse because `_workshopData` cannot find the corresponding entry. See Example 2 for the correct approach.
2. **`SetProgress(i, value)` throws `IndexOutOfRangeException` on out-of-range.** The `_productionProgress` array length is exactly `WorkshopType.Productions.Count`. Any `i` must satisfy `0 <= i < WorkshopType.Productions.Count`. After switching production the array is rebuilt by `ChangeWorkshopProduction`, and the old index meaning has changed.
3. **Do not pump capital with `ChangeGold` arbitrarily.** `Capital` is managed by the daily tick's `HandlePlayerWorkshopExpense` / `HandleNotableWorkshopExpense`; when capital drops below `CapitalLowLimit` and the owner cannot pay the overhead, the behavior triggers `ChangeWorkshopOwnerByBankruptcy` (via `ChangeOwnerOfWorkshopAction.ApplyByBankruptcy`, the shop is taken over by a notable). Yanking `Capital` up hides the bankruptcy logic, and pulling it down directly triggers an early bankruptcy transfer.
4. **Do not `new Workshop(...)` to build your own instance.** Slots and serialization are owned by the engine; on load, `AfterLoad()` corrects `_productionProgress` length to `WorkshopType.Productions.Count` and pushes instances with `LastRunCampaignTime == CampaignTime.Zero` to "now". A self-`new`'d object is neither saved nor present in `Town.Workshops`, and may instead become an orphan reference.
5. **`WorkshopType` is an `MBObjectBase` (loaded from module XML), cannot be `new`'d.** Obtain it through `WorkshopType.Find(id)` or `WorkshopType.All`; passing a non-existent / `null` type to `InitializeWorkshop` / `ChangeWorkshopProduction` will crash at `type.Productions`.
6. **Changing `Capital` / `ProductionProgress` outside the daily tick may desync from the behavior's `_workshopData`.** If you must change them, prefer operating inside a `CampaignBehaviorBase` `DailyTickTownEvent` subscription, where the behavior itself is running the same step.

## How to Obtain

```csharp
// 路径 1：从当前所在城镇拿到全部工坊（每个元素是 Workshop）
Town town = Settlement.CurrentSettlement.Town;
Workshop[] workshops = town.Workshops;
foreach (Workshop w in workshops)
{
    // w 是一间具体工坊
}

// 路径 2：从某个英雄拿到其拥有的全部工坊
MBReadOnlyList<Workshop> owned = Hero.MainHero.OwnedWorkshops;
foreach (Workshop w in owned)
{
    // 玩家开的铺子
}

// 路径 3：从 WorkshopType 的定义反查“所有此类工坊”并没有直接索引，
// 通常遍历 Town.Workshops 按 w.WorkshopType 过滤：
foreach (Town t in Town.AllTowns)
{
    foreach (Workshop w in t.Workshops)
    {
        if (w.WorkshopType == WorkshopType.Find("brewery"))
        {
            // 找到所有酿酒坊
        }
    }
}
```

> `Town.Workshops` is a `Workshop[]`; `Hero.OwnedWorkshops` is an `MBReadOnlyList<Workshop>`. Both reference the same set of instances.

## Key Members (by topic)

### Identity and ownership

#### `public override Settlement Settlement { get; }`
The town this workshop belongs to ([`Settlement`](../Settlement/)). Read-only, injected at construction by `Town.InitializeWorkshops`, and serialized. **When to call**: any logic that needs to know "where this shop is" (e.g. neighboring-village supply, town tax judgment).

#### `public override string Tag { get; }`
The workshop's unique short tag within the town (e.g. `"workshop_1"`). Participates in `GetHashCode()` together with `Settlement`. Read-only. **When to call**: when you need a stable way to distinguish multiple workshops in the same town (more robust than an array index).

#### `public override Hero Owner { get; }`
The current owning hero. Read-only property, but internally mutable; change should go through `ChangeOwnerOfWorkshopAction`. **Side-effect note**: `Owner.OwnedWorkshops` is maintained by the reverse list `AddOwnedWorkshop` / `RemoveOwnedWorkshop` — a bare `ChangeOwnerOfWorkshop` does sync that list, but does **not** sync the behavior's warehouse data (see Risks).

#### `public override TextObject Name { get; }`
Display name: prefers the custom name set by `SetCustomName`, otherwise `WorkshopType.Name`; if neither exists, returns `Empty Workshop`. Read-only. **When to call**: UI lists, logs, dialogue text.

#### `public WorkshopType WorkshopType { get; private set; }`
The workshop's current production type. Decides `Productions` (recipe), `IsHidden`, and name. **When to set**: only through `ChangeWorkshopProduction` or the corresponding `ChangeProductionTypeOfWorkshopAction`; do not assign `null`.

### Operating state

#### `public int Capital { get; private set; }`
Current working capital. Increased / decreased by `ChangeGold`, deducted daily by overhead, increased when production is sold. **When to call**: to judge profitability or proximity to the bankruptcy threshold `WorkshopModel.CapitalLowLimit`.

#### `public int InitialCapital { get; private set; }`
The initial capital at game start / purchase. Set from `WorkshopModel.InitialCapital` inside `InitializeWorkshop`, then unchanged.

#### `public int ProfitMade { get; }`
Cumulative profit, computed as `MathF.Max(Capital - InitialCapital, 0)`. **Read-only, derived value**: the caller does not need to maintain it.

#### `public int Expense { get; }`
The fixed daily overhead, equal to `Campaign.Current.Models.WorkshopModel.DailyExpense`. **Read-only, derived value**; if `WorkshopType.IsHidden` is true, the behavior skips this overhead in the daily tick.

#### `public CampaignTime LastRunCampaignTime { get; private set; }`
The campaign time of the last production cycle. Written by `UpdateLastRunTime` as `CampaignTime.Now`. **When to call**: when you need to judge "how long since it last produced" or a cooldown.

### Production progress

#### `public float GetProductionProgress(int index)`
Reads the progress (0~1) of the `index`-th recipe. `index` must be `< WorkshopType.Productions.Count`, otherwise out of range. **When to call**: read-only display of the progress bar, or to judge whether a recipe can produce this round.

#### `public void SetProgress(int i, float value)`
Writes the progress of the `i`-th recipe. `i` out of range throws `IndexOutOfRangeException`. **Side effect**: only changes this instance's array; `WorkshopsCampaignBehavior.RunTownWorkshop` accumulates `WorkshopModel.GetEffectiveConversionSpeedOfProduction` daily and writes back. **When to call**: generally do not call manually; if you must, do it inside a daily-tick subscription and ensure `i` is within `Productions.Count`.

### Lifecycle and initialization

#### `public Workshop(Settlement settlement, string tag)`
**Engine-internal** constructor: allocates the slot, zeroes capital, does not bind `WorkshopType` and `Owner`. **Mods should not call it** — it is called by `Town.InitializeWorkshops`; afterwards, prefer `InitializeWorkshopAction.ApplyByNewGame`.

#### `public void InitializeWorkshop(Hero owner, WorkshopType type)`
Turns an empty slot into a real operating workshop: sets `WorkshopType`, `_owner` (and `owner.AddOwnedWorkshop(this)`), sets `Capital` / `InitialCapital` from `WorkshopModel.InitialCapital`, and allocates the progress array sized to `type.Productions.Count`. **The normal entry is** `InitializeWorkshopAction.ApplyByNewGame(workshop, owner, type)`; calling this method directly does not fire `WorkshopOwnerChangedEvent`, and for the player's shop does not build `_workshopData`.

#### `internal void AfterLoad()`
After save load, corrects: aligns `_productionProgress` length with `WorkshopType.Productions.Count` (rebuilds if inconsistent, == lost progress), and pushes `LastRunCampaignTime == Zero` to Now. **Not accessible to mods (internal)** — recorded here only so you do not mistakenly think you can manually "fix" progress.

### Mutation operations (most should go through an Action)

#### `public void ChangeOwnerOfWorkshop(Hero newOwner, WorkshopType type, int capital)`
Low-level owner change: removes from old owner's `RemoveOwnedWorkshop`, adds to new owner's `AddOwnedWorkshop`, `Capital = capital`; if `type != WorkshopType`, also calls `ChangeWorkshopProduction`. **Side effect / risk**: syncs `Hero.OwnedWorkshops`, but does **not** sync `WorkshopsCampaignBehavior`'s warehouse data, and fires no event. Correct entry: `ChangeOwnerOfWorkshopAction.ApplyByPlayerBuying` / `ApplyByDeath` / `ApplyByBankruptcy`.

#### `public void ChangeWorkshopProduction(WorkshopType newWorkshopType)`
Changes production type and **rebuilds** the `_productionProgress` array (length = the new type's `Productions.Count`, old progress cleared). **Risk**: loses progress; a bare call fires no `WorkshopTypeChangedEvent`, and the player's shop's `_workshopData` is not refreshed. Correct entry: `ChangeProductionTypeOfWorkshopAction.Apply(workshop, newType, ignoreCost)`.

#### `public void SetCustomName(TextObject customName)`
Sets a custom shop name, overriding `WorkshopType.Name`. **Safe, can be called directly**: only changes the display name, no economic side effect. An empty name falls back to `WorkshopType.Name` or `Empty Workshop`.

#### `public void ChangeGold(int goldChange)`
`Capital += goldChange`. **Side effect**: directly touches the ledger. Called daily by `WorkshopsCampaignBehavior` when production is sold (added) and on overhead (subtracted). **When to call**: unless you explicitly want to inject / deduct capital, do not call it — it interferes with bankruptcy and profit/loss accounting.

#### `public void UpdateLastRunTime()`
`LastRunCampaignTime = CampaignTime.Now`. Called by `RunTownWorkshop` when there is production that day. **When to call**: after manually simulating a production cycle, if you need to refresh the timestamp, call it inside a daily-tick subscription.

### Misc

#### `public override int GetHashCode()`
Hash based on `Settlement` and `Tag` (used to stably identify the same workshop in dictionaries / collections). Safe to use directly.

#### `public override string ToString()`
`Name.ToString() + " " + Settlement.ToString()`, for logs / debugging.

## Typical Usage Examples

### Example 1: List each workshop's name, type, and cumulative profit in the current town (read-only, safe)

```csharp
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.CampaignSystem.Settlements.Workshops;

Town town = Settlement.CurrentSettlement.Town;
foreach (Workshop workshop in town.Workshops)
{
    string name = workshop.Name.ToString();
    string type = workshop.WorkshopType?.Name.ToString() ?? "(none)";
    int profit = workshop.ProfitMade;
    int capital = workshop.Capital;
    InformationManager.DisplayMessage(
        new InformationMessage($"{name} [{type}] 利润 {profit}, 资本 {capital}"));
}
```

### Example 2: Switch one of the player's workshops to "brewery" — through the correct Action

```csharp
using TaleWorlds.CampaignSystem.Settlements.Workshops;
using TaleWorlds.CampaignSystem.Actions;

// 获取目标工坊：玩家拥有的第一间，或任意 town.Workshops 元素
Workshop playerShop = Hero.MainHero.OwnedWorkshops.FirstOrDefault();
if (playerShop != null)
{
    // 正确的转产入口：会扣转产费、同步 WorkshopsCampaignBehavior 的 _workshopData，
    // 并广播 WorkshopTypeChangedEvent
    WorkshopType brewery = WorkshopType.Find("brewery");
    if (brewery != null && playerShop.WorkshopType != brewery)
    {
        ChangeProductionTypeOfWorkshopAction.Apply(playerShop, brewery);
    }
}
```

> Contrast: directly calling `playerShop.ChangeWorkshopProduction(brewery)` also switches the type, but loses production progress and does not refresh the player's warehouse data, so over time the warehouse menu will disagree with reality. Always prefer `ChangeProductionTypeOfWorkshopAction` / `ChangeOwnerOfWorkshopAction`.

### Example 3: Detect whether one of the player's workshops is near bankruptcy (read-only diagnosis)

```csharp
Workshop w = Hero.MainHero.OwnedWorkshops.FirstOrDefault();
if (w != null)
{
    int lowLimit = Campaign.Current.Models.WorkshopModel.CapitalLowLimit;
    bool nearBankruptcy = w.Capital <= lowLimit && w.Owner.Gold < w.Expense;
    if (nearBankruptcy)
    {
        InformationManager.DisplayMessage(
            new InformationMessage($"{w.Name} 即将破产（资本 {w.Capital} / 下限 {lowLimit}）"));
    }
}
```

## Cross-Version Notes

- **The `Workshop` public API is identical between v1.3.15 and v1.4.5**: `Workshop(Settlement, string)`, `InitializeWorkshop`, `ChangeOwnerOfWorkshop`, `ChangeWorkshopProduction`, `SetCustomName`, `ChangeGold`, `SetProgress`, `GetProductionProgress`, `UpdateLastRunTime`, `AfterLoad` (internal), `GetHashCode`, `ToString`, and all property names and signatures are unchanged.
- `WorkshopType`'s `All` (`=> Campaign.Current.Workshops`) and `Find(string)` also exist in both versions; `Productions` is `MBReadOnlyList<WorkshopType.Production>`.
- The behavior layer `WorkshopsCampaignBehavior`, the three Actions, and `WorkshopModel`'s economic parameters (`InitialCapital` / `DailyExpense` / `CapitalLowLimit`) also apply in v1.3.15, so cross-version mods can depend on them directly.

## See Also

- ↑ Parent: [Campaign API index](../../campaign/) · [API root](../../)
- ↔ Siblings: [Town](../Town/) · [Settlement](../Settlement/) · [Village](../Village/) · [Hero](../Hero/) · [Clan](../Clan/) · [WorkshopData](../WorkshopData/) · [MobileParty](../MobileParty/) · [Campaign](../Campaign/)
- Related types / behaviors / actions:
  - [WorkshopType](../WorkshopType) — production type definition (recipe, name)
  - [WorkshopModel](../WorkshopModel) — workshop economic parameters
  - [WorkshopsCampaignBehavior](../WorkshopsCampaignBehavior) — daily-tick driver
  - [InitializeWorkshopAction](../../campaign-ext/InitializeWorkshopAction/) — open a shop at game start
  - [ChangeOwnerOfWorkshopAction](../../campaign-ext/ChangeOwnerOfWorkshopAction/) — change owner / buy / sell / bankruptcy
  - [ChangeProductionTypeOfWorkshopAction](../../campaign-ext/ChangeProductionTypeOfWorkshopAction/) — switch production
  - [CampaignEventDispatcher](../CampaignEventDispatcher) — production / consumption and workshop events
  - [IWorkshopWarehouseCampaignBehavior](../IWorkshopWarehouseCampaignBehavior) — player warehouse in/out interface
