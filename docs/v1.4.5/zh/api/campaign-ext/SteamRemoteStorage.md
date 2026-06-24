<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SteamRemoteStorage`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SteamRemoteStorage

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public static class SteamRemoteStorage`
**Base:** 无
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/SteamRemoteStorage.cs`

## 概述

`SteamRemoteStorage` 位于 `Steamworks`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Steamworks` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### FileWrite
`public static bool FileWrite(string pchFile, byte pvData, int cubData)`

**用途 / Purpose:** 处理 `file write` 相关逻辑。

### FileRead
`public static int FileRead(string pchFile, byte pvData, int cubDataToRead)`

**用途 / Purpose:** 处理 `file read` 相关逻辑。

### FileWriteAsync
`public static SteamAPICall_t FileWriteAsync(string pchFile, byte pvData, uint cubData)`

**用途 / Purpose:** 处理 `file write async` 相关逻辑。

### FileReadAsync
`public static SteamAPICall_t FileReadAsync(string pchFile, uint nOffset, uint cubToRead)`

**用途 / Purpose:** 处理 `file read async` 相关逻辑。

### FileReadAsyncComplete
`public static bool FileReadAsyncComplete(SteamAPICall_t hReadCall, byte pvBuffer, uint cubToRead)`

**用途 / Purpose:** 处理 `file read async complete` 相关逻辑。

### FileForget
`public static bool FileForget(string pchFile)`

**用途 / Purpose:** 处理 `file forget` 相关逻辑。

### FileDelete
`public static bool FileDelete(string pchFile)`

**用途 / Purpose:** 处理 `file delete` 相关逻辑。

### FileShare
`public static SteamAPICall_t FileShare(string pchFile)`

**用途 / Purpose:** 处理 `file share` 相关逻辑。

### SetSyncPlatforms
`public static bool SetSyncPlatforms(string pchFile, ERemoteStoragePlatform eRemoteStoragePlatform)`

**用途 / Purpose:** 设置 `sync platforms` 的值或状态。

### FileWriteStreamOpen
`public static UGCFileWriteStreamHandle_t FileWriteStreamOpen(string pchFile)`

**用途 / Purpose:** 处理 `file write stream open` 相关逻辑。

### FileWriteStreamWriteChunk
`public static bool FileWriteStreamWriteChunk(UGCFileWriteStreamHandle_t writeHandle, byte pvData, int cubData)`

**用途 / Purpose:** 处理 `file write stream write chunk` 相关逻辑。

### FileWriteStreamClose
`public static bool FileWriteStreamClose(UGCFileWriteStreamHandle_t writeHandle)`

**用途 / Purpose:** 处理 `file write stream close` 相关逻辑。

### FileWriteStreamCancel
`public static bool FileWriteStreamCancel(UGCFileWriteStreamHandle_t writeHandle)`

**用途 / Purpose:** 处理 `file write stream cancel` 相关逻辑。

### FileExists
`public static bool FileExists(string pchFile)`

**用途 / Purpose:** 处理 `file exists` 相关逻辑。

### FilePersisted
`public static bool FilePersisted(string pchFile)`

**用途 / Purpose:** 处理 `file persisted` 相关逻辑。

### GetFileSize
`public static int GetFileSize(string pchFile)`

**用途 / Purpose:** 获取 `file size` 的当前值。

### GetFileTimestamp
`public static long GetFileTimestamp(string pchFile)`

**用途 / Purpose:** 获取 `file timestamp` 的当前值。

### GetSyncPlatforms
`public static ERemoteStoragePlatform GetSyncPlatforms(string pchFile)`

**用途 / Purpose:** 获取 `sync platforms` 的当前值。

### GetFileCount
`public static int GetFileCount()`

**用途 / Purpose:** 获取 `file count` 的当前值。

### GetFileNameAndSize
`public static string GetFileNameAndSize(int iFile, out int pnFileSizeInBytes)`

**用途 / Purpose:** 获取 `file name and size` 的当前值。

### GetQuota
`public static bool GetQuota(out ulong pnTotalBytes, out ulong puAvailableBytes)`

**用途 / Purpose:** 获取 `quota` 的当前值。

### IsCloudEnabledForAccount
`public static bool IsCloudEnabledForAccount()`

**用途 / Purpose:** 处理 `is cloud enabled for account` 相关逻辑。

### IsCloudEnabledForApp
`public static bool IsCloudEnabledForApp()`

**用途 / Purpose:** 处理 `is cloud enabled for app` 相关逻辑。

### SetCloudEnabledForApp
`public static void SetCloudEnabledForApp(bool bEnabled)`

**用途 / Purpose:** 设置 `cloud enabled for app` 的值或状态。

### UGCDownload
`public static SteamAPICall_t UGCDownload(UGCHandle_t hContent, uint unPriority)`

**用途 / Purpose:** 处理 `u g c download` 相关逻辑。

### GetUGCDownloadProgress
`public static bool GetUGCDownloadProgress(UGCHandle_t hContent, out int pnBytesDownloaded, out int pnBytesExpected)`

**用途 / Purpose:** 获取 `u g c download progress` 的当前值。

### GetUGCDetails
`public static bool GetUGCDetails(UGCHandle_t hContent, out AppId_t pnAppID, out string ppchName, out int pnFileSizeInBytes, out CSteamID pSteamIDOwner)`

**用途 / Purpose:** 获取 `u g c details` 的当前值。

### UGCRead
`public static int UGCRead(UGCHandle_t hContent, byte pvData, int cubDataToRead, uint cOffset, EUGCReadAction eAction)`

**用途 / Purpose:** 处理 `u g c read` 相关逻辑。

### GetCachedUGCCount
`public static int GetCachedUGCCount()`

**用途 / Purpose:** 获取 `cached u g c count` 的当前值。

### GetCachedUGCHandle
`public static UGCHandle_t GetCachedUGCHandle(int iCachedContent)`

**用途 / Purpose:** 获取 `cached u g c handle` 的当前值。

### PublishWorkshopFile
`public static SteamAPICall_t PublishWorkshopFile(string pchFile, string pchPreviewFile, AppId_t nConsumerAppId, string pchTitle, string pchDescription, ERemoteStoragePublishedFileVisibility eVisibility, IList<string> pTags, EWorkshopFileType eWorkshopFileType)`

**用途 / Purpose:** 处理 `publish workshop file` 相关逻辑。

### CreatePublishedFileUpdateRequest
`public static PublishedFileUpdateHandle_t CreatePublishedFileUpdateRequest(PublishedFileId_t unPublishedFileId)`

**用途 / Purpose:** 创建一个 `published file update request` 实例或对象。

### UpdatePublishedFileFile
`public static bool UpdatePublishedFileFile(PublishedFileUpdateHandle_t updateHandle, string pchFile)`

**用途 / Purpose:** 更新 `published file file` 的状态或数据。

### UpdatePublishedFilePreviewFile
`public static bool UpdatePublishedFilePreviewFile(PublishedFileUpdateHandle_t updateHandle, string pchPreviewFile)`

**用途 / Purpose:** 更新 `published file preview file` 的状态或数据。

### UpdatePublishedFileTitle
`public static bool UpdatePublishedFileTitle(PublishedFileUpdateHandle_t updateHandle, string pchTitle)`

**用途 / Purpose:** 更新 `published file title` 的状态或数据。

### UpdatePublishedFileDescription
`public static bool UpdatePublishedFileDescription(PublishedFileUpdateHandle_t updateHandle, string pchDescription)`

**用途 / Purpose:** 更新 `published file description` 的状态或数据。

### UpdatePublishedFileVisibility
`public static bool UpdatePublishedFileVisibility(PublishedFileUpdateHandle_t updateHandle, ERemoteStoragePublishedFileVisibility eVisibility)`

**用途 / Purpose:** 更新 `published file visibility` 的状态或数据。

### UpdatePublishedFileTags
`public static bool UpdatePublishedFileTags(PublishedFileUpdateHandle_t updateHandle, IList<string> pTags)`

**用途 / Purpose:** 更新 `published file tags` 的状态或数据。

### CommitPublishedFileUpdate
`public static SteamAPICall_t CommitPublishedFileUpdate(PublishedFileUpdateHandle_t updateHandle)`

**用途 / Purpose:** 处理 `commit published file update` 相关逻辑。

### GetPublishedFileDetails
`public static SteamAPICall_t GetPublishedFileDetails(PublishedFileId_t unPublishedFileId, uint unMaxSecondsOld)`

**用途 / Purpose:** 获取 `published file details` 的当前值。

### DeletePublishedFile
`public static SteamAPICall_t DeletePublishedFile(PublishedFileId_t unPublishedFileId)`

**用途 / Purpose:** 处理 `delete published file` 相关逻辑。

### EnumerateUserPublishedFiles
`public static SteamAPICall_t EnumerateUserPublishedFiles(uint unStartIndex)`

**用途 / Purpose:** 处理 `enumerate user published files` 相关逻辑。

### SubscribePublishedFile
`public static SteamAPICall_t SubscribePublishedFile(PublishedFileId_t unPublishedFileId)`

**用途 / Purpose:** 处理 `subscribe published file` 相关逻辑。

### EnumerateUserSubscribedFiles
`public static SteamAPICall_t EnumerateUserSubscribedFiles(uint unStartIndex)`

**用途 / Purpose:** 处理 `enumerate user subscribed files` 相关逻辑。

### UnsubscribePublishedFile
`public static SteamAPICall_t UnsubscribePublishedFile(PublishedFileId_t unPublishedFileId)`

**用途 / Purpose:** 处理 `unsubscribe published file` 相关逻辑。

### UpdatePublishedFileSetChangeDescription
`public static bool UpdatePublishedFileSetChangeDescription(PublishedFileUpdateHandle_t updateHandle, string pchChangeDescription)`

**用途 / Purpose:** 更新 `published file set change description` 的状态或数据。

### GetPublishedItemVoteDetails
`public static SteamAPICall_t GetPublishedItemVoteDetails(PublishedFileId_t unPublishedFileId)`

**用途 / Purpose:** 获取 `published item vote details` 的当前值。

### UpdateUserPublishedItemVote
`public static SteamAPICall_t UpdateUserPublishedItemVote(PublishedFileId_t unPublishedFileId, bool bVoteUp)`

**用途 / Purpose:** 更新 `user published item vote` 的状态或数据。

### GetUserPublishedItemVoteDetails
`public static SteamAPICall_t GetUserPublishedItemVoteDetails(PublishedFileId_t unPublishedFileId)`

**用途 / Purpose:** 获取 `user published item vote details` 的当前值。

### EnumerateUserSharedWorkshopFiles
`public static SteamAPICall_t EnumerateUserSharedWorkshopFiles(CSteamID steamId, uint unStartIndex, IList<string> pRequiredTags, IList<string> pExcludedTags)`

**用途 / Purpose:** 处理 `enumerate user shared workshop files` 相关逻辑。

### PublishVideo
`public static SteamAPICall_t PublishVideo(EWorkshopVideoProvider eVideoProvider, string pchVideoAccount, string pchVideoIdentifier, string pchPreviewFile, AppId_t nConsumerAppId, string pchTitle, string pchDescription, ERemoteStoragePublishedFileVisibility eVisibility, IList<string> pTags)`

**用途 / Purpose:** 处理 `publish video` 相关逻辑。

### SetUserPublishedFileAction
`public static SteamAPICall_t SetUserPublishedFileAction(PublishedFileId_t unPublishedFileId, EWorkshopFileAction eAction)`

**用途 / Purpose:** 设置 `user published file action` 的值或状态。

### EnumeratePublishedFilesByUserAction
`public static SteamAPICall_t EnumeratePublishedFilesByUserAction(EWorkshopFileAction eAction, uint unStartIndex)`

**用途 / Purpose:** 处理 `enumerate published files by user action` 相关逻辑。

### EnumeratePublishedWorkshopFiles
`public static SteamAPICall_t EnumeratePublishedWorkshopFiles(EWorkshopEnumerationType eEnumerationType, uint unStartIndex, uint unCount, uint unDays, IList<string> pTags, IList<string> pUserTags)`

**用途 / Purpose:** 处理 `enumerate published workshop files` 相关逻辑。

### UGCDownloadToLocation
`public static SteamAPICall_t UGCDownloadToLocation(UGCHandle_t hContent, string pchLocation, uint unPriority)`

**用途 / Purpose:** 处理 `u g c download to location` 相关逻辑。

### GetLocalFileChangeCount
`public static int GetLocalFileChangeCount()`

**用途 / Purpose:** 获取 `local file change count` 的当前值。

### GetLocalFileChange
`public static string GetLocalFileChange(int iFile, out ERemoteStorageLocalFileChange pEChangeType, out ERemoteStorageFilePathType pEFilePathType)`

**用途 / Purpose:** 获取 `local file change` 的当前值。

### BeginFileWriteBatch
`public static bool BeginFileWriteBatch()`

**用途 / Purpose:** 处理 `begin file write batch` 相关逻辑。

### EndFileWriteBatch
`public static bool EndFileWriteBatch()`

**用途 / Purpose:** 处理 `end file write batch` 相关逻辑。

## 使用示例

```csharp
SteamRemoteStorage.FileWrite("example", 0, 0);
```

## 参见

- [完整类目录](../catalog)