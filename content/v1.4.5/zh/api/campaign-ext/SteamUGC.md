---
title: "SteamUGC"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SteamUGC`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SteamUGC

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public static class SteamUGC`
**Base:** 无
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/SteamUGC.cs`

## 概述

`SteamUGC` 位于 `Steamworks`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Steamworks` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### CreateQueryUserUGCRequest
`public static UGCQueryHandle_t CreateQueryUserUGCRequest(AccountID_t unAccountID, EUserUGCList eListType, EUGCMatchingUGCType eMatchingUGCType, EUserUGCListSortOrder eSortOrder, AppId_t nCreatorAppID, AppId_t nConsumerAppID, uint unPage)`

**用途 / Purpose:** 创建一个 `query user u g c request` 实例或对象。

### CreateQueryAllUGCRequest
`public static UGCQueryHandle_t CreateQueryAllUGCRequest(EUGCQuery eQueryType, EUGCMatchingUGCType eMatchingeMatchingUGCTypeFileType, AppId_t nCreatorAppID, AppId_t nConsumerAppID, uint unPage)`

**用途 / Purpose:** 创建一个 `query all u g c request` 实例或对象。

### CreateQueryAllUGCRequest
`public static UGCQueryHandle_t CreateQueryAllUGCRequest(EUGCQuery eQueryType, EUGCMatchingUGCType eMatchingeMatchingUGCTypeFileType, AppId_t nCreatorAppID, AppId_t nConsumerAppID, string pchCursor = null)`

**用途 / Purpose:** 创建一个 `query all u g c request` 实例或对象。

### CreateQueryUGCDetailsRequest
`public static UGCQueryHandle_t CreateQueryUGCDetailsRequest(PublishedFileId_t pvecPublishedFileID, uint unNumPublishedFileIDs)`

**用途 / Purpose:** 创建一个 `query u g c details request` 实例或对象。

### SendQueryUGCRequest
`public static SteamAPICall_t SendQueryUGCRequest(UGCQueryHandle_t handle)`

**用途 / Purpose:** 处理 `send query u g c request` 相关逻辑。

### GetQueryUGCResult
`public static bool GetQueryUGCResult(UGCQueryHandle_t handle, uint index, out SteamUGCDetails_t pDetails)`

**用途 / Purpose:** 获取 `query u g c result` 的当前值。

### GetQueryUGCNumTags
`public static uint GetQueryUGCNumTags(UGCQueryHandle_t handle, uint index)`

**用途 / Purpose:** 获取 `query u g c num tags` 的当前值。

### GetQueryUGCTag
`public static bool GetQueryUGCTag(UGCQueryHandle_t handle, uint index, uint indexTag, out string pchValue, uint cchValueSize)`

**用途 / Purpose:** 获取 `query u g c tag` 的当前值。

### GetQueryUGCTagDisplayName
`public static bool GetQueryUGCTagDisplayName(UGCQueryHandle_t handle, uint index, uint indexTag, out string pchValue, uint cchValueSize)`

**用途 / Purpose:** 获取 `query u g c tag display name` 的当前值。

### GetQueryUGCPreviewURL
`public static bool GetQueryUGCPreviewURL(UGCQueryHandle_t handle, uint index, out string pchURL, uint cchURLSize)`

**用途 / Purpose:** 获取 `query u g c preview u r l` 的当前值。

### GetQueryUGCMetadata
`public static bool GetQueryUGCMetadata(UGCQueryHandle_t handle, uint index, out string pchMetadata, uint cchMetadatasize)`

**用途 / Purpose:** 获取 `query u g c metadata` 的当前值。

### GetQueryUGCChildren
`public static bool GetQueryUGCChildren(UGCQueryHandle_t handle, uint index, PublishedFileId_t pvecPublishedFileID, uint cMaxEntries)`

**用途 / Purpose:** 获取 `query u g c children` 的当前值。

### GetQueryUGCStatistic
`public static bool GetQueryUGCStatistic(UGCQueryHandle_t handle, uint index, EItemStatistic eStatType, out ulong pStatValue)`

**用途 / Purpose:** 获取 `query u g c statistic` 的当前值。

### GetQueryUGCNumAdditionalPreviews
`public static uint GetQueryUGCNumAdditionalPreviews(UGCQueryHandle_t handle, uint index)`

**用途 / Purpose:** 获取 `query u g c num additional previews` 的当前值。

### GetQueryUGCAdditionalPreview
`public static bool GetQueryUGCAdditionalPreview(UGCQueryHandle_t handle, uint index, uint previewIndex, out string pchURLOrVideoID, uint cchURLSize, out string pchOriginalFileName, uint cchOriginalFileNameSize, out EItemPreviewType pPreviewType)`

**用途 / Purpose:** 获取 `query u g c additional preview` 的当前值。

### GetQueryUGCNumKeyValueTags
`public static uint GetQueryUGCNumKeyValueTags(UGCQueryHandle_t handle, uint index)`

**用途 / Purpose:** 获取 `query u g c num key value tags` 的当前值。

### GetQueryUGCKeyValueTag
`public static bool GetQueryUGCKeyValueTag(UGCQueryHandle_t handle, uint index, uint keyValueTagIndex, out string pchKey, uint cchKeySize, out string pchValue, uint cchValueSize)`

**用途 / Purpose:** 获取 `query u g c key value tag` 的当前值。

### GetQueryUGCKeyValueTag
`public static bool GetQueryUGCKeyValueTag(UGCQueryHandle_t handle, uint index, string pchKey, out string pchValue, uint cchValueSize)`

**用途 / Purpose:** 获取 `query u g c key value tag` 的当前值。

### ReleaseQueryUGCRequest
`public static bool ReleaseQueryUGCRequest(UGCQueryHandle_t handle)`

**用途 / Purpose:** 处理 `release query u g c request` 相关逻辑。

### AddRequiredTag
`public static bool AddRequiredTag(UGCQueryHandle_t handle, string pTagName)`

**用途 / Purpose:** 向当前集合/状态中添加 `required tag`。

### AddRequiredTagGroup
`public static bool AddRequiredTagGroup(UGCQueryHandle_t handle, IList<string> pTagGroups)`

**用途 / Purpose:** 向当前集合/状态中添加 `required tag group`。

### AddExcludedTag
`public static bool AddExcludedTag(UGCQueryHandle_t handle, string pTagName)`

**用途 / Purpose:** 向当前集合/状态中添加 `excluded tag`。

### SetReturnOnlyIDs
`public static bool SetReturnOnlyIDs(UGCQueryHandle_t handle, bool bReturnOnlyIDs)`

**用途 / Purpose:** 设置 `return only i ds` 的值或状态。

### SetReturnKeyValueTags
`public static bool SetReturnKeyValueTags(UGCQueryHandle_t handle, bool bReturnKeyValueTags)`

**用途 / Purpose:** 设置 `return key value tags` 的值或状态。

### SetReturnLongDescription
`public static bool SetReturnLongDescription(UGCQueryHandle_t handle, bool bReturnLongDescription)`

**用途 / Purpose:** 设置 `return long description` 的值或状态。

### SetReturnMetadata
`public static bool SetReturnMetadata(UGCQueryHandle_t handle, bool bReturnMetadata)`

**用途 / Purpose:** 设置 `return metadata` 的值或状态。

### SetReturnChildren
`public static bool SetReturnChildren(UGCQueryHandle_t handle, bool bReturnChildren)`

**用途 / Purpose:** 设置 `return children` 的值或状态。

### SetReturnAdditionalPreviews
`public static bool SetReturnAdditionalPreviews(UGCQueryHandle_t handle, bool bReturnAdditionalPreviews)`

**用途 / Purpose:** 设置 `return additional previews` 的值或状态。

### SetReturnTotalOnly
`public static bool SetReturnTotalOnly(UGCQueryHandle_t handle, bool bReturnTotalOnly)`

**用途 / Purpose:** 设置 `return total only` 的值或状态。

### SetReturnPlaytimeStats
`public static bool SetReturnPlaytimeStats(UGCQueryHandle_t handle, uint unDays)`

**用途 / Purpose:** 设置 `return playtime stats` 的值或状态。

### SetLanguage
`public static bool SetLanguage(UGCQueryHandle_t handle, string pchLanguage)`

**用途 / Purpose:** 设置 `language` 的值或状态。

### SetAllowCachedResponse
`public static bool SetAllowCachedResponse(UGCQueryHandle_t handle, uint unMaxAgeSeconds)`

**用途 / Purpose:** 设置 `allow cached response` 的值或状态。

### SetCloudFileNameFilter
`public static bool SetCloudFileNameFilter(UGCQueryHandle_t handle, string pMatchCloudFileName)`

**用途 / Purpose:** 设置 `cloud file name filter` 的值或状态。

### SetMatchAnyTag
`public static bool SetMatchAnyTag(UGCQueryHandle_t handle, bool bMatchAnyTag)`

**用途 / Purpose:** 设置 `match any tag` 的值或状态。

### SetSearchText
`public static bool SetSearchText(UGCQueryHandle_t handle, string pSearchText)`

**用途 / Purpose:** 设置 `search text` 的值或状态。

### SetRankedByTrendDays
`public static bool SetRankedByTrendDays(UGCQueryHandle_t handle, uint unDays)`

**用途 / Purpose:** 设置 `ranked by trend days` 的值或状态。

### SetTimeCreatedDateRange
`public static bool SetTimeCreatedDateRange(UGCQueryHandle_t handle, uint rtStart, uint rtEnd)`

**用途 / Purpose:** 设置 `time created date range` 的值或状态。

### SetTimeUpdatedDateRange
`public static bool SetTimeUpdatedDateRange(UGCQueryHandle_t handle, uint rtStart, uint rtEnd)`

**用途 / Purpose:** 设置 `time updated date range` 的值或状态。

### AddRequiredKeyValueTag
`public static bool AddRequiredKeyValueTag(UGCQueryHandle_t handle, string pKey, string pValue)`

**用途 / Purpose:** 向当前集合/状态中添加 `required key value tag`。

### RequestUGCDetails
`public static SteamAPICall_t RequestUGCDetails(PublishedFileId_t nPublishedFileID, uint unMaxAgeSeconds)`

**用途 / Purpose:** 处理 `request u g c details` 相关逻辑。

### CreateItem
`public static SteamAPICall_t CreateItem(AppId_t nConsumerAppId, EWorkshopFileType eFileType)`

**用途 / Purpose:** 创建一个 `item` 实例或对象。

### StartItemUpdate
`public static UGCUpdateHandle_t StartItemUpdate(AppId_t nConsumerAppId, PublishedFileId_t nPublishedFileID)`

**用途 / Purpose:** 处理 `start item update` 相关逻辑。

### SetItemTitle
`public static bool SetItemTitle(UGCUpdateHandle_t handle, string pchTitle)`

**用途 / Purpose:** 设置 `item title` 的值或状态。

### SetItemDescription
`public static bool SetItemDescription(UGCUpdateHandle_t handle, string pchDescription)`

**用途 / Purpose:** 设置 `item description` 的值或状态。

### SetItemUpdateLanguage
`public static bool SetItemUpdateLanguage(UGCUpdateHandle_t handle, string pchLanguage)`

**用途 / Purpose:** 设置 `item update language` 的值或状态。

### SetItemMetadata
`public static bool SetItemMetadata(UGCUpdateHandle_t handle, string pchMetaData)`

**用途 / Purpose:** 设置 `item metadata` 的值或状态。

### SetItemVisibility
`public static bool SetItemVisibility(UGCUpdateHandle_t handle, ERemoteStoragePublishedFileVisibility eVisibility)`

**用途 / Purpose:** 设置 `item visibility` 的值或状态。

### SetItemTags
`public static bool SetItemTags(UGCUpdateHandle_t updateHandle, IList<string> pTags)`

**用途 / Purpose:** 设置 `item tags` 的值或状态。

### SetItemContent
`public static bool SetItemContent(UGCUpdateHandle_t handle, string pszContentFolder)`

**用途 / Purpose:** 设置 `item content` 的值或状态。

### SetItemPreview
`public static bool SetItemPreview(UGCUpdateHandle_t handle, string pszPreviewFile)`

**用途 / Purpose:** 设置 `item preview` 的值或状态。

### SetAllowLegacyUpload
`public static bool SetAllowLegacyUpload(UGCUpdateHandle_t handle, bool bAllowLegacyUpload)`

**用途 / Purpose:** 设置 `allow legacy upload` 的值或状态。

### RemoveAllItemKeyValueTags
`public static bool RemoveAllItemKeyValueTags(UGCUpdateHandle_t handle)`

**用途 / Purpose:** 从当前集合/状态中移除 `all item key value tags`。

### RemoveItemKeyValueTags
`public static bool RemoveItemKeyValueTags(UGCUpdateHandle_t handle, string pchKey)`

**用途 / Purpose:** 从当前集合/状态中移除 `item key value tags`。

### AddItemKeyValueTag
`public static bool AddItemKeyValueTag(UGCUpdateHandle_t handle, string pchKey, string pchValue)`

**用途 / Purpose:** 向当前集合/状态中添加 `item key value tag`。

### AddItemPreviewFile
`public static bool AddItemPreviewFile(UGCUpdateHandle_t handle, string pszPreviewFile, EItemPreviewType type)`

**用途 / Purpose:** 向当前集合/状态中添加 `item preview file`。

### AddItemPreviewVideo
`public static bool AddItemPreviewVideo(UGCUpdateHandle_t handle, string pszVideoID)`

**用途 / Purpose:** 向当前集合/状态中添加 `item preview video`。

### UpdateItemPreviewFile
`public static bool UpdateItemPreviewFile(UGCUpdateHandle_t handle, uint index, string pszPreviewFile)`

**用途 / Purpose:** 更新 `item preview file` 的状态或数据。

### UpdateItemPreviewVideo
`public static bool UpdateItemPreviewVideo(UGCUpdateHandle_t handle, uint index, string pszVideoID)`

**用途 / Purpose:** 更新 `item preview video` 的状态或数据。

### RemoveItemPreview
`public static bool RemoveItemPreview(UGCUpdateHandle_t handle, uint index)`

**用途 / Purpose:** 从当前集合/状态中移除 `item preview`。

### SubmitItemUpdate
`public static SteamAPICall_t SubmitItemUpdate(UGCUpdateHandle_t handle, string pchChangeNote)`

**用途 / Purpose:** 处理 `submit item update` 相关逻辑。

### GetItemUpdateProgress
`public static EItemUpdateStatus GetItemUpdateProgress(UGCUpdateHandle_t handle, out ulong punBytesProcessed, out ulong punBytesTotal)`

**用途 / Purpose:** 获取 `item update progress` 的当前值。

### SetUserItemVote
`public static SteamAPICall_t SetUserItemVote(PublishedFileId_t nPublishedFileID, bool bVoteUp)`

**用途 / Purpose:** 设置 `user item vote` 的值或状态。

### GetUserItemVote
`public static SteamAPICall_t GetUserItemVote(PublishedFileId_t nPublishedFileID)`

**用途 / Purpose:** 获取 `user item vote` 的当前值。

### AddItemToFavorites
`public static SteamAPICall_t AddItemToFavorites(AppId_t nAppId, PublishedFileId_t nPublishedFileID)`

**用途 / Purpose:** 向当前集合/状态中添加 `item to favorites`。

### RemoveItemFromFavorites
`public static SteamAPICall_t RemoveItemFromFavorites(AppId_t nAppId, PublishedFileId_t nPublishedFileID)`

**用途 / Purpose:** 从当前集合/状态中移除 `item from favorites`。

### SubscribeItem
`public static SteamAPICall_t SubscribeItem(PublishedFileId_t nPublishedFileID)`

**用途 / Purpose:** 处理 `subscribe item` 相关逻辑。

### UnsubscribeItem
`public static SteamAPICall_t UnsubscribeItem(PublishedFileId_t nPublishedFileID)`

**用途 / Purpose:** 处理 `unsubscribe item` 相关逻辑。

### GetNumSubscribedItems
`public static uint GetNumSubscribedItems()`

**用途 / Purpose:** 获取 `num subscribed items` 的当前值。

### GetSubscribedItems
`public static uint GetSubscribedItems(PublishedFileId_t pvecPublishedFileID, uint cMaxEntries)`

**用途 / Purpose:** 获取 `subscribed items` 的当前值。

### GetItemState
`public static uint GetItemState(PublishedFileId_t nPublishedFileID)`

**用途 / Purpose:** 获取 `item state` 的当前值。

### GetItemInstallInfo
`public static bool GetItemInstallInfo(PublishedFileId_t nPublishedFileID, out ulong punSizeOnDisk, out string pchFolder, uint cchFolderSize, out uint punTimeStamp)`

**用途 / Purpose:** 获取 `item install info` 的当前值。

### GetItemDownloadInfo
`public static bool GetItemDownloadInfo(PublishedFileId_t nPublishedFileID, out ulong punBytesDownloaded, out ulong punBytesTotal)`

**用途 / Purpose:** 获取 `item download info` 的当前值。

### DownloadItem
`public static bool DownloadItem(PublishedFileId_t nPublishedFileID, bool bHighPriority)`

**用途 / Purpose:** 处理 `download item` 相关逻辑。

### BInitWorkshopForGameServer
`public static bool BInitWorkshopForGameServer(DepotId_t unWorkshopDepotID, string pszFolder)`

**用途 / Purpose:** 处理 `b init workshop for game server` 相关逻辑。

### SuspendDownloads
`public static void SuspendDownloads(bool bSuspend)`

**用途 / Purpose:** 处理 `suspend downloads` 相关逻辑。

### StartPlaytimeTracking
`public static SteamAPICall_t StartPlaytimeTracking(PublishedFileId_t pvecPublishedFileID, uint unNumPublishedFileIDs)`

**用途 / Purpose:** 处理 `start playtime tracking` 相关逻辑。

### StopPlaytimeTracking
`public static SteamAPICall_t StopPlaytimeTracking(PublishedFileId_t pvecPublishedFileID, uint unNumPublishedFileIDs)`

**用途 / Purpose:** 处理 `stop playtime tracking` 相关逻辑。

### StopPlaytimeTrackingForAllItems
`public static SteamAPICall_t StopPlaytimeTrackingForAllItems()`

**用途 / Purpose:** 处理 `stop playtime tracking for all items` 相关逻辑。

### AddDependency
`public static SteamAPICall_t AddDependency(PublishedFileId_t nParentPublishedFileID, PublishedFileId_t nChildPublishedFileID)`

**用途 / Purpose:** 向当前集合/状态中添加 `dependency`。

### RemoveDependency
`public static SteamAPICall_t RemoveDependency(PublishedFileId_t nParentPublishedFileID, PublishedFileId_t nChildPublishedFileID)`

**用途 / Purpose:** 从当前集合/状态中移除 `dependency`。

### AddAppDependency
`public static SteamAPICall_t AddAppDependency(PublishedFileId_t nPublishedFileID, AppId_t nAppID)`

**用途 / Purpose:** 向当前集合/状态中添加 `app dependency`。

### RemoveAppDependency
`public static SteamAPICall_t RemoveAppDependency(PublishedFileId_t nPublishedFileID, AppId_t nAppID)`

**用途 / Purpose:** 从当前集合/状态中移除 `app dependency`。

### GetAppDependencies
`public static SteamAPICall_t GetAppDependencies(PublishedFileId_t nPublishedFileID)`

**用途 / Purpose:** 获取 `app dependencies` 的当前值。

### DeleteItem
`public static SteamAPICall_t DeleteItem(PublishedFileId_t nPublishedFileID)`

**用途 / Purpose:** 处理 `delete item` 相关逻辑。

### ShowWorkshopEULA
`public static bool ShowWorkshopEULA()`

**用途 / Purpose:** 处理 `show workshop e u l a` 相关逻辑。

### GetWorkshopEULAStatus
`public static SteamAPICall_t GetWorkshopEULAStatus()`

**用途 / Purpose:** 获取 `workshop e u l a status` 的当前值。

## 使用示例

```csharp
SteamUGC.CreateQueryUserUGCRequest(unAccountID, eListType, eMatchingUGCType, eSortOrder, nCreatorAppID, nConsumerAppID, 0);
```

## 参见

- [完整类目录](../catalog)