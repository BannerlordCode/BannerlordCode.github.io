<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SoundEvent`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SoundEvent

**命名空间:** TaleWorlds.Engine
**模块:** TaleWorlds.Engine
**类型:** 类 class class
**领域:** 引擎 Engine

## 概述

> 本页为自动生成的存根。`SoundEvent` 是 `TaleWorlds.Engine` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `IsValid` | `public bool IsValid { get; }` |


## 主要方法

### GetSoundId

```csharp
public int GetSoundId()
```

### CreateEventFromString

```csharp
public static SoundEvent CreateEventFromString(string eventId, Scene scene)
```

### SetEventMinMaxDistance

```csharp
public void SetEventMinMaxDistance(Vec3 newRadius)
```

### GetEventIdFromString

```csharp
public static int GetEventIdFromString(string name)
```

### PlaySound2D

```csharp
public static bool PlaySound2D(int soundCodeId)
```

### PlaySound2D

```csharp
public static bool PlaySound2D(string soundName)
```

### GetTotalEventCount

```csharp
public static int GetTotalEventCount()
```

### CreateEvent

```csharp
public static SoundEvent CreateEvent(int soundCodeId, Scene scene)
```

### IsNullSoundEvent

```csharp
public bool IsNullSoundEvent()
```

### Play

```csharp
public bool Play()
```

### Pause

```csharp
public void Pause()
```

### Resume

```csharp
public void Resume()
```

### PlayExtraEvent

```csharp
public void PlayExtraEvent(string eventName)
```

### SetSwitch

```csharp
public void SetSwitch(string switchGroupName, string newSwitchStateName)
```

### TriggerCue

```csharp
public void TriggerCue()
```

### PlayInPosition

```csharp
public bool PlayInPosition(Vec3 position)
```

### Stop

```csharp
public void Stop()
```

### SetParameter

```csharp
public void SetParameter(string parameterName, float value)
```

### SetParameter

```csharp
public void SetParameter(int parameterIndex, float value)
```

### GetEventMinMaxDistance

```csharp
public Vec3 GetEventMinMaxDistance()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-engine)