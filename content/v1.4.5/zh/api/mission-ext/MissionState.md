---
title: "MissionState"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionState`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionState

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionState : GameState`
**Base:** `GameState`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionState.cs`

## 概述

`MissionState` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Handler` | `public IMissionSystemHandler Handler { get; }` |
| `Current` | `public static MissionState Current { get; }` |
| `CurrentMission` | `public Mission CurrentMission { get; }` |
| `MissionName` | `public string MissionName { get; }` |
| `FirstMissionTickAfterLoading` | `public bool FirstMissionTickAfterLoading { get; }` |
| `Paused` | `public bool Paused { get; set; }` |

## 主要方法

### OpenNew
`public static Mission OpenNew(string missionName, MissionInitializerRecord rec, InitializeMissionBehaviorsDelegate handler, bool addDefaultMissionBehaviors = true, bool needsMemoryCleanup = true)`

**用途 / Purpose:** 处理 `open new` 相关逻辑。

### BeginDelayedDisconnectFromMission
`public void BeginDelayedDisconnectFromMission()`

**用途 / Purpose:** 处理 `begin delayed disconnect from mission` 相关逻辑。

## 使用示例

```csharp
MissionState.OpenNew("example", rec, handler, false, false);
```

## 参见

- [完整类目录](../catalog)