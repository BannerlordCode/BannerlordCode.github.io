---
title: "IMissionSiegeWeaponsController"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `IMissionSiegeWeaponsController`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# IMissionSiegeWeaponsController

**Namespace:** TaleWorlds.MountAndBlade.Missions
**Module:** TaleWorlds.MountAndBlade
**Type:** `class`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/Missions/IMissionSiegeWeaponsController.cs`

## 概述

`IMissionSiegeWeaponsController` 是一个控制器，重点不在存储数据，而在接收输入后把系统推向下一个状态。

## 心智模型

把 `IMissionSiegeWeaponsController` 当作一个 Controller 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 使用示例

```csharp
IMissionSiegeWeaponsController implementation = GetMissionSiegeWeaponsControllerImplementation();
```

## 参见

- [完整类目录](../catalog)