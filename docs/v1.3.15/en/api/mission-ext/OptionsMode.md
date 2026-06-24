<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OptionsMode`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# OptionsMode

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public enum OptionsMode`
**Area:** mission-ext

## Overview

`OptionsMode` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `MainMenu` |
| `Singleplayer` |

## Usage Example

```csharp
OptionsMode example = OptionsMode.MainMenu;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
