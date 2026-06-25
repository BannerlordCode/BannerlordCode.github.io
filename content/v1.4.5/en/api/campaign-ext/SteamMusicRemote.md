---
title: "SteamMusicRemote"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SteamMusicRemote`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SteamMusicRemote

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public static class SteamMusicRemote`
**Base:** none
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/SteamMusicRemote.cs`

## Overview

`SteamMusicRemote` lives in `Steamworks` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Steamworks` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RegisterSteamMusicRemote
`public static bool RegisterSteamMusicRemote(string pchName)`

**Purpose:** Handles logic related to `register steam music remote`.

### DeregisterSteamMusicRemote
`public static bool DeregisterSteamMusicRemote()`

**Purpose:** Handles logic related to `deregister steam music remote`.

### BIsCurrentMusicRemote
`public static bool BIsCurrentMusicRemote()`

**Purpose:** Handles logic related to `b is current music remote`.

### BActivationSuccess
`public static bool BActivationSuccess(bool bValue)`

**Purpose:** Handles logic related to `b activation success`.

### SetDisplayName
`public static bool SetDisplayName(string pchDisplayName)`

**Purpose:** Sets the value or state of `display name`.

### SetPNGIcon_64x64
`public static bool SetPNGIcon_64x64(byte pvBuffer, uint cbBufferLength)`

**Purpose:** Sets the value or state of `p n g icon_64x64`.

### EnablePlayPrevious
`public static bool EnablePlayPrevious(bool bValue)`

**Purpose:** Handles logic related to `enable play previous`.

### EnablePlayNext
`public static bool EnablePlayNext(bool bValue)`

**Purpose:** Handles logic related to `enable play next`.

### EnableShuffled
`public static bool EnableShuffled(bool bValue)`

**Purpose:** Handles logic related to `enable shuffled`.

### EnableLooped
`public static bool EnableLooped(bool bValue)`

**Purpose:** Handles logic related to `enable looped`.

### EnableQueue
`public static bool EnableQueue(bool bValue)`

**Purpose:** Handles logic related to `enable queue`.

### EnablePlaylists
`public static bool EnablePlaylists(bool bValue)`

**Purpose:** Handles logic related to `enable playlists`.

### UpdatePlaybackStatus
`public static bool UpdatePlaybackStatus(AudioPlayback_Status nStatus)`

**Purpose:** Updates the state or data of `playback status`.

### UpdateShuffled
`public static bool UpdateShuffled(bool bValue)`

**Purpose:** Updates the state or data of `shuffled`.

### UpdateLooped
`public static bool UpdateLooped(bool bValue)`

**Purpose:** Updates the state or data of `looped`.

### UpdateVolume
`public static bool UpdateVolume(float flValue)`

**Purpose:** Updates the state or data of `volume`.

### CurrentEntryWillChange
`public static bool CurrentEntryWillChange()`

**Purpose:** Handles logic related to `current entry will change`.

### CurrentEntryIsAvailable
`public static bool CurrentEntryIsAvailable(bool bAvailable)`

**Purpose:** Handles logic related to `current entry is available`.

### UpdateCurrentEntryText
`public static bool UpdateCurrentEntryText(string pchText)`

**Purpose:** Updates the state or data of `current entry text`.

### UpdateCurrentEntryElapsedSeconds
`public static bool UpdateCurrentEntryElapsedSeconds(int nValue)`

**Purpose:** Updates the state or data of `current entry elapsed seconds`.

### UpdateCurrentEntryCoverArt
`public static bool UpdateCurrentEntryCoverArt(byte pvBuffer, uint cbBufferLength)`

**Purpose:** Updates the state or data of `current entry cover art`.

### CurrentEntryDidChange
`public static bool CurrentEntryDidChange()`

**Purpose:** Handles logic related to `current entry did change`.

### QueueWillChange
`public static bool QueueWillChange()`

**Purpose:** Handles logic related to `queue will change`.

### ResetQueueEntries
`public static bool ResetQueueEntries()`

**Purpose:** Resets `queue entries` to its initial state.

### SetQueueEntry
`public static bool SetQueueEntry(int nID, int nPosition, string pchEntryText)`

**Purpose:** Sets the value or state of `queue entry`.

### SetCurrentQueueEntry
`public static bool SetCurrentQueueEntry(int nID)`

**Purpose:** Sets the value or state of `current queue entry`.

### QueueDidChange
`public static bool QueueDidChange()`

**Purpose:** Handles logic related to `queue did change`.

### PlaylistWillChange
`public static bool PlaylistWillChange()`

**Purpose:** Handles logic related to `playlist will change`.

### ResetPlaylistEntries
`public static bool ResetPlaylistEntries()`

**Purpose:** Resets `playlist entries` to its initial state.

### SetPlaylistEntry
`public static bool SetPlaylistEntry(int nID, int nPosition, string pchEntryText)`

**Purpose:** Sets the value or state of `playlist entry`.

### SetCurrentPlaylistEntry
`public static bool SetCurrentPlaylistEntry(int nID)`

**Purpose:** Sets the value or state of `current playlist entry`.

### PlaylistDidChange
`public static bool PlaylistDidChange()`

**Purpose:** Handles logic related to `playlist did change`.

## Usage Example

```csharp
SteamMusicRemote.RegisterSteamMusicRemote("example");
```

## See Also

- [Complete Class Catalog](../catalog)