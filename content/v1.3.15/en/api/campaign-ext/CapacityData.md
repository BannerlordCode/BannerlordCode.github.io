---
title: "CapacityData"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CapacityData`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CapacityData

**Namespace:** TaleWorlds.CampaignSystem.Inventory
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CapacityData`
**Area:** campaign-ext

## Overview

`CapacityData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `CapacityData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `DisableNetwork` | `public bool DisableNetwork { get; set; }` |
| `TotalAmountChange` | `public Action<int> TotalAmountChange { get; set; }` |
| `DonationXpChange` | `public Action DonationXpChange { get; set; }` |
| `RightMemberRoster` | `public TroopRoster RightMemberRoster { get; }` |
| `LeftMemberRoster` | `public TroopRoster LeftMemberRoster { get; }` |
| `InitialEquipmentCharacter` | `public CharacterObject InitialEquipmentCharacter { get; }` |
| `IsTrading` | `public bool IsTrading { get; }` |
| `IsSpecialActionsPermitted` | `public bool IsSpecialActionsPermitted { get; }` |
| `OwnerCharacter` | `public CharacterObject OwnerCharacter { get; }` |
| `OwnerParty` | `public MobileParty OwnerParty { get; }` |
| `OtherParty` | `public PartyBase OtherParty { get; }` |
| `MarketData` | `public IMarketData MarketData { get; }` |
| `OtherSideCapacityData` | `public InventoryLogic.CapacityData OtherSideCapacityData { get; }` |
| `OtherSideCurrentWeight` | `public int OtherSideCurrentWeight { get; }` |
| `LeftRosterName` | `public TextObject LeftRosterName { get; }` |
| `IsDiscardDonating` | `public bool IsDiscardDonating { get; }` |
| `IsOtherPartyFromPlayerClan` | `public bool IsOtherPartyFromPlayerClan { get; }` |
| `InventoryListener` | `public InventoryListener InventoryListener { get; }` |
| `TotalAmount` | `public int TotalAmount { get; }` |
| `OppositePartyFromListener` | `public PartyBase OppositePartyFromListener { get; }` |

## Key Methods

### Initialize
`public void Initialize(ItemRoster leftItemRoster, MobileParty party, bool isTrading, bool isSpecialActionsPermitted, CharacterObject initialCharacterOfRightRoster, InventoryScreenHelper.InventoryCategoryType merchantItemType, IMarketData marketData, bool useBasePrices, InventoryScreenHelper.InventoryMode inventoryMode, TextObject leftRosterName = null, TroopRoster leftMemberRoster = null, InventoryLogic.CapacityData otherSideCapacityData = null)`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### Initialize
`public void Initialize(ItemRoster leftItemRoster, ItemRoster rightItemRoster, TroopRoster rightMemberRoster, bool isTrading, bool isSpecialActionsPermitted, CharacterObject initialCharacterOfRightRoster, InventoryScreenHelper.InventoryCategoryType merchantItemType, IMarketData marketData, bool useBasePrices, InventoryScreenHelper.InventoryMode inventoryMode, TextObject leftRosterName = null, TroopRoster leftMemberRoster = null, InventoryLogic.CapacityData otherSideCapacityData = null)`

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

### GetBoughtItems
`public List<ValueTuple<ItemRosterElement, int>> GetBoughtItems()`

**Purpose:** Gets the current value of `bought items`.

### GetSoldItems
`public List<ValueTuple<ItemRosterElement, int>> GetSoldItems()`

**Purpose:** Gets the current value of `sold items`.

### CanInventoryCapacityIncrease
`public bool CanInventoryCapacityIncrease(InventoryLogic.InventorySide side)`

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
`public bool CanSlaughterItem(ItemRosterElement element, InventoryLogic.InventorySide sideOfItem)`

**Purpose:** Checks whether the current object can `slaughter item`.

### IsSlaughterable
`public bool IsSlaughterable(ItemObject item)`

**Purpose:** Handles logic related to `is slaughterable`.

### CanDonateItem
`public bool CanDonateItem(ItemRosterElement element, InventoryLogic.InventorySide sideOfItem)`

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
`public int GetCostOfItemRosterElement(ItemRosterElement itemRosterElement, InventoryLogic.InventorySide side)`

**Purpose:** Gets the current value of `cost of item roster element`.

## Usage Example

```csharp
var value = new CapacityData();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
