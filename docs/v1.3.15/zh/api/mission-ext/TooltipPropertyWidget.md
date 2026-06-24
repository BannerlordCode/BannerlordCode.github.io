<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TooltipPropertyWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TooltipPropertyWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Information
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TooltipPropertyWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Information/TooltipPropertyWidget.cs`

## 概述

`TooltipPropertyWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `TooltipPropertyWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsTwoColumn` | `public bool IsTwoColumn { get; }` |
| `PropertyModifierAsFlag` | `public TooltipPropertyWidget.TooltipPropertyFlags PropertyModifierAsFlag { get; }` |
| `IsMultiLine` | `public bool IsMultiLine { get; }` |
| `IsBattleMode` | `public bool IsBattleMode { get; }` |
| `IsBattleModeOver` | `public bool IsBattleModeOver { get; }` |
| `IsCost` | `public bool IsCost { get; }` |
| `IsRelation` | `public bool IsRelation { get; }` |
| `RundownSeperatorSpriteName` | `public string RundownSeperatorSpriteName { get; set; }` |
| `DefaultSeperatorSpriteName` | `public string DefaultSeperatorSpriteName { get; set; }` |
| `TitleBackgroundSpriteName` | `public string TitleBackgroundSpriteName { get; set; }` |
| `ValueNameTextBrush` | `public Brush ValueNameTextBrush { get; set; }` |
| `TitleTextBrush` | `public Brush TitleTextBrush { get; set; }` |
| `SubtextBrush` | `public Brush SubtextBrush { get; set; }` |
| `ValueTextBrush` | `public Brush ValueTextBrush { get; set; }` |
| `DescriptionTextBrush` | `public Brush DescriptionTextBrush { get; set; }` |
| `ModifyDefinitionColor` | `public bool ModifyDefinitionColor { get; set; }` |
| `DefinitionLabel` | `public RichTextWidget DefinitionLabel { get; set; }` |
| `ValueLabel` | `public RichTextWidget ValueLabel { get; set; }` |
| `ValueBackgroundSpriteWidget` | `public ListPanel ValueBackgroundSpriteWidget { get; set; }` |
| `DefinitionLabelContainer` | `public Widget DefinitionLabelContainer { get; set; }` |
| `ValueLabelContainer` | `public Widget ValueLabelContainer { get; set; }` |
| `TextColor` | `public Color TextColor { get; set; }` |
| `TextHeight` | `public int TextHeight { get; set; }` |
| `DefinitionText` | `public string DefinitionText { get; set; }` |
| `ValueText` | `public string ValueText { get; set; }` |
| `PropertyModifier` | `public int PropertyModifier { get; set; }` |

## 主要方法

### SetBattleScope
`public void SetBattleScope(bool battleScope)`

**用途 / Purpose:** 设置 `battle scope` 的值或状态。

### RefreshSize
`public void RefreshSize(bool inBattleScope, float battleScopeSize, float maxValueLabelSizeX, float maxDefinitionLabelSizeX, Brush definitionRelationBrush = null, Brush valueRelationBrush = null)`

**用途 / Purpose:** 刷新 `size` 的显示或缓存。

## 使用示例

```csharp
var widget = new TooltipPropertyWidget(context);
```

## 参见

- [完整类目录](../catalog)