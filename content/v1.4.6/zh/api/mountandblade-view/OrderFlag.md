---
title: "OrderFlag"
description: "OrderFlag：TaleWorlds.MountAndBlade.View 的 public 类；公开成员 14 个（方法 7、属性 5、字段 1）。源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Order/OrderFlag.cs。"
---
# OrderFlag

**Namespace:** `TaleWorlds.MountAndBlade.View.MissionViews.Order`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class OrderFlag`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Order/OrderFlag.cs`

## 概述

OrderFlag 位于 TaleWorlds.MountAndBlade.View 模块，源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Order/OrderFlag.cs。它是一个 public 类，继承链为 OrderFlag。public/protected 成员共 14 个：7 方法、5 属性、1 字段、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：OrderFlag 是 TaleWorlds.MountAndBlade.View 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.View.MissionViews.Order），继承链 OrderFlag。成员构成以方法为主（方法 7/14，属性 5/14），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Order/OrderFlag.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `FocusedOrderableObject` | `public IOrderable FocusedOrderableObject` | 属性 |
| `LatestUpdateFrameNo` | `public int LatestUpdateFrameNo` | 属性 |
| `OrderFlag` | `public OrderFlag(Mission mission, MissionScreen missionScreen, float flagScale = 10f)` | 构造函数 |
| `Tick` | `public void Tick(float dt)` | 方法 |
| `SetArrowVisibility` | `public void SetArrowVisibility(bool isVisible, Vec2 arrowDirection)` | 方法 |
| `GetFlagPosition` | `protected virtual Vec3 GetFlagPosition(out bool isOnValidGround, bool checkForTargetEntity, Vec3 targetCollisionPoint)` | 方法 |
| `UpdateFrame` | `protected virtual void UpdateFrame(out bool isOnValidGround, bool checkForTargetEntity, Vec3 targetCollisionPoint)` | 方法 |
| `IsPositionOnValidGround` | `public virtual bool IsPositionOnValidGround(WorldPosition worldPosition)` | 方法 |
| `IsOrderPositionValid` | `public static bool IsOrderPositionValid(WorldPosition orderPosition)` | 方法 |
| `Position` | `public Vec3 Position` | 属性 |
| `Frame` | `public MatrixFrame Frame` | 属性 |
| `IsVisible` | `public bool IsVisible` | 属性 |
| `SetWidthVisibility` | `public void SetWidthVisibility(bool isVisible, float width)` | 方法 |
| `IsTroop` | `public bool IsTroop` | 字段 |

## 参见

- [↑ mountandblade-view 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 OrderTroopPlacer](../OrderTroopPlacer)
