<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TooltipPropertyWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TooltipPropertyWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Information
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TooltipPropertyWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Information/TooltipPropertyWidget.cs`

## Overview

`TooltipPropertyWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

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

## Key Methods

### SetBattleScope
```csharp
public void SetBattleScope(bool battleScope)
```

### RefreshSize
```csharp
public void RefreshSize(bool inBattleScope, float battleScopeSize, float maxValueLabelSizeX, float maxDefinitionLabelSizeX, Brush definitionRelationBrush = null, Brush valueRelationBrush = null)
```

## Usage Example

```csharp
// Typical usage of TooltipPropertyWidget (Widget)
// 声明/访问一个 TooltipPropertyWidget
var widget = root.GetChild("tooltipPropertyWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)