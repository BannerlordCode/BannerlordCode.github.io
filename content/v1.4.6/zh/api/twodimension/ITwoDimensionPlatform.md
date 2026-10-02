---
title: "ITwoDimensionPlatform"
description: "ITwoDimensionPlatform：TaleWorlds.TwoDimension 的 public 接口；公开成员 25 个（方法 20、属性 5、字段 0）。源文件 TaleWorlds.TwoDimension/ITwoDimensionPlatform.cs。"
---
# ITwoDimensionPlatform

**Namespace:** `TaleWorlds.TwoDimension`
**Module:** `TaleWorlds.TwoDimension`
**Type:** `public interface ITwoDimensionPlatform`
**File:** `TaleWorlds.TwoDimension/ITwoDimensionPlatform.cs`

## 概述

ITwoDimensionPlatform 位于 TaleWorlds.TwoDimension 模块，源文件 TaleWorlds.TwoDimension/ITwoDimensionPlatform.cs。它是一个 public 接口，继承链为 ITwoDimensionPlatform。public/protected 成员共 25 个：20 方法、5 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ITwoDimensionPlatform 是 TaleWorlds.TwoDimension 的顶层类型，命名空间与模块目录一致，继承链 ITwoDimensionPlatform。成员构成以方法为主（方法 20/25，属性 5/25），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.TwoDimension/ITwoDimensionPlatform.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Width` | `float Width` | 属性 |
| `Height` | `float Height` | 属性 |
| `ReferenceWidth` | `float ReferenceWidth` | 属性 |
| `ReferenceHeight` | `float ReferenceHeight` | 属性 |
| `ApplicationTime` | `float ApplicationTime` | 属性 |
| `OnFrameBegin` | `void OnFrameBegin();` | 方法 |
| `OnFrameEnd` | `void OnFrameEnd();` | 方法 |
| `Clear` | `void Clear();` | 方法 |
| `DrawImage` | `void DrawImage(SimpleMaterial material, in ImageDrawObject drawObject2D, int layer);` | 方法 |
| `DrawText` | `void DrawText(TextMaterial material, in TextDrawObject drawObject2D, int layer);` | 方法 |
| `SetScissor` | `void SetScissor(ScissorTestInfo scissorTestInfo);` | 方法 |
| `ResetScissors` | `void ResetScissors();` | 方法 |
| `PlaySound` | `void PlaySound(string soundName);` | 方法 |
| `CreateSoundEvent` | `void CreateSoundEvent(string soundName);` | 方法 |
| `PlaySoundEvent` | `void PlaySoundEvent(string soundName);` | 方法 |
| `StopAndRemoveSoundEvent` | `void StopAndRemoveSoundEvent(string soundName);` | 方法 |
| `OpenOnScreenKeyboard` | `void OpenOnScreenKeyboard(string initialText, string descriptionText, int maxLength, int keyboardTypeEnum);` | 方法 |
| `BeginDebugPanel` | `void BeginDebugPanel(string panelTitle);` | 方法 |
| `EndDebugPanel` | `void EndDebugPanel();` | 方法 |
| `DrawDebugText` | `void DrawDebugText(string text);` | 方法 |
| `DrawDebugTreeNode` | `bool DrawDebugTreeNode(string text);` | 方法 |
| `PopDebugTreeNode` | `void PopDebugTreeNode();` | 方法 |
| `DrawCheckbox` | `void DrawCheckbox(string label, ref bool isChecked);` | 方法 |
| `IsDebugItemHovered` | `bool IsDebugItemHovered();` | 方法 |
| `IsDebugModeEnabled` | `bool IsDebugModeEnabled();` | 方法 |

## 参见

- [↑ twodimension 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 BitmapFontCharacter](../BitmapFontCharacter)
- [同命名空间 EditableText](../EditableText)
- [同命名空间 Font](../Font)
- [同命名空间 FontStyle](../FontStyle)
