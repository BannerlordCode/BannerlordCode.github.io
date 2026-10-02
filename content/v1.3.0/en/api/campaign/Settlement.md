---
title: "Settlement"
description: "Map location aggregate: towns, castles, villages and hideouts with owner, garrison, walls, siege state, bound villages and busy arbitration."
---

# Settlement

**Namespace:** TaleWorlds.CampaignSystem.Settlements
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class Settlement : MBObjectBase, ILocatable<Settlement>, IMapPoint, ITrackableCampaignObject, ITrackableBase, ISiegeEventSide, IRandomOwner, ISettlementDataHolder`
**Base:** `MBObjectBase`
**File:** `TaleWorlds.CampaignSystem/Settlements/Settlement.cs`

## Overview

`Settlement` is the map-side location object. One `Settlement` instance covers every kind of inhabited place: a [Town](../Town) (town or castle), a [Village](../Village), or a hideout. The specialised data lives in a polymorphic `SettlementComponent` — `Town`, `Village`, `Hideout` — reachable through `SettlementComponent`.

A settlement owns:

- **Identity and position.** `Name`, `Position`, `GetPosition2D()`, `Culture`, `IsActive`.
- **Politics.** `Owner` (a [Hero](../Hero)), `OwnerClan` (a [Clan](../Clan)), `MapFaction`, `InRebelliousState`.
- **Force.** `Party` (the garrison [PartyBase](../PartyBase)), `MilitiaPartyComponent`, `Militania` value, `PatrolParty`, wall hit points and `SiegeEvent`.
- **Economy.** `ItemRoster`, `Stash`, `TradeTaxAccumulated` (on the component), and `MarketData` (on the component).
- **Geography.** `BoundVillages` (for towns and castles), `LocationComplex`, `GatePosition`, `PortPosition`, `HasPort`.

It also runs a small arbitration service: `IsSettlementBusy(asker)` / `GetSettlementBusynessPriority(asker)` decide whether a party may do something at a settlement right now.

## Mental Model

`Settlement` is the hub that joins parties, heroes, clans and the map scene together:

```
Settlement
 ├─ SettlementComponent ─► Town (town / castle)  or  Village  or  Hideout
 │      ├─ Prosperity / Loyalty / Security / Militia / Workshops (Town)
 │      └─ Hearth / VillageState / bound + trade-bound (Village)
 ├─ Party (PartyBase)  ── the garrison roster, IsSettlement = true
 ├─ Owner (Hero) ──► Clan (OwnerClan) ──► Kingdom
 ├─ SiegeEvent / SiegeEngines / SiegeState / BattleSide
 ├─ BoundVillages (villages bound to this fief)
 └─ Position ──► SettlementVisual (map scene)
```

Typical call order:

```
MBSubModuleBase.OnCampaignStart
    Settlement.All is populated; SettlementComponent.OnInit has run
CampaignBehaviorBase.RegisterEvents()
    CampaignEvents.SettlementEntered / DailyTickSettlementEvent / OnSiegeEventStartedEvent
DailyTick / HourlyTick
    settlement.Party.MemberRoster, settlement.Owner, settlement.SiegeEvent read
    settlement.AddGarrisonParty() / settlement.OnPartyInteraction(party) mutate
    CampaignEvents.DailyTickSettlementEvent fires once per settlement, subject in hand
```

Traps that bite in practice:

- **Check the component type before reading town/village fields.** `settlement.Town` is null for a village and `settlement.Village` is null for a fief. Use `settlement.IsVillage` / `settlement.IsTown` / `settlement.IsFortification`, or branch on `SettlementComponent`.
- **`IsSettlementBusy` is not a lock.** It reports the highest priority currently claimed at this settlement. Calling it and then acting immediately is racy; use it as a filter, not a reservation.
- **`Position` is `CampaignVec2`, not `Vec2`.** `Settlement.Position` and `GetPosition2D()` are different types, and map-entity code expects the former. Mixing them silently breaks distance math.
- **`Owner` is a hero, not a clan.** `Owner` is the local governor/warlord; `OwnerClan` is the political owner. Changing one does not change the other.
- **`GarrisonWagePaymentLimit` and `SettlementHitPoints` have restricted setters.** They are `private set` / `internal set`. Use `SetGarrisonWagePaymentLimit` and the siege model.
- **Fog of war is a view concern.** `IsVisible` and `IsInspected` change with the player's vision; a mod that reads `settlement.Party.MemberRoster` for an uninspected settlement is reading data the player has not earned.

## Dependencies

| Direction | Type | Relationship |
|-----------|------|--------------|
| Store | `MBObjectBase` | Saveable via `ISettlementDataHolder` |
| Component | `SettlementComponent` | `Town`, `Village`, `Hideout` payload |
| Party | [PartyBase](../PartyBase), [MobileParty](../MobileParty) | `Party` garrison, `Parties`, patrol, militia |
| People | [Hero](../Hero) | `Owner`, `Notables`, `HeroesWithoutParty` |
| Politics | [Clan](../Clan), [Kingdom](../Kingdom) | `OwnerClan`, `MapFaction` |
| Siege | `SiegeEvent`, `SiegeEventManager` | `SiegeEvent`, `SiegeEngines`, `BattleSide`, `CurrentSiegeState` |
| Map scene | [SettlementVisual](../../campaign-ext/SettlementVisual) | Visual counterpart of a settlement |
| Events | [CampaignEvents](../CampaignEvents) | `SettlementEntered`, `DailyTickSettlementEvent`, `OnSiegeEventStartedEvent`, `SiegeCompletedEvent` |

## Key members

### Identity and position

#### `public TextObject Name` / `public override TextObject GetName()`

Localized display name. `GetName()` is the `MBObjectBase` override; both return the same value.

#### `public CampaignVec2 Position` / `public Vec2 GetPosition2D()`

Map position. `Position` is the campaign-space type used by the campaign layer; `GetPosition2D()` returns a plain `Vec2` for legacy call sites.

#### `public static Settlement CurrentSettlement`

The settlement the player is currently inside. Null on the campaign map and in menus.

#### `public static MBReadOnlyList<Settlement> All`

Every settlement. Live view, not a snapshot.

#### `public static Settlement Find(string idString)` / `FindFirst(Func<Settlement,bool>)` / `FindAll(Func<Settlement,bool>)`

Lookup helpers. `FindAll` walks all settlements — avoid it in per-tick loops.

#### `public static LocatableSearchData<Settlement> StartFindingLocatablesAroundPosition(Vec2 position, float radius)`

Spatial query start. Returns an opaque cursor; feed it to `FindNextLocatable(ref data)` until it stops yielding. This is the supported way to do "what is near X" without scanning everything.

### Type discrimination

#### `public bool IsTown` / `IsCastle` / `IsFortification` / `IsVillage` / `IsHideout`

Type flags. `IsFortification` is true for both towns and castles and is the right test for "has walls".

#### `public SettlementComponent SettlementComponent { get; private set; }`

The polymorphic payload. Null only for objects that failed `OnInit`.

#### `public Town Town` / `public Village Village` / `public Hideout Hideout`

Typed shortcuts. Each is null unless the settlement is of that kind.

### Ownership and politics

#### `public Hero Owner`

The hero who owns this settlement locally. Null for rebel-controlled settlements and for hideouts.

#### `public Clan OwnerClan`

The clan that owns the settlement. This is the value AI and kingdom politics use.

#### `public IFaction MapFaction`

The controlling faction — usually `OwnerClan`, but it resolves through the rebellion state.

#### `public bool InRebelliousState` / `public bool IsStarving` / `public bool IsRaided` / `public bool IsUnderRaid` / `public bool IsUnderSiege`

State flags. `IsStarving` is computed from the settlement's food model, the others are campaign state.

### Garrison and militia

#### `public PartyBase Party { get; private set; }`

The garrison. `IsSettlement` is true on it, which is how generic party code tells garrisons from mobile parties.

#### `public float Militia` / `public MilitiaPartyComponent MilitiaPartyComponent`

The town militia pool. Value comes from the militia model; the component is the spawnable party.

#### `public MBReadOnlyList<MobileParty> Parties` / `public PatrolPartyComponent PatrolParty`

Parties currently present at the settlement, and the settlement's own patrol.

#### `public MBReadOnlyList<Hero> Notables` / `HeroesWithoutParty`

Notable characters and notables without a party.

#### `public void AddGarrisonParty()`

Populates the garrison from the settlement garrison model. Call after a settlement is created or when you intentionally want to rebuild the garrison — calling it repeatedly on a populated settlement doubles the roster.

### Walls, siege and battle

#### `public float SettlementHitPoints { get; internal set; }` / `public float SettlementTotalWallHitPoints` / `public int WallSectionCount`

Wall durability. `internal set` means mods cannot write the total directly; use `SetWallSectionHitPointsRatioAtIndex`.

#### `public void SetWallSectionHitPointsRatioAtIndex(int index, float hitPointsRatio)`

The one supported way to damage a specific wall segment. Ratio is 0..1; out-of-range indices throw.

#### `public SiegeEvent SiegeEvent { get; set; }` / `public bool IsUnderSiege`

The live siege. `SiegeEvent` has a public setter, but assigning one mid-siege bypasses the siege manager's bookkeeping — start sieges through the siege manager.

#### `public Settlement.SiegeState CurrentSiegeState` / `public void SetNextSiegeState()` / `public void ResetSiegeState()`

The siege phase machine (Outside, BeforeBattle, Ongoing, Completed, Broken...). `SetNextSiegeState` advances it; `ResetSiegeState` returns it to idle.

#### `public SiegeStrategy SiegeStrategy { get; private set; } / public void SetSiegeStrategy(SiegeStrategy strategy)`

The AI's chosen siege approach. Read it to predict behaviour, write it through the setter.

#### `public BattleSideEnum BattleSide`

Which side the settlement garrison is on during a battle.

### Location and busy arbitration

#### `public LocationComplex LocationComplex { get; private set; }`

The mission-side location graph used when entering the settlement.

#### `public bool IsSettlementBusy(object asker)` / `IsSettlementBusy(object asker, int limitingPriority)` / `public int GetSettlementBusynessPriority(object asker)`

Priority arbitration for actions that need the settlement (rests, sieges, AI conversations). See `SettlementBusynessPriority` for the constants.

#### `public float GetValue(Hero hero = null, bool countAlsoBoundedSettlements = true)` / `GetSettlementValueForFaction(IFaction faction)` / `GetSettlementValueForEnemyHero(Hero hero)`

Value models. `GetValue` is the general entry; the faction-specific ones apply that faction's own weighting.

### Lifecycle

#### `public void OnSessionStart()` / `public void OnGameCreated()` / `public void OnFinishLoadState()`

Session, campaign-creation and post-deserialization hooks. Vanilla calls them; a mod that creates settlements by hand must call them in the same order or the settlement has no component, no roster and no price model.

#### `protected override void AfterLoad()`

Save-repair hook. This is why hand-edited settlement fields only break after a reload.

## Real examples

### Example 1: react to settlement entry with the correct event shape

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Settlements;

public sealed class SettlementGreeterBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        // IMbEvent<MobileParty, Settlement, Hero>
        CampaignEvents.SettlementEntered.AddNonSerializedListener(this, OnSettlementEntered);
    }

    public override void SyncData(IDataStore dataStore)
    {
    }

    private void OnSettlementEntered(MobileParty party, Settlement settlement, Hero hero)
    {
        if (settlement == null || !party.IsMainParty)
        {
            return;
        }

        PartyBase garrison = settlement.Party;
        InformationManager.DisplayMessage(
            new InformationMessage($"{settlement.Name}: garrison {garrison.NumberOfAllMembers}"));
    }
}
```

### Example 2: walk nearby settlements without scanning `Settlement.All`

```csharp
using TaleWorlds.Core;
using TaleWorlds.CampaignSystem.Settlements;

public static int CountSettlementsNear(Vec2 position, float radius)
{
    CampaignVec2 origin = new CampaignVec2(position);
    LocatableSearchData<Settlement> data =
        Settlement.StartFindingLocatablesAroundPosition(position, radius);

    int found = 0;
    for (Settlement s = Settlement.FindNextLocatable(ref data); s != null; s = Settlement.FindNextLocatable(ref data))
    {
        found++;
        if (s.Village != null)
        {
            float hearth = s.Village.Hearth;
            _ = hearth;
        }
        else if (s.Town != null)
        {
            float prosperity = s.Town.Prosperity;
            _ = prosperity;
        }
    }

    _ = origin;
    return found;
}
```

### Example 3: damage one wall segment the supported way

```csharp
using TaleWorlds.CampaignSystem.Settlements;

public static void BreachFirstWallSegment(Settlement settlement)
{
    if (settlement == null || !settlement.IsFortification || settlement.WallSectionCount <= 0)
    {
        return;
    }

    settlement.SetWallSectionHitPointsRatioAtIndex(0, 0f);
    InformationManager.DisplayMessage(
        new InformationMessage($"{settlement.Name} walls: {settlement.SettlementTotalWallHitPoints:0}"));
}
```

### Example 4: rebuild a garrison deliberately

```csharp
using TaleWorlds.CampaignSystem.Settlements;

public static void EnsureGarrison(Settlement settlement)
{
    if (settlement == null)
    {
        return;
    }

    PartyBase garrison = settlement.Party;
    if (garrison == null || !garrison.IsSettlement)
    {
        return;
    }

    if (garrison.NumberOfAllMembers > 0)
    {
        return;
    }

    // Only call on an empty garrison; AddGarrisonParty appends, it does not reset.
    settlement.AddGarrisonParty();
}
```

## Risks and crash boundaries

1. **Null component.** `SettlementComponent`, `Town` and `Village` are null until `OnInit` runs and are null on mismatched types. Reading `settlement.Town.Prosperity` on a village throws.
2. **Building a settlement by hand.** `new Settlement(name, locationComplex, pt)` skips `OnGameCreated`, `OnSessionStart` and `AfterLoad`, leaving the settlement without prices, militia or roster. Use the campaign's settlement creation flow.
3. **`SetWallSectionHitPointsRatioAtIndex` bounds.** `index` outside `0..WallSectionCount-1` throws; `hitPointsRatio` outside 0..1 corrupts wall maths.
4. **Direct `SiegeEvent` assignment.** The setter exists but the siege manager keeps its own state; assigning one by hand leaves the manager, the siege side lists and the wall hit points disagreeing.
5. **`Owner` vs `OwnerClan`.** Changing `Owner` alone does not change kingdom politics; changing `OwnerClan` alone leaves the settlement's governor inconsistent. Go through the settlement owner-change action.
6. **Save coupling.** `IsActive`, `SettlementHitPoints`, `BribePaid`, `SiegeEvent` reference and `ItemRoster` are all serialized through `ISettlementDataHolder`. Renumbering save ids corrupts saves — see [save-system](../../../architecture/save-system).
7. **Cross-domain dependency on missions.** `LocationComplex` is only valid inside a mission. Reading `LocationComplex` from a daily tick handler is safe; creating mission objects from one is not.
8. **Visibility gating.** `IsVisible` / `IsInspected` change with player vision; a mod that leaks garrison sizes through notifications bypasses the fog-of-war model the game intends.

## Cross-version notes

- The 1.3.0 surface matches 1.3.x. Later 1.3.x/1.4.x builds add naval-specific properties on the port path and extra state flags for the conquest rework, but `Owner`, `OwnerClan`, `Party`, `SettlementComponent` and the wall API keep the same shape.
- `SetWallSectionHitPointsRatioAtIndex` and `StartFindingLocatablesAroundPosition` are unchanged through 1.4.x, so behaviour code written against them loads on newer saves.

## See Also

- [Town](../Town) — fief component with prosperity, loyalty and workshops
- [Village](../Village) — village component with hearths and state
- [PartyBase](../PartyBase) — the garrison roster object
- [MobileParty](../MobileParty) — the parties that visit settlements
- [Clan](../Clan) — political ownership
- [Hero](../Hero) — `Owner` and notables
- [FactionManager](../FactionManager) — war state behind `MapFaction`
- [SettlementVisual](../../campaign-ext/SettlementVisual) — the map-scene object
- [Save system](../../../architecture/save-system) — saveable property discipline
- [Campaign basics](../../../guide/campaign-basics) — task-first walkthrough