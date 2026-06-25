---
title: "CrashInformationCollector"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CrashInformationCollector`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CrashInformationCollector

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public static class CrashInformationCollector`
**Base:** none
**File:** `TaleWorlds.Engine/CrashInformationCollector.cs`

## Overview

`CrashInformationCollector` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CollectInformation
`public static string CollectInformation()`

**Purpose:** Handles logic related to `collect information`.

## Usage Example

```csharp
CrashInformationCollector.CollectInformation();
```

## See Also

- [Complete Class Catalog](../catalog)