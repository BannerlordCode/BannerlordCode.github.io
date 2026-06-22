<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CraftingPieceItemImageWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CraftingPieceItemImageWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Crafting
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CraftingPieceItemImageWidget : ImageWidget`
**Base:** `ImageWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Crafting/CraftingPieceItemImageWidget.cs`

## 概述

`CraftingPieceItemImageWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

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
// CraftingPieceItemImageWidget (Widget) 的典型用法
// 声明/访问一个 CraftingPieceItemImageWidget
var widget = root.GetChild("craftingPieceItemImageWidget");;
```

## 参见

- [完整类目录](../catalog)