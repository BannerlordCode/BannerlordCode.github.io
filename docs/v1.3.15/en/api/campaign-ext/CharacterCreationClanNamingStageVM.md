<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CharacterCreationClanNamingStageVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CharacterCreationClanNamingStageVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `CharacterCreationClanNamingStageVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Character` | `public BasicCharacterObject Character { get; }` |
| `ShieldSlotIndex` | `public int ShieldSlotIndex { get; }` |
| `ShieldRosterElement` | `public ItemRosterElement ShieldRosterElement { get; }` |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `CameraControlKeys` | `public MBBindingList<InputKeyItemVM> CameraControlKeys { get; set; }` |
| `ClanName` | `public string ClanName { get; set; }` |
| `ClanNameNotApplicableReason` | `public string ClanNameNotApplicableReason { get; set; }` |
| `BottomHintText` | `public string BottomHintText { get; set; }` |
| `ClanBanner` | `public BannerImageIdentifierVM ClanBanner { get; set; }` |
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