<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameMenuItemVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameMenuItemVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`GameMenuItemVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `OptionID` | `public string OptionID { get; }` |
| `GameMenuOption` | `public GameMenuOption GameMenuOption { get; }` |
| `Quests` | `public MBBindingList<QuestMarkerVM> Quests { get; set; }` |
| `OptionLeaveType` | `public string OptionLeaveType { get; set; }` |
| `ItemType` | `public int ItemType { get; set; }` |
| `IsWaitActive` | `public bool IsWaitActive { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsHighlightEnabled` | `public bool IsHighlightEnabled { get; set; }` |
| `ItemHint` | `public HintViewModel ItemHint { get; set; }` |
| `QuestHint` | `public HintViewModel QuestHint { get; set; }` |
| `IssueHint` | `public HintViewModel IssueHint { get; set; }` |
| `GameMenuStringId` | `public string GameMenuStringId { get; set; }` |
| `Item` | `public string Item { get; set; }` |
| `BattleSize` | `public int BattleSize { get; set; }` |
| `IsNavalBattle` | `public bool IsNavalBattle { get; set; }` |
| `ShortcutKey` | `public InputKeyItemVM ShortcutKey { get; set; }` |
| `OptionID` | `public string OptionID { get; }` |


## 主要方法

### InitializeWith

```csharp
public void InitializeWith(in GameMenuItemVM.GameMenuItemCreationData data)
```

### RefreshValues

```csharp
public override void RefreshValues()
```

### ExecuteAction

```csharp
public void ExecuteAction()
```

### OnFinalize

```csharp
public override void OnFinalize()
```

### Refresh

```csharp
public void Refresh()
```

### UpdateWith

```csharp
public void UpdateWith(GameMenuItemVM newItem)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)