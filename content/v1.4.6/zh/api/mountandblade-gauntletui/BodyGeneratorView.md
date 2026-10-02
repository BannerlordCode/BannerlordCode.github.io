---
title: "BodyGeneratorView"
description: "BodyGeneratorView：TaleWorlds.MountAndBlade.GauntletUI 的 public 类，继承 IFaceGeneratorHandler；公开成员 12 个（方法 7、属性 4、字段 0）。源文件 TaleWorlds.MountAndBlade.GauntletUI/BodyGenerator/BodyGeneratorView.cs。"
---
# BodyGeneratorView

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.BodyGenerator`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`
**Type:** `public class BodyGeneratorView : IFaceGeneratorHandler`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/BodyGenerator/BodyGeneratorView.cs`

## 概述

BodyGeneratorView 位于 TaleWorlds.MountAndBlade.GauntletUI 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI/BodyGenerator/BodyGeneratorView.cs。它是一个 public 类，实现/继承 IFaceGeneratorHandler，继承链为 BodyGeneratorView → IFaceGeneratorHandler。public/protected 成员共 12 个：7 方法、4 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BodyGeneratorView 是 TaleWorlds.MountAndBlade.GauntletUI 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.GauntletUI.BodyGenerator），继承链 BodyGeneratorView → IFaceGeneratorHandler。成员构成以方法为主（方法 7/12，属性 4/12），对外主要以操作入口暴露。继承链上的 IFaceGeneratorHandler 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI/BodyGenerator/BodyGeneratorView.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DataSource` | `public FaceGenVM DataSource` | 属性 |
| `GauntletLayer` | `public GauntletLayer GauntletLayer` | 属性 |
| `SceneLayer` | `public SceneLayer SceneLayer` | 属性 |
| `BodyGen` | `public BodyGenerator BodyGen` | 属性 |
| `BodyGeneratorView` | `public BodyGeneratorView(ControlCharacterCreationStage affirmativeAction, TextObject affirmativeActionText, ControlCharacterCreationStage negativeAction, TextObject negativeActionText, BasicCharacterObject character, bool openedFromMultiplayer, IFaceGeneratorCustomFilter filter, Equipment dressedEquipment = null, ControlCharacterCreationStageReturnInt getCurrentStageIndexAction = null, ControlCharacterCreationStageReturnInt getTotalStageCountAction = null, ControlCharacterCreationStageReturnInt getFurthestIndexAction = null, ControlCharacterCreationStageWithInt goToIndexAction = null, FaceGenHistory faceGenHistory = null)` | 构造函数 |
| `ResetFaceToDefault` | `public void ResetFaceToDefault()` | 方法 |
| `FaceGenShowDebug` | `public static string FaceGenShowDebug(List<string>strings)` | 方法 |
| `FaceGenUpdateDeformKeys` | `public static string FaceGenUpdateDeformKeys(List<string>strings)` | 方法 |
| `ReadyToRender` | `public bool ReadyToRender()` | 方法 |
| `OnTick` | `public void OnTick(float dt)` | 方法 |
| `OnFinalize` | `public void OnFinalize()` | 方法 |
| `InitCamera` | `public static MatrixFrame InitCamera(Camera camera, Vec3 cameraPosition)` | 方法 |

## 参见

- [↑ mountandblade-gauntletui 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 GauntletBodyGeneratorScreen](../GauntletBodyGeneratorScreen)
