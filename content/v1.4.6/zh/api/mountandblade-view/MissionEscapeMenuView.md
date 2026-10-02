---
title: "MissionEscapeMenuView"
description: "MissionEscapeMenuView：TaleWorlds.MountAndBlade.View 的 public 类，继承 MissionView；公开成员 1 个（方法 0、属性 1、字段 0）。源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionEscapeMenuView.cs。"
---
# MissionEscapeMenuView

**Namespace:** `TaleWorlds.MountAndBlade.View.MissionViews`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public abstract class MissionEscapeMenuView : MissionView`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionEscapeMenuView.cs`

## 概述

MissionEscapeMenuView 位于 TaleWorlds.MountAndBlade.View 模块，源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionEscapeMenuView.cs。它是一个 public 类（abstract），实现/继承 MissionView，继承链为 MissionEscapeMenuView → MissionView → MissionBehavior。public/protected 成员共 1 个：1 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionEscapeMenuView 是 TaleWorlds.MountAndBlade.View 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.View.MissionViews），继承链 MissionEscapeMenuView → MissionView → MissionBehavior。成员构成以属性为主（属性 1/1，方法 0/1），对外主要以状态读取接口暴露。继承链上的 MissionBehavior 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionEscapeMenuView.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsActive` | `public bool IsActive` | 属性 |

## 参见

- [↑ mountandblade-view 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 MissionView](../MissionView)
- [同命名空间 MissionAgentContourControllerView](../MissionAgentContourControllerView)
- [同命名空间 MissionAgentLabelView](../MissionAgentLabelView)
- [同命名空间 MissionAgentStatusUIHandler](../MissionAgentStatusUIHandler)
- [同命名空间 MissionBattleUIBaseView](../MissionBattleUIBaseView)
