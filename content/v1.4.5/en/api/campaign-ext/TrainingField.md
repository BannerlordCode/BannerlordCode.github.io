---
title: "TrainingField"
description: "Auto-generated class reference for TrainingField."
---
# TrainingField

**Namespace:** StoryMode
**Module:** StoryMode
**Type:** `public class TrainingField : SettlementComponent`
**Base:** `SettlementComponent`
**File:** `Modules.StoryMode/StoryMode/StoryMode/TrainingField.cs`

## Overview

`TrainingField` lives in `StoryMode` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**Purpose:** Restores the current object from serialized data.

```csharp
// Obtain an instance of TrainingField from the subsystem API first
TrainingField trainingField = ...;
trainingField.Deserialize(objectManager, node);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TrainingField trainingField = ...;
trainingField.Deserialize(objectManager, node);
```

## See Also

- [Area Index](../)