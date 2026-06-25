---
title: "MissionTime"
description: "MissionTime 的自动生成类参考。"
---
# MissionTime

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct MissionTime : IComparable<MissionTime>`
**Base:** `IComparable<MissionTime>`
**File:** `TaleWorlds.MountAndBlade/MissionTime.cs`

## 概述

`MissionTime` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

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
`public static MissionTime MillisecondsFromNow(float valueInMilliseconds)`

**用途 / Purpose:** 处理与 「milliseconds from now」 相关的逻辑。

```csharp
// 静态调用，不需要实例
MissionTime.MillisecondsFromNow(0);
```

### SecondsFromNow
`public static MissionTime SecondsFromNow(float valueInSeconds)`

**用途 / Purpose:** 处理与 「seconds from now」 相关的逻辑。

```csharp
// 静态调用，不需要实例
MissionTime.SecondsFromNow(0);
```

### Equals
`public bool Equals(MissionTime other)`

**用途 / Purpose:** 比较当前对象与传入实例是否相等。

```csharp
// 先通过子系统 API 拿到 MissionTime 实例
MissionTime missionTime = ...;
var result = missionTime.Equals(other);
```

### Equals
`public override bool Equals(object obj)`

**用途 / Purpose:** 比较当前对象与传入实例是否相等。

```csharp
// 先通过子系统 API 拿到 MissionTime 实例
MissionTime missionTime = ...;
var result = missionTime.Equals(obj);
```

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 返回当前对象的哈希码，用于字典或哈希集合中的快速查找。

```csharp
// 先通过子系统 API 拿到 MissionTime 实例
MissionTime missionTime = ...;
var result = missionTime.GetHashCode();
```

### CompareTo
`public int CompareTo(MissionTime other)`

**用途 / Purpose:** 将当前对象与传入实例比较大小或顺序。

```csharp
// 先通过子系统 API 拿到 MissionTime 实例
MissionTime missionTime = ...;
var result = missionTime.CompareTo(other);
```

### Milliseconds
`public static MissionTime Milliseconds(float valueInMilliseconds)`

**用途 / Purpose:** 处理与 「milliseconds」 相关的逻辑。

```csharp
// 静态调用，不需要实例
MissionTime.Milliseconds(0);
```

### Seconds
`public static MissionTime Seconds(float valueInSeconds)`

**用途 / Purpose:** 处理与 「seconds」 相关的逻辑。

```csharp
// 静态调用，不需要实例
MissionTime.Seconds(0);
```

### Minutes
`public static MissionTime Minutes(float valueInMinutes)`

**用途 / Purpose:** 处理与 「minutes」 相关的逻辑。

```csharp
// 静态调用，不需要实例
MissionTime.Minutes(0);
```

### Hours
`public static MissionTime Hours(float valueInHours)`

**用途 / Purpose:** 处理与 「hours」 相关的逻辑。

```csharp
// 静态调用，不需要实例
MissionTime.Hours(0);
```

## 使用示例

```csharp
MissionTime.MillisecondsFromNow(0);
```

## 参见

- [本区域目录](../)