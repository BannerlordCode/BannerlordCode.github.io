---
title: "EditorGameManager"
description: "EditorGameManager：TaleWorlds.MountAndBlade 的 public 类，继承 MBGameManager；公开成员 3 个（方法 3、属性 0、字段 0）。源文件 TaleWorlds.MountAndBlade/EditorGameManager.cs。"
---
# EditorGameManager

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class EditorGameManager : MBGameManager`
**File:** `TaleWorlds.MountAndBlade/EditorGameManager.cs`

## 概述

EditorGameManager 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/EditorGameManager.cs。它是一个 public 类，实现/继承 MBGameManager，继承链为 EditorGameManager → MBGameManager → GameManagerBase。public/protected 成员共 3 个：3 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：EditorGameManager 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 EditorGameManager → MBGameManager → GameManagerBase。成员构成以方法为主（方法 3/3，属性 0/3），对外主要以操作入口暴露。继承链上的 GameManagerBase 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/EditorGameManager.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DoLoadingForGameManager` | `protected override void DoLoadingForGameManager(GameManagerLoadingSteps gameManagerLoadingStep, out GameManagerLoadingSteps nextStep)` | 方法 |
| `OnAfterCampaignStart` | `public override void OnAfterCampaignStart(Game game)` | 方法 |
| `OnLoadFinished` | `public override void OnLoadFinished()` | 方法 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 MBGameManager](../MBGameManager)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
