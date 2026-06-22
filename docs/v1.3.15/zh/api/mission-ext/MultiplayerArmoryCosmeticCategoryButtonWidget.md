<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerArmoryCosmeticCategoryButtonWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerArmoryCosmeticCategoryButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby.Armory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerArmoryCosmeticCategoryButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/Armory/MultiplayerArmoryCosmeticCategoryButtonWidget.cs`

## 概述

`MultiplayerArmoryCosmeticCategoryButtonWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `ClothingCategorySpriteBrush` | `public Brush ClothingCategorySpriteBrush { get; set; }` |
| `TauntCategorySpriteBrush` | `public Brush TauntCategorySpriteBrush { get; set; }` |
| `CosmeticTypeName` | `public string CosmeticTypeName { get; set; }` |
| `CosmeticCategoryName` | `public string CosmeticCategoryName { get; set; }` |

## 使用示例

```csharp
// MultiplayerArmoryCosmeticCategoryButtonWidget (Widget) 的典型用法
// 声明/访问一个 MultiplayerArmoryCosmeticCategoryButtonWidget
var widget = root.GetChild("multiplayerArmoryCosmeticCategoryButtonWidget");;
```

## 参见

- [完整类目录](../catalog)