---
title: "EncryptedAppTicketListener"
description: "Auto-generated class reference for EncryptedAppTicketListener."
---
# EncryptedAppTicketListener

**Namespace:** TaleWorlds.Diamond.AccessProvider.GOG
**Module:** TaleWorlds.Diamond
**Type:** `internal class EncryptedAppTicketListener : IEncryptedAppTicketListener`
**Base:** `IEncryptedAppTicketListener`
**File:** `bin/TaleWorlds.Diamond.AccessProvider.GOG/TaleWorlds.Diamond.AccessProvider.GOG/EncryptedAppTicketListener.cs`

## Overview

`EncryptedAppTicketListener` lives in `TaleWorlds.Diamond.AccessProvider.GOG` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Diamond.AccessProvider.GOG` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `GotResult` | `public bool GotResult { get; }` |

## Key Methods

### OnEncryptedAppTicketRetrieveFailure
`public override void OnEncryptedAppTicketRetrieveFailure(FailureReason failureReason)`

**Purpose:** Invoked when the encrypted app ticket retrieve failure event is raised.

```csharp
// Obtain an instance of EncryptedAppTicketListener from the subsystem API first
EncryptedAppTicketListener encryptedAppTicketListener = ...;
encryptedAppTicketListener.OnEncryptedAppTicketRetrieveFailure(failureReason);
```

### OnEncryptedAppTicketRetrieveSuccess
`public override void OnEncryptedAppTicketRetrieveSuccess()`

**Purpose:** Invoked when the encrypted app ticket retrieve success event is raised.

```csharp
// Obtain an instance of EncryptedAppTicketListener from the subsystem API first
EncryptedAppTicketListener encryptedAppTicketListener = ...;
encryptedAppTicketListener.OnEncryptedAppTicketRetrieveSuccess();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
EncryptedAppTicketListener encryptedAppTicketListener = ...;
encryptedAppTicketListener.OnEncryptedAppTicketRetrieveFailure(failureReason);
```

## See Also

- [Area Index](../)