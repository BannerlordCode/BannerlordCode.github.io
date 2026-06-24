<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Program`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Program

**Namespace:** TaleWorlds.Starter.Library
**Module:** TaleWorlds.Starter
**Type:** `public class Program`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.Starter.Library/TaleWorlds.Starter.Library/Program.cs`

## Overview

`Program` lives in `TaleWorlds.Starter.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Starter.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Main
`public static int Main(string args)`

**Purpose:** Handles logic related to `main`.

## Usage Example

```csharp
Program.Main("example");
```

## See Also

- [Complete Class Catalog](../catalog)