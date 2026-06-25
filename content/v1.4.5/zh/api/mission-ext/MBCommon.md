---
title: "MBCommon"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBCommon`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MBCommon

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MBCommon`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MBCommon.cs`

## 概述

`MBCommon` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `CurrentGameType` | `public static GameType CurrentGameType { get; set; }` |
| `IsPaused` | `public static bool IsPaused { get; }` |

## 主要方法

### PauseGameEngine
`public static void PauseGameEngine()`

**用途 / Purpose:** 处理 `pause game engine` 相关逻辑。

### UnPauseGameEngine
`public static void UnPauseGameEngine()`

**用途 / Purpose:** 处理 `un pause game engine` 相关逻辑。

### GetApplicationTime
`public static float GetApplicationTime()`

**用途 / Purpose:** 获取 `application time` 的当前值。

### GetTotalMissionTime
`public static float GetTotalMissionTime()`

**用途 / Purpose:** 获取 `total mission time` 的当前值。

### FixSkeletons
`public static void FixSkeletons()`

**用途 / Purpose:** 处理 `fix skeletons` 相关逻辑。

### CheckResourceModifications
`public static void CheckResourceModifications()`

**用途 / Purpose:** 处理 `check resource modifications` 相关逻辑。

### Hash
`public static int Hash(int i, object o)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `h`。

## 使用示例

```csharp
MBCommon.PauseGameEngine();
```

## 参见

- [完整类目录](../catalog)