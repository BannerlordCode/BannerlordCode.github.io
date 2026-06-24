<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SubModuleInfo`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SubModuleInfo

**Namespace:** TaleWorlds.ModuleManager
**Module:** TaleWorlds.ModuleManager
**Type:** `public class SubModuleInfo`
**Base:** none
**File:** `TaleWorlds.ModuleManager/SubModuleInfo.cs`

## Overview

`SubModuleInfo` lives in `TaleWorlds.ModuleManager` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.ModuleManager` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; }` |
| `DLLName` | `public string DLLName { get; }` |
| `DLLPath` | `public string DLLPath { get; }` |
| `IsTWCertifiedDLL` | `public bool IsTWCertifiedDLL { get; }` |
| `DLLExists` | `public bool DLLExists { get; }` |
| `Assemblies` | `public List<string> Assemblies { get; }` |
| `SubModuleClassTypeName` | `public string SubModuleClassTypeName { get; }` |

## Key Methods

### LoadFrom
`public void LoadFrom(XmlNode subModuleNode, string path, bool isOfficial)`

**Purpose:** Loads `from` data.

## Usage Example

```csharp
var value = new SubModuleInfo();
value.LoadFrom(subModuleNode, "example", false);
```

## See Also

- [Complete Class Catalog](../catalog)