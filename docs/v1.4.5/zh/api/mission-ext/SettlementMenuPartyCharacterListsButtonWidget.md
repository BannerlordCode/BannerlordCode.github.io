<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SettlementMenuPartyCharacterListsButtonWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SettlementMenuPartyCharacterListsButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.GameMenu
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SettlementMenuPartyCharacterListsButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.GameMenu/SettlementMenuPartyCharacterListsButtonWidget.cs`

## 概述

`SettlementMenuPartyCharacterListsButtonWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `SettlementMenuPartyCharacterListsButtonWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

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
var widget = new SettlementMenuPartyCharacterListsButtonWidget(context);
```

## 参见

- [完整类目录](../catalog)