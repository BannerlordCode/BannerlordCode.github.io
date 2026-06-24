<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LoadData`
- [← Area / Back to save-system](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# LoadData

**Namespace:** TaleWorlds.SaveSystem
**Module:** TaleWorlds.SaveSystem
**Type:** `public class LoadData`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem/LoadData.cs`

## Overview

`LoadData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `LoadData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `MetaData` | `public MetaData MetaData { get; }` |
| `GameData` | `public GameData GameData { get; }` |

## Usage Example

```csharp
var value = new LoadData();
```

## See Also

- [Complete Class Catalog](../catalog)