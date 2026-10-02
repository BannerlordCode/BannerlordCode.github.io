---
title: "SoundManager"
description: "SoundManager：TaleWorlds.Engine 的 public 类；公开成员 40 个（方法 40、属性 0、字段 0）。canonical 桶 engine。源文件 TaleWorlds.Engine/SoundManager.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SoundManager

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public static class SoundManager`
**File:** `TaleWorlds.Engine/SoundManager.cs`
**Bucket:** `engine` (rule:TaleWorlds.Engine)

## 概述

SoundManager 位于 TaleWorlds.Engine 模块，源文件 TaleWorlds.Engine/SoundManager.cs。它是一个 public 类，继承链为 SoundManager。public/protected 成员共 40 个：40 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SoundManager 落在 canonical 桶 `engine`（命中规则 `rule:TaleWorlds.Engine`），命名空间 `TaleWorlds.Engine`，继承链 SoundManager。成员构成以方法为主（方法 40/40，属性 0/40），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Engine/SoundManager.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SetListenerFrame` | `public static void SetListenerFrame(MatrixFrame frame)` | 方法 |
| `SetListenerFrame` | `public static void SetListenerFrame(MatrixFrame frame, Vec3 attenuationPosition)` | 方法 |
| `GetListenerFrame` | `public static MatrixFrame GetListenerFrame()` | 方法 |
| `GetAttenuationPosition` | `public static Vec3 GetAttenuationPosition()` | 方法 |
| `Reset` | `public static void Reset()` | 方法 |
| `StartOneShotEvent` | `public static bool StartOneShotEvent(string eventFullName, in Vec3 position, string paramName, float paramValue)` | 方法 |
| `StartOneShotEvent` | `public static bool StartOneShotEvent(string eventFullName, in Vec3 position)` | 方法 |
| `StartOneShotEventWithIndex` | `public static bool StartOneShotEventWithIndex(int index, in Vec3 position)` | 方法 |
| `SetState` | `public static void SetState(string stateGroup, string state)` | 方法 |
| `CreateEvent` | `public static SoundEvent CreateEvent(string eventFullName, Scene scene)` | 方法 |
| `LoadEventFileAux` | `public static void LoadEventFileAux(string soundBank, bool decompressSamples)` | 方法 |
| `AddSoundClientWithId` | `public static void AddSoundClientWithId(ulong clientId)` | 方法 |
| `DeleteSoundClientWithId` | `public static void DeleteSoundClientWithId(ulong clientId)` | 方法 |
| `SetGlobalParameter` | `public static void SetGlobalParameter(string parameterName, float value)` | 方法 |
| `GetEventGlobalIndex` | `public static int GetEventGlobalIndex(string eventFullName)` | 方法 |
| `PauseBus` | `public static void PauseBus(string busName)` | 方法 |
| `UnpauseBus` | `public static void UnpauseBus(string busName)` | 方法 |
| `InitializeVoicePlayEvent` | `public static void InitializeVoicePlayEvent()` | 方法 |
| `CreateVoiceEvent` | `public static void CreateVoiceEvent()` | 方法 |
| `DestroyVoiceEvent` | `public static void DestroyVoiceEvent(int id)` | 方法 |
| `FinalizeVoicePlayEvent` | `public static void FinalizeVoicePlayEvent()` | 方法 |
| `StartVoiceRecording` | `public static void StartVoiceRecording()` | 方法 |
| `StopVoiceRecording` | `public static void StopVoiceRecording()` | 方法 |
| `GetVoiceData` | `public static void GetVoiceData(byte[]voiceBuffer, int chunkSize, out int readBytesLength)` | 方法 |
| `UpdateVoiceToPlay` | `public static void UpdateVoiceToPlay(byte[]voiceBuffer, int length, int index)` | 方法 |
| `AddXBOXRemoteUser` | `public static void AddXBOXRemoteUser(ulong XUID, ulong deviceID, bool canSendMicSound, bool canSendTextSound, bool canSendText, bool canReceiveSound, bool canReceiveText)` | 方法 |
| `InitializeXBOXSoundManager` | `public static void InitializeXBOXSoundManager()` | 方法 |
| `ApplyPushToTalk` | `public static void ApplyPushToTalk(bool pushed)` | 方法 |
| `ClearXBOXSoundManager` | `public static void ClearXBOXSoundManager()` | 方法 |
| `UpdateXBOXLocalUser` | `public static void UpdateXBOXLocalUser()` | 方法 |
| `UpdateXBOXChatCommunicationFlags` | `public static void UpdateXBOXChatCommunicationFlags(ulong XUID, bool canSendMicSound, bool canSendTextSound, bool canSendText, bool canReceiveSound, bool canReceiveText)` | 方法 |
| `RemoveXBOXRemoteUser` | `public static void RemoveXBOXRemoteUser(ulong XUID)` | 方法 |
| `ProcessDataToBeReceived` | `public static void ProcessDataToBeReceived(ulong senderDeviceID, byte[]data, uint dataSize)` | 方法 |
| `ProcessDataToBeSent` | `public static void ProcessDataToBeSent(ref int numData)` | 方法 |
| `HandleStateChanges` | `public static void HandleStateChanges()` | 方法 |
| `GetSizeOfDataToBeSentAt` | `public static void GetSizeOfDataToBeSentAt(int index, ref uint byteCount, ref uint numReceivers)` | 方法 |
| `GetDataToBeSentAt` | `public static bool GetDataToBeSentAt(int index, byte[]buffer, ulong[]receivers, ref bool transportGuaranteed)` | 方法 |
| `ClearDataToBeSent` | `public static void ClearDataToBeSent()` | 方法 |
| `CompressData` | `public static void CompressData(int clientID, byte[]buffer, int length, byte[]compressedBuffer, out int compressedBufferLength)` | 方法 |
| `DecompressData` | `public static void DecompressData(int clientID, byte[]compressedBuffer, int compressedBufferLength, byte[]decompressedBuffer, out int decompressedBufferLength)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 AnimResult](../AnimResult/)
- [同命名空间 ApplicationHealthChecker](../ApplicationHealthChecker/)
- [同命名空间 AsyncTask](../AsyncTask/)
- [同命名空间 BillboardType](../BillboardType/)
