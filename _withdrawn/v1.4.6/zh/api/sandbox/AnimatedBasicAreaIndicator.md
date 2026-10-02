---
title: "AnimatedBasicAreaIndicator"
description: "AnimatedBasicAreaIndicator：SandBox.Objects.AreaMarkers 的 public 类，继承 AreaMarker；公开成员 6 个（方法 4、属性 1、字段 1）。canonical 桶 sandbox。源文件 SandBox/Objects/AreaMarkers/AnimatedBasicAreaIndicator.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# AnimatedBasicAreaIndicator

**Namespace:** `SandBox.Objects.AreaMarkers`
**Module:** `SandBox`
**Type:** `public class AnimatedBasicAreaIndicator : AreaMarker`
**File:** `SandBox/Objects/AreaMarkers/AnimatedBasicAreaIndicator.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

AnimatedBasicAreaIndicator 位于 SandBox 模块，源文件 SandBox/Objects/AreaMarkers/AnimatedBasicAreaIndicator.cs。它是一个 public 类，实现/继承 AreaMarker，继承链为 AnimatedBasicAreaIndicator → AreaMarker → MissionObject → ScriptComponentBehavior → DotNetObject。public/protected 成员共 6 个：4 方法、1 属性、1 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：AnimatedBasicAreaIndicator 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.Objects.AreaMarkers`，继承链 AnimatedBasicAreaIndicator → AreaMarker → MissionObject → ScriptComponentBehavior → DotNetObject。成员构成以方法为主（方法 4/6，属性 1/6），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/Objects/AreaMarkers/AnimatedBasicAreaIndicator.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsActive` | `public bool IsActive` | 属性 |
| `OnInit` | `protected override void OnInit()` | 方法 |
| `SetIsActive` | `public void SetIsActive(bool isActive)` | 方法 |
| `SetOverriddenName` | `public void SetOverriddenName(TextObject name)` | 方法 |
| `GetName` | `public override TextObject GetName()` | 方法 |
| `NameStringId` | `public string NameStringId` | 字段 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 AreaMarker](../../mission-ext/AreaMarker/)
- [同命名空间 BasicAreaIndicator](../BasicAreaIndicator/)
- [同命名空间 CommonAreaMarker](../CommonAreaMarker/)
- [同命名空间 StealthAreaMarker](../StealthAreaMarker/)
- [同命名空间 WorkshopAreaMarker](../WorkshopAreaMarker/)
