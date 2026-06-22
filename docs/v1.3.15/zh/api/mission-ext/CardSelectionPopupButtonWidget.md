<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CardSelectionPopupButtonWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CardSelectionPopupButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Crafting
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CardSelectionPopupButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Crafting/CardSelectionPopupButtonWidget.cs`

## 概述

`CardSelectionPopupButtonWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `PropertiesContainer` | `public CircularAutoScrollablePanelWidget PropertiesContainer { get; set; }` |

## 主要方法

### SetState
```csharp
public override void SetState(string stateName)
```

## 使用示例

```csharp
// CardSelectionPopupButtonWidget (Widget) 的典型用法
// 声明/访问一个 CardSelectionPopupButtonWidget
var widget = root.GetChild("cardSelectionPopupButtonWidget");;
```

## 参见

- [完整类目录](../catalog)