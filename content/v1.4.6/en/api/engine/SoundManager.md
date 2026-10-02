---
title: "SoundManager"
description: "SoundManager: a public class in TaleWorlds.Engine; 40 exposed members (40 methods, 0 properties, 0 fields). Source: TaleWorlds.Engine/SoundManager.cs."
---
# SoundManager

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public static class SoundManager`
**File:** `TaleWorlds.Engine/SoundManager.cs`

## Overview

SoundManager lives in the TaleWorlds.Engine module, source file TaleWorlds.Engine/SoundManager.cs. It is a public class; the inheritance chain is SoundManager. It exposes 40 public/protected members: 40 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SoundManager is a top-level type in TaleWorlds.Engine, namespace matching the module directory; inheritance chain SoundManager. The surface is method-led (methods 40/40, properties 0/40), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Engine/SoundManager.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SetListenerFrame` | `public static void SetListenerFrame(MatrixFrame frame)` | method |
| `SetListenerFrame` | `public static void SetListenerFrame(MatrixFrame frame, Vec3 attenuationPosition)` | method |
| `GetListenerFrame` | `public static MatrixFrame GetListenerFrame()` | method |
| `GetAttenuationPosition` | `public static Vec3 GetAttenuationPosition()` | method |
| `Reset` | `public static void Reset()` | method |
| `StartOneShotEvent` | `public static bool StartOneShotEvent(string eventFullName, in Vec3 position, string paramName, float paramValue)` | method |
| `StartOneShotEvent` | `public static bool StartOneShotEvent(string eventFullName, in Vec3 position)` | method |
| `StartOneShotEventWithIndex` | `public static bool StartOneShotEventWithIndex(int index, in Vec3 position)` | method |
| `SetState` | `public static void SetState(string stateGroup, string state)` | method |
| `CreateEvent` | `public static SoundEvent CreateEvent(string eventFullName, Scene scene)` | method |
| `LoadEventFileAux` | `public static void LoadEventFileAux(string soundBank, bool decompressSamples)` | method |
| `AddSoundClientWithId` | `public static void AddSoundClientWithId(ulong clientId)` | method |
| `DeleteSoundClientWithId` | `public static void DeleteSoundClientWithId(ulong clientId)` | method |
| `SetGlobalParameter` | `public static void SetGlobalParameter(string parameterName, float value)` | method |
| `GetEventGlobalIndex` | `public static int GetEventGlobalIndex(string eventFullName)` | method |
| `PauseBus` | `public static void PauseBus(string busName)` | method |
| `UnpauseBus` | `public static void UnpauseBus(string busName)` | method |
| `InitializeVoicePlayEvent` | `public static void InitializeVoicePlayEvent()` | method |
| `CreateVoiceEvent` | `public static void CreateVoiceEvent()` | method |
| `DestroyVoiceEvent` | `public static void DestroyVoiceEvent(int id)` | method |
| `FinalizeVoicePlayEvent` | `public static void FinalizeVoicePlayEvent()` | method |
| `StartVoiceRecording` | `public static void StartVoiceRecording()` | method |
| `StopVoiceRecording` | `public static void StopVoiceRecording()` | method |
| `GetVoiceData` | `public static void GetVoiceData(byte[]voiceBuffer, int chunkSize, out int readBytesLength)` | method |
| `UpdateVoiceToPlay` | `public static void UpdateVoiceToPlay(byte[]voiceBuffer, int length, int index)` | method |
| `AddXBOXRemoteUser` | `public static void AddXBOXRemoteUser(ulong XUID, ulong deviceID, bool canSendMicSound, bool canSendTextSound, bool canSendText, bool canReceiveSound, bool canReceiveText)` | method |
| `InitializeXBOXSoundManager` | `public static void InitializeXBOXSoundManager()` | method |
| `ApplyPushToTalk` | `public static void ApplyPushToTalk(bool pushed)` | method |
| `ClearXBOXSoundManager` | `public static void ClearXBOXSoundManager()` | method |
| `UpdateXBOXLocalUser` | `public static void UpdateXBOXLocalUser()` | method |
| `UpdateXBOXChatCommunicationFlags` | `public static void UpdateXBOXChatCommunicationFlags(ulong XUID, bool canSendMicSound, bool canSendTextSound, bool canSendText, bool canReceiveSound, bool canReceiveText)` | method |
| `RemoveXBOXRemoteUser` | `public static void RemoveXBOXRemoteUser(ulong XUID)` | method |
| `ProcessDataToBeReceived` | `public static void ProcessDataToBeReceived(ulong senderDeviceID, byte[]data, uint dataSize)` | method |
| `ProcessDataToBeSent` | `public static void ProcessDataToBeSent(ref int numData)` | method |
| `HandleStateChanges` | `public static void HandleStateChanges()` | method |
| `GetSizeOfDataToBeSentAt` | `public static void GetSizeOfDataToBeSentAt(int index, ref uint byteCount, ref uint numReceivers)` | method |
| `GetDataToBeSentAt` | `public static bool GetDataToBeSentAt(int index, byte[]buffer, ulong[]receivers, ref bool transportGuaranteed)` | method |
| `ClearDataToBeSent` | `public static void ClearDataToBeSent()` | method |
| `CompressData` | `public static void CompressData(int clientID, byte[]buffer, int length, byte[]compressedBuffer, out int compressedBufferLength)` | method |
| `DecompressData` | `public static void DecompressData(int clientID, byte[]compressedBuffer, int compressedBufferLength, byte[]decompressedBuffer, out int decompressedBufferLength)` | method |

## See Also

- [↑ engine module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AnimResult](../AnimResult)
- [same namespace ApplicationHealthChecker](../ApplicationHealthChecker)
- [same namespace AsyncTask](../AsyncTask)
- [same namespace BillboardType](../BillboardType)
