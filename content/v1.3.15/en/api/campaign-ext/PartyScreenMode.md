---
title: "PartyScreenMode"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartyScreenMode`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyScreenMode

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public enum PartyScreenMode`
**Area:** campaign-ext

## Overview

`PartyScreenMode` lives in `Helpers`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `Helpers` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `Normal` |
| `Shared` |
| `Loot` |
| `Ransom` |
| `PrisonerManage` |
| `TroopsManage` |

## Usage Example

```csharp
PartyScreenMode example = PartyScreenMode.Normal;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
