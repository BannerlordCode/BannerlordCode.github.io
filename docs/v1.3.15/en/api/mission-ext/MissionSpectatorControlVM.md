<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionSpectatorControlVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionSpectatorControlVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `MissionSpectatorControlVM` is a class in the `TaleWorlds.MountAndBlade.ViewModelCollection.HUD` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `PrevCharacterText` | `public string PrevCharacterText { get; set; }` |
| `NextCharacterText` | `public string NextCharacterText { get; set; }` |
| `TakeControlText` | `public string TakeControlText { get; set; }` |
| `StatusText` | `public string StatusText { get; set; }` |
| `IsTakeControlRelevant` | `public bool IsTakeControlRelevant { get; set; }` |
| `IsTakeControlEnabled` | `public bool IsTakeControlEnabled { get; set; }` |
| `SpectatedAgentName` | `public string SpectatedAgentName { get; set; }` |
| `PrevCharacterKey` | `public InputKeyItemVM PrevCharacterKey { get; set; }` |
| `NextCharacterKey` | `public InputKeyItemVM NextCharacterKey { get; set; }` |
| `TakeControlKey` | `public InputKeyItemVM TakeControlKey { get; set; }` |


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### OnSpectatedAgentFocusIn

```csharp
public void OnSpectatedAgentFocusIn(Agent followedAgent)
```

### OnSpectatedAgentFocusOut

```csharp
public void OnSpectatedAgentFocusOut(Agent followedAgent)
```

### OnFinalize

```csharp
public override void OnFinalize()
```

### SetMainAgentStatus

```csharp
public void SetMainAgentStatus(bool isDead)
```

### SetPrevCharacterInputKey

```csharp
public void SetPrevCharacterInputKey(GameKey gameKey)
```

### SetNextCharacterInputKey

```csharp
public void SetNextCharacterInputKey(GameKey gameKey)
```

### SetTakeControlInputKey

```csharp
public void SetTakeControlInputKey(GameKey gameKey)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)