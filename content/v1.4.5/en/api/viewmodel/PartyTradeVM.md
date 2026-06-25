---
title: "PartyTradeVM"
description: "Auto-generated class reference for PartyTradeVM."
---
# PartyTradeVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Party
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PartyTradeVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Party/PartyTradeVM.cs`

## Overview

`PartyTradeVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Party` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Party` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsTransfarable` | `public bool IsTransfarable { get; set; }` |
| `ThisStockLbl` | `public string ThisStockLbl { get; set; }` |
| `TotalStockLbl` | `public string TotalStockLbl { get; set; }` |
| `ThisStock` | `public int ThisStock { get; set; }` |
| `InitialThisStock` | `public int InitialThisStock { get; set; }` |
| `OtherStock` | `public int OtherStock { get; set; }` |
| `InitialOtherStock` | `public int InitialOtherStock { get; set; }` |
| `TotalStock` | `public int TotalStock { get; set; }` |
| `IsThisStockIncreasable` | `public bool IsThisStockIncreasable { get; set; }` |
| `IsOtherStockIncreasable` | `public bool IsOtherStockIncreasable { get; set; }` |
| `TakeHint` | `public HintViewModel TakeHint { get; set; }` |
| `GiveHint` | `public HintViewModel GiveHint { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of PartyTradeVM from the subsystem API first
PartyTradeVM partyTradeVM = ...;
partyTradeVM.RefreshValues();
```

### UpdateTroopData
`public void UpdateTroopData(TroopRosterElement troopRoster, PartyScreenLogic.PartyRosterSide side, bool forceUpdate = true)`

**Purpose:** Recalculates and stores the latest representation of troop data.

```csharp
// Obtain an instance of PartyTradeVM from the subsystem API first
PartyTradeVM partyTradeVM = ...;
partyTradeVM.UpdateTroopData(troopRoster, side, false);
```

### FindTroopFromSide
`public TroopRosterElement? FindTroopFromSide(CharacterObject character, PartyScreenLogic.PartyRosterSide side, bool isPrisoner)`

**Purpose:** Looks up the matching troop from side in the current collection or scope.

```csharp
// Obtain an instance of PartyTradeVM from the subsystem API first
PartyTradeVM partyTradeVM = ...;
var result = partyTradeVM.FindTroopFromSide(character, side, false);
```

### ExecuteIncreasePlayerStock
`public void ExecuteIncreasePlayerStock()`

**Purpose:** Runs the operation or workflow associated with increase player stock.

```csharp
// Obtain an instance of PartyTradeVM from the subsystem API first
PartyTradeVM partyTradeVM = ...;
partyTradeVM.ExecuteIncreasePlayerStock();
```

### ExecuteIncreaseOtherStock
`public void ExecuteIncreaseOtherStock()`

**Purpose:** Runs the operation or workflow associated with increase other stock.

```csharp
// Obtain an instance of PartyTradeVM from the subsystem API first
PartyTradeVM partyTradeVM = ...;
partyTradeVM.ExecuteIncreaseOtherStock();
```

### ExecuteReset
`public void ExecuteReset()`

**Purpose:** Runs the operation or workflow associated with reset.

```csharp
// Obtain an instance of PartyTradeVM from the subsystem API first
PartyTradeVM partyTradeVM = ...;
partyTradeVM.ExecuteReset();
```

### ExecuteApplyTransaction
`public void ExecuteApplyTransaction()`

**Purpose:** Runs the operation or workflow associated with apply transaction.

```csharp
// Obtain an instance of PartyTradeVM from the subsystem API first
PartyTradeVM partyTradeVM = ...;
partyTradeVM.ExecuteApplyTransaction();
```

### ExecuteRemoveZeroCounts
`public void ExecuteRemoveZeroCounts()`

**Purpose:** Runs the operation or workflow associated with remove zero counts.

```csharp
// Obtain an instance of PartyTradeVM from the subsystem API first
PartyTradeVM partyTradeVM = ...;
partyTradeVM.ExecuteRemoveZeroCounts();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PartyTradeVM partyTradeVM = ...;
partyTradeVM.RefreshValues();
```

## See Also

- [Area Index](../)