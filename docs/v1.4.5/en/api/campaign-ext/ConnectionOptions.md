<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ConnectionOptions`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ConnectionOptions

**Namespace:** System.Management
**Module:** System.Management
**Type:** `public class ConnectionOptions : ManagementOptions`
**Base:** `ManagementOptions`
**File:** `Bannerlord.Source/bin/System.Management/System.Management/ConnectionOptions.cs`

## Overview

`ConnectionOptions` lives in `System.Management` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `System.Management` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Authentication` | `public AuthenticationLevel Authentication { get; set; }` |
| `Authority` | `public string Authority { get; set; }` |
| `EnablePrivileges` | `public bool EnablePrivileges { get; set; }` |
| `Impersonation` | `public ImpersonationLevel Impersonation { get; set; }` |
| `Locale` | `public string Locale { get; set; }` |
| `Password` | `public string Password { get; set; }` |
| `SecurePassword` | `public SecureString SecurePassword { get; set; }` |
| `Username` | `public string Username { get; set; }` |

## Key Methods

### Clone
`public override object Clone()`

**Purpose:** Handles logic related to `clone`.

## Usage Example

```csharp
var value = new ConnectionOptions();
value.Clone();
```

## See Also

- [Complete Class Catalog](../catalog)