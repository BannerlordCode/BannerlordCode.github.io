---
title: "NativeParallelDriver"
description: "TaleWorlds.Engine.NativeParallelDriver —— 命名空间 TaleWorlds.Engine 中的类，来自 bannerlord-1.4.7 源码的自动生成骨架页，仅收录成员签名。"
---

<!-- v147-skeleton -->

# NativeParallelDriver

**Namespace:** `TaleWorlds.Engine`  
**Module:** `TaleWorlds.Engine`  
**Type:** `public sealed class NativeParallelDriver : IParallelDriver`  
**Base:** `IParallelDriver`  
**Source:** `TaleWorlds.Engine/NativeParallelDriver.cs`

## 概述

`NativeParallelDriver` 是 bannerlord-1.4.7 源码中命名空间 `TaleWorlds.Engine` 下的类，声明于模块目录 `TaleWorlds.Engine` 的 `TaleWorlds.Engine/NativeParallelDriver.cs`（第 8 行声明）。该声明访问级别为public（公开），修饰为密封，基类型是 `IParallelDriver`；解析到的成员共 11 项，其中 5 项为 public 或 protected。

本页由 `tools/_v147_skeleton.mjs` 从上述源文件抽取生成，作用是提供该类型在 1.4.7 中的真实声明与签名清单。行为说明、调用时机与 mod 集成方式尚未撰写。

## 关键成员

下列签名按源码声明顺序逐字照抄（每项后的说明只描述签名形态，不描述业务用途）：

- `public static long UniqueLoopBodyKeySeed;` — 字段，类型 long
- `public TWParallel.ParallelForAuxPredicate LoopBody;` — 字段，类型 TWParallel.ParallelForAuxPredicate
- `public static long UniqueLoopBodyKeySeed;` — 字段，类型 long
- `public TWParallel.ParallelForWithDtAuxPredicate LoopBody;` — 字段，类型 TWParallel.ParallelForWithDtAuxPredicate
- `public float DeltaTime;` — 字段，类型 float


## 心智模型

把这一页当作源码的索引来读，而不是教程：上面的 5 条成员记录全部来自 `TaleWorlds.Engine/NativeParallelDriver.cs` 的真实声明，签名与返回类型是准确事实，而签名背后的行为、调用时机与失败边界本页尚未撰写，需要时请回到该源文件逐行核对。判断一个成员能否从 mod 侧直接调用，看的是 `public sealed class NativeParallelDriver : IParallelDriver` 这一行的访问级别与修饰（当前为public（公开）、密封）以及上面每项的 get/set 与参数个数，而不是本页的措辞。

## 参见

- 本目录索引：[`engine` API](../)
- [AccessObject（同命名空间）](../AccessObject)
- [AccessObjectJsonConverter（同命名空间）](../AccessObjectJsonConverter)
- [AccessObjectResult（同命名空间）](../AccessObjectResult)
- [FastModeSubModule（campaign 桶）](../../campaign/FastModeSubModule)
- [IGameStarter（core-extra 桶）](../../core-extra/IGameStarter)
