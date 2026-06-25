---
title: "WidgetAttributeTemplate"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WidgetAttributeTemplate`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# WidgetAttributeTemplate

**Namespace:** TaleWorlds.GauntletUI.PrefabSystem
**Module:** TaleWorlds.GauntletUI
**Type:** `public class WidgetAttributeTemplate`
**Base:** none
**File:** `TaleWorlds.GauntletUI.PrefabSystem/WidgetAttributeTemplate.cs`

## Overview

`WidgetAttributeTemplate` lives in `TaleWorlds.GauntletUI.PrefabSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.PrefabSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `KeyType` | `public WidgetAttributeKeyType KeyType { get; set; }` |
| `ValueType` | `public WidgetAttributeValueType ValueType { get; set; }` |
| `Key` | `public string Key { get; set; }` |
| `Value` | `public string Value { get; set; }` |

## Usage Example

```csharp
var example = new WidgetAttributeTemplate();
```

## See Also

- [Complete Class Catalog](../catalog)