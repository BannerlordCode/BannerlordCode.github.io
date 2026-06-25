---
title: "Hideout"
description: "Auto-generated class reference for Hideout."
---
# Hideout

**Namespace:** TaleWorlds.CampaignSystem.Settlements
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class Hideout : SettlementComponent, ISpottable`
**Base:** `SettlementComponent`
**File:** `TaleWorlds.CampaignSystem/Settlements/Hideout.cs`

## Overview

`Hideout` lives in `TaleWorlds.CampaignSystem.Settlements` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Settlements` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `NextPossibleAttackTime` | `public CampaignTime NextPossibleAttackTime { get; }` |
| `All` | `public static MBReadOnlyList<Hideout> All { get; }` |
| `IsInfested` | `public bool IsInfested { get; }` |
| `MapFaction` | `public override IFaction MapFaction { get; }` |
| `IsSpotted` | `public bool IsSpotted { get; set; }` |

## Key Methods

### UpdateNextPossibleAttackTime
`public void UpdateNextPossibleAttackTime()`

**Purpose:** Recalculates and stores the latest representation of next possible attack time.

```csharp
// Obtain an instance of Hideout from the subsystem API first
Hideout hideout = ...;
hideout.UpdateNextPossibleAttackTime();
```

### GetDefenderParties
`public IEnumerable<PartyBase> GetDefenderParties(MapEvent.BattleTypes battleType)`

**Purpose:** Reads and returns the defender parties value held by the this instance.

```csharp
// Obtain an instance of Hideout from the subsystem API first
Hideout hideout = ...;
var result = hideout.GetDefenderParties(battleType);
```

### GetNextDefenderParty
`public PartyBase GetNextDefenderParty(ref int partyIndex, MapEvent.BattleTypes battleType)`

**Purpose:** Reads and returns the next defender party value held by the this instance.

```csharp
// Obtain an instance of Hideout from the subsystem API first
Hideout hideout = ...;
var result = hideout.GetNextDefenderParty(partyIndex, battleType);
```

### OnPartyEntered
`public override void OnPartyEntered(MobileParty mobileParty)`

**Purpose:** Invoked when the party entered event is raised.

```csharp
// Obtain an instance of Hideout from the subsystem API first
Hideout hideout = ...;
hideout.OnPartyEntered(mobileParty);
```

### OnPartyLeft
`public override void OnPartyLeft(MobileParty mobileParty)`

**Purpose:** Invoked when the party left event is raised.

```csharp
// Obtain an instance of Hideout from the subsystem API first
Hideout hideout = ...;
hideout.OnPartyLeft(mobileParty);
```

### OnRelatedPartyRemoved
`public override void OnRelatedPartyRemoved(MobileParty mobileParty)`

**Purpose:** Invoked when the related party removed event is raised.

```csharp
// Obtain an instance of Hideout from the subsystem API first
Hideout hideout = ...;
hideout.OnRelatedPartyRemoved(mobileParty);
```

### OnInit
`public override void OnInit()`

**Purpose:** Invoked when the init event is raised.

```csharp
// Obtain an instance of Hideout from the subsystem API first
Hideout hideout = ...;
hideout.OnInit();
```

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**Purpose:** Restores the this instance from serialized data.

```csharp
// Obtain an instance of Hideout from the subsystem API first
Hideout hideout = ...;
hideout.Deserialize(objectManager, node);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
Hideout hideout = ...;
hideout.UpdateNextPossibleAttackTime();
```

## See Also

- [Area Index](../)