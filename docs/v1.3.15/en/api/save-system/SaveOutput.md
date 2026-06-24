<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SaveOutput`
- [← Area / Back to save-system](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SaveOutput

**Namespace:** TaleWorlds.SaveSystem.Save
**Module:** TaleWorlds.SaveSystem
**Type:** `public class SaveOutput`
**Area:** save-system

## Overview

`SaveOutput` lives in `TaleWorlds.SaveSystem.Save`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.SaveSystem.Save` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Data` | `public GameData Data { get; }` |
| `Result` | `public SaveResult Result { get; }` |
| `Errors` | `public SaveError Errors { get; }` |
| `Successful` | `public bool Successful { get; }` |
| `IsContinuing` | `public bool IsContinuing { get; }` |

## Key Methods

### PrintStatus
`public void PrintStatus()`

**Purpose:** Handles logic related to `print status`.

## Usage Example

```csharp
// First obtain a SaveOutput instance from game state, then call one of its public methods
var value = new SaveOutput();
value.PrintStatus();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-save)
