<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LobbyClientConnectResult`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LobbyClientConnectResult

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LobbyClientConnectResult`
**Area:** mission-ext

## Overview

`LobbyClientConnectResult` lives in `TaleWorlds.MountAndBlade.Diamond`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Connected` | `public bool Connected { get; }` |
| `Error` | `public TextObject Error { get; }` |

## Key Methods

### FromServerConnectResult
`public static LobbyClientConnectResult FromServerConnectResult(string errorCode, Dictionary<string, string> parameters)`

**Purpose:** Handles logic related to `from server connect result`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
LobbyClientConnectResult.FromServerConnectResult("example", dictionary<string, "example");
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
