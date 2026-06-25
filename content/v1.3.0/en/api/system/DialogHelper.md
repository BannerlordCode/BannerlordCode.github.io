---
title: "DialogHelper"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DialogHelper`
- [← Area / Back to system](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DialogHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class DialogHelper`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Helpers/DialogHelper.cs`

## Overview

`DialogHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `DialogHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### SetDialogString
`public static void SetDialogString(string stringVariable, string gameTextId)`

**Purpose:** Sets the value or state of `dialog string`.

## Usage Example

```csharp
DialogHelper.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)