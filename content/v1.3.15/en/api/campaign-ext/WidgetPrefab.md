---
title: "WidgetPrefab"
description: "Auto-generated class reference for WidgetPrefab."
---
# WidgetPrefab

**Namespace:** TaleWorlds.GauntletUI.PrefabSystem
**Module:** TaleWorlds.GauntletUI
**Type:** `public class WidgetPrefab`
**Base:** none
**File:** `TaleWorlds.GauntletUI.PrefabSystem/WidgetPrefab.cs`

## Overview

`WidgetPrefab` lives in `TaleWorlds.GauntletUI.PrefabSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.PrefabSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `VisualDefinitionTemplates` | `public Dictionary<string, VisualDefinitionTemplate> VisualDefinitionTemplates { get; set; }` |
| `Constants` | `public Dictionary<string, ConstantDefinition> Constants { get; set; }` |
| `Parameters` | `public Dictionary<string, string> Parameters { get; }` |
| `CustomElements` | `public Dictionary<string, XmlElement> CustomElements { get; }` |
| `RootTemplate` | `public WidgetTemplate RootTemplate { get; }` |

## Key Methods

### LoadFrom
`public static WidgetPrefab LoadFrom(PrefabExtensionContext prefabExtensionContext, WidgetAttributeContext widgetAttributeContext, string path)`

**Purpose:** Reads from from persistent storage or a stream.

```csharp
// Static call; no instance required
WidgetPrefab.LoadFrom(prefabExtensionContext, widgetAttributeContext, "example");
```

### Save
`public XmlDocument Save(PrefabExtensionContext prefabExtensionContext)`

**Purpose:** Writes the this instance's data to persistent storage or a stream.

```csharp
// Obtain an instance of WidgetPrefab from the subsystem API first
WidgetPrefab widgetPrefab = ...;
var result = widgetPrefab.Save(prefabExtensionContext);
```

### Instantiate
`public WidgetInstantiationResult Instantiate(WidgetCreationData widgetCreationData)`

**Purpose:** Executes the Instantiate logic.

```csharp
// Obtain an instance of WidgetPrefab from the subsystem API first
WidgetPrefab widgetPrefab = ...;
var result = widgetPrefab.Instantiate(widgetCreationData);
```

### Instantiate
`public WidgetInstantiationResult Instantiate(WidgetCreationData widgetCreationData, Dictionary<string, WidgetAttributeTemplate> parameters)`

**Purpose:** Executes the Instantiate logic.

```csharp
// Obtain an instance of WidgetPrefab from the subsystem API first
WidgetPrefab widgetPrefab = ...;
var result = widgetPrefab.Instantiate(widgetCreationData, dictionary<string, parameters);
```

### OnRelease
`public void OnRelease()`

**Purpose:** Invoked when the release event is raised.

```csharp
// Obtain an instance of WidgetPrefab from the subsystem API first
WidgetPrefab widgetPrefab = ...;
widgetPrefab.OnRelease();
```

### GetConstantValue
`public ConstantDefinition GetConstantValue(string name)`

**Purpose:** Reads and returns the constant value value held by the this instance.

```csharp
// Obtain an instance of WidgetPrefab from the subsystem API first
WidgetPrefab widgetPrefab = ...;
var result = widgetPrefab.GetConstantValue("example");
```

### GetParameterDefaultValue
`public string GetParameterDefaultValue(string name)`

**Purpose:** Reads and returns the parameter default value value held by the this instance.

```csharp
// Obtain an instance of WidgetPrefab from the subsystem API first
WidgetPrefab widgetPrefab = ...;
var result = widgetPrefab.GetParameterDefaultValue("example");
```

## Usage Example

```csharp
WidgetPrefab.LoadFrom(prefabExtensionContext, widgetAttributeContext, "example");
```

## See Also

- [Area Index](../)