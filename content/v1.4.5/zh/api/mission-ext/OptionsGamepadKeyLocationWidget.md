---
title: "OptionsGamepadKeyLocationWidget"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `OptionsGamepadKeyLocationWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# OptionsGamepadKeyLocationWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Options.Gamepad
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OptionsGamepadKeyLocationWidget : Widget`
**Base:** `Widget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Options.Gamepad/OptionsGamepadKeyLocationWidget.cs`

## 概述

`OptionsGamepadKeyLocationWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `OptionsGamepadKeyLocationWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

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
var widget = new OptionsGamepadKeyLocationWidget(context);
```

## 参见

- [完整类目录](../catalog)