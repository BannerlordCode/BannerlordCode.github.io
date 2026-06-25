---
title: "SoundManager"
description: "SoundManager 的自动生成类参考。"
---
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

**用途 / Purpose:** 为 「listener frame」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
SoundManager.SetListenerFrame(frame);
```

### SetListenerFrame
`public static void SetListenerFrame(MatrixFrame frame, Vec3 attenuationPosition)`

**用途 / Purpose:** 为 「listener frame」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
SoundManager.SetListenerFrame(frame, attenuationPosition);
```

### GetListenerFrame
`public static MatrixFrame GetListenerFrame()`

**用途 / Purpose:** 读取并返回当前对象中 「listener frame」 的结果。

```csharp
// 静态调用，不需要实例
SoundManager.GetListenerFrame();
```

### GetAttenuationPosition
`public static Vec3 GetAttenuationPosition()`

**用途 / Purpose:** 读取并返回当前对象中 「attenuation position」 的结果。

```csharp
// 静态调用，不需要实例
SoundManager.GetAttenuationPosition();
```

### Reset
`public static void Reset()`

**用途 / Purpose:** 将当前对象重置为默认或初始状态。

```csharp
// 静态调用，不需要实例
SoundManager.Reset();
```

### StartOneShotEvent
`public static bool StartOneShotEvent(string eventFullName, in Vec3 position, string paramName, float paramValue)`

**用途 / Purpose:** 启动「one shot event」流程或状态机。

```csharp
// 静态调用，不需要实例
SoundManager.StartOneShotEvent("example", position, "example", 0);
```

### StartOneShotEvent
`public static bool StartOneShotEvent(string eventFullName, in Vec3 position)`

**用途 / Purpose:** 启动「one shot event」流程或状态机。

```csharp
// 静态调用，不需要实例
SoundManager.StartOneShotEvent("example", position);
```

### SetState
`public static void SetState(string stateGroup, string state)`

**用途 / Purpose:** 为 「state」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
SoundManager.SetState("example", "example");
```

### CreateEvent
`public static SoundEvent CreateEvent(string eventFullName, Scene scene)`

**用途 / Purpose:** 构建一个新的 「event」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
SoundManager.CreateEvent("example", scene);
```

### LoadEventFileAux
`public static void LoadEventFileAux(string soundBank, bool decompressSamples)`

**用途 / Purpose:** 从持久化存储或流中读取 「event file aux」。

```csharp
// 静态调用，不需要实例
SoundManager.LoadEventFileAux("example", false);
```

### AddSoundClientWithId
`public static void AddSoundClientWithId(ulong clientId)`

**用途 / Purpose:** 将 「sound client with id」 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
SoundManager.AddSoundClientWithId(0);
```

### DeleteSoundClientWithId
`public static void DeleteSoundClientWithId(ulong clientId)`

**用途 / Purpose:** 处理与 「delete sound client with id」 相关的逻辑。

```csharp
// 静态调用，不需要实例
SoundManager.DeleteSoundClientWithId(0);
```

### SetGlobalParameter
`public static void SetGlobalParameter(string parameterName, float value)`

**用途 / Purpose:** 为 「global parameter」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
SoundManager.SetGlobalParameter("example", 0);
```

### GetEventGlobalIndex
`public static int GetEventGlobalIndex(string eventFullName)`

**用途 / Purpose:** 读取并返回当前对象中 「event global index」 的结果。

```csharp
// 静态调用，不需要实例
SoundManager.GetEventGlobalIndex("example");
```

### InitializeVoicePlayEvent
`public static void InitializeVoicePlayEvent()`

**用途 / Purpose:** 为 「voice play event」 初始化必要的资源、状态或绑定。

```csharp
// 静态调用，不需要实例
SoundManager.InitializeVoicePlayEvent();
```

### CreateVoiceEvent
`public static void CreateVoiceEvent()`

**用途 / Purpose:** 构建一个新的 「voice event」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
SoundManager.CreateVoiceEvent();
```

### DestroyVoiceEvent
`public static void DestroyVoiceEvent(int id)`

**用途 / Purpose:** 处理与 「destroy voice event」 相关的逻辑。

```csharp
// 静态调用，不需要实例
SoundManager.DestroyVoiceEvent(0);
```

### FinalizeVoicePlayEvent
`public static void FinalizeVoicePlayEvent()`

**用途 / Purpose:** 处理与 「finalize voice play event」 相关的逻辑。

```csharp
// 静态调用，不需要实例
SoundManager.FinalizeVoicePlayEvent();
```

### StartVoiceRecording
`public static void StartVoiceRecording()`

**用途 / Purpose:** 启动「voice recording」流程或状态机。

```csharp
// 静态调用，不需要实例
SoundManager.StartVoiceRecording();
```

### StopVoiceRecording
`public static void StopVoiceRecording()`

**用途 / Purpose:** 停止「voice recording」流程或状态机。

```csharp
// 静态调用，不需要实例
SoundManager.StopVoiceRecording();
```

### GetVoiceData
`public static void GetVoiceData(byte voiceBuffer, int chunkSize, out int readBytesLength)`

**用途 / Purpose:** 读取并返回当前对象中 「voice data」 的结果。

```csharp
// 静态调用，不需要实例
SoundManager.GetVoiceData(0, 0, readBytesLength);
```

### UpdateVoiceToPlay
`public static void UpdateVoiceToPlay(byte voiceBuffer, int length, int index)`

**用途 / Purpose:** 重新计算并更新 「voice to play」 的最新表示。

```csharp
// 静态调用，不需要实例
SoundManager.UpdateVoiceToPlay(0, 0, 0);
```

### AddXBOXRemoteUser
`public static void AddXBOXRemoteUser(ulong XUID, ulong deviceID, bool canSendMicSound, bool canSendTextSound, bool canSendText, bool canReceiveSound, bool canReceiveText)`

**用途 / Purpose:** 将 「x b o x remote user」 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
SoundManager.AddXBOXRemoteUser(0, 0, false, false, false, false, false);
```

### InitializeXBOXSoundManager
`public static void InitializeXBOXSoundManager()`

**用途 / Purpose:** 为 「x b o x sound manager」 初始化必要的资源、状态或绑定。

```csharp
// 静态调用，不需要实例
SoundManager.InitializeXBOXSoundManager();
```

### ApplyPushToTalk
`public static void ApplyPushToTalk(bool pushed)`

**用途 / Purpose:** 将 「push to talk」 的效果应用到当前对象。

```csharp
// 静态调用，不需要实例
SoundManager.ApplyPushToTalk(false);
```

### ClearXBOXSoundManager
`public static void ClearXBOXSoundManager()`

**用途 / Purpose:** 清空当前对象中的「x b o x sound manager」。

```csharp
// 静态调用，不需要实例
SoundManager.ClearXBOXSoundManager();
```

### UpdateXBOXLocalUser
`public static void UpdateXBOXLocalUser()`

**用途 / Purpose:** 重新计算并更新 「x b o x local user」 的最新表示。

```csharp
// 静态调用，不需要实例
SoundManager.UpdateXBOXLocalUser();
```

### UpdateXBOXChatCommunicationFlags
`public static void UpdateXBOXChatCommunicationFlags(ulong XUID, bool canSendMicSound, bool canSendTextSound, bool canSendText, bool canReceiveSound, bool canReceiveText)`

**用途 / Purpose:** 重新计算并更新 「x b o x chat communication flags」 的最新表示。

```csharp
// 静态调用，不需要实例
SoundManager.UpdateXBOXChatCommunicationFlags(0, false, false, false, false, false);
```

### RemoveXBOXRemoteUser
`public static void RemoveXBOXRemoteUser(ulong XUID)`

**用途 / Purpose:** 从当前容器或状态中移除 「x b o x remote user」。

```csharp
// 静态调用，不需要实例
SoundManager.RemoveXBOXRemoteUser(0);
```

### ProcessDataToBeReceived
`public static void ProcessDataToBeReceived(ulong senderDeviceID, byte data, uint dataSize)`

**用途 / Purpose:** 处理与 「process data to be received」 相关的逻辑。

```csharp
// 静态调用，不需要实例
SoundManager.ProcessDataToBeReceived(0, 0, 0);
```

### ProcessDataToBeSent
`public static void ProcessDataToBeSent(ref int numData)`

**用途 / Purpose:** 处理与 「process data to be sent」 相关的逻辑。

```csharp
// 静态调用，不需要实例
SoundManager.ProcessDataToBeSent(numData);
```

### HandleStateChanges
`public static void HandleStateChanges()`

**用途 / Purpose:** 执行与 「state changes」 相关的响应逻辑。

```csharp
// 静态调用，不需要实例
SoundManager.HandleStateChanges();
```

### GetSizeOfDataToBeSentAt
`public static void GetSizeOfDataToBeSentAt(int index, ref uint byteCount, ref uint numReceivers)`

**用途 / Purpose:** 读取并返回当前对象中 「size of data to be sent at」 的结果。

```csharp
// 静态调用，不需要实例
SoundManager.GetSizeOfDataToBeSentAt(0, byteCount, numReceivers);
```

### GetDataToBeSentAt
`public static bool GetDataToBeSentAt(int index, byte buffer, ulong receivers, ref bool transportGuaranteed)`

**用途 / Purpose:** 读取并返回当前对象中 「data to be sent at」 的结果。

```csharp
// 静态调用，不需要实例
SoundManager.GetDataToBeSentAt(0, 0, 0, transportGuaranteed);
```

### ClearDataToBeSent
`public static void ClearDataToBeSent()`

**用途 / Purpose:** 清空当前对象中的「data to be sent」。

```csharp
// 静态调用，不需要实例
SoundManager.ClearDataToBeSent();
```

### CompressData
`public static void CompressData(int clientID, byte buffer, int length, byte compressedBuffer, out int compressedBufferLength)`

**用途 / Purpose:** 获取或维护 「compress data」 数据。

```csharp
// 静态调用，不需要实例
SoundManager.CompressData(0, 0, 0, 0, compressedBufferLength);
```

### DecompressData
`public static void DecompressData(int clientID, byte compressedBuffer, int compressedBufferLength, byte decompressedBuffer, out int decompressedBufferLength)`

**用途 / Purpose:** 获取或维护 「decompress data」 数据。

```csharp
// 静态调用，不需要实例
SoundManager.DecompressData(0, 0, 0, 0, decompressedBufferLength);
```

## 使用示例

```csharp
var manager = SoundManager.Current;
```

## 参见

- [本区域目录](../)