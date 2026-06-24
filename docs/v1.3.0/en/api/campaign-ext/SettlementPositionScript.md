<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SettlementPositionScript`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SettlementPositionScript

**Namespace:** SandBox.View.Map
**Module:** SandBox.View
**Type:** `public class SettlementPositionScript : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `SandBox.View/Map/SettlementPositionScript.cs`

## Overview

`SettlementPositionScript` lives in `SandBox.View.Map` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.View.Map` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `StringId` | `public string StringId { get; }` |

## Key Methods

### GetSceneXmlCrcValues
`public override void GetSceneXmlCrcValues(out uint sceneXmlCrc, out uint sceneNavigationMeshCrc)`

**Purpose:** Gets the current value of `scene xml crc values`.

## Usage Example

```csharp
var value = new SettlementPositionScript();
value.GetSceneXmlCrcValues(sceneXmlCrc, sceneNavigationMeshCrc);
```

## See Also

- [Complete Class Catalog](../catalog)