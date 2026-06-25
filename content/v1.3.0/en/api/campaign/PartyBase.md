---
title: "PartyBase"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartyBase`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PartyBase

**Namespace:** TaleWorlds.CampaignSystem.Party
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class PartyBase : IBattleCombatant, IRandomOwner, IInteractablePoint`
**Base:** `IBattleCombatant`
**File:** `TaleWorlds.CampaignSystem/Party/PartyBase.cs`

## Overview

`PartyBase` lives in `TaleWorlds.CampaignSystem.Party` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Party` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Position` | `public CampaignVec2 Position { get; }` |
| `IsVisible` | `public bool IsVisible { get; }` |
| `IsActive` | `public bool IsActive { get; }` |
| `SiegeEvent` | `public SiegeEvent SiegeEvent { get; }` |
| `Settlement` | `public Settlement Settlement { get; }` |
| `MobileParty` | `public MobileParty MobileParty { get; }` |
| `IsSettlement` | `public bool IsSettlement { get; }` |
| `IsMobile` | `public bool IsMobile { get; }` |
| `MemberRoster` | `public TroopRoster MemberRoster { get; }` |
| `PrisonRoster` | `public TroopRoster PrisonRoster { get; }` |
| `ItemRoster` | `public ItemRoster ItemRoster { get; }` |
| `Name` | `public TextObject Name { get; }` |
| `DaysStarving` | `public float DaysStarving { get; }` |
| `RemainingFoodPercentage` | `public int RemainingFoodPercentage { get; set; }` |
| `IsStarving` | `public bool IsStarving { get; }` |
| `Id` | `public string Id { get; }` |
| `HealingRateForMemberRegulars` | `public float HealingRateForMemberRegulars { get; }` |
| `HealingRateForMemberRegularsExplained` | `public ExplainedNumber HealingRateForMemberRegularsExplained { get; }` |
| `HealingRateForMemberHeroes` | `public float HealingRateForMemberHeroes { get; }` |
| `HealingRateForMemberHeroesExplained` | `public ExplainedNumber HealingRateForMemberHeroesExplained { get; }` |
| `Owner` | `public Hero Owner { get; }` |
| `LeaderHero` | `public Hero LeaderHero { get; }` |
| `MainParty` | `public static PartyBase MainParty { get; }` |
| `LevelMaskIsDirty` | `public bool LevelMaskIsDirty { get; }` |
| `Index` | `public int Index { get; }` |
| `IsValid` | `public bool IsValid { get; }` |
| `MapFaction` | `public IFaction MapFaction { get; }` |
| `RandomValue` | `public int RandomValue { get; }` |
| `Culture` | `public CultureObject Culture { get; }` |
| `PrimaryColorPair` | `public Tuple<uint, uint> PrimaryColorPair { get; }` |
| `CustomName` | `public TextObject CustomName { get; }` |
| `CustomBanner` | `public Banner CustomBanner { get; }` |
| `Banner` | `public Banner Banner { get; }` |
| `MapEvent` | `public MapEvent MapEvent { get; }` |
| `MapEventSide` | `public MapEventSide MapEventSide { get; set; }` |
| `Side` | `public BattleSideEnum Side { get; }` |
| `OpponentSide` | `public BattleSideEnum OpponentSide { get; }` |
| `PartySizeLimit` | `public int PartySizeLimit { get; }` |
| `PrisonerSizeLimit` | `public int PrisonerSizeLimit { get; }` |
| `PartySizeLimitExplainer` | `public ExplainedNumber PartySizeLimitExplainer { get; }` |
| `PrisonerSizeLimitExplainer` | `public ExplainedNumber PrisonerSizeLimitExplainer { get; }` |
| `NumberOfHealthyMembers` | `public int NumberOfHealthyMembers { get; }` |
| `NumberOfRegularMembers` | `public int NumberOfRegularMembers { get; }` |
| `NumberOfWoundedTotalMembers` | `public int NumberOfWoundedTotalMembers { get; }` |
| `NumberOfAllMembers` | `public int NumberOfAllMembers { get; }` |
| `NumberOfPrisoners` | `public int NumberOfPrisoners { get; }` |
| `NumberOfMounts` | `public int NumberOfMounts { get; }` |
| `NumberOfPackAnimals` | `public int NumberOfPackAnimals { get; }` |
| `PrisonerHeroes` | `public IEnumerable<CharacterObject> PrisonerHeroes { get; }` |
| `NumberOfMenWithHorse` | `public int NumberOfMenWithHorse { get; }` |
| `NumberOfMenWithoutHorse` | `public int NumberOfMenWithoutHorse { get; }` |
| `EstimatedStrength` | `public float EstimatedStrength { get; }` |
| `Ships` | `public MBReadOnlyList<Ship> Ships { get; }` |
| `FlagShip` | `public Ship FlagShip { get; }` |
| `BasicCulture` | `public BasicCultureObject BasicCulture { get; }` |
| `General` | `public BasicCharacterObject General { get; }` |
| `IsVisualDirty` | `public bool IsVisualDirty { get; }` |

## Key Methods

### OnVisibilityChanged
`public void OnVisibilityChanged(bool value)`

**Purpose:** Called when the `visibility changed` event is raised.

### OnConsumedFood
`public void OnConsumedFood()`

**Purpose:** Called when the `consumed food` event is raised.

### SetCustomOwner
`public void SetCustomOwner(Hero customOwner)`

**Purpose:** Sets the value or state of `custom owner`.

### IsPartyUnderPlayerCommand
`public static bool IsPartyUnderPlayerCommand(PartyBase party)`

**Purpose:** Handles logic related to `is party under player command`.

### SetLevelMaskIsDirty
`public void SetLevelMaskIsDirty()`

**Purpose:** Sets the value or state of `level mask is dirty`.

### OnLevelMaskUpdated
`public void OnLevelMaskUpdated()`

**Purpose:** Called when the `level mask updated` event is raised.

### SetCustomName
`public void SetCustomName(TextObject name)`

**Purpose:** Sets the value or state of `custom name`.

### SetCustomBanner
`public void SetCustomBanner(Banner banner)`

**Purpose:** Sets the value or state of `custom banner`.

### GetNumberOfHealthyMenOfTier
`public int GetNumberOfHealthyMenOfTier(int tier)`

**Purpose:** Gets the current value of `number of healthy men of tier`.

### CalculateCurrentStrength
`public float CalculateCurrentStrength()`

**Purpose:** Handles logic related to `calculate current strength`.

### GetCustomStrength
`public float GetCustomStrength(BattleSideEnum side, MapEvent.PowerCalculationContext context)`

**Purpose:** Gets the current value of `custom strength`.

### GetShipsVersion
`public int GetShipsVersion()`

**Purpose:** Gets the current value of `ships version`.

### GetNumberOfMenWith
`public int GetNumberOfMenWith(TraitObject trait)`

**Purpose:** Gets the current value of `number of men with`.

### AddPrisoner
`public int AddPrisoner(CharacterObject element, int numberToAdd)`

**Purpose:** Adds `prisoner` to the current collection or state.

### AddMember
`public int AddMember(CharacterObject element, int numberToAdd, int numberToAddWounded = 0)`

**Purpose:** Adds `member` to the current collection or state.

### AddPrisoners
`public void AddPrisoners(TroopRoster roster)`

**Purpose:** Adds `prisoners` to the current collection or state.

### AddMembers
`public void AddMembers(TroopRoster roster)`

**Purpose:** Adds `members` to the current collection or state.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### AddElementToMemberRoster
`public int AddElementToMemberRoster(CharacterObject element, int numberToAdd, bool insertAtFront = false)`

**Purpose:** Adds `element to member roster` to the current collection or state.

### AddToMemberRosterElementAtIndex
`public void AddToMemberRosterElementAtIndex(int index, int numberToAdd, int woundedCount = 0)`

**Purpose:** Adds `to member roster element at index` to the current collection or state.

### WoundMemberRosterElements
`public void WoundMemberRosterElements(CharacterObject elementObj, int numberToWound)`

**Purpose:** Handles logic related to `wound member roster elements`.

### WoundMemberRosterElementsWithIndex
`public void WoundMemberRosterElementsWithIndex(int elementIndex, int numberToWound)`

**Purpose:** Handles logic related to `wound member roster elements with index`.

### UpdateVisibilityAndInspected
`public void UpdateVisibilityAndInspected(CampaignVec2 fromPosition, float mainPartySeeingRange = 0f)`

**Purpose:** Updates the state or data of `visibility and inspected`.

### SetAsCameraFollowParty
`public void SetAsCameraFollowParty()`

**Purpose:** Sets the value or state of `as camera follow party`.

### SetVisualAsDirty
`public void SetVisualAsDirty()`

**Purpose:** Sets the value or state of `visual as dirty`.

### OnVisualsUpdated
`public void OnVisualsUpdated()`

**Purpose:** Called when the `visuals updated` event is raised.

## Usage Example

```csharp
var value = new PartyBase();
value.OnVisibilityChanged(false);
```

## See Also

- [Complete Class Catalog](../catalog)