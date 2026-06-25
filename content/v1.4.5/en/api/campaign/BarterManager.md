---
title: "BarterManager"
description: "Auto-generated class reference for BarterManager."
---
# BarterManager

**Namespace:** TaleWorlds.CampaignSystem.BarterSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class BarterManager`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.BarterSystem/BarterManager.cs`

## Overview

`BarterManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `BarterManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `LastBarterIsAccepted` | `public bool LastBarterIsAccepted { get; set; }` |

## Key Methods

### BarterContextInitializer
`public delegate bool BarterContextInitializer(Barterable barterable, BarterData args, object obj = null)`

**Purpose:** Executes the BarterContextInitializer logic.

```csharp
// Obtain an instance of BarterManager from the subsystem API first
BarterManager barterManager = ...;
var result = barterManager.BarterContextInitializer(barterable, args, null);
```

### BarterCloseEventDelegate
`public delegate void BarterCloseEventDelegate()`

**Purpose:** Executes the BarterCloseEventDelegate logic.

```csharp
// Obtain an instance of BarterManager from the subsystem API first
BarterManager barterManager = ...;
barterManager.BarterCloseEventDelegate();
```

### BarterBeginEventDelegate
`public delegate void BarterBeginEventDelegate(BarterData args)`

**Purpose:** Executes the BarterBeginEventDelegate logic.

```csharp
// Obtain an instance of BarterManager from the subsystem API first
BarterManager barterManager = ...;
barterManager.BarterBeginEventDelegate(args);
```

### BeginPlayerBarter
`public void BeginPlayerBarter(BarterData args)`

**Purpose:** Executes the BeginPlayerBarter logic.

```csharp
// Obtain an instance of BarterManager from the subsystem API first
BarterManager barterManager = ...;
barterManager.BeginPlayerBarter(args);
```

### StartBarterOffer
`public void StartBarterOffer(Hero offerer, Hero other, PartyBase offererParty, PartyBase otherParty, Hero beneficiaryOfOtherHero = null, BarterContextInitializer InitContext = null, int persuasionCostReduction = 0, bool isAIBarter = false, IEnumerable<Barterable> defaultBarterables = null)`

**Purpose:** Starts the barter offer flow or state machine.

```csharp
// Obtain an instance of BarterManager from the subsystem API first
BarterManager barterManager = ...;
barterManager.StartBarterOffer(offerer, other, offererParty, otherParty, null, null, 0, false, null);
```

### ExecuteAiBarter
`public void ExecuteAiBarter(IFaction faction1, IFaction faction2, Hero faction1Hero, Hero faction2Hero, Barterable barterable)`

**Purpose:** Runs the operation or workflow associated with ai barter.

```csharp
// Obtain an instance of BarterManager from the subsystem API first
BarterManager barterManager = ...;
barterManager.ExecuteAiBarter(faction1, faction2, faction1Hero, faction2Hero, barterable);
```

### ExecuteAiBarter
`public void ExecuteAiBarter(IFaction faction1, IFaction faction2, Hero faction1Hero, Hero faction2Hero, IEnumerable<Barterable> baseBarterables)`

**Purpose:** Runs the operation or workflow associated with ai barter.

```csharp
// Obtain an instance of BarterManager from the subsystem API first
BarterManager barterManager = ...;
barterManager.ExecuteAiBarter(faction1, faction2, faction1Hero, faction2Hero, baseBarterables);
```

### ExecuteAIBarter
`public void ExecuteAIBarter(BarterData barterData, IFaction faction1, IFaction faction2, Hero faction1Hero, Hero faction2Hero)`

**Purpose:** Runs the operation or workflow associated with a i barter.

```csharp
// Obtain an instance of BarterManager from the subsystem API first
BarterManager barterManager = ...;
barterManager.ExecuteAIBarter(barterData, faction1, faction2, faction1Hero, faction2Hero);
```

### Close
`public void Close()`

**Purpose:** Closes the resource or UI represented by the this instance.

```csharp
// Obtain an instance of BarterManager from the subsystem API first
BarterManager barterManager = ...;
barterManager.Close();
```

### IsOfferAcceptable
`public bool IsOfferAcceptable(BarterData args, Hero hero, PartyBase party)`

**Purpose:** Determines whether the this instance is in the offer acceptable state or condition.

```csharp
// Obtain an instance of BarterManager from the subsystem API first
BarterManager barterManager = ...;
var result = barterManager.IsOfferAcceptable(args, hero, party);
```

### GetOfferValueForFaction
`public float GetOfferValueForFaction(BarterData barterData, IFaction faction)`

**Purpose:** Reads and returns the offer value for faction value held by the this instance.

```csharp
// Obtain an instance of BarterManager from the subsystem API first
BarterManager barterManager = ...;
var result = barterManager.GetOfferValueForFaction(barterData, faction);
```

### GetOfferValue
`public float GetOfferValue(Hero selfHero, PartyBase selfParty, PartyBase offererParty, IEnumerable<Barterable> offeredBarters)`

**Purpose:** Reads and returns the offer value value held by the this instance.

```csharp
// Obtain an instance of BarterManager from the subsystem API first
BarterManager barterManager = ...;
var result = barterManager.GetOfferValue(selfHero, selfParty, offererParty, offeredBarters);
```

### ApplyAndFinalizePlayerBarter
`public void ApplyAndFinalizePlayerBarter(Hero offererHero, Hero otherHero, BarterData barterData)`

**Purpose:** Applies the effect of and finalize player barter to the this instance.

```csharp
// Obtain an instance of BarterManager from the subsystem API first
BarterManager barterManager = ...;
barterManager.ApplyAndFinalizePlayerBarter(offererHero, otherHero, barterData);
```

### CancelAndFinalizePlayerBarter
`public void CancelAndFinalizePlayerBarter(Hero offererHero, Hero otherHero, BarterData barterData)`

**Purpose:** Checks whether the this instance meets the preconditions for cel and finalize player barter.

```csharp
// Obtain an instance of BarterManager from the subsystem API first
BarterManager barterManager = ...;
barterManager.CancelAndFinalizePlayerBarter(offererHero, otherHero, barterData);
```

### CanPlayerBarterWithHero
`public bool CanPlayerBarterWithHero(Hero hero)`

**Purpose:** Checks whether the this instance meets the preconditions for player barter with hero.

```csharp
// Obtain an instance of BarterManager from the subsystem API first
BarterManager barterManager = ...;
var result = barterManager.CanPlayerBarterWithHero(hero);
```

### InitializeMarriageBarterContext
`public bool InitializeMarriageBarterContext(Barterable barterable, BarterData args, object obj)`

**Purpose:** Prepares the resources, state, or bindings required by marriage barter context.

```csharp
// Obtain an instance of BarterManager from the subsystem API first
BarterManager barterManager = ...;
var result = barterManager.InitializeMarriageBarterContext(barterable, args, obj);
```

### InitializeJoinFactionBarterContext
`public bool InitializeJoinFactionBarterContext(Barterable barterable, BarterData args, object obj)`

**Purpose:** Prepares the resources, state, or bindings required by join faction barter context.

```csharp
// Obtain an instance of BarterManager from the subsystem API first
BarterManager barterManager = ...;
var result = barterManager.InitializeJoinFactionBarterContext(barterable, args, obj);
```

### InitializeMakePeaceBarterContext
`public bool InitializeMakePeaceBarterContext(Barterable barterable, BarterData args, object obj)`

**Purpose:** Prepares the resources, state, or bindings required by make peace barter context.

```csharp
// Obtain an instance of BarterManager from the subsystem API first
BarterManager barterManager = ...;
var result = barterManager.InitializeMakePeaceBarterContext(barterable, args, obj);
```

### InitializeSafePassageBarterContext
`public bool InitializeSafePassageBarterContext(Barterable barterable, BarterData args, object obj)`

**Purpose:** Prepares the resources, state, or bindings required by safe passage barter context.

```csharp
// Obtain an instance of BarterManager from the subsystem API first
BarterManager barterManager = ...;
var result = barterManager.InitializeSafePassageBarterContext(barterable, args, obj);
```

## Usage Example

```csharp
var manager = BarterManager.Current;
```

## See Also

- [Area Index](../)