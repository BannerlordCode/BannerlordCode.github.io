---
title: "LoginResult"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LoginResult`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# LoginResult

**Namespace:** TaleWorlds.Diamond
**Module:** TaleWorlds.Diamond
**Type:** `public sealed class LoginResult : FunctionResult`
**Base:** `FunctionResult`
**File:** `Bannerlord.Source/bin/TaleWorlds.Diamond/TaleWorlds.Diamond/LoginResult.cs`

## Overview

`LoginResult` lives in `TaleWorlds.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PeerId` | `public PeerId PeerId { get; }` |
| `SessionKey` | `public SessionKey SessionKey { get; }` |
| `Successful` | `public bool Successful { get; }` |
| `ErrorCode` | `public string ErrorCode { get; }` |
| `ErrorParameters` | `public Dictionary<string, string> ErrorParameters { get; }` |
| `ProviderResponse` | `public string ProviderResponse { get; }` |
| `LoginResultObject` | `public LoginResultObject LoginResultObject { get; }` |

## Usage Example

```csharp
var example = new LoginResult();
```

## See Also

- [Complete Class Catalog](../catalog)