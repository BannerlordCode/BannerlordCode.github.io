---
title: "CharacterDebugSpawner"
description: "CharacterDebugSpawner：TaleWorlds.MountAndBlade.View 的 public 类，继承 ScriptComponentBehavior；公开成员 14 个（方法 10、属性 2、字段 2）。源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Scripts/CharacterDebugSpawner.cs。"
---
# CharacterDebugSpawner

**Namespace:** `TaleWorlds.MountAndBlade.View.Scripts`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class CharacterDebugSpawner : ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Scripts/CharacterDebugSpawner.cs`

## 概述

CharacterDebugSpawner 位于 TaleWorlds.MountAndBlade.View 模块，源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Scripts/CharacterDebugSpawner.cs。它是一个 public 类，实现/继承 ScriptComponentBehavior，继承链为 CharacterDebugSpawner → ScriptComponentBehavior。public/protected 成员共 14 个：10 方法、2 属性、2 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CharacterDebugSpawner 是 TaleWorlds.MountAndBlade.View 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.View.Scripts），继承链 CharacterDebugSpawner → ScriptComponentBehavior。成员构成以方法为主（方法 10/14，属性 2/14），对外主要以操作入口暴露。继承链上的 ScriptComponentBehavior 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Scripts/CharacterDebugSpawner.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ClothColor1` | `public uint ClothColor1` | 属性 |
| `ClothColor2` | `public uint ClothColor2` | 属性 |
| `OnInit` | `protected override void OnInit()` | 方法 |
| `OnEditorInit` | `protected override void OnEditorInit()` | 方法 |
| `OnEditorTick` | `protected override void OnEditorTick(float dt)` | 方法 |
| `OnRemoved` | `protected override void OnRemoved(int removeReason)` | 方法 |
| `OnEditorVariableChanged` | `protected override void OnEditorVariableChanged(string variableName)` | 方法 |
| `SetClothColors` | `public void SetClothColors(uint color1, uint color2)` | 方法 |
| `SpawnCharacter` | `public void SpawnCharacter()` | 方法 |
| `Reset` | `public void Reset()` | 方法 |
| `InitWithCharacter` | `public void InitWithCharacter(CharacterCode characterCode)` | 方法 |
| `WieldWeapon` | `public void WieldWeapon(CharacterCode characterCode)` | 方法 |
| `PoseAction` | `public readonly ActionIndexCache PoseAction` | 字段 |
| `LordName` | `public string LordName` | 字段 |

## 参见

- [↑ mountandblade-view 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 CharacterSpawner](../CharacterSpawner)
- [同命名空间 HandMorphTest](../HandMorphTest)
- [同命名空间 HandPose](../HandPose)
- [同命名空间 MapColorGradeManager](../MapColorGradeManager)
