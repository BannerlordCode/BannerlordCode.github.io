<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `InventoryLogic`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# InventoryLogic

**Namespace:** TaleWorlds.CampaignSystem.Inventory
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class InventoryLogic`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Inventory/InventoryLogic.cs`

## Overview

`InventoryLogic` is a MissionLogic (a MissionBehavior subclass) running per-tick/event logic in a mission. Add via `mission.AddMissionBehavior(new InventoryLogic())`; subclass it to customize.

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
| `CurrentSettlementComponent` | `public SettlementComponent CurrentSettlementComponent { get; }` |
| `CurrentMobileParty` | `public MobileParty CurrentMobileParty { get; }` |
| `TransactionDebt` | `public int TransactionDebt { get; }` |
| `XpGainFromDonations` | `public float XpGainFromDonations { get; }` |
| `CharacterEquipments` | `public Dictionary<CharacterObject, Equipment > CharacterEquipments { get; }` |
| `IsSelling` | `public bool IsSelling { get; }` |
| `Count` | `public int Count { get; }` |
| `IsEmpty` | `public bool IsEmpty { get; }` |

## Key Methods

### Initialize
```csharp
public void Initialize(ItemRoster leftItemRoster, MobileParty party, bool isTrading, bool isSpecialActionsPermitted, CharacterObject initialCharacterOfRightRoster, InventoryScreenHelper.InventoryCategoryType merchantItemType, IMarketData marketData, bool useBasePrices, InventoryScreenHelper.InventoryMode inventoryMode, TextObject leftRosterName = null, TroopRoster leftMemberRoster = null, InventoryLogic.CapacityData otherSideCapacityData = null)
```

### Initialize
```csharp
public void Initialize(ItemRoster leftItemRoster, ItemRoster rightItemRoster, TroopRoster rightMemberRoster, bool isTrading, bool isSpecialActionsPermitted, CharacterObject initialCharacterOfRightRoster, InventoryScreenHelper.InventoryCategoryType merchantItemType, IMarketData marketData, bool useBasePrices, InventoryScreenHelper.InventoryMode inventoryMode, TextObject leftRosterName = null, TroopRoster leftMemberRoster = null, InventoryLogic.CapacityData otherSideCapacityData = null)
```

### GetItemTotalPrice
```csharp
public int GetItemTotalPrice(ItemRosterElement itemRosterElement, int absStockChange, out int lastPrice, bool isBuying)
```

### SetPlayerAcceptTraderOffer
```csharp
public void SetPlayerAcceptTraderOffer()
```

### DoneLogic
```csharp
public bool DoneLogic()
```

### GetBoughtItems
```csharp
public List<ValueTuple<ItemRosterElement, int>> GetBoughtItems()
```

### GetSoldItems
```csharp
public List<ValueTuple<ItemRosterElement, int>> GetSoldItems()
```

### CanInventoryCapacityIncrease
```csharp
public bool CanInventoryCapacityIncrease(InventoryLogic.InventorySide side)
```

### GetCanItemIncreaseInventoryCapacity
```csharp
public bool GetCanItemIncreaseInventoryCapacity(ItemObject item)
```

### GetAveragePriceFactorItemCategory
```csharp
public float GetAveragePriceFactorItemCategory(ItemCategory category)
```

### IsThereAnyChanges
```csharp
public bool IsThereAnyChanges()
```

### Reset
```csharp
public void Reset(bool fromCancel)
```

### CanPlayerCompleteTransaction
```csharp
public bool CanPlayerCompleteTransaction()
```

### CanSlaughterItem
```csharp
public bool CanSlaughterItem(ItemRosterElement element, InventoryLogic.InventorySide sideOfItem)
```

### IsSlaughterable
```csharp
public bool IsSlaughterable(ItemObject item)
```

### CanDonateItem
```csharp
public bool CanDonateItem(ItemRosterElement element, InventoryLogic.InventorySide sideOfItem)
```

### IsDonatable
```csharp
public bool IsDonatable(ItemObject item)
```

### SetInventoryListener
```csharp
public void SetInventoryListener(InventoryListener inventoryListener)
```

### GetItemPrice
```csharp
public int GetItemPrice(EquipmentElement equipmentElement, bool isBuying = false)
```

### GetCostOfItemRosterElement
```csharp
public int GetCostOfItemRosterElement(ItemRosterElement itemRosterElement, InventoryLogic.InventorySide side)
```

### AddTransferCommand
```csharp
public void AddTransferCommand(TransferCommand command)
```

### AddTransferCommands
```csharp
public void AddTransferCommands(IEnumerable<TransferCommand> commands)
```

### CheckItemRosterHasElement
```csharp
public bool CheckItemRosterHasElement(InventoryLogic.InventorySide side, ItemRosterElement rosterElement, int number)
```

### IsEquipmentSide
```csharp
public static bool IsEquipmentSide(InventoryLogic.InventorySide side)
```

### SlaughterItem
```csharp
public void SlaughterItem(ItemRosterElement itemRosterElement)
```

### DonateItem
```csharp
public void DonateItem(ItemRosterElement itemRosterElement)
```

### TransferOne
```csharp
public void TransferOne(ItemRosterElement itemRosterElement)
```

### GetElementCountOnSide
```csharp
public int GetElementCountOnSide(InventoryLogic.InventorySide side)
```

### GetElementsInInitialRoster
```csharp
public IReadOnlyList<ItemRosterElement> GetElementsInInitialRoster(InventoryLogic.InventorySide side)
```

### GetElementsInRoster
```csharp
public IReadOnlyList<ItemRosterElement> GetElementsInRoster(InventoryLogic.InventorySide side)
```

## Usage Example

```csharp
// Typical usage of InventoryLogic (Logic)
Mission.Current.AddMissionBehavior(new InventoryLogic());
```

## See Also

- [Complete Class Catalog](../catalog)