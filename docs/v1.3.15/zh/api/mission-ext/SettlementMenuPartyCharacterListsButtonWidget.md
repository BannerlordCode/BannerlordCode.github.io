<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SettlementMenuPartyCharacterListsButtonWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SettlementMenuPartyCharacterListsButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.GameMenu
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SettlementMenuPartyCharacterListsButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/GameMenu/SettlementMenuPartyCharacterListsButtonWidget.cs`

## 概述

`SettlementMenuPartyCharacterListsButtonWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `PartyListButtonBrush` | `public Brush PartyListButtonBrush { get; set; }` |
| `CharacterListButtonBrush` | `public Brush CharacterListButtonBrush { get; set; }` |
| `CharactersList` | `public ContainerPageControlWidget CharactersList { get; set; }` |
| `PartiesList` | `public ContainerPageControlWidget PartiesList { get; set; }` |
| `MaxNumOfVisuals` | `public int MaxNumOfVisuals { get; set; }` |
| `ChildCharactersList` | `public ListPanel ChildCharactersList { get; set; }` |
| `ChildPartiesList` | `public ListPanel ChildPartiesList { get; set; }` |

## 使用示例

```csharp
// SettlementMenuPartyCharacterListsButtonWidget (Widget) 的典型用法
// 声明/访问一个 SettlementMenuPartyCharacterListsButtonWidget
var widget = root.GetChild("settlementMenuPartyCharacterListsButtonWidget");;
```

## 参见

- [完整类目录](../catalog)