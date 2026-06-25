---
title: "MBCommon"
description: "MBCommon 的自动生成类参考。"
---
# MBCommon

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MBCommon`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/MBCommon.cs`

## 概述

`MBCommon` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `CurrentGameType` | `public static MBCommon.GameType CurrentGameType { get; set; }` |
| `IsDebugMode` | `public static bool IsDebugMode { get; }` |
| `IsPaused` | `public static bool IsPaused { get; }` |

## 主要方法

### PauseGameEngine
`public static void PauseGameEngine()`

**用途 / Purpose:** 处理与 「pause game engine」 相关的逻辑。

```csharp
// 静态调用，不需要实例
MBCommon.PauseGameEngine();
```

### UnPauseGameEngine
`public static void UnPauseGameEngine()`

**用途 / Purpose:** 处理与 「un pause game engine」 相关的逻辑。

```csharp
// 静态调用，不需要实例
MBCommon.UnPauseGameEngine();
```

### GetApplicationTime
`public static float GetApplicationTime()`

**用途 / Purpose:** 读取并返回当前对象中 「application time」 的结果。

```csharp
// 静态调用，不需要实例
MBCommon.GetApplicationTime();
```

### GetTotalMissionTime
`public static float GetTotalMissionTime()`

**用途 / Purpose:** 读取并返回当前对象中 「total mission time」 的结果。

```csharp
// 静态调用，不需要实例
MBCommon.GetTotalMissionTime();
```

### FixSkeletons
`public static void FixSkeletons()`

**用途 / Purpose:** 处理与 「fix skeletons」 相关的逻辑。

```csharp
// 静态调用，不需要实例
MBCommon.FixSkeletons();
```

### CheckResourceModifications
`public static void CheckResourceModifications()`

**用途 / Purpose:** 检查「resource modifications」在当前对象中是否成立。

```csharp
// 静态调用，不需要实例
MBCommon.CheckResourceModifications();
```

### Hash
`public static int Hash(int i, object o)`

**用途 / Purpose:** 判断当前对象是否已经持有 「h」。

```csharp
// 静态调用，不需要实例
MBCommon.Hash(0, o);
```

## 使用示例

```csharp
MBCommon.PauseGameEngine();
```

## 参见

- [本区域目录](../)