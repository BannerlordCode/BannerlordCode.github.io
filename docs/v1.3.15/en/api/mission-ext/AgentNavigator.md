
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AgentNavigator`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AgentNavigator

## Mental Model

Treat `AgentNavigator` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

## Class Overview

| Item | Description |
|------|-------------|
| **Namespace** | TaleWorlds.MountAndBlade (Native Engine) |
| **File Path** | Native engine class, no C# source |

## Description

`AgentNavigator` is a native engine class used for managing Agent navigation and pathfinding behavior. This class is implemented in Bannerlord's native C++ engine and is not exposed in the decompiled C# source.

For Agent navigation functionality, consider:
- Using existing movement methods on the `Agent` class
- Intercepting navigation events through `MissionBehavior`
- Referencing `HumanAIComponent` for AI navigation implementation

## Related Classes

- `Agent` - Agent/unit base class
- `HumanAIComponent` - Human AI component
- `MissionBehavior` - Mission behavior base class

## Usage Example

```csharp
var example = new AgentNavigator();
```
