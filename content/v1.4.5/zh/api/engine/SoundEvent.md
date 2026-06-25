---
title: "SoundEvent"
description: "SoundEvent 的自动生成类参考。"
---
# SoundEvent

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public class SoundEvent`
**Base:** 无
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine/SoundEvent.cs`

## 概述

`SoundEvent` 位于 `TaleWorlds.Engine`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Engine` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsValid` | `public bool IsValid { get; }` |

## 主要方法

### GetSoundId
`public int GetSoundId()`

**用途 / Purpose:** 读取并返回当前对象中 sound id 的结果。

```csharp
// 先通过子系统 API 拿到 SoundEvent 实例
SoundEvent soundEvent = ...;
var result = soundEvent.GetSoundId();
```

### CreateEventFromString
`public static SoundEvent CreateEventFromString(string eventId, Scene scene)`

**用途 / Purpose:** 构建一个新的 event from string 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
SoundEvent.CreateEventFromString("example", scene);
```

### SetEventMinMaxDistance
`public void SetEventMinMaxDistance(Vec3 newRadius)`

**用途 / Purpose:** 为 event min max distance 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SoundEvent 实例
SoundEvent soundEvent = ...;
soundEvent.SetEventMinMaxDistance(newRadius);
```

### GetEventIdFromString
`public static int GetEventIdFromString(string name)`

**用途 / Purpose:** 读取并返回当前对象中 event id from string 的结果。

```csharp
// 静态调用，不需要实例
SoundEvent.GetEventIdFromString("example");
```

### PlaySound2D
`public static bool PlaySound2D(int soundCodeId)`

**用途 / Purpose:** 调用 PlaySound2D 对应的操作。

```csharp
// 静态调用，不需要实例
SoundEvent.PlaySound2D(0);
```

### PlaySound2D
`public static bool PlaySound2D(string soundName)`

**用途 / Purpose:** 调用 PlaySound2D 对应的操作。

```csharp
// 静态调用，不需要实例
SoundEvent.PlaySound2D("example");
```

### GetTotalEventCount
`public static int GetTotalEventCount()`

**用途 / Purpose:** 读取并返回当前对象中 total event count 的结果。

```csharp
// 静态调用，不需要实例
SoundEvent.GetTotalEventCount();
```

### CreateEvent
`public static SoundEvent CreateEvent(int soundCodeId, Scene scene)`

**用途 / Purpose:** 构建一个新的 event 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
SoundEvent.CreateEvent(0, scene);
```

### IsNullSoundEvent
`public bool IsNullSoundEvent()`

**用途 / Purpose:** 判断当前对象是否处于 null sound event 状态或条件。

```csharp
// 先通过子系统 API 拿到 SoundEvent 实例
SoundEvent soundEvent = ...;
var result = soundEvent.IsNullSoundEvent();
```

### Play
`public bool Play()`

**用途 / Purpose:** 调用 Play 对应的操作。

```csharp
// 先通过子系统 API 拿到 SoundEvent 实例
SoundEvent soundEvent = ...;
var result = soundEvent.Play();
```

### Pause
`public void Pause()`

**用途 / Purpose:** 调用 Pause 对应的操作。

```csharp
// 先通过子系统 API 拿到 SoundEvent 实例
SoundEvent soundEvent = ...;
soundEvent.Pause();
```

### Resume
`public void Resume()`

**用途 / Purpose:** 调用 Resume 对应的操作。

```csharp
// 先通过子系统 API 拿到 SoundEvent 实例
SoundEvent soundEvent = ...;
soundEvent.Resume();
```

### PlayExtraEvent
`public void PlayExtraEvent(string eventName)`

**用途 / Purpose:** 调用 PlayExtraEvent 对应的操作。

```csharp
// 先通过子系统 API 拿到 SoundEvent 实例
SoundEvent soundEvent = ...;
soundEvent.PlayExtraEvent("example");
```

### SetSwitch
`public void SetSwitch(string switchGroupName, string newSwitchStateName)`

**用途 / Purpose:** 为 switch 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SoundEvent 实例
SoundEvent soundEvent = ...;
soundEvent.SetSwitch("example", "example");
```

### TriggerCue
`public void TriggerCue()`

**用途 / Purpose:** 触发cue对应的逻辑或事件。

```csharp
// 先通过子系统 API 拿到 SoundEvent 实例
SoundEvent soundEvent = ...;
soundEvent.TriggerCue();
```

### PlayInPosition
`public bool PlayInPosition(Vec3 position)`

**用途 / Purpose:** 调用 PlayInPosition 对应的操作。

```csharp
// 先通过子系统 API 拿到 SoundEvent 实例
SoundEvent soundEvent = ...;
var result = soundEvent.PlayInPosition(position);
```

### Stop
`public void Stop()`

**用途 / Purpose:** 停止当前对象的流程或状态机。

```csharp
// 先通过子系统 API 拿到 SoundEvent 实例
SoundEvent soundEvent = ...;
soundEvent.Stop();
```

### SetParameter
`public void SetParameter(string parameterName, float value)`

**用途 / Purpose:** 为 parameter 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SoundEvent 实例
SoundEvent soundEvent = ...;
soundEvent.SetParameter("example", 0);
```

### SetParameter
`public void SetParameter(int parameterIndex, float value)`

**用途 / Purpose:** 为 parameter 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SoundEvent 实例
SoundEvent soundEvent = ...;
soundEvent.SetParameter(0, 0);
```

### GetEventMinMaxDistance
`public Vec3 GetEventMinMaxDistance()`

**用途 / Purpose:** 读取并返回当前对象中 event min max distance 的结果。

```csharp
// 先通过子系统 API 拿到 SoundEvent 实例
SoundEvent soundEvent = ...;
var result = soundEvent.GetEventMinMaxDistance();
```

### SetPosition
`public void SetPosition(Vec3 vec)`

**用途 / Purpose:** 为 position 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SoundEvent 实例
SoundEvent soundEvent = ...;
soundEvent.SetPosition(vec);
```

### SetVelocity
`public void SetVelocity(Vec3 vec)`

**用途 / Purpose:** 为 velocity 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SoundEvent 实例
SoundEvent soundEvent = ...;
soundEvent.SetVelocity(vec);
```

### Release
`public void Release()`

**用途 / Purpose:** 调用 Release 对应的操作。

```csharp
// 先通过子系统 API 拿到 SoundEvent 实例
SoundEvent soundEvent = ...;
soundEvent.Release();
```

### IsPlaying
`public bool IsPlaying()`

**用途 / Purpose:** 判断当前对象是否处于 playing 状态或条件。

```csharp
// 先通过子系统 API 拿到 SoundEvent 实例
SoundEvent soundEvent = ...;
var result = soundEvent.IsPlaying();
```

### IsPaused
`public bool IsPaused()`

**用途 / Purpose:** 判断当前对象是否处于 paused 状态或条件。

```csharp
// 先通过子系统 API 拿到 SoundEvent 实例
SoundEvent soundEvent = ...;
var result = soundEvent.IsPaused();
```

### IsStopped
`public bool IsStopped()`

**用途 / Purpose:** 判断当前对象是否处于 stopped 状态或条件。

```csharp
// 先通过子系统 API 拿到 SoundEvent 实例
SoundEvent soundEvent = ...;
var result = soundEvent.IsStopped();
```

### CreateEventFromSoundBuffer
`public static SoundEvent CreateEventFromSoundBuffer(string eventId, byte soundData, Scene scene, bool is3d, bool isBlocking)`

**用途 / Purpose:** 构建一个新的 event from sound buffer 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
SoundEvent.CreateEventFromSoundBuffer("example", 0, scene, false, false);
```

### CreateEventFromExternalFile
`public static SoundEvent CreateEventFromExternalFile(string programmerEventName, string soundFilePath, Scene scene, bool is3d, bool isBlocking)`

**用途 / Purpose:** 构建一个新的 event from external file 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
SoundEvent.CreateEventFromExternalFile("example", "example", scene, false, false);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
SoundEvent soundEvent = ...;
soundEvent.GetSoundId();
```

## 参见

- [本区域目录](../)