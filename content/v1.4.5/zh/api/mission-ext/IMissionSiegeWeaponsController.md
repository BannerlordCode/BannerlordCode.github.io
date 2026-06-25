---
title: "IMissionSiegeWeaponsController"
description: "IMissionSiegeWeaponsController 的自动生成类参考。"
---
# IMissionSiegeWeaponsController

**Namespace:** TaleWorlds.MountAndBlade.Missions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public interface IMissionSiegeWeaponsController`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Missions/IMissionSiegeWeaponsController.cs`

## 概述

`IMissionSiegeWeaponsController` 是一个控制器，重点不在存储数据，而在接收输入后把系统推向下一个状态。

## 心智模型

把 `IMissionSiegeWeaponsController` 当作一个 Controller 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 使用示例

```csharp
// 通常通过依赖注入或工厂方法获得实现
IIMissionSiegeWeaponsController service = ...;
```

## 参见

- [本区域目录](../)