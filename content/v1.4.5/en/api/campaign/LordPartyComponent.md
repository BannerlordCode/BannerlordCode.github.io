---
title: "LordPartyComponent"
description: "Auto-generated class reference for LordPartyComponent."
---
# LordPartyComponent

**Namespace:** TaleWorlds.CampaignSystem.Party.PartyComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class LordPartyComponent : WarPartyComponent`
**Base:** `WarPartyComponent`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Party.PartyComponents/LordPartyComponent.cs`

## Overview

`LordPartyComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `LordPartyComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public override TextObject Name { get; }` |
| `Owner` | `public Hero Owner { get; }` |

## Key Methods

### InitializeLordPartyProperties
`public void InitializeLordPartyProperties(MobileParty mobileParty, Hero owner)`

**Purpose:** Prepares the resources, state, or bindings required by `lord party properties`.

```csharp
// Obtain an instance of LordPartyComponent from the subsystem API first
LordPartyComponent lordPartyComponent = ...;
lordPartyComponent.InitializeLordPartyProperties(mobileParty, owner);
```

### SetWagePaymentLimit
`public override void SetWagePaymentLimit(int newLimit)`

**Purpose:** Assigns a new value to `wage payment limit` and updates the object's internal state.

```csharp
// Obtain an instance of LordPartyComponent from the subsystem API first
LordPartyComponent lordPartyComponent = ...;
lordPartyComponent.SetWagePaymentLimit(0);
```

### CreateLordParty
`public static MobileParty CreateLordParty(string stringId, Hero hero, CampaignVec2 position, float spawnRadius, Settlement spawnSettlement, Hero partyLeader)`

**Purpose:** Constructs a new `lord party` entity and returns it to the caller.

```csharp
// Static call; no instance required
LordPartyComponent.CreateLordParty("example", hero, position, 0, spawnSettlement, partyLeader);
```

### ConvertPartyToLordParty
`public static void ConvertPartyToLordParty(MobileParty mobileParty, Hero owner, Hero partyLeader)`

**Purpose:** Converts `party to lord party` into another representation or type.

```csharp
// Static call; no instance required
LordPartyComponent.ConvertPartyToLordParty(mobileParty, owner, partyLeader);
```

### ClearCachedName
`public override void ClearCachedName()`

**Purpose:** Removes all `cached name` from the current object.

```csharp
// Obtain an instance of LordPartyComponent from the subsystem API first
LordPartyComponent lordPartyComponent = ...;
lordPartyComponent.ClearCachedName();
```

## Usage Example

```csharp
var component = agent.GetComponent<LordPartyComponent>();
```

## See Also

- [Area Index](../)