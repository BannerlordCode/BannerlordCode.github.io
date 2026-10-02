---
title: "MPPerkCondition"
description: "MPPerkCondition：TaleWorlds.MountAndBlade 的 public 类；公开成员 10 个（方法 5、属性 3、字段 1）。源文件 TaleWorlds.MountAndBlade/MPPerkCondition.cs。"
---
# MPPerkCondition

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class MPPerkCondition`
**File:** `TaleWorlds.MountAndBlade/MPPerkCondition.cs`

## 概述

MPPerkCondition 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/MPPerkCondition.cs。它是一个 public 类（abstract），继承链为 MPPerkCondition。public/protected 成员共 10 个：5 方法、3 属性、1 字段、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MPPerkCondition 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 MPPerkCondition。成员构成以方法为主（方法 5/10，属性 3/10），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/MPPerkCondition.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `EventFlags` | `public virtual MPPerkCondition.PerkEventFlags EventFlags` | 属性 |
| `IsPeerCondition` | `public virtual bool IsPeerCondition` | 属性 |
| `Check` | `public abstract bool Check(MissionPeer peer);` | 方法 |
| `Check` | `public abstract bool Check(Agent agent);` | 方法 |
| `IsGameModesValid` | `protected virtual bool IsGameModesValid(List<string>gameModes)` | 方法 |
| `Deserialize` | `protected abstract void Deserialize(XmlNode node);` | 方法 |
| `CreateFrom` | `public static MPPerkCondition CreateFrom(List<string>gameModes, XmlNode node)` | 方法 |
| `Type>Registered` | `protected static Dictionary<string, Type>Registered` | 字段 |
| `PerkEventFlags` | `public enum PerkEventFlags` | 属性 |
| `PerkEventFlags` | `public enum PerkEventFlags` | 嵌套类型 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
