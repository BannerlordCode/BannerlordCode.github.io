---
title: "EditableTextWidget"
description: "EditableTextWidget：TaleWorlds.GauntletUI 的 public 类，继承 BrushWidget；公开成员 35 个（方法 20、属性 9、字段 2）。源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/EditableTextWidget.cs。"
---
# EditableTextWidget

**Namespace:** `TaleWorlds.GauntletUI.BaseTypes`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class EditableTextWidget : BrushWidget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/EditableTextWidget.cs`

## 概述

EditableTextWidget 位于 TaleWorlds.GauntletUI 模块，源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/EditableTextWidget.cs。它是一个 public 类，实现/继承 BrushWidget，继承链为 EditableTextWidget → BrushWidget → Widget → PropertyOwnerObject。public/protected 成员共 35 个：20 方法、9 属性、2 字段、1 构造函数、3 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：EditableTextWidget 是 TaleWorlds.GauntletUI 的顶层类型，命名空间与模块目录不同（TaleWorlds.GauntletUI.BaseTypes），继承链 EditableTextWidget → BrushWidget → Widget → PropertyOwnerObject。成员构成以方法为主（方法 20/35，属性 9/35），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/EditableTextWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MaxLength` | `public int MaxLength` | 属性 |
| `IsObfuscationEnabled` | `public bool IsObfuscationEnabled` | 属性 |
| `DefaultSearchText` | `public string DefaultSearchText` | 属性 |
| `RealText` | `public string RealText` | 属性 |
| `KeyboardInfoText` | `public string KeyboardInfoText` | 属性 |
| `Text` | `public string Text` | 属性 |
| `EditableTextWidget` | `public EditableTextWidget(UIContext context) : base(context)` | 构造函数 |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | 方法 |
| `BlinkCursor` | `protected void BlinkCursor()` | 方法 |
| `ResetSelected` | `protected void ResetSelected()` | 方法 |
| `DeleteChar` | `protected void DeleteChar(bool nextChar = false)` | 方法 |
| `FindNextWordPosition` | `protected int FindNextWordPosition(int direction)` | 方法 |
| `MoveCursor` | `protected void MoveCursor(int direction, bool withSelection = false)` | 方法 |
| `GetAppendCharacterResult` | `protected string GetAppendCharacterResult(int charCode)` | 方法 |
| `AppendCharacter` | `protected void AppendCharacter(int charCode)` | 方法 |
| `AppendText` | `protected void AppendText(string text)` | 方法 |
| `DeleteText` | `protected void DeleteText(int beginIndex, int endIndex)` | 方法 |
| `CopyText` | `protected void CopyText(int beginIndex, int endIndex)` | 方法 |
| `PasteText` | `protected void PasteText()` | 方法 |
| `HandleInput` | `public override void HandleInput(IReadOnlyList<int>lastKeysPressed)` | 方法 |
| `OnGainFocus` | `protected internal override void OnGainFocus()` | 方法 |
| `OnLoseFocus` | `protected internal override void OnLoseFocus()` | 方法 |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | 方法 |
| `OnRender` | `protected override void OnRender(TwoDimensionContext twoDimensionContext, TwoDimensionDrawContext drawContext)` | 方法 |
| `OnMousePressed` | `protected internal override void OnMousePressed()` | 方法 |
| `OnMouseReleased` | `protected internal override void OnMouseReleased(bool isFromInput)` | 方法 |
| `SetAllText` | `public virtual void SetAllText(string text)` | 方法 |
| `_obfuscationChar` | `protected readonly char _obfuscationChar` | 字段 |
| `_lastScale` | `protected float _lastScale` | 字段 |
| `MouseState` | `protected enum MouseState` | 属性 |
| `CursorMovementDirection` | `protected enum CursorMovementDirection` | 属性 |
| `KeyboardAction` | `protected enum KeyboardAction` | 属性 |
| `MouseState` | `protected enum MouseState` | 嵌套类型 |
| `CursorMovementDirection` | `protected enum CursorMovementDirection` | 嵌套类型 |
| `KeyboardAction` | `protected enum KeyboardAction` | 嵌套类型 |

## 参见

- [↑ gauntletui 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 BrushWidget](../BrushWidget)
- [同命名空间 BasicContainer](../BasicContainer)
- [同命名空间 BrushWidget](../BrushWidget)
- [同命名空间 ButtonType](../ButtonType)
- [同命名空间 ButtonWidget](../ButtonWidget)
