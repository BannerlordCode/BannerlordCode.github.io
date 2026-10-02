---
title: "PopupSceneSwitchItemSequence"
description: "PopupSceneSwitchItemSequence：TaleWorlds.MountAndBlade.View 的 public 类，继承 PopupSceneSequence；公开成员 5 个（方法 3、属性 1、字段 0）。源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Scripts/PopupSceneSwitchItemSequence.cs。"
---
# PopupSceneSwitchItemSequence

**Namespace:** `TaleWorlds.MountAndBlade.View.Scripts`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class PopupSceneSwitchItemSequence : PopupSceneSequence`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Scripts/PopupSceneSwitchItemSequence.cs`

## 概述

PopupSceneSwitchItemSequence 位于 TaleWorlds.MountAndBlade.View 模块，源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Scripts/PopupSceneSwitchItemSequence.cs。它是一个 public 类，实现/继承 PopupSceneSequence，继承链为 PopupSceneSwitchItemSequence → PopupSceneSequence → ScriptComponentBehavior。public/protected 成员共 5 个：3 方法、1 属性、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：PopupSceneSwitchItemSequence 是 TaleWorlds.MountAndBlade.View 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.View.Scripts），继承链 PopupSceneSwitchItemSequence → PopupSceneSequence → ScriptComponentBehavior。成员构成以方法为主（方法 3/5，属性 1/5），对外主要以操作入口暴露。继承链上的 ScriptComponentBehavior 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Scripts/PopupSceneSwitchItemSequence.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnInitialState` | `public override void OnInitialState()` | 方法 |
| `OnPositiveState` | `public override void OnPositiveState()` | 方法 |
| `OnNegativeState` | `public override void OnNegativeState()` | 方法 |
| `BodyPartIndex` | `public enum BodyPartIndex` | 属性 |
| `BodyPartIndex` | `public enum BodyPartIndex` | 嵌套类型 |

## 参见

- [↑ mountandblade-view 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 PopupSceneSequence](../PopupSceneSequence)
- [同命名空间 CharacterDebugSpawner](../CharacterDebugSpawner)
- [同命名空间 CharacterSpawner](../CharacterSpawner)
- [同命名空间 HandMorphTest](../HandMorphTest)
- [同命名空间 HandPose](../HandPose)
