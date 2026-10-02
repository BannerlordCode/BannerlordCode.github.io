---
title: "InventoryLogic"
description: "InventoryLogic: a public class in TaleWorlds.CampaignSystem.Inventory; 72 exposed members (34 methods, 27 properties, 1 fields). Canonical bucket campaign. Source: TaleWorlds.CampaignSystem/Inventory/InventoryLogic.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# InventoryLogic

**Namespace:** `TaleWorlds.CampaignSystem.Inventory`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class InventoryLogic`
**File:** `TaleWorlds.CampaignSystem/Inventory/InventoryLogic.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## Overview

InventoryLogic lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Inventory/InventoryLogic.cs. It is a public class; the inheritance chain is InventoryLogic. It exposes 72 public/protected members: 34 methods, 27 properties, 1 fields, 2 events, 2 constructors, 6 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: InventoryLogic lands in canonical bucket `campaign` (matched rule `rule:TaleWorlds.CampaignSystem`), namespace `TaleWorlds.CampaignSystem.Inventory`, inheritance chain InventoryLogic. The surface is method-led (methods 34/72, properties 27/72), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Inventory/InventoryLogic.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `DisableNetwork` | `public bool DisableNetwork` | property |
| `Action` | `public Action<int>TotalAmountChange` | property |
| `DonationXpChange` | `public Action DonationXpChange` | property |
| `AfterReset;` | `public event InventoryLogic.AfterResetDelegate AfterReset;` | event |
| `AfterTransfer;` | `public event InventoryLogic.ProcessResultListDelegate AfterTransfer;` | event |
| `RightMemberRoster` | `public TroopRoster RightMemberRoster` | property |
| `LeftMemberRoster` | `public TroopRoster LeftMemberRoster` | property |
| `InitialEquipmentCharacter` | `public CharacterObject InitialEquipmentCharacter` | property |
| `IsTrading` | `public bool IsTrading` | property |
| `IsSpecialActionsPermitted` | `public bool IsSpecialActionsPermitted` | property |
| `OwnerCharacter` | `public CharacterObject OwnerCharacter` | property |
| `OwnerParty` | `public MobileParty OwnerParty` | property |
| `OtherParty` | `public PartyBase OtherParty` | property |
| `MarketData` | `public IMarketData MarketData` | property |
| `OtherSideCapacityData` | `public InventoryLogic.CapacityData OtherSideCapacityData` | property |
| `OtherSideCurrentWeight` | `public int OtherSideCurrentWeight` | property |
| `LeftRosterName` | `public TextObject LeftRosterName` | property |
| `CanGainXpFromDiscarding` | `public bool CanGainXpFromDiscarding` | property |
| `IsOtherPartyFromPlayerClan` | `public bool IsOtherPartyFromPlayerClan` | property |
| `InventoryListener` | `public InventoryListener InventoryListener` | property |
| `TotalAmount` | `public int TotalAmount` | property |
| `OppositePartyFromListener` | `public PartyBase OppositePartyFromListener` | property |
| `CurrentSettlementComponent` | `public SettlementComponent CurrentSettlementComponent` | property |
| `CurrentMobileParty` | `public MobileParty CurrentMobileParty` | property |
| `TransactionDebt` | `public int TransactionDebt` | property |
| `XpGainFromDonations` | `public float XpGainFromDonations` | property |
| `InventoryLogic` | `public InventoryLogic(MobileParty ownerParty, CharacterObject ownerCharacter, PartyBase merchantParty)` | constructor |
| `InventoryLogic` | `public InventoryLogic(PartyBase merchantParty) : this(MobileParty.MainParty, CharacterObject.PlayerCharacter, merchantParty)` | constructor |
| `Initialize` | `public void Initialize(ItemRoster leftItemRoster, MobileParty party, bool isTrading, bool isSpecialActionsPermitted, CharacterObject initialCharacterOfRightRoster, InventoryScreenHelper.InventoryCategoryType merchantItemType, IMarketData marketData, bool useBasePrices, InventoryScreenHelper.InventoryMode inventoryMode, TextObject leftRosterName = null, TroopRoster leftMemberRoster = null, InventoryLogic.CapacityData otherSideCapacityData = null)` | method |
| `Initialize` | `public void Initialize(ItemRoster leftItemRoster, ItemRoster rightItemRoster, TroopRoster rightMemberRoster, bool isTrading, bool isSpecialActionsPermitted, CharacterObject initialCharacterOfRightRoster, InventoryScreenHelper.InventoryCategoryType merchantItemType, IMarketData marketData, bool useBasePrices, InventoryScreenHelper.InventoryMode inventoryMode, TextObject leftRosterName = null, TroopRoster leftMemberRoster = null, InventoryLogic.CapacityData otherSideCapacityData = null)` | method |
| `GetItemTotalPrice` | `public int GetItemTotalPrice(ItemRosterElement itemRosterElement, int absStockChange, out int lastPrice, bool isBuying)` | method |
| `SetPlayerAcceptTraderOffer` | `public void SetPlayerAcceptTraderOffer()` | method |
| `DoneLogic` | `public bool DoneLogic()` | method |
| `int>>GetBoughtItems` | `public List<ValueTuple<ItemRosterElement, int>>GetBoughtItems()` | method |
| `int>>GetSoldItems` | `public List<ValueTuple<ItemRosterElement, int>>GetSoldItems()` | method |
| `CanInventoryCapacityIncrease` | `public bool CanInventoryCapacityIncrease(InventoryLogic.InventorySide side)` | method |
| `GetCanItemIncreaseInventoryCapacity` | `public bool GetCanItemIncreaseInventoryCapacity(ItemObject item)` | method |
| `GetAveragePriceFactorItemCategory` | `public float GetAveragePriceFactorItemCategory(ItemCategory category)` | method |
| `IsThereAnyChanges` | `public bool IsThereAnyChanges()` | method |
| `Reset` | `public void Reset(bool fromCancel)` | method |
| `CanPlayerCompleteTransaction` | `public bool CanPlayerCompleteTransaction()` | method |
| `CanSlaughterItem` | `public bool CanSlaughterItem(ItemRosterElement element, InventoryLogic.InventorySide sideOfItem)` | method |
| `IsSlaughterable` | `public bool IsSlaughterable(ItemObject item)` | method |
| `CanDonateItem` | `public bool CanDonateItem(ItemRosterElement element, InventoryLogic.InventorySide sideOfItem)` | method |
| `IsDonatable` | `public bool IsDonatable(ItemObject item)` | method |
| `SetInventoryListener` | `public void SetInventoryListener(InventoryListener inventoryListener)` | method |
| `GetItemPrice` | `public int GetItemPrice(EquipmentElement equipmentElement, bool isBuying = false)` | method |
| `GetCostOfItemRosterElement` | `public int GetCostOfItemRosterElement(ItemRosterElement itemRosterElement, InventoryLogic.InventorySide side)` | method |
| `AddTransferCommand` | `public void AddTransferCommand(TransferCommand command)` | method |
| `AddTransferCommands` | `public void AddTransferCommands(IEnumerable<TransferCommand>commands)` | method |
| `CheckItemRosterHasElement` | `public bool CheckItemRosterHasElement(InventoryLogic.InventorySide side, ItemRosterElement rosterElement, int number)` | method |
| `IsEquipmentSide` | `public static bool IsEquipmentSide(InventoryLogic.InventorySide side)` | method |
| `SlaughterItem` | `public void SlaughterItem(ItemRosterElement itemRosterElement)` | method |
| `DonateItem` | `public void DonateItem(ItemRosterElement itemRosterElement)` | method |
| `TransferOne` | `public void TransferOne(ItemRosterElement itemRosterElement)` | method |
| `GetElementCountOnSide` | `public int GetElementCountOnSide(InventoryLogic.InventorySide side)` | method |
| `IReadOnlyList` | `public IReadOnlyList<ItemRosterElement>GetElementsInInitialRoster(InventoryLogic.InventorySide side)` | method |
| `IReadOnlyList` | `public IReadOnlyList<ItemRosterElement>GetElementsInRoster(InventoryLogic.InventorySide side)` | method |
| `FindItemFromSide` | `public ItemRosterElement? FindItemFromSide(InventoryLogic.InventorySide side, EquipmentElement item)` | method |
| `MerchantItemType` | `public InventoryScreenHelper.InventoryCategoryType MerchantItemType` | field |
| `TransferType` | `public enum TransferType` | property |
| `InventorySide` | `public enum InventorySide` | property |
| `AfterResetDelegate` | `public delegate void AfterResetDelegate(InventoryLogic inventoryLogic, bool fromCancel);` | method |
| `TotalAmountChangeDelegate` | `public delegate void TotalAmountChangeDelegate(int newTotalAmount);` | method |
| `ProcessResultListDelegate` | `public delegate void ProcessResultListDelegate(InventoryLogic inventoryLogic, List<TransferCommandResult>results);` | method |
| `CapacityData` | `public class CapacityData` | property |
| `TransferType` | `public enum TransferType` | nested type |
| `InventorySide` | `public enum InventorySide` | nested type |
| `AfterResetDelegate` | `public delegate void AfterResetDelegate(InventoryLogic inventoryLogic, bool fromCancel)` | nested type |
| `TotalAmountChangeDelegate` | `public delegate void TotalAmountChangeDelegate(int newTotalAmount)` | nested type |
| `ProcessResultListDelegate` | `public delegate void ProcessResultListDelegate(InventoryLogic inventoryLogic, List<TransferCommandResult>results)` | nested type |
| `CapacityData` | `public class CapacityData` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace FakeInventoryListener](../FakeInventoryListener/)
- [same namespace InventoryListener](../InventoryListener/)
- [same namespace InventoryTransferItemEvent](../InventoryTransferItemEvent/)
- [same namespace IPlayerTradeBehavior](../IPlayerTradeBehavior/)
