---
title: "PlaybackChannel"
description: "Auto-generated class reference for PlaybackChannel."
---
# PlaybackChannel

**Namespace:** psai.net
**Module:** psai.net
**Type:** `public class PlaybackChannel`
**Base:** none
**File:** `bin/TaleWorlds.PSAI/psai.net/PlaybackChannel.cs`

## Overview

`PlaybackChannel` lives in `psai.net` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `psai.net` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnPlaybackHasStarted
`public void OnPlaybackHasStarted()`

**Purpose:** Invoked when the playback has started event is raised.

```csharp
// Obtain an instance of PlaybackChannel from the subsystem API first
PlaybackChannel playbackChannel = ...;
playbackChannel.OnPlaybackHasStarted();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PlaybackChannel playbackChannel = ...;
playbackChannel.OnPlaybackHasStarted();
```

## See Also

- [Area Index](../)