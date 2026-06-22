<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `OptionsGamepadKeyLocationWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# OptionsGamepadKeyLocationWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Options.Gamepad
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OptionsGamepadKeyLocationWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Options/Gamepad/OptionsGamepadKeyLocationWidget.cs`

## 概述

`OptionsGamepadKeyLocationWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `ForceVisible` | `public bool ForceVisible { get; set; }` |
| `KeyID` | `public int KeyID { get; }` |
| `NormalPositionXOffset` | `public int NormalPositionXOffset { get; }` |
| `NormalPositionYOffset` | `public int NormalPositionYOffset { get; }` |
| `NormalSizeXOfImage` | `public int NormalSizeXOfImage { get; }` |
| `NormalSizeYOfImage` | `public int NormalSizeYOfImage { get; }` |
| `CurrentSizeXOfImage` | `public int CurrentSizeXOfImage { get; }` |
| `CurrentSizeYOfImage` | `public int CurrentSizeYOfImage { get; }` |
| `IsKeyToTheLeftOfTheGamepad` | `public bool IsKeyToTheLeftOfTheGamepad { get; }` |

## 使用示例

```csharp
// OptionsGamepadKeyLocationWidget (Widget) 的典型用法
// 声明/访问一个 OptionsGamepadKeyLocationWidget
var widget = root.GetChild("optionsGamepadKeyLocationWidget");;
```

## 参见

- [完整类目录](../catalog)