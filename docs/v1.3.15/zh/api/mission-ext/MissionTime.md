<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionTime`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionTime

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 结构体 struct struct
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`MissionTime` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个结构体 struct。
> 如需了解其属性、方法和开发者用例，请参考源码或
## 主要属性

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


## 主要方法

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

贡献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)