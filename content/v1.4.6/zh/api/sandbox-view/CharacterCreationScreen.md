---
title: "CharacterCreationScreen"
description: "CharacterCreationScreen：SandBox.View 的 public 类，继承 ScreenBase、ICharacterCreationStateHandler；公开成员 2 个（方法 1、属性 0、字段 0）。源文件 SandBox.View/CharacterCreation/CharacterCreationScreen.cs。"
---
# CharacterCreationScreen

**Namespace:** `SandBox.View.CharacterCreation`
**Module:** `SandBox.View`
**Type:** `public class CharacterCreationScreen : ScreenBase, ICharacterCreationStateHandler, IGameStateListener`
**File:** `SandBox.View/CharacterCreation/CharacterCreationScreen.cs`

## 概述

CharacterCreationScreen 位于 SandBox.View 模块，源文件 SandBox.View/CharacterCreation/CharacterCreationScreen.cs。它是一个 public 类，实现/继承 ScreenBase、ICharacterCreationStateHandler、IGameStateListener，继承链为 CharacterCreationScreen → ScreenBase。public/protected 成员共 2 个：1 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CharacterCreationScreen 是 SandBox.View 的顶层类型，命名空间与模块目录不同（SandBox.View.CharacterCreation），继承链 CharacterCreationScreen → ScreenBase。成员构成以方法为主（方法 1/2，属性 0/2），对外主要以操作入口暴露。继承链上的 ScreenBase 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.View/CharacterCreation/CharacterCreationScreen.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CharacterCreationScreen` | `public CharacterCreationScreen(CharacterCreationState characterCreationState)` | 构造函数 |
| `OnFrameTick` | `protected override void OnFrameTick(float dt)` | 方法 |

## 参见

- [↑ sandbox-view 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 CharacterCreationStageViewAttribute](../CharacterCreationStageViewAttribute)
- [同命名空间 CharacterCreationStageViewBase](../CharacterCreationStageViewBase)
