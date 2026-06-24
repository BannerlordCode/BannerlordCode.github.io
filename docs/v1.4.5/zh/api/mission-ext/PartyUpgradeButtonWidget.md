<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PartyUpgradeButtonWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# PartyUpgradeButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PartyUpgradeButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party/PartyUpgradeButtonWidget.cs`

## 概述

`PartyUpgradeButtonWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `PartyUpgradeButtonWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `ImageIdentifierWidget` | `public ImageIdentifierWidget ImageIdentifierWidget { get; set; }` |
| `DefaultBrush` | `public Brush DefaultBrush { get; set; }` |
| `MarinerTroopBrush` | `public BrushWidget MarinerTroopBrush { get; set; }` |
| `UnavailableBrush` | `public Brush UnavailableBrush { get; set; }` |
| `InsufficientBrush` | `public Brush InsufficientBrush { get; set; }` |
| `IsAvailable` | `public bool IsAvailable { get; set; }` |
| `IsInsufficient` | `public bool IsInsufficient { get; set; }` |

## 使用示例

```csharp
var widget = new PartyUpgradeButtonWidget(context);
```

## 参见

- [完整类目录](../catalog)