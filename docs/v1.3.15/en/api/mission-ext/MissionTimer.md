<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionTimer`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionTimer

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `MissionTimer` is a class in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Methods

### GetStartTime

```csharp
public MissionTime GetStartTime()
```

### GetTimerDuration

```csharp
public float GetTimerDuration()
```

### GetRemainingTimeInSeconds

```csharp
public float GetRemainingTimeInSeconds(bool synched = false)
```

### Check

```csharp
public bool Check(bool reset = false)
```

### Reset

```csharp
public void Reset()
```

### Set

```csharp
public void Set(float timeInSeconds)
```

### SetDuration

```csharp
public void SetDuration(float duration)
```

### CreateSynchedTimerClient

```csharp
public static MissionTimer CreateSynchedTimerClient(float startTimeInSeconds, float duration)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)