<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BasicCharacterTableau`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BasicCharacterTableau

**Namespace:** TaleWorlds.MountAndBlade.View.Tableaus
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BasicCharacterTableau`
**Base:** none
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.Tableaus/BasicCharacterTableau.cs`

## Overview

`BasicCharacterTableau` lives in `TaleWorlds.MountAndBlade.View.Tableaus` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View.Tableaus` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Texture` | `public Texture Texture { get; }` |

## Key Methods

### OnTick
`public void OnTick(float dt)`

**Purpose:** Called when the `tick` event is raised.

### SetTargetSize
`public void SetTargetSize(int width, int height)`

**Purpose:** Sets the value or state of `target size`.

### OnFinalize
`public void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### DeserializeCharacterCode
`public void DeserializeCharacterCode(string code)`

**Purpose:** Handles logic related to `deserialize character code`.

### RotateCharacter
`public void RotateCharacter(bool value)`

**Purpose:** Handles logic related to `rotate character`.

### SetBannerCode
`public void SetBannerCode(string value)`

**Purpose:** Sets the value or state of `banner code`.

## Usage Example

```csharp
var value = new BasicCharacterTableau();
value.OnTick(0);
```

## See Also

- [Complete Class Catalog](../catalog)