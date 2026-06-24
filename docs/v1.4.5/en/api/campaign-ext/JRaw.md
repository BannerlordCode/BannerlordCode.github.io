<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `JRaw`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# JRaw

**Namespace:** Newtonsoft.Json.Linq
**Module:** Newtonsoft.Json
**Type:** `public class JRaw : JValue`
**Base:** `JValue`
**File:** `Bannerlord.Source/bin/Newtonsoft.Json/Newtonsoft.Json.Linq/JRaw.cs`

## Overview

`JRaw` lives in `Newtonsoft.Json.Linq` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Newtonsoft.Json.Linq` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CreateAsync
`public static async Task<JRaw> CreateAsync(JsonReader reader, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Creates a new `async` instance or object.

### Create
`public static JRaw Create(JsonReader reader)`

**Purpose:** Creates a new `create` instance or object.

## Usage Example

```csharp
JRaw.CreateAsync(reader, default(CancellationToken));
```

## See Also

- [Complete Class Catalog](../catalog)