<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `InquiryElementVM`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# InquiryElementVM

**Namespace:** TaleWorlds.Core.ViewModelCollection.Information
**Module:** TaleWorlds.Core
**Type:** `public class InquiryElementVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.Core.ViewModelCollection/Information/InquiryElementVM.cs`

## Overview

`InquiryElementVM` lives in `TaleWorlds.Core.ViewModelCollection.Information` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core.ViewModelCollection.Information` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsFilteredOut` | `public bool IsFilteredOut { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `HasVisuals` | `public bool HasVisuals { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `Text` | `public string Text { get; set; }` |
| `ImageIdentifier` | `public ImageIdentifierVM ImageIdentifier { get; set; }` |
| `Hint` | `public HintViewModel Hint { get; set; }` |

## Usage Example

```csharp
var value = new InquiryElementVM();
```

## See Also

- [Complete Class Catalog](../catalog)