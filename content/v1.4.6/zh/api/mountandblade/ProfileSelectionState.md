---
title: "ProfileSelectionState"
description: "ProfileSelectionState：TaleWorlds.MountAndBlade 的 public 类，继承 GameState；公开成员 6 个（方法 3、属性 1、字段 0）。源文件 TaleWorlds.MountAndBlade/ProfileSelectionState.cs。"
---
# ProfileSelectionState

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class ProfileSelectionState : GameState`
**File:** `TaleWorlds.MountAndBlade/ProfileSelectionState.cs`

## 概述

ProfileSelectionState 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/ProfileSelectionState.cs。它是一个 public 类，实现/继承 GameState，继承链为 ProfileSelectionState → GameState。public/protected 成员共 6 个：3 方法、1 属性、1 事件、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ProfileSelectionState 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 ProfileSelectionState → GameState。成员构成以方法为主（方法 3/6，属性 1/6），对外主要以操作入口暴露。继承链上的 GameState 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/ProfileSelectionState.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsDirectPlayPossible` | `public bool IsDirectPlayPossible` | 属性 |
| `OnProfileSelection;` | `public event ProfileSelectionState.OnProfileSelectionEvent OnProfileSelection;` | 事件 |
| `OnProfileSelected` | `public void OnProfileSelected()` | 方法 |
| `StartGame` | `public void StartGame()` | 方法 |
| `OnProfileSelectionEvent` | `public delegate void OnProfileSelectionEvent();` | 方法 |
| `OnProfileSelectionEvent` | `public delegate void OnProfileSelectionEvent()` | 嵌套类型 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
