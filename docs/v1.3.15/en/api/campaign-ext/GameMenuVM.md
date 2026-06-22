<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameMenuVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameMenuVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `GameMenuVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `MenuContext` | `public MenuContext MenuContext { get; }` |
| `IsNight` | `public bool IsNight { get; set; }` |
| `IsInSiegeMode` | `public bool IsInSiegeMode { get; set; }` |
| `IsEncounterMenu` | `public bool IsEncounterMenu { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `ContextText` | `public string ContextText { get; set; }` |
| `ItemList` | `public MBBindingList<GameMenuItemVM> ItemList { get; set; }` |
| `ProgressItemList` | `public MBBindingList<GameMenuItemProgressVM> ProgressItemList { get; set; }` |
| `Background` | `public string Background { get; set; }` |
| `BackgroundCopy` | `public string BackgroundCopy { get; set; }` |
| `MenuId` | `public string MenuId { get; set; }` |
| `PlunderItems` | `public MBBindingList<GameMenuPlunderItemVM> PlunderItems { get; set; }` |


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### SetIdleMode

```csharp
public void SetIdleMode(bool isIdle)
```

### Refresh

```csharp
public void Refresh(bool forceUpdateItems)
```

### OnFrameTick

```csharp
public void OnFrameTick()
```

### UpdateMenuContext

```csharp
public void UpdateMenuContext(MenuContext newMenuContext)
```

### OnFinalize

```csharp
public override void OnFinalize()
```

### AddHotKey

```csharp
public void AddHotKey(GameMenuOption.LeaveType leaveType, GameKey gameKey)
```

### ExecuteLink

```csharp
public void ExecuteLink(string link)
```

### Get

```csharp
public TItem Get()
```

### Release

```csharp
public void Release(TItem item)
```

### Compare

```csharp
public int Compare(GameMenuItemVM x, GameMenuItemVM y)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)