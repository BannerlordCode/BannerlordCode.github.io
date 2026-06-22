<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AgentInteractionInterfaceVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AgentInteractionInterfaceVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Interaction
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `AgentInteractionInterfaceVM` is a class in the `TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Interaction` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `TargetHealth` | `public int TargetHealth { get; set; }` |
| `ShowHealthBar` | `public bool ShowHealthBar { get; set; }` |
| `PrimaryInteractionMessages` | `public MBBindingList<MissionPrimaryInteractionItemVM> PrimaryInteractionMessages { get; set; }` |
| `SecondaryInteractionMessages` | `public MBBindingList<MissionInteractionItemBaseVM> SecondaryInteractionMessages { get; set; }` |
| `BackgroundColor` | `public string BackgroundColor { get; set; }` |
| `TextColor` | `public string TextColor { get; set; }` |
| `IsActive` | `public bool IsActive { get; set; }` |
| `HasSecondaryMessages` | `public bool HasSecondaryMessages { get; set; }` |
| `DisplayInteractionText` | `public bool DisplayInteractionText { get; set; }` |
| `ForcedInteractionMessages` | `public MBBindingList<MissionPrimaryInteractionItemVM> ForcedInteractionMessages { get; set; }` |
| `HasForcedMessages` | `public bool HasForcedMessages { get; set; }` |


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### OnFinalize

```csharp
public override void OnFinalize()
```

### OnFocusedHealthChanged

```csharp
public void OnFocusedHealthChanged(IFocusable focusable, float healthPercentage, bool hideHealthbarWhenFull)
```

### OnActiveMissionHintChanged

```csharp
public void OnActiveMissionHintChanged(MissionHint previousHint, MissionHint newHint)
```

### AddSecondaryMessage

```csharp
public void AddSecondaryMessage(MissionInteractionItemBaseVM message)
```

### RemoveSecondaryMessage

```csharp
public bool RemoveSecondaryMessage(MissionInteractionItemBaseVM message)
```

### HasSecondaryInteractionMessage

```csharp
public bool HasSecondaryInteractionMessage(MissionInteractionItemBaseVM message)
```

### ResetFocus

```csharp
public void ResetFocus()
```

### SetForcedInteractionTexts

```csharp
public void SetForcedInteractionTexts(TextObject text1, bool isDisabled1, TextObject text2, bool isDisabled2)
```

### ClearForcedInteractionTexts

```csharp
public void ClearForcedInteractionTexts()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)