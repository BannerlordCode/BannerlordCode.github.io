<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `OptionsItemWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# OptionsItemWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Options
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OptionsItemWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Options/OptionsItemWidget.cs`

## 概述

`OptionsItemWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `BooleanOption` | `public Widget BooleanOption { get; set; }` |
| `NumericOption` | `public Widget NumericOption { get; set; }` |
| `StringOption` | `public Widget StringOption { get; set; }` |
| `GameKeyOption` | `public Widget GameKeyOption { get; set; }` |
| `ActionOption` | `public Widget ActionOption { get; set; }` |
| `InputOption` | `public Widget InputOption { get; set; }` |
| `DropdownWidget` | `public AnimatedDropdownWidget DropdownWidget { get; set; }` |
| `BooleanToggleButtonWidget` | `public ButtonWidget BooleanToggleButtonWidget { get; set; }` |
| `OptionTypeID` | `public int OptionTypeID { get; set; }` |
| `IsOptionEnabled` | `public bool IsOptionEnabled { get; set; }` |
| `OptionTitle` | `public string OptionTitle { get; set; }` |
| `ImageIDs` | `public string ImageIDs { get; set; }` |
| `OptionDescription` | `public string OptionDescription { get; set; }` |

## 主要方法

### SetCurrentScreenWidget
```csharp
public void SetCurrentScreenWidget(OptionsScreenWidget screenWidget)
```

## 使用示例

```csharp
// OptionsItemWidget (Widget) 的典型用法
// 声明/访问一个 OptionsItemWidget
var widget = root.GetChild("optionsItemWidget");;
```

## 参见

- [完整类目录](../catalog)