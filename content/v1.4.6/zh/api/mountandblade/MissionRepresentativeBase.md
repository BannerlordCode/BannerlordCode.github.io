---
title: "MissionRepresentativeBase"
description: "MissionRepresentativeBase：TaleWorlds.MountAndBlade 的 public 类，继承 PeerComponent；公开成员 11 个（方法 4、属性 5、字段 0）。源文件 TaleWorlds.MountAndBlade/MissionRepresentativeBase.cs。"
---
# MissionRepresentativeBase

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class MissionRepresentativeBase : PeerComponent`
**File:** `TaleWorlds.MountAndBlade/MissionRepresentativeBase.cs`

## 概述

MissionRepresentativeBase 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/MissionRepresentativeBase.cs。它是一个 public 类（abstract），实现/继承 PeerComponent，继承链为 MissionRepresentativeBase → PeerComponent。public/protected 成员共 11 个：4 方法、5 属性、1 事件、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionRepresentativeBase 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 MissionRepresentativeBase → PeerComponent。成员构成以属性为主（属性 5/11，方法 4/11），对外主要以状态读取接口暴露。继承链上的 PeerComponent 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/MissionRepresentativeBase.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PlayerType` | `protected MissionRepresentativeBase.PlayerTypes PlayerType` | 属性 |
| `ControlledAgent` | `public Agent ControlledAgent` | 属性 |
| `Gold` | `public int Gold` | 属性 |
| `MissionPeer` | `public MissionPeer MissionPeer` | 属性 |
| `OnGoldUpdated;` | `public event Action OnGoldUpdated;` | 事件 |
| `SetAgent` | `public void SetAgent(Agent agent)` | 方法 |
| `OnAgentSpawned` | `public virtual void OnAgentSpawned()` | 方法 |
| `Tick` | `public virtual void Tick(float dt)` | 方法 |
| `UpdateGold` | `public void UpdateGold(int gold)` | 方法 |
| `PlayerTypes` | `protected enum PlayerTypes` | 属性 |
| `PlayerTypes` | `protected enum PlayerTypes` | 嵌套类型 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
