---
title: "SpawnPointUnits"
description: "SpawnPointUnits：SandBox.View.Missions.SandBox 的 public 类；公开成员 9 个（方法 0、属性 6、字段 0）。canonical 桶 sandbox。源文件 SandBox.View/Missions/SandBox/SpawnPointUnits.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SpawnPointUnits

**Namespace:** `SandBox.View.Missions.SandBox`
**Module:** `SandBox.View`
**Type:** `public class SpawnPointUnits`
**File:** `SandBox.View/Missions/SandBox/SpawnPointUnits.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

SpawnPointUnits 位于 SandBox.View 模块，源文件 SandBox.View/Missions/SandBox/SpawnPointUnits.cs。它是一个 public 类，继承链为 SpawnPointUnits。public/protected 成员共 9 个：6 属性、2 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SpawnPointUnits 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.View.Missions.SandBox`，继承链 SpawnPointUnits。成员构成以属性为主（属性 6/9，方法 0/9），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.View/Missions/SandBox/SpawnPointUnits.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SpName` | `public string SpName` | 属性 |
| `Place` | `public SpawnPointUnits.SceneType Place` | 属性 |
| `MinCount` | `public int MinCount` | 属性 |
| `MaxCount` | `public int MaxCount` | 属性 |
| `Type` | `public string Type` | 属性 |
| `SpawnPointUnits` | `public SpawnPointUnits(string sp_name, SpawnPointUnits.SceneType place, int minCount, int maxCount)` | 构造函数 |
| `SpawnPointUnits` | `public SpawnPointUnits(string sp_name, SpawnPointUnits.SceneType place, string type, int minCount, int maxCount)` | 构造函数 |
| `SceneType` | `public enum SceneType` | 属性 |
| `SceneType` | `public enum SceneType` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 SpawnPointDebugView](../SpawnPointDebugView/)
