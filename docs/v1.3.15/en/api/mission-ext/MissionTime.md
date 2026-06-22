<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionTime`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionTime

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** struct
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `MissionTime` is a struct in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `NumberOfTicks` | `public long NumberOfTicks { get; }` |
| `DeltaTime` | `public static MissionTime DeltaTime { get; }` |
| `Now` | `public static MissionTime Now { get; }` |
| `IsFuture` | `public bool IsFuture { get; }` |
| `IsPast` | `public bool IsPast { get; }` |
| `IsNow` | `public bool IsNow { get; }` |
| `ElapsedHours` | `public float ElapsedHours { get; }` |
| `ElapsedSeconds` | `public float ElapsedSeconds { get; }` |
| `ElapsedMilliseconds` | `public float ElapsedMilliseconds { get; }` |
| `ToHours` | `public double ToHours { get; }` |
| `ToMinutes` | `public double ToMinutes { get; }` |
| `ToSeconds` | `public double ToSeconds { get; }` |
| `ToMilliseconds` | `public double ToMilliseconds { get; }` |
| `Zero` | `public static MissionTime Zero { get; }` |


## Key Methods

### MillisecondsFromNow

```csharp
public static MissionTime MillisecondsFromNow(float valueInMilliseconds)
```

### SecondsFromNow

```csharp
public static MissionTime SecondsFromNow(float valueInSeconds)
```

### Equals

```csharp
public bool Equals(MissionTime other)
```

### Equals

```csharp
public override bool Equals(object obj)
```

### GetHashCode

```csharp
public override int GetHashCode()
```

### CompareTo

```csharp
public int CompareTo(MissionTime other)
```

### Milliseconds

```csharp
public static MissionTime Milliseconds(float valueInMilliseconds)
```

### Seconds

```csharp
public static MissionTime Seconds(float valueInSeconds)
```

### Minutes

```csharp
public static MissionTime Minutes(float valueInMinutes)
```

### Hours

```csharp
public static MissionTime Hours(float valueInHours)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)