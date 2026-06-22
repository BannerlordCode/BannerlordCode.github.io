<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapNotificationVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MapNotificationVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Map
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `MapNotificationVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.Map` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `RemoveInputKey` | `public InputKeyItemVM RemoveInputKey { get; set; }` |
| `FocusedNotificationItem` | `public MapNotificationItemBaseVM FocusedNotificationItem { get; set; }` |
| `NotificationItems` | `public MBBindingList<MapNotificationItemBaseVM> NotificationItems { get; set; }` |


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### RegisterMapNotificationType

```csharp
public void RegisterMapNotificationType(Type data, Type item)
```

### OnFinalize

```csharp
public override void OnFinalize()
```

### OnFrameTick

```csharp
public void OnFrameTick(float dt)
```

### OnMenuModeTick

```csharp
public void OnMenuModeTick(float dt)
```

### AddMapNotification

```csharp
public void AddMapNotification(InformationData data)
```

### RemoveAllNotifications

```csharp
public void RemoveAllNotifications()
```

### SetRemoveInputKey

```csharp
public void SetRemoveInputKey(HotKey hotKey)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)