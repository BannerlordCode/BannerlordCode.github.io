---
title: "AgentController"
description: "Auto-generated class reference for AgentController."
---
# AgentController

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AgentController`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/AgentController.cs`

## Overview

The per-tournament scripted mind behind one arena participant. It is a 24-line class with no logic of its own: two settable back-references, `Owner` (`AgentController.cs:11`) and `Mission` (`AgentController.cs:16`), and one empty `virtual OnInitialize()` (`AgentController.cs:19`). Everything a tournament controller actually does lives in the subclasses — `JoustingAgentController` (`JoustingAgentController.cs:11`) and `ArcheryTournamentAgentController` (`ArcheryTournamentAgentController.cs:13`) — which keep their own state machine and read `this.Owner` and `this.Mission` from here.

## Mental Model

Treat it as a per-agent script handle, not as the script. The base class exists so the mission can hold many different controllers uniformly and ask any of them the same question, while each subclass owns its own state. Critically, the base never assigns `Owner` or `Mission` — both are plain `{ get; set; }` properties (`AgentController.cs:11`, `AgentController.cs:16`) and `OnInitialize` has an empty body (`AgentController.cs:20`), so wiring is somebody else's job. Read a controller back off the agent with `Agent.GetController<T>()` (`Agent.cs:2794`), which is how the tournament code finds one specific participant's controller again mid-match (`JoustingAgentController.cs:83`).

## How to use

**Getting one.** Construct it yourself and assign both properties; the engine provides no factory and no registration call. Attach it to the participating agent so `GetController<T>()` can find it.

**Typical use.**

```csharp
// JoustingAgentController.cs:83 is the read side: Agent.GetController<T> (Agent.cs:2794).
JoustingAgentController controller = agent.GetController<JoustingAgentController>();
if (controller != null)
{
    controller.State = JoustingAgentController.JoustingAgentState.GoToStartPosition;
}

// The write side is yours - nothing in AgentController.cs assigns Owner or Mission.
MyModTournamentController mine = new MyModTournamentController
{
    Owner = agent,        // AgentController.cs:11
    Mission = mission,    // AgentController.cs:16
};
mine.OnInitialize();      // AgentController.cs:19 - empty in the base, override it
```

**Watch out.** `Owner` and `Mission` are public settable properties and the base class sets neither (`AgentController.cs:6`-`AgentController.cs:21`) — a controller whose `Owner` was never assigned does not throw at construction. It just reads `null` later, deep inside tournament tick code, as a `NullReferenceException` far from the mistake. The empty `OnInitialize` (`AgentController.cs:19`) makes this easy to miss: it looks like the engine lifecycle hook that will wire things up, and nothing in it does.

## Key Properties

| Name | Signature |
|------|-----------|
| `Owner` | `public Agent Owner { get; set; }` |
| `Mission` | `public Mission Mission { get; set; }` |

## Key Methods

### OnInitialize
`public virtual void OnInitialize()`

**Purpose:** Invoked when the initialize event is raised.

```csharp
// Obtain an instance of AgentController from the subsystem API first
AgentController agentController = ...;
agentController.OnInitialize();
```

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<AgentController>();
```

## See Also

- [Area Index](../)
- [Agent](../../mission/Agent)
- [Mission](../../mission/Mission)