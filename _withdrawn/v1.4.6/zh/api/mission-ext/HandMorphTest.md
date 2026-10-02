---
title: "HandMorphTest"
description: "HandMorphTest：TaleWorlds.MountAndBlade.View.Scripts 的 public 类，继承 ScriptComponentBehavior；公开成员 9 个（方法 7、属性 2、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Scripts/HandMorphTest.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# HandMorphTest

**Namespace:** `TaleWorlds.MountAndBlade.View.Scripts`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class HandMorphTest : ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Scripts/HandMorphTest.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

HandMorphTest 位于 TaleWorlds.MountAndBlade.View 模块，源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Scripts/HandMorphTest.cs。它是一个 public 类，实现/继承 ScriptComponentBehavior，继承链为 HandMorphTest → ScriptComponentBehavior → DotNetObject。public/protected 成员共 9 个：7 方法、2 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：HandMorphTest 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.View.Scripts`，继承链 HandMorphTest → ScriptComponentBehavior → DotNetObject。成员构成以方法为主（方法 7/9，属性 2/9），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Scripts/HandMorphTest.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ClothColor1` | `public uint ClothColor1` | 属性 |
| `ClothColor2` | `public uint ClothColor2` | 属性 |
| `OnInit` | `protected override void OnInit()` | 方法 |
| `OnEditorInit` | `protected override void OnEditorInit()` | 方法 |
| `OnEditorTick` | `protected override void OnEditorTick(float dt)` | 方法 |
| `SpawnCharacter` | `public void SpawnCharacter()` | 方法 |
| `Reset` | `public void Reset()` | 方法 |
| `InitWithCharacter` | `public void InitWithCharacter(CharacterCode characterCode)` | 方法 |
| `OnRemoved` | `protected override void OnRemoved(int removeReason)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ScriptComponentBehavior](../../engine/ScriptComponentBehavior/)
- [同命名空间 CharacterDebugSpawner](../CharacterDebugSpawner/)
- [同命名空间 CharacterSpawner](../CharacterSpawner/)
- [同命名空间 HandPose](../HandPose/)
- [同命名空间 MapColorGradeManager](../MapColorGradeManager/)
