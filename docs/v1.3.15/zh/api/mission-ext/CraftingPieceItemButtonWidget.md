<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CraftingPieceItemButtonWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CraftingPieceItemButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Crafting
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CraftingPieceItemButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Crafting/CraftingPieceItemButtonWidget.cs`

## 概述

`CraftingPieceItemButtonWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `CraftingPieceItemButtonWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `ImageIdentifier` | `public ImageIdentifierWidget ImageIdentifier { get; set; }` |
| `PlayerHasPiece` | `public bool PlayerHasPiece { get; set; }` |
| `HasPieceBrush` | `public Brush HasPieceBrush { get; set; }` |
| `DontHavePieceBrush` | `public Brush DontHavePieceBrush { get; set; }` |
| `HasPieceMaterialBrush` | `public Brush HasPieceMaterialBrush { get; set; }` |
| `DontHavePieceMaterialBrush` | `public Brush DontHavePieceMaterialBrush { get; set; }` |

## 使用示例

```csharp
var widget = new CraftingPieceItemButtonWidget(context);
```

## 参见

- [完整类目录](../catalog)