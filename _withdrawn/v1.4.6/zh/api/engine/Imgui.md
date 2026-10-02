---
title: "Imgui"
description: "Imgui：TaleWorlds.Engine 的 public 类；公开成员 38 个（方法 36、属性 1、字段 0）。canonical 桶 engine。源文件 TaleWorlds.Engine/Imgui.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# Imgui

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public class Imgui`
**File:** `TaleWorlds.Engine/Imgui.cs`
**Bucket:** `engine` (rule:TaleWorlds.Engine)

## 概述

Imgui 位于 TaleWorlds.Engine 模块，源文件 TaleWorlds.Engine/Imgui.cs。它是一个 public 类，继承链为 Imgui。public/protected 成员共 38 个：36 方法、1 属性、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：Imgui 落在 canonical 桶 `engine`（命中规则 `rule:TaleWorlds.Engine`），命名空间 `TaleWorlds.Engine`，继承链 Imgui。成员构成以方法为主（方法 36/38，属性 1/38），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Engine/Imgui.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `BeginMainThreadScope` | `public static void BeginMainThreadScope()` | 方法 |
| `EndMainThreadScope` | `public static void EndMainThreadScope()` | 方法 |
| `PushStyleColor` | `public static void PushStyleColor(Imgui.ColorStyle style, ref Vec3 color)` | 方法 |
| `PopStyleColor` | `public static void PopStyleColor()` | 方法 |
| `NewFrame` | `public static void NewFrame()` | 方法 |
| `Render` | `public static void Render()` | 方法 |
| `Begin` | `public static void Begin(string text)` | 方法 |
| `Begin` | `public static void Begin(string text, ref bool is_open)` | 方法 |
| `End` | `public static void End()` | 方法 |
| `Text` | `public static void Text(string text)` | 方法 |
| `Checkbox` | `public static bool Checkbox(string text, ref bool is_checked)` | 方法 |
| `TreeNode` | `public static bool TreeNode(string name)` | 方法 |
| `TreePop` | `public static void TreePop()` | 方法 |
| `Separator` | `public static void Separator()` | 方法 |
| `Button` | `public static bool Button(string text)` | 方法 |
| `PlotLines` | `public static void PlotLines(string name, float[]values, int valuesCount, int valuesOffset, string overlayText, float minScale, float maxScale, float graphWidth, float graphHeight, int stride)` | 方法 |
| `ProgressBar` | `public static void ProgressBar(float progress)` | 方法 |
| `NewLine` | `public static void NewLine()` | 方法 |
| `SameLine` | `public static void SameLine(float posX = 0f, float spacingWidth = 0f)` | 方法 |
| `Combo` | `public static bool Combo(string label, ref int selectedIndex, string items)` | 方法 |
| `ComboCustomSeperator` | `public static bool ComboCustomSeperator(string label, ref int selectedIndex, string items, char seperator)` | 方法 |
| `InputInt` | `public static bool InputInt(string label, ref int value)` | 方法 |
| `SliderFloat` | `public static bool SliderFloat(string label, ref float value, float min, float max)` | 方法 |
| `Columns` | `public static void Columns(int count = 1, string id = "", bool border = true)` | 方法 |
| `NextColumn` | `public static void NextColumn()` | 方法 |
| `RadioButton` | `public static bool RadioButton(string label, bool active)` | 方法 |
| `CollapsingHeader` | `public static bool CollapsingHeader(string label)` | 方法 |
| `IsItemHovered` | `public static bool IsItemHovered()` | 方法 |
| `SetTooltip` | `public static void SetTooltip(string label)` | 方法 |
| `SmallButton` | `public static bool SmallButton(string label)` | 方法 |
| `InputFloat` | `public static bool InputFloat(string label, ref float val, float step, float stepFast, int decimalPrecision = -1)` | 方法 |
| `InputText` | `public static bool InputText(string label, ref string text)` | 方法 |
| `InputTextMultilineCopyPaste` | `public static bool InputTextMultilineCopyPaste(string label, int textBoxHeight, ref string text)` | 方法 |
| `InputFloat2` | `public static bool InputFloat2(string label, ref float val0, ref float val1, int decimalPrecision = -1)` | 方法 |
| `InputFloat3` | `public static bool InputFloat3(string label, ref float val0, ref float val1, ref float val2, int decimalPrecision = -1)` | 方法 |
| `InputFloat4` | `public static bool InputFloat4(string label, ref float val0, ref float val1, ref float val2, ref float val3, int decimalPrecision = -1)` | 方法 |
| `ColorStyle` | `public enum ColorStyle` | 属性 |
| `ColorStyle` | `public enum ColorStyle` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 AnimResult](../AnimResult/)
- [同命名空间 ApplicationHealthChecker](../ApplicationHealthChecker/)
- [同命名空间 AsyncTask](../AsyncTask/)
- [同命名空间 BillboardType](../BillboardType/)
