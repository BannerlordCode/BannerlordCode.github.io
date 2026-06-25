---
title: "SavedGameProperty"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SavedGameProperty`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SavedGameProperty

**Namespace:** SandBox.ViewModelCollection.SaveLoad
**Module:** SandBox.ViewModelCollection
**Type:** `public class SavedGameProperty`
**Area:** campaign-ext

## Overview

`SavedGameProperty` lives in `SandBox.ViewModelCollection.SaveLoad`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.SaveLoad` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `None` |
| `1` |
| `Health` |
| `Gold` |
| `Influence` |
| `PartySize` |
| `Food` |

## Usage Example

```csharp
var value = new SavedGameProperty();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
