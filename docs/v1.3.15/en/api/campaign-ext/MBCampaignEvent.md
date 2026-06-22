<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBCampaignEvent`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBCampaignEvent

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `MBCampaignEvent` is a class in the `TaleWorlds.CampaignSystem` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `TriggerPeriod` | `public CampaignTime TriggerPeriod { get; }` |
| `InitialWait` | `public CampaignTime InitialWait { get; }` |
| `isEventDeleted` | `public bool isEventDeleted { get; set; }` |


## Key Methods

### AddHandler

```csharp
public void AddHandler(MBCampaignEvent.CampaignEventDelegate gameEventDelegate)
```

### RunHandlers

```csharp
public void RunHandlers(params object delegateParams)
```

### Unregister

```csharp
public void Unregister(object instance)
```

### CheckUpdate

```csharp
public void CheckUpdate()
```

### DeletePeriodicEvent

```csharp
public void DeletePeriodicEvent()
```

### CampaignEventDelegate

```csharp
public delegate void CampaignEventDelegate(MBCampaignEvent campaignEvent, params object delegateParams)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)