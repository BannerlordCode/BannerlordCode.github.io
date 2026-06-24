<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PlayMusicPoint`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PlayMusicPoint

**Namespace:** SandBox.Objects.AnimationPoints
**Module:** SandBox.Objects
**Type:** `public class PlayMusicPoint : AnimationPoint`
**Base:** `AnimationPoint`
**File:** `SandBox/Objects/AnimationPoints/PlayMusicPoint.cs`

## Overview

`PlayMusicPoint` lives in `SandBox.Objects.AnimationPoints` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Objects.AnimationPoints` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### StartLoop
`public void StartLoop(SoundEvent trackEvent)`

**Purpose:** Handles logic related to `start loop`.

### EndLoop
`public void EndLoop()`

**Purpose:** Handles logic related to `end loop`.

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement()`

**Purpose:** Gets the current value of `tick requirement`.

### OnUseStopped
`public override void OnUseStopped(Agent userAgent, bool isSuccessful, int preferenceIndex)`

**Purpose:** Called when the `use stopped` event is raised.

### ChangeInstrument
`public void ChangeInstrument(Tuple<InstrumentData, float> instrument)`

**Purpose:** Handles logic related to `change instrument`.

## Usage Example

```csharp
var value = new PlayMusicPoint();
value.StartLoop(trackEvent);
```

## See Also

- [Complete Class Catalog](../catalog)