---
title: "SoundManager"
description: "SoundManager 的自动生成类参考。"
---
# SoundManager

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public static class SoundManager `
**Base:** System.Object
**Source:** TaleWorlds.Engine/SoundManager.cs

## 概述

`SoundManager` 的自动生成类参考页面。声明来自 `TaleWorlds.Engine/SoundManager.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### SetListenerFrame
`public static void SetListenerFrame(MatrixFrame frame) `
`public static void SetListenerFrame(MatrixFrame frame,Vec3 attenuationPosition) `

### GetListenerFrame
`public static MatrixFrame GetListenerFrame() `

### GetAttenuationPosition
`public static Vec3 GetAttenuationPosition() `

### Reset
`public static void Reset() `

### StartOneShotEvent
`public static bool StartOneShotEvent(string eventFullName,in Vec3 position,string paramName,float paramValue) `
`public static bool StartOneShotEvent(string eventFullName,in Vec3 position) `

### StartOneShotEventWithIndex
`public static bool StartOneShotEventWithIndex(int index,in Vec3 position) `

### SetState
`public static void SetState(string stateGroup,string state) `

### CreateEvent
`public static SoundEvent CreateEvent(string eventFullName,Scene scene) `

### LoadEventFileAux
`public static void LoadEventFileAux(string soundBank,bool decompressSamples) `

### AddSoundClientWithId
`public static void AddSoundClientWithId(ulong clientId) `

### DeleteSoundClientWithId
`public static void DeleteSoundClientWithId(ulong clientId) `

### SetGlobalParameter
`public static void SetGlobalParameter(string parameterName,float value) `

### GetEventGlobalIndex
`public static int GetEventGlobalIndex(string eventFullName) `

### PauseBus
`public static void PauseBus(string busName) `

### UnpauseBus
`public static void UnpauseBus(string busName) `

### InitializeVoicePlayEvent
`public static void InitializeVoicePlayEvent() `

### CreateVoiceEvent
`public static void CreateVoiceEvent() `

### DestroyVoiceEvent
`public static void DestroyVoiceEvent(int id) `

### FinalizeVoicePlayEvent
`public static void FinalizeVoicePlayEvent() `

### StartVoiceRecording
`public static void StartVoiceRecording() `

### StopVoiceRecording
`public static void StopVoiceRecording() `

### GetVoiceData
`public static void GetVoiceData(byte[] voiceBuffer,int chunkSize,out int readBytesLength) `

### UpdateVoiceToPlay
`public static void UpdateVoiceToPlay(byte[] voiceBuffer,int length,int index) `

### AddXBOXRemoteUser
`public static void AddXBOXRemoteUser(ulong XUID,ulong deviceID,bool canSendMicSound,bool canSendTextSound,bool canSendText,bool canReceiveSound,bool canReceiveText) `

### InitializeXBOXSoundManager
`public static void InitializeXBOXSoundManager() `

### ApplyPushToTalk
`public static void ApplyPushToTalk(bool pushed) `

### ClearXBOXSoundManager
`public static void ClearXBOXSoundManager() `

### UpdateXBOXLocalUser
`public static void UpdateXBOXLocalUser() `

### UpdateXBOXChatCommunicationFlags
`public static void UpdateXBOXChatCommunicationFlags(ulong XUID,bool canSendMicSound,bool canSendTextSound,bool canSendText,bool canReceiveSound,bool canReceiveText) `

### RemoveXBOXRemoteUser
`public static void RemoveXBOXRemoteUser(ulong XUID) `

### ProcessDataToBeReceived
`public static void ProcessDataToBeReceived(ulong senderDeviceID,byte[] data,uint dataSize) `

### ProcessDataToBeSent
`public static void ProcessDataToBeSent(ref int numData) `

### HandleStateChanges
`public static void HandleStateChanges() `

### GetSizeOfDataToBeSentAt
`public static void GetSizeOfDataToBeSentAt(int index,ref uint byteCount,ref uint numReceivers) `

### GetDataToBeSentAt
`public static bool GetDataToBeSentAt(int index,byte[] buffer,ulong[] receivers,ref bool transportGuaranteed) `

### ClearDataToBeSent
`public static void ClearDataToBeSent() `

### CompressData
`public static void CompressData(int clientID,byte[] buffer,int length,byte[] compressedBuffer,out int compressedBufferLength) `

### DecompressData
`public static void DecompressData(int clientID,byte[] compressedBuffer,int compressedBufferLength,byte[] decompressedBuffer,out int decompressedBufferLength) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
