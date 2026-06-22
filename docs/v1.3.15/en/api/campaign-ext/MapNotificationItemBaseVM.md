<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapNotificationItemBaseVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MapNotificationItemBaseVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `MapNotificationItemBaseVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `NavigationHandler` | `public INavigationHandler NavigationHandler { get; }` |
| `Data` | `public InformationData Data { get; }` |
| `RemoveInputKey` | `public InputKeyItemVM RemoveInputKey { get; set; }` |
| `IsFocused` | `public bool IsFocused { get; set; }` |
| `NotificationIdentifier` | `public string NotificationIdentifier { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `ForceInspection` | `public bool ForceInspection { get; set; }` |
| `DescriptionText` | `public string DescriptionText { get; set; }` |
| `SoundId` | `public string SoundId { get; set; }` |


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### SetNavigationHandler

```csharp
public void SetNavigationHandler(INavigationHandler navigationHandler)
```

### SetFastMoveCameraToPosition

```csharp
public void SetFastMoveCameraToPosition(Action<CampaignVec2> fastMoveCameraToPosition)
```

### ExecuteAction

```csharp
public void ExecuteAction()
```

### ExecuteRemove

```csharp
public void ExecuteRemove()
```

### ExecuteSetFocused

```csharp
public void ExecuteSetFocused()
```

### ExecuteSetUnfocused

```csharp
public void ExecuteSetUnfocused()
```

### ManualRefreshRelevantStatus

```csharp
public virtual void ManualRefreshRelevantStatus()
```

### SetRemoveInputKey

```csharp
public void SetRemoveInputKey(HotKey hotKey)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)