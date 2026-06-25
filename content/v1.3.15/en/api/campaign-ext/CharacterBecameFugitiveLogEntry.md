---
title: "CharacterBecameFugitiveLogEntry"
description: "Auto-generated class reference for CharacterBecameFugitiveLogEntry."
---
# CharacterBecameFugitiveLogEntry

**Namespace:** TaleWorlds.CampaignSystem.LogEntries
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CharacterBecameFugitiveLogEntry : LogEntry, IEncyclopediaLog`
**Base:** `LogEntry`
**File:** `TaleWorlds.CampaignSystem/LogEntries/CharacterBecameFugitiveLogEntry.cs`

## Overview

`CharacterBecameFugitiveLogEntry` lives in `TaleWorlds.CampaignSystem.LogEntries` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.LogEntries` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### ToString
`public override string ToString()`

**Purpose:** Returns a human-readable string representation of the current object.

```csharp
// Obtain an instance of CharacterBecameFugitiveLogEntry from the subsystem API first
CharacterBecameFugitiveLogEntry characterBecameFugitiveLogEntry = ...;
var result = characterBecameFugitiveLogEntry.ToString();
```

### GetEncyclopediaText
`public TextObject GetEncyclopediaText()`

**Purpose:** Reads and returns the `encyclopedia text` value held by the current object.

```csharp
// Obtain an instance of CharacterBecameFugitiveLogEntry from the subsystem API first
CharacterBecameFugitiveLogEntry characterBecameFugitiveLogEntry = ...;
var result = characterBecameFugitiveLogEntry.GetEncyclopediaText();
```

### IsValid
`public override bool IsValid()`

**Purpose:** Determines whether the current object is in the `valid` state or condition.

```csharp
// Obtain an instance of CharacterBecameFugitiveLogEntry from the subsystem API first
CharacterBecameFugitiveLogEntry characterBecameFugitiveLogEntry = ...;
var result = characterBecameFugitiveLogEntry.IsValid();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CharacterBecameFugitiveLogEntry characterBecameFugitiveLogEntry = ...;
characterBecameFugitiveLogEntry.ToString();
```

## See Also

- [Area Index](../)