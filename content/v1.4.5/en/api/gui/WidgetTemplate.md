---
title: "WidgetTemplate"
description: "Auto-generated class reference for WidgetTemplate."
---
# WidgetTemplate

**Namespace:** TaleWorlds.GauntletUI.PrefabSystem
**Module:** TaleWorlds.GauntletUI
**Type:** `public class WidgetTemplate`
**Base:** none
**File:** `bin/TaleWorlds.GauntletUI.PrefabSystem/TaleWorlds.GauntletUI.PrefabSystem/WidgetTemplate.cs`

## Overview

`WidgetTemplate` lives in `TaleWorlds.GauntletUI.PrefabSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.PrefabSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `LogicalChildrenLocation` | `public bool LogicalChildrenLocation { get; }` |
| `Id` | `public string Id { get; }` |
| `Prefab` | `public WidgetPrefab Prefab { get; }` |
| `Tag` | `public object Tag { get; set; }` |
| `AllAttributes` | `public IEnumerable<WidgetAttributeTemplate> AllAttributes { get; }` |

## Key Methods

### AddExtensionData
`public void AddExtensionData(string name, object data)`

**Purpose:** Adds extension data to the current collection or state.

```csharp
// Obtain an instance of WidgetTemplate from the subsystem API first
WidgetTemplate widgetTemplate = ...;
widgetTemplate.AddExtensionData("example", data);
```

### RemoveExtensionData
`public void RemoveExtensionData(string name)`

**Purpose:** Removes extension data from the current collection or state.

```csharp
// Obtain an instance of WidgetTemplate from the subsystem API first
WidgetTemplate widgetTemplate = ...;
widgetTemplate.RemoveExtensionData("example");
```

### AddExtensionData
`public void AddExtensionData(object data)`

**Purpose:** Adds extension data to the current collection or state.

```csharp
// Obtain an instance of WidgetTemplate from the subsystem API first
WidgetTemplate widgetTemplate = ...;
widgetTemplate.AddExtensionData(data);
```

### SetAttribute
`public void SetAttribute(WidgetAttributeTemplate attribute)`

**Purpose:** Assigns a new value to attribute and updates the object's internal state.

```csharp
// Obtain an instance of WidgetTemplate from the subsystem API first
WidgetTemplate widgetTemplate = ...;
widgetTemplate.SetAttribute(attribute);
```

### GetChildAt
`public WidgetTemplate GetChildAt(int i)`

**Purpose:** Reads and returns the child at value held by the this instance.

```csharp
// Obtain an instance of WidgetTemplate from the subsystem API first
WidgetTemplate widgetTemplate = ...;
var result = widgetTemplate.GetChildAt(0);
```

### AddChild
`public void AddChild(WidgetTemplate child)`

**Purpose:** Adds child to the current collection or state.

```csharp
// Obtain an instance of WidgetTemplate from the subsystem API first
WidgetTemplate widgetTemplate = ...;
widgetTemplate.AddChild(child);
```

### RemoveChild
`public void RemoveChild(WidgetTemplate child)`

**Purpose:** Removes child from the current collection or state.

```csharp
// Obtain an instance of WidgetTemplate from the subsystem API first
WidgetTemplate widgetTemplate = ...;
widgetTemplate.RemoveChild(child);
```

### SwapChildren
`public void SwapChildren(WidgetTemplate child1, WidgetTemplate child2)`

**Purpose:** Executes the SwapChildren logic.

```csharp
// Obtain an instance of WidgetTemplate from the subsystem API first
WidgetTemplate widgetTemplate = ...;
widgetTemplate.SwapChildren(child1, child2);
```

### Instantiate
`public WidgetInstantiationResult Instantiate(WidgetCreationData widgetCreationData, Dictionary<string, WidgetAttributeTemplate> parameters)`

**Purpose:** Executes the Instantiate logic.

```csharp
// Obtain an instance of WidgetTemplate from the subsystem API first
WidgetTemplate widgetTemplate = ...;
var result = widgetTemplate.Instantiate(widgetCreationData, dictionary<string, parameters);
```

### OnRelease
`public void OnRelease()`

**Purpose:** Invoked when the release event is raised.

```csharp
// Obtain an instance of WidgetTemplate from the subsystem API first
WidgetTemplate widgetTemplate = ...;
widgetTemplate.OnRelease();
```

### LoadFrom
`public static WidgetTemplate LoadFrom(PrefabExtensionContext prefabExtensionContext, WidgetAttributeContext widgetAttributeContext, XmlNode node)`

**Purpose:** Reads from from persistent storage or a stream.

```csharp
// Static call; no instance required
WidgetTemplate.LoadFrom(prefabExtensionContext, widgetAttributeContext, node);
```

### SetRootTemplate
`public void SetRootTemplate(WidgetPrefab prefab)`

**Purpose:** Assigns a new value to root template and updates the object's internal state.

```csharp
// Obtain an instance of WidgetTemplate from the subsystem API first
WidgetTemplate widgetTemplate = ...;
widgetTemplate.SetRootTemplate(prefab);
```

### AddAttributeTo
`public void AddAttributeTo(WidgetAttributeContext widgetAttributeContext, string name, string value)`

**Purpose:** Adds attribute to to the current collection or state.

```csharp
// Obtain an instance of WidgetTemplate from the subsystem API first
WidgetTemplate widgetTemplate = ...;
widgetTemplate.AddAttributeTo(widgetAttributeContext, "example", "example");
```

### RemoveAttributeFrom
`public void RemoveAttributeFrom(WidgetAttributeContext widgetAttributeContext, string fullName)`

**Purpose:** Removes attribute from from the current collection or state.

```csharp
// Obtain an instance of WidgetTemplate from the subsystem API first
WidgetTemplate widgetTemplate = ...;
widgetTemplate.RemoveAttributeFrom(widgetAttributeContext, "example");
```

### RemoveAttributeFrom
`public void RemoveAttributeFrom(WidgetAttributeKeyType keyType, string name)`

**Purpose:** Removes attribute from from the current collection or state.

```csharp
// Obtain an instance of WidgetTemplate from the subsystem API first
WidgetTemplate widgetTemplate = ...;
widgetTemplate.RemoveAttributeFrom(keyType, "example");
```

### Save
`public void Save(PrefabExtensionContext prefabExtensionContext, XmlNode parentNode)`

**Purpose:** Writes the this instance's data to persistent storage or a stream.

```csharp
// Obtain an instance of WidgetTemplate from the subsystem API first
WidgetTemplate widgetTemplate = ...;
widgetTemplate.Save(prefabExtensionContext, parentNode);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
WidgetTemplate widgetTemplate = ...;
widgetTemplate.AddExtensionData("example", data);
```

## See Also

- [Area Index](../)