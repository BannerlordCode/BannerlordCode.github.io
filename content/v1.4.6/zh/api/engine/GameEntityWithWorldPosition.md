---
title: "GameEntityWithWorldPosition"
description: "GameEntityWithWorldPosition：TaleWorlds.Engine 的 public 类；公开成员 9 个（方法 4、属性 4、字段 0）。源文件 TaleWorlds.Engine/GameEntityWithWorldPosition.cs。"
---
# GameEntityWithWorldPosition

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public class GameEntityWithWorldPosition`
**File:** `TaleWorlds.Engine/GameEntityWithWorldPosition.cs`

## 概述

GameEntityWithWorldPosition 位于 TaleWorlds.Engine 模块，源文件 TaleWorlds.Engine/GameEntityWithWorldPosition.cs。它是一个 public 类，继承链为 GameEntityWithWorldPosition。public/protected 成员共 9 个：4 方法、4 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GameEntityWithWorldPosition 是 TaleWorlds.Engine 的顶层类型，命名空间与模块目录一致，继承链 GameEntityWithWorldPosition。成员构成以方法为主（方法 4/9，属性 4/9），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Engine/GameEntityWithWorldPosition.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GameEntityWithWorldPosition` | `public GameEntityWithWorldPosition(WeakGameEntity gameEntity)` | 构造函数 |
| `GameEntity` | `public WeakGameEntity GameEntity` | 属性 |
| `WorldPosition` | `public WorldPosition WorldPosition` | 属性 |
| `InvalidateWorldPosition` | `public void InvalidateWorldPosition()` | 方法 |
| `WorldFrame` | `public WorldFrame WorldFrame` | 属性 |
| `SetCustomLocalFrame` | `public void SetCustomLocalFrame(in MatrixFrame customLocalFrame)` | 方法 |
| `AsVec2` | `public Vec2 AsVec2` | 属性 |
| `GetNavMesh` | `public UIntPtr GetNavMesh()` | 方法 |
| `GetNavMeshVec3` | `public Vec3 GetNavMeshVec3()` | 方法 |

## 参见

- [↑ engine 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AnimResult](../AnimResult)
- [同命名空间 ApplicationHealthChecker](../ApplicationHealthChecker)
- [同命名空间 AsyncTask](../AsyncTask)
- [同命名空间 BillboardType](../BillboardType)
