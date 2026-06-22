<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SelectorWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SelectorWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SelectorWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/SelectorWidget.cs`

## 概述

`SelectorWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `ListPanelValue` | `public int ListPanelValue { get; set; }` |
| `CurrentSelectedIndex` | `public int CurrentSelectedIndex { get; set; }` |
| `Container` | `public Container Container { get; set; }` |

## 主要方法

### OnListChanged
```csharp
public void OnListChanged(Widget widget)
```

### OnListChanged
```csharp
public void OnListChanged(Widget parentWidget, Widget addedWidget)
```

### OnSelectionChanged
```csharp
public void OnSelectionChanged(Widget widget)
```

## 使用示例

```csharp
// SelectorWidget (Widget) 的典型用法
// 声明/访问一个 SelectorWidget
var widget = root.GetChild("selectorWidget");;
```

## 参见

- [完整类目录](../catalog)