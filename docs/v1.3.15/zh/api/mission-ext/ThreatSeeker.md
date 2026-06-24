<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ThreatSeeker`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ThreatSeeker

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** `public class ThreatSeeker`
**领域:** mission-ext

## 概述

`ThreatSeeker` 位于 `TaleWorlds.MountAndBlade`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### FindNextTarget
`public void FindNextTarget()`

**用途 / Purpose:** 处理 `find next target` 相关逻辑。

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
// 先从游戏状态中拿到一个 ThreatSeeker 实例，再调用它的公开方法
var value = new ThreatSeeker();
value.FindNextTarget();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
