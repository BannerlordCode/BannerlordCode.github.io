---
title: "SoundManager"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SoundManager`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SoundManager

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public static class SoundManager`
**Base:** 无
**File:** `TaleWorlds.Engine/SoundManager.cs`

## 概述

`SoundManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `SoundManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### SetListenerFrame
`public static void SetListenerFrame(MatrixFrame frame)`

**用途 / Purpose:** 设置 `listener frame` 的值或状态。

### SetListenerFrame
`public static void SetListenerFrame(MatrixFrame frame, Vec3 attenuationPosition)`

**用途 / Purpose:** 设置 `listener frame` 的值或状态。

### GetListenerFrame
`public static MatrixFrame GetListenerFrame()`

**用途 / Purpose:** 获取 `listener frame` 的当前值。

### GetAttenuationPosition
`public static Vec3 GetAttenuationPosition()`

**用途 / Purpose:** 获取 `attenuation position` 的当前值。

### Reset
`public static void Reset()`

**用途 / Purpose:** 将 `reset` 重置为初始状态。

### StartOneShotEvent
`public static bool StartOneShotEvent(string eventFullName, in Vec3 position, string paramName, float paramValue)`

**用途 / Purpose:** 处理 `start one shot event` 相关逻辑。

### StartOneShotEvent
`public static bool StartOneShotEvent(string eventFullName, in Vec3 position)`

**用途 / Purpose:** 处理 `start one shot event` 相关逻辑。

### StartOneShotEventWithIndex
`public static bool StartOneShotEventWithIndex(int index, in Vec3 position)`

**用途 / Purpose:** 处理 `start one shot event with index` 相关逻辑。

### SetState
`public static void SetState(string stateGroup, string state)`

**用途 / Purpose:** 设置 `state` 的值或状态。

### CreateEvent
`public static SoundEvent CreateEvent(string eventFullName, Scene scene)`

**用途 / Purpose:** 创建一个 `event` 实例或对象。

### LoadEventFileAux
`public static void LoadEventFileAux(string soundBank, bool decompressSamples)`

**用途 / Purpose:** 加载 `event file aux` 数据。

### AddSoundClientWithId
`public static void AddSoundClientWithId(ulong clientId)`

**用途 / Purpose:** 向当前集合/状态中添加 `sound client with id`。

### DeleteSoundClientWithId
`public static void DeleteSoundClientWithId(ulong clientId)`

**用途 / Purpose:** 处理 `delete sound client with id` 相关逻辑。

### SetGlobalParameter
`public static void SetGlobalParameter(string parameterName, float value)`

**用途 / Purpose:** 设置 `global parameter` 的值或状态。

### GetEventGlobalIndex
`public static int GetEventGlobalIndex(string eventFullName)`

**用途 / Purpose:** 获取 `event global index` 的当前值。

### PauseBus
`public static void PauseBus(string busName)`

**用途 / Purpose:** 处理 `pause bus` 相关逻辑。

### UnpauseBus
`public static void UnpauseBus(string busName)`

**用途 / Purpose:** 处理 `unpause bus` 相关逻辑。

### InitializeVoicePlayEvent
`public static void InitializeVoicePlayEvent()`

**用途 / Purpose:** 初始化 `voice play event` 的状态、资源或绑定。

### CreateVoiceEvent
`public static void CreateVoiceEvent()`

**用途 / Purpose:** 创建一个 `voice event` 实例或对象。

### DestroyVoiceEvent
`public static void DestroyVoiceEvent(int id)`

**用途 / Purpose:** 处理 `destroy voice event` 相关逻辑。

### FinalizeVoicePlayEvent
`public static void FinalizeVoicePlayEvent()`

**用途 / Purpose:** 处理 `finalize voice play event` 相关逻辑。

### StartVoiceRecording
`public static void StartVoiceRecording()`

**用途 / Purpose:** 处理 `start voice recording` 相关逻辑。

### StopVoiceRecording
`public static void StopVoiceRecording()`

**用途 / Purpose:** 处理 `stop voice recording` 相关逻辑。

### GetVoiceData
`public static void GetVoiceData(byte voiceBuffer, int chunkSize, out int readBytesLength)`

**用途 / Purpose:** 获取 `voice data` 的当前值。

### UpdateVoiceToPlay
`public static void UpdateVoiceToPlay(byte voiceBuffer, int length, int index)`

**用途 / Purpose:** 更新 `voice to play` 的状态或数据。

### AddXBOXRemoteUser
`public static void AddXBOXRemoteUser(ulong XUID, ulong deviceID, bool canSendMicSound, bool canSendTextSound, bool canSendText, bool canReceiveSound, bool canReceiveText)`

**用途 / Purpose:** 向当前集合/状态中添加 `x b o x remote user`。

### InitializeXBOXSoundManager
`public static void InitializeXBOXSoundManager()`

**用途 / Purpose:** 初始化 `x b o x sound manager` 的状态、资源或绑定。

### ApplyPushToTalk
`public static void ApplyPushToTalk(bool pushed)`

**用途 / Purpose:** 将 `push to talk` 应用到当前对象。

### ClearXBOXSoundManager
`public static void ClearXBOXSoundManager()`

**用途 / Purpose:** 处理 `clear x b o x sound manager` 相关逻辑。

### UpdateXBOXLocalUser
`public static void UpdateXBOXLocalUser()`

**用途 / Purpose:** 更新 `x b o x local user` 的状态或数据。

### UpdateXBOXChatCommunicationFlags
`public static void UpdateXBOXChatCommunicationFlags(ulong XUID, bool canSendMicSound, bool canSendTextSound, bool canSendText, bool canReceiveSound, bool canReceiveText)`

**用途 / Purpose:** 更新 `x b o x chat communication flags` 的状态或数据。

### RemoveXBOXRemoteUser
`public static void RemoveXBOXRemoteUser(ulong XUID)`

**用途 / Purpose:** 从当前集合/状态中移除 `x b o x remote user`。

### ProcessDataToBeReceived
`public static void ProcessDataToBeReceived(ulong senderDeviceID, byte data, uint dataSize)`

**用途 / Purpose:** 处理 `process data to be received` 相关逻辑。

### ProcessDataToBeSent
`public static void ProcessDataToBeSent(ref int numData)`

**用途 / Purpose:** 处理 `process data to be sent` 相关逻辑。

### HandleStateChanges
`public static void HandleStateChanges()`

**用途 / Purpose:** 处理 `state changes` 事件或回调。

### GetSizeOfDataToBeSentAt
`public static void GetSizeOfDataToBeSentAt(int index, ref uint byteCount, ref uint numReceivers)`

**用途 / Purpose:** 获取 `size of data to be sent at` 的当前值。

### GetDataToBeSentAt
`public static bool GetDataToBeSentAt(int index, byte buffer, ulong receivers, ref bool transportGuaranteed)`

**用途 / Purpose:** 获取 `data to be sent at` 的当前值。

### ClearDataToBeSent
`public static void ClearDataToBeSent()`

**用途 / Purpose:** 处理 `clear data to be sent` 相关逻辑。

### CompressData
`public static void CompressData(int clientID, byte buffer, int length, byte compressedBuffer, out int compressedBufferLength)`

**用途 / Purpose:** 处理 `compress data` 相关逻辑。

### DecompressData
`public static void DecompressData(int clientID, byte compressedBuffer, int compressedBufferLength, byte decompressedBuffer, out int decompressedBufferLength)`

**用途 / Purpose:** 处理 `decompress data` 相关逻辑。

## 使用示例

```csharp
var manager = SoundManager.Current;
```

## 参见

- [完整类目录](../catalog)