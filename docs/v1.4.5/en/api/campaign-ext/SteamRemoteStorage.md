<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SteamRemoteStorage`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SteamRemoteStorage

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public static class SteamRemoteStorage`
**Base:** none
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/SteamRemoteStorage.cs`

## Overview

`SteamRemoteStorage` lives in `Steamworks` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Steamworks` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### FileWrite
`public static bool FileWrite(string pchFile, byte pvData, int cubData)`

**Purpose:** Handles logic related to `file write`.

### FileRead
`public static int FileRead(string pchFile, byte pvData, int cubDataToRead)`

**Purpose:** Handles logic related to `file read`.

### FileWriteAsync
`public static SteamAPICall_t FileWriteAsync(string pchFile, byte pvData, uint cubData)`

**Purpose:** Handles logic related to `file write async`.

### FileReadAsync
`public static SteamAPICall_t FileReadAsync(string pchFile, uint nOffset, uint cubToRead)`

**Purpose:** Handles logic related to `file read async`.

### FileReadAsyncComplete
`public static bool FileReadAsyncComplete(SteamAPICall_t hReadCall, byte pvBuffer, uint cubToRead)`

**Purpose:** Handles logic related to `file read async complete`.

### FileForget
`public static bool FileForget(string pchFile)`

**Purpose:** Handles logic related to `file forget`.

### FileDelete
`public static bool FileDelete(string pchFile)`

**Purpose:** Handles logic related to `file delete`.

### FileShare
`public static SteamAPICall_t FileShare(string pchFile)`

**Purpose:** Handles logic related to `file share`.

### SetSyncPlatforms
`public static bool SetSyncPlatforms(string pchFile, ERemoteStoragePlatform eRemoteStoragePlatform)`

**Purpose:** Sets the value or state of `sync platforms`.

### FileWriteStreamOpen
`public static UGCFileWriteStreamHandle_t FileWriteStreamOpen(string pchFile)`

**Purpose:** Handles logic related to `file write stream open`.

### FileWriteStreamWriteChunk
`public static bool FileWriteStreamWriteChunk(UGCFileWriteStreamHandle_t writeHandle, byte pvData, int cubData)`

**Purpose:** Handles logic related to `file write stream write chunk`.

### FileWriteStreamClose
`public static bool FileWriteStreamClose(UGCFileWriteStreamHandle_t writeHandle)`

**Purpose:** Handles logic related to `file write stream close`.

### FileWriteStreamCancel
`public static bool FileWriteStreamCancel(UGCFileWriteStreamHandle_t writeHandle)`

**Purpose:** Handles logic related to `file write stream cancel`.

### FileExists
`public static bool FileExists(string pchFile)`

**Purpose:** Handles logic related to `file exists`.

### FilePersisted
`public static bool FilePersisted(string pchFile)`

**Purpose:** Handles logic related to `file persisted`.

### GetFileSize
`public static int GetFileSize(string pchFile)`

**Purpose:** Gets the current value of `file size`.

### GetFileTimestamp
`public static long GetFileTimestamp(string pchFile)`

**Purpose:** Gets the current value of `file timestamp`.

### GetSyncPlatforms
`public static ERemoteStoragePlatform GetSyncPlatforms(string pchFile)`

**Purpose:** Gets the current value of `sync platforms`.

### GetFileCount
`public static int GetFileCount()`

**Purpose:** Gets the current value of `file count`.

### GetFileNameAndSize
`public static string GetFileNameAndSize(int iFile, out int pnFileSizeInBytes)`

**Purpose:** Gets the current value of `file name and size`.

### GetQuota
`public static bool GetQuota(out ulong pnTotalBytes, out ulong puAvailableBytes)`

**Purpose:** Gets the current value of `quota`.

### IsCloudEnabledForAccount
`public static bool IsCloudEnabledForAccount()`

**Purpose:** Handles logic related to `is cloud enabled for account`.

### IsCloudEnabledForApp
`public static bool IsCloudEnabledForApp()`

**Purpose:** Handles logic related to `is cloud enabled for app`.

### SetCloudEnabledForApp
`public static void SetCloudEnabledForApp(bool bEnabled)`

**Purpose:** Sets the value or state of `cloud enabled for app`.

### UGCDownload
`public static SteamAPICall_t UGCDownload(UGCHandle_t hContent, uint unPriority)`

**Purpose:** Handles logic related to `u g c download`.

### GetUGCDownloadProgress
`public static bool GetUGCDownloadProgress(UGCHandle_t hContent, out int pnBytesDownloaded, out int pnBytesExpected)`

**Purpose:** Gets the current value of `u g c download progress`.

### GetUGCDetails
`public static bool GetUGCDetails(UGCHandle_t hContent, out AppId_t pnAppID, out string ppchName, out int pnFileSizeInBytes, out CSteamID pSteamIDOwner)`

**Purpose:** Gets the current value of `u g c details`.

### UGCRead
`public static int UGCRead(UGCHandle_t hContent, byte pvData, int cubDataToRead, uint cOffset, EUGCReadAction eAction)`

**Purpose:** Handles logic related to `u g c read`.

### GetCachedUGCCount
`public static int GetCachedUGCCount()`

**Purpose:** Gets the current value of `cached u g c count`.

### GetCachedUGCHandle
`public static UGCHandle_t GetCachedUGCHandle(int iCachedContent)`

**Purpose:** Gets the current value of `cached u g c handle`.

### PublishWorkshopFile
`public static SteamAPICall_t PublishWorkshopFile(string pchFile, string pchPreviewFile, AppId_t nConsumerAppId, string pchTitle, string pchDescription, ERemoteStoragePublishedFileVisibility eVisibility, IList<string> pTags, EWorkshopFileType eWorkshopFileType)`

**Purpose:** Handles logic related to `publish workshop file`.

### CreatePublishedFileUpdateRequest
`public static PublishedFileUpdateHandle_t CreatePublishedFileUpdateRequest(PublishedFileId_t unPublishedFileId)`

**Purpose:** Creates a new `published file update request` instance or object.

### UpdatePublishedFileFile
`public static bool UpdatePublishedFileFile(PublishedFileUpdateHandle_t updateHandle, string pchFile)`

**Purpose:** Updates the state or data of `published file file`.

### UpdatePublishedFilePreviewFile
`public static bool UpdatePublishedFilePreviewFile(PublishedFileUpdateHandle_t updateHandle, string pchPreviewFile)`

**Purpose:** Updates the state or data of `published file preview file`.

### UpdatePublishedFileTitle
`public static bool UpdatePublishedFileTitle(PublishedFileUpdateHandle_t updateHandle, string pchTitle)`

**Purpose:** Updates the state or data of `published file title`.

### UpdatePublishedFileDescription
`public static bool UpdatePublishedFileDescription(PublishedFileUpdateHandle_t updateHandle, string pchDescription)`

**Purpose:** Updates the state or data of `published file description`.

### UpdatePublishedFileVisibility
`public static bool UpdatePublishedFileVisibility(PublishedFileUpdateHandle_t updateHandle, ERemoteStoragePublishedFileVisibility eVisibility)`

**Purpose:** Updates the state or data of `published file visibility`.

### UpdatePublishedFileTags
`public static bool UpdatePublishedFileTags(PublishedFileUpdateHandle_t updateHandle, IList<string> pTags)`

**Purpose:** Updates the state or data of `published file tags`.

### CommitPublishedFileUpdate
`public static SteamAPICall_t CommitPublishedFileUpdate(PublishedFileUpdateHandle_t updateHandle)`

**Purpose:** Handles logic related to `commit published file update`.

### GetPublishedFileDetails
`public static SteamAPICall_t GetPublishedFileDetails(PublishedFileId_t unPublishedFileId, uint unMaxSecondsOld)`

**Purpose:** Gets the current value of `published file details`.

### DeletePublishedFile
`public static SteamAPICall_t DeletePublishedFile(PublishedFileId_t unPublishedFileId)`

**Purpose:** Handles logic related to `delete published file`.

### EnumerateUserPublishedFiles
`public static SteamAPICall_t EnumerateUserPublishedFiles(uint unStartIndex)`

**Purpose:** Handles logic related to `enumerate user published files`.

### SubscribePublishedFile
`public static SteamAPICall_t SubscribePublishedFile(PublishedFileId_t unPublishedFileId)`

**Purpose:** Handles logic related to `subscribe published file`.

### EnumerateUserSubscribedFiles
`public static SteamAPICall_t EnumerateUserSubscribedFiles(uint unStartIndex)`

**Purpose:** Handles logic related to `enumerate user subscribed files`.

### UnsubscribePublishedFile
`public static SteamAPICall_t UnsubscribePublishedFile(PublishedFileId_t unPublishedFileId)`

**Purpose:** Handles logic related to `unsubscribe published file`.

### UpdatePublishedFileSetChangeDescription
`public static bool UpdatePublishedFileSetChangeDescription(PublishedFileUpdateHandle_t updateHandle, string pchChangeDescription)`

**Purpose:** Updates the state or data of `published file set change description`.

### GetPublishedItemVoteDetails
`public static SteamAPICall_t GetPublishedItemVoteDetails(PublishedFileId_t unPublishedFileId)`

**Purpose:** Gets the current value of `published item vote details`.

### UpdateUserPublishedItemVote
`public static SteamAPICall_t UpdateUserPublishedItemVote(PublishedFileId_t unPublishedFileId, bool bVoteUp)`

**Purpose:** Updates the state or data of `user published item vote`.

### GetUserPublishedItemVoteDetails
`public static SteamAPICall_t GetUserPublishedItemVoteDetails(PublishedFileId_t unPublishedFileId)`

**Purpose:** Gets the current value of `user published item vote details`.

### EnumerateUserSharedWorkshopFiles
`public static SteamAPICall_t EnumerateUserSharedWorkshopFiles(CSteamID steamId, uint unStartIndex, IList<string> pRequiredTags, IList<string> pExcludedTags)`

**Purpose:** Handles logic related to `enumerate user shared workshop files`.

### PublishVideo
`public static SteamAPICall_t PublishVideo(EWorkshopVideoProvider eVideoProvider, string pchVideoAccount, string pchVideoIdentifier, string pchPreviewFile, AppId_t nConsumerAppId, string pchTitle, string pchDescription, ERemoteStoragePublishedFileVisibility eVisibility, IList<string> pTags)`

**Purpose:** Handles logic related to `publish video`.

### SetUserPublishedFileAction
`public static SteamAPICall_t SetUserPublishedFileAction(PublishedFileId_t unPublishedFileId, EWorkshopFileAction eAction)`

**Purpose:** Sets the value or state of `user published file action`.

### EnumeratePublishedFilesByUserAction
`public static SteamAPICall_t EnumeratePublishedFilesByUserAction(EWorkshopFileAction eAction, uint unStartIndex)`

**Purpose:** Handles logic related to `enumerate published files by user action`.

### EnumeratePublishedWorkshopFiles
`public static SteamAPICall_t EnumeratePublishedWorkshopFiles(EWorkshopEnumerationType eEnumerationType, uint unStartIndex, uint unCount, uint unDays, IList<string> pTags, IList<string> pUserTags)`

**Purpose:** Handles logic related to `enumerate published workshop files`.

### UGCDownloadToLocation
`public static SteamAPICall_t UGCDownloadToLocation(UGCHandle_t hContent, string pchLocation, uint unPriority)`

**Purpose:** Handles logic related to `u g c download to location`.

### GetLocalFileChangeCount
`public static int GetLocalFileChangeCount()`

**Purpose:** Gets the current value of `local file change count`.

### GetLocalFileChange
`public static string GetLocalFileChange(int iFile, out ERemoteStorageLocalFileChange pEChangeType, out ERemoteStorageFilePathType pEFilePathType)`

**Purpose:** Gets the current value of `local file change`.

### BeginFileWriteBatch
`public static bool BeginFileWriteBatch()`

**Purpose:** Handles logic related to `begin file write batch`.

### EndFileWriteBatch
`public static bool EndFileWriteBatch()`

**Purpose:** Handles logic related to `end file write batch`.

## Usage Example

```csharp
SteamRemoteStorage.FileWrite("example", 0, 0);
```

## See Also

- [Complete Class Catalog](../catalog)