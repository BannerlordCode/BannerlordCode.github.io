<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefineAsEngineStruct`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefineAsEngineStruct

**Namespace:** TaleWorlds.DotNet
**Module:** TaleWorlds.DotNet
**Type:** `public class DefineAsEngineStruct : Attribute`
**Base:** `Attribute`
**File:** `Bannerlord.Source/bin/TaleWorlds.DotNet/TaleWorlds.DotNet/DefineAsEngineStruct.cs`

## Overview

`DefineAsEngineStruct` lives in `TaleWorlds.DotNet` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.DotNet` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Type` | `public Type Type { get; set; }` |
| `EngineType` | `public string EngineType { get; set; }` |
| `IgnoreMemberOffsetTest` | `public bool IgnoreMemberOffsetTest { get; set; }` |
| `EngineEnumPrefix` | `public string EngineEnumPrefix { get; set; }` |
| `Conditionals` | `public string Conditionals { get; set; }` |

## Usage Example

```csharp
var example = new DefineAsEngineStruct();
```

## See Also

- [Complete Class Catalog](../catalog)