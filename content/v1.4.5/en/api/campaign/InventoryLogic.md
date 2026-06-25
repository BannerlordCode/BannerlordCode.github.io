---
title: "InventoryLogic"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `InventoryLogic`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# InventoryLogic

**Namespace:** TaleWorlds.CampaignSystem.Inventory
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class InventoryLogic`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Inventory/InventoryLogic.cs`

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

**Purpose:** Handles logic related to `after reset delegate`.

### TotalAmountChangeDelegate
`public delegate void TotalAmountChangeDelegate(int newTotalAmount)`

**Purpose:** Handles logic related to `total amount change delegate`.

### ProcessResultListDelegate
`public delegate void ProcessResultListDelegate(InventoryLogic inventoryLogic, List<TransferCommandResult> results)`

**Purpose:** Handles logic related to `process result list delegate`.

### InitializeCopyFrom
`public void InitializeCopyFrom(MobileParty party)`

**Purpose:** Initializes the state, resources, or bindings for `copy from`.

### SetReference
`public void SetReference(PartyEquipment partyEquipment)`

**Purpose:** Sets the value or state of `reference`.

### IsEqual
`public bool IsEqual(PartyEquipment partyEquipment)`

**Purpose:** Handles logic related to `is equal`.

### RecordTransaction
`public void RecordTransaction(int price, bool isSelling)`

**Purpose:** Handles logic related to `record transaction`.

### GetLastTransaction
`public bool GetLastTransaction(out int price, out bool isSelling)`

**Purpose:** Gets the current value of `last transaction`.

### GetEnumerator
`public IEnumerator<int> GetEnumerator()`

**Purpose:** Gets the current value of `enumerator`.

### GetCapacity
`public int GetCapacity()`

**Purpose:** Gets the current value of `capacity`.

### CanForceTransaction
`public bool CanForceTransaction()`

**Purpose:** Checks whether the current object can `force transaction`.

### GetCapacityExceededWarningText
`public TextObject GetCapacityExceededWarningText()`

**Purpose:** Gets the current value of `capacity exceeded warning text`.

### GetCapacityExceededHintText
`public TextObject GetCapacityExceededHintText()`

**Purpose:** Gets the current value of `capacity exceeded hint text`.

### Clear
`public void Clear()`

**Purpose:** Handles logic related to `clear`.

### GetLastTransfer
`public bool GetLastTransfer(EquipmentElement equipmentElement, out int lastPrice, out bool lastIsSelling)`

**Purpose:** Gets the current value of `last transfer`.

### Initialize
`public void Initialize(ItemRoster leftItemRoster, MobileParty party, bool isTrading, bool isSpecialActionsPermitted, CharacterObject initialCharacterOfRightRoster, InventoryScreenHelper.InventoryCategoryType merchantItemType, IMarketData marketData, bool useBasePrices, InventoryScreenHelper.InventoryMode inventoryMode, TextObject leftRosterName = null, TroopRoster leftMemberRoster = null, CapacityData otherSideCapacityData = null)`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### Initialize
`public void Initialize(ItemRoster leftItemRoster, ItemRoster rightItemRoster, TroopRoster rightMemberRoster, bool isTrading, bool isSpecialActionsPermitted, CharacterObject initialCharacterOfRightRoster, InventoryScreenHelper.InventoryCategoryType merchantItemType, IMarketData marketData, bool useBasePrices, InventoryScreenHelper.InventoryMode inventoryMode, TextObject leftRosterName = null, TroopRoster leftMemberRoster = null, CapacityData otherSideCapacityData = null)`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### GetItemTotalPrice
`public int GetItemTotalPrice(ItemRosterElement itemRosterElement, int absStockChange, out int lastPrice, bool isBuying)`

**Purpose:** Gets the current value of `item total price`.

### SetPlayerAcceptTraderOffer
`public void SetPlayerAcceptTraderOffer()`

**Purpose:** Sets the value or state of `player accept trader offer`.

### DoneLogic
`public bool DoneLogic()`

**Purpose:** Handles logic related to `done logic`.

### CanInventoryCapacityIncrease
`public bool CanInventoryCapacityIncrease(InventorySide side)`

**Purpose:** Checks whether the current object can `inventory capacity increase`.

### GetCanItemIncreaseInventoryCapacity
`public bool GetCanItemIncreaseInventoryCapacity(ItemObject item)`

**Purpose:** Gets the current value of `can item increase inventory capacity`.

### GetAveragePriceFactorItemCategory
`public float GetAveragePriceFactorItemCategory(ItemCategory category)`

**Purpose:** Gets the current value of `average price factor item category`.

### IsThereAnyChanges
`public bool IsThereAnyChanges()`

**Purpose:** Handles logic related to `is there any changes`.

### Reset
`public void Reset(bool fromCancel)`

**Purpose:** Resets `reset` to its initial state.

### CanPlayerCompleteTransaction
`public bool CanPlayerCompleteTransaction()`

**Purpose:** Checks whether the current object can `player complete transaction`.

### CanSlaughterItem
`public bool CanSlaughterItem(ItemRosterElement element, InventorySide sideOfItem)`

**Purpose:** Checks whether the current object can `slaughter item`.

### IsSlaughterable
`public bool IsSlaughterable(ItemObject item)`

**Purpose:** Handles logic related to `is slaughterable`.

### CanDonateItem
`public bool CanDonateItem(ItemRosterElement element, InventorySide sideOfItem)`

**Purpose:** Checks whether the current object can `donate item`.

### IsDonatable
`public bool IsDonatable(ItemObject item)`

**Purpose:** Handles logic related to `is donatable`.

### SetInventoryListener
`public void SetInventoryListener(InventoryListener inventoryListener)`

**Purpose:** Sets the value or state of `inventory listener`.

### GetItemPrice
`public int GetItemPrice(EquipmentElement equipmentElement, bool isBuying = false)`

**Purpose:** Gets the current value of `item price`.

### GetCostOfItemRosterElement
`public int GetCostOfItemRosterElement(ItemRosterElement itemRosterElement, InventorySide side)`

**Purpose:** Gets the current value of `cost of item roster element`.

### AddTransferCommand
`public void AddTransferCommand(TransferCommand command)`

**Purpose:** Adds `transfer command` to the current collection or state.

### AddTransferCommands
`public void AddTransferCommands(IEnumerable<TransferCommand> commands)`

**Purpose:** Adds `transfer commands` to the current collection or state.

### CheckItemRosterHasElement
`public bool CheckItemRosterHasElement(InventorySide side, ItemRosterElement rosterElement, int number)`

**Purpose:** Handles logic related to `check item roster has element`.

### IsEquipmentSide
`public static bool IsEquipmentSide(InventorySide side)`

**Purpose:** Handles logic related to `is equipment side`.

### SlaughterItem
`public void SlaughterItem(ItemRosterElement itemRosterElement)`

**Purpose:** Handles logic related to `slaughter item`.

### DonateItem
`public void DonateItem(ItemRosterElement itemRosterElement)`

**Purpose:** Handles logic related to `donate item`.

### TransferOne
`public void TransferOne(ItemRosterElement itemRosterElement)`

**Purpose:** Handles logic related to `transfer one`.

### GetElementCountOnSide
`public int GetElementCountOnSide(InventorySide side)`

**Purpose:** Gets the current value of `element count on side`.

### GetElementsInInitialRoster
`public IReadOnlyList<ItemRosterElement> GetElementsInInitialRoster(InventorySide side)`

**Purpose:** Gets the current value of `elements in initial roster`.

### GetElementsInRoster
`public IReadOnlyList<ItemRosterElement> GetElementsInRoster(InventorySide side)`

**Purpose:** Gets the current value of `elements in roster`.

### FindItemFromSide
`public ItemRosterElement? FindItemFromSide(InventorySide side, EquipmentElement item)`

**Purpose:** Handles logic related to `find item from side`.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new InventoryLogic());
```

## See Also

- [Complete Class Catalog](../catalog)