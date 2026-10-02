---
title: "CharacterCreationCultureStageView"
description: "CharacterCreationCultureStageView：SandBox.GauntletUI 的 public 类，继承 CharacterCreationStageViewBase；公开成员 9 个（方法 8、属性 0、字段 0）。源文件 SandBox.GauntletUI/CharacterCreation/CharacterCreationCultureStageView.cs。"
---
# CharacterCreationCultureStageView

**Namespace:** `SandBox.GauntletUI.CharacterCreation`
**Module:** `SandBox.GauntletUI`
**Type:** `public class CharacterCreationCultureStageView : CharacterCreationStageViewBase`
**File:** `SandBox.GauntletUI/CharacterCreation/CharacterCreationCultureStageView.cs`

## 概述

CharacterCreationCultureStageView 位于 SandBox.GauntletUI 模块，源文件 SandBox.GauntletUI/CharacterCreation/CharacterCreationCultureStageView.cs。它是一个 public 类，实现/继承 CharacterCreationStageViewBase，继承链为 CharacterCreationCultureStageView → CharacterCreationStageViewBase。public/protected 成员共 9 个：8 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CharacterCreationCultureStageView 是 SandBox.GauntletUI 的顶层类型，命名空间与模块目录不同（SandBox.GauntletUI.CharacterCreation），继承链 CharacterCreationCultureStageView → CharacterCreationStageViewBase。成员构成以方法为主（方法 8/9，属性 0/9），对外主要以操作入口暴露。继承链上的 CharacterCreationStageViewBase 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.GauntletUI/CharacterCreation/CharacterCreationCultureStageView.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CharacterCreationCultureStageView` | `public CharacterCreationCultureStageView(CharacterCreationManager characterCreationManager, ControlCharacterCreationStage affirmativeAction, TextObject affirmativeActionText, ControlCharacterCreationStage negativeAction, TextObject negativeActionText, ControlCharacterCreationStage onRefresh, ControlCharacterCreationStageReturnInt getCurrentStageIndexAction, ControlCharacterCreationStageReturnInt getTotalStageCountAction, ControlCharacterCreationStageReturnInt getFurthestIndexAction, ControlCharacterCreationStageWithInt goToIndexAction) : base(affirmativeAction, negativeAction, onRefresh, getCurrentStageIndexAction, getTotalStageCountAction, getFurthestIndexAction, goToIndexAction)` | 构造函数 |
| `OnFinalize` | `protected override void OnFinalize()` | 方法 |
| `Tick` | `public override void Tick(float dt)` | 方法 |
| `NextStage` | `public override void NextStage()` | 方法 |
| `PreviousStage` | `public override void PreviousStage()` | 方法 |
| `GetVirtualStageCount` | `public override int GetVirtualStageCount()` | 方法 |
| `IEnumerable` | `public override IEnumerable<ScreenLayer>GetLayers()` | 方法 |
| `LoadEscapeMenuMovie` | `public override void LoadEscapeMenuMovie()` | 方法 |
| `ReleaseEscapeMenuMovie` | `public override void ReleaseEscapeMenuMovie()` | 方法 |

## 参见

- [↑ sandbox-gauntletui 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 CharacterCreationBannerEditorView](../CharacterCreationBannerEditorView)
- [同命名空间 CharacterCreationClanNamingStageView](../CharacterCreationClanNamingStageView)
- [同命名空间 CharacterCreationFaceGeneratorView](../CharacterCreationFaceGeneratorView)
- [同命名空间 CharacterCreationNarrativeStageView](../CharacterCreationNarrativeStageView)
