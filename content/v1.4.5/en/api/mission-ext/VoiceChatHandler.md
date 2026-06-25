---
title: "VoiceChatHandler"
description: "Auto-generated class reference for VoiceChatHandler."
---
# VoiceChatHandler

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class VoiceChatHandler : MissionNetwork`
**Base:** `MissionNetwork`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/VoiceChatHandler.cs`

## Overview

`VoiceChatHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `VoiceChatHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsReadyOnPlatform` | `public bool IsReadyOnPlatform { get; }` |

## Key Methods

### WriteVoiceData
`public void WriteVoiceData(byte dataBuffer, int bufferSize)`

**Purpose:** Writes voice data to the target location.

```csharp
// Obtain an instance of VoiceChatHandler from the subsystem API first
VoiceChatHandler voiceChatHandler = ...;
voiceChatHandler.WriteVoiceData(0, 0);
```

### SetReadyOnPlatform
`public void SetReadyOnPlatform()`

**Purpose:** Assigns a new value to ready on platform and updates the object's internal state.

```csharp
// Obtain an instance of VoiceChatHandler from the subsystem API first
VoiceChatHandler voiceChatHandler = ...;
voiceChatHandler.SetReadyOnPlatform();
```

### ProcessVoiceData
`public bool ProcessVoiceData()`

**Purpose:** Executes the ProcessVoiceData logic.

```csharp
// Obtain an instance of VoiceChatHandler from the subsystem API first
VoiceChatHandler voiceChatHandler = ...;
var result = voiceChatHandler.ProcessVoiceData();
```

### GetVoiceToPlayForTick
`public Queue<short> GetVoiceToPlayForTick()`

**Purpose:** Reads and returns the voice to play for tick value held by the this instance.

```csharp
// Obtain an instance of VoiceChatHandler from the subsystem API first
VoiceChatHandler voiceChatHandler = ...;
var result = voiceChatHandler.GetVoiceToPlayForTick();
```

### HasAnyVoiceData
`public bool HasAnyVoiceData()`

**Purpose:** Determines whether the this instance already holds any voice data.

```csharp
// Obtain an instance of VoiceChatHandler from the subsystem API first
VoiceChatHandler voiceChatHandler = ...;
var result = voiceChatHandler.HasAnyVoiceData();
```

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Invoked when the behavior initialize event is raised.

```csharp
// Obtain an instance of VoiceChatHandler from the subsystem API first
VoiceChatHandler voiceChatHandler = ...;
voiceChatHandler.OnBehaviorInitialize();
```

### AfterStart
`public override void AfterStart()`

**Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of VoiceChatHandler from the subsystem API first
VoiceChatHandler voiceChatHandler = ...;
voiceChatHandler.AfterStart();
```

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**Purpose:** Invoked when the remove behavior event is raised.

```csharp
// Obtain an instance of VoiceChatHandler from the subsystem API first
VoiceChatHandler voiceChatHandler = ...;
voiceChatHandler.OnRemoveBehavior();
```

### OnPreDisplayMissionTick
`public override void OnPreDisplayMissionTick(float dt)`

**Purpose:** Invoked when the pre display mission tick event is raised.

```csharp
// Obtain an instance of VoiceChatHandler from the subsystem API first
VoiceChatHandler voiceChatHandler = ...;
voiceChatHandler.OnPreDisplayMissionTick(0);
```

### OnPlayerDisconnectedFromServer
`public override void OnPlayerDisconnectedFromServer(NetworkCommunicator networkPeer)`

**Purpose:** Invoked when the player disconnected from server event is raised.

```csharp
// Obtain an instance of VoiceChatHandler from the subsystem API first
VoiceChatHandler voiceChatHandler = ...;
voiceChatHandler.OnPlayerDisconnectedFromServer(networkPeer);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<VoiceChatHandler>();
```

## See Also

- [Area Index](../)