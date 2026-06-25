---
title: "VoiceChatHandler"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `VoiceChatHandler`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# VoiceChatHandler

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class VoiceChatHandler : MissionNetwork`
**Base:** `MissionNetwork`
**File:** `TaleWorlds.MountAndBlade/VoiceChatHandler.cs`

## Overview

`VoiceChatHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `VoiceChatHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsReadyOnPlatform` | `public bool IsReadyOnPlatform { get; }` |

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Called when the `behavior initialize` event is raised.

### AfterStart
`public override void AfterStart()`

**Purpose:** Handles logic related to `after start`.

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**Purpose:** Called when the `remove behavior` event is raised.

### OnPreDisplayMissionTick
`public override void OnPreDisplayMissionTick(float dt)`

**Purpose:** Called when the `pre display mission tick` event is raised.

### OnPlayerDisconnectedFromServer
`public override void OnPlayerDisconnectedFromServer(NetworkCommunicator networkPeer)`

**Purpose:** Called when the `player disconnected from server` event is raised.

### WriteVoiceData
`public void WriteVoiceData(byte dataBuffer, int bufferSize)`

**Purpose:** Handles logic related to `write voice data`.

### SetReadyOnPlatform
`public void SetReadyOnPlatform()`

**Purpose:** Sets the value or state of `ready on platform`.

### ProcessVoiceData
`public bool ProcessVoiceData()`

**Purpose:** Handles logic related to `process voice data`.

### GetVoiceToPlayForTick
`public Queue<short> GetVoiceToPlayForTick()`

**Purpose:** Gets the current value of `voice to play for tick`.

### HasAnyVoiceData
`public bool HasAnyVoiceData()`

**Purpose:** Checks whether the current object has/contains `any voice data`.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new VoiceChatHandler());
```

## See Also

- [Complete Class Catalog](../catalog)