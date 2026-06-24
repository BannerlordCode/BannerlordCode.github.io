<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SteamGameServerInventory`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SteamGameServerInventory

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public static class SteamGameServerInventory`
**Base:** none
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/SteamGameServerInventory.cs`

## Overview

`SteamGameServerInventory` lives in `Steamworks` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Steamworks` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetResultStatus
`public static EResult GetResultStatus(SteamInventoryResult_t resultHandle)`

**Purpose:** Gets the current value of `result status`.

### GetResultItems
`public static bool GetResultItems(SteamInventoryResult_t resultHandle, SteamItemDetails_t pOutItemsArray, ref uint punOutItemsArraySize)`

**Purpose:** Gets the current value of `result items`.

### GetResultItemProperty
`public static bool GetResultItemProperty(SteamInventoryResult_t resultHandle, uint unItemIndex, string pchPropertyName, out string pchValueBuffer, ref uint punValueBufferSizeOut)`

**Purpose:** Gets the current value of `result item property`.

### GetResultTimestamp
`public static uint GetResultTimestamp(SteamInventoryResult_t resultHandle)`

**Purpose:** Gets the current value of `result timestamp`.

### CheckResultSteamID
`public static bool CheckResultSteamID(SteamInventoryResult_t resultHandle, CSteamID steamIDExpected)`

**Purpose:** Handles logic related to `check result steam i d`.

### DestroyResult
`public static void DestroyResult(SteamInventoryResult_t resultHandle)`

**Purpose:** Handles logic related to `destroy result`.

### GetAllItems
`public static bool GetAllItems(out SteamInventoryResult_t pResultHandle)`

**Purpose:** Gets the current value of `all items`.

### GetItemsByID
`public static bool GetItemsByID(out SteamInventoryResult_t pResultHandle, SteamItemInstanceID_t pInstanceIDs, uint unCountInstanceIDs)`

**Purpose:** Gets the current value of `items by i d`.

### SerializeResult
`public static bool SerializeResult(SteamInventoryResult_t resultHandle, byte pOutBuffer, out uint punOutBufferSize)`

**Purpose:** Handles logic related to `serialize result`.

### DeserializeResult
`public static bool DeserializeResult(out SteamInventoryResult_t pOutResultHandle, byte pBuffer, uint unBufferSize, bool bRESERVED_MUST_BE_FALSE = false)`

**Purpose:** Handles logic related to `deserialize result`.

### GenerateItems
`public static bool GenerateItems(out SteamInventoryResult_t pResultHandle, SteamItemDef_t pArrayItemDefs, uint punArrayQuantity, uint unArrayLength)`

**Purpose:** Handles logic related to `generate items`.

### GrantPromoItems
`public static bool GrantPromoItems(out SteamInventoryResult_t pResultHandle)`

**Purpose:** Handles logic related to `grant promo items`.

### AddPromoItem
`public static bool AddPromoItem(out SteamInventoryResult_t pResultHandle, SteamItemDef_t itemDef)`

**Purpose:** Adds `promo item` to the current collection or state.

### AddPromoItems
`public static bool AddPromoItems(out SteamInventoryResult_t pResultHandle, SteamItemDef_t pArrayItemDefs, uint unArrayLength)`

**Purpose:** Adds `promo items` to the current collection or state.

### ConsumeItem
`public static bool ConsumeItem(out SteamInventoryResult_t pResultHandle, SteamItemInstanceID_t itemConsume, uint unQuantity)`

**Purpose:** Handles logic related to `consume item`.

### ExchangeItems
`public static bool ExchangeItems(out SteamInventoryResult_t pResultHandle, SteamItemDef_t pArrayGenerate, uint punArrayGenerateQuantity, uint unArrayGenerateLength, SteamItemInstanceID_t pArrayDestroy, uint punArrayDestroyQuantity, uint unArrayDestroyLength)`

**Purpose:** Handles logic related to `exchange items`.

### TransferItemQuantity
`public static bool TransferItemQuantity(out SteamInventoryResult_t pResultHandle, SteamItemInstanceID_t itemIdSource, uint unQuantity, SteamItemInstanceID_t itemIdDest)`

**Purpose:** Handles logic related to `transfer item quantity`.

### SendItemDropHeartbeat
`public static void SendItemDropHeartbeat()`

**Purpose:** Handles logic related to `send item drop heartbeat`.

### TriggerItemDrop
`public static bool TriggerItemDrop(out SteamInventoryResult_t pResultHandle, SteamItemDef_t dropListDefinition)`

**Purpose:** Handles logic related to `trigger item drop`.

### TradeItems
`public static bool TradeItems(out SteamInventoryResult_t pResultHandle, CSteamID steamIDTradePartner, SteamItemInstanceID_t pArrayGive, uint pArrayGiveQuantity, uint nArrayGiveLength, SteamItemInstanceID_t pArrayGet, uint pArrayGetQuantity, uint nArrayGetLength)`

**Purpose:** Handles logic related to `trade items`.

### LoadItemDefinitions
`public static bool LoadItemDefinitions()`

**Purpose:** Loads `item definitions` data.

### GetItemDefinitionIDs
`public static bool GetItemDefinitionIDs(SteamItemDef_t pItemDefIDs, ref uint punItemDefIDsArraySize)`

**Purpose:** Gets the current value of `item definition i ds`.

### GetItemDefinitionProperty
`public static bool GetItemDefinitionProperty(SteamItemDef_t iDefinition, string pchPropertyName, out string pchValueBuffer, ref uint punValueBufferSizeOut)`

**Purpose:** Gets the current value of `item definition property`.

### RequestEligiblePromoItemDefinitionsIDs
`public static SteamAPICall_t RequestEligiblePromoItemDefinitionsIDs(CSteamID steamID)`

**Purpose:** Handles logic related to `request eligible promo item definitions i ds`.

### GetEligiblePromoItemDefinitionIDs
`public static bool GetEligiblePromoItemDefinitionIDs(CSteamID steamID, SteamItemDef_t pItemDefIDs, ref uint punItemDefIDsArraySize)`

**Purpose:** Gets the current value of `eligible promo item definition i ds`.

### StartPurchase
`public static SteamAPICall_t StartPurchase(SteamItemDef_t pArrayItemDefs, uint punArrayQuantity, uint unArrayLength)`

**Purpose:** Handles logic related to `start purchase`.

### RequestPrices
`public static SteamAPICall_t RequestPrices()`

**Purpose:** Handles logic related to `request prices`.

### GetNumItemsWithPrices
`public static uint GetNumItemsWithPrices()`

**Purpose:** Gets the current value of `num items with prices`.

### GetItemsWithPrices
`public static bool GetItemsWithPrices(SteamItemDef_t pArrayItemDefs, ulong pCurrentPrices, ulong pBasePrices, uint unArrayLength)`

**Purpose:** Gets the current value of `items with prices`.

### GetItemPrice
`public static bool GetItemPrice(SteamItemDef_t iDefinition, out ulong pCurrentPrice, out ulong pBasePrice)`

**Purpose:** Gets the current value of `item price`.

### StartUpdateProperties
`public static SteamInventoryUpdateHandle_t StartUpdateProperties()`

**Purpose:** Handles logic related to `start update properties`.

### RemoveProperty
`public static bool RemoveProperty(SteamInventoryUpdateHandle_t handle, SteamItemInstanceID_t nItemID, string pchPropertyName)`

**Purpose:** Removes `property` from the current collection or state.

### SetProperty
`public static bool SetProperty(SteamInventoryUpdateHandle_t handle, SteamItemInstanceID_t nItemID, string pchPropertyName, string pchPropertyValue)`

**Purpose:** Sets the value or state of `property`.

### SetProperty
`public static bool SetProperty(SteamInventoryUpdateHandle_t handle, SteamItemInstanceID_t nItemID, string pchPropertyName, bool bValue)`

**Purpose:** Sets the value or state of `property`.

### SetProperty
`public static bool SetProperty(SteamInventoryUpdateHandle_t handle, SteamItemInstanceID_t nItemID, string pchPropertyName, long nValue)`

**Purpose:** Sets the value or state of `property`.

### SetProperty
`public static bool SetProperty(SteamInventoryUpdateHandle_t handle, SteamItemInstanceID_t nItemID, string pchPropertyName, float flValue)`

**Purpose:** Sets the value or state of `property`.

### SubmitUpdateProperties
`public static bool SubmitUpdateProperties(SteamInventoryUpdateHandle_t handle, out SteamInventoryResult_t pResultHandle)`

**Purpose:** Handles logic related to `submit update properties`.

### InspectItem
`public static bool InspectItem(out SteamInventoryResult_t pResultHandle, string pchItemToken)`

**Purpose:** Handles logic related to `inspect item`.

## Usage Example

```csharp
SteamGameServerInventory.GetResultStatus(resultHandle);
```

## See Also

- [Complete Class Catalog](../catalog)