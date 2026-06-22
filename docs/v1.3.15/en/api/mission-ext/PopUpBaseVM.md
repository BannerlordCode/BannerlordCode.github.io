<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PopUpBaseVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PopUpBaseVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Inquiries
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `PopUpBaseVM` is a class in the `TaleWorlds.MountAndBlade.ViewModelCollection.Inquiries` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `TitleText` | `public string TitleText { get; set; }` |
| `PopUpLabel` | `public string PopUpLabel { get; set; }` |
| `ButtonOkLabel` | `public string ButtonOkLabel { get; set; }` |
| `ButtonCancelLabel` | `public string ButtonCancelLabel { get; set; }` |
| `IsButtonOkShown` | `public bool IsButtonOkShown { get; set; }` |
| `IsButtonCancelShown` | `public bool IsButtonCancelShown { get; set; }` |
| `IsButtonOkEnabled` | `public bool IsButtonOkEnabled { get; set; }` |
| `IsButtonCancelEnabled` | `public bool IsButtonCancelEnabled { get; set; }` |
| `ButtonOkHint` | `public HintViewModel ButtonOkHint { get; set; }` |
| `ButtonCancelHint` | `public HintViewModel ButtonCancelHint { get; set; }` |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |


## Key Methods

### ExecuteAffirmativeAction

```csharp
public abstract void ExecuteAffirmativeAction()
```

### ExecuteNegativeAction

```csharp
public abstract void ExecuteNegativeAction()
```

### OnTick

```csharp
public virtual void OnTick(float dt)
```

### OnClearData

```csharp
public virtual void OnClearData()
```

### ForceRefreshKeyVisuals

```csharp
public void ForceRefreshKeyVisuals()
```

### CloseQuery

```csharp
public void CloseQuery()
```

### OnFinalize

```csharp
public override void OnFinalize()
```

### SetCancelInputKey

```csharp
public void SetCancelInputKey(HotKey hotKey)
```

### SetDoneInputKey

```csharp
public void SetDoneInputKey(HotKey hotKey)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)