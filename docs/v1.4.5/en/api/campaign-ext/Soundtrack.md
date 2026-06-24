<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Soundtrack`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Soundtrack

**Namespace:** psai.net
**Module:** psai.net
**Type:** `public class Soundtrack`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.PSAI/psai.net/Soundtrack.cs`

## Overview

`Soundtrack` lives in `psai.net` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `psai.net` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Clear
`public void Clear()`

**Purpose:** Handles logic related to `clear`.

### getThemeById
`public Theme getThemeById(int id)`

**Purpose:** Handles logic related to `get theme by id`.

### GetSegmentById
`public Segment GetSegmentById(int id)`

**Purpose:** Gets the current value of `segment by id`.

### getSoundtrackInfo
`public SoundtrackInfo getSoundtrackInfo()`

**Purpose:** Handles logic related to `get soundtrack info`.

### getThemeInfo
`public ThemeInfo getThemeInfo(int themeId)`

**Purpose:** Handles logic related to `get theme info`.

### getSegmentInfo
`public SegmentInfo getSegmentInfo(int snippetId)`

**Purpose:** Handles logic related to `get segment info`.

### UpdateMaxPreBeatMsOfCompatibleMiddleOrBridgeSnippets
`public void UpdateMaxPreBeatMsOfCompatibleMiddleOrBridgeSnippets()`

**Purpose:** Updates the state or data of `max pre beat ms of compatible middle or bridge snippets`.

### BuildAllIndirectionSequences
`public void BuildAllIndirectionSequences()`

**Purpose:** Handles logic related to `build all indirection sequences`.

## Usage Example

```csharp
var value = new Soundtrack();
value.Clear();
```

## See Also

- [Complete Class Catalog](../catalog)