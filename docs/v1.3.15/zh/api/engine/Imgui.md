<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Imgui`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Imgui

**命名空间:** TaleWorlds.Engine
**模块:** TaleWorlds.Engine
**类型:** `public class Imgui`
**领域:** engine

## 概述

`Imgui` 位于 `TaleWorlds.Engine`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

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

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
Imgui.BeginMainThreadScope();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-engine)
