---
title: "StoryModeViewSubModule"
description: "StoryModeViewSubModule：StoryMode.View 的 public 类，继承 MBSubModuleBase；公开成员 8 个（方法 8、属性 0、字段 0）。源文件 StoryMode.View/StoryModeViewSubModule.cs。"
---
# StoryModeViewSubModule

**Namespace:** `StoryMode.View`
**Module:** `StoryMode.View`
**Type:** `public class StoryModeViewSubModule : MBSubModuleBase`
**File:** `StoryMode.View/StoryModeViewSubModule.cs`

## 概述

StoryModeViewSubModule 位于 StoryMode.View 模块，源文件 StoryMode.View/StoryModeViewSubModule.cs。它是一个 public 类，实现/继承 MBSubModuleBase，继承链为 StoryModeViewSubModule → MBSubModuleBase。public/protected 成员共 8 个：8 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：StoryModeViewSubModule 是 StoryMode.View 的顶层类型，命名空间与模块目录一致，继承链 StoryModeViewSubModule → MBSubModuleBase。成员构成以方法为主（方法 8/8，属性 0/8），对外主要以操作入口暴露。继承链上的 MBSubModuleBase 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 StoryMode.View/StoryModeViewSubModule.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnGameInitializationFinished` | `public override void OnGameInitializationFinished(Game game)` | 方法 |
| `OnGameEnd` | `public override void OnGameEnd(Game game)` | 方法 |
| `OnSubModuleLoad` | `protected override void OnSubModuleLoad()` | 方法 |
| `FillDataForCampaign` | `protected virtual void FillDataForCampaign()` | 方法 |
| `OnSubModuleUnloaded` | `protected override void OnSubModuleUnloaded()` | 方法 |
| `OnSubModuleDeactivated` | `public override void OnSubModuleDeactivated()` | 方法 |
| `OnSubModuleActivated` | `public override void OnSubModuleActivated()` | 方法 |
| `OnBeforeGameStart` | `protected override void OnBeforeGameStart(MBGameManager mbGameManager, List<string>disabledModules)` | 方法 |

## 参见

- [↑ storymode-view 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 StoryModeViewCreator](../StoryModeViewCreator)
