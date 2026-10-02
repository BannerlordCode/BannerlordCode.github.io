---
title: "BoundingBox"
description: "TaleWorlds.Engine.BoundingBox —— 命名空间 TaleWorlds.Engine 中的结构体，来自 bannerlord-1.4.7 源码的自动生成骨架页，仅收录成员签名。"
---

<!-- v147-skeleton -->

# BoundingBox

**Namespace:** `TaleWorlds.Engine`  
**Module:** `TaleWorlds.Engine`  
**Type:** `public struct BoundingBox`  
**Base:** `无（源码未显式声明基类）`  
**Source:** `TaleWorlds.Engine/BoundingBox.cs`

## 概述

`BoundingBox` 是 bannerlord-1.4.7 源码中命名空间 `TaleWorlds.Engine` 下的结构体，声明于模块目录 `TaleWorlds.Engine` 的 `TaleWorlds.Engine/BoundingBox.cs`（第 9 行声明）。该声明访问级别为public（公开），修饰为无特殊修饰，源码中未显式声明基类型；解析到的成员共 60 项，其中 9 项为 public 或 protected。

本页由 `tools/_v147_skeleton.mjs` 从上述源文件抽取生成，作用是提供该类型在 1.4.7 中的真实声明与签名清单。行为说明、调用时机与 mod 集成方式尚未撰写。

## 关键成员

下列签名按源码声明顺序逐字照抄（每项后的说明只描述签名形态，不描述业务用途）：

- `public ValueTuple<Vec3, Vec3> ComputeTransformedMinMax()` — 方法，0 个参数，返回 ValueTuple<Vec3, Vec3>
- `public Vec3 p0;` — 字段，类型 Vec3
- `public Vec3 p1;` — 字段，类型 Vec3
- `public Vec3 p2;` — 字段，类型 Vec3
- `public Vec3 p3;` — 字段，类型 Vec3
- `public Vec3 p4;` — 字段，类型 Vec3
- `public Vec3 p5;` — 字段，类型 Vec3
- `public Vec3 p6;` — 字段，类型 Vec3
- `public Vec3 p7;` — 字段，类型 Vec3


## 心智模型

把这一页当作源码的索引来读，而不是教程：上面的 9 条成员记录全部来自 `TaleWorlds.Engine/BoundingBox.cs` 的真实声明，签名与返回类型是准确事实，而签名背后的行为、调用时机与失败边界本页尚未撰写，需要时请回到该源文件逐行核对。判断一个成员能否从 mod 侧直接调用，看的是 `public struct BoundingBox` 这一行的访问级别与修饰（当前为public（公开）、无特殊修饰）以及上面每项的 get/set 与参数个数，而不是本页的措辞。

## 参见

- 本目录索引：[`engine` API](../)
- [AccessObject（同命名空间）](../AccessObject)
- [AccessObjectJsonConverter（同命名空间）](../AccessObjectJsonConverter)
- [AccessObjectResult（同命名空间）](../AccessObjectResult)
- [FastModeSubModule（campaign 桶）](../../campaign/FastModeSubModule)
- [IGameStarter（core-extra 桶）](../../core-extra/IGameStarter)
