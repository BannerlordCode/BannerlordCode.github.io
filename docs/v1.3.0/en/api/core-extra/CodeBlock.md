<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CodeBlock`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CodeBlock

**Namespace:** TaleWorlds.Library.CodeGeneration
**Module:** TaleWorlds.Library
**Type:** `public class CodeBlock`
**Base:** none
**File:** `TaleWorlds.Library/CodeGeneration/CodeBlock.cs`

## Overview

`CodeBlock` lives in `TaleWorlds.Library.CodeGeneration` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library.CodeGeneration` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Lines` | `public List<string> Lines { get; }` |

## Key Methods

### AddLine
`public void AddLine(string line)`

**Purpose:** Adds `line` to the current collection or state.

### AddLines
`public void AddLines(IEnumerable<string> lines)`

**Purpose:** Adds `lines` to the current collection or state.

## Usage Example

```csharp
var value = new CodeBlock();
value.AddLine("example");
```

## See Also

- [Complete Class Catalog](../catalog)