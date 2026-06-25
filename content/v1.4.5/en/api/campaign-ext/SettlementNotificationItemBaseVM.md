---
title: "SettlementNotificationItemBaseVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SettlementNotificationItemBaseVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SettlementNotificationItemBaseVM

**Namespace:** SandBox.ViewModelCollection.Nameplate.NameplateNotifications
**Module:** SandBox.ViewModelCollection
**Type:** `public class SettlementNotificationItemBaseVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Nameplate.NameplateNotifications/SettlementNotificationItemBaseVM.cs`

## Overview

`SettlementNotificationItemBaseVM` lives in `SandBox.ViewModelCollection.Nameplate.NameplateNotifications` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.Nameplate.NameplateNotifications` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CreatedTick` | `public int CreatedTick { get; set; }` |
| `CharacterName` | `public string CharacterName { get; set; }` |
| `RelationType` | `public int RelationType { get; set; }` |
| `Text` | `public string Text { get; set; }` |
| `CharacterVisual` | `public CharacterImageIdentifierVM CharacterVisual { get; set; }` |

## Key Methods

### ExecuteRemove
`public void ExecuteRemove()`

**Purpose:** Executes the `remove` operation or workflow.

## Usage Example

```csharp
var value = new SettlementNotificationItemBaseVM();
value.ExecuteRemove();
```

## See Also

- [Complete Class Catalog](../catalog)