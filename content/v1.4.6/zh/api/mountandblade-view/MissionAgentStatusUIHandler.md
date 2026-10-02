---
title: "MissionAgentStatusUIHandler"
description: "MissionAgentStatusUIHandler：TaleWorlds.MountAndBlade.View 的 public 类，继承 MissionBattleUIBaseView、IInteractionInterfaceHandler；公开成员 7 个（方法 7、属性 0、字段 0）。源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionAgentStatusUIHandler.cs。"
---
# MissionAgentStatusUIHandler

**Namespace:** `TaleWorlds.MountAndBlade.View.MissionViews`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class MissionAgentStatusUIHandler : MissionBattleUIBaseView, IInteractionInterfaceHandler`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionAgentStatusUIHandler.cs`

## 概述

MissionAgentStatusUIHandler 位于 TaleWorlds.MountAndBlade.View 模块，源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionAgentStatusUIHandler.cs。它是一个 public 类，实现/继承 MissionBattleUIBaseView、IInteractionInterfaceHandler，继承链为 MissionAgentStatusUIHandler → MissionBattleUIBaseView → MissionView → MissionBehavior。public/protected 成员共 7 个：7 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionAgentStatusUIHandler 是 TaleWorlds.MountAndBlade.View 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.View.MissionViews），继承链 MissionAgentStatusUIHandler → MissionBattleUIBaseView → MissionView → MissionBehavior。成员构成以方法为主（方法 7/7，属性 0/7），对外主要以操作入口暴露。继承链上的 MissionBehavior 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionAgentStatusUIHandler.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AddInteractionMessage` | `public virtual void AddInteractionMessage(MissionInteractionItemBaseVM message)` | 方法 |
| `RemoveInteractionMessage` | `public virtual void RemoveInteractionMessage(MissionInteractionItemBaseVM message)` | 方法 |
| `HasInteractionMessage` | `public virtual bool HasInteractionMessage(MissionInteractionItemBaseVM message)` | 方法 |
| `OnCreateView` | `protected override void OnCreateView()` | 方法 |
| `OnDestroyView` | `protected override void OnDestroyView()` | 方法 |
| `OnSuspendView` | `protected override void OnSuspendView()` | 方法 |
| `OnResumeView` | `protected override void OnResumeView()` | 方法 |

## 参见

- [↑ mountandblade-view 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 MissionBattleUIBaseView](../MissionBattleUIBaseView)
- [同命名空间 MissionAgentContourControllerView](../MissionAgentContourControllerView)
- [同命名空间 MissionAgentLabelView](../MissionAgentLabelView)
- [同命名空间 MissionBattleUIBaseView](../MissionBattleUIBaseView)
- [同命名空间 MissionBoundaryCrossingView](../MissionBoundaryCrossingView)
