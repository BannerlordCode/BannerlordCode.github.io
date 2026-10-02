---
title: "Village"
description: "Village settlement component: hearths, militia, village state, production, bound and trade-bound links, warehouses and prices."
---

# Village

**Namespace:** TaleWorlds.CampaignSystem.Settlements
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class Village : SettlementComponent`
**Base:** `SettlementComponent`
**File:** `TaleWorlds.CampaignSystem/Settlements/Village.cs`

## Overview

`Village` is the [Settlement](../Settlement) component for the small settlements the map is dotted with. It derives directly from `SettlementComponent` (no `Fief` step, unlike [Town](../Town)), and it is the production engine of the campaign: villages generate goods and, through `Bound`, feed the prosperity of the fief they belong to.

The two numbers that matter:

- **`Hearth`** — the village's size. 0 is deserted, below `LowHearthThreshold` (200) it is poor, below `MidHearthThreshold` (600) it is struggling, above both it is healthy. `GetHearthLevel()` returns the bucket.
- **`Militia`** — the village's own defenders, scaled from hearths.

The village also has a **state machine**, `Village.VillageStates`, driven by the daily tick: `Normal`, `BeingRaided`, `ForcedForVolunteers`, `ForcedForSupplies`, `Looted`. `IsDeserted` is the shortcut view — it is exactly `VillageState == Looted`, so a village being raided is *not* deserted even though it is not producing normally.

Three links define a village's role:

| Link | Meaning |
|------|---------|
| `Bound` | The fief whose prosperity this village feeds |
| `TradeBound` | The town whose market this village trades with |
| `Settlement` | The village's own map object |

## Mental Model

```
Settlement (IsVillage)
  └─ SettlementComponent
       └─ Village
            ├─ Hearth / HearthChange / GetHearthLevel()
            ├─ Militia / MilitiaChange
            ├─ VillageState (Bound → Unbound → Raided → ...)
            ├─ Bound ────────► Settlement (fief)      prosperity source
            ├─ TradeBound ───► Settlement (town)     market source
            ├─ MarketData ───► VillageMarketData
            ├─ ItemRoster ───► warehouse (GetWarehouseCapacity)
            └─ VillagerPartyComponent ─► the villager party
```

Typical call order:

```
MBSubModuleBase.OnCampaignStart
    Village.All populated; Village.OnInit() has run
CampaignBehaviorBase.RegisterEvents()
    CampaignEvents.DailyTickSettlementEvent / VillageStateChanged
DailyTick (village subject supplied)
    village.Hearth, village.Militia read
    models recompute HearthChange / MilitiaChange
    Village.DailyTick() advances hearth growth, state and warehouse stock
```

Traps that bite in practice:

- **`Bound` and `TradeBound` are usually different settlements.** A village bound to a castle can trade through a nearby town. Assuming they are the same is the classic village-logic bug.
- **`Bound` can be null.** Villages in the wilderness, in a rebellion, or after a `VillageState` change have no fief. Always null-check before contributing prosperity.
- **`VillageStates.Normal` is the zero value.** A village that never went through `OnInit` reports `Normal`, which looks healthy but has no bound fief and no stock. Match on the states you care about and treat everything else as suspect.
- **`IsDeserted` means exactly `Looted`.** A village in `BeingRaided`, `ForcedForVolunteers` or `ForcedForSupplies` is *not* deserted. Filtering raids with `IsDeserted` misses them entirely.
- **`HearthChange` is a delta, not a total.** `Hearth` is current size; `HearthChange` is today's growth or loss. Reporting `HearthChange` as "size" is a common off-by-a-day bug.
- **`Militia` is not the fief's militia.** A village has its own small force; the town keeps the real garrison and town militia.
- **`DailyTick()` is engine-driven.** Calling it yourself double-advances hearth growth and state transitions.

## Dependencies

| Direction | Type | Relationship |
|-----------|------|--------------|
| Base | `SettlementComponent` → [Settlement](../Settlement) | `village.Settlement` walks back up |
| Fief | [Town](../Town) | `Bound` (prosperity), `TradeBound` (market) |
| Party | [MobileParty](../MobileParty) | `VillagerPartyComponent`, defender parties |
| Politics | [Clan](../Clan), [Kingdom](../Kingdom) | `MapFaction` via the settlement owner |
| Models | `VillageProductionCalculatorModel`, `VillageTradeModel`, `SettlementMilitiaModel` | Production, trade, militia scaling |
| Items | `VillageMarketData`, `ItemRoster` | Prices and warehouse stock |
| Events | [CampaignEvents](../CampaignEvents) | `VillageStateChanged`, `VillageBeingRaided`, `DailyTickSettlementEvent` |

## Key members

### Size

#### `public float Hearth { get; set; }`

Current hearth count. Writable, but the daily tick overwrites it from `HearthChange`; write only when you are deliberately resizing a village.

#### `public float HearthChange` / `public ExplainedNumber HearthChangeExplanation`

Today's growth or decline, plus its causes. `HearthChangeExplanation` is what you show the player.

#### `public int GetHearthLevel()`

The bucket index derived from `Hearth` against `LowHearthThreshold` (200) and `MidHearthThreshold` (600).

#### `public const int NumberOfDaysToFillVillageStocks = 5`

How long the daily tick takes to refill the warehouse after a raid. Useful for pacing mod content.

### State

#### `public Village.VillageStates VillageState`

The raw state enum. Switch on it; the boolean views are partial.

#### `public bool IsDeserted`

Exactly `VillageState == VillageStates.Looted`. Cheap, but partial: it does not cover the raid and force states.

#### `public float LastDemandSatisfiedTime { get; private set; }`

When the bound fief last satisfied the village's production demand. A read-only audit trail — a mod that wants to reset it has to do so through a state change.

### Links

#### `public Settlement Bound`

The fief this village feeds. Null when unbound; this is the value town prosperity reads.

#### `public Settlement TradeBound`

The town whose market this village trades with. May differ from `Bound`.

### Force and economy

#### `public float Militia` / `public float MilitiaChange` / `public ExplainedNumber MilitiaChangeExplanation`

Village defence force and its daily delta. Distinct from the fief militia.

#### `public IEnumerable<PartyBase> GetDefenderParties(MapEvent.BattleTypes battleType)` / `public PartyBase GetNextDefenderParty(ref int partyIndex, MapEvent.BattleTypes battleType)`

Enumerator pair over the parties that would defend this village in a map event. Use the `ref int` cursor form in a loop; `GetDefenderParties` allocates a fresh sequence each call.

#### `public VillageMarketData MarketData`

Local price data for the village's own goods.

#### `public bool IsProducing(ItemObject item)`

Whether the village currently produces this item. Reads the production calculator, so it reflects village type, hearth level and bound-fief demand.

#### `public int GetWarehouseCapacity()`

How many item units the village can hold. Exceeding it stops production.

#### `public override int GetItemPrice(ItemObject item, MobileParty tradingParty = null, bool isSelling = false)` / `GetItemPrice(EquipmentElement, ...)`

Village prices. Same two-overload shape as [Town](../Town).

#### `public override IFaction MapFaction`

Resolves through the settlement owner, honouring the village state.

### Lookup and lifecycle

#### `public static MBReadOnlyList<Village> All`

Every village. Large (hundreds); a live view.

#### `public override void OnInit()` / `public void DailyTick()`

Engine lifecycle hooks. `DailyTick()` advances hearths, state and stock — never call it yourself.

## Real examples

### Example 1: watch the bound fief's prosperity inputs

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Settlements;

public sealed class VillageWatchBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.VillageStateChanged.AddNonSerializedListener(
            this, OnVillageStateChanged);
    }

    public override void SyncData(IDataStore dataStore)
    {
    }

    // IMbEvent<Village, VillageStates, VillageStates, MobileParty>
    private void OnVillageStateChanged(
        Village village, Village.VillageStates oldState, Village.VillageStates newState, MobileParty raider)
    {
        if (village == null || oldState == newState)
        {
            return;
        }

        InformationManager.DisplayMessage(new InformationMessage(
            $"{village.Settlement.Name}: {oldState} → {newState} " +
            $"(hearths {village.Hearth:0}, bound to {village.Bound?.Name.Name ?? "nobody"})"));
    }
}
```

### Example 2: is this village actually feeding its fief?

```csharp
using TaleWorlds.Core;
using TaleWorlds.CampaignSystem.Settlements;

public static bool FeedsItsFief(Village village)
{
    if (village == null || village.Bound == null)
    {
        return false;
    }

    if (village.IsDeserted)
    {
        return false;
    }

    CharacterObject grain = MBObjectManager.Instance.GetObject<CharacterObject>("grain");
    if (grain == null)
    {
        return false;
    }

    return village.IsProducing(grain);
}
```

### Example 3: enumerate defenders without allocating per frame

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.MapEvents;
using TaleWorlds.CampaignSystem.Party;

public static int CountDefenders(Village village, MapEvent.BattleTypes battleType)
{
    if (village == null)
    {
        return 0;
    }

    int index = 0;
    int count = 0;
    for (PartyBase party = village.GetNextDefenderParty(ref index, battleType);
         party != null;
         party = village.GetNextDefenderParty(ref index, battleType))
    {
        count += party.NumberOfHealthyMembers;
    }

    return count;
}
```

### Example 4: classify a village for a quest condition

```csharp
using TaleWorlds.CampaignSystem.Settlements;

public static string Classify(Village village)
{
    if (village == null)
    {
        return "none";
    }

    switch (village.VillageState)
    {
        case Village.VillageStates.Normal:
            return $"normal village ({village.Hearth:0} hearths)";
        case Village.VillageStates.BeingRaided:
            return "under raid";
        case Village.VillageStates.ForcedForVolunteers:
        case Village.VillageStates.ForcedForSupplies:
            return "stripped by force";
        case Village.VillageStates.Looted:
            return "looted";
        default:
            return village.VillageState.ToString();
    }
}
```

## Risks and crash boundaries

1. **`Bound` null in real campaigns.** Rebellions, newly created villages and post-raid states all leave `Bound` null. Unguarded dereferences throw on the daily tick, which kills the whole tick loop, not just your handler.
2. **Wrong state default.** A village whose `OnInit` did not run reports `Normal`, which looks healthy but has no bound fief and no stock. Enumerate the states you care about explicitly.
3. **`Hearth` vs `HearthChange`.** Writing `Hearth` is overwritten by the next tick. Use `HearthChange` for a one-off nudge, and expect the tick to recompute it.
4. **`DailyTick()` is not idempotent.** Calling it manually double-advances growth, stock refill and state transitions, and will desynchronise villages from their bound fiefs.
5. **Save coupling.** `Hearth`, `TradeTaxAccumulated` and the item roster are serialized through the settlement data holder; the village state is rebuilt by `AfterLoad`. Renumbering save ids corrupts existing saves — see [save-system](../../../architecture/save-system).
6. **Defender enumeration allocates.** `GetDefenderParties` builds a fresh sequence; use `GetNextDefenderParty(ref int, ...)` in hot paths.
7. **Cross-domain dependency.** `MarketData` prices only make sense inside the trade system; reading them from a map callback bypasses margins and reputation.
8. **Warehouse overflow.** Writing items into `ItemRoster` beyond `GetWarehouseCapacity()` does not raise an error, it just stops production — a silent soft-lock that looks like a broken village.

## Cross-version notes

- `Hearth`, the thresholds (`LowHearthThreshold = 200`, `MidHearthThreshold = 600`), `NumberOfDaysToFillVillageStocks = 5` and the five-member `VillageStates` enum are stable across 1.3.x and 1.4.x.
- Later builds add more `VillageType` behaviours. Because state handling is a switch in consumer code, adding an enum member is a source-compatible but behaviour-changing update — audit your `default:` branches when moving versions.

## See Also

- [Settlement](../Settlement) — the map object this component belongs to
- [Town](../Town) — the fief and trade town a village binds to
- [Clan](../Clan) — who owns the village's settlement
- [Hero](../Hero) — notables and villagers living there
- [MobileParty](../MobileParty) — the villager party and raiders
- [Campaign](../Campaign) — settlement registries and the daily tick
- [Save system](../../../architecture/save-system) — saveable property discipline
- [Campaign basics](../../../guide/campaign-basics) — task-first walkthrough