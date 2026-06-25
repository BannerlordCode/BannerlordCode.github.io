---
title: "PartyGroupTroopSupplier"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartyGroupTroopSupplier`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PartyGroupTroopSupplier

**Namespace:** TaleWorlds.CampaignSystem.TroopSuppliers
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PartyGroupTroopSupplier : IMissionTroopSupplier`
**Base:** `IMissionTroopSupplier`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.TroopSuppliers/PartyGroupTroopSupplier.cs`

## Overview

`PartyGroupTroopSupplier` lives in `TaleWorlds.CampaignSystem.TroopSuppliers` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.TroopSuppliers` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SupplyTroops
`public IEnumerable<IAgentOriginBase> SupplyTroops(int numberToAllocate)`

**Purpose:** Handles logic related to `supply troops`.

### SupplyOneTroop
`public IAgentOriginBase SupplyOneTroop()`

**Purpose:** Handles logic related to `supply one troop`.

### GetAllTroops
`public IEnumerable<IAgentOriginBase> GetAllTroops()`

**Purpose:** Gets the current value of `all troops`.

### GetGeneralCharacter
`public BasicCharacterObject GetGeneralCharacter()`

**Purpose:** Gets the current value of `general character`.

### GetNumberOfPlayerControllableTroops
`public int GetNumberOfPlayerControllableTroops()`

**Purpose:** Gets the current value of `number of player controllable troops`.

### OnTroopWounded
`public void OnTroopWounded(UniqueTroopDescriptor troopDescriptor)`

**Purpose:** Called when the `troop wounded` event is raised.

### OnTroopKilled
`public void OnTroopKilled(UniqueTroopDescriptor troopDescriptor)`

**Purpose:** Called when the `troop killed` event is raised.

### OnTroopRouted
`public void OnTroopRouted(UniqueTroopDescriptor troopDescriptor, bool isOrderRetreat)`

**Purpose:** Called when the `troop routed` event is raised.

### GetParty
`public PartyBase GetParty(UniqueTroopDescriptor troopDescriptor)`

**Purpose:** Gets the current value of `party`.

### OnTroopScoreHit
`public void OnTroopScoreHit(UniqueTroopDescriptor descriptor, BasicCharacterObject attackedCharacter, int damage, bool isFatal, bool isTeamKill, WeaponComponentData attackerWeapon)`

**Purpose:** Called when the `troop score hit` event is raised.

## Usage Example

```csharp
var value = new PartyGroupTroopSupplier();
value.SupplyTroops(0);
```

## See Also

- [Complete Class Catalog](../catalog)