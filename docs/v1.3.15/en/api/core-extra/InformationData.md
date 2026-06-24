<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `InformationData`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# InformationData

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public abstract class InformationData`
**Base:** none
**File:** `TaleWorlds.Core/InformationData.cs`

## Overview

`InformationData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `InformationData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `TitleText` | `public abstract TextObject TitleText { get; }` |
| `SoundEventPath` | `public abstract string SoundEventPath { get; }` |

## Key Methods

### IsValid
`public virtual bool IsValid()`

**Purpose:** Handles logic related to `is valid`.

## Usage Example

```csharp
var implementation = new CustomInformationData();
```

## See Also

- [Complete Class Catalog](../catalog)