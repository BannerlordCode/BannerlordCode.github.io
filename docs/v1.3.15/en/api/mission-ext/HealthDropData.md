<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `HealthDropData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# HealthDropData

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class HealthDropData`
**Area:** mission-ext

## Overview

`HealthDropData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `HealthDropData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Health` | `public int Health { get; set; }` |
| `MaxHealth` | `public int MaxHealth { get; set; }` |
| `HealthBar` | `public FillBarWidget HealthBar { get; set; }` |
| `HealthDropContainer` | `public Widget HealthDropContainer { get; set; }` |
| `HealthDropBrush` | `public Brush HealthDropBrush { get; set; }` |
| `ShowHealthBar` | `public bool ShowHealthBar { get; set; }` |

## Usage Example

```csharp
var value = new HealthDropData();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
