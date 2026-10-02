---
title: "MissionFocusableObjectInformationProvider"
description: "MissionFocusableObjectInformationProvider：TaleWorlds.MountAndBlade 的 public 类；公开成员 5 个（方法 4、属性 0、字段 0）。源文件 TaleWorlds.MountAndBlade/MissionFocusableObjectInformationProvider.cs。"
---
# MissionFocusableObjectInformationProvider

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MissionFocusableObjectInformationProvider`
**File:** `TaleWorlds.MountAndBlade/MissionFocusableObjectInformationProvider.cs`

## 概述

MissionFocusableObjectInformationProvider 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/MissionFocusableObjectInformationProvider.cs。它是一个 public 类，继承链为 MissionFocusableObjectInformationProvider。public/protected 成员共 5 个：4 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionFocusableObjectInformationProvider 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 MissionFocusableObjectInformationProvider。成员构成以方法为主（方法 4/5，属性 0/5），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/MissionFocusableObjectInformationProvider.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MissionFocusableObjectInformationProvider` | `public MissionFocusableObjectInformationProvider()` | 构造函数 |
| `OnFinalize` | `public void OnFinalize()` | 方法 |
| `AddInfoCallback` | `public void AddInfoCallback(GetFocusableObjectInteractionTextsDelegate callback)` | 方法 |
| `RemoveInfoCallback` | `public void RemoveInfoCallback(GetFocusableObjectInteractionTextsDelegate callback)` | 方法 |
| `GetInteractionTexts` | `public void GetInteractionTexts(Agent requesterAgent, IFocusable focusable, bool isInteractable, out FocusableObjectInformation focusableObjectInformation)` | 方法 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
