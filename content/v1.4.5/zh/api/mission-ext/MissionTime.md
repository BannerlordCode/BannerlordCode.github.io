---
title: "MissionTime"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionTime`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionTime

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct MissionTime : IComparable<MissionTime>`
**Base:** `IComparable<MissionTime>`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionTime.cs`

## 概述

`MissionTime` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### MillisecondsFromNow
`public static MissionTime MillisecondsFromNow(float valueInMilliseconds)`

**用途 / Purpose:** 处理 `milliseconds from now` 相关逻辑。

### SecondsFromNow
`public static MissionTime SecondsFromNow(float valueInSeconds)`

**用途 / Purpose:** 处理 `seconds from now` 相关逻辑。

### Equals
`public bool Equals(MissionTime other)`

**用途 / Purpose:** 处理 `equals` 相关逻辑。

### Equals
`public override bool Equals(object obj)`

**用途 / Purpose:** 处理 `equals` 相关逻辑。

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 获取 `hash code` 的当前值。

### CompareTo
`public int CompareTo(MissionTime other)`

**用途 / Purpose:** 处理 `compare to` 相关逻辑。

### Milliseconds
`public static MissionTime Milliseconds(float valueInMilliseconds)`

**用途 / Purpose:** 处理 `milliseconds` 相关逻辑。

### Seconds
`public static MissionTime Seconds(float valueInSeconds)`

**用途 / Purpose:** 处理 `seconds` 相关逻辑。

### Minutes
`public static MissionTime Minutes(float valueInMinutes)`

**用途 / Purpose:** 处理 `minutes` 相关逻辑。

### Hours
`public static MissionTime Hours(float valueInHours)`

**用途 / Purpose:** 处理 `hours` 相关逻辑。

## 使用示例

```csharp
MissionTime.MillisecondsFromNow(0);
```

## 参见

- [完整类目录](../catalog)