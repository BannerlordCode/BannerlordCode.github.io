<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SteamMusicRemote`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SteamMusicRemote

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public static class SteamMusicRemote`
**Base:** 无
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/SteamMusicRemote.cs`

## 概述

`SteamMusicRemote` 位于 `Steamworks`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Steamworks` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### RegisterSteamMusicRemote
`public static bool RegisterSteamMusicRemote(string pchName)`

**用途 / Purpose:** 处理 `register steam music remote` 相关逻辑。

### DeregisterSteamMusicRemote
`public static bool DeregisterSteamMusicRemote()`

**用途 / Purpose:** 处理 `deregister steam music remote` 相关逻辑。

### BIsCurrentMusicRemote
`public static bool BIsCurrentMusicRemote()`

**用途 / Purpose:** 处理 `b is current music remote` 相关逻辑。

### BActivationSuccess
`public static bool BActivationSuccess(bool bValue)`

**用途 / Purpose:** 处理 `b activation success` 相关逻辑。

### SetDisplayName
`public static bool SetDisplayName(string pchDisplayName)`

**用途 / Purpose:** 设置 `display name` 的值或状态。

### SetPNGIcon_64x64
`public static bool SetPNGIcon_64x64(byte pvBuffer, uint cbBufferLength)`

**用途 / Purpose:** 设置 `p n g icon_64x64` 的值或状态。

### EnablePlayPrevious
`public static bool EnablePlayPrevious(bool bValue)`

**用途 / Purpose:** 处理 `enable play previous` 相关逻辑。

### EnablePlayNext
`public static bool EnablePlayNext(bool bValue)`

**用途 / Purpose:** 处理 `enable play next` 相关逻辑。

### EnableShuffled
`public static bool EnableShuffled(bool bValue)`

**用途 / Purpose:** 处理 `enable shuffled` 相关逻辑。

### EnableLooped
`public static bool EnableLooped(bool bValue)`

**用途 / Purpose:** 处理 `enable looped` 相关逻辑。

### EnableQueue
`public static bool EnableQueue(bool bValue)`

**用途 / Purpose:** 处理 `enable queue` 相关逻辑。

### EnablePlaylists
`public static bool EnablePlaylists(bool bValue)`

**用途 / Purpose:** 处理 `enable playlists` 相关逻辑。

### UpdatePlaybackStatus
`public static bool UpdatePlaybackStatus(AudioPlayback_Status nStatus)`

**用途 / Purpose:** 更新 `playback status` 的状态或数据。

### UpdateShuffled
`public static bool UpdateShuffled(bool bValue)`

**用途 / Purpose:** 更新 `shuffled` 的状态或数据。

### UpdateLooped
`public static bool UpdateLooped(bool bValue)`

**用途 / Purpose:** 更新 `looped` 的状态或数据。

### UpdateVolume
`public static bool UpdateVolume(float flValue)`

**用途 / Purpose:** 更新 `volume` 的状态或数据。

### CurrentEntryWillChange
`public static bool CurrentEntryWillChange()`

**用途 / Purpose:** 处理 `current entry will change` 相关逻辑。

### CurrentEntryIsAvailable
`public static bool CurrentEntryIsAvailable(bool bAvailable)`

**用途 / Purpose:** 处理 `current entry is available` 相关逻辑。

### UpdateCurrentEntryText
`public static bool UpdateCurrentEntryText(string pchText)`

**用途 / Purpose:** 更新 `current entry text` 的状态或数据。

### UpdateCurrentEntryElapsedSeconds
`public static bool UpdateCurrentEntryElapsedSeconds(int nValue)`

**用途 / Purpose:** 更新 `current entry elapsed seconds` 的状态或数据。

### UpdateCurrentEntryCoverArt
`public static bool UpdateCurrentEntryCoverArt(byte pvBuffer, uint cbBufferLength)`

**用途 / Purpose:** 更新 `current entry cover art` 的状态或数据。

### CurrentEntryDidChange
`public static bool CurrentEntryDidChange()`

**用途 / Purpose:** 处理 `current entry did change` 相关逻辑。

### QueueWillChange
`public static bool QueueWillChange()`

**用途 / Purpose:** 处理 `queue will change` 相关逻辑。

### ResetQueueEntries
`public static bool ResetQueueEntries()`

**用途 / Purpose:** 将 `queue entries` 重置为初始状态。

### SetQueueEntry
`public static bool SetQueueEntry(int nID, int nPosition, string pchEntryText)`

**用途 / Purpose:** 设置 `queue entry` 的值或状态。

### SetCurrentQueueEntry
`public static bool SetCurrentQueueEntry(int nID)`

**用途 / Purpose:** 设置 `current queue entry` 的值或状态。

### QueueDidChange
`public static bool QueueDidChange()`

**用途 / Purpose:** 处理 `queue did change` 相关逻辑。

### PlaylistWillChange
`public static bool PlaylistWillChange()`

**用途 / Purpose:** 处理 `playlist will change` 相关逻辑。

### ResetPlaylistEntries
`public static bool ResetPlaylistEntries()`

**用途 / Purpose:** 将 `playlist entries` 重置为初始状态。

### SetPlaylistEntry
`public static bool SetPlaylistEntry(int nID, int nPosition, string pchEntryText)`

**用途 / Purpose:** 设置 `playlist entry` 的值或状态。

### SetCurrentPlaylistEntry
`public static bool SetCurrentPlaylistEntry(int nID)`

**用途 / Purpose:** 设置 `current playlist entry` 的值或状态。

### PlaylistDidChange
`public static bool PlaylistDidChange()`

**用途 / Purpose:** 处理 `playlist did change` 相关逻辑。

## 使用示例

```csharp
SteamMusicRemote.RegisterSteamMusicRemote("example");
```

## 参见

- [完整类目录](../catalog)