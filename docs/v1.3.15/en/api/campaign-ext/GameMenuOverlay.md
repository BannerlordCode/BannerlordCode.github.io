<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameMenuOverlay`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameMenuOverlay

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `GameMenuOverlay` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `IsContextMenuEnabled` | `public bool IsContextMenuEnabled { get; set; }` |
| `IsInitializationOver` | `public bool IsInitializationOver { get; set; }` |
| `IsInfoBarExtended` | `public bool IsInfoBarExtended { get; set; }` |
| `ContextList` | `public MBBindingList<StringItemWithEnabledAndHintVM> ContextList { get; set; }` |
| `CurrentOverlayType` | `public int CurrentOverlayType { get; set; }` |
| `ExitInputKey` | `public InputKeyItemVM ExitInputKey { get; set; }` |


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### ExecuteOnOverlayClosed

```csharp
public virtual void ExecuteOnOverlayClosed()
```

### ExecuteOnOverlayOpened

```csharp
public virtual void ExecuteOnOverlayOpened()
```

### OnFinalize

```csharp
public override void OnFinalize()
```

### Refresh

```csharp
public virtual void Refresh()
```

### UpdateOverlayType

```csharp
public virtual void UpdateOverlayType(GameMenu.MenuOverlayType newType)
```

### OnFrameTick

```csharp
public virtual void OnFrameTick(float dt)
```

### HourlyTick

```csharp
public void HourlyTick()
```

### SetExitInputKey

```csharp
public void SetExitInputKey(HotKey hotKey)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)