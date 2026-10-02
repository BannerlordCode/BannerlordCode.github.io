---
title: "MissionHintLogic"
description: "MissionHintLogic：TaleWorlds.MountAndBlade.Missions.MissionLogics 的 public 类，继承 MissionLogic；公开成员 6 个（方法 3、属性 1、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/Missions/MissionLogics/MissionHintLogic.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionHintLogic

**Namespace:** `TaleWorlds.MountAndBlade.Missions.MissionLogics`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MissionHintLogic : MissionLogic`
**File:** `TaleWorlds.MountAndBlade/Missions/MissionLogics/MissionHintLogic.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

MissionHintLogic 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/Missions/MissionLogics/MissionHintLogic.cs。它是一个 public 类，实现/继承 MissionLogic，继承链为 MissionHintLogic → MissionLogic → MissionBehavior → IMissionBehavior。public/protected 成员共 6 个：3 方法、1 属性、1 事件、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionHintLogic 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.Missions.MissionLogics`，继承链 MissionHintLogic → MissionLogic → MissionBehavior → IMissionBehavior。成员构成以方法为主（方法 3/6，属性 1/6），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/Missions/MissionLogics/MissionHintLogic.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnActiveHintChanged;` | `public event MissionHintLogic.MissionHintChangedDelegate OnActiveHintChanged;` | 事件 |
| `ActiveHint` | `public MissionHint ActiveHint` | 属性 |
| `SetActiveHint` | `public void SetActiveHint(MissionHint hint)` | 方法 |
| `Clear` | `public void Clear()` | 方法 |
| `MissionHintChangedDelegate` | `public delegate void MissionHintChangedDelegate(MissionHint previousHint, MissionHint newHint);` | 方法 |
| `MissionHintChangedDelegate` | `public delegate void MissionHintChangedDelegate(MissionHint previousHint, MissionHint newHint)` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MissionLogic](../MissionLogic/)
- [同命名空间 MissionObjectiveLogic](../MissionObjectiveLogic/)
