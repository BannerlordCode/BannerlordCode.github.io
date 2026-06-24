<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FlattenedTroopRoster`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# FlattenedTroopRoster

**Namespace:** TaleWorlds.CampaignSystem.Roster
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class FlattenedTroopRoster : IEnumerable<FlattenedTroopRosterElement>, IEnumerable`
**Base:** `IEnumerable<FlattenedTroopRosterElement>`
**File:** `TaleWorlds.CampaignSystem/Roster/FlattenedTroopRoster.cs`

## Overview

`FlattenedTroopRoster` lives in `TaleWorlds.CampaignSystem.Roster` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Roster` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `this` | `public FlattenedTroopRosterElement this { get; set; }` |
| `Troops` | `public IEnumerable<CharacterObject> Troops { get; }` |

## Key Methods

### Add
`public void Add(MBList<TroopRosterElement> roster)`

**Purpose:** Adds `add` to the current collection or state.

### Add
`public void Add(TroopRosterElement troop)`

**Purpose:** Adds `add` to the current collection or state.

### Add
`public void Add(CharacterObject troop, int number, int woundedNumber = 0)`

**Purpose:** Adds `add` to the current collection or state.

### Add
`public UniqueTroopDescriptor Add(CharacterObject troop, bool isWounded = false, int xp = 0)`

**Purpose:** Adds `add` to the current collection or state.

### GenerateUniqueNoFromParty
`public static int GenerateUniqueNoFromParty(MobileParty party, int troopIndex)`

**Purpose:** Handles logic related to `generate unique no from party`.

### Remove
`public void Remove(UniqueTroopDescriptor descriptor)`

**Purpose:** Removes `remove` from the current collection or state.

### Clear
`public void Clear()`

**Purpose:** Handles logic related to `clear`.

### RemoveIf
`public ICollection<FlattenedTroopRosterElement> RemoveIf(Predicate<FlattenedTroopRosterElement> match)`

**Purpose:** Removes `if` from the current collection or state.

### FindIndexOfCharacter
`public UniqueTroopDescriptor FindIndexOfCharacter(CharacterObject character)`

**Purpose:** Handles logic related to `find index of character`.

### GetEnumerator
`public IEnumerator<FlattenedTroopRosterElement> GetEnumerator()`

**Purpose:** Gets the current value of `enumerator`.

### OnTroopKilled
`public void OnTroopKilled(UniqueTroopDescriptor troopSeed)`

**Purpose:** Called when the `troop killed` event is raised.

### OnTroopWounded
`public void OnTroopWounded(UniqueTroopDescriptor troopSeed)`

**Purpose:** Called when the `troop wounded` event is raised.

### OnTroopRouted
`public void OnTroopRouted(UniqueTroopDescriptor troopSeed)`

**Purpose:** Called when the `troop routed` event is raised.

### OnTroopGainXp
`public void OnTroopGainXp(UniqueTroopDescriptor troopSeed, int xpGained)`

**Purpose:** Called when the `troop gain xp` event is raised.

## Usage Example

```csharp
FlattenedTroopRoster example = FlattenedTroopRoster.this;
```

## See Also

- [Complete Class Catalog](../catalog)