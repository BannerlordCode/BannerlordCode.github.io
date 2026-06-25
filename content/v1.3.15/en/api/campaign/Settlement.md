---
title: "Settlement"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Settlement`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
- [🔀 Cross-Version Compare /versions/Settlement](/versions/Settlement)
<!-- END BREADCRUMB -->
# Settlement

**Namespace:** TaleWorlds.CampaignSystem.Settlements
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class Settlement : MBObjectBase, ILocatable<Settlement>, IMapPoint, ITrackableCampaignObject, ITrackableBase, ISiegeEventSide, IRandomOwner, ISettlementDataHolder`
**Base:** `MBObjectBase`
**File:** `TaleWorlds.CampaignSystem/Settlements/Settlement.cs`

## Overview

`Settlement` lives in `TaleWorlds.CampaignSystem.Settlements` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Settlements` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Party` | `public PartyBase Party { get; }` |
| `NumberOfLordPartiesAt` | `public int NumberOfLordPartiesAt { get; set; }` |
| `BribePaid` | `public int BribePaid { get; set; }` |
| `SiegeEvent` | `public SiegeEvent SiegeEvent { get; set; }` |
| `IsActive` | `public bool IsActive { get; set; }` |
| `Owner` | `public Hero Owner { get; }` |
| `Banner` | `public Banner Banner { get; }` |
| `IsVisible` | `public bool IsVisible { get; set; }` |
| `IsInspected` | `public bool IsInspected { get; set; }` |
| `WallSectionCount` | `public int WallSectionCount { get; set; }` |
| `NearbyLandThreatIntensity` | `public float NearbyLandThreatIntensity { get; set; }` |
| `NearbyNavalThreatIntensity` | `public float NearbyNavalThreatIntensity { get; set; }` |
| `NearbyLandAllyIntensity` | `public float NearbyLandAllyIntensity { get; set; }` |
| `NearbyNavalAllyIntensity` | `public float NearbyNavalAllyIntensity { get; set; }` |
| `RandomValue` | `public int RandomValue { get; }` |
| `GetPosition2D` | `public Vec2 GetPosition2D { get; }` |
| `Militia` | `public float Militia { get; }` |
| `SettlementWallSectionHitPointsRatioList` | `public MBReadOnlyList<float> SettlementWallSectionHitPointsRatioList { get; }` |
| `SettlementTotalWallHitPoints` | `public float SettlementTotalWallHitPoints { get; }` |
| `MaxHitPointsOfOneWallSection` | `public float MaxHitPointsOfOneWallSection { get; }` |
| `SettlementHitPoints` | `public float SettlementHitPoints { get; set; }` |
| `MaxWallHitPoints` | `public float MaxWallHitPoints { get; }` |
| `Parties` | `public MBReadOnlyList<MobileParty> Parties { get; }` |
| `PatrolParty` | `public PatrolPartyComponent PatrolParty { get; }` |
| `HeroesWithoutParty` | `public MBReadOnlyList<Hero> HeroesWithoutParty { get; }` |
| `Notables` | `public MBReadOnlyList<Hero> Notables { get; }` |
| `SettlementComponent` | `public SettlementComponent SettlementComponent { get; }` |
| `GatePosition` | `public CampaignVec2 GatePosition { get; }` |
| `PortPosition` | `public CampaignVec2 PortPosition { get; }` |
| `CurrentNavigationFace` | `public PathFaceRecord CurrentNavigationFace { get; }` |
| `Position` | `public CampaignVec2 Position { get; }` |
| `HasPort` | `public bool HasPort { get; }` |
| `MapFaction` | `public IFaction MapFaction { get; }` |
| `Name` | `public TextObject Name { get; }` |
| `EncyclopediaText` | `public TextObject EncyclopediaText { get; }` |
| `EncyclopediaLink` | `public string EncyclopediaLink { get; }` |
| `EncyclopediaLinkWithName` | `public TextObject EncyclopediaLinkWithName { get; }` |
| `GarrisonWagePaymentLimit` | `public int GarrisonWagePaymentLimit { get; }` |
| `ItemRoster` | `public ItemRoster ItemRoster { get; }` |
| `BoundVillages` | `public MBReadOnlyList<Village> BoundVillages { get; set; }` |
| `LastAttackerParty` | `public MobileParty LastAttackerParty { get; set; }` |
| `LastThreatTime` | `public CampaignTime LastThreatTime { get; }` |
| `SiegeEngines` | `public SiegeEvent.SiegeEnginesContainer SiegeEngines { get; }` |
| `SiegeEngineMissiles` | `public MBReadOnlyList<SiegeEvent.SiegeEngineMissile> SiegeEngineMissiles { get; }` |
| `BattleSide` | `public BattleSideEnum BattleSide { get; }` |
| `NumberOfTroopsKilledOnSide` | `public int NumberOfTroopsKilledOnSide { get; }` |
| `SiegeStrategy` | `public SiegeStrategy SiegeStrategy { get; }` |
| `Alleys` | `public List<Alley> Alleys { get; }` |
| `IsTown` | `public bool IsTown { get; }` |
| `IsCastle` | `public bool IsCastle { get; }` |
| `IsFortification` | `public bool IsFortification { get; }` |
| `IsVillage` | `public bool IsVillage { get; }` |
| `IsHideout` | `public bool IsHideout { get; }` |
| `IsStarving` | `public bool IsStarving { get; }` |
| `IsRaided` | `public bool IsRaided { get; }` |
| `InRebelliousState` | `public bool InRebelliousState { get; }` |
| `IsUnderRaid` | `public bool IsUnderRaid { get; }` |
| `IsUnderSiege` | `public bool IsUnderSiege { get; }` |
| `LocationComplex` | `public LocationComplex LocationComplex { get; }` |
| `CurrentSettlement` | `public static Settlement CurrentSettlement { get; }` |
| `All` | `public static MBReadOnlyList<Settlement> All { get; }` |
| `GetFirst` | `public static Settlement GetFirst { get; }` |
| `CurrentSiegeState` | `public Settlement.SiegeState CurrentSiegeState { get; }` |
| `OwnerClan` | `public Clan OwnerClan { get; }` |

## Key Methods

### SetWallSectionHitPointsRatioAtIndex
`public void SetWallSectionHitPointsRatioAtIndex(int index, float hitPointsRatio)`

**Purpose:** Sets the value or state of `wall section hit points ratio at index`.

### GetPositionAsVec3
`public Vec3 GetPositionAsVec3()`

**Purpose:** Gets the current value of `position as vec3`.

### SetGarrisonWagePaymentLimit
`public void SetGarrisonWagePaymentLimit(int limit)`

**Purpose:** Sets the value or state of `garrison wage payment limit`.

### GetInvolvedPartiesForEventType
`public IEnumerable<PartyBase> GetInvolvedPartiesForEventType(MapEvent.BattleTypes mapEventType = MapEvent.BattleTypes.Siege)`

**Purpose:** Gets the current value of `involved parties for event type`.

### GetNextInvolvedPartyForEventType
`public PartyBase GetNextInvolvedPartyForEventType(ref int partyIndex, MapEvent.BattleTypes mapEventType = MapEvent.BattleTypes.Siege)`

**Purpose:** Gets the current value of `next involved party for event type`.

### HasInvolvedPartyForEventType
`public bool HasInvolvedPartyForEventType(PartyBase party, MapEvent.BattleTypes mapEventType = MapEvent.BattleTypes.Siege)`

**Purpose:** Checks whether the current object has/contains `involved party for event type`.

### IsUnderRebellionAttack
`public bool IsUnderRebellionAttack()`

**Purpose:** Handles logic related to `is under rebellion attack`.

### GetSettlementValueForEnemyHero
`public float GetSettlementValueForEnemyHero(Hero hero)`

**Purpose:** Gets the current value of `settlement value for enemy hero`.

### IsSettlementBusy
`public bool IsSettlementBusy(object asker)`

**Purpose:** Handles logic related to `is settlement busy`.

### IsSettlementBusy
`public bool IsSettlementBusy(object asker, int limitingPriority)`

**Purpose:** Handles logic related to `is settlement busy`.

### GetSettlementBusynessPriority
`public int GetSettlementBusynessPriority(object asker)`

**Purpose:** Gets the current value of `settlement busyness priority`.

### GetValue
`public float GetValue(Hero hero = null, bool countAlsoBoundedSettlements = true)`

**Purpose:** Gets the current value of `value`.

### GetName
`public override TextObject GetName()`

**Purpose:** Gets the current value of `name`.

### GetSettlementValueForFaction
`public float GetSettlementValueForFaction(IFaction faction)`

**Purpose:** Gets the current value of `settlement value for faction`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### OnPartyInteraction
`public void OnPartyInteraction(MobileParty engagingParty)`

**Purpose:** Called when the `party interaction` event is raised.

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**Purpose:** Handles logic related to `deserialize`.

### OnFinishLoadState
`public void OnFinishLoadState()`

**Purpose:** Called when the `finish load state` event is raised.

### OnGameCreated
`public void OnGameCreated()`

**Purpose:** Called when the `game created` event is raised.

### OnSessionStart
`public void OnSessionStart()`

**Purpose:** Called when the `session start` event is raised.

### CheckPositionsForMapChangeAndUpdateIfNeeded
`public void CheckPositionsForMapChangeAndUpdateIfNeeded()`

**Purpose:** Handles logic related to `check positions for map change and update if needed`.

### Find
`public static Settlement Find(string idString)`

**Purpose:** Handles logic related to `find`.

### FindFirst
`public static Settlement FindFirst(Func<Settlement, bool> predicate)`

**Purpose:** Handles logic related to `find first`.

### FindAll
`public static IEnumerable<Settlement> FindAll(Func<Settlement, bool> predicate)`

**Purpose:** Handles logic related to `find all`.

### StartFindingLocatablesAroundPosition
`public static LocatableSearchData<Settlement> StartFindingLocatablesAroundPosition(Vec2 position, float radius)`

**Purpose:** Handles logic related to `start finding locatables around position`.

### FindNextLocatable
`public static Settlement FindNextLocatable(ref LocatableSearchData<Settlement> data)`

**Purpose:** Handles logic related to `find next locatable`.

### OnPlayerEncounterFinish
`public void OnPlayerEncounterFinish()`

**Purpose:** Called when the `player encounter finish` event is raised.

### GetPosition
`public Vec3 GetPosition()`

**Purpose:** Gets the current value of `position`.

### SetNextSiegeState
`public void SetNextSiegeState()`

**Purpose:** Sets the value or state of `next siege state`.

### ResetSiegeState
`public void ResetSiegeState()`

**Purpose:** Resets `siege state` to its initial state.

### AddGarrisonParty
`public void AddGarrisonParty()`

**Purpose:** Adds `garrison party` to the current collection or state.

### SetSiegeStrategy
`public void SetSiegeStrategy(SiegeStrategy strategy)`

**Purpose:** Sets the value or state of `siege strategy`.

### InitializeSiegeEventSide
`public void InitializeSiegeEventSide()`

**Purpose:** Initializes the state, resources, or bindings for `siege event side`.

### OnTroopsKilledOnSide
`public void OnTroopsKilledOnSide(int killCount)`

**Purpose:** Called when the `troops killed on side` event is raised.

### AddSiegeEngineMissile
`public void AddSiegeEngineMissile(SiegeEvent.SiegeEngineMissile missile)`

**Purpose:** Adds `siege engine missile` to the current collection or state.

### RemoveDeprecatedMissiles
`public void RemoveDeprecatedMissiles()`

**Purpose:** Removes `deprecated missiles` from the current collection or state.

### GetAttackTarget
`public void GetAttackTarget(ISiegeEventSide siegeEventSide, SiegeEngineType siegeEngine, int siegeEngineSlot, out SiegeBombardTargets targetType, out int targetIndex)`

**Purpose:** Gets the current value of `attack target`.

### FinalizeSiegeEvent
`public void FinalizeSiegeEvent()`

**Purpose:** Handles logic related to `finalize siege event`.

## Usage Example

```csharp
var value = new Settlement();
value.SetWallSectionHitPointsRatioAtIndex(0, 0);
```

## See Also

- [Complete Class Catalog](../catalog)