<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SteamUGC`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SteamUGC

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public static class SteamUGC`
**Base:** none
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/SteamUGC.cs`

## Overview

`SteamUGC` lives in `Steamworks` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Steamworks` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CreateQueryUserUGCRequest
`public static UGCQueryHandle_t CreateQueryUserUGCRequest(AccountID_t unAccountID, EUserUGCList eListType, EUGCMatchingUGCType eMatchingUGCType, EUserUGCListSortOrder eSortOrder, AppId_t nCreatorAppID, AppId_t nConsumerAppID, uint unPage)`

**Purpose:** Creates a new `query user u g c request` instance or object.

### CreateQueryAllUGCRequest
`public static UGCQueryHandle_t CreateQueryAllUGCRequest(EUGCQuery eQueryType, EUGCMatchingUGCType eMatchingeMatchingUGCTypeFileType, AppId_t nCreatorAppID, AppId_t nConsumerAppID, uint unPage)`

**Purpose:** Creates a new `query all u g c request` instance or object.

### CreateQueryAllUGCRequest
`public static UGCQueryHandle_t CreateQueryAllUGCRequest(EUGCQuery eQueryType, EUGCMatchingUGCType eMatchingeMatchingUGCTypeFileType, AppId_t nCreatorAppID, AppId_t nConsumerAppID, string pchCursor = null)`

**Purpose:** Creates a new `query all u g c request` instance or object.

### CreateQueryUGCDetailsRequest
`public static UGCQueryHandle_t CreateQueryUGCDetailsRequest(PublishedFileId_t pvecPublishedFileID, uint unNumPublishedFileIDs)`

**Purpose:** Creates a new `query u g c details request` instance or object.

### SendQueryUGCRequest
`public static SteamAPICall_t SendQueryUGCRequest(UGCQueryHandle_t handle)`

**Purpose:** Handles logic related to `send query u g c request`.

### GetQueryUGCResult
`public static bool GetQueryUGCResult(UGCQueryHandle_t handle, uint index, out SteamUGCDetails_t pDetails)`

**Purpose:** Gets the current value of `query u g c result`.

### GetQueryUGCNumTags
`public static uint GetQueryUGCNumTags(UGCQueryHandle_t handle, uint index)`

**Purpose:** Gets the current value of `query u g c num tags`.

### GetQueryUGCTag
`public static bool GetQueryUGCTag(UGCQueryHandle_t handle, uint index, uint indexTag, out string pchValue, uint cchValueSize)`

**Purpose:** Gets the current value of `query u g c tag`.

### GetQueryUGCTagDisplayName
`public static bool GetQueryUGCTagDisplayName(UGCQueryHandle_t handle, uint index, uint indexTag, out string pchValue, uint cchValueSize)`

**Purpose:** Gets the current value of `query u g c tag display name`.

### GetQueryUGCPreviewURL
`public static bool GetQueryUGCPreviewURL(UGCQueryHandle_t handle, uint index, out string pchURL, uint cchURLSize)`

**Purpose:** Gets the current value of `query u g c preview u r l`.

### GetQueryUGCMetadata
`public static bool GetQueryUGCMetadata(UGCQueryHandle_t handle, uint index, out string pchMetadata, uint cchMetadatasize)`

**Purpose:** Gets the current value of `query u g c metadata`.

### GetQueryUGCChildren
`public static bool GetQueryUGCChildren(UGCQueryHandle_t handle, uint index, PublishedFileId_t pvecPublishedFileID, uint cMaxEntries)`

**Purpose:** Gets the current value of `query u g c children`.

### GetQueryUGCStatistic
`public static bool GetQueryUGCStatistic(UGCQueryHandle_t handle, uint index, EItemStatistic eStatType, out ulong pStatValue)`

**Purpose:** Gets the current value of `query u g c statistic`.

### GetQueryUGCNumAdditionalPreviews
`public static uint GetQueryUGCNumAdditionalPreviews(UGCQueryHandle_t handle, uint index)`

**Purpose:** Gets the current value of `query u g c num additional previews`.

### GetQueryUGCAdditionalPreview
`public static bool GetQueryUGCAdditionalPreview(UGCQueryHandle_t handle, uint index, uint previewIndex, out string pchURLOrVideoID, uint cchURLSize, out string pchOriginalFileName, uint cchOriginalFileNameSize, out EItemPreviewType pPreviewType)`

**Purpose:** Gets the current value of `query u g c additional preview`.

### GetQueryUGCNumKeyValueTags
`public static uint GetQueryUGCNumKeyValueTags(UGCQueryHandle_t handle, uint index)`

**Purpose:** Gets the current value of `query u g c num key value tags`.

### GetQueryUGCKeyValueTag
`public static bool GetQueryUGCKeyValueTag(UGCQueryHandle_t handle, uint index, uint keyValueTagIndex, out string pchKey, uint cchKeySize, out string pchValue, uint cchValueSize)`

**Purpose:** Gets the current value of `query u g c key value tag`.

### GetQueryUGCKeyValueTag
`public static bool GetQueryUGCKeyValueTag(UGCQueryHandle_t handle, uint index, string pchKey, out string pchValue, uint cchValueSize)`

**Purpose:** Gets the current value of `query u g c key value tag`.

### ReleaseQueryUGCRequest
`public static bool ReleaseQueryUGCRequest(UGCQueryHandle_t handle)`

**Purpose:** Handles logic related to `release query u g c request`.

### AddRequiredTag
`public static bool AddRequiredTag(UGCQueryHandle_t handle, string pTagName)`

**Purpose:** Adds `required tag` to the current collection or state.

### AddRequiredTagGroup
`public static bool AddRequiredTagGroup(UGCQueryHandle_t handle, IList<string> pTagGroups)`

**Purpose:** Adds `required tag group` to the current collection or state.

### AddExcludedTag
`public static bool AddExcludedTag(UGCQueryHandle_t handle, string pTagName)`

**Purpose:** Adds `excluded tag` to the current collection or state.

### SetReturnOnlyIDs
`public static bool SetReturnOnlyIDs(UGCQueryHandle_t handle, bool bReturnOnlyIDs)`

**Purpose:** Sets the value or state of `return only i ds`.

### SetReturnKeyValueTags
`public static bool SetReturnKeyValueTags(UGCQueryHandle_t handle, bool bReturnKeyValueTags)`

**Purpose:** Sets the value or state of `return key value tags`.

### SetReturnLongDescription
`public static bool SetReturnLongDescription(UGCQueryHandle_t handle, bool bReturnLongDescription)`

**Purpose:** Sets the value or state of `return long description`.

### SetReturnMetadata
`public static bool SetReturnMetadata(UGCQueryHandle_t handle, bool bReturnMetadata)`

**Purpose:** Sets the value or state of `return metadata`.

### SetReturnChildren
`public static bool SetReturnChildren(UGCQueryHandle_t handle, bool bReturnChildren)`

**Purpose:** Sets the value or state of `return children`.

### SetReturnAdditionalPreviews
`public static bool SetReturnAdditionalPreviews(UGCQueryHandle_t handle, bool bReturnAdditionalPreviews)`

**Purpose:** Sets the value or state of `return additional previews`.

### SetReturnTotalOnly
`public static bool SetReturnTotalOnly(UGCQueryHandle_t handle, bool bReturnTotalOnly)`

**Purpose:** Sets the value or state of `return total only`.

### SetReturnPlaytimeStats
`public static bool SetReturnPlaytimeStats(UGCQueryHandle_t handle, uint unDays)`

**Purpose:** Sets the value or state of `return playtime stats`.

### SetLanguage
`public static bool SetLanguage(UGCQueryHandle_t handle, string pchLanguage)`

**Purpose:** Sets the value or state of `language`.

### SetAllowCachedResponse
`public static bool SetAllowCachedResponse(UGCQueryHandle_t handle, uint unMaxAgeSeconds)`

**Purpose:** Sets the value or state of `allow cached response`.

### SetCloudFileNameFilter
`public static bool SetCloudFileNameFilter(UGCQueryHandle_t handle, string pMatchCloudFileName)`

**Purpose:** Sets the value or state of `cloud file name filter`.

### SetMatchAnyTag
`public static bool SetMatchAnyTag(UGCQueryHandle_t handle, bool bMatchAnyTag)`

**Purpose:** Sets the value or state of `match any tag`.

### SetSearchText
`public static bool SetSearchText(UGCQueryHandle_t handle, string pSearchText)`

**Purpose:** Sets the value or state of `search text`.

### SetRankedByTrendDays
`public static bool SetRankedByTrendDays(UGCQueryHandle_t handle, uint unDays)`

**Purpose:** Sets the value or state of `ranked by trend days`.

### SetTimeCreatedDateRange
`public static bool SetTimeCreatedDateRange(UGCQueryHandle_t handle, uint rtStart, uint rtEnd)`

**Purpose:** Sets the value or state of `time created date range`.

### SetTimeUpdatedDateRange
`public static bool SetTimeUpdatedDateRange(UGCQueryHandle_t handle, uint rtStart, uint rtEnd)`

**Purpose:** Sets the value or state of `time updated date range`.

### AddRequiredKeyValueTag
`public static bool AddRequiredKeyValueTag(UGCQueryHandle_t handle, string pKey, string pValue)`

**Purpose:** Adds `required key value tag` to the current collection or state.

### RequestUGCDetails
`public static SteamAPICall_t RequestUGCDetails(PublishedFileId_t nPublishedFileID, uint unMaxAgeSeconds)`

**Purpose:** Handles logic related to `request u g c details`.

### CreateItem
`public static SteamAPICall_t CreateItem(AppId_t nConsumerAppId, EWorkshopFileType eFileType)`

**Purpose:** Creates a new `item` instance or object.

### StartItemUpdate
`public static UGCUpdateHandle_t StartItemUpdate(AppId_t nConsumerAppId, PublishedFileId_t nPublishedFileID)`

**Purpose:** Handles logic related to `start item update`.

### SetItemTitle
`public static bool SetItemTitle(UGCUpdateHandle_t handle, string pchTitle)`

**Purpose:** Sets the value or state of `item title`.

### SetItemDescription
`public static bool SetItemDescription(UGCUpdateHandle_t handle, string pchDescription)`

**Purpose:** Sets the value or state of `item description`.

### SetItemUpdateLanguage
`public static bool SetItemUpdateLanguage(UGCUpdateHandle_t handle, string pchLanguage)`

**Purpose:** Sets the value or state of `item update language`.

### SetItemMetadata
`public static bool SetItemMetadata(UGCUpdateHandle_t handle, string pchMetaData)`

**Purpose:** Sets the value or state of `item metadata`.

### SetItemVisibility
`public static bool SetItemVisibility(UGCUpdateHandle_t handle, ERemoteStoragePublishedFileVisibility eVisibility)`

**Purpose:** Sets the value or state of `item visibility`.

### SetItemTags
`public static bool SetItemTags(UGCUpdateHandle_t updateHandle, IList<string> pTags)`

**Purpose:** Sets the value or state of `item tags`.

### SetItemContent
`public static bool SetItemContent(UGCUpdateHandle_t handle, string pszContentFolder)`

**Purpose:** Sets the value or state of `item content`.

### SetItemPreview
`public static bool SetItemPreview(UGCUpdateHandle_t handle, string pszPreviewFile)`

**Purpose:** Sets the value or state of `item preview`.

### SetAllowLegacyUpload
`public static bool SetAllowLegacyUpload(UGCUpdateHandle_t handle, bool bAllowLegacyUpload)`

**Purpose:** Sets the value or state of `allow legacy upload`.

### RemoveAllItemKeyValueTags
`public static bool RemoveAllItemKeyValueTags(UGCUpdateHandle_t handle)`

**Purpose:** Removes `all item key value tags` from the current collection or state.

### RemoveItemKeyValueTags
`public static bool RemoveItemKeyValueTags(UGCUpdateHandle_t handle, string pchKey)`

**Purpose:** Removes `item key value tags` from the current collection or state.

### AddItemKeyValueTag
`public static bool AddItemKeyValueTag(UGCUpdateHandle_t handle, string pchKey, string pchValue)`

**Purpose:** Adds `item key value tag` to the current collection or state.

### AddItemPreviewFile
`public static bool AddItemPreviewFile(UGCUpdateHandle_t handle, string pszPreviewFile, EItemPreviewType type)`

**Purpose:** Adds `item preview file` to the current collection or state.

### AddItemPreviewVideo
`public static bool AddItemPreviewVideo(UGCUpdateHandle_t handle, string pszVideoID)`

**Purpose:** Adds `item preview video` to the current collection or state.

### UpdateItemPreviewFile
`public static bool UpdateItemPreviewFile(UGCUpdateHandle_t handle, uint index, string pszPreviewFile)`

**Purpose:** Updates the state or data of `item preview file`.

### UpdateItemPreviewVideo
`public static bool UpdateItemPreviewVideo(UGCUpdateHandle_t handle, uint index, string pszVideoID)`

**Purpose:** Updates the state or data of `item preview video`.

### RemoveItemPreview
`public static bool RemoveItemPreview(UGCUpdateHandle_t handle, uint index)`

**Purpose:** Removes `item preview` from the current collection or state.

### SubmitItemUpdate
`public static SteamAPICall_t SubmitItemUpdate(UGCUpdateHandle_t handle, string pchChangeNote)`

**Purpose:** Handles logic related to `submit item update`.

### GetItemUpdateProgress
`public static EItemUpdateStatus GetItemUpdateProgress(UGCUpdateHandle_t handle, out ulong punBytesProcessed, out ulong punBytesTotal)`

**Purpose:** Gets the current value of `item update progress`.

### SetUserItemVote
`public static SteamAPICall_t SetUserItemVote(PublishedFileId_t nPublishedFileID, bool bVoteUp)`

**Purpose:** Sets the value or state of `user item vote`.

### GetUserItemVote
`public static SteamAPICall_t GetUserItemVote(PublishedFileId_t nPublishedFileID)`

**Purpose:** Gets the current value of `user item vote`.

### AddItemToFavorites
`public static SteamAPICall_t AddItemToFavorites(AppId_t nAppId, PublishedFileId_t nPublishedFileID)`

**Purpose:** Adds `item to favorites` to the current collection or state.

### RemoveItemFromFavorites
`public static SteamAPICall_t RemoveItemFromFavorites(AppId_t nAppId, PublishedFileId_t nPublishedFileID)`

**Purpose:** Removes `item from favorites` from the current collection or state.

### SubscribeItem
`public static SteamAPICall_t SubscribeItem(PublishedFileId_t nPublishedFileID)`

**Purpose:** Handles logic related to `subscribe item`.

### UnsubscribeItem
`public static SteamAPICall_t UnsubscribeItem(PublishedFileId_t nPublishedFileID)`

**Purpose:** Handles logic related to `unsubscribe item`.

### GetNumSubscribedItems
`public static uint GetNumSubscribedItems()`

**Purpose:** Gets the current value of `num subscribed items`.

### GetSubscribedItems
`public static uint GetSubscribedItems(PublishedFileId_t pvecPublishedFileID, uint cMaxEntries)`

**Purpose:** Gets the current value of `subscribed items`.

### GetItemState
`public static uint GetItemState(PublishedFileId_t nPublishedFileID)`

**Purpose:** Gets the current value of `item state`.

### GetItemInstallInfo
`public static bool GetItemInstallInfo(PublishedFileId_t nPublishedFileID, out ulong punSizeOnDisk, out string pchFolder, uint cchFolderSize, out uint punTimeStamp)`

**Purpose:** Gets the current value of `item install info`.

### GetItemDownloadInfo
`public static bool GetItemDownloadInfo(PublishedFileId_t nPublishedFileID, out ulong punBytesDownloaded, out ulong punBytesTotal)`

**Purpose:** Gets the current value of `item download info`.

### DownloadItem
`public static bool DownloadItem(PublishedFileId_t nPublishedFileID, bool bHighPriority)`

**Purpose:** Handles logic related to `download item`.

### BInitWorkshopForGameServer
`public static bool BInitWorkshopForGameServer(DepotId_t unWorkshopDepotID, string pszFolder)`

**Purpose:** Handles logic related to `b init workshop for game server`.

### SuspendDownloads
`public static void SuspendDownloads(bool bSuspend)`

**Purpose:** Handles logic related to `suspend downloads`.

### StartPlaytimeTracking
`public static SteamAPICall_t StartPlaytimeTracking(PublishedFileId_t pvecPublishedFileID, uint unNumPublishedFileIDs)`

**Purpose:** Handles logic related to `start playtime tracking`.

### StopPlaytimeTracking
`public static SteamAPICall_t StopPlaytimeTracking(PublishedFileId_t pvecPublishedFileID, uint unNumPublishedFileIDs)`

**Purpose:** Handles logic related to `stop playtime tracking`.

### StopPlaytimeTrackingForAllItems
`public static SteamAPICall_t StopPlaytimeTrackingForAllItems()`

**Purpose:** Handles logic related to `stop playtime tracking for all items`.

### AddDependency
`public static SteamAPICall_t AddDependency(PublishedFileId_t nParentPublishedFileID, PublishedFileId_t nChildPublishedFileID)`

**Purpose:** Adds `dependency` to the current collection or state.

### RemoveDependency
`public static SteamAPICall_t RemoveDependency(PublishedFileId_t nParentPublishedFileID, PublishedFileId_t nChildPublishedFileID)`

**Purpose:** Removes `dependency` from the current collection or state.

### AddAppDependency
`public static SteamAPICall_t AddAppDependency(PublishedFileId_t nPublishedFileID, AppId_t nAppID)`

**Purpose:** Adds `app dependency` to the current collection or state.

### RemoveAppDependency
`public static SteamAPICall_t RemoveAppDependency(PublishedFileId_t nPublishedFileID, AppId_t nAppID)`

**Purpose:** Removes `app dependency` from the current collection or state.

### GetAppDependencies
`public static SteamAPICall_t GetAppDependencies(PublishedFileId_t nPublishedFileID)`

**Purpose:** Gets the current value of `app dependencies`.

### DeleteItem
`public static SteamAPICall_t DeleteItem(PublishedFileId_t nPublishedFileID)`

**Purpose:** Handles logic related to `delete item`.

### ShowWorkshopEULA
`public static bool ShowWorkshopEULA()`

**Purpose:** Handles logic related to `show workshop e u l a`.

### GetWorkshopEULAStatus
`public static SteamAPICall_t GetWorkshopEULAStatus()`

**Purpose:** Gets the current value of `workshop e u l a status`.

## Usage Example

```csharp
SteamUGC.CreateQueryUserUGCRequest(unAccountID, eListType, eMatchingUGCType, eSortOrder, nCreatorAppID, nConsumerAppID, 0);
```

## See Also

- [Complete Class Catalog](../catalog)