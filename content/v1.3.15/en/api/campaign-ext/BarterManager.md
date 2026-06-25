---
title: "BarterManager"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BarterManager`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BarterManager

**Namespace:** TaleWorlds.CampaignSystem.BarterSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class BarterManager`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/BarterSystem/BarterManager.cs`

## Overview

`BarterManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `BarterManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Instance` | `public static BarterManager Instance { get; set; }` |
| `LastBarterIsAccepted` | `public bool LastBarterIsAccepted { get; set; }` |

## Key Methods

### BeginPlayerBarter
`public void BeginPlayerBarter(BarterData args)`

**Purpose:** Handles logic related to `begin player barter`.

### StartBarterOffer
`public void StartBarterOffer(Hero offerer, Hero other, PartyBase offererParty, PartyBase otherParty, Hero beneficiaryOfOtherHero = null, BarterManager.BarterContextInitializer InitContext = null, int persuasionCostReduction = 0, bool isAIBarter = false, IEnumerable<Barterable> defaultBarterables = null)`

**Purpose:** Handles logic related to `start barter offer`.

### ExecuteAiBarter
`public void ExecuteAiBarter(IFaction faction1, IFaction faction2, Hero faction1Hero, Hero faction2Hero, Barterable barterable)`

**Purpose:** Executes the `ai barter` operation or workflow.

### ExecuteAiBarter
`public void ExecuteAiBarter(IFaction faction1, IFaction faction2, Hero faction1Hero, Hero faction2Hero, IEnumerable<Barterable> baseBarterables)`

**Purpose:** Executes the `ai barter` operation or workflow.

### ExecuteAIBarter
`public void ExecuteAIBarter(BarterData barterData, IFaction faction1, IFaction faction2, Hero faction1Hero, Hero faction2Hero)`

**Purpose:** Executes the `a i barter` operation or workflow.

### Close
`public void Close()`

**Purpose:** Handles logic related to `close`.

### IsOfferAcceptable
`public bool IsOfferAcceptable(BarterData args, Hero hero, PartyBase party)`

**Purpose:** Handles logic related to `is offer acceptable`.

### GetOfferValueForFaction
`public float GetOfferValueForFaction(BarterData barterData, IFaction faction)`

**Purpose:** Gets the current value of `offer value for faction`.

### GetOfferValue
`public float GetOfferValue(Hero selfHero, PartyBase selfParty, PartyBase offererParty, IEnumerable<Barterable> offeredBarters)`

**Purpose:** Gets the current value of `offer value`.

### ApplyAndFinalizePlayerBarter
`public void ApplyAndFinalizePlayerBarter(Hero offererHero, Hero otherHero, BarterData barterData)`

**Purpose:** Applies `and finalize player barter` to the current object.

### CancelAndFinalizePlayerBarter
`public void CancelAndFinalizePlayerBarter(Hero offererHero, Hero otherHero, BarterData barterData)`

**Purpose:** Checks whether the current object can `cel and finalize player barter`.

### CanPlayerBarterWithHero
`public bool CanPlayerBarterWithHero(Hero hero)`

**Purpose:** Checks whether the current object can `player barter with hero`.

### InitializeMarriageBarterContext
`public bool InitializeMarriageBarterContext(Barterable barterable, BarterData args, object obj)`

**Purpose:** Initializes the state, resources, or bindings for `marriage barter context`.

### InitializeJoinFactionBarterContext
`public bool InitializeJoinFactionBarterContext(Barterable barterable, BarterData args, object obj)`

**Purpose:** Initializes the state, resources, or bindings for `join faction barter context`.

### InitializeMakePeaceBarterContext
`public bool InitializeMakePeaceBarterContext(Barterable barterable, BarterData args, object obj)`

**Purpose:** Initializes the state, resources, or bindings for `make peace barter context`.

### InitializeSafePassageBarterContext
`public bool InitializeSafePassageBarterContext(Barterable barterable, BarterData args, object obj)`

**Purpose:** Initializes the state, resources, or bindings for `safe passage barter context`.

### BarterContextInitializer
`public delegate bool BarterContextInitializer(Barterable barterable, BarterData args, object obj = null)`

**Purpose:** Handles logic related to `barter context initializer`.

### BarterCloseEventDelegate
`public delegate void BarterCloseEventDelegate()`

**Purpose:** Handles logic related to `barter close event delegate`.

### BarterBeginEventDelegate
`public delegate void BarterBeginEventDelegate(BarterData args)`

**Purpose:** Handles logic related to `barter begin event delegate`.

## Usage Example

```csharp
var manager = BarterManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)