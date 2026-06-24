<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SandBoxViewCheats`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SandBoxViewCheats

**Namespace:** SandBox.View
**Module:** SandBox.View
**Type:** `public static class SandBoxViewCheats`
**Area:** campaign-ext

## Overview

`SandBoxViewCheats` lives in `SandBox.View`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `SandBox.View` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### KillHero
`public static string KillHero(List<string> strings)`

**Purpose:** Handles logic related to `kill hero`.

### FocusTournament
`public static string FocusTournament(List<string> strings)`

**Purpose:** Handles logic related to `focus tournament`.

### MakeClanMercenaryOfKingdom
`public static string MakeClanMercenaryOfKingdom(List<string> strings)`

**Purpose:** Handles logic related to `make clan mercenary of kingdom`.

### FocusHostileArmy
`public static string FocusHostileArmy(List<string> strings)`

**Purpose:** Handles logic related to `focus hostile army`.

### FocusMobileParty
`public static string FocusMobileParty(List<string> strings)`

**Purpose:** Handles logic related to `focus mobile party`.

### FocusHero
`public static string FocusHero(List<string> strings)`

**Purpose:** Handles logic related to `focus hero`.

### FocusInfestedHideout
`public static string FocusInfestedHideout(List<string> strings)`

**Purpose:** Handles logic related to `focus infested hideout`.

### FocusIssues
`public static string FocusIssues(List<string> strings)`

**Purpose:** Handles logic related to `focus issues`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
SandBoxViewCheats.KillHero(strings);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
