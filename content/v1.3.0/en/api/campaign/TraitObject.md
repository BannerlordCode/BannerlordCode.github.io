---
title: "TraitObject"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TraitObject`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TraitObject

**Namespace:** TaleWorlds.CampaignSystem.CharacterDevelopment
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class TraitObject : PropertyObject`
**Base:** `PropertyObject`
**File:** `TaleWorlds.CampaignSystem/CharacterDevelopment/TraitObject.cs`

## Overview

`TraitObject` lives in `TaleWorlds.CampaignSystem.CharacterDevelopment` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CharacterDevelopment` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `All` | `public static MBReadOnlyList<TraitObject> All { get; }` |
| `MinValue` | `public int MinValue { get; }` |
| `MaxValue` | `public int MaxValue { get; }` |
| `IsHidden` | `public bool IsHidden { get; }` |

## Key Methods

### Initialize
`public void Initialize(TextObject name, TextObject description, bool isHidden, int minValue, int maxValue)`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

## Usage Example

```csharp
var value = new TraitObject();
value.Initialize(name, description, false, 0, 0);
```

## See Also

- [Complete Class Catalog](../catalog)