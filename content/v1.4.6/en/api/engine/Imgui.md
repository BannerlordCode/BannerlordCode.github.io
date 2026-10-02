---
title: "Imgui"
description: "Imgui: a public class in TaleWorlds.Engine; 38 exposed members (36 methods, 1 properties, 0 fields). Source: TaleWorlds.Engine/Imgui.cs."
---
# Imgui

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public class Imgui`
**File:** `TaleWorlds.Engine/Imgui.cs`

## Overview

Imgui lives in the TaleWorlds.Engine module, source file TaleWorlds.Engine/Imgui.cs. It is a public class; the inheritance chain is Imgui. It exposes 38 public/protected members: 36 methods, 1 properties, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: Imgui is a top-level type in TaleWorlds.Engine, namespace matching the module directory; inheritance chain Imgui. The surface is method-led (methods 36/38, properties 1/38), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Engine/Imgui.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `BeginMainThreadScope` | `public static void BeginMainThreadScope()` | method |
| `EndMainThreadScope` | `public static void EndMainThreadScope()` | method |
| `PushStyleColor` | `public static void PushStyleColor(Imgui.ColorStyle style, ref Vec3 color)` | method |
| `PopStyleColor` | `public static void PopStyleColor()` | method |
| `NewFrame` | `public static void NewFrame()` | method |
| `Render` | `public static void Render()` | method |
| `Begin` | `public static void Begin(string text)` | method |
| `Begin` | `public static void Begin(string text, ref bool is_open)` | method |
| `End` | `public static void End()` | method |
| `Text` | `public static void Text(string text)` | method |
| `Checkbox` | `public static bool Checkbox(string text, ref bool is_checked)` | method |
| `TreeNode` | `public static bool TreeNode(string name)` | method |
| `TreePop` | `public static void TreePop()` | method |
| `Separator` | `public static void Separator()` | method |
| `Button` | `public static bool Button(string text)` | method |
| `PlotLines` | `public static void PlotLines(string name, float[]values, int valuesCount, int valuesOffset, string overlayText, float minScale, float maxScale, float graphWidth, float graphHeight, int stride)` | method |
| `ProgressBar` | `public static void ProgressBar(float progress)` | method |
| `NewLine` | `public static void NewLine()` | method |
| `SameLine` | `public static void SameLine(float posX = 0f, float spacingWidth = 0f)` | method |
| `Combo` | `public static bool Combo(string label, ref int selectedIndex, string items)` | method |
| `ComboCustomSeperator` | `public static bool ComboCustomSeperator(string label, ref int selectedIndex, string items, char seperator)` | method |
| `InputInt` | `public static bool InputInt(string label, ref int value)` | method |
| `SliderFloat` | `public static bool SliderFloat(string label, ref float value, float min, float max)` | method |
| `Columns` | `public static void Columns(int count = 1, string id = "", bool border = true)` | method |
| `NextColumn` | `public static void NextColumn()` | method |
| `RadioButton` | `public static bool RadioButton(string label, bool active)` | method |
| `CollapsingHeader` | `public static bool CollapsingHeader(string label)` | method |
| `IsItemHovered` | `public static bool IsItemHovered()` | method |
| `SetTooltip` | `public static void SetTooltip(string label)` | method |
| `SmallButton` | `public static bool SmallButton(string label)` | method |
| `InputFloat` | `public static bool InputFloat(string label, ref float val, float step, float stepFast, int decimalPrecision = -1)` | method |
| `InputText` | `public static bool InputText(string label, ref string text)` | method |
| `InputTextMultilineCopyPaste` | `public static bool InputTextMultilineCopyPaste(string label, int textBoxHeight, ref string text)` | method |
| `InputFloat2` | `public static bool InputFloat2(string label, ref float val0, ref float val1, int decimalPrecision = -1)` | method |
| `InputFloat3` | `public static bool InputFloat3(string label, ref float val0, ref float val1, ref float val2, int decimalPrecision = -1)` | method |
| `InputFloat4` | `public static bool InputFloat4(string label, ref float val0, ref float val1, ref float val2, ref float val3, int decimalPrecision = -1)` | method |
| `ColorStyle` | `public enum ColorStyle` | property |
| `ColorStyle` | `public enum ColorStyle` | nested type |

## See Also

- [↑ engine module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AnimResult](../AnimResult)
- [same namespace ApplicationHealthChecker](../ApplicationHealthChecker)
- [same namespace AsyncTask](../AsyncTask)
- [same namespace BillboardType](../BillboardType)
