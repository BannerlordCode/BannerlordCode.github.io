---
title: "PartyScreenWidget"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PartyScreenWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# PartyScreenWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PartyScreenWidget : Widget`
**Base:** `Widget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party/PartyScreenWidget.cs`

## 概述

`PartyScreenWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `PartyScreenWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `MainScrollPanel` | `public ScrollablePanel MainScrollPanel { get; set; }` |
| `OtherScrollPanel` | `public ScrollablePanel OtherScrollPanel { get; set; }` |
| `TransferInputKeyVisual` | `public InputKeyVisualWidget TransferInputKeyVisual { get; set; }` |
| `UpgradePopupParent` | `public Widget UpgradePopupParent { get; set; }` |
| `RecruitPopupParent` | `public Widget RecruitPopupParent { get; set; }` |
| `TakeAllPrisonersInputKeyVisualParent` | `public Widget TakeAllPrisonersInputKeyVisualParent { get; set; }` |
| `DismissAllPrisonersInputKeyVisualParent` | `public Widget DismissAllPrisonersInputKeyVisualParent { get; set; }` |
| `MainPartyTroopSize` | `public int MainPartyTroopSize { get; set; }` |
| `IsPrisonerWarningEnabled` | `public bool IsPrisonerWarningEnabled { get; set; }` |
| `IsOtherTroopWarningEnabled` | `public bool IsOtherTroopWarningEnabled { get; set; }` |
| `IsTroopWarningEnabled` | `public bool IsTroopWarningEnabled { get; set; }` |
| `TroopLabel` | `public TextWidget TroopLabel { get; set; }` |
| `PrisonerLabel` | `public TextWidget PrisonerLabel { get; set; }` |
| `OtherTroopLabel` | `public TextWidget OtherTroopLabel { get; set; }` |
| `OtherMemberList` | `public ListPanel OtherMemberList { get; set; }` |
| `OtherPrisonerList` | `public ListPanel OtherPrisonerList { get; set; }` |
| `MainMemberList` | `public ListPanel MainMemberList { get; set; }` |
| `MainPrisonerList` | `public ListPanel MainPrisonerList { get; set; }` |
| `ScrollToCharacter` | `public bool ScrollToCharacter { get; set; }` |
| `ScrollCharacterId` | `public string ScrollCharacterId { get; set; }` |
| `IsScrollTargetPrisoner` | `public bool IsScrollTargetPrisoner { get; set; }` |

## 使用示例

```csharp
var widget = new PartyScreenWidget(context);
```

## 参见

- [完整类目录](../catalog)