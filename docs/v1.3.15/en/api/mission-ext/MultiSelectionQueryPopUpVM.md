<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiSelectionQueryPopUpVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiSelectionQueryPopUpVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Inquiries
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `MultiSelectionQueryPopUpVM` is a class in the `TaleWorlds.MountAndBlade.ViewModelCollection.Inquiries` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `InquiryElements` | `public MBBindingList<InquiryElementVM> InquiryElements { get; set; }` |
| `MaxSelectableOptionCount` | `public int MaxSelectableOptionCount { get; set; }` |
| `MinSelectableOptionCount` | `public int MinSelectableOptionCount { get; set; }` |
| `IsSearchAvailable` | `public bool IsSearchAvailable { get; set; }` |
| `SearchText` | `public string SearchText { get; set; }` |
| `SearchPlaceholderText` | `public string SearchPlaceholderText { get; set; }` |


## Key Methods

### SetData

```csharp
public void SetData(MultiSelectionInquiryData data)
```

### ExecuteAffirmativeAction

```csharp
public override void ExecuteAffirmativeAction()
```

### ExecuteNegativeAction

```csharp
public override void ExecuteNegativeAction()
```

### OnClearData

```csharp
public override void OnClearData()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)