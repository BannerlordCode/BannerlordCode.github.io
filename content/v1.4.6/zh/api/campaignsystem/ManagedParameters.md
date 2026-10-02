---
title: "ManagedParameters"
description: "ManagedParameters：TaleWorlds.CampaignSystem 的 public 类，继承 IManagedParametersInitializer；公开成员 4 个（方法 3、属性 1、字段 0）。源文件 TaleWorlds.CampaignSystem/ManagedParameters.cs。"
---
# ManagedParameters

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public sealed class ManagedParameters : IManagedParametersInitializer`
**File:** `TaleWorlds.CampaignSystem/ManagedParameters.cs`

## 概述

ManagedParameters 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/ManagedParameters.cs。它是一个 public 类（sealed），实现/继承 IManagedParametersInitializer，继承链为 ManagedParameters → IManagedParametersInitializer。public/protected 成员共 4 个：3 方法、1 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ManagedParameters 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录一致，继承链 ManagedParameters → IManagedParametersInitializer。成员构成以方法为主（方法 3/4，属性 1/4），对外主要以操作入口暴露。继承链上的 IManagedParametersInitializer 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/ManagedParameters.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Instance` | `public static ManagedParameters Instance` | 属性 |
| `Initialize` | `public void Initialize(string relativeXmlPath)` | 方法 |
| `GetManagedParameter` | `public bool GetManagedParameter(ManagedParametersEnum _managedParametersEnum)` | 方法 |
| `SetManagedParameter` | `public bool SetManagedParameter(ManagedParametersEnum _managedParametersEnum, bool value)` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionNotes](../ActionNotes)
- [同命名空间 AIBehaviorData](../AIBehaviorData)
- [同命名空间 Army](../Army)
- [同命名空间 AtmosphereGrid](../AtmosphereGrid)
