---
title: "SoundManager"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SoundManager`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Sets the value or state of `listener frame`.

### SetListenerFrame
`public static void SetListenerFrame(MatrixFrame frame, Vec3 attenuationPosition)`

**Purpose:** Sets the value or state of `listener frame`.

### GetListenerFrame
`public static MatrixFrame GetListenerFrame()`

**Purpose:** Gets the current value of `listener frame`.

### GetAttenuationPosition
`public static Vec3 GetAttenuationPosition()`

**Purpose:** Gets the current value of `attenuation position`.

### Reset
`public static void Reset()`

**Purpose:** Resets `reset` to its initial state.

### StartOneShotEvent
`public static bool StartOneShotEvent(string eventFullName, in Vec3 position, string paramName, float paramValue)`

**Purpose:** Handles logic related to `start one shot event`.

### StartOneShotEvent
`public static bool StartOneShotEvent(string eventFullName, in Vec3 position)`

**Purpose:** Handles logic related to `start one shot event`.

### SetState
`public static void SetState(string stateGroup, string state)`

**Purpose:** Sets the value or state of `state`.

### CreateEvent
`public static SoundEvent CreateEvent(string eventFullName, Scene scene)`

**Purpose:** Creates a new `event` instance or object.

### LoadEventFileAux
`public static void LoadEventFileAux(string soundBank, bool decompressSamples)`

**Purpose:** Loads `event file aux` data.

### AddSoundClientWithId
`public static void AddSoundClientWithId(ulong clientId)`

**Purpose:** Adds `sound client with id` to the current collection or state.

### DeleteSoundClientWithId
`public static void DeleteSoundClientWithId(ulong clientId)`

**Purpose:** Handles logic related to `delete sound client with id`.

### SetGlobalParameter
`public static void SetGlobalParameter(string parameterName, float value)`

**Purpose:** Sets the value or state of `global parameter`.

### GetEventGlobalIndex
`public static int GetEventGlobalIndex(string eventFullName)`

**Purpose:** Gets the current value of `event global index`.

### InitializeVoicePlayEvent
`public static void InitializeVoicePlayEvent()`

**Purpose:** Initializes the state, resources, or bindings for `voice play event`.

### CreateVoiceEvent
`public static void CreateVoiceEvent()`

**Purpose:** Creates a new `voice event` instance or object.

### DestroyVoiceEvent
`public static void DestroyVoiceEvent(int id)`

**Purpose:** Handles logic related to `destroy voice event`.

### FinalizeVoicePlayEvent
`public static void FinalizeVoicePlayEvent()`

**Purpose:** Handles logic related to `finalize voice play event`.

### StartVoiceRecording
`public static void StartVoiceRecording()`

**Purpose:** Handles logic related to `start voice recording`.

### StopVoiceRecording
`public static void StopVoiceRecording()`

**Purpose:** Handles logic related to `stop voice recording`.

### GetVoiceData
`public static void GetVoiceData(byte voiceBuffer, int chunkSize, out int readBytesLength)`

**Purpose:** Gets the current value of `voice data`.

### UpdateVoiceToPlay
`public static void UpdateVoiceToPlay(byte voiceBuffer, int length, int index)`

**Purpose:** Updates the state or data of `voice to play`.

### AddXBOXRemoteUser
`public static void AddXBOXRemoteUser(ulong XUID, ulong deviceID, bool canSendMicSound, bool canSendTextSound, bool canSendText, bool canReceiveSound, bool canReceiveText)`

**Purpose:** Adds `x b o x remote user` to the current collection or state.

### InitializeXBOXSoundManager
`public static void InitializeXBOXSoundManager()`

**Purpose:** Initializes the state, resources, or bindings for `x b o x sound manager`.

### ApplyPushToTalk
`public static void ApplyPushToTalk(bool pushed)`

**Purpose:** Applies `push to talk` to the current object.

### ClearXBOXSoundManager
`public static void ClearXBOXSoundManager()`

**Purpose:** Handles logic related to `clear x b o x sound manager`.

### UpdateXBOXLocalUser
`public static void UpdateXBOXLocalUser()`

**Purpose:** Updates the state or data of `x b o x local user`.

### UpdateXBOXChatCommunicationFlags
`public static void UpdateXBOXChatCommunicationFlags(ulong XUID, bool canSendMicSound, bool canSendTextSound, bool canSendText, bool canReceiveSound, bool canReceiveText)`

**Purpose:** Updates the state or data of `x b o x chat communication flags`.

### RemoveXBOXRemoteUser
`public static void RemoveXBOXRemoteUser(ulong XUID)`

**Purpose:** Removes `x b o x remote user` from the current collection or state.

### ProcessDataToBeReceived
`public static void ProcessDataToBeReceived(ulong senderDeviceID, byte data, uint dataSize)`

**Purpose:** Handles logic related to `process data to be received`.

### ProcessDataToBeSent
`public static void ProcessDataToBeSent(ref int numData)`

**Purpose:** Handles logic related to `process data to be sent`.

### HandleStateChanges
`public static void HandleStateChanges()`

**Purpose:** Handles the `state changes` event or callback.

### GetSizeOfDataToBeSentAt
`public static void GetSizeOfDataToBeSentAt(int index, ref uint byteCount, ref uint numReceivers)`

**Purpose:** Gets the current value of `size of data to be sent at`.

### GetDataToBeSentAt
`public static bool GetDataToBeSentAt(int index, byte buffer, ulong receivers, ref bool transportGuaranteed)`

**Purpose:** Gets the current value of `data to be sent at`.

### ClearDataToBeSent
`public static void ClearDataToBeSent()`

**Purpose:** Handles logic related to `clear data to be sent`.

### CompressData
`public static void CompressData(int clientID, byte buffer, int length, byte compressedBuffer, out int compressedBufferLength)`

**Purpose:** Handles logic related to `compress data`.

### DecompressData
`public static void DecompressData(int clientID, byte compressedBuffer, int compressedBufferLength, byte decompressedBuffer, out int decompressedBufferLength)`

**Purpose:** Handles logic related to `decompress data`.

## Usage Example

```csharp
var manager = SoundManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)