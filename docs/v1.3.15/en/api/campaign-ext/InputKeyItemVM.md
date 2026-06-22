<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `InputKeyItemVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# InputKeyItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Input
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `InputKeyItemVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.Input` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `GameKey` | `public GameKey GameKey { get; }` |
| `HotKey` | `public HotKey HotKey { get; }` |
| `KeyID` | `public string KeyID { get; set; }` |
| `KeyName` | `public string KeyName { get; set; }` |
| `IsVisible` | `public bool IsVisible { get; set; }` |


## Key Methods

### OnFinalize

```csharp
public override void OnFinalize()
```

### RefreshValues

```csharp
public override void RefreshValues()
```

### SetForcedVisibility

```csharp
public void SetForcedVisibility(bool? isVisible)
```

### CreateFromGameKey

```csharp
public static InputKeyItemVM CreateFromGameKey(GameKey gameKey, bool isConsoleOnly)
```

### CreateFromHotKey

```csharp
public static InputKeyItemVM CreateFromHotKey(HotKey hotKey, bool isConsoleOnly)
```

### CreateFromHotKeyWithForcedName

```csharp
public static InputKeyItemVM CreateFromHotKeyWithForcedName(HotKey hotKey, TextObject forcedName, bool isConsoleOnly)
```

### CreateFromGameKeyWithForcedName

```csharp
public static InputKeyItemVM CreateFromGameKeyWithForcedName(GameKey gameKey, TextObject forcedName, bool isConsoleOnly)
```

### CreateFromForcedID

```csharp
public static InputKeyItemVM CreateFromForcedID(string forcedID, TextObject forcedName, bool isConsoleOnly)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)