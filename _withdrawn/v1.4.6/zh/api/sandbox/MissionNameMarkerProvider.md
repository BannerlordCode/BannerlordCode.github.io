---
title: "MissionNameMarkerProvider"
description: "MissionNameMarkerProvider：SandBox.ViewModelCollection.Missions.NameMarker 的 public 类；公开成员 9 个（方法 8、属性 0、字段 0）。canonical 桶 sandbox。源文件 SandBox.ViewModelCollection/Missions/NameMarker/MissionNameMarkerProvider.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionNameMarkerProvider

**Namespace:** `SandBox.ViewModelCollection.Missions.NameMarker`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public abstract class MissionNameMarkerProvider`
**File:** `SandBox.ViewModelCollection/Missions/NameMarker/MissionNameMarkerProvider.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

MissionNameMarkerProvider 位于 SandBox.ViewModelCollection 模块，源文件 SandBox.ViewModelCollection/Missions/NameMarker/MissionNameMarkerProvider.cs。它是一个 public 类（abstract），继承链为 MissionNameMarkerProvider。public/protected 成员共 9 个：8 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionNameMarkerProvider 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.ViewModelCollection.Missions.NameMarker`，继承链 MissionNameMarkerProvider。成员构成以方法为主（方法 8/9，属性 0/9），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.ViewModelCollection/Missions/NameMarker/MissionNameMarkerProvider.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MissionNameMarkerProvider` | `public MissionNameMarkerProvider()` | 构造函数 |
| `CreateMarkers` | `public abstract void CreateMarkers(List<MissionNameMarkerTargetBaseVM>markers);` | 方法 |
| `Initialize` | `public void Initialize(Mission mission, Action onSetMarkersDirty)` | 方法 |
| `Destroy` | `public void Destroy(Mission mission)` | 方法 |
| `Tick` | `public void Tick(float dt)` | 方法 |
| `OnInitialize` | `protected virtual void OnInitialize(Mission mission)` | 方法 |
| `OnDestroy` | `protected virtual void OnDestroy(Mission mission)` | 方法 |
| `OnTick` | `protected virtual void OnTick(float dt)` | 方法 |
| `SetMarkersDirty` | `protected void SetMarkersDirty()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 MissionNameMarkerFactory](../MissionNameMarkerFactory/)
- [同命名空间 MissionNameMarkerHelper](../MissionNameMarkerHelper/)
- [同命名空间 MissionNameMarkerTargetBaseVM](../MissionNameMarkerTargetBaseVM/)
- [同命名空间 MissionNameMarkerTargetVM](../MissionNameMarkerTargetVM__1/)
