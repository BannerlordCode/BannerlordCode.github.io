<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ConversationPlayArgs`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ConversationPlayArgs

**Namespace:** SandBox.View.Map
**Module:** SandBox.View
**Type:** `public struct ConversationPlayArgs`
**Area:** campaign-ext

## Overview

`ConversationPlayArgs` lives in `SandBox.View.Map`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `SandBox.View.Map` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ConversationTableau` | `public MapConversationTableau ConversationTableau { get; }` |
| `IsConversationActive` | `public bool IsConversationActive { get; set; }` |

## Key Methods

### ConversationPlayArgs
`public struct ConversationPlayArgs(string idleActionId, string idleFaceAnimId, string reactionId, string reactionFaceAnimId, string soundPath)`

**Purpose:** Handles logic related to `conversation play args`.

### SetConversationTableau
`public void SetConversationTableau(MapConversationTableau tableau)`

**Purpose:** Sets the value or state of `conversation tableau`.

### Tick
`public void Tick(float dt)`

**Purpose:** Handles logic related to `tick`.

### OnFinalize
`public void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

## Usage Example

```csharp
// First obtain a ConversationPlayArgs instance from game state, then call one of its public methods
var value = new ConversationPlayArgs();
value.ConversationPlayArgs("example", "example", "example", "example", "example");
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
