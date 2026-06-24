<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RestData`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# RestData

**Namespace:** TaleWorlds.Diamond.Rest
**Module:** TaleWorlds.Diamond
**Type:** `public abstract class RestData`
**Base:** none
**File:** `TaleWorlds.Diamond/Rest/RestData.cs`

## Overview

`RestData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `RestData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `TypeName` | `public string TypeName { get; set; }` |

## Key Methods

### SerializeAsJson
`public string SerializeAsJson()`

**Purpose:** Handles logic related to `serialize as json`.

## Usage Example

```csharp
var implementation = new CustomRestData();
```

## See Also

- [Complete Class Catalog](../catalog)