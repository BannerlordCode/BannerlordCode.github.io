---
title: "MapColorGradeManager"
description: "MapColorGradeManager：TaleWorlds.MountAndBlade.View 的 public 类，继承 ScriptComponentBehavior；公开成员 8 个（方法 8、属性 0、字段 0）。源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Scripts/MapColorGradeManager.cs。"
---
# MapColorGradeManager

**Namespace:** `TaleWorlds.MountAndBlade.View.Scripts`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class MapColorGradeManager : ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Scripts/MapColorGradeManager.cs`

## 概述

MapColorGradeManager 位于 TaleWorlds.MountAndBlade.View 模块，源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Scripts/MapColorGradeManager.cs。它是一个 public 类，实现/继承 ScriptComponentBehavior，继承链为 MapColorGradeManager → ScriptComponentBehavior。public/protected 成员共 8 个：8 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MapColorGradeManager 是 TaleWorlds.MountAndBlade.View 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.View.Scripts），继承链 MapColorGradeManager → ScriptComponentBehavior。成员构成以方法为主（方法 8/8，属性 0/8），对外主要以操作入口暴露。继承链上的 ScriptComponentBehavior 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Scripts/MapColorGradeManager.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnInit` | `protected override void OnInit()` | 方法 |
| `OnEditorInit` | `protected override void OnEditorInit()` | 方法 |
| `GetTickRequirement` | `public override ScriptComponentBehavior.TickRequirement GetTickRequirement()` | 方法 |
| `OnTick` | `protected override void OnTick(float dt)` | 方法 |
| `OnEditorTick` | `protected override void OnEditorTick(float dt)` | 方法 |
| `OnEditorVariableChanged` | `protected override void OnEditorVariableChanged(string variableName)` | 方法 |
| `ApplyAtmosphere` | `public void ApplyAtmosphere(bool forceLoadTextures)` | 方法 |
| `ApplyColorGrade` | `public void ApplyColorGrade(float dt)` | 方法 |

## 参见

- [↑ mountandblade-view 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 CharacterDebugSpawner](../CharacterDebugSpawner)
- [同命名空间 CharacterSpawner](../CharacterSpawner)
- [同命名空间 HandMorphTest](../HandMorphTest)
- [同命名空间 HandPose](../HandPose)
