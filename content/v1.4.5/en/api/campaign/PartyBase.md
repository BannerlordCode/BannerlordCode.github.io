---
title: "PartyBase"
description: "Auto-generated class reference for PartyBase."
---
# PartyBase

**Namespace:** TaleWorlds.CampaignSystem.Party
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class PartyBase : IBattleCombatant, IRandomOwner, IInteractablePoint`
**Base:** `IBattleCombatant`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Party/PartyBase.cs`

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
| `MemberRoster` | `public TroopRoster MemberRoster { get; }` |
| `PrisonRoster` | `public TroopRoster PrisonRoster { get; }` |
| `ItemRoster` | `public ItemRoster ItemRoster { get; }` |
| `Name` | `public TextObject Name { get; }` |
| `DaysStarving` | `public float DaysStarving { get; set; }` |
| `RemainingFoodPercentage` | `public int RemainingFoodPercentage { get; set; }` |
| `Owner` | `public Hero Owner { get; }` |
| `MainParty` | `public static PartyBase MainParty { get; }` |
| `LevelMaskIsDirty` | `public bool LevelMaskIsDirty { get; }` |
| `Index` | `public int Index { get; }` |
| `MapFaction` | `public IFaction MapFaction { get; }` |
| `RandomValue` | `public int RandomValue { get; }` |
| `PrimaryColorPair` | `public Tuple<uint, uint> PrimaryColorPair { get; }` |
| `CustomName` | `public TextObject CustomName { get; }` |
| `CustomBanner` | `public Banner CustomBanner { get; }` |
| `Banner` | `public Banner Banner { get; }` |
| `MapEventSide` | `public MapEventSide MapEventSide { get; set; }` |
| `OpponentSide` | `public BattleSideEnum OpponentSide { get; }` |
| `PartySizeLimit` | `public int PartySizeLimit { get; }` |
| `PrisonerSizeLimit` | `public int PrisonerSizeLimit { get; }` |
| `PrisonerHeroes` | `public IEnumerable<CharacterObject> PrisonerHeroes { get; }` |
| `NumberOfMenWithHorse` | `public int NumberOfMenWithHorse { get; }` |
| `EstimatedStrength` | `public float EstimatedStrength { get; }` |
| `General` | `public BasicCharacterObject General { get; }` |
| `IsVisualDirty` | `public bool IsVisualDirty { get; }` |

## Key Methods

### OnVisibilityChanged
`public void OnVisibilityChanged(bool value)`

**Purpose:** **Purpose:** Invoked when the visibility changed event is raised.

```csharp
// Obtain an instance of PartyBase from the subsystem API first
PartyBase partyBase = ...;
partyBase.OnVisibilityChanged(false);
```

### OnConsumedFood
`public void OnConsumedFood()`

**Purpose:** **Purpose:** Invoked when the consumed food event is raised.

```csharp
// Obtain an instance of PartyBase from the subsystem API first
PartyBase partyBase = ...;
partyBase.OnConsumedFood();
```

### SetCustomOwner
`public void SetCustomOwner(Hero customOwner)`

**Purpose:** **Purpose:** Assigns a new value to custom owner and updates the object's internal state.

```csharp
// Obtain an instance of PartyBase from the subsystem API first
PartyBase partyBase = ...;
partyBase.SetCustomOwner(customOwner);
```

### IsPartyUnderPlayerCommand
`public static bool IsPartyUnderPlayerCommand(PartyBase party)`

**Purpose:** **Purpose:** Determines whether the this instance is in the party under player command state or condition.

```csharp
// Static call; no instance required
PartyBase.IsPartyUnderPlayerCommand(party);
```

### SetLevelMaskIsDirty
`public void SetLevelMaskIsDirty()`

**Purpose:** **Purpose:** Assigns a new value to level mask is dirty and updates the object's internal state.

```csharp
// Obtain an instance of PartyBase from the subsystem API first
PartyBase partyBase = ...;
partyBase.SetLevelMaskIsDirty();
```

### OnLevelMaskUpdated
`public void OnLevelMaskUpdated()`

**Purpose:** **Purpose:** Invoked when the level mask updated event is raised.

```csharp
// Obtain an instance of PartyBase from the subsystem API first
PartyBase partyBase = ...;
partyBase.OnLevelMaskUpdated();
```

### SetCustomName
`public void SetCustomName(TextObject name)`

**Purpose:** **Purpose:** Assigns a new value to custom name and updates the object's internal state.

```csharp
// Obtain an instance of PartyBase from the subsystem API first
PartyBase partyBase = ...;
partyBase.SetCustomName(name);
```

### SetCustomBanner
`public void SetCustomBanner(Banner banner)`

**Purpose:** **Purpose:** Assigns a new value to custom banner and updates the object's internal state.

```csharp
// Obtain an instance of PartyBase from the subsystem API first
PartyBase partyBase = ...;
partyBase.SetCustomBanner(banner);
```

### IsUnderPlayersCommand
`public bool IsUnderPlayersCommand(BattleSideEnum playerSide)`

**Purpose:** **Purpose:** Determines whether the this instance is in the under players command state or condition.

```csharp
// Obtain an instance of PartyBase from the subsystem API first
PartyBase partyBase = ...;
var result = partyBase.IsUnderPlayersCommand(playerSide);
```

### GetNumberOfHealthyMenOfTier
`public int GetNumberOfHealthyMenOfTier(int tier)`

**Purpose:** **Purpose:** Reads and returns the number of healthy men of tier value held by the this instance.

```csharp
// Obtain an instance of PartyBase from the subsystem API first
PartyBase partyBase = ...;
var result = partyBase.GetNumberOfHealthyMenOfTier(0);
```

### CalculateCurrentStrength
`public float CalculateCurrentStrength()`

**Purpose:** **Purpose:** Calculates the current value or result of current strength.

```csharp
// Obtain an instance of PartyBase from the subsystem API first
PartyBase partyBase = ...;
var result = partyBase.CalculateCurrentStrength();
```

### GetCustomStrength
`public float GetCustomStrength(BattleSideEnum side, MapEvent.PowerCalculationContext context)`

**Purpose:** **Purpose:** Reads and returns the custom strength value held by the this instance.

```csharp
// Obtain an instance of PartyBase from the subsystem API first
PartyBase partyBase = ...;
var result = partyBase.GetCustomStrength(side, context);
```

### GetShipsVersion
`public int GetShipsVersion()`

**Purpose:** **Purpose:** Reads and returns the ships version value held by the this instance.

```csharp
// Obtain an instance of PartyBase from the subsystem API first
PartyBase partyBase = ...;
var result = partyBase.GetShipsVersion();
```

### GetNumberOfMenWith
`public int GetNumberOfMenWith(TraitObject trait)`

**Purpose:** **Purpose:** Reads and returns the number of men with value held by the this instance.

```csharp
// Obtain an instance of PartyBase from the subsystem API first
PartyBase partyBase = ...;
var result = partyBase.GetNumberOfMenWith(trait);
```

### AddPrisoner
`public int AddPrisoner(CharacterObject element, int numberToAdd)`

**Purpose:** **Purpose:** Adds prisoner to the current collection or state.

```csharp
// Obtain an instance of PartyBase from the subsystem API first
PartyBase partyBase = ...;
var result = partyBase.AddPrisoner(element, 0);
```

### AddMember
`public int AddMember(CharacterObject element, int numberToAdd, int numberToAddWounded = 0)`

**Purpose:** **Purpose:** Adds member to the current collection or state.

```csharp
// Obtain an instance of PartyBase from the subsystem API first
PartyBase partyBase = ...;
var result = partyBase.AddMember(element, 0, 0);
```

### AddPrisoners
`public void AddPrisoners(TroopRoster roster)`

**Purpose:** **Purpose:** Adds prisoners to the current collection or state.

```csharp
// Obtain an instance of PartyBase from the subsystem API first
PartyBase partyBase = ...;
partyBase.AddPrisoners(roster);
```

### AddMembers
`public void AddMembers(TroopRoster roster)`

**Purpose:** **Purpose:** Adds members to the current collection or state.

```csharp
// Obtain an instance of PartyBase from the subsystem API first
PartyBase partyBase = ...;
partyBase.AddMembers(roster);
```

### ToString
`public override string ToString()`

**Purpose:** **Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of PartyBase from the subsystem API first
PartyBase partyBase = ...;
var result = partyBase.ToString();
```

### AddElementToMemberRoster
`public int AddElementToMemberRoster(CharacterObject element, int numberToAdd, bool insertAtFront = false)`

**Purpose:** **Purpose:** Adds element to member roster to the current collection or state.

```csharp
// Obtain an instance of PartyBase from the subsystem API first
PartyBase partyBase = ...;
var result = partyBase.AddElementToMemberRoster(element, 0, false);
```

### AddToMemberRosterElementAtIndex
`public void AddToMemberRosterElementAtIndex(int index, int numberToAdd, int woundedCount = 0)`

**Purpose:** **Purpose:** Adds to member roster element at index to the current collection or state.

```csharp
// Obtain an instance of PartyBase from the subsystem API first
PartyBase partyBase = ...;
partyBase.AddToMemberRosterElementAtIndex(0, 0, 0);
```

### WoundMemberRosterElements
`public void WoundMemberRosterElements(CharacterObject elementObj, int numberToWound)`

**Purpose:** **Purpose:** Executes the WoundMemberRosterElements logic.

```csharp
// Obtain an instance of PartyBase from the subsystem API first
PartyBase partyBase = ...;
partyBase.WoundMemberRosterElements(elementObj, 0);
```

### WoundMemberRosterElementsWithIndex
`public void WoundMemberRosterElementsWithIndex(int elementIndex, int numberToWound)`

**Purpose:** **Purpose:** Executes the WoundMemberRosterElementsWithIndex logic.

```csharp
// Obtain an instance of PartyBase from the subsystem API first
PartyBase partyBase = ...;
partyBase.WoundMemberRosterElementsWithIndex(0, 0);
```

### UpdateVisibilityAndInspected
`public void UpdateVisibilityAndInspected(CampaignVec2 fromPosition, float mainPartySeeingRange = 0f)`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of visibility and inspected.

```csharp
// Obtain an instance of PartyBase from the subsystem API first
PartyBase partyBase = ...;
partyBase.UpdateVisibilityAndInspected(fromPosition, 0);
```

### SetAsCameraFollowParty
`public void SetAsCameraFollowParty()`

**Purpose:** **Purpose:** Assigns a new value to as camera follow party and updates the object's internal state.

```csharp
// Obtain an instance of PartyBase from the subsystem API first
PartyBase partyBase = ...;
partyBase.SetAsCameraFollowParty();
```

### SetVisualAsDirty
`public void SetVisualAsDirty()`

**Purpose:** **Purpose:** Assigns a new value to visual as dirty and updates the object's internal state.

```csharp
// Obtain an instance of PartyBase from the subsystem API first
PartyBase partyBase = ...;
partyBase.SetVisualAsDirty();
```

### OnVisualsUpdated
`public void OnVisualsUpdated()`

**Purpose:** **Purpose:** Invoked when the visuals updated event is raised.

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