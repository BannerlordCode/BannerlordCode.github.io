---
title: "MapAtmosphereProbe"
description: "MapAtmosphereProbe：TaleWorlds.MountAndBlade 的 public 类，继承 ScriptComponentBehavior；公开成员 9 个（方法 3、属性 0、字段 5）。源文件 TaleWorlds.MountAndBlade/MapAtmosphereProbe.cs。"
---
# MapAtmosphereProbe

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MapAtmosphereProbe : ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade/MapAtmosphereProbe.cs`

## 概述

MapAtmosphereProbe 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/MapAtmosphereProbe.cs。它是一个 public 类，实现/继承 ScriptComponentBehavior，继承链为 MapAtmosphereProbe → ScriptComponentBehavior。public/protected 成员共 9 个：3 方法、5 字段、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MapAtmosphereProbe 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 MapAtmosphereProbe → ScriptComponentBehavior。成员构成以方法为主（方法 3/9，属性 0/9），对外主要以操作入口暴露。继承链上的 ScriptComponentBehavior 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/MapAtmosphereProbe.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetInfluenceAmount` | `public float GetInfluenceAmount(Vec3 worldPosition)` | 方法 |
| `MapAtmosphereProbe` | `public MapAtmosphereProbe()` | 构造函数 |
| `OnEditorTick` | `protected internal override void OnEditorTick(float dt)` | 方法 |
| `OnEditorVariableChanged` | `protected internal override void OnEditorVariableChanged(string variableName)` | 方法 |
| `visualizeRadius` | `public bool visualizeRadius` | 字段 |
| `hideAllProbes` | `public bool hideAllProbes` | 字段 |
| `hideAllProbesStatic` | `public static bool hideAllProbesStatic` | 字段 |
| `minRadius` | `public float minRadius` | 字段 |
| `maxRadius` | `public float maxRadius` | 字段 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
