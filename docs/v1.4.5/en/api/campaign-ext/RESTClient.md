<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RESTClient`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# RESTClient

**Namespace:** TaleWorlds.Network
**Module:** TaleWorlds.Network
**Type:** `public class RESTClient`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.Network/TaleWorlds.Network/RESTClient.cs`

## Overview

`RESTClient` lives in `TaleWorlds.Network` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Network` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Get
`public async Task Get(string service, List<KeyValuePair<string, string>> headers)`

**Purpose:** Gets the current value of `get`.

### Post
`public async Task Post(string service, List<KeyValuePair<string, string>> headers, string payLoad, string contentType = "application/json")`

**Purpose:** Handles logic related to `post`.

## Usage Example

```csharp
var value = new RESTClient();
value.Get("example", list<KeyValuePair<string, "example");
```

## See Also

- [Complete Class Catalog](../catalog)