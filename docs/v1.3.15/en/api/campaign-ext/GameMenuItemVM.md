<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameMenuItemVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameMenuItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `GameMenuItemVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

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


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)