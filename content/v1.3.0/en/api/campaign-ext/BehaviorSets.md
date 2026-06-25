---
title: "BehaviorSets"
description: "Auto-generated class reference for BehaviorSets."
---
# BehaviorSets

**Namespace:** SandBox.Missions.AgentBehaviors
**Module:** SandBox.Missions
**Type:** `public class BehaviorSets`
**Base:** none
**File:** `SandBox/Missions/AgentBehaviors/BehaviorSets.cs`

## Overview

`BehaviorSets` lives in `SandBox.Missions.AgentBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Missions.AgentBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### AddQuestCharacterBehaviors
`public static void AddQuestCharacterBehaviors(IAgent agent)`

**Purpose:** Adds quest character behaviors to the current collection or state.

```csharp
// Static call; no instance required
BehaviorSets.AddQuestCharacterBehaviors(agent);
```

### AddWandererBehaviors
`public static void AddWandererBehaviors(IAgent agent)`

**Purpose:** Adds wanderer behaviors to the current collection or state.

```csharp
// Static call; no instance required
BehaviorSets.AddWandererBehaviors(agent);
```

### AddOutdoorWandererBehaviors
`public static void AddOutdoorWandererBehaviors(IAgent agent)`

**Purpose:** Adds outdoor wanderer behaviors to the current collection or state.

```csharp
// Static call; no instance required
BehaviorSets.AddOutdoorWandererBehaviors(agent);
```

### AddIndoorWandererBehaviors
`public static void AddIndoorWandererBehaviors(IAgent agent)`

**Purpose:** Adds indoor wanderer behaviors to the current collection or state.

```csharp
// Static call; no instance required
BehaviorSets.AddIndoorWandererBehaviors(agent);
```

### AddFixedCharacterBehaviors
`public static void AddFixedCharacterBehaviors(IAgent agent)`

**Purpose:** Adds fixed character behaviors to the current collection or state.

```csharp
// Static call; no instance required
BehaviorSets.AddFixedCharacterBehaviors(agent);
```

### AddPatrollingThugBehaviors
`public static void AddPatrollingThugBehaviors(IAgent agent)`

**Purpose:** Adds patrolling thug behaviors to the current collection or state.

```csharp
// Static call; no instance required
BehaviorSets.AddPatrollingThugBehaviors(agent);
```

### AddStandGuardBehaviors
`public static void AddStandGuardBehaviors(IAgent agent)`

**Purpose:** Adds stand guard behaviors to the current collection or state.

```csharp
// Static call; no instance required
BehaviorSets.AddStandGuardBehaviors(agent);
```

### AddFixedGuardBehaviors
`public static void AddFixedGuardBehaviors(IAgent agent)`

**Purpose:** Adds fixed guard behaviors to the current collection or state.

```csharp
// Static call; no instance required
BehaviorSets.AddFixedGuardBehaviors(agent);
```

### StealthAgentBehaviors
`public static void StealthAgentBehaviors(IAgent agent)`

**Purpose:** Executes the StealthAgentBehaviors logic.

```csharp
// Static call; no instance required
BehaviorSets.StealthAgentBehaviors(agent);
```

### AddPatrollingGuardBehaviors
`public static void AddPatrollingGuardBehaviors(IAgent agent)`

**Purpose:** Adds patrolling guard behaviors to the current collection or state.

```csharp
// Static call; no instance required
BehaviorSets.AddPatrollingGuardBehaviors(agent);
```

### AddCompanionBehaviors
`public static void AddCompanionBehaviors(IAgent agent)`

**Purpose:** Adds companion behaviors to the current collection or state.

```csharp
// Static call; no instance required
BehaviorSets.AddCompanionBehaviors(agent);
```

### AddBodyguardBehaviors
`public static void AddBodyguardBehaviors(IAgent agent)`

**Purpose:** Adds bodyguard behaviors to the current collection or state.

```csharp
// Static call; no instance required
BehaviorSets.AddBodyguardBehaviors(agent);
```

### AddFirstCompanionBehavior
`public static void AddFirstCompanionBehavior(IAgent agent)`

**Purpose:** Adds first companion behavior to the current collection or state.

```csharp
// Static call; no instance required
BehaviorSets.AddFirstCompanionBehavior(agent);
```

## Usage Example

```csharp
BehaviorSets.AddQuestCharacterBehaviors(agent);
```

## See Also

- [Area Index](../)