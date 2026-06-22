<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Imgui`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Imgui

**命名空间:** TaleWorlds.Engine
**模块:** TaleWorlds.Engine
**类型:** 类 class class
**领域:** 引擎 Engine

## 概述

> 本页为自动生成的存根。`Imgui` 是 `TaleWorlds.Engine` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-engine)