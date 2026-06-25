---
title: "LoadData"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LoadData`
- [← Area / Back to save-system](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LoadData

**Namespace:** TaleWorlds.SaveSystem
**Module:** TaleWorlds.SaveSystem
**Type:** `public class LoadData`
**Area:** save-system

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
- [Area catalog](../catalog-save)
