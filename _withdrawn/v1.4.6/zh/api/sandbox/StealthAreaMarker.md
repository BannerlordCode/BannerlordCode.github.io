---
title: "StealthAreaMarker"
description: "StealthAreaMarker：SandBox.Objects.AreaMarkers 的 public 类，继承 AreaMarker；公开成员 3 个（方法 1、属性 2、字段 0）。canonical 桶 sandbox。源文件 SandBox/Objects/AreaMarkers/StealthAreaMarker.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# StealthAreaMarker

**Namespace:** `SandBox.Objects.AreaMarkers`
**Module:** `SandBox`
**Type:** `public class StealthAreaMarker : AreaMarker`
**File:** `SandBox/Objects/AreaMarkers/StealthAreaMarker.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

StealthAreaMarker 位于 SandBox 模块，源文件 SandBox/Objects/AreaMarkers/StealthAreaMarker.cs。它是一个 public 类，实现/继承 AreaMarker，继承链为 StealthAreaMarker → AreaMarker → MissionObject → ScriptComponentBehavior → DotNetObject。public/protected 成员共 3 个：1 方法、2 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：StealthAreaMarker 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.Objects.AreaMarkers`，继承链 StealthAreaMarker → AreaMarker → MissionObject → ScriptComponentBehavior → DotNetObject。成员构成以属性为主（属性 2/3，方法 1/3），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/Objects/AreaMarkers/StealthAreaMarker.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ReinforcementAllyGroupSpawnPoint` | `public GameEntity ReinforcementAllyGroupSpawnPoint` | 属性 |
| `WaitPoint` | `public GameEntity WaitPoint` | 属性 |
| `AfterMissionStart` | `public override void AfterMissionStart()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 AreaMarker](../../mission-ext/AreaMarker/)
- [同命名空间 AnimatedBasicAreaIndicator](../AnimatedBasicAreaIndicator/)
- [同命名空间 BasicAreaIndicator](../BasicAreaIndicator/)
- [同命名空间 CommonAreaMarker](../CommonAreaMarker/)
- [同命名空间 WorkshopAreaMarker](../WorkshopAreaMarker/)
