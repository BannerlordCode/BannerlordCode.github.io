---
title: "Soundtrack"
description: "Auto-generated class reference for Soundtrack."
---
# Soundtrack

**Namespace:** psai.net
**Module:** psai.net
**Type:** `public class Soundtrack`
**Base:** none
**File:** `TaleWorlds.PSAI/net/Soundtrack.cs`

## Overview

`Soundtrack` lives in `psai.net` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `psai.net` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Clear
`public void Clear()`

**Purpose:** Removes all content from the this instance.

```csharp
// Obtain an instance of Soundtrack from the subsystem API first
Soundtrack soundtrack = ...;
soundtrack.Clear();
```

### getThemeById
`public Theme getThemeById(int id)`

**Purpose:** Executes the getThemeById logic.

```csharp
// Obtain an instance of Soundtrack from the subsystem API first
Soundtrack soundtrack = ...;
var result = soundtrack.getThemeById(0);
```

### GetSegmentById
`public Segment GetSegmentById(int id)`

**Purpose:** Reads and returns the segment by id value held by the this instance.

```csharp
// Obtain an instance of Soundtrack from the subsystem API first
Soundtrack soundtrack = ...;
var result = soundtrack.GetSegmentById(0);
```

### getSoundtrackInfo
`public SoundtrackInfo getSoundtrackInfo()`

**Purpose:** Executes the getSoundtrackInfo logic.

```csharp
// Obtain an instance of Soundtrack from the subsystem API first
Soundtrack soundtrack = ...;
var result = soundtrack.getSoundtrackInfo();
```

### getThemeInfo
`public ThemeInfo getThemeInfo(int themeId)`

**Purpose:** Executes the getThemeInfo logic.

```csharp
// Obtain an instance of Soundtrack from the subsystem API first
Soundtrack soundtrack = ...;
var result = soundtrack.getThemeInfo(0);
```

### getSegmentInfo
`public SegmentInfo getSegmentInfo(int snippetId)`

**Purpose:** Executes the getSegmentInfo logic.

```csharp
// Obtain an instance of Soundtrack from the subsystem API first
Soundtrack soundtrack = ...;
var result = soundtrack.getSegmentInfo(0);
```

### UpdateMaxPreBeatMsOfCompatibleMiddleOrBridgeSnippets
`public void UpdateMaxPreBeatMsOfCompatibleMiddleOrBridgeSnippets()`

**Purpose:** Recalculates and stores the latest representation of max pre beat ms of compatible middle or bridge snippets.

```csharp
// Obtain an instance of Soundtrack from the subsystem API first
Soundtrack soundtrack = ...;
soundtrack.UpdateMaxPreBeatMsOfCompatibleMiddleOrBridgeSnippets();
```

### BuildAllIndirectionSequences
`public void BuildAllIndirectionSequences()`

**Purpose:** Assembles and returns the built result for all indirection sequences.

```csharp
// Obtain an instance of Soundtrack from the subsystem API first
Soundtrack soundtrack = ...;
soundtrack.BuildAllIndirectionSequences();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
Soundtrack soundtrack = ...;
soundtrack.Clear();
```

## See Also

- [Area Index](../)