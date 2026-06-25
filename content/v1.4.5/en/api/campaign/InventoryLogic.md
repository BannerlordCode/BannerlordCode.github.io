---
title: "InventoryLogic"
description: "Auto-generated class reference for InventoryLogic."
---
# InventoryLogic

**Namespace:** TaleWorlds.CampaignSystem.Inventory
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class InventoryLogic`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Inventory/InventoryLogic.cs`

## Overview

`InventoryLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `InventoryLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `CharacterEquipments` | `public Dictionary<CharacterObject, Equipment > CharacterEquipments { get; }` |
| `DisableNetwork` | `public bool DisableNetwork { get; }` |
| `TotalAmountChange` | `public Action<int> TotalAmountChange { get; }` |
| `DonationXpChange` | `public Action DonationXpChange { get; }` |
| `RightMemberRoster` | `public TroopRoster RightMemberRoster { get; }` |
| `LeftMemberRoster` | `public TroopRoster LeftMemberRoster { get; }` |
| `InitialEquipmentCharacter` | `public CharacterObject InitialEquipmentCharacter { get; }` |
| `IsTrading` | `public bool IsTrading { get; }` |
| `IsSpecialActionsPermitted` | `public bool IsSpecialActionsPermitted { get; }` |
| `OwnerCharacter` | `public CharacterObject OwnerCharacter { get; }` |
| `OwnerParty` | `public MobileParty OwnerParty { get; }` |
| `OtherParty` | `public PartyBase OtherParty { get; }` |
| `MarketData` | `public IMarketData MarketData { get; }` |
| `OtherSideCapacityData` | `public CapacityData OtherSideCapacityData { get; }` |
| `OtherSideCurrentWeight` | `public int OtherSideCurrentWeight { get; }` |
| `LeftRosterName` | `public TextObject LeftRosterName { get; }` |
| `CanGainXpFromDiscarding` | `public bool CanGainXpFromDiscarding { get; }` |
| `IsOtherPartyFromPlayerClan` | `public bool IsOtherPartyFromPlayerClan { get; }` |
| `InventoryListener` | `public InventoryListener InventoryListener { get; }` |
| `CurrentMobileParty` | `public MobileParty CurrentMobileParty { get; }` |
| `TransactionDebt` | `public int TransactionDebt { get; }` |
| `XpGainFromDonations` | `public float XpGainFromDonations { get; }` |

## Key Methods

### AfterResetDelegate
`public delegate void AfterResetDelegate(InventoryLogic inventoryLogic, bool fromCancel)`

**Purpose:** **Purpose:** Executes the AfterResetDelegate logic.

```csharp
// Obtain an instance of InventoryLogic from the subsystem API first
InventoryLogic inventoryLogic = ...;
inventoryLogic.AfterResetDelegate(inventoryLogic, false);
```

### TotalAmountChangeDelegate
`public delegate void TotalAmountChangeDelegate(int newTotalAmount)`

**Purpose:** **Purpose:** Executes the TotalAmountChangeDelegate logic.

```csharp
// Obtain an instance of InventoryLogic from the subsystem API first
InventoryLogic inventoryLogic = ...;
inventoryLogic.TotalAmountChangeDelegate(0);
```

### ProcessResultListDelegate
`public delegate void ProcessResultListDelegate(InventoryLogic inventoryLogic, List<TransferCommandResult> results)`

**Purpose:** **Purpose:** Executes the ProcessResultListDelegate logic.

```csharp
// Obtain an instance of InventoryLogic from the subsystem API first
InventoryLogic inventoryLogic = ...;
inventoryLogic.ProcessResultListDelegate(inventoryLogic, results);
```

### InitializeCopyFrom
`public void InitializeCopyFrom(MobileParty party)`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings required by copy from.

```csharp
// Obtain an instance of InventoryLogic from the subsystem API first
InventoryLogic inventoryLogic = ...;
inventoryLogic.InitializeCopyFrom(party);
```

### SetReference
`public void SetReference(PartyEquipment partyEquipment)`

**Purpose:** **Purpose:** Assigns a new value to reference and updates the object's internal state.

```csharp
// Obtain an instance of InventoryLogic from the subsystem API first
InventoryLogic inventoryLogic = ...;
inventoryLogic.SetReference(partyEquipment);
```

### IsEqual
`public bool IsEqual(PartyEquipment partyEquipment)`

**Purpose:** **Purpose:** Determines whether the this instance is in the equal state or condition.

```csharp
// Obtain an instance of InventoryLogic from the subsystem API first
InventoryLogic inventoryLogic = ...;
var result = inventoryLogic.IsEqual(partyEquipment);
```

### RecordTransaction
`public void RecordTransaction(int price, bool isSelling)`

**Purpose:** **Purpose:** Executes the RecordTransaction logic.

```csharp
// Obtain an instance of InventoryLogic from the subsystem API first
InventoryLogic inventoryLogic = ...;
inventoryLogic.RecordTransaction(0, false);
```

### GetLastTransaction
`public bool GetLastTransaction(out int price, out bool isSelling)`

**Purpose:** **Purpose:** Reads and returns the last transaction value held by the this instance.

```csharp
// Obtain an instance of InventoryLogic from the subsystem API first
InventoryLogic inventoryLogic = ...;
var result = inventoryLogic.GetLastTransaction(price, isSelling);
```

### GetEnumerator
`public IEnumerator<int> GetEnumerator()`

**Purpose:** **Purpose:** Reads and returns the enumerator value held by the this instance.

```csharp
// Obtain an instance of InventoryLogic from the subsystem API first
InventoryLogic inventoryLogic = ...;
var result = inventoryLogic.GetEnumerator();
```

### GetCapacity
`public int GetCapacity()`

**Purpose:** **Purpose:** Reads and returns the capacity value held by the this instance.

```csharp
// Obtain an instance of InventoryLogic from the subsystem API first
InventoryLogic inventoryLogic = ...;
var result = inventoryLogic.GetCapacity();
```

### CanForceTransaction
`public bool CanForceTransaction()`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for force transaction.

```csharp
// Obtain an instance of InventoryLogic from the subsystem API first
InventoryLogic inventoryLogic = ...;
var result = inventoryLogic.CanForceTransaction();
```

### GetCapacityExceededWarningText
`public TextObject GetCapacityExceededWarningText()`

**Purpose:** **Purpose:** Reads and returns the capacity exceeded warning text value held by the this instance.

```csharp
// Obtain an instance of InventoryLogic from the subsystem API first
InventoryLogic inventoryLogic = ...;
var result = inventoryLogic.GetCapacityExceededWarningText();
```

### GetCapacityExceededHintText
`public TextObject GetCapacityExceededHintText()`

**Purpose:** **Purpose:** Reads and returns the capacity exceeded hint text value held by the this instance.

```csharp
// Obtain an instance of InventoryLogic from the subsystem API first
InventoryLogic inventoryLogic = ...;
var result = inventoryLogic.GetCapacityExceededHintText();
```

### Clear
`public void Clear()`

**Purpose:** **Purpose:** Removes all content from the this instance.

```csharp
// Obtain an instance of InventoryLogic from the subsystem API first
InventoryLogic inventoryLogic = ...;
inventoryLogic.Clear();
```

### GetLastTransfer
`public bool GetLastTransfer(EquipmentElement equipmentElement, out int lastPrice, out bool lastIsSelling)`

**Purpose:** **Purpose:** Reads and returns the last transfer value held by the this instance.

```csharp
// Obtain an instance of InventoryLogic from the subsystem API first
InventoryLogic inventoryLogic = ...;
var result = inventoryLogic.GetLastTransfer(equipmentElement, lastPrice, lastIsSelling);
```

### Initialize
`public void Initialize(ItemRoster leftItemRoster, MobileParty party, bool isTrading, bool isSpecialActionsPermitted, CharacterObject initialCharacterOfRightRoster, InventoryScreenHelper.InventoryCategoryType merchantItemType, IMarketData marketData, bool useBasePrices, InventoryScreenHelper.InventoryMode inventoryMode, TextObject leftRosterName = null, TroopRoster leftMemberRoster = null, CapacityData otherSideCapacityData = null)`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Obtain an instance of InventoryLogic from the subsystem API first
InventoryLogic inventoryLogic = ...;
inventoryLogic.Initialize(leftItemRoster, party, false, false, initialCharacterOfRightRoster, merchantItemType, marketData, false, inventoryMode, null, null, null);
```

### Initialize
`public void Initialize(ItemRoster leftItemRoster, ItemRoster rightItemRoster, TroopRoster rightMemberRoster, bool isTrading, bool isSpecialActionsPermitted, CharacterObject initialCharacterOfRightRoster, InventoryScreenHelper.InventoryCategoryType merchantItemType, IMarketData marketData, bool useBasePrices, InventoryScreenHelper.InventoryMode inventoryMode, TextObject leftRosterName = null, TroopRoster leftMemberRoster = null, CapacityData otherSideCapacityData = null)`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Obtain an instance of InventoryLogic from the subsystem API first
InventoryLogic inventoryLogic = ...;
inventoryLogic.Initialize(leftItemRoster, rightItemRoster, rightMemberRoster, false, false, initialCharacterOfRightRoster, merchantItemType, marketData, false, inventoryMode, null, null, null);
```

### GetItemTotalPrice
`public int GetItemTotalPrice(ItemRosterElement itemRosterElement, int absStockChange, out int lastPrice, bool isBuying)`

**Purpose:** **Purpose:** Reads and returns the item total price value held by the this instance.

```csharp
// Obtain an instance of InventoryLogic from the subsystem API first
InventoryLogic inventoryLogic = ...;
var result = inventoryLogic.GetItemTotalPrice(itemRosterElement, 0, lastPrice, false);
```

### SetPlayerAcceptTraderOffer
`public void SetPlayerAcceptTraderOffer()`

**Purpose:** **Purpose:** Assigns a new value to player accept trader offer and updates the object's internal state.

```csharp
// Obtain an instance of InventoryLogic from the subsystem API first
InventoryLogic inventoryLogic = ...;
inventoryLogic.SetPlayerAcceptTraderOffer();
```

### DoneLogic
`public bool DoneLogic()`

**Purpose:** **Purpose:** Executes the DoneLogic logic.

```csharp
// Obtain an instance of InventoryLogic from the subsystem API first
InventoryLogic inventoryLogic = ...;
var result = inventoryLogic.DoneLogic();
```

### CanInventoryCapacityIncrease
`public bool CanInventoryCapacityIncrease(InventorySide side)`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for inventory capacity increase.

```csharp
// Obtain an instance of InventoryLogic from the subsystem API first
InventoryLogic inventoryLogic = ...;
var result = inventoryLogic.CanInventoryCapacityIncrease(side);
```

### GetCanItemIncreaseInventoryCapacity
`public bool GetCanItemIncreaseInventoryCapacity(ItemObject item)`

**Purpose:** **Purpose:** Reads and returns the can item increase inventory capacity value held by the this instance.

```csharp
// Obtain an instance of InventoryLogic from the subsystem API first
InventoryLogic inventoryLogic = ...;
var result = inventoryLogic.GetCanItemIncreaseInventoryCapacity(item);
```

### GetAveragePriceFactorItemCategory
`public float GetAveragePriceFactorItemCategory(ItemCategory category)`

**Purpose:** **Purpose:** Reads and returns the average price factor item category value held by the this instance.

```csharp
// Obtain an instance of InventoryLogic from the subsystem API first
InventoryLogic inventoryLogic = ...;
var result = inventoryLogic.GetAveragePriceFactorItemCategory(category);
```

### IsThereAnyChanges
`public bool IsThereAnyChanges()`

**Purpose:** **Purpose:** Determines whether the this instance is in the there any changes state or condition.

```csharp
// Obtain an instance of InventoryLogic from the subsystem API first
InventoryLogic inventoryLogic = ...;
var result = inventoryLogic.IsThereAnyChanges();
```

### Reset
`public void Reset(bool fromCancel)`

**Purpose:** **Purpose:** Returns the this instance to its default or initial condition.

```csharp
// Obtain an instance of InventoryLogic from the subsystem API first
InventoryLogic inventoryLogic = ...;
inventoryLogic.Reset(false);
```

### CanPlayerCompleteTransaction
`public bool CanPlayerCompleteTransaction()`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for player complete transaction.

```csharp
// Obtain an instance of InventoryLogic from the subsystem API first
InventoryLogic inventoryLogic = ...;
var result = inventoryLogic.CanPlayerCompleteTransaction();
```

### CanSlaughterItem
`public bool CanSlaughterItem(ItemRosterElement element, InventorySide sideOfItem)`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for slaughter item.

```csharp
// Obtain an instance of InventoryLogic from the subsystem API first
InventoryLogic inventoryLogic = ...;
var result = inventoryLogic.CanSlaughterItem(element, sideOfItem);
```

### IsSlaughterable
`public bool IsSlaughterable(ItemObject item)`

**Purpose:** **Purpose:** Determines whether the this instance is in the slaughterable state or condition.

```csharp
// Obtain an instance of InventoryLogic from the subsystem API first
InventoryLogic inventoryLogic = ...;
var result = inventoryLogic.IsSlaughterable(item);
```

### CanDonateItem
`public bool CanDonateItem(ItemRosterElement element, InventorySide sideOfItem)`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for donate item.

```csharp
// Obtain an instance of InventoryLogic from the subsystem API first
InventoryLogic inventoryLogic = ...;
var result = inventoryLogic.CanDonateItem(element, sideOfItem);
```

### IsDonatable
`public bool IsDonatable(ItemObject item)`

**Purpose:** **Purpose:** Determines whether the this instance is in the donatable state or condition.

```csharp
// Obtain an instance of InventoryLogic from the subsystem API first
InventoryLogic inventoryLogic = ...;
var result = inventoryLogic.IsDonatable(item);
```

### SetInventoryListener
`public void SetInventoryListener(InventoryListener inventoryListener)`

**Purpose:** **Purpose:** Assigns a new value to inventory listener and updates the object's internal state.

```csharp
// Obtain an instance of InventoryLogic from the subsystem API first
InventoryLogic inventoryLogic = ...;
inventoryLogic.SetInventoryListener(inventoryListener);
```

### GetItemPrice
`public int GetItemPrice(EquipmentElement equipmentElement, bool isBuying = false)`

**Purpose:** **Purpose:** Reads and returns the item price value held by the this instance.

```csharp
// Obtain an instance of InventoryLogic from the subsystem API first
InventoryLogic inventoryLogic = ...;
var result = inventoryLogic.GetItemPrice(equipmentElement, false);
```

### GetCostOfItemRosterElement
`public int GetCostOfItemRosterElement(ItemRosterElement itemRosterElement, InventorySide side)`

**Purpose:** **Purpose:** Reads and returns the cost of item roster element value held by the this instance.

```csharp
// Obtain an instance of InventoryLogic from the subsystem API first
InventoryLogic inventoryLogic = ...;
var result = inventoryLogic.GetCostOfItemRosterElement(itemRosterElement, side);
```

### AddTransferCommand
`public void AddTransferCommand(TransferCommand command)`

**Purpose:** **Purpose:** Adds transfer command to the current collection or state.

```csharp
// Obtain an instance of InventoryLogic from the subsystem API first
InventoryLogic inventoryLogic = ...;
inventoryLogic.AddTransferCommand(command);
```

### AddTransferCommands
`public void AddTransferCommands(IEnumerable<TransferCommand> commands)`

**Purpose:** **Purpose:** Adds transfer commands to the current collection or state.

```csharp
// Obtain an instance of InventoryLogic from the subsystem API first
InventoryLogic inventoryLogic = ...;
inventoryLogic.AddTransferCommands(commands);
```

### CheckItemRosterHasElement
`public bool CheckItemRosterHasElement(InventorySide side, ItemRosterElement rosterElement, int number)`

**Purpose:** **Purpose:** Verifies whether item roster has element holds true for the this instance.

```csharp
// Obtain an instance of InventoryLogic from the subsystem API first
InventoryLogic inventoryLogic = ...;
var result = inventoryLogic.CheckItemRosterHasElement(side, rosterElement, 0);
```

### IsEquipmentSide
`public static bool IsEquipmentSide(InventorySide side)`

**Purpose:** **Purpose:** Determines whether the this instance is in the equipment side state or condition.

```csharp
// Static call; no instance required
InventoryLogic.IsEquipmentSide(side);
```

### SlaughterItem
`public void SlaughterItem(ItemRosterElement itemRosterElement)`

**Purpose:** **Purpose:** Executes the SlaughterItem logic.

```csharp
// Obtain an instance of InventoryLogic from the subsystem API first
InventoryLogic inventoryLogic = ...;
inventoryLogic.SlaughterItem(itemRosterElement);
```

### DonateItem
`public void DonateItem(ItemRosterElement itemRosterElement)`

**Purpose:** **Purpose:** Executes the DonateItem logic.

```csharp
// Obtain an instance of InventoryLogic from the subsystem API first
InventoryLogic inventoryLogic = ...;
inventoryLogic.DonateItem(itemRosterElement);
```

### TransferOne
`public void TransferOne(ItemRosterElement itemRosterElement)`

**Purpose:** **Purpose:** Executes the TransferOne logic.

```csharp
// Obtain an instance of InventoryLogic from the subsystem API first
InventoryLogic inventoryLogic = ...;
inventoryLogic.TransferOne(itemRosterElement);
```

### GetElementCountOnSide
`public int GetElementCountOnSide(InventorySide side)`

**Purpose:** **Purpose:** Reads and returns the element count on side value held by the this instance.

```csharp
// Obtain an instance of InventoryLogic from the subsystem API first
InventoryLogic inventoryLogic = ...;
var result = inventoryLogic.GetElementCountOnSide(side);
```

### GetElementsInInitialRoster
`public IReadOnlyList<ItemRosterElement> GetElementsInInitialRoster(InventorySide side)`

**Purpose:** **Purpose:** Reads and returns the elements in initial roster value held by the this instance.

```csharp
// Obtain an instance of InventoryLogic from the subsystem API first
InventoryLogic inventoryLogic = ...;
var result = inventoryLogic.GetElementsInInitialRoster(side);
```

### GetElementsInRoster
`public IReadOnlyList<ItemRosterElement> GetElementsInRoster(InventorySide side)`

**Purpose:** **Purpose:** Reads and returns the elements in roster value held by the this instance.

```csharp
// Obtain an instance of InventoryLogic from the subsystem API first
InventoryLogic inventoryLogic = ...;
var result = inventoryLogic.GetElementsInRoster(side);
```

### FindItemFromSide
`public ItemRosterElement? FindItemFromSide(InventorySide side, EquipmentElement item)`

**Purpose:** **Purpose:** Looks up the matching item from side in the current collection or scope.

```csharp
// Obtain an instance of InventoryLogic from the subsystem API first
InventoryLogic inventoryLogic = ...;
var result = inventoryLogic.FindItemFromSide(side, item);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<InventoryLogic>();
```

## See Also

- [Area Index](../)