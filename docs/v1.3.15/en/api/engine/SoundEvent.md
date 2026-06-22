<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SoundEvent`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SoundEvent

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** class
**Area:** Engine

## Overview

> This is an auto-generated stub. `SoundEvent` is a class in the `TaleWorlds.Engine` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `IsValid` | `public bool IsValid { get; }` |


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-engine)