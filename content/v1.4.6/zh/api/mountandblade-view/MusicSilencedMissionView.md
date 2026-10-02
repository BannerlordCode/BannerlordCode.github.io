---
title: "MusicSilencedMissionView"
description: "MusicSilencedMissionView：TaleWorlds.MountAndBlade.View 的 public 类，继承 MissionView、IMusicHandler；公开成员 2 个（方法 2、属性 0、字段 0）。源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Sound/MusicSilencedMissionView.cs。"
---
# MusicSilencedMissionView

**Namespace:** `TaleWorlds.MountAndBlade.View.MissionViews.Sound`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class MusicSilencedMissionView : MissionView, IMusicHandler`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Sound/MusicSilencedMissionView.cs`

## 概述

MusicSilencedMissionView 位于 TaleWorlds.MountAndBlade.View 模块，源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Sound/MusicSilencedMissionView.cs。它是一个 public 类，实现/继承 MissionView、IMusicHandler，继承链为 MusicSilencedMissionView → MissionView → MissionBehavior。public/protected 成员共 2 个：2 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MusicSilencedMissionView 是 TaleWorlds.MountAndBlade.View 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.View.MissionViews.Sound），继承链 MusicSilencedMissionView → MissionView → MissionBehavior。成员构成以方法为主（方法 2/2，属性 0/2），对外主要以操作入口暴露。继承链上的 MissionBehavior 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Sound/MusicSilencedMissionView.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | 方法 |
| `OnMissionScreenFinalize` | `public override void OnMissionScreenFinalize()` | 方法 |

## 参见

- [↑ mountandblade-view 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 MissionView](../MissionView)
- [同命名空间 MusicBattleMissionView](../MusicBattleMissionView)
- [同命名空间 MusicStealthMissionView](../MusicStealthMissionView)
