---
title: "LocationCharacter"
description: "Auto-generated class reference for LocationCharacter."
---
# LocationCharacter

**Namespace:** TaleWorlds.CampaignSystem.Settlements.Locations
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class LocationCharacter`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Settlements/Locations/LocationCharacter.cs`

## Overview

`LocationCharacter` lives in `TaleWorlds.CampaignSystem.Settlements.Locations` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Settlements.Locations` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Character` | `public CharacterObject Character { get; }` |
| `AgentOrigin` | `public IAgentOriginBase AgentOrigin { get; }` |
| `AgentData` | `public AgentData AgentData { get; set; }` |
| `UseCivilianEquipment` | `public bool UseCivilianEquipment { get; set; }` |
| `ActionSetCode` | `public string ActionSetCode { get; set; }` |
| `AlarmedActionSetCode` | `public string AlarmedActionSetCode { get; set; }` |
| `SpecialTargetTag` | `public string SpecialTargetTag { get; set; }` |
| `ForceSpawnInSpecialTargetTag` | `public bool ForceSpawnInSpecialTargetTag { get; set; }` |
| `AddBehaviors` | `public LocationCharacter.AddBehaviorsDelegate AddBehaviors { get; }` |
| `AfterAgentCreated` | `public LocationCharacter.AfterAgentCreatedDelegate AfterAgentCreated { get; }` |
| `FixedLocation` | `public bool FixedLocation { get; }` |
| `MemberOfAlley` | `public Alley MemberOfAlley { get; }` |
| `SpecialItem` | `public ItemObject SpecialItem { get; }` |

## Key Methods

### SetAlleyOfCharacter
`public void SetAlleyOfCharacter(Alley alley)`

**Purpose:** Assigns a new value to `alley of character` and updates the object's internal state.

```csharp
// Obtain an instance of LocationCharacter from the subsystem API first
LocationCharacter locationCharacter = ...;
locationCharacter.SetAlleyOfCharacter(alley);
```

### CreateBodyguardHero
`public static LocationCharacter CreateBodyguardHero(Hero hero, MobileParty party, LocationCharacter.AddBehaviorsDelegate addBehaviorsDelegate)`

**Purpose:** Constructs a new `bodyguard hero` entity and returns it to the caller.

```csharp
// Static call; no instance required
LocationCharacter.CreateBodyguardHero(hero, party, addBehaviorsDelegate);
```

### AddBehaviorsDelegate
`public delegate void AddBehaviorsDelegate(IAgent agent)`

**Purpose:** Adds `behaviors delegate` to the current collection or state.

```csharp
// Obtain an instance of LocationCharacter from the subsystem API first
LocationCharacter locationCharacter = ...;
locationCharacter.AddBehaviorsDelegate(agent);
```

### AfterAgentCreatedDelegate
`public delegate void AfterAgentCreatedDelegate(IAgent agent)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of LocationCharacter from the subsystem API first
LocationCharacter locationCharacter = ...;
locationCharacter.AfterAgentCreatedDelegate(agent);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
LocationCharacter locationCharacter = ...;
locationCharacter.SetAlleyOfCharacter(alley);
```

## See Also

- [Area Index](../)