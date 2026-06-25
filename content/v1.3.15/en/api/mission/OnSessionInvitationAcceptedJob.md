---
title: "OnSessionInvitationAcceptedJob"
description: "Auto-generated class reference for OnSessionInvitationAcceptedJob."
---
# OnSessionInvitationAcceptedJob

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `internal class OnSessionInvitationAcceptedJob : Job`
**Base:** `Job`
**File:** `TaleWorlds.MountAndBlade/OnSessionInvitationAcceptedJob.cs`

## Overview

`OnSessionInvitationAcceptedJob` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### DoJob
`public override void DoJob(float dt)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of OnSessionInvitationAcceptedJob from the subsystem API first
OnSessionInvitationAcceptedJob onSessionInvitationAcceptedJob = ...;
onSessionInvitationAcceptedJob.DoJob(0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
OnSessionInvitationAcceptedJob onSessionInvitationAcceptedJob = ...;
onSessionInvitationAcceptedJob.DoJob(0);
```

## See Also

- [Area Index](../)