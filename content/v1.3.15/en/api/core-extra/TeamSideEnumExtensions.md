---
title: "TeamSideEnumExtensions"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TeamSideEnumExtensions`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TeamSideEnumExtensions

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public static class TeamSideEnumExtensions`
**Area:** core-extra

## Overview

`TeamSideEnumExtensions` lives in `TaleWorlds.Core`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsValid
`public static bool IsValid(this TeamSideEnum teamSide)`

**Purpose:** Handles logic related to `is valid`.

## Usage Example

```csharp
TeamSideEnumExtensions example = TeamSideEnumExtensions.Value;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)
