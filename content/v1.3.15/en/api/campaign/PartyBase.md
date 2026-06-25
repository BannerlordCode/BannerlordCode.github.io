---
title: "PartyBase"
description: "Auto-generated class reference for PartyBase."
---
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

**Purpose:** Invoked when the `visibility changed` event is raised.

```csharp
// Obtain an instance of PartyBase from the subsystem API first
PartyBase partyBase = ...;
partyBase.OnVisibilityChanged(false);
```

### OnConsumedFood
`public void OnConsumedFood()`

**Purpose:** Invoked when the `consumed food` event is raised.

```csharp
// Obtain an instance of PartyBase from the subsystem API first
PartyBase partyBase = ...;
partyBase.OnConsumedFood();
```

### SetCustomOwner
`public void SetCustomOwner(Hero customOwner)`

**Purpose:** Assigns a new value to `custom owner` and updates the object's internal state.

```csharp
// Obtain an instance of PartyBase from the subsystem API first
PartyBase partyBase = ...;
partyBase.SetCustomOwner(customOwner);
```

### IsPartyUnderPlayerCommand
`public static bool IsPartyUnderPlayerCommand(PartyBase party)`

**Purpose:** Determines whether the current object is in the `party under player command` state or condition.

```csharp
// Static call; no instance required
PartyBase.IsPartyUnderPlayerCommand(party);
```

### SetLevelMaskIsDirty
`public void SetLevelMaskIsDirty()`

**Purpose:** Assigns a new value to `level mask is dirty` and updates the object's internal state.

```csharp
// Obtain an instance of PartyBase from the subsystem API first
PartyBase partyBase = ...;
partyBase.SetLevelMaskIsDirty();
```

### OnLevelMaskUpdated
`public void OnLevelMaskUpdated()`

**Purpose:** Invoked when the `level mask updated` event is raised.

```csharp
// Obtain an instance of PartyBase from the subsystem API first
PartyBase partyBase = ...;
partyBase.OnLevelMaskUpdated();
```

### SetCustomName
`public void SetCustomName(TextObject name)`

**Purpose:** Assigns a new value to `custom name` and updates the object's internal state.

```csharp
// Obtain an instance of PartyBase from the subsystem API first
PartyBase partyBase = ...;
partyBase.SetCustomName(name);
```

### SetCustomBanner
`public void SetCustomBanner(Banner banner)`

**Purpose:** Assigns a new value to `custom banner` and updates the object's internal state.

```csharp
// Obtain an instance of PartyBase from the subsystem API first
PartyBase partyBase = ...;
partyBase.SetCustomBanner(banner);
```

### GetNumberOfHealthyMenOfTier
`public int GetNumberOfHealthyMenOfTier(int tier)`

**Purpose:** Reads and returns the `number of healthy men of tier` value held by the current object.

```csharp
// Obtain an instance of PartyBase from the subsystem API first
PartyBase partyBase = ...;
var result = partyBase.GetNumberOfHealthyMenOfTier(0);
```

### CalculateCurrentStrength
`public float CalculateCurrentStrength()`

**Purpose:** Calculates the current value or result of `current strength`.

```csharp
// Obtain an instance of PartyBase from the subsystem API first
PartyBase partyBase = ...;
var result = partyBase.CalculateCurrentStrength();
```

### GetCustomStrength
`public float GetCustomStrength(BattleSideEnum side, MapEvent.PowerCalculationContext context)`

**Purpose:** Reads and returns the `custom strength` value held by the current object.

```csharp
// Obtain an instance of PartyBase from the subsystem API first
PartyBase partyBase = ...;
var result = partyBase.GetCustomStrength(side, context);
```

### GetShipsVersion
`public int GetShipsVersion()`

**Purpose:** Reads and returns the `ships version` value held by the current object.

```csharp
// Obtain an instance of PartyBase from the subsystem API first
PartyBase partyBase = ...;
var result = partyBase.GetShipsVersion();
```

### GetNumberOfMenWith
`public int GetNumberOfMenWith(TraitObject trait)`

**Purpose:** Reads and returns the `number of men with` value held by the current object.

```csharp
// Obtain an instance of PartyBase from the subsystem API first
PartyBase partyBase = ...;
var result = partyBase.GetNumberOfMenWith(trait);
```

### AddPrisoner
`public int AddPrisoner(CharacterObject element, int numberToAdd)`

**Purpose:** Adds `prisoner` to the current collection or state.

```csharp
// Obtain an instance of PartyBase from the subsystem API first
PartyBase partyBase = ...;
var result = partyBase.AddPrisoner(element, 0);
```

### AddMember
`public int AddMember(CharacterObject element, int numberToAdd, int numberToAddWounded = 0)`

**Purpose:** Adds `member` to the current collection or state.

```csharp
// Obtain an instance of PartyBase from the subsystem API first
PartyBase partyBase = ...;
var result = partyBase.AddMember(element, 0, 0);
```

### AddPrisoners
`public void AddPrisoners(TroopRoster roster)`

**Purpose:** Adds `prisoners` to the current collection or state.

```csharp
// Obtain an instance of PartyBase from the subsystem API first
PartyBase partyBase = ...;
partyBase.AddPrisoners(roster);
```

### AddMembers
`public void AddMembers(TroopRoster roster)`

**Purpose:** Adds `members` to the current collection or state.

```csharp
// Obtain an instance of PartyBase from the subsystem API first
PartyBase partyBase = ...;
partyBase.AddMembers(roster);
```

### ToString
`public override string ToString()`

**Purpose:** Returns a human-readable string representation of the current object.

```csharp
// Obtain an instance of PartyBase from the subsystem API first
PartyBase partyBase = ...;
var result = partyBase.ToString();
```

### AddElementToMemberRoster
`public int AddElementToMemberRoster(CharacterObject element, int numberToAdd, bool insertAtFront = false)`

**Purpose:** Adds `element to member roster` to the current collection or state.

```csharp
// Obtain an instance of PartyBase from the subsystem API first
PartyBase partyBase = ...;
var result = partyBase.AddElementToMemberRoster(element, 0, false);
```

### AddToMemberRosterElementAtIndex
`public void AddToMemberRosterElementAtIndex(int index, int numberToAdd, int woundedCount = 0)`

**Purpose:** Adds `to member roster element at index` to the current collection or state.

```csharp
// Obtain an instance of PartyBase from the subsystem API first
PartyBase partyBase = ...;
partyBase.AddToMemberRosterElementAtIndex(0, 0, 0);
```

### WoundMemberRosterElements
`public void WoundMemberRosterElements(CharacterObject elementObj, int numberToWound)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of PartyBase from the subsystem API first
PartyBase partyBase = ...;
partyBase.WoundMemberRosterElements(elementObj, 0);
```

### WoundMemberRosterElementsWithIndex
`public void WoundMemberRosterElementsWithIndex(int elementIndex, int numberToWound)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of PartyBase from the subsystem API first
PartyBase partyBase = ...;
partyBase.WoundMemberRosterElementsWithIndex(0, 0);
```

### UpdateVisibilityAndInspected
`public void UpdateVisibilityAndInspected(CampaignVec2 fromPosition, float mainPartySeeingRange = 0f)`

**Purpose:** Recalculates and stores the latest representation of `visibility and inspected`.

```csharp
// Obtain an instance of PartyBase from the subsystem API first
PartyBase partyBase = ...;
partyBase.UpdateVisibilityAndInspected(fromPosition, 0);
```

### SetAsCameraFollowParty
`public void SetAsCameraFollowParty()`

**Purpose:** Assigns a new value to `as camera follow party` and updates the object's internal state.

```csharp
// Obtain an instance of PartyBase from the subsystem API first
PartyBase partyBase = ...;
partyBase.SetAsCameraFollowParty();
```

### SetVisualAsDirty
`public void SetVisualAsDirty()`

**Purpose:** Assigns a new value to `visual as dirty` and updates the object's internal state.

```csharp
// Obtain an instance of PartyBase from the subsystem API first
PartyBase partyBase = ...;
partyBase.SetVisualAsDirty();
```

### OnVisualsUpdated
`public void OnVisualsUpdated()`

**Purpose:** Invoked when the `visuals updated` event is raised.

```csharp
// Obtain an instance of PartyBase from the subsystem API first
PartyBase partyBase = ...;
partyBase.OnVisualsUpdated();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PartyBase partyBase = ...;
partyBase.OnVisibilityChanged(false);
```

## See Also

- [Area Index](../)