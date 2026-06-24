<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Imgui`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Imgui

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public class Imgui`
**Area:** engine

## Overview

`Imgui` lives in `TaleWorlds.Engine`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

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
`public static void PushStyleColor(Imgui.ColorStyle style, ref Vec3 color)`

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

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
Imgui.BeginMainThreadScope();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-engine)
