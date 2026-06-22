<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FaceGenVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FaceGenVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.FaceGenerator
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `FaceGenVM` is a class in the `TaleWorlds.MountAndBlade.ViewModelCollection.FaceGenerator` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `PreviousTabInputKey` | `public InputKeyItemVM PreviousTabInputKey { get; set; }` |
| `NextTabInputKey` | `public InputKeyItemVM NextTabInputKey { get; set; }` |
| `CameraControlKeys` | `public MBBindingList<InputKeyItemVM> CameraControlKeys { get; set; }` |
| `AreAllTabsEnabled` | `public bool AreAllTabsEnabled { get; }` |
| `IsBodyEnabled` | `public bool IsBodyEnabled { get; set; }` |
| `IsFaceEnabled` | `public bool IsFaceEnabled { get; set; }` |
| `IsEyesEnabled` | `public bool IsEyesEnabled { get; set; }` |
| `IsNoseEnabled` | `public bool IsNoseEnabled { get; set; }` |
| `IsMouthEnabled` | `public bool IsMouthEnabled { get; set; }` |
| `IsHairEnabled` | `public bool IsHairEnabled { get; set; }` |
| `IsTaintEnabled` | `public bool IsTaintEnabled { get; set; }` |
| `FlipHairLbl` | `public string FlipHairLbl { get; set; }` |
| `SkinColorLbl` | `public string SkinColorLbl { get; set; }` |
| `RaceLbl` | `public string RaceLbl { get; set; }` |
| `GenderLbl` | `public string GenderLbl { get; set; }` |
| `CancelBtnLbl` | `public string CancelBtnLbl { get; set; }` |
| `DoneBtnLbl` | `public string DoneBtnLbl { get; set; }` |
| `BodyHint` | `public HintViewModel BodyHint { get; set; }` |


## Key Methods

### SetFaceGenerationParams

```csharp
public void SetFaceGenerationParams(FaceGenerationParams faceGenerationParams)
```

### RefreshValues

```csharp
public override void RefreshValues()
```

### InitializeHistory

```csharp
public void InitializeHistory(FaceGenHistory faceGenHistory)
```

### OnTabClicked

```csharp
public void OnTabClicked(int index)
```

### SelectPreviousTab

```csharp
public void SelectPreviousTab()
```

### SelectNextTab

```csharp
public void SelectNextTab()
```

### Refresh

```csharp
public void Refresh(bool clearProperties)
```

### ExecuteHearCurrentVoiceSample

```csharp
public void ExecuteHearCurrentVoiceSample()
```

### ExecuteReset

```csharp
public void ExecuteReset()
```

### ExecuteResetAll

```csharp
public void ExecuteResetAll()
```

### ExecuteRandomize

```csharp
public void ExecuteRandomize()
```

### ExecuteRandomizeAll

```csharp
public void ExecuteRandomizeAll()
```

### ExecuteCancel

```csharp
public void ExecuteCancel()
```

### ExecuteDone

```csharp
public void ExecuteDone()
```

### ExecuteRedo

```csharp
public void ExecuteRedo()
```

### ExecuteUndo

```csharp
public void ExecuteUndo()
```

### ExecuteChangeClothing

```csharp
public void ExecuteChangeClothing()
```

### AddCommand

```csharp
public void AddCommand()
```

### SetBodyProperties

```csharp
public void SetBodyProperties(BodyProperties bodyProperties, bool ignoreDebugValues, int race = 0, int gender = -1, bool recordChange = false)
```

### UpdateFacegen

```csharp
public void UpdateFacegen()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)