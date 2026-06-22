<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TabControlWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TabControlWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TabControlWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/TabControlWidget.cs`

## 概述

`TabControlWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `FirstButton` | `public ButtonWidget FirstButton { get; set; }` |
| `SecondButton` | `public ButtonWidget SecondButton { get; set; }` |
| `SecondItem` | `public Widget SecondItem { get; set; }` |
| `FirstItem` | `public Widget FirstItem { get; set; }` |

## 主要方法

### OnFirstButtonClick
```csharp
public void OnFirstButtonClick(Widget widget)
```

### OnSecondButtonClick
```csharp
public void OnSecondButtonClick(Widget widget)
```

## 使用示例

```csharp
// TabControlWidget (Widget) 的典型用法
// 声明/访问一个 TabControlWidget
var widget = root.GetChild("tabControlWidget");;
```

## 参见

- [完整类目录](../catalog)