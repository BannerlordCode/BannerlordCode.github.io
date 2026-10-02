---
title: "IFormation"
description: "IFormation：TaleWorlds.MountAndBlade 的 public 接口；公开成员 14 个（方法 6、属性 8、字段 0）。源文件 TaleWorlds.MountAndBlade/IFormation.cs。"
---
# IFormation

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public interface IFormation`
**File:** `TaleWorlds.MountAndBlade/IFormation.cs`

## 概述

IFormation 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/IFormation.cs。它是一个 public 接口，继承链为 IFormation。public/protected 成员共 14 个：6 方法、8 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：IFormation 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 IFormation。成员构成以属性为主（属性 8/14，方法 6/14），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/IFormation.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Interval` | `float Interval` | 属性 |
| `Distance` | `float Distance` | 属性 |
| `UnitDiameter` | `float UnitDiameter` | 属性 |
| `MinimumInterval` | `float MinimumInterval` | 属性 |
| `MaximumInterval` | `float MaximumInterval` | 属性 |
| `MinimumDistance` | `float MinimumDistance` | 属性 |
| `MaximumDistance` | `float MaximumDistance` | 属性 |
| `OverridenUnitCount` | `int? OverridenUnitCount` | 属性 |
| `GetIsLocalPositionAvailable` | `bool GetIsLocalPositionAvailable(Vec2 localPosition, Vec2? nearestAvailableUnitPositionLocal);` | 方法 |
| `BatchUnitPositions` | `bool BatchUnitPositions(MBArrayList<Vec2i>orderedPositionIndices, MBArrayList<Vec2>orderedLocalPositions, MBList2D<int>availabilityTable, MBList2D<WorldPosition>globalPositionTable, int fileCount, int rankCount);` | 方法 |
| `GetClosestUnitTo` | `IFormationUnit GetClosestUnitTo(Vec2 localPosition, MBList<IFormationUnit>unitsWithSpaces = null, float? maxDistance = null);` | 方法 |
| `GetClosestUnitTo` | `IFormationUnit GetClosestUnitTo(IFormationUnit targetUnit, MBList<IFormationUnit>unitsWithSpaces = null, float? maxDistance = null);` | 方法 |
| `OnUnitAddedOrRemoved` | `void OnUnitAddedOrRemoved();` | 方法 |
| `SetUnitToFollow` | `void SetUnitToFollow(IFormationUnit unit, IFormationUnit toFollow, Vec2 vector);` | 方法 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
