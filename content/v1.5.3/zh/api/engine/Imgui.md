---
title: "Imgui"
description: "Imgui 的自动生成类参考。"
---
# Imgui

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public class Imgui `
**Base:** System.Object
**Source:** TaleWorlds.Engine/Imgui.cs

## 概述

`Imgui` 的自动生成类参考页面。声明来自 `TaleWorlds.Engine/Imgui.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### BeginMainThreadScope
`public static void BeginMainThreadScope() `

### EndMainThreadScope
`public static void EndMainThreadScope() `

### PushStyleColor
`public static void PushStyleColor(Imgui.ColorStyle style,ref Vec3 color) `

### PopStyleColor
`public static void PopStyleColor() `

### NewFrame
`public static void NewFrame() `

### Render
`public static void Render() `

### Begin
`public static void Begin(string text) `
`public static void Begin(string text,ref bool is_open) `

### End
`public static void End() `

### Text
`public static void Text(string text) `

### Checkbox
`public static bool Checkbox(string text,ref bool is_checked) `

### TreeNode
`public static bool TreeNode(string name) `

### TreePop
`public static void TreePop() `

### Separator
`public static void Separator() `

### Button
`public static bool Button(string text) `

### PlotLines
`public static void PlotLines(string name,float[] values,int valuesCount,int valuesOffset,string overlayText,float minScale,float maxScale,float graphWidth,float graphHeight,int stride) `

### ProgressBar
`public static void ProgressBar(float progress) `

### NewLine
`public static void NewLine() `

### SameLine
`public static void SameLine(float posX = 0f,float spacingWidth = 0f) `

### Combo
`public static bool Combo(string label,ref int selectedIndex,string items) `

### ComboCustomSeperator
`public static bool ComboCustomSeperator(string label,ref int selectedIndex,string items,char seperator) `

### InputInt
`public static bool InputInt(string label,ref int value) `

### SliderFloat
`public static bool SliderFloat(string label,ref float value,float min,float max) `

### Columns
`public static void Columns(int count = 1,string id = "",bool border = true) `

### NextColumn
`public static void NextColumn() `

### RadioButton
`public static bool RadioButton(string label,bool active) `

### CollapsingHeader
`public static bool CollapsingHeader(string label) `

### IsItemHovered
`public static bool IsItemHovered() `

### SetTooltip
`public static void SetTooltip(string label) `

### SmallButton
`public static bool SmallButton(string label) `

### InputFloat
`public static bool InputFloat(string label,ref float val,float step,float stepFast,int decimalPrecision = -1) `

### InputText
`public static bool InputText(string label,ref string text) `

### InputTextMultilineCopyPaste
`public static bool InputTextMultilineCopyPaste(string label,int textBoxHeight,ref string text) `

### InputFloat2
`public static bool InputFloat2(string label,ref float val0,ref float val1,int decimalPrecision = -1) `

### InputFloat3
`public static bool InputFloat3(string label,ref float val0,ref float val1,ref float val2,int decimalPrecision = -1) `

### InputFloat4
`public static bool InputFloat4(string label,ref float val0,ref float val1,ref float val2,ref float val3,int decimalPrecision = -1) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
