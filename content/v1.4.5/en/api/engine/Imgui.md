---
title: "Imgui"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Imgui`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Imgui

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public class Imgui`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.Engine/TaleWorlds.Engine/Imgui.cs`

## Overview

`Imgui` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### BeginMainThreadScope
`public static void BeginMainThreadScope()`

**Purpose:** Handles logic related to `begin main thread scope`.

### EndMainThreadScope
`public static void EndMainThreadScope()`

**Purpose:** Handles logic related to `end main thread scope`.

### PushStyleColor
`public static void PushStyleColor(ColorStyle style, ref Vec3 color)`

**Purpose:** Handles logic related to `push style color`.

### PopStyleColor
`public static void PopStyleColor()`

**Purpose:** Handles logic related to `pop style color`.

### NewFrame
`public static void NewFrame()`

**Purpose:** Handles logic related to `new frame`.

### Render
`public static void Render()`

**Purpose:** Handles logic related to `render`.

### Begin
`public static void Begin(string text)`

**Purpose:** Handles logic related to `begin`.

### Begin
`public static void Begin(string text, ref bool is_open)`

**Purpose:** Handles logic related to `begin`.

### End
`public static void End()`

**Purpose:** Handles logic related to `end`.

### Text
`public static void Text(string text)`

**Purpose:** Handles logic related to `text`.

### Checkbox
`public static bool Checkbox(string text, ref bool is_checked)`

**Purpose:** Handles logic related to `checkbox`.

### TreeNode
`public static bool TreeNode(string name)`

**Purpose:** Handles logic related to `tree node`.

### TreePop
`public static void TreePop()`

**Purpose:** Handles logic related to `tree pop`.

### Separator
`public static void Separator()`

**Purpose:** Handles logic related to `separator`.

### Button
`public static bool Button(string text)`

**Purpose:** Handles logic related to `button`.

### PlotLines
`public static void PlotLines(string name, float values, int valuesCount, int valuesOffset, string overlayText, float minScale, float maxScale, float graphWidth, float graphHeight, int stride)`

**Purpose:** Handles logic related to `plot lines`.

### ProgressBar
`public static void ProgressBar(float progress)`

**Purpose:** Handles logic related to `progress bar`.

### NewLine
`public static void NewLine()`

**Purpose:** Handles logic related to `new line`.

### SameLine
`public static void SameLine(float posX = 0f, float spacingWidth = 0f)`

**Purpose:** Handles logic related to `same line`.

### Combo
`public static bool Combo(string label, ref int selectedIndex, string items)`

**Purpose:** Handles logic related to `combo`.

### ComboCustomSeperator
`public static bool ComboCustomSeperator(string label, ref int selectedIndex, string items, char seperator)`

**Purpose:** Handles logic related to `combo custom seperator`.

### InputInt
`public static bool InputInt(string label, ref int value)`

**Purpose:** Handles logic related to `input int`.

### SliderFloat
`public static bool SliderFloat(string label, ref float value, float min, float max)`

**Purpose:** Handles logic related to `slider float`.

### Columns
`public static void Columns(int count = 1, string id = "", bool border = true)`

**Purpose:** Handles logic related to `columns`.

### NextColumn
`public static void NextColumn()`

**Purpose:** Handles logic related to `next column`.

### RadioButton
`public static bool RadioButton(string label, bool active)`

**Purpose:** Handles logic related to `radio button`.

### CollapsingHeader
`public static bool CollapsingHeader(string label)`

**Purpose:** Handles logic related to `collapsing header`.

### IsItemHovered
`public static bool IsItemHovered()`

**Purpose:** Handles logic related to `is item hovered`.

### SetTooltip
`public static void SetTooltip(string label)`

**Purpose:** Sets the value or state of `tooltip`.

### SmallButton
`public static bool SmallButton(string label)`

**Purpose:** Handles logic related to `small button`.

### InputFloat
`public static bool InputFloat(string label, ref float val, float step, float stepFast, int decimalPrecision = -1)`

**Purpose:** Handles logic related to `input float`.

### InputText
`public static bool InputText(string label, ref string text)`

**Purpose:** Handles logic related to `input text`.

### InputTextMultilineCopyPaste
`public static bool InputTextMultilineCopyPaste(string label, int textBoxHeight, ref string text)`

**Purpose:** Handles logic related to `input text multiline copy paste`.

### InputFloat2
`public static bool InputFloat2(string label, ref float val0, ref float val1, int decimalPrecision = -1)`

**Purpose:** Handles logic related to `input float2`.

### InputFloat3
`public static bool InputFloat3(string label, ref float val0, ref float val1, ref float val2, int decimalPrecision = -1)`

**Purpose:** Handles logic related to `input float3`.

### InputFloat4
`public static bool InputFloat4(string label, ref float val0, ref float val1, ref float val2, ref float val3, int decimalPrecision = -1)`

**Purpose:** Handles logic related to `input float4`.

## Usage Example

```csharp
Imgui.BeginMainThreadScope();
```

## See Also

- [Complete Class Catalog](../catalog)