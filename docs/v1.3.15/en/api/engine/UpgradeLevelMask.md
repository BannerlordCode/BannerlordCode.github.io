<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `UpgradeLevelMask`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# UpgradeLevelMask

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public enum UpgradeLevelMask`
**Area:** engine

## Overview

`UpgradeLevelMask` lives in `TaleWorlds.Engine`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `None` |
| `0` |
| `Level0` |
| `1` |
| `Level1` |
| `2` |
| `Level2` |
| `4` |
| `Level3` |
| `8` |
| `LevelAll` |

## Usage Example

```csharp
UpgradeLevelMask example = UpgradeLevelMask.None;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-engine)
