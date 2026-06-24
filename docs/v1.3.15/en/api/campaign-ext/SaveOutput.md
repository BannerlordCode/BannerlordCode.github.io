<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SaveOutput`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SaveOutput

**Namespace:** TaleWorlds.SaveSystem.Save
**Module:** TaleWorlds.SaveSystem
**Type:** `public class SaveOutput`
**Base:** none
**File:** `TaleWorlds.SaveSystem/Save/SaveOutput.cs`

## Overview

`SaveOutput` lives in `TaleWorlds.SaveSystem.Save` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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
var value = new SaveOutput();
value.PrintStatus();
```

## See Also

- [Complete Class Catalog](../catalog)