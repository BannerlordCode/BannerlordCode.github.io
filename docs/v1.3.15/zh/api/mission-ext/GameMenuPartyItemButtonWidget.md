<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameMenuPartyItemButtonWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameMenuPartyItemButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.Overlay
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GameMenuPartyItemButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/Overlay/GameMenuPartyItemButtonWidget.cs`

## 概述

`GameMenuPartyItemButtonWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `PartyBackgroundBrush` | `public Brush PartyBackgroundBrush { get; set; }` |
| `CharacterBackgroundBrush` | `public Brush CharacterBackgroundBrush { get; set; }` |
| `BackgroundImageWidget` | `public ImageWidget BackgroundImageWidget { get; set; }` |
| `Relation` | `public int Relation { get; set; }` |
| `Location` | `public string Location { get; set; }` |
| `Power` | `public string Power { get; set; }` |
| `Description` | `public string Description { get; set; }` |
| `Profession` | `public string Profession { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `IsMergedWithArmy` | `public bool IsMergedWithArmy { get; set; }` |
| `IsPartyItem` | `public bool IsPartyItem { get; set; }` |
| `ContextMenu` | `public Widget ContextMenu { get; set; }` |
| `CurrentCharacterImageWidget` | `public ImageIdentifierWidget CurrentCharacterImageWidget { get; set; }` |

## 使用示例

```csharp
// GameMenuPartyItemButtonWidget (Widget) 的典型用法
// 声明/访问一个 GameMenuPartyItemButtonWidget
var widget = root.GetChild("gameMenuPartyItemButtonWidget");;
```

## 参见

- [完整类目录](../catalog)