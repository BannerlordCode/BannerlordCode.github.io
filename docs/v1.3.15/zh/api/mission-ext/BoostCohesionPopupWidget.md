<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BoostCohesionPopupWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BoostCohesionPopupWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.GatherArmy
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BoostCohesionPopupWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/GatherArmy/BoostCohesionPopupWidget.cs`

## 概述

`BoostCohesionPopupWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `ClosePopupButton` | `public ButtonWidget ClosePopupButton { get; set; }` |

## 主要方法

### ClosePopup
```csharp
public void ClosePopup(Widget widget)
```

## 使用示例

```csharp
// BoostCohesionPopupWidget (Widget) 的典型用法
// 声明/访问一个 BoostCohesionPopupWidget
var widget = root.GetChild("boostCohesionPopupWidget");;
```

## 参见

- [完整类目录](../catalog)