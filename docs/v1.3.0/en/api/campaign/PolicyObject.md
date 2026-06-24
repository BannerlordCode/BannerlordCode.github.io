<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PolicyObject`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PolicyObject

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class PolicyObject : PropertyObject`
**Base:** `PropertyObject`
**File:** `TaleWorlds.CampaignSystem/PolicyObject.cs`

## Overview

`PolicyObject` lives in `TaleWorlds.CampaignSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `All` | `public static MBReadOnlyList<PolicyObject> All { get; }` |
| `SecondaryEffects` | `public TextObject SecondaryEffects { get; }` |
| `AuthoritarianWeight` | `public float AuthoritarianWeight { get; }` |
| `OligarchicWeight` | `public float OligarchicWeight { get; }` |
| `EgalitarianWeight` | `public float EgalitarianWeight { get; }` |
| `LogEntryDescription` | `public TextObject LogEntryDescription { get; }` |

## Key Methods

### Initialize
`public void Initialize(TextObject name, TextObject description, TextObject logEntryDescription, TextObject secondaryEffects, float authoritarianWeight, float oligarchyWeight, float egalitarianWeight)`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

## Usage Example

```csharp
var value = new PolicyObject();
value.Initialize(name, description, logEntryDescription, secondaryEffects, 0, 0, 0);
```

## See Also

- [Complete Class Catalog](../catalog)