<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BadgeCondition`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BadgeCondition

**Namespace:** TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BadgeCondition`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges/BadgeCondition.cs`

## Overview

`BadgeCondition` lives in `TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Type` | `public ConditionType Type { get; }` |
| `GroupType` | `public ConditionGroupType GroupType { get; }` |
| `Description` | `public TextObject Description { get; }` |
| `StringId` | `public string StringId { get; }` |
| `Parameters` | `public IReadOnlyDictionary<string, string> Parameters { get; }` |

## Key Methods

### Check
`public bool Check(string value)`

**Purpose:** Handles logic related to `check`.

### Check
`public bool Check(int value)`

**Purpose:** Handles logic related to `check`.

## Usage Example

```csharp
var value = new BadgeCondition();
value.Check("example");
```

## See Also

- [Complete Class Catalog](../catalog)