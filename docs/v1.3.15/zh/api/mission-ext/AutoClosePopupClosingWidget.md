<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AutoClosePopupClosingWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AutoClosePopupClosingWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.TownManagement
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AutoClosePopupClosingWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/TownManagement/AutoClosePopupClosingWidget.cs`

## 概述

`AutoClosePopupClosingWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `Target` | `public Widget Target { get; set; }` |
| `IncludeChildren` | `public bool IncludeChildren { get; set; }` |
| `IncludeTarget` | `public bool IncludeTarget { get; set; }` |

## 主要方法

### ShouldClosePopup
```csharp
public bool ShouldClosePopup()
```

## 使用示例

```csharp
// AutoClosePopupClosingWidget (Widget) 的典型用法
// 声明/访问一个 AutoClosePopupClosingWidget
var widget = root.GetChild("autoClosePopupClosingWidget");;
```

## 参见

- [完整类目录](../catalog)