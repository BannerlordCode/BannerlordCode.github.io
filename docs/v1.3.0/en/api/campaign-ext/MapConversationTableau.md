<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapConversationTableau`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MapConversationTableau

**Namespace:** SandBox.View.Map
**Module:** SandBox.View
**Type:** `public class MapConversationTableau`
**Base:** none
**File:** `SandBox.View/Map/MapConversationTableau.cs`

## Overview

`MapConversationTableau` lives in `SandBox.View.Map` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.View.Map` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Texture` | `public Texture Texture { get; }` |

## Key Methods

### SetEnabled
`public void SetEnabled(bool enabled)`

**Purpose:** Sets the value or state of `enabled`.

### SetData
`public void SetData(object data)`

**Purpose:** Sets the value or state of `data`.

### SetTargetSize
`public void SetTargetSize(int width, int height)`

**Purpose:** Sets the value or state of `target size`.

### OnFinalize
`public void OnFinalize(bool clearNextFrame)`

**Purpose:** Called when the `finalize` event is raised.

### OnTick
`public void OnTick(float dt)`

**Purpose:** Called when the `tick` event is raised.

### OnConversationPlay
`public void OnConversationPlay(string idleActionId, string idleFaceAnimId, string reactionId, string reactionFaceAnimId, string soundPath)`

**Purpose:** Called when the `conversation play` event is raised.

## Usage Example

```csharp
var value = new MapConversationTableau();
value.SetEnabled(false);
```

## See Also

- [Complete Class Catalog](../catalog)