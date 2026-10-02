---
title: "NotificationProperty"
description: "NotificationProperty：TaleWorlds.MountAndBlade 的 public 类，继承 Attribute；公开成员 4 个（方法 0、属性 3、字段 0）。源文件 TaleWorlds.MountAndBlade/NotificationProperty.cs。"
---
# NotificationProperty

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class NotificationProperty : Attribute`
**File:** `TaleWorlds.MountAndBlade/NotificationProperty.cs`

## 概述

NotificationProperty 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/NotificationProperty.cs。它是一个 public 类，实现/继承 Attribute，继承链为 NotificationProperty → Attribute。public/protected 成员共 4 个：3 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：NotificationProperty 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 NotificationProperty → Attribute。成员构成以属性为主（属性 3/4，方法 0/4），对外主要以状态读取接口暴露。继承链上的 Attribute 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/NotificationProperty.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `StringId` | `public string StringId` | 属性 |
| `SoundIdOne` | `public string SoundIdOne` | 属性 |
| `SoundIdTwo` | `public string SoundIdTwo` | 属性 |
| `NotificationProperty` | `public NotificationProperty(string stringId, string soundIdOne, string soundIdTwo = "")` | 构造函数 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
