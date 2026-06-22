<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SceneNotificationVM`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SceneNotificationVM

**Namespace:** TaleWorlds.Core.ViewModelCollection.Information
**Module:** TaleWorlds.Core
**Type:** class
**Area:** Core

## Overview

> This is an auto-generated stub. `SceneNotificationVM` is a class in the `TaleWorlds.Core.ViewModelCollection.Information` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `ActiveData` | `public SceneNotificationData ActiveData { get; }` |
| `IsShown` | `public bool IsShown { get; set; }` |
| `IsReady` | `public bool IsReady { get; set; }` |
| `ClickToContinueText` | `public string ClickToContinueText { get; set; }` |
| `TitleText` | `public string TitleText { get; }` |
| `AffirmativeDescription` | `public string AffirmativeDescription { get; }` |
| `CancelDescription` | `public string CancelDescription { get; }` |
| `SceneID` | `public string SceneID { get; }` |
| `ButtonOkLabel` | `public string ButtonOkLabel { get; }` |
| `ButtonCancelLabel` | `public string ButtonCancelLabel { get; }` |
| `IsButtonOkShown` | `public bool IsButtonOkShown { get; }` |
| `IsButtonCancelShown` | `public bool IsButtonCancelShown { get; }` |
| `AffirmativeTitleText` | `public string AffirmativeTitleText { get; }` |
| `NegativeTitleText` | `public string NegativeTitleText { get; }` |
| `Scene` | `public object Scene { get; set; }` |
| `EndProgress` | `public float EndProgress { get; set; }` |
| `AffirmativeHint` | `public BasicTooltipViewModel AffirmativeHint { get; set; }` |


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### CreateNotification

```csharp
public void CreateNotification(SceneNotificationData data)
```

### ClearData

```csharp
public void ClearData()
```

### ExecuteAffirmativeProcess

```csharp
public void ExecuteAffirmativeProcess()
```

### ExecuteClose

```csharp
public void ExecuteClose()
```

### ExecuteNegativeProcess

```csharp
public void ExecuteNegativeProcess()
```

### OnFinalize

```csharp
public override void OnFinalize()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)