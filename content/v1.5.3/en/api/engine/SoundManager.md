---
title: "SoundManager"
description: "Auto-generated class reference for SoundManager."
---
# SoundManager

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public static class SoundManager `
**Base:** System.Object
**Source:** TaleWorlds.Engine/SoundManager.cs

## Overview

Auto-generated stub for `SoundManager`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### SetListenerFrame
`public static void SetListenerFrame(MatrixFrame frame)`

### GetListenerFrame
`public static MatrixFrame GetListenerFrame()`

### GetAttenuationPosition
`public static Vec3 GetAttenuationPosition()`

### Reset
`public static void Reset()`

### StartOneShotEvent
`public static bool StartOneShotEvent(string eventFullName,in Vec3 position,string paramName,float paramValue)`

### StartOneShotEventWithIndex
`public static bool StartOneShotEventWithIndex(int index,in Vec3 position)`

### SetState
`public static void SetState(string stateGroup,string state)`

### CreateEvent
`public static SoundEvent CreateEvent(string eventFullName,Scene scene)`

### LoadEventFileAux
`public static void LoadEventFileAux(string soundBank,bool decompressSamples)`

### AddSoundClientWithId
`public static void AddSoundClientWithId(ulong clientId)`

### DeleteSoundClientWithId
`public static void DeleteSoundClientWithId(ulong clientId)`

### SetGlobalParameter
`public static void SetGlobalParameter(string parameterName,float value)`

### GetEventGlobalIndex
`public static int GetEventGlobalIndex(string eventFullName)`

### PauseBus
`public static void PauseBus(string busName)`

### UnpauseBus
`public static void UnpauseBus(string busName)`

### InitializeVoicePlayEvent
`public static void InitializeVoicePlayEvent()`

### CreateVoiceEvent
`public static void CreateVoiceEvent()`

### DestroyVoiceEvent
`public static void DestroyVoiceEvent(int id)`

### FinalizeVoicePlayEvent
`public static void FinalizeVoicePlayEvent()`

### StartVoiceRecording
`public static void StartVoiceRecording()`

### StopVoiceRecording
`public static void StopVoiceRecording()`

### GetVoiceData
`public static void GetVoiceData(byte[] voiceBuffer,int chunkSize,out int readBytesLength)`

### UpdateVoiceToPlay
`public static void UpdateVoiceToPlay(byte[] voiceBuffer,int length,int index)`

### AddXBOXRemoteUser
`public static void AddXBOXRemoteUser(ulong XUID,ulong deviceID,bool canSendMicSound,bool canSendTextSound,bool canSendText,bool canReceiveSound,bool canReceiveText)`

### InitializeXBOXSoundManager
`public static void InitializeXBOXSoundManager()`

### ApplyPushToTalk
`public static void ApplyPushToTalk(bool pushed)`

### ClearXBOXSoundManager
`public static void ClearXBOXSoundManager()`

### UpdateXBOXLocalUser
`public static void UpdateXBOXLocalUser()`

### UpdateXBOXChatCommunicationFlags
`public static void UpdateXBOXChatCommunicationFlags(ulong XUID,bool canSendMicSound,bool canSendTextSound,bool canSendText,bool canReceiveSound,bool canReceiveText)`

### RemoveXBOXRemoteUser
`public static void RemoveXBOXRemoteUser(ulong XUID)`

### ProcessDataToBeReceived
`public static void ProcessDataToBeReceived(ulong senderDeviceID,byte[] data,uint dataSize)`

### ProcessDataToBeSent
`public static void ProcessDataToBeSent(ref int numData)`

### HandleStateChanges
`public static void HandleStateChanges()`

### GetSizeOfDataToBeSentAt
`public static void GetSizeOfDataToBeSentAt(int index,ref uint byteCount,ref uint numReceivers)`

### GetDataToBeSentAt
`public static bool GetDataToBeSentAt(int index,byte[] buffer,ulong[] receivers,ref bool transportGuaranteed)`

### ClearDataToBeSent
`public static void ClearDataToBeSent()`

### CompressData
`public static void CompressData(int clientID,byte[] buffer,int length,byte[] compressedBuffer,out int compressedBufferLength)`

### DecompressData
`public static void DecompressData(int clientID,byte[] compressedBuffer,int compressedBufferLength,byte[] decompressedBuffer,out int decompressedBufferLength)`

## See Also

- [Section index](../)
