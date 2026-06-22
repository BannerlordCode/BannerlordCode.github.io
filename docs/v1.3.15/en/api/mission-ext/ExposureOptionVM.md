<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ExposureOptionVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ExposureOptionVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `ExposureOptionVM` is a class in the `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `TitleText` | `public string TitleText { get; set; }` |
| `ExplanationText` | `public string ExplanationText { get; set; }` |
| `CancelText` | `public string CancelText { get; set; }` |
| `AcceptText` | `public string AcceptText { get; set; }` |
| `Value` | `public float Value { get; set; }` |
| `InitialValue` | `public float InitialValue { get; set; }` |
| `Visible` | `public bool Visible { get; set; }` |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `ConfirmInputKey` | `public InputKeyItemVM ConfirmInputKey { get; set; }` |


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### ExecuteConfirm

```csharp
public void ExecuteConfirm()
```

### ExecuteCancel

```csharp
public void ExecuteCancel()
```

### SetCancelInputKey

```csharp
public void SetCancelInputKey(HotKey hotkey)
```

### SetConfirmInputKey

```csharp
public void SetConfirmInputKey(HotKey hotkey)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)