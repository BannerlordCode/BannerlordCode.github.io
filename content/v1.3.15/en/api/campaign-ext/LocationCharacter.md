---
title: "LocationCharacter"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LocationCharacter`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**Purpose:** Sets the value or state of `alley of character`.

### CreateBodyguardHero
`public static LocationCharacter CreateBodyguardHero(Hero hero, MobileParty party, LocationCharacter.AddBehaviorsDelegate addBehaviorsDelegate)`

**Purpose:** Creates a new `bodyguard hero` instance or object.

### AddBehaviorsDelegate
`public delegate void AddBehaviorsDelegate(IAgent agent)`

**Purpose:** Adds `behaviors delegate` to the current collection or state.

### AfterAgentCreatedDelegate
`public delegate void AfterAgentCreatedDelegate(IAgent agent)`

**Purpose:** Handles logic related to `after agent created delegate`.

## Usage Example

```csharp
var value = new LocationCharacter();
value.SetAlleyOfCharacter(alley);
```

## See Also

- [Complete Class Catalog](../catalog)