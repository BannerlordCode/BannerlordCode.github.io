---
title: "ShipVisual"
description: "ShipVisual：TaleWorlds.MountAndBlade 的 public 类，继承 ScriptComponentBehavior；公开成员 6 个（方法 1、属性 4、字段 1）。源文件 TaleWorlds.MountAndBlade/Objects/ShipVisual.cs。"
---
# ShipVisual

**Namespace:** `TaleWorlds.MountAndBlade.Objects`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class ShipVisual : ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade/Objects/ShipVisual.cs`

## 概述

ShipVisual 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/Objects/ShipVisual.cs。它是一个 public 类，实现/继承 ScriptComponentBehavior，继承链为 ShipVisual → ScriptComponentBehavior。public/protected 成员共 6 个：1 方法、4 属性、1 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ShipVisual 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.Objects），继承链 ShipVisual → ScriptComponentBehavior。成员构成以属性为主（属性 4/6，方法 1/6），对外主要以状态读取接口暴露。继承链上的 ScriptComponentBehavior 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/Objects/ShipVisual.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Seed` | `public int Seed` | 属性 |
| `CustomSailPatternId` | `public string CustomSailPatternId` | 属性 |
| `List` | `public List<ScriptComponentBehavior>SailVisuals` | 属性 |
| `Health` | `public float Health` | 属性 |
| `Initialize` | `public void Initialize(int seed, string customSailPatternId = "")` | 方法 |
| `uint>SailColors` | `public ValueTuple<uint, uint>SailColors` | 字段 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AnimalSpawnSettings](../AnimalSpawnSettings)
- [同命名空间 AreaMarker](../AreaMarker)
- [同命名空间 FightAreaMarker](../FightAreaMarker)
- [同命名空间 FlagCapturePoint](../FlagCapturePoint)
