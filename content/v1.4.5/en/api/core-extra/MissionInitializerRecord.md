---
title: "MissionInitializerRecord"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionInitializerRecord`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionInitializerRecord

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public struct MissionInitializerRecord`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/MissionInitializerRecord.cs`

## Overview

`MissionInitializerRecord` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### MissionInitializerRecord
`public struct MissionInitializerRecord(string name)`

**Purpose:** Handles logic related to `mission initializer record`.

## Usage Example

```csharp
var value = new MissionInitializerRecord();
value.MissionInitializerRecord("example");
```

## See Also

- [Complete Class Catalog](../catalog)