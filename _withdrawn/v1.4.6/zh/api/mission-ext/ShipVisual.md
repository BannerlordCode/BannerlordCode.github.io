---
title: "ShipVisual"
description: "ShipVisual：TaleWorlds.MountAndBlade.Objects 的 public 类，继承 ScriptComponentBehavior；公开成员 6 个（方法 1、属性 4、字段 1）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/Objects/ShipVisual.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ShipVisual

**Namespace:** `TaleWorlds.MountAndBlade.Objects`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class ShipVisual : ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade/Objects/ShipVisual.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

ShipVisual 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/Objects/ShipVisual.cs。它是一个 public 类，实现/继承 ScriptComponentBehavior，继承链为 ShipVisual → ScriptComponentBehavior → DotNetObject。public/protected 成员共 6 个：1 方法、4 属性、1 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ShipVisual 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.Objects`，继承链 ShipVisual → ScriptComponentBehavior → DotNetObject。成员构成以属性为主（属性 4/6，方法 1/6），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/Objects/ShipVisual.cs 的方法体或该类型的深写页确认。

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

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ScriptComponentBehavior](../../engine/ScriptComponentBehavior/)
- [同命名空间 AnimalSpawnSettings](../AnimalSpawnSettings/)
- [同命名空间 AreaMarker](../AreaMarker/)
- [同命名空间 FightAreaMarker](../FightAreaMarker/)
- [同命名空间 FlagCapturePoint](../FlagCapturePoint/)
