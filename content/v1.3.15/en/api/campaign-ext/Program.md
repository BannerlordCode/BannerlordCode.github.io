---
title: "Program"
description: "Auto-generated class reference for Program."
---
# Program

**Namespace:** TaleWorlds.MountAndBlade.SteamWorkshop
**Module:** TaleWorlds.MountAndBlade
**Type:** `internal class Program`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.SteamWorkshop/Program.cs`

## Overview

`Program` lives in `TaleWorlds.MountAndBlade.SteamWorkshop` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.SteamWorkshop` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `BannerlordSteamAppIdAsString` | `public static string BannerlordSteamAppIdAsString { get; set; }` |
| `ItemId` | `public static PublishedFileId_t ItemId { get; set; }` |

## Key Methods

### ExitProgram
`public static void ExitProgram(int exitCode)`

**Purpose:** **Purpose:** Executes the ExitProgram logic.

```csharp
// Static call; no instance required
Program.ExitProgram(0);
```

### Log
`public static void Log(string log)`

**Purpose:** **Purpose:** Executes the Log logic.

```csharp
// Static call; no instance required
Program.Log("example");
```

## Usage Example

```csharp
Program.ExitProgram(0);
```

## See Also

- [Area Index](../)