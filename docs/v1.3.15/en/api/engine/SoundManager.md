<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SoundManager`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SoundManager

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public static class SoundManager`
**Base:** none
**File:** `TaleWorlds.Engine/SoundManager.cs`

## Overview

`SoundManager` is a manager (often reached via a Current singleton or Mission.Current). Use it to access/modify its managed subsystem.

## Key Methods

### SetListenerFrame
```csharp
public static void SetListenerFrame(MatrixFrame frame)
```

### SetListenerFrame
```csharp
public static void SetListenerFrame(MatrixFrame frame, Vec3 attenuationPosition)
```

### GetListenerFrame
```csharp
public static MatrixFrame GetListenerFrame()
```

### GetAttenuationPosition
```csharp
public static Vec3 GetAttenuationPosition()
```

### Reset
```csharp
public static void Reset()
```

### StartOneShotEvent
```csharp
public static bool StartOneShotEvent(string eventFullName, in Vec3 position, string paramName, float paramValue)
```

### StartOneShotEvent
```csharp
public static bool StartOneShotEvent(string eventFullName, in Vec3 position)
```

### StartOneShotEventWithIndex
```csharp
public static bool StartOneShotEventWithIndex(int index, in Vec3 position)
```

### SetState
```csharp
public static void SetState(string stateGroup, string state)
```

### CreateEvent
```csharp
public static SoundEvent CreateEvent(string eventFullName, Scene scene)
```

### LoadEventFileAux
```csharp
public static void LoadEventFileAux(string soundBank, bool decompressSamples)
```

### AddSoundClientWithId
```csharp
public static void AddSoundClientWithId(ulong clientId)
```

### DeleteSoundClientWithId
```csharp
public static void DeleteSoundClientWithId(ulong clientId)
```

### SetGlobalParameter
```csharp
public static void SetGlobalParameter(string parameterName, float value)
```

### GetEventGlobalIndex
```csharp
public static int GetEventGlobalIndex(string eventFullName)
```

### PauseBus
```csharp
public static void PauseBus(string busName)
```

### UnpauseBus
```csharp
public static void UnpauseBus(string busName)
```

### InitializeVoicePlayEvent
```csharp
public static void InitializeVoicePlayEvent()
```

### CreateVoiceEvent
```csharp
public static void CreateVoiceEvent()
```

### DestroyVoiceEvent
```csharp
public static void DestroyVoiceEvent(int id)
```

### FinalizeVoicePlayEvent
```csharp
public static void FinalizeVoicePlayEvent()
```

### StartVoiceRecording
```csharp
public static void StartVoiceRecording()
```

### StopVoiceRecording
```csharp
public static void StopVoiceRecording()
```

### GetVoiceData
```csharp
public static void GetVoiceData(byte voiceBuffer, int chunkSize, out int readBytesLength)
```

### UpdateVoiceToPlay
```csharp
public static void UpdateVoiceToPlay(byte voiceBuffer, int length, int index)
```

### AddXBOXRemoteUser
```csharp
public static void AddXBOXRemoteUser(ulong XUID, ulong deviceID, bool canSendMicSound, bool canSendTextSound, bool canSendText, bool canReceiveSound, bool canReceiveText)
```

### InitializeXBOXSoundManager
```csharp
public static void InitializeXBOXSoundManager()
```

### ApplyPushToTalk
```csharp
public static void ApplyPushToTalk(bool pushed)
```

### ClearXBOXSoundManager
```csharp
public static void ClearXBOXSoundManager()
```

### UpdateXBOXLocalUser
```csharp
public static void UpdateXBOXLocalUser()
```

## Usage Example

```csharp
// Typical usage of SoundManager (Manager)
SoundManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)