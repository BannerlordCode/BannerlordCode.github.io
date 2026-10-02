---
title: "MissionAgentMarkerTargetVM"
description: "MissionAgentMarkerTargetVM：SandBox.ViewModelCollection 的 public 类，继承 MissionNameMarkerTargetVM<Agent>；公开成员 4 个（方法 3、属性 0、字段 0）。源文件 SandBox.ViewModelCollection/Missions/NameMarker/Targets/MissionAgentMarkerTargetVM.cs。"
---
# MissionAgentMarkerTargetVM

**Namespace:** `SandBox.ViewModelCollection.Missions.NameMarker.Targets`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class MissionAgentMarkerTargetVM : MissionNameMarkerTargetVM<Agent>`
**File:** `SandBox.ViewModelCollection/Missions/NameMarker/Targets/MissionAgentMarkerTargetVM.cs`

## 概述

MissionAgentMarkerTargetVM 位于 SandBox.ViewModelCollection 模块，源文件 SandBox.ViewModelCollection/Missions/NameMarker/Targets/MissionAgentMarkerTargetVM.cs。它是一个 public 类，实现/继承 MissionNameMarkerTargetVM<Agent>，继承链为 MissionAgentMarkerTargetVM → MissionNameMarkerTargetVM → MissionNameMarkerTargetBaseVM → ViewModel。public/protected 成员共 4 个：3 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionAgentMarkerTargetVM 是 SandBox.ViewModelCollection 的顶层类型，命名空间与模块目录不同（SandBox.ViewModelCollection.Missions.NameMarker.Targets），继承链 MissionAgentMarkerTargetVM → MissionNameMarkerTargetVM → MissionNameMarkerTargetBaseVM → ViewModel。成员构成以方法为主（方法 3/4，属性 0/4），对外主要以操作入口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.ViewModelCollection/Missions/NameMarker/Targets/MissionAgentMarkerTargetVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MissionAgentMarkerTargetVM` | `public MissionAgentMarkerTargetVM(Agent target) : base(target)` | 构造函数 |
| `UpdatePosition` | `public override void UpdatePosition(Camera missionCamera)` | 方法 |
| `GetName` | `protected override TextObject GetName()` | 方法 |
| `UpdateQuestStatus` | `public void UpdateQuestStatus()` | 方法 |

## 参见

- [↑ sandbox-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 MissionNameMarkerTargetVM](../MissionNameMarkerTargetVM__1)
- [同命名空间 MissionAnimatedBasicAreaIndicatorMarkerTargetVM](../MissionAnimatedBasicAreaIndicatorMarkerTargetVM)
- [同命名空间 MissionBasicAreaIndicatorMarkerTargetVM](../MissionBasicAreaIndicatorMarkerTargetVM)
- [同命名空间 MissionCommonAreaMarkerTargetVM](../MissionCommonAreaMarkerTargetVM)
- [同命名空间 MissionGenericMarkerTargetVM](../MissionGenericMarkerTargetVM)
