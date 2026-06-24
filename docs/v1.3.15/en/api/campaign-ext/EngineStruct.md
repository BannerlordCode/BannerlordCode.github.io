<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EngineStruct`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EngineStruct

**Namespace:** TaleWorlds.DotNet
**Module:** TaleWorlds.DotNet
**Type:** `public class EngineStruct : Attribute`
**Base:** `Attribute`
**File:** `TaleWorlds.DotNet/EngineStruct.cs`

## Overview

`EngineStruct` lives in `TaleWorlds.DotNet` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.DotNet` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `EngineType` | `public string EngineType { get; set; }` |
| `AlternateDotNetType` | `public string AlternateDotNetType { get; set; }` |
| `EngineEnumPrefix` | `public string EngineEnumPrefix { get; set; }` |
| `IgnoreMemberOffsetTest` | `public bool IgnoreMemberOffsetTest { get; set; }` |
| `Conditionals` | `public string Conditionals { get; set; }` |
| `FirstCharacterUppercase` | `public bool FirstCharacterUppercase { get; set; }` |

## Usage Example

```csharp
var value = new EngineStruct();
```

## See Also

- [Complete Class Catalog](../catalog)