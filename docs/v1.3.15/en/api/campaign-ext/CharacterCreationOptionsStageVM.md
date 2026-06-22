<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CharacterCreationOptionsStageVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CharacterCreationOptionsStageVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation.OptionsStage
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `CharacterCreationOptionsStageVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation.OptionsStage` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `CameraControlKeys` | `public MBBindingList<InputKeyItemVM> CameraControlKeys { get; set; }` |
| `OptionsController` | `public CampaignOptionsControllerVM OptionsController { get; set; }` |
| `CharacterGamepadControlsEnabled` | `public bool CharacterGamepadControlsEnabled { get; set; }` |


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### CanAdvanceToNextStage

```csharp
public override bool CanAdvanceToNextStage()
```

### OnNextStage

```csharp
public override void OnNextStage()
```

### OnPreviousStage

```csharp
public override void OnPreviousStage()
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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)