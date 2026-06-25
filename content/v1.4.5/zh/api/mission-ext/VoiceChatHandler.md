---
title: "VoiceChatHandler"
description: "VoiceChatHandler 的自动生成类参考。"
---
# VoiceChatHandler

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class VoiceChatHandler : MissionNetwork`
**Base:** `MissionNetwork`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/VoiceChatHandler.cs`

## 概述

`VoiceChatHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `VoiceChatHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsReadyOnPlatform` | `public bool IsReadyOnPlatform { get; }` |

## 主要方法

### WriteVoiceData
`public void WriteVoiceData(byte dataBuffer, int bufferSize)`

**用途 / Purpose:** 将「voice data」写入目标位置。

```csharp
// 先通过子系统 API 拿到 VoiceChatHandler 实例
VoiceChatHandler voiceChatHandler = ...;
voiceChatHandler.WriteVoiceData(0, 0);
```

### SetReadyOnPlatform
`public void SetReadyOnPlatform()`

**用途 / Purpose:** 为 「ready on platform」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 VoiceChatHandler 实例
VoiceChatHandler voiceChatHandler = ...;
voiceChatHandler.SetReadyOnPlatform();
```

### ProcessVoiceData
`public bool ProcessVoiceData()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 VoiceChatHandler 实例
VoiceChatHandler voiceChatHandler = ...;
var result = voiceChatHandler.ProcessVoiceData();
```

### GetVoiceToPlayForTick
`public Queue<short> GetVoiceToPlayForTick()`

**用途 / Purpose:** 读取并返回当前对象中 「voice to play for tick」 的结果。

```csharp
// 先通过子系统 API 拿到 VoiceChatHandler 实例
VoiceChatHandler voiceChatHandler = ...;
var result = voiceChatHandler.GetVoiceToPlayForTick();
```

### HasAnyVoiceData
`public bool HasAnyVoiceData()`

**用途 / Purpose:** 判断当前对象是否已经持有 「any voice data」。

```csharp
// 先通过子系统 API 拿到 VoiceChatHandler 实例
VoiceChatHandler voiceChatHandler = ...;
var result = voiceChatHandler.HasAnyVoiceData();
```

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 在 「behavior initialize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 VoiceChatHandler 实例
VoiceChatHandler voiceChatHandler = ...;
voiceChatHandler.OnBehaviorInitialize();
```

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 VoiceChatHandler 实例
VoiceChatHandler voiceChatHandler = ...;
voiceChatHandler.AfterStart();
```

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**用途 / Purpose:** 在 「remove behavior」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 VoiceChatHandler 实例
VoiceChatHandler voiceChatHandler = ...;
voiceChatHandler.OnRemoveBehavior();
```

### OnPreDisplayMissionTick
`public override void OnPreDisplayMissionTick(float dt)`

**用途 / Purpose:** 在 「pre display mission tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 VoiceChatHandler 实例
VoiceChatHandler voiceChatHandler = ...;
voiceChatHandler.OnPreDisplayMissionTick(0);
```

### OnPlayerDisconnectedFromServer
`public override void OnPlayerDisconnectedFromServer(NetworkCommunicator networkPeer)`

**用途 / Purpose:** 在 「player disconnected from server」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 VoiceChatHandler 实例
VoiceChatHandler voiceChatHandler = ...;
voiceChatHandler.OnPlayerDisconnectedFromServer(networkPeer);
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<VoiceChatHandler>();
```

## 参见

- [本区域目录](../)