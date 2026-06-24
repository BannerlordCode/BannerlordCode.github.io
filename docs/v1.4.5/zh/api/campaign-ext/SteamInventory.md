<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SteamInventory`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SteamInventory

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public static class SteamInventory`
**Base:** 无
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/SteamInventory.cs`

## 概述

`SteamInventory` 位于 `Steamworks`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Steamworks` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetResultStatus
`public static EResult GetResultStatus(SteamInventoryResult_t resultHandle)`

**用途 / Purpose:** 获取 `result status` 的当前值。

### GetResultItems
`public static bool GetResultItems(SteamInventoryResult_t resultHandle, SteamItemDetails_t pOutItemsArray, ref uint punOutItemsArraySize)`

**用途 / Purpose:** 获取 `result items` 的当前值。

### GetResultItemProperty
`public static bool GetResultItemProperty(SteamInventoryResult_t resultHandle, uint unItemIndex, string pchPropertyName, out string pchValueBuffer, ref uint punValueBufferSizeOut)`

**用途 / Purpose:** 获取 `result item property` 的当前值。

### GetResultTimestamp
`public static uint GetResultTimestamp(SteamInventoryResult_t resultHandle)`

**用途 / Purpose:** 获取 `result timestamp` 的当前值。

### CheckResultSteamID
`public static bool CheckResultSteamID(SteamInventoryResult_t resultHandle, CSteamID steamIDExpected)`

**用途 / Purpose:** 处理 `check result steam i d` 相关逻辑。

### DestroyResult
`public static void DestroyResult(SteamInventoryResult_t resultHandle)`

**用途 / Purpose:** 处理 `destroy result` 相关逻辑。

### GetAllItems
`public static bool GetAllItems(out SteamInventoryResult_t pResultHandle)`

**用途 / Purpose:** 获取 `all items` 的当前值。

### GetItemsByID
`public static bool GetItemsByID(out SteamInventoryResult_t pResultHandle, SteamItemInstanceID_t pInstanceIDs, uint unCountInstanceIDs)`

**用途 / Purpose:** 获取 `items by i d` 的当前值。

### SerializeResult
`public static bool SerializeResult(SteamInventoryResult_t resultHandle, byte pOutBuffer, out uint punOutBufferSize)`

**用途 / Purpose:** 处理 `serialize result` 相关逻辑。

### DeserializeResult
`public static bool DeserializeResult(out SteamInventoryResult_t pOutResultHandle, byte pBuffer, uint unBufferSize, bool bRESERVED_MUST_BE_FALSE = false)`

**用途 / Purpose:** 处理 `deserialize result` 相关逻辑。

### GenerateItems
`public static bool GenerateItems(out SteamInventoryResult_t pResultHandle, SteamItemDef_t pArrayItemDefs, uint punArrayQuantity, uint unArrayLength)`

**用途 / Purpose:** 处理 `generate items` 相关逻辑。

### GrantPromoItems
`public static bool GrantPromoItems(out SteamInventoryResult_t pResultHandle)`

**用途 / Purpose:** 处理 `grant promo items` 相关逻辑。

### AddPromoItem
`public static bool AddPromoItem(out SteamInventoryResult_t pResultHandle, SteamItemDef_t itemDef)`

**用途 / Purpose:** 向当前集合/状态中添加 `promo item`。

### AddPromoItems
`public static bool AddPromoItems(out SteamInventoryResult_t pResultHandle, SteamItemDef_t pArrayItemDefs, uint unArrayLength)`

**用途 / Purpose:** 向当前集合/状态中添加 `promo items`。

### ConsumeItem
`public static bool ConsumeItem(out SteamInventoryResult_t pResultHandle, SteamItemInstanceID_t itemConsume, uint unQuantity)`

**用途 / Purpose:** 处理 `consume item` 相关逻辑。

### ExchangeItems
`public static bool ExchangeItems(out SteamInventoryResult_t pResultHandle, SteamItemDef_t pArrayGenerate, uint punArrayGenerateQuantity, uint unArrayGenerateLength, SteamItemInstanceID_t pArrayDestroy, uint punArrayDestroyQuantity, uint unArrayDestroyLength)`

**用途 / Purpose:** 处理 `exchange items` 相关逻辑。

### TransferItemQuantity
`public static bool TransferItemQuantity(out SteamInventoryResult_t pResultHandle, SteamItemInstanceID_t itemIdSource, uint unQuantity, SteamItemInstanceID_t itemIdDest)`

**用途 / Purpose:** 处理 `transfer item quantity` 相关逻辑。

### SendItemDropHeartbeat
`public static void SendItemDropHeartbeat()`

**用途 / Purpose:** 处理 `send item drop heartbeat` 相关逻辑。

### TriggerItemDrop
`public static bool TriggerItemDrop(out SteamInventoryResult_t pResultHandle, SteamItemDef_t dropListDefinition)`

**用途 / Purpose:** 处理 `trigger item drop` 相关逻辑。

### TradeItems
`public static bool TradeItems(out SteamInventoryResult_t pResultHandle, CSteamID steamIDTradePartner, SteamItemInstanceID_t pArrayGive, uint pArrayGiveQuantity, uint nArrayGiveLength, SteamItemInstanceID_t pArrayGet, uint pArrayGetQuantity, uint nArrayGetLength)`

**用途 / Purpose:** 处理 `trade items` 相关逻辑。

### LoadItemDefinitions
`public static bool LoadItemDefinitions()`

**用途 / Purpose:** 加载 `item definitions` 数据。

### GetItemDefinitionIDs
`public static bool GetItemDefinitionIDs(SteamItemDef_t pItemDefIDs, ref uint punItemDefIDsArraySize)`

**用途 / Purpose:** 获取 `item definition i ds` 的当前值。

### GetItemDefinitionProperty
`public static bool GetItemDefinitionProperty(SteamItemDef_t iDefinition, string pchPropertyName, out string pchValueBuffer, ref uint punValueBufferSizeOut)`

**用途 / Purpose:** 获取 `item definition property` 的当前值。

### RequestEligiblePromoItemDefinitionsIDs
`public static SteamAPICall_t RequestEligiblePromoItemDefinitionsIDs(CSteamID steamID)`

**用途 / Purpose:** 处理 `request eligible promo item definitions i ds` 相关逻辑。

### GetEligiblePromoItemDefinitionIDs
`public static bool GetEligiblePromoItemDefinitionIDs(CSteamID steamID, SteamItemDef_t pItemDefIDs, ref uint punItemDefIDsArraySize)`

**用途 / Purpose:** 获取 `eligible promo item definition i ds` 的当前值。

### StartPurchase
`public static SteamAPICall_t StartPurchase(SteamItemDef_t pArrayItemDefs, uint punArrayQuantity, uint unArrayLength)`

**用途 / Purpose:** 处理 `start purchase` 相关逻辑。

### RequestPrices
`public static SteamAPICall_t RequestPrices()`

**用途 / Purpose:** 处理 `request prices` 相关逻辑。

### GetNumItemsWithPrices
`public static uint GetNumItemsWithPrices()`

**用途 / Purpose:** 获取 `num items with prices` 的当前值。

### GetItemsWithPrices
`public static bool GetItemsWithPrices(SteamItemDef_t pArrayItemDefs, ulong pCurrentPrices, ulong pBasePrices, uint unArrayLength)`

**用途 / Purpose:** 获取 `items with prices` 的当前值。

### GetItemPrice
`public static bool GetItemPrice(SteamItemDef_t iDefinition, out ulong pCurrentPrice, out ulong pBasePrice)`

**用途 / Purpose:** 获取 `item price` 的当前值。

### StartUpdateProperties
`public static SteamInventoryUpdateHandle_t StartUpdateProperties()`

**用途 / Purpose:** 处理 `start update properties` 相关逻辑。

### RemoveProperty
`public static bool RemoveProperty(SteamInventoryUpdateHandle_t handle, SteamItemInstanceID_t nItemID, string pchPropertyName)`

**用途 / Purpose:** 从当前集合/状态中移除 `property`。

### SetProperty
`public static bool SetProperty(SteamInventoryUpdateHandle_t handle, SteamItemInstanceID_t nItemID, string pchPropertyName, string pchPropertyValue)`

**用途 / Purpose:** 设置 `property` 的值或状态。

### SetProperty
`public static bool SetProperty(SteamInventoryUpdateHandle_t handle, SteamItemInstanceID_t nItemID, string pchPropertyName, bool bValue)`

**用途 / Purpose:** 设置 `property` 的值或状态。

### SetProperty
`public static bool SetProperty(SteamInventoryUpdateHandle_t handle, SteamItemInstanceID_t nItemID, string pchPropertyName, long nValue)`

**用途 / Purpose:** 设置 `property` 的值或状态。

### SetProperty
`public static bool SetProperty(SteamInventoryUpdateHandle_t handle, SteamItemInstanceID_t nItemID, string pchPropertyName, float flValue)`

**用途 / Purpose:** 设置 `property` 的值或状态。

### SubmitUpdateProperties
`public static bool SubmitUpdateProperties(SteamInventoryUpdateHandle_t handle, out SteamInventoryResult_t pResultHandle)`

**用途 / Purpose:** 处理 `submit update properties` 相关逻辑。

### InspectItem
`public static bool InspectItem(out SteamInventoryResult_t pResultHandle, string pchItemToken)`

**用途 / Purpose:** 处理 `inspect item` 相关逻辑。

## 使用示例

```csharp
SteamInventory.GetResultStatus(resultHandle);
```

## 参见

- [完整类目录](../catalog)