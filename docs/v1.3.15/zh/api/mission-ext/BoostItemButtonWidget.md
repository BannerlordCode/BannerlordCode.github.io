<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BoostItemButtonWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BoostItemButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.GatherArmy
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BoostItemButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/GatherArmy/BoostItemButtonWidget.cs`

## 概述

`BoostItemButtonWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `ParentPopupWidget` | `public BoostCohesionPopupWidget ParentPopupWidget { get; }` |
| `BoostCurrencyType` | `public int BoostCurrencyType { get; set; }` |
| `BoostCurrencyIconWidget` | `public Widget BoostCurrencyIconWidget { get; set; }` |

## 使用示例

```csharp
// BoostItemButtonWidget (Widget) 的典型用法
// 声明/访问一个 BoostItemButtonWidget
var widget = root.GetChild("boostItemButtonWidget");;
```

## 参见

- [完整类目录](../catalog)