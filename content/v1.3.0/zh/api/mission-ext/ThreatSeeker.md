---
title: "ThreatSeeker"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ThreatSeeker`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ThreatSeeker

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ThreatSeeker`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/RangedSiegeWeaponAi.cs`

## 概述

`ThreatSeeker` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### PrepareTargetFromTask
`public Threat PrepareTargetFromTask()`

**用途 / Purpose:** 处理 `prepare target from task` 相关逻辑。

### UpdateThreatSeekerTask
`public bool UpdateThreatSeekerTask()`

**用途 / Purpose:** 更新 `threat seeker task` 的状态或数据。

### PrepareThreatSeekerTask
`public void PrepareThreatSeekerTask(Action lastAction)`

**用途 / Purpose:** 处理 `prepare threat seeker task` 相关逻辑。

### Release
`public void Release()`

**用途 / Purpose:** 处理 `release` 相关逻辑。

### GetAllThreats
`public List<Threat> GetAllThreats()`

**用途 / Purpose:** 获取 `all threats` 的当前值。

### GetTargetFlagsOfFormation
`public static TargetFlags GetTargetFlagsOfFormation()`

**用途 / Purpose:** 获取 `target flags of formation` 的当前值。

### GetMaxThreat
`public static Threat GetMaxThreat(List<ICastleKeyPosition> castleKeyPositions)`

**用途 / Purpose:** 获取 `max threat` 的当前值。

## 使用示例

```csharp
var value = new ThreatSeeker();
value.PrepareTargetFromTask();
```

## 参见

- [完整类目录](../catalog)