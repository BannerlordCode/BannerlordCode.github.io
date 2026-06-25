---
title: "SallyOutMissionController"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SallyOutMissionController`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SallyOutMissionController

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class SallyOutMissionController : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/SallyOutMissionController.cs`

## 概述

`SallyOutMissionController` 是一个控制器，重点不在存储数据，而在接收输入后把系统推向下一个状态。

## 心智模型

把 `SallyOutMissionController` 当作一个 Controller 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `BesiegerSiegeEngines` | `public MBReadOnlyList<SiegeWeapon> BesiegerSiegeEngines { get; }` |

## 主要方法

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 当 `behavior initialize` 事件触发时调用此方法。

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 处理 `after start` 相关逻辑。

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 当 `mission tick` 事件触发时调用此方法。

### OnDeploymentFinished
`public override void OnDeploymentFinished()`

**用途 / Purpose:** 当 `deployment finished` 事件触发时调用此方法。

### GetBesiegerSiegeEngines
`public static MBReadOnlyList<SiegeWeapon> GetBesiegerSiegeEngines()`

**用途 / Purpose:** 获取 `besieger siege engines` 的当前值。

### DisableSiegeEngines
`public static void DisableSiegeEngines()`

**用途 / Purpose:** 处理 `disable siege engines` 相关逻辑。

## 使用示例

```csharp
var implementation = new CustomSallyOutMissionController();
```

## 参见

- [完整类目录](../catalog)