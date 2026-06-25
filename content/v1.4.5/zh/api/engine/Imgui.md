---
title: "Imgui"
description: "Imgui 的自动生成类参考。"
---
# Imgui

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public class Imgui`
**Base:** 无
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine/Imgui.cs`

## 概述

`Imgui` 位于 `TaleWorlds.Engine`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Engine` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### BeginMainThreadScope
`public static void BeginMainThreadScope()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
Imgui.BeginMainThreadScope();
```

### EndMainThreadScope
`public static void EndMainThreadScope()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
Imgui.EndMainThreadScope();
```

### PushStyleColor
`public static void PushStyleColor(ColorStyle style, ref Vec3 color)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
Imgui.PushStyleColor(style, color);
```

### PopStyleColor
`public static void PopStyleColor()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
Imgui.PopStyleColor();
```

### NewFrame
`public static void NewFrame()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
Imgui.NewFrame();
```

### Render
`public static void Render()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
Imgui.Render();
```

### Begin
`public static void Begin(string text)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
Imgui.Begin("example");
```

### Begin
`public static void Begin(string text, ref bool is_open)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
Imgui.Begin("example", is_open);
```

### End
`public static void End()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
Imgui.End();
```

### Text
`public static void Text(string text)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
Imgui.Text("example");
```

### Checkbox
`public static bool Checkbox(string text, ref bool is_checked)`

**用途 / Purpose:** 检查「box」在当前对象中是否成立。

```csharp
// 静态调用，不需要实例
Imgui.Checkbox("example", is_checked);
```

### TreeNode
`public static bool TreeNode(string name)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
Imgui.TreeNode("example");
```

### TreePop
`public static void TreePop()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
Imgui.TreePop();
```

### Separator
`public static void Separator()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
Imgui.Separator();
```

### Button
`public static bool Button(string text)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
Imgui.Button("example");
```

### PlotLines
`public static void PlotLines(string name, float values, int valuesCount, int valuesOffset, string overlayText, float minScale, float maxScale, float graphWidth, float graphHeight, int stride)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
Imgui.PlotLines("example", 0, 0, 0, "example", 0, 0, 0, 0, 0);
```

### ProgressBar
`public static void ProgressBar(float progress)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
Imgui.ProgressBar(0);
```

### NewLine
`public static void NewLine()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
Imgui.NewLine();
```

### SameLine
`public static void SameLine(float posX = 0f, float spacingWidth = 0f)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
Imgui.SameLine(0, 0);
```

### Combo
`public static bool Combo(string label, ref int selectedIndex, string items)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
Imgui.Combo("example", selectedIndex, "example");
```

### ComboCustomSeperator
`public static bool ComboCustomSeperator(string label, ref int selectedIndex, string items, char seperator)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
Imgui.ComboCustomSeperator("example", selectedIndex, "example", seperator);
```

### InputInt
`public static bool InputInt(string label, ref int value)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
Imgui.InputInt("example", value);
```

### SliderFloat
`public static bool SliderFloat(string label, ref float value, float min, float max)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
Imgui.SliderFloat("example", value, 0, 0);
```

### Columns
`public static void Columns(int count = 1, string id = "", bool border = true)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
Imgui.Columns(0, "example", false);
```

### NextColumn
`public static void NextColumn()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
Imgui.NextColumn();
```

### RadioButton
`public static bool RadioButton(string label, bool active)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
Imgui.RadioButton("example", false);
```

### CollapsingHeader
`public static bool CollapsingHeader(string label)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
Imgui.CollapsingHeader("example");
```

### IsItemHovered
`public static bool IsItemHovered()`

**用途 / Purpose:** 判断当前对象是否处于 「item hovered」 状态或条件。

```csharp
// 静态调用，不需要实例
Imgui.IsItemHovered();
```

### SetTooltip
`public static void SetTooltip(string label)`

**用途 / Purpose:** 为 「tooltip」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
Imgui.SetTooltip("example");
```

### SmallButton
`public static bool SmallButton(string label)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
Imgui.SmallButton("example");
```

### InputFloat
`public static bool InputFloat(string label, ref float val, float step, float stepFast, int decimalPrecision = -1)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
Imgui.InputFloat("example", val, 0, 0, 0);
```

### InputText
`public static bool InputText(string label, ref string text)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
Imgui.InputText("example", text);
```

### InputTextMultilineCopyPaste
`public static bool InputTextMultilineCopyPaste(string label, int textBoxHeight, ref string text)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
Imgui.InputTextMultilineCopyPaste("example", 0, text);
```

### InputFloat2
`public static bool InputFloat2(string label, ref float val0, ref float val1, int decimalPrecision = -1)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
Imgui.InputFloat2("example", val0, val1, 0);
```

### InputFloat3
`public static bool InputFloat3(string label, ref float val0, ref float val1, ref float val2, int decimalPrecision = -1)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
Imgui.InputFloat3("example", val0, val1, val2, 0);
```

### InputFloat4
`public static bool InputFloat4(string label, ref float val0, ref float val1, ref float val2, ref float val3, int decimalPrecision = -1)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
Imgui.InputFloat4("example", val0, val1, val2, val3, 0);
```

## 使用示例

```csharp
Imgui.BeginMainThreadScope();
```

## 参见

- [本区域目录](../)