<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Imgui`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Imgui

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** class
**Area:** Engine

## Overview

> This is an auto-generated stub. `Imgui` is a class in the `TaleWorlds.Engine` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Methods

### BeginMainThreadScope

```csharp
public static void BeginMainThreadScope()
```

### EndMainThreadScope

```csharp
public static void EndMainThreadScope()
```

### PushStyleColor

```csharp
public static void PushStyleColor(Imgui.ColorStyle style, ref Vec3 color)
```

### PopStyleColor

```csharp
public static void PopStyleColor()
```

### NewFrame

```csharp
public static void NewFrame()
```

### Render

```csharp
public static void Render()
```

### Begin

```csharp
public static void Begin(string text)
```

### Begin

```csharp
public static void Begin(string text, ref bool is_open)
```

### End

```csharp
public static void End()
```

### Text

```csharp
public static void Text(string text)
```

### Checkbox

```csharp
public static bool Checkbox(string text, ref bool is_checked)
```

### TreeNode

```csharp
public static bool TreeNode(string name)
```

### TreePop

```csharp
public static void TreePop()
```

### Separator

```csharp
public static void Separator()
```

### Button

```csharp
public static bool Button(string text)
```

### PlotLines

```csharp
public static void PlotLines(string name, float values, int valuesCount, int valuesOffset, string overlayText, float minScale, float maxScale, float graphWidth, float graphHeight, int stride)
```

### ProgressBar

```csharp
public static void ProgressBar(float progress)
```

### NewLine

```csharp
public static void NewLine()
```

### SameLine

```csharp
public static void SameLine(float posX = 0f, float spacingWidth = 0f)
```

### Combo

```csharp
public static bool Combo(string label, ref int selectedIndex, string items)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-engine)