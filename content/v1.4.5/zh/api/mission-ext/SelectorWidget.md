---
title: "SelectorWidget"
description: "SelectorWidget 的自动生成类参考。"
---
# SelectorWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SelectorWidget : Widget`
**Base:** `Widget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets/SelectorWidget.cs`

## 概述

`SelectorWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `SelectorWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `ListPanelValue` | `public int ListPanelValue { get; set; }` |
| `CurrentSelectedIndex` | `public int CurrentSelectedIndex { get; set; }` |
| `Container` | `public Container Container { get; set; }` |

## 主要方法

### OnListChanged
`public void OnListChanged(Widget widget)`

**用途 / Purpose:** 在 list changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SelectorWidget 实例
SelectorWidget selectorWidget = ...;
selectorWidget.OnListChanged(widget);
```

### OnListChanged
`public void OnListChanged(Widget parentWidget, Widget addedWidget)`

**用途 / Purpose:** 在 list changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SelectorWidget 实例
SelectorWidget selectorWidget = ...;
selectorWidget.OnListChanged(parentWidget, addedWidget);
```

### OnSelectionChanged
`public void OnSelectionChanged(Widget widget)`

**用途 / Purpose:** 在 selection changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SelectorWidget 实例
SelectorWidget selectorWidget = ...;
selectorWidget.OnSelectionChanged(widget);
```

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
SelectorWidget widget = ...;
```

## 参见

- [本区域目录](../)