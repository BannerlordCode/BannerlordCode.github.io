---
title: "SoundManager"
description: "Auto-generated class reference for SoundManager."
---
# SoundManager

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public static class SoundManager`
**Base:** none
**File:** `TaleWorlds.Engine/SoundManager.cs`

## Overview

`SoundManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `SoundManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### SetListenerFrame
`public static void SetListenerFrame(MatrixFrame frame)`

**Purpose:** Assigns a new value to listener frame and updates the object's internal state.

```csharp
// Static call; no instance required
SoundManager.SetListenerFrame(frame);
```

### SetListenerFrame
`public static void SetListenerFrame(MatrixFrame frame, Vec3 attenuationPosition)`

**Purpose:** Assigns a new value to listener frame and updates the object's internal state.

```csharp
// Static call; no instance required
SoundManager.SetListenerFrame(frame, attenuationPosition);
```

### GetListenerFrame
`public static MatrixFrame GetListenerFrame()`

**Purpose:** Reads and returns the listener frame value held by the this instance.

```csharp
// Static call; no instance required
SoundManager.GetListenerFrame();
```

### GetAttenuationPosition
`public static Vec3 GetAttenuationPosition()`

**Purpose:** Reads and returns the attenuation position value held by the this instance.

```csharp
// Static call; no instance required
SoundManager.GetAttenuationPosition();
```

### Reset
`public static void Reset()`

**Purpose:** Returns the this instance to its default or initial condition.

```csharp
// Static call; no instance required
SoundManager.Reset();
```

### StartOneShotEvent
`public static bool StartOneShotEvent(string eventFullName, in Vec3 position, string paramName, float paramValue)`

**Purpose:** Starts the one shot event flow or state machine.

```csharp
// Static call; no instance required
SoundManager.StartOneShotEvent("example", position, "example", 0);
```

### StartOneShotEvent
`public static bool StartOneShotEvent(string eventFullName, in Vec3 position)`

**Purpose:** Starts the one shot event flow or state machine.

```csharp
// Static call; no instance required
SoundManager.StartOneShotEvent("example", position);
```

### SetState
`public static void SetState(string stateGroup, string state)`

**Purpose:** Assigns a new value to state and updates the object's internal state.

```csharp
// Static call; no instance required
SoundManager.SetState("example", "example");
```

### CreateEvent
`public static SoundEvent CreateEvent(string eventFullName, Scene scene)`

**Purpose:** Constructs a new event entity and returns it to the caller.

```csharp
// Static call; no instance required
SoundManager.CreateEvent("example", scene);
```

### LoadEventFileAux
`public static void LoadEventFileAux(string soundBank, bool decompressSamples)`

**Purpose:** Reads event file aux from persistent storage or a stream.

```csharp
// Static call; no instance required
SoundManager.LoadEventFileAux("example", false);
```

### AddSoundClientWithId
`public static void AddSoundClientWithId(ulong clientId)`

**Purpose:** Adds sound client with id to the current collection or state.

```csharp
// Static call; no instance required
SoundManager.AddSoundClientWithId(0);
```

### DeleteSoundClientWithId
`public static void DeleteSoundClientWithId(ulong clientId)`

**Purpose:** Executes the DeleteSoundClientWithId logic.

```csharp
// Static call; no instance required
SoundManager.DeleteSoundClientWithId(0);
```

### SetGlobalParameter
`public static void SetGlobalParameter(string parameterName, float value)`

**Purpose:** Assigns a new value to global parameter and updates the object's internal state.

```csharp
// Static call; no instance required
SoundManager.SetGlobalParameter("example", 0);
```

### GetEventGlobalIndex
`public static int GetEventGlobalIndex(string eventFullName)`

**Purpose:** Reads and returns the event global index value held by the this instance.

```csharp
// Static call; no instance required
SoundManager.GetEventGlobalIndex("example");
```

### InitializeVoicePlayEvent
`public static void InitializeVoicePlayEvent()`

**Purpose:** Prepares the resources, state, or bindings required by voice play event.

```csharp
// Static call; no instance required
SoundManager.InitializeVoicePlayEvent();
```

### CreateVoiceEvent
`public static void CreateVoiceEvent()`

**Purpose:** Constructs a new voice event entity and returns it to the caller.

```csharp
// Static call; no instance required
SoundManager.CreateVoiceEvent();
```

### DestroyVoiceEvent
`public static void DestroyVoiceEvent(int id)`

**Purpose:** Executes the DestroyVoiceEvent logic.

```csharp
// Static call; no instance required
SoundManager.DestroyVoiceEvent(0);
```

### FinalizeVoicePlayEvent
`public static void FinalizeVoicePlayEvent()`

**Purpose:** Executes the FinalizeVoicePlayEvent logic.

```csharp
// Static call; no instance required
SoundManager.FinalizeVoicePlayEvent();
```

### StartVoiceRecording
`public static void StartVoiceRecording()`

**Purpose:** Starts the voice recording flow or state machine.

```csharp
// Static call; no instance required
SoundManager.StartVoiceRecording();
```

### StopVoiceRecording
`public static void StopVoiceRecording()`

**Purpose:** Stops the voice recording flow or state machine.

```csharp
// Static call; no instance required
SoundManager.StopVoiceRecording();
```

### GetVoiceData
`public static void GetVoiceData(byte voiceBuffer, int chunkSize, out int readBytesLength)`

**Purpose:** Reads and returns the voice data value held by the this instance.

```csharp
// Static call; no instance required
SoundManager.GetVoiceData(0, 0, readBytesLength);
```

### UpdateVoiceToPlay
`public static void UpdateVoiceToPlay(byte voiceBuffer, int length, int index)`

**Purpose:** Recalculates and stores the latest representation of voice to play.

```csharp
// Static call; no instance required
SoundManager.UpdateVoiceToPlay(0, 0, 0);
```

### AddXBOXRemoteUser
`public static void AddXBOXRemoteUser(ulong XUID, ulong deviceID, bool canSendMicSound, bool canSendTextSound, bool canSendText, bool canReceiveSound, bool canReceiveText)`

**Purpose:** Adds x b o x remote user to the current collection or state.

```csharp
// Static call; no instance required
SoundManager.AddXBOXRemoteUser(0, 0, false, false, false, false, false);
```

### InitializeXBOXSoundManager
`public static void InitializeXBOXSoundManager()`

**Purpose:** Prepares the resources, state, or bindings required by x b o x sound manager.

```csharp
// Static call; no instance required
SoundManager.InitializeXBOXSoundManager();
```

### ApplyPushToTalk
`public static void ApplyPushToTalk(bool pushed)`

**Purpose:** Applies the effect of push to talk to the this instance.

```csharp
// Static call; no instance required
SoundManager.ApplyPushToTalk(false);
```

### ClearXBOXSoundManager
`public static void ClearXBOXSoundManager()`

**Purpose:** Removes all x b o x sound manager from the this instance.

```csharp
// Static call; no instance required
SoundManager.ClearXBOXSoundManager();
```

### UpdateXBOXLocalUser
`public static void UpdateXBOXLocalUser()`

**Purpose:** Recalculates and stores the latest representation of x b o x local user.

```csharp
// Static call; no instance required
SoundManager.UpdateXBOXLocalUser();
```

### UpdateXBOXChatCommunicationFlags
`public static void UpdateXBOXChatCommunicationFlags(ulong XUID, bool canSendMicSound, bool canSendTextSound, bool canSendText, bool canReceiveSound, bool canReceiveText)`

**Purpose:** Recalculates and stores the latest representation of x b o x chat communication flags.

```csharp
// Static call; no instance required
SoundManager.UpdateXBOXChatCommunicationFlags(0, false, false, false, false, false);
```

### RemoveXBOXRemoteUser
`public static void RemoveXBOXRemoteUser(ulong XUID)`

**Purpose:** Removes x b o x remote user from the current collection or state.

```csharp
// Static call; no instance required
SoundManager.RemoveXBOXRemoteUser(0);
```

### ProcessDataToBeReceived
`public static void ProcessDataToBeReceived(ulong senderDeviceID, byte data, uint dataSize)`

**Purpose:** Executes the ProcessDataToBeReceived logic.

```csharp
// Static call; no instance required
SoundManager.ProcessDataToBeReceived(0, 0, 0);
```

### ProcessDataToBeSent
`public static void ProcessDataToBeSent(ref int numData)`

**Purpose:** Executes the ProcessDataToBeSent logic.

```csharp
// Static call; no instance required
SoundManager.ProcessDataToBeSent(numData);
```

### HandleStateChanges
`public static void HandleStateChanges()`

**Purpose:** Executes the response logic associated with state changes.

```csharp
// Static call; no instance required
SoundManager.HandleStateChanges();
```

### GetSizeOfDataToBeSentAt
`public static void GetSizeOfDataToBeSentAt(int index, ref uint byteCount, ref uint numReceivers)`

**Purpose:** Reads and returns the size of data to be sent at value held by the this instance.

```csharp
// Static call; no instance required
SoundManager.GetSizeOfDataToBeSentAt(0, byteCount, numReceivers);
```

### GetDataToBeSentAt
`public static bool GetDataToBeSentAt(int index, byte buffer, ulong receivers, ref bool transportGuaranteed)`

**Purpose:** Reads and returns the data to be sent at value held by the this instance.

```csharp
// Static call; no instance required
SoundManager.GetDataToBeSentAt(0, 0, 0, transportGuaranteed);
```

### ClearDataToBeSent
`public static void ClearDataToBeSent()`

**Purpose:** Removes all data to be sent from the this instance.

```csharp
// Static call; no instance required
SoundManager.ClearDataToBeSent();
```

### CompressData
`public static void CompressData(int clientID, byte buffer, int length, byte compressedBuffer, out int compressedBufferLength)`

**Purpose:** Executes the CompressData logic.

```csharp
// Static call; no instance required
SoundManager.CompressData(0, 0, 0, 0, compressedBufferLength);
```

### DecompressData
`public static void DecompressData(int clientID, byte compressedBuffer, int compressedBufferLength, byte decompressedBuffer, out int decompressedBufferLength)`

**Purpose:** Executes the DecompressData logic.

```csharp
// Static call; no instance required
SoundManager.DecompressData(0, 0, 0, 0, decompressedBufferLength);
```

## Usage Example

```csharp
var manager = SoundManager.Current;
```

## See Also

- [Area Index](../)