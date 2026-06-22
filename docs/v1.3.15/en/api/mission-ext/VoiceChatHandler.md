<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `VoiceChatHandler`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# VoiceChatHandler

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class VoiceChatHandler : MissionNetwork`
**Base:** `MissionNetwork`
**File:** `TaleWorlds.MountAndBlade/VoiceChatHandler.cs`

## Overview

`VoiceChatHandler` is a mission handler (reaction logic). Add via AddMissionBehavior; it reacts to specific mission events.

## Key Methods

### OnBehaviorInitialize
```csharp
public override void OnBehaviorInitialize()
```

### AfterStart
```csharp
public override void AfterStart()
```

### OnRemoveBehavior
```csharp
public override void OnRemoveBehavior()
```

### OnPreDisplayMissionTick
```csharp
public override void OnPreDisplayMissionTick(float dt)
```

### OnPlayerDisconnectedFromServer
```csharp
public override void OnPlayerDisconnectedFromServer(NetworkCommunicator networkPeer)
```

### WriteVoiceData
```csharp
public void WriteVoiceData(byte dataBuffer, int bufferSize)
```

### SetReadyOnPlatform
```csharp
public void SetReadyOnPlatform()
```

### ProcessVoiceData
```csharp
public bool ProcessVoiceData()
```

### GetVoiceToPlayForTick
```csharp
public Queue<short> GetVoiceToPlayForTick()
```

### HasAnyVoiceData
```csharp
public bool HasAnyVoiceData()
```

## Usage Example

```csharp
// Typical usage of VoiceChatHandler (Handler)
Mission.Current.AddMissionBehavior(new VoiceChatHandler());
```

## See Also

- [Complete Class Catalog](../catalog)