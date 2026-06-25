---
title: "Imgui"
description: "Auto-generated class reference for Imgui."
---
# Imgui

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public class Imgui`
**Base:** none
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine/Imgui.cs`

## Overview

`Imgui` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### BeginMainThreadScope
`public static void BeginMainThreadScope()`

**Purpose:** Executes the BeginMainThreadScope logic.

```csharp
// Static call; no instance required
Imgui.BeginMainThreadScope();
```

### EndMainThreadScope
`public static void EndMainThreadScope()`

**Purpose:** Executes the EndMainThreadScope logic.

```csharp
// Static call; no instance required
Imgui.EndMainThreadScope();
```

### PushStyleColor
`public static void PushStyleColor(ColorStyle style, ref Vec3 color)`

**Purpose:** Executes the PushStyleColor logic.

```csharp
// Static call; no instance required
Imgui.PushStyleColor(style, color);
```

### PopStyleColor
`public static void PopStyleColor()`

**Purpose:** Executes the PopStyleColor logic.

```csharp
// Static call; no instance required
Imgui.PopStyleColor();
```

### NewFrame
`public static void NewFrame()`

**Purpose:** Executes the NewFrame logic.

```csharp
// Static call; no instance required
Imgui.NewFrame();
```

### Render
`public static void Render()`

**Purpose:** Executes the Render logic.

```csharp
// Static call; no instance required
Imgui.Render();
```

### Begin
`public static void Begin(string text)`

**Purpose:** Executes the Begin logic.

```csharp
// Static call; no instance required
Imgui.Begin("example");
```

### Begin
`public static void Begin(string text, ref bool is_open)`

**Purpose:** Executes the Begin logic.

```csharp
// Static call; no instance required
Imgui.Begin("example", is_open);
```

### End
`public static void End()`

**Purpose:** Executes the End logic.

```csharp
// Static call; no instance required
Imgui.End();
```

### Text
`public static void Text(string text)`

**Purpose:** Executes the Text logic.

```csharp
// Static call; no instance required
Imgui.Text("example");
```

### Checkbox
`public static bool Checkbox(string text, ref bool is_checked)`

**Purpose:** Verifies whether box holds true for the this instance.

```csharp
// Static call; no instance required
Imgui.Checkbox("example", is_checked);
```

### TreeNode
`public static bool TreeNode(string name)`

**Purpose:** Executes the TreeNode logic.

```csharp
// Static call; no instance required
Imgui.TreeNode("example");
```

### TreePop
`public static void TreePop()`

**Purpose:** Executes the TreePop logic.

```csharp
// Static call; no instance required
Imgui.TreePop();
```

### Separator
`public static void Separator()`

**Purpose:** Executes the Separator logic.

```csharp
// Static call; no instance required
Imgui.Separator();
```

### Button
`public static bool Button(string text)`

**Purpose:** Executes the Button logic.

```csharp
// Static call; no instance required
Imgui.Button("example");
```

### PlotLines
`public static void PlotLines(string name, float values, int valuesCount, int valuesOffset, string overlayText, float minScale, float maxScale, float graphWidth, float graphHeight, int stride)`

**Purpose:** Executes the PlotLines logic.

```csharp
// Static call; no instance required
Imgui.PlotLines("example", 0, 0, 0, "example", 0, 0, 0, 0, 0);
```

### ProgressBar
`public static void ProgressBar(float progress)`

**Purpose:** Executes the ProgressBar logic.

```csharp
// Static call; no instance required
Imgui.ProgressBar(0);
```

### NewLine
`public static void NewLine()`

**Purpose:** Executes the NewLine logic.

```csharp
// Static call; no instance required
Imgui.NewLine();
```

### SameLine
`public static void SameLine(float posX = 0f, float spacingWidth = 0f)`

**Purpose:** Executes the SameLine logic.

```csharp
// Static call; no instance required
Imgui.SameLine(0, 0);
```

### Combo
`public static bool Combo(string label, ref int selectedIndex, string items)`

**Purpose:** Executes the Combo logic.

```csharp
// Static call; no instance required
Imgui.Combo("example", selectedIndex, "example");
```

### ComboCustomSeperator
`public static bool ComboCustomSeperator(string label, ref int selectedIndex, string items, char seperator)`

**Purpose:** Executes the ComboCustomSeperator logic.

```csharp
// Static call; no instance required
Imgui.ComboCustomSeperator("example", selectedIndex, "example", seperator);
```

### InputInt
`public static bool InputInt(string label, ref int value)`

**Purpose:** Executes the InputInt logic.

```csharp
// Static call; no instance required
Imgui.InputInt("example", value);
```

### SliderFloat
`public static bool SliderFloat(string label, ref float value, float min, float max)`

**Purpose:** Executes the SliderFloat logic.

```csharp
// Static call; no instance required
Imgui.SliderFloat("example", value, 0, 0);
```

### Columns
`public static void Columns(int count = 1, string id = "", bool border = true)`

**Purpose:** Executes the Columns logic.

```csharp
// Static call; no instance required
Imgui.Columns(0, "example", false);
```

### NextColumn
`public static void NextColumn()`

**Purpose:** Executes the NextColumn logic.

```csharp
// Static call; no instance required
Imgui.NextColumn();
```

### RadioButton
`public static bool RadioButton(string label, bool active)`

**Purpose:** Executes the RadioButton logic.

```csharp
// Static call; no instance required
Imgui.RadioButton("example", false);
```

### CollapsingHeader
`public static bool CollapsingHeader(string label)`

**Purpose:** Executes the CollapsingHeader logic.

```csharp
// Static call; no instance required
Imgui.CollapsingHeader("example");
```

### IsItemHovered
`public static bool IsItemHovered()`

**Purpose:** Determines whether the this instance is in the item hovered state or condition.

```csharp
// Static call; no instance required
Imgui.IsItemHovered();
```

### SetTooltip
`public static void SetTooltip(string label)`

**Purpose:** Assigns a new value to tooltip and updates the object's internal state.

```csharp
// Static call; no instance required
Imgui.SetTooltip("example");
```

### SmallButton
`public static bool SmallButton(string label)`

**Purpose:** Executes the SmallButton logic.

```csharp
// Static call; no instance required
Imgui.SmallButton("example");
```

### InputFloat
`public static bool InputFloat(string label, ref float val, float step, float stepFast, int decimalPrecision = -1)`

**Purpose:** Executes the InputFloat logic.

```csharp
// Static call; no instance required
Imgui.InputFloat("example", val, 0, 0, 0);
```

### InputText
`public static bool InputText(string label, ref string text)`

**Purpose:** Executes the InputText logic.

```csharp
// Static call; no instance required
Imgui.InputText("example", text);
```

### InputTextMultilineCopyPaste
`public static bool InputTextMultilineCopyPaste(string label, int textBoxHeight, ref string text)`

**Purpose:** Executes the InputTextMultilineCopyPaste logic.

```csharp
// Static call; no instance required
Imgui.InputTextMultilineCopyPaste("example", 0, text);
```

### InputFloat2
`public static bool InputFloat2(string label, ref float val0, ref float val1, int decimalPrecision = -1)`

**Purpose:** Executes the InputFloat2 logic.

```csharp
// Static call; no instance required
Imgui.InputFloat2("example", val0, val1, 0);
```

### InputFloat3
`public static bool InputFloat3(string label, ref float val0, ref float val1, ref float val2, int decimalPrecision = -1)`

**Purpose:** Executes the InputFloat3 logic.

```csharp
// Static call; no instance required
Imgui.InputFloat3("example", val0, val1, val2, 0);
```

### InputFloat4
`public static bool InputFloat4(string label, ref float val0, ref float val1, ref float val2, ref float val3, int decimalPrecision = -1)`

**Purpose:** Executes the InputFloat4 logic.

```csharp
// Static call; no instance required
Imgui.InputFloat4("example", val0, val1, val2, val3, 0);
```

## Usage Example

```csharp
Imgui.BeginMainThreadScope();
```

## See Also

- [Area Index](../)