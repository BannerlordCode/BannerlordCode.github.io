<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapCursor`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MapCursor

**Namespace:** SandBox.View.Map
**Module:** SandBox.View
**Type:** `public class MapCursor`
**Base:** none
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.View/SandBox.View.Map/MapCursor.cs`

## Overview

`MapCursor` lives in `SandBox.View.Map` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.View.Map` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Initialize
`public void Initialize(MapScreen parentMapScreen)`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### BeforeTick
`public void BeforeTick(float dt)`

**Purpose:** Handles logic related to `before tick`.

### SetVisible
`public void SetVisible(bool value)`

**Purpose:** Sets the value or state of `visible`.

## Usage Example

```csharp
var value = new MapCursor();
value.Initialize(parentMapScreen);
```

## See Also

- [Complete Class Catalog](../catalog)