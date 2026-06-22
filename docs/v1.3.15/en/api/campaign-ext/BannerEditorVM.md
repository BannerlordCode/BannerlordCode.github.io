<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BannerEditorVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BannerEditorVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `BannerEditorVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Character` | `public BasicCharacterObject Character { get; }` |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `CameraControlKeys` | `public MBBindingList<InputKeyItemVM> CameraControlKeys { get; set; }` |
| `CategoryNames` | `public MBBindingList<HintViewModel> CategoryNames { get; set; }` |
| `IconsList` | `public MBBindingList<BannerIconVM> IconsList { get; set; }` |
| `PrimaryColorList` | `public MBBindingList<BannerColorVM> PrimaryColorList { get; set; }` |
| `SigilColorList` | `public MBBindingList<BannerColorVM> SigilColorList { get; set; }` |
| `RandomizeHint` | `public HintViewModel RandomizeHint { get; set; }` |
| `UndoHint` | `public HintViewModel UndoHint { get; set; }` |
| `RedoHint` | `public HintViewModel RedoHint { get; set; }` |
| `ResetHint` | `public HintViewModel ResetHint { get; set; }` |
| `CurrentShieldName` | `public string CurrentShieldName { get; set; }` |
| `MinIconSize` | `public int MinIconSize { get; set; }` |
| `MaxIconSize` | `public int MaxIconSize { get; set; }` |
| `CurrentIconSize` | `public int CurrentIconSize { get; set; }` |
| `PrimaryColorText` | `public string PrimaryColorText { get; set; }` |
| `SizeText` | `public string SizeText { get; set; }` |
| `SigilColorText` | `public string SigilColorText { get; set; }` |
| `CancelText` | `public string CancelText { get; set; }` |


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### RefreshSelectedColorsAndSigils

```csharp
public void RefreshSelectedColorsAndSigils()
```

### SetClanRelatedRules

```csharp
public void SetClanRelatedRules(bool canChangeBackgroundColor)
```

### ExecuteSwitchColors

```csharp
public void ExecuteSwitchColors()
```

### ExecuteDone

```csharp
public void ExecuteDone()
```

### ExecuteCancel

```csharp
public void ExecuteCancel()
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

### AddCameraControlInputKey

```csharp
public void AddCameraControlInputKey(HotKey hotKey)
```

### AddCameraControlInputKey

```csharp
public void AddCameraControlInputKey(GameKey gameKey)
```

### AddCameraControlInputKey

```csharp
public void AddCameraControlInputKey(GameAxisKey gameAxisKey, TextObject keyName)
```

### ExecuteGoToIndex

```csharp
public void ExecuteGoToIndex(int index)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)