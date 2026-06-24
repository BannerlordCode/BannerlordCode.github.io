<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SoundEvent`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SoundEvent

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public class SoundEvent`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.Engine/TaleWorlds.Engine/SoundEvent.cs`

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

**用途 / Purpose:** 获取 `sound id` 的当前值。

### CreateEventFromString
`public static SoundEvent CreateEventFromString(string eventId, Scene scene)`

**用途 / Purpose:** 创建一个 `event from string` 实例或对象。

### SetEventMinMaxDistance
`public void SetEventMinMaxDistance(Vec3 newRadius)`

**用途 / Purpose:** 设置 `event min max distance` 的值或状态。

### GetEventIdFromString
`public static int GetEventIdFromString(string name)`

**用途 / Purpose:** 获取 `event id from string` 的当前值。

### PlaySound2D
`public static bool PlaySound2D(int soundCodeId)`

**用途 / Purpose:** 处理 `play sound2 d` 相关逻辑。

### PlaySound2D
`public static bool PlaySound2D(string soundName)`

**用途 / Purpose:** 处理 `play sound2 d` 相关逻辑。

### GetTotalEventCount
`public static int GetTotalEventCount()`

**用途 / Purpose:** 获取 `total event count` 的当前值。

### CreateEvent
`public static SoundEvent CreateEvent(int soundCodeId, Scene scene)`

**用途 / Purpose:** 创建一个 `event` 实例或对象。

### IsNullSoundEvent
`public bool IsNullSoundEvent()`

**用途 / Purpose:** 处理 `is null sound event` 相关逻辑。

### Play
`public bool Play()`

**用途 / Purpose:** 处理 `play` 相关逻辑。

### Pause
`public void Pause()`

**用途 / Purpose:** 处理 `pause` 相关逻辑。

### Resume
`public void Resume()`

**用途 / Purpose:** 处理 `resume` 相关逻辑。

### PlayExtraEvent
`public void PlayExtraEvent(string eventName)`

**用途 / Purpose:** 处理 `play extra event` 相关逻辑。

### SetSwitch
`public void SetSwitch(string switchGroupName, string newSwitchStateName)`

**用途 / Purpose:** 设置 `switch` 的值或状态。

### TriggerCue
`public void TriggerCue()`

**用途 / Purpose:** 处理 `trigger cue` 相关逻辑。

### PlayInPosition
`public bool PlayInPosition(Vec3 position)`

**用途 / Purpose:** 处理 `play in position` 相关逻辑。

### Stop
`public void Stop()`

**用途 / Purpose:** 处理 `stop` 相关逻辑。

### SetParameter
`public void SetParameter(string parameterName, float value)`

**用途 / Purpose:** 设置 `parameter` 的值或状态。

### SetParameter
`public void SetParameter(int parameterIndex, float value)`

**用途 / Purpose:** 设置 `parameter` 的值或状态。

### GetEventMinMaxDistance
`public Vec3 GetEventMinMaxDistance()`

**用途 / Purpose:** 获取 `event min max distance` 的当前值。

### SetPosition
`public void SetPosition(Vec3 vec)`

**用途 / Purpose:** 设置 `position` 的值或状态。

### SetVelocity
`public void SetVelocity(Vec3 vec)`

**用途 / Purpose:** 设置 `velocity` 的值或状态。

### Release
`public void Release()`

**用途 / Purpose:** 处理 `release` 相关逻辑。

### IsPlaying
`public bool IsPlaying()`

**用途 / Purpose:** 处理 `is playing` 相关逻辑。

### IsPaused
`public bool IsPaused()`

**用途 / Purpose:** 处理 `is paused` 相关逻辑。

### IsStopped
`public bool IsStopped()`

**用途 / Purpose:** 处理 `is stopped` 相关逻辑。

### CreateEventFromSoundBuffer
`public static SoundEvent CreateEventFromSoundBuffer(string eventId, byte soundData, Scene scene, bool is3d, bool isBlocking)`

**用途 / Purpose:** 创建一个 `event from sound buffer` 实例或对象。

### CreateEventFromExternalFile
`public static SoundEvent CreateEventFromExternalFile(string programmerEventName, string soundFilePath, Scene scene, bool is3d, bool isBlocking)`

**用途 / Purpose:** 创建一个 `event from external file` 实例或对象。

## 使用示例

```csharp
var value = new SoundEvent();
value.GetSoundId();
```

## 参见

- [完整类目录](../catalog)