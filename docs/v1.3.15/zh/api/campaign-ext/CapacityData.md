<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CapacityData`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CapacityData

**命名空间:** TaleWorlds.CampaignSystem.Inventory
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`CapacityData` 是 `TaleWorlds.CampaignSystem.Inventory` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

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


## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)