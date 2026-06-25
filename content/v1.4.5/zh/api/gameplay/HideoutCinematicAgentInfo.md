---
title: "HideoutCinematicAgentInfo"
description: "HideoutCinematicAgentInfo 的自动生成类参考。"
---
# HideoutCinematicAgentInfo

**Namespace:** SandBox.Missions.MissionLogics.Hideout
**Module:** SandBox.Missions
**Type:** `struct HideoutCinematicAgentInfo`
**Base:** 无
**File:** `Modules.SandBox/SandBox/SandBox.Missions.MissionLogics.Hideout/HideoutAmbushBossFightCinematicController.cs`

## 概述

`HideoutCinematicAgentInfo` 位于 `SandBox.Missions.MissionLogics.Hideout`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.Missions.MissionLogics.Hideout` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### HasReachedTarget
`public bool HasReachedTarget(float proximityThreshold = 0.5f)`

**用途 / Purpose:** 判断当前对象是否已经持有 「reached target」。

```csharp
// 先通过子系统 API 拿到 HideoutCinematicAgentInfo 实例
HideoutCinematicAgentInfo hideoutCinematicAgentInfo = ...;
var result = hideoutCinematicAgentInfo.HasReachedTarget(0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
HideoutCinematicAgentInfo hideoutCinematicAgentInfo = ...;
hideoutCinematicAgentInfo.HasReachedTarget(0);
```

## 参见

- [本区域目录](../../)