---
title: "WidgetTemplate"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WidgetTemplate`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# WidgetTemplate

**Namespace:** TaleWorlds.GauntletUI.PrefabSystem
**Module:** TaleWorlds.GauntletUI
**Type:** `public class WidgetTemplate`
**Base:** none
**File:** `TaleWorlds.GauntletUI.PrefabSystem/WidgetTemplate.cs`

## Overview

`WidgetTemplate` lives in `TaleWorlds.GauntletUI.PrefabSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.PrefabSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `LogicalChildrenLocation` | `public bool LogicalChildrenLocation { get; }` |
| `Id` | `public string Id { get; }` |
| `Type` | `public string Type { get; }` |
| `ChildCount` | `public int ChildCount { get; }` |
| `GivenParameters` | `public Dictionary<string, WidgetAttributeTemplate> GivenParameters { get; }` |
| `Prefab` | `public WidgetPrefab Prefab { get; }` |
| `RootTemplate` | `public WidgetTemplate RootTemplate { get; }` |
| `Attributes` | `public Dictionary<Type, Dictionary<string, WidgetAttributeTemplate>> Attributes { get; set; }` |
| `Tag` | `public object Tag { get; set; }` |
| `AllAttributes` | `public IEnumerable<WidgetAttributeTemplate> AllAttributes { get; }` |

## Key Methods

### AddExtensionData
`public void AddExtensionData(string name, object data)`

**Purpose:** Adds `extension data` to the current collection or state.

### RemoveExtensionData
`public void RemoveExtensionData(string name)`

**Purpose:** Removes `extension data` from the current collection or state.

### AddExtensionData
`public void AddExtensionData(object data)`

**Purpose:** Adds `extension data` to the current collection or state.

### SetAttribute
`public void SetAttribute(WidgetAttributeTemplate attribute)`

**Purpose:** Sets the value or state of `attribute`.

### GetChildAt
`public WidgetTemplate GetChildAt(int i)`

**Purpose:** Gets the current value of `child at`.

### AddChild
`public void AddChild(WidgetTemplate child)`

**Purpose:** Adds `child` to the current collection or state.

### RemoveChild
`public void RemoveChild(WidgetTemplate child)`

**Purpose:** Removes `child` from the current collection or state.

### SwapChildren
`public void SwapChildren(WidgetTemplate child1, WidgetTemplate child2)`

**Purpose:** Handles logic related to `swap children`.

### Instantiate
`public WidgetInstantiationResult Instantiate(WidgetCreationData widgetCreationData, Dictionary<string, WidgetAttributeTemplate> parameters)`

**Purpose:** Handles logic related to `instantiate`.

### OnRelease
`public void OnRelease()`

**Purpose:** Called when the `release` event is raised.

### LoadFrom
`public static WidgetTemplate LoadFrom(PrefabExtensionContext prefabExtensionContext, WidgetAttributeContext widgetAttributeContext, XmlNode node)`

**Purpose:** Loads `from` data.

### SetRootTemplate
`public void SetRootTemplate(WidgetPrefab prefab)`

**Purpose:** Sets the value or state of `root template`.

### AddAttributeTo
`public void AddAttributeTo(WidgetAttributeContext widgetAttributeContext, string name, string value)`

**Purpose:** Adds `attribute to` to the current collection or state.

### RemoveAttributeFrom
`public void RemoveAttributeFrom(WidgetAttributeContext widgetAttributeContext, string fullName)`

**Purpose:** Removes `attribute from` from the current collection or state.

### RemoveAttributeFrom
`public void RemoveAttributeFrom(WidgetAttributeKeyType keyType, string name)`

**Purpose:** Removes `attribute from` from the current collection or state.

### Save
`public void Save(PrefabExtensionContext prefabExtensionContext, XmlNode parentNode)`

**Purpose:** Saves `save` data.

## Usage Example

```csharp
var value = new WidgetTemplate();
value.AddExtensionData("example", data);
```

## See Also

- [Complete Class Catalog](../catalog)