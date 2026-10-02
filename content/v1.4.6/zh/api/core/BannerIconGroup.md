---
title: "BannerIconGroup"
description: "BannerIconGroup：TaleWorlds.Core 的 public 类；公开成员 5 个（方法 2、属性 3、字段 0）。源文件 TaleWorlds.Core/BannerIconGroup.cs。"
---
# BannerIconGroup

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class BannerIconGroup`
**File:** `TaleWorlds.Core/BannerIconGroup.cs`

## 概述

BannerIconGroup 位于 TaleWorlds.Core 模块，源文件 TaleWorlds.Core/BannerIconGroup.cs。它是一个 public 类，继承链为 BannerIconGroup。public/protected 成员共 5 个：2 方法、3 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BannerIconGroup 是 TaleWorlds.Core 的顶层类型，命名空间与模块目录一致，继承链 BannerIconGroup。成员构成以属性为主（属性 3/5，方法 2/5），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Core/BannerIconGroup.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Name` | `public TextObject Name` | 属性 |
| `IsPattern` | `public bool IsPattern` | 属性 |
| `Id` | `public int Id` | 属性 |
| `Deserialize` | `public void Deserialize(XmlNode xmlNode, MBList<BannerIconGroup>previouslyAddedGroups)` | 方法 |
| `Merge` | `public void Merge(BannerIconGroup otherGroup)` | 方法 |

## 参见

- [↑ core 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionSetCode](../ActionSetCode)
- [同命名空间 AgentAttackType](../AgentAttackType)
- [同命名空间 AgentControllerType](../AgentControllerType)
- [同命名空间 AgentData](../AgentData)
