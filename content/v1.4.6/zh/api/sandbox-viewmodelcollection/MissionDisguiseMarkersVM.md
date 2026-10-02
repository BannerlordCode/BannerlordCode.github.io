---
title: "MissionDisguiseMarkersVM"
description: "MissionDisguiseMarkersVM：SandBox.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 3 个（方法 0、属性 2、字段 0）。源文件 SandBox.ViewModelCollection/Missions/MainAgentDetection/MissionDisguiseMarkersVM.cs。"
---
# MissionDisguiseMarkersVM

**Namespace:** `SandBox.ViewModelCollection.Missions.MainAgentDetection`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class MissionDisguiseMarkersVM : ViewModel`
**File:** `SandBox.ViewModelCollection/Missions/MainAgentDetection/MissionDisguiseMarkersVM.cs`

## 概述

MissionDisguiseMarkersVM 位于 SandBox.ViewModelCollection 模块，源文件 SandBox.ViewModelCollection/Missions/MainAgentDetection/MissionDisguiseMarkersVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 MissionDisguiseMarkersVM → ViewModel。public/protected 成员共 3 个：2 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionDisguiseMarkersVM 是 SandBox.ViewModelCollection 的顶层类型，命名空间与模块目录不同（SandBox.ViewModelCollection.Missions.MainAgentDetection），继承链 MissionDisguiseMarkersVM → ViewModel。成员构成以属性为主（属性 2/3，方法 0/3），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.ViewModelCollection/Missions/MainAgentDetection/MissionDisguiseMarkersVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MissionDisguiseMarkersVM` | `public MissionDisguiseMarkersVM()` | 构造函数 |
| `TargetAgent` | `public MissionDisguiseMarkerItemVM TargetAgent` | 属性 |
| `MBBindingList` | `public MBBindingList<MissionDisguiseMarkerItemVM>HostileAgents` | 属性 |

## 参见

- [↑ sandbox-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 MainAgentDetectionVM](../MainAgentDetectionVM)
- [同命名空间 MissionDisguiseMarkerItemVM](../MissionDisguiseMarkerItemVM)
- [同命名空间 MissionLosingTargetVM](../MissionLosingTargetVM)
