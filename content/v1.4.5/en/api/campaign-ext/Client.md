---
title: "Client"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Client`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Client

**Namespace:** TaleWorlds.Diamond
**Module:** TaleWorlds.Diamond
**Type:** `public abstract class Client<T> : DiamondClientApplicationObject, IClient where T : Client<T>`
**Base:** `DiamondClientApplicationObject`
**File:** `Bannerlord.Source/bin/TaleWorlds.Diamond/TaleWorlds.Diamond/Client.cs`

## Overview

`Client` lives in `TaleWorlds.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsInCriticalState` | `public bool IsInCriticalState { get; set; }` |
| `AccessProvider` | `public ILoginAccessProvider AccessProvider { get; set; }` |

## Key Methods

### Update
`public void Update()`

**Purpose:** Updates the state or data of `update`.

### HandleMessage
`public void HandleMessage(Message message)`

**Purpose:** Handles the `message` event or callback.

### OnConnected
`public virtual void OnConnected()`

**Purpose:** Called when the `connected` event is raised.

### OnCantConnect
`public virtual void OnCantConnect()`

**Purpose:** Called when the `cant connect` event is raised.

### OnDisconnected
`public virtual void OnDisconnected()`

**Purpose:** Called when the `disconnected` event is raised.

### CheckConnection
`public Task<bool> CheckConnection()`

**Purpose:** Handles logic related to `check connection`.

## Usage Example

```csharp
var implementation = new CustomClient();
```

## See Also

- [Complete Class Catalog](../catalog)