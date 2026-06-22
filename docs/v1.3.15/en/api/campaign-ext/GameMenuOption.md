<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameMenuOption`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameMenuOption

**Namespace:** TaleWorlds.CampaignSystem.GameMenus
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `GameMenuOption` is a class in the `TaleWorlds.CampaignSystem.GameMenus` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Type` | `public GameMenu.MenuAndOptionType Type { get; }` |
| `OptionLeaveType` | `public GameMenuOption.LeaveType OptionLeaveType { get; }` |
| `OptionQuestData` | `public GameMenuOption.IssueQuestFlags OptionQuestData { get; }` |
| `IdString` | `public string IdString { get; }` |
| `Text` | `public TextObject Text { get; }` |
| `Text2` | `public TextObject Text2 { get; }` |
| `Tooltip` | `public TextObject Tooltip { get; }` |
| `IsLeave` | `public bool IsLeave { get; }` |
| `IsRepeatable` | `public bool IsRepeatable { get; }` |
| `IsEnabled` | `public bool IsEnabled { get; }` |
| `RelatedObject` | `public object RelatedObject { get; }` |


## Key Methods

### GetConditionsHold

```csharp
public bool GetConditionsHold(Game game, MenuContext menuContext)
```

### RunConsequence

```csharp
public void RunConsequence(MenuContext menuContext)
```

### SetEnable

```csharp
public void SetEnable(bool isEnable)
```

### OnConditionDelegate

```csharp
public delegate bool OnConditionDelegate(MenuCallbackArgs args)
```

### OnConsequenceDelegate

```csharp
public delegate void OnConsequenceDelegate(MenuCallbackArgs args)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)