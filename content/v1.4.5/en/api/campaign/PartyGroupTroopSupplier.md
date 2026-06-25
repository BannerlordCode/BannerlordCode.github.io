---
title: "PartyGroupTroopSupplier"
description: "Auto-generated class reference for PartyGroupTroopSupplier."
---
# PartyGroupTroopSupplier

**Namespace:** TaleWorlds.CampaignSystem.TroopSuppliers
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PartyGroupTroopSupplier : IMissionTroopSupplier`
**Base:** `IMissionTroopSupplier`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.TroopSuppliers/PartyGroupTroopSupplier.cs`

## Overview

`PartyGroupTroopSupplier` lives in `TaleWorlds.CampaignSystem.TroopSuppliers` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.TroopSuppliers` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SupplyTroops
`public IEnumerable<IAgentOriginBase> SupplyTroops(int numberToAllocate)`

**Purpose:** **Purpose:** Executes the SupplyTroops logic.

```csharp
// Obtain an instance of PartyGroupTroopSupplier from the subsystem API first
PartyGroupTroopSupplier partyGroupTroopSupplier = ...;
var result = partyGroupTroopSupplier.SupplyTroops(0);
```

### SupplyOneTroop
`public IAgentOriginBase SupplyOneTroop()`

**Purpose:** **Purpose:** Executes the SupplyOneTroop logic.

```csharp
// Obtain an instance of PartyGroupTroopSupplier from the subsystem API first
PartyGroupTroopSupplier partyGroupTroopSupplier = ...;
var result = partyGroupTroopSupplier.SupplyOneTroop();
```

### GetAllTroops
`public IEnumerable<IAgentOriginBase> GetAllTroops()`

**Purpose:** **Purpose:** Reads and returns the all troops value held by the this instance.

```csharp
// Obtain an instance of PartyGroupTroopSupplier from the subsystem API first
PartyGroupTroopSupplier partyGroupTroopSupplier = ...;
var result = partyGroupTroopSupplier.GetAllTroops();
```

### GetGeneralCharacter
`public BasicCharacterObject GetGeneralCharacter()`

**Purpose:** **Purpose:** Reads and returns the general character value held by the this instance.

```csharp
// Obtain an instance of PartyGroupTroopSupplier from the subsystem API first
PartyGroupTroopSupplier partyGroupTroopSupplier = ...;
var result = partyGroupTroopSupplier.GetGeneralCharacter();
```

### GetNumberOfPlayerControllableTroops
`public int GetNumberOfPlayerControllableTroops()`

**Purpose:** **Purpose:** Reads and returns the number of player controllable troops value held by the this instance.

```csharp
// Obtain an instance of PartyGroupTroopSupplier from the subsystem API first
PartyGroupTroopSupplier partyGroupTroopSupplier = ...;
var result = partyGroupTroopSupplier.GetNumberOfPlayerControllableTroops();
```

### OnTroopWounded
`public void OnTroopWounded(UniqueTroopDescriptor troopDescriptor)`

**Purpose:** **Purpose:** Invoked when the troop wounded event is raised.

```csharp
// Obtain an instance of PartyGroupTroopSupplier from the subsystem API first
PartyGroupTroopSupplier partyGroupTroopSupplier = ...;
partyGroupTroopSupplier.OnTroopWounded(troopDescriptor);
```

### OnTroopKilled
`public void OnTroopKilled(UniqueTroopDescriptor troopDescriptor)`

**Purpose:** **Purpose:** Invoked when the troop killed event is raised.

```csharp
// Obtain an instance of PartyGroupTroopSupplier from the subsystem API first
PartyGroupTroopSupplier partyGroupTroopSupplier = ...;
partyGroupTroopSupplier.OnTroopKilled(troopDescriptor);
```

### OnTroopRouted
`public void OnTroopRouted(UniqueTroopDescriptor troopDescriptor, bool isOrderRetreat)`

**Purpose:** **Purpose:** Invoked when the troop routed event is raised.

```csharp
// Obtain an instance of PartyGroupTroopSupplier from the subsystem API first
PartyGroupTroopSupplier partyGroupTroopSupplier = ...;
partyGroupTroopSupplier.OnTroopRouted(troopDescriptor, false);
```

### GetParty
`public PartyBase GetParty(UniqueTroopDescriptor troopDescriptor)`

**Purpose:** **Purpose:** Reads and returns the party value held by the this instance.

```csharp
// Obtain an instance of PartyGroupTroopSupplier from the subsystem API first
PartyGroupTroopSupplier partyGroupTroopSupplier = ...;
var result = partyGroupTroopSupplier.GetParty(troopDescriptor);
```

### OnTroopScoreHit
`public void OnTroopScoreHit(UniqueTroopDescriptor descriptor, BasicCharacterObject attackedCharacter, int damage, bool isFatal, bool isTeamKill, WeaponComponentData attackerWeapon)`

**Purpose:** **Purpose:** Invoked when the troop score hit event is raised.

```csharp
// Obtain an instance of PartyGroupTroopSupplier from the subsystem API first
PartyGroupTroopSupplier partyGroupTroopSupplier = ...;
partyGroupTroopSupplier.OnTroopScoreHit(descriptor, attackedCharacter, 0, false, false, attackerWeapon);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PartyGroupTroopSupplier partyGroupTroopSupplier = ...;
partyGroupTroopSupplier.SupplyTroops(0);
```

## See Also

- [Area Index](../)