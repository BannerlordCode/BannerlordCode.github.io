---
title: "Imgui"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Imgui`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# Imgui

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public class Imgui`
**Base:** 无
**File:** `TaleWorlds.Engine/Imgui.cs`

## 概述

`Imgui` 位于 `TaleWorlds.Engine`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Engine` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### BeginMainThreadScope
`public static void BeginMainThreadScope()`

**用途 / Purpose:** 处理 `begin main thread scope` 相关逻辑。

### EndMainThreadScope
`public static void EndMainThreadScope()`

**用途 / Purpose:** 处理 `end main thread scope` 相关逻辑。

### PushStyleColor
`public static void PushStyleColor(Imgui.ColorStyle style, ref Vec3 color)`

**用途 / Purpose:** 处理 `push style color` 相关逻辑。

### PopStyleColor
`public static void PopStyleColor()`

**用途 / Purpose:** 处理 `pop style color` 相关逻辑。

### NewFrame
`public static void NewFrame()`

**用途 / Purpose:** 处理 `new frame` 相关逻辑。

### Render
`public static void Render()`

**用途 / Purpose:** 处理 `render` 相关逻辑。

### Begin
`public static void Begin(string text)`

**用途 / Purpose:** 处理 `begin` 相关逻辑。

### Begin
`public static void Begin(string text, ref bool is_open)`

**用途 / Purpose:** 处理 `begin` 相关逻辑。

### End
`public static void End()`

**用途 / Purpose:** 处理 `end` 相关逻辑。

### Text
`public static void Text(string text)`

**用途 / Purpose:** 处理 `text` 相关逻辑。

### Checkbox
`public static bool Checkbox(string text, ref bool is_checked)`

**用途 / Purpose:** 处理 `checkbox` 相关逻辑。

### TreeNode
`public static bool TreeNode(string name)`

**用途 / Purpose:** 处理 `tree node` 相关逻辑。

### TreePop
`public static void TreePop()`

**用途 / Purpose:** 处理 `tree pop` 相关逻辑。

### Separator
`public static void Separator()`

**用途 / Purpose:** 处理 `separator` 相关逻辑。

### Button
`public static bool Button(string text)`

**用途 / Purpose:** 处理 `button` 相关逻辑。

### PlotLines
`public static void PlotLines(string name, float values, int valuesCount, int valuesOffset, string overlayText, float minScale, float maxScale, float graphWidth, float graphHeight, int stride)`

**用途 / Purpose:** 处理 `plot lines` 相关逻辑。

### ProgressBar
`public static void ProgressBar(float progress)`

**用途 / Purpose:** 处理 `progress bar` 相关逻辑。

### NewLine
`public static void NewLine()`

**用途 / Purpose:** 处理 `new line` 相关逻辑。

### SameLine
`public static void SameLine(float posX = 0f, float spacingWidth = 0f)`

**用途 / Purpose:** 处理 `same line` 相关逻辑。

### Combo
`public static bool Combo(string label, ref int selectedIndex, string items)`

**用途 / Purpose:** 处理 `combo` 相关逻辑。

### ComboCustomSeperator
`public static bool ComboCustomSeperator(string label, ref int selectedIndex, string items, char seperator)`

**用途 / Purpose:** 处理 `combo custom seperator` 相关逻辑。

### InputInt
`public static bool InputInt(string label, ref int value)`

**用途 / Purpose:** 处理 `input int` 相关逻辑。

### SliderFloat
`public static bool SliderFloat(string label, ref float value, float min, float max)`

**用途 / Purpose:** 处理 `slider float` 相关逻辑。

### Columns
`public static void Columns(int count = 1, string id = "", bool border = true)`

**用途 / Purpose:** 处理 `columns` 相关逻辑。

### NextColumn
`public static void NextColumn()`

**用途 / Purpose:** 处理 `next column` 相关逻辑。

### RadioButton
`public static bool RadioButton(string label, bool active)`

**用途 / Purpose:** 处理 `radio button` 相关逻辑。

### CollapsingHeader
`public static bool CollapsingHeader(string label)`

**用途 / Purpose:** 处理 `collapsing header` 相关逻辑。

### IsItemHovered
`public static bool IsItemHovered()`

**用途 / Purpose:** 处理 `is item hovered` 相关逻辑。

### SetTooltip
`public static void SetTooltip(string label)`

**用途 / Purpose:** 设置 `tooltip` 的值或状态。

### SmallButton
`public static bool SmallButton(string label)`

**用途 / Purpose:** 处理 `small button` 相关逻辑。

### InputFloat
`public static bool InputFloat(string label, ref float val, float step, float stepFast, int decimalPrecision = -1)`

**用途 / Purpose:** 处理 `input float` 相关逻辑。

### InputText
`public static bool InputText(string label, ref string text)`

**用途 / Purpose:** 处理 `input text` 相关逻辑。

### InputTextMultilineCopyPaste
`public static bool InputTextMultilineCopyPaste(string label, int textBoxHeight, ref string text)`

**用途 / Purpose:** 处理 `input text multiline copy paste` 相关逻辑。

### InputFloat2
`public static bool InputFloat2(string label, ref float val0, ref float val1, int decimalPrecision = -1)`

**用途 / Purpose:** 处理 `input float2` 相关逻辑。

### InputFloat3
`public static bool InputFloat3(string label, ref float val0, ref float val1, ref float val2, int decimalPrecision = -1)`

**用途 / Purpose:** 处理 `input float3` 相关逻辑。

### InputFloat4
`public static bool InputFloat4(string label, ref float val0, ref float val1, ref float val2, ref float val3, int decimalPrecision = -1)`

**用途 / Purpose:** 处理 `input float4` 相关逻辑。

## 使用示例

```csharp
Imgui.BeginMainThreadScope();
```

## 参见

- [完整类目录](../catalog)