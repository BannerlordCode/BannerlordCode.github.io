---
title: "WaveFloater"
description: "WaveFloater：TaleWorlds.MountAndBlade 的 public 类，继承 ScriptComponentBehavior；公开成员 15 个（方法 7、属性 0、字段 8）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/WaveFloater.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# WaveFloater

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class WaveFloater : ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade/WaveFloater.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

WaveFloater 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/WaveFloater.cs。它是一个 public 类，实现/继承 ScriptComponentBehavior，继承链为 WaveFloater → ScriptComponentBehavior → DotNetObject。public/protected 成员共 15 个：7 方法、8 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：WaveFloater 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 WaveFloater → ScriptComponentBehavior → DotNetObject。成员构成以方法为主（方法 7/15，属性 0/15），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/WaveFloater.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnInit` | `protected internal override void OnInit()` | 方法 |
| `OnEditorInit` | `protected internal override void OnEditorInit()` | 方法 |
| `OnSceneSave` | `protected internal override void OnSceneSave(string saveFolder)` | 方法 |
| `OnEditorTick` | `protected internal override void OnEditorTick(float dt)` | 方法 |
| `GetTickRequirement` | `public override ScriptComponentBehavior.TickRequirement GetTickRequirement()` | 方法 |
| `OnTick` | `protected internal override void OnTick(float dt)` | 方法 |
| `OnEditorVariableChanged` | `protected internal override void OnEditorVariableChanged(string variableName)` | 方法 |
| `oscillationFrequency` | `public float oscillationFrequency` | 字段 |
| `maxOscillationAngle` | `public float maxOscillationAngle` | 字段 |
| `bounceXFrequency` | `public float bounceXFrequency` | 字段 |
| `maxBounceXDistance` | `public float maxBounceXDistance` | 字段 |
| `bounceYFrequency` | `public float bounceYFrequency` | 字段 |
| `maxBounceYDistance` | `public float maxBounceYDistance` | 字段 |
| `bounceZFrequency` | `public float bounceZFrequency` | 字段 |
| `maxBounceZDistance` | `public float maxBounceZDistance` | 字段 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ScriptComponentBehavior](../../engine/ScriptComponentBehavior/)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
